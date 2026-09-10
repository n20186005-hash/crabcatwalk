import { beaufortForce, type WeatherData } from "@/lib/weather";

/**
 * 天气建议规则引擎
 * ------------------------------------------------------------------
 * 目标不是「播报天气」，而是直接把观测数据翻译成**游客可以执行的动作**：
 * 「要不要带伞」「今天适合下海吗」「该穿什么」。
 *
 * 四条输出通道：
 *   risks    风险提醒（有才显示，置顶红色）
 *   outfit   出行穿搭
 *   activity 游玩安排（面向海边 / 滩涂 / 户外场景）
 *   pack     随身物品（短词，渲染成标签）
 *
 * 所有条目都是**条件触发**：不满足条件的规则不产出任何内容，
 * 前端对空分组直接隐藏，不会出现「堆一堆用不上的建议」。
 */

export type AdviceLevel = "info" | "warn" | "danger";

export type AdviceItem = {
  id: string;
  icon: string;
  text: string;
  level: AdviceLevel;
};

export type WeatherAdvice = {
  risks: AdviceItem[];
  outfit: AdviceItem[];
  activity: AdviceItem[];
  pack: AdviceItem[];
};

type Locale = "zh" | "en" | "pt";

function pickLocale(locale: string): Locale {
  return locale === "zh" ? "zh" : locale === "pt" ? "pt" : "en";
}

/** 三语模板：同一句建议一次写完三种语言，避免三处维护 */
function tr(l: Locale, zh: string, en: string, pt: string) {
  return l === "zh" ? zh : l === "pt" ? pt : en;
}

/* ───────────────────────── 随身物品词条 ───────────────────────── */

type PackEntry = { icon: string; zh: string; en: string; pt: string };

const PACK_ITEMS: Record<string, PackEntry> = {
  sunscreen: { icon: "🧴", zh: "防晒霜", en: "Sunscreen", pt: "Protetor solar" },
  sunglasses: { icon: "🕶️", zh: "墨镜", en: "Sunglasses", pt: "Óculos de sol" },
  hat: { icon: "🧢", zh: "遮阳帽", en: "Sun hat", pt: "Chapéu" },
  water: { icon: "💧", zh: "充足饮用水", en: "Plenty of water", pt: "Bastante água" },
  heatkit: { icon: "🧊", zh: "防暑用品", en: "Heat-relief items", pt: "Itens para o calor" },
  umbrella: { icon: "☂️", zh: "雨伞", en: "Umbrella", pt: "Guarda-chuva" },
  raincoat: { icon: "🧥", zh: "雨衣", en: "Rain jacket", pt: "Capa de chuva" },
  windbreaker: { icon: "🧥", zh: "防风外套", en: "Windbreaker", pt: "Corta-vento" },
  mask: { icon: "😷", zh: "口罩", en: "Face mask", pt: "Máscara" },
  jacket: { icon: "🧥", zh: "薄外套", en: "Light jacket", pt: "Jaqueta leve" },
  coat: { icon: "🧣", zh: "厚外套、围巾", en: "Warm coat and scarf", pt: "Casaco grosso e cachecol" },
  repellent: { icon: "🦟", zh: "驱蚊液", en: "Insect repellent", pt: "Repelente" },
};

/* ───────────────────────── WMO 代码分组 ───────────────────────── */

/** 毛毛雨与小雨：路面湿滑，但不必改变整日行程 */
const LIGHT_RAIN = [51, 53, 55, 56, 57, 61, 80];
/** 中雨到大雨：影响行程与安全 */
const HEAVY_RAIN = [63, 65, 66, 67, 81, 82];
const THUNDER = [95, 96, 99];
const FOG = [45, 48];

export function buildWeatherAdvice(data: WeatherData, locale: string): WeatherAdvice {
  const l = pickLocale(locale);
  const { current, hourly, daily } = data;
  const marine = data.marine ?? null;

  const risks: AdviceItem[] = [];
  const outfit: AdviceItem[] = [];
  const activity: AdviceItem[] = [];
  /** 用 Map 去重：不同规则可能都需要「防晒霜」，只保留一条 */
  const pack = new Map<string, AdviceItem>();

  const addPack = (key: string) => {
    const entry = PACK_ITEMS[key];
    if (!entry || pack.has(key)) return;
    pack.set(key, {
      id: key,
      icon: entry.icon,
      text: tr(l, entry.zh, entry.en, entry.pt),
      level: "info",
    });
  };

  /* ── 派生信号 ── */
  const next12 = hourly.slice(0, 12);
  const maxPop = next12.length ? Math.max(...next12.map((h) => h.precipProbability)) : 0;
  // 未来 6 小时的天气代码也纳入判断：3 小时后转雨，现在就值得提醒
  const codes = new Set<number>([current.code, ...next12.slice(0, 6).map((h) => h.code)]);
  const hasCode = (...list: number[]) => list.some((c) => codes.has(c));

  const windKmh = current.windSpeed;
  const force = beaufortForce(windKmh);
  const uv = current.uvIndex;
  const temperature = current.temperature;
  const humidity = current.humidity;
  const today = daily[0];
  const spread = today ? today.max - today.min : 0;

  const isHeavyRain = hasCode(...HEAVY_RAIN);
  const isThunder = hasCode(...THUNDER);
  const isLightRain = hasCode(...LIGHT_RAIN) && !isHeavyRain;
  const isFoggy = hasCode(...FOG);
  const waveHeight = marine?.waveHeight ?? null;
  const bigSwell = waveHeight != null && waveHeight >= 1.5;

  /** 户外行程是否还成立：恶劣天气下不再输出「适合户外」这类鼓励性建议 */
  const outdoorOk = !isThunder && !isHeavyRain && !bigSwell && force < 7;
  /** 是否应劝阻下水：雷暴 / 大雨 / 大风 / 大浪任一命中即成立 */
  const swimDiscouraged = !outdoorOk;

  /* ─────────────── 风险提醒（优先级最高，置顶红色） ─────────────── */

  if (isThunder) {
    risks.push({
      id: "thunder",
      icon: "⚡",
      level: "danger",
      text: tr(
        l,
        "有雷电风险：不要下海戏水，不要在树下或空旷滩涂避雨，尽快进入室内。",
        "Thunderstorm risk: stay out of the water, do not shelter under trees or out on the open flats — head indoors.",
        "Risco de raios: não entre no mar, não se abrigue sob árvores nem na lama aberta — procure um local fechado."
      ),
    });
  }

  if (isHeavyRain) {
    risks.push({
      id: "heavy-rain",
      icon: "⛈️",
      level: "danger",
      text: tr(
        l,
        "降雨较强，滩涂、潮沟与低洼路段容易积水，请勿前往海边与红树林边缘。",
        "Heavy rain: the flats, tidal channels and low paths flood easily — stay away from the shoreline and the mangrove edge.",
        "Chuva forte: a lama, os canais de maré e os trechos baixos alagam fácil — evite a beira-mar e a borda do manguezal."
      ),
    });
  }

  if (force >= 7) {
    risks.push({
      id: "wind-high",
      icon: "🌪️",
      level: "danger",
      text: tr(
        l,
        `风力达 ${force} 级，请远离海边礁石、广告牌与临时搭建物，注意高空坠物。`,
        `Wind force ${force}: stay clear of rocks, billboards and temporary structures, and watch for falling debris.`,
        `Força do vento ${force}: afaste-se de rochas, outdoors e estruturas provisórias, e atenção a objetos que caiam.`
      ),
    });
  }

  if (bigSwell) {
    risks.push({
      id: "wave",
      icon: "🌊",
      level: "danger",
      text: tr(
        l,
        `浪高约 ${waveHeight} 米，不建议下海游泳，礁石与滩涂边缘要格外小心。`,
        `Waves around ${waveHeight} m — swimming is not advisable; take extra care near rocks and the flat's edge.`,
        `Ondas de cerca de ${waveHeight} m — não é aconselhável nadar; cuidado redobrado junto a rochas e à borda da lama.`
      ),
    });
  }

  if (isFoggy) {
    risks.push({
      id: "fog",
      icon: "🌫️",
      level: "warn",
      text: tr(
        l,
        "能见度较差，轮渡与航班容易延误，看海观景的效果也会打折扣。",
        "Low visibility — ferries and flights may be delayed and sea views will be washed out.",
        "Visibilidade baixa — balsas e voos podem atrasar e a vista do mar fica comprometida."
      ),
    });
  }

  /* ───────────────────── 出行穿搭 ───────────────────── */

  // 基础穿搭始终给一条，保证这一栏不会空着
  if (temperature >= 32) {
    outfit.push({
      id: "base-outfit",
      icon: "👕",
      level: "warn",
      text: tr(
        l,
        "天气炎热，建议轻薄透气的短袖短裤，尽量待在阴凉处。",
        "Hot: go for light, breathable shorts and short sleeves, and stay in the shade where you can.",
        "Calor: prefira roupas leves e respiráveis e fique na sombra sempre que possível."
      ),
    });
  } else if (temperature >= 28) {
    outfit.push({
      id: "base-outfit",
      icon: "👕",
      level: "info",
      text: tr(
        l,
        "天气闷热，建议穿轻薄透气的衣物。",
        "Warm and humid — light, breathable clothing works best.",
        "Quente e úmido — roupas leves e respiráveis são a melhor escolha."
      ),
    });
  } else if (temperature >= 24) {
    outfit.push({
      id: "base-outfit",
      icon: "👕",
      level: "info",
      text: tr(
        l,
        "气温舒适，短袖或薄长袖都合适。",
        "Comfortable — short sleeves or a thin long sleeve both work.",
        "Confortável — manga curta ou manga longa fina, tanto faz."
      ),
    });
  } else if (temperature >= 18) {
    outfit.push({
      id: "base-outfit",
      icon: "🧥",
      level: "info",
      text: tr(
        l,
        "气温温和，建议长袖加一件薄外套。",
        "Mild — wear long sleeves with a light jacket.",
        "Ameno — manga longa com uma jaqueta leve."
      ),
    });
  } else if (temperature >= 12) {
    outfit.push({
      id: "base-outfit",
      icon: "🧥",
      level: "info",
      text: tr(l, "气温偏凉，建议穿外套或夹克。", "Cool — a coat or jacket is a good idea.", "Fresco — um casaco ou jaqueta cai bem."),
    });
  } else {
    outfit.push({
      id: "base-outfit",
      icon: "🧣",
      level: "warn",
      text: tr(l, "气温较低，注意做好防寒保暖。", "Cold — dress warmly.", "Frio — agasalhe-se bem."),
    });
  }

  // 湿热体感：把「相对湿度 80%」翻译成人话
  if (humidity >= 80 && temperature >= 28) {
    outfit.push({
      id: "humid",
      icon: "💦",
      level: "info",
      text: tr(
        l,
        "空气潮湿、体感偏闷，衣物尽量选速干透气的材质。",
        "It is muggy out — quick-drying, breathable fabrics are more comfortable.",
        "O ar está abafado — tecidos que secam rápido e respiram são mais confortáveis."
      ),
    });
  }

  if (spread > 8) {
    outfit.push({
      id: "spread",
      icon: "🧥",
      level: "info",
      text: tr(
        l,
        `昼夜温差约 ${spread}℃，建议备一件薄外套，方便随时增减。`,
        `A day–night swing of about ${spread}°C — bring a light jacket you can add or remove.`,
        `Amplitude de cerca de ${spread}°C entre dia e noite — leve uma jaqueta leve.`
      ),
    });
    addPack("jacket");
  }

  if (today && today.max <= 10) {
    outfit.push({
      id: "cold",
      icon: "🧣",
      level: "warn",
      text: tr(l, "最高气温偏低，注意防寒保暖。", "A cold day ahead — dress for the chill.", "Dia frio pela frente — vista-se para o frio."),
    });
    addPack("coat");
  }

  if (uv >= 8) {
    outfit.push({
      id: "uv",
      icon: "🧴",
      level: "warn",
      text: tr(
        l,
        `紫外线很强（指数 ${uv}），11:00–15:00 尽量避免长时间暴晒。`,
        `Very high UV (index ${uv}) — avoid prolonged exposure between 11:00 and 15:00.`,
        `UV muito alto (índice ${uv}) — evite exposição prolongada entre 11h e 15h.`
      ),
    });
    addPack("sunscreen");
    addPack("sunglasses");
    addPack("hat");
  } else if (uv >= 5) {
    outfit.push({
      id: "uv",
      icon: "🧴",
      level: "info",
      text: tr(
        l,
        `紫外线较强（指数 ${uv}），出门记得防晒。`,
        `UV is high (index ${uv}) — remember sun protection.`,
        `UV alto (índice ${uv}) — não esqueça a proteção solar.`
      ),
    });
    addPack("sunscreen");
    addPack("sunglasses");
    addPack("hat");
  }

  if (force >= 5 && force < 7) {
    outfit.push({
      id: "wind",
      icon: "💨",
      level: "info",
      text: tr(
        l,
        `风力偏大（${force} 级），帽子容易被吹落，不建议穿宽松长裙或戴无绳遮阳帽。`,
        `Fairly windy (force ${force}) — hats blow off easily; skip loose long dresses and strapless sun hats.`,
        `Vento forte (força ${force}) — chapéus voam fácil; evite vestidos longos soltos e chapéus sem cordão.`
      ),
    });
    addPack("windbreaker");
  }

  if (marine?.seaTemperature != null && marine.seaTemperature < 22 && !swimDiscouraged) {
    outfit.push({
      id: "sst",
      icon: "🥶",
      level: "info",
      text: tr(
        l,
        `海水偏凉（约 ${marine.seaTemperature}℃），下水时间不宜过长。`,
        `The sea is on the cool side (about ${marine.seaTemperature}°C) — keep any swim short.`,
        `A água está fria (cerca de ${marine.seaTemperature}°C) — não fique muito tempo no mar.`
      ),
    });
  }

  /* ───────────────────── 游玩安排 ───────────────────── */

  if (isThunder) {
    activity.push({
      id: "thunder-act",
      icon: "🏛️",
      level: "warn",
      text: tr(
        l,
        "水上项目大概率关闭，建议改成室内行程。",
        "Water activities will most likely be closed — switch to indoor plans.",
        "Atividades na água provavelmente fechadas — mude para um roteiro indoor."
      ),
    });
  }

  if (isHeavyRain) {
    activity.push({
      id: "heavy-rain-act",
      icon: "🏛️",
      level: "warn",
      text: tr(
        l,
        "不建议安排户外游玩，近海游船与露天项目可能临时停运。",
        "Outdoor plans are not advisable — coastal boat trips and open-air attractions may be suspended.",
        "Não é recomendável programar atividades ao ar livre — passeios de barco e atrações abertas podem ser suspensos."
      ),
    });
  } else if (maxPop >= 60) {
    activity.push({
      id: "pop",
      icon: "🌂",
      level: "warn",
      text: tr(
        l,
        `未来 12 小时降水概率最高 ${maxPop}%，下雨的可能性较大，优先安排室内场馆，海边散步与露天项目建议延后。`,
        `Rain probability peaks at ${maxPop}% over the next 12 hours — favour indoor stops and consider postponing the beach and open-air plans.`,
        `A chance de chuva chega a ${maxPop}% nas próximas 12 horas — prefira locais cobertos e deixe a praia e o ar livre para depois.`
      ),
    });
  } else if (isLightRain) {
    activity.push({
      id: "light-rain",
      icon: "🌦️",
      level: "info",
      text: tr(
        l,
        "当前有小雨，木栈道与地面湿滑，走路注意防滑；露天项目体验会打折扣。",
        "Light rain right now — the boardwalk and paths get slippery, and open-air activities lose some of their appeal.",
        "Chuva fraca agora — o calçadão e o piso ficam escorregadios e as atividades ao ar livre perdem graça."
      ),
    });
  }

  if (isFoggy) {
    activity.push({
      id: "fog-act",
      icon: "🏛️",
      level: "warn",
      text: tr(
        l,
        "能见度差，看海观景的效果会打折扣，建议改成室内行程。",
        "Visibility is poor, so sea views will disappoint — an indoor plan works better.",
        "Visibilidade ruim, a vista do mar decepciona — um roteiro indoor funciona melhor."
      ),
    });
  }

  if (isLightRain || maxPop >= 60) addPack("umbrella");
  if (isHeavyRain || isThunder) addPack("raincoat");
  if (isFoggy) addPack("mask");

  if (force >= 7) {
    activity.push({
      id: "wind-high-act",
      icon: "🚫",
      level: "warn",
      text: tr(
        l,
        "户外与海上项目大概率关闭，建议调整行程。",
        "Outdoor and sea-based activities will most likely be closed — adjust your plans.",
        "Atividades ao ar livre e no mar provavelmente fechadas — ajuste o roteiro."
      ),
    });
  } else if (force >= 5) {
    activity.push({
      id: "wind-mid-act",
      icon: "⛵",
      level: "info",
      text: tr(
        l,
        "海边游船与部分露天游乐项目可能停航停运，出发前先确认。",
        "Coastal boat trips and some open-air rides may be suspended — check before you go.",
        "Passeios de barco e alguns brinquedos ao ar livre podem ser suspensos — confirme antes de sair."
      ),
    });
  }

  if (temperature >= 32) {
    activity.push({
      id: "hot-act",
      icon: "⏱️",
      level: "warn",
      text: tr(
        l,
        "缩短连续户外时间，正午到午后早段找有遮荫或空调的地方休息。",
        "Shorten long stretches outdoors; rest in shade or air conditioning from noon into the early afternoon.",
        "Reduza o tempo seguido ao ar livre; descanse na sombra ou no ar-condicionado do meio-dia ao início da tarde."
      ),
    });
    addPack("water");
    addPack("heatkit");
  }

  // 「适合户外」只在确实没有恶劣天气时给，避免和上面的风险提醒自相矛盾
  if (outdoorOk && (current.code === 0 || current.code === 1)) {
    activity.push({
      id: "clear",
      icon: "🌅",
      level: "info",
      text: tr(
        l,
        "天气晴好，适合户外游览；傍晚的海边日落很值得等一等。",
        "Clear skies — great for exploring outdoors, and the sunset over the sea is worth waiting for.",
        "Tempo firme — ótimo para passear ao ar livre, e o pôr do sol no mar vale a espera."
      ),
    });
  } else if (outdoorOk && current.code === 3) {
    activity.push({
      id: "overcast",
      icon: "📷",
      level: "info",
      text: tr(
        l,
        "阴天光线柔和，很适合拍照，也没有暴晒，适合长时间在户外逛游。",
        "Overcast light is soft and flattering for photos with no harsh sun — good for long walks outdoors.",
        "Céu encoberto dá luz suave para fotos e sem sol forte — bom para caminhar bastante ao ar livre."
      ),
    });
  }

  /* ── 海况（海边场景专属） ── */
  if (bigSwell) {
    activity.push({
      id: "wave-act",
      icon: "🚫",
      level: "warn",
      text: tr(
        l,
        "海上项目可能关闭，赶海也请勿深入滩涂。",
        "Sea activities may be closed, and do not walk far out onto the flats.",
        "Atividades no mar podem fechar e não caminhe para longe na lama."
      ),
    });
  } else if (swimDiscouraged) {
    // 风大 / 雷雨时，不再输出「下水需谨慎」这种偏鼓励的说法
    activity.push({
      id: "swim-no",
      icon: "🚫",
      level: "warn",
      text: tr(
        l,
        "受风力或降雨影响，今天不建议下海游泳。",
        "Wind or rain makes swimming inadvisable today.",
        "Vento ou chuva tornam o banho de mar desaconselhável hoje."
      ),
    });
  } else if (waveHeight != null && waveHeight >= 0.8) {
    activity.push({
      id: "wave-mid",
      icon: "🏊",
      level: "info",
      text: tr(
        l,
        `有涌浪（浪高约 ${waveHeight} 米），下水需谨慎，儿童与不会游泳者不建议下海。`,
        `Some swell (about ${waveHeight} m) — enter the water with care; not recommended for children or non-swimmers.`,
        `Há ondulação (cerca de ${waveHeight} m) — entre na água com cautela; não indicado para crianças ou quem não sabe nadar.`
      ),
    });
  } else if (waveHeight != null) {
    activity.push({
      id: "wave-low",
      icon: "🏖️",
      level: "info",
      text: tr(
        l,
        `海况平稳（浪高约 ${waveHeight} 米），适合亲水活动，但仍要留意潮水变化。`,
        `Calm sea (about ${waveHeight} m) — good for water play, but keep an eye on the tide.`,
        `Mar calmo (cerca de ${waveHeight} m) — bom para atividades na água, mas acompanhe a maré.`
      ),
    });
  }

  if (outdoorOk && marine?.seaTemperature != null && marine.seaTemperature >= 22) {
    activity.push({
      id: "sst-ok",
      icon: "🌡️",
      level: "info",
      text: tr(
        l,
        `海水温度约 ${marine.seaTemperature}℃，体感舒适。`,
        `Sea temperature is around ${marine.seaTemperature}°C — comfortable.`,
        `Temperatura do mar em torno de ${marine.seaTemperature}°C — agradável.`
      ),
    });
  }

  /* ── 与潮汐板块联动：只有海况与能见度都合适时才建议赶海 ── */
  if (outdoorOk && !isFoggy) {
    activity.push({
      id: "tide-link",
      icon: "🦀",
      level: "info",
      text: tr(
        l,
        "赶海与滩涂观察请看下方「潮汐时刻」：退潮前后 1–2 小时滩涂最裸露，也最适合观察地蟹。",
        "For the flats and the crabs, see “Tide Times” below — the mud is most exposed in the 1–2 hours around low tide.",
        "Para a lama e os caranguejos, veja “Marés” abaixo — a lama fica mais exposta nas 1–2 horas em torno da baixa-mar."
      ),
    });
  }

  /* ── 兜底：保证「游玩安排」不会整栏为空 ── */
  if (activity.length === 0) {
    activity.push({
      id: "fallback",
      icon: "🚶",
      level: "info",
      text: tr(
        l,
        "没有特别的游玩限制，按原计划安排即可，出发前再看一眼实时数据。",
        "No particular restrictions — go ahead with your plans, and glance at the live data before you set off.",
        "Sem restrições específicas — siga com o roteiro e confira os dados ao vivo antes de sair."
      ),
    });
  }

  // 红树林滩涂蚊虫多，驱蚊液属于「来了就知道有用」的常备项
  addPack("repellent");

  return {
    risks,
    outfit,
    activity,
    pack: Array.from(pack.values()),
  };
}
