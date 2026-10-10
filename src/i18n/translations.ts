import { SITE } from "./site";

export type Locale = "zh" | "en" | "pt";
export type LinkItem = { name: string; url: string };
export type FAQItem = { question: string; answer: string };
export type SourceItem = { name: string; url: string; note: string };
export type TransportOption = { name: string; time: string; price: string; steps: string[] };

export type SeasonInfo = { name: string; description: string };

export type FacilityItem = { icon: string; name: string; detail: string };
export type ContentItem = { title: string; content: string };

export type Translations = {
  nav: { history: string; nature: string; culture: string; architecture: string; monuments: string; weather: string; tide: string; facilities: string; visiting: string; transportation: string; gallery: string; reviews: string; faq: string; location: string };
  hero: { tags: string[]; tagline: string; title: string; titleAlt: string; subtitle: string; cta: string };
  rating: { reviews: string; source: string };
  history: { title: string; intro: string };
  curiosities: { title: string; content: string };
  architecture: { title: string; intro: string; specs: { structure: { title: string; content: string }; design: { title: string; content: string }; optics: { title: string; content: string } }; plaque: { title: string; items: { label: string; value: string }[] } };
  monuments: { title: string; intro: string; items: { name: string; description: string }[] };
  bestTime: { title: string; intro: string; seasons: SeasonInfo[] };
  visiting: { title: string; intro: string; hours: { title: string; content: string; note: string }; price: { title: string; content: string; note: string }; duration: { title: string; content: string; note: string }; tips: { title: string; items: string[] } };
  transportation: { title: string; airport: { title: string; content: string; options: TransportOption[] }; publicTransport?: { title: string; content: string; options: { name: string; description: string; steps: string[] }[] }; cycling?: { title: string; content: string }; localTransport?: { title: string; description?: string; content?: string; steps?: string[] }; city: { title: string; content: string; steps: string[] }; tips: { title: string; items: string[] } };
  gallery: { title: string; viewMore: string };
  reviews: { title: string; subtitle: string; viewMore: string; snapshotNote: string; themesTitle: string; themes: string[]; nearbyTitle: string; nearbyIntro: string; nearbyItems: { name: string; description: string }[] };
  faq: { title: string; subtitle: string; items: FAQItem[] };
  location: { title: string; address: string; openMaps: string };
  about: { title: string; intro: string; breadcrumbTitle: string; nearbyCluster: string };
  nature: { title: string; subtitle: string; intro: string; items: ContentItem[]; conservation: { title: string; content: string } };
  culture: { title: string; subtitle: string; intro: string; items: ContentItem[]; legend: { title: string; content: string } };
  facilities: { title: string; subtitle: string; intro: string; items: FacilityItem[]; note: string };
  weather: {
    title: string;
    subtitle: string;
    now: string;
    feelsLike: string;
    humidity: string;
    wind: string;
    uv: string;
    precipitation: string;
    adviceTitle: string;
    outfitTitle: string;
    activityTitle: string;
    packTitle: string;
    riskTitle: string;
    noRisk: string;
    windForce: string;
    waveHeight: string;
    seaTemp: string;
    hourlyTitle: string;
    dailyTitle: string;
    precipChance: string;
    sunrise: string;
    sunset: string;
    loading: string;
    error: string;
    retry: string;
    refresh: string;
  };
  tide: {
    title: string;
    subtitle: string;
    intro: string;
    currentLabel: string;
    rising: string;
    falling: string;
    high: string;
    low: string;
    nextHigh: string;
    nextLow: string;
    chartTitle: string;
    chartHint: string;
    weekTitle: string;
    loading: string;
    error: string;
    retry: string;
    refresh: string;
    noteTitle: string;
    note: string;
    safetyTitle: string;
    safety: string;
  };
  sources: { title: string; subtitle: string; items: SourceItem[] };
  copyright: string;
  footer: {
    callToAction: string;
    text: string;
    made: string;
    linksTitle: string;
    links: LinkItem[];
    internalTitle: string;
    internalLinks: { name: string; href: string }[];
  };
};

export const translations: Record<Locale, Translations> = {
  zh: {
    nav: { history: "历史沿革", nature: "自然生态", culture: "历史文化", architecture: "景点特色", monuments: "周边玩乐", weather: "天气出行", tide: "潮汐时刻", facilities: "实用设施", visiting: "游览信息", transportation: "交通指南", gallery: "照片集锦", reviews: "游客评价", faq: "常见问题", location: "地图位置" },
    hero: { tags: ["蟹肉美食街", "巨型螃蟹雕像", "阿拉卡茹夜生活"], tagline: "巴西 · 塞尔希培州 · 阿拉卡茹", title: "蟹步道：阿拉卡茹必玩指南", titleAlt: "Passarela do Caranguejo / Crab Catwalk", subtitle: "Passarela do Caranguejo · 蟹肉餐厅 · 巨型螃蟹 · 海边夜色", cta: "探索蟹步道" },
    rating: { reviews: "条评价", source: "Google 评论" },
    history: {
      title: "蟹步道（Crab Catwalk）的历史沿革与意义",
      intro: `**蟹步道（Crab Catwalk / Passarela do Caranguejo）** 位于巴西塞尔希培州首府阿拉卡茹的阿塔莱亚区。它并非孤立存在的景点，而是全长约 6 公里、被誉为“巴西最美海滨大道”的**阿塔莱亚海滨大道（Orla de Atalaia）**的精华南段。\n\n**景点特色**：蟹步道是阿塔莱亚海滨大道（Orla de Atalaia）上最热闹的一段，以密集的蟹肉与海鲜餐厅、入口处的巨型螃蟹雕像，以及入夜后充满活力的街区氛围而闻名。\n\n**文化意义**：当夜幕降临，蟹步道才展现出它最具活力的一面。海风中不仅弥漫着美食的香气，还常伴随着巴西东北部特有的 **Forró（福罗）手风琴现场音乐**。许多餐厅在周末会化身为露天的文化秀场，让游客在海浪声中感受热烈欢快的拉美节奏。`
    },
    curiosities: {
      title: "隐藏的故事：蟹步道的趣味知识",
      content: `**美食天堂**：在蟹步道品尝螃蟹不仅仅是进餐，更是一种沉浸式的文化体验。当地最正宗的吃法是点一份传统的“炖蟹”（Caranguejada），餐厅通常会为每位食客配备标志性的**小木槌和木砧板**。伴随着此起彼伏敲击蟹壳的清脆声响，佐以冰镇的巴西国民鸡尾酒（Caipirinha），这才是最地道的阿拉卡茹之夜。\n\n**傍晚与夜色**：蟹步道在傍晚至深夜最为热闹。餐厅灯光次第亮起，街头飘来 Forró 手风琴音乐，海风与美食香气交织，是阿拉卡茹最具代表性的夜生活场景之一。\n\n**旅游发展**：随着阿拉卡茹旅游业的发展，蟹步道逐渐成为该市最重要的旅游名片之一，吸引了越来越多的国内外游客。`
    },
    architecture: {
      title: "步道特色与结构设计",
      intro: "蟹步道是阿塔莱亚海滨大道上一段以餐饮为主、滨海而建的步行街区，木栈道两侧遍布餐厅、小吃摊与旅游商店，是边走边吃、感受海风最方便的动线。",
      specs: {
        structure: { title: "步道结构", content: "蟹步道采用木质铺装，结构坚固且富有热带风情。步道沿海岸线延伸，两侧餐厅林立，游客可以一边悠闲漫步，一边挑选心仪的蟹肉餐厅。" },
        design: { title: "设计特色", content: "步道的设计充分考虑了游客的体验，设有观景平台、休息区和餐饮区。夜晚在灯光的映衬下，步道更显浪漫氛围。" },
        optics: { title: "观赏体验", content: "从蟹步道可以欣赏到海景与入夜后的街区氛围。白天海水清澈蔚蓝，傍晚至深夜餐厅灯光璀璨、街头音乐四起，是最有氛围的时段。" }
      },
      plaque: {
        title: "景点基本信息",
        items: [
          { label: "名称", value: "蟹步道（Crab Catwalk）/ Passarela do Caranguejo" },
          { label: "位置", value: "阿拉卡茹市阿塔莱亚区，巴西" },
          { label: "开放时间", value: "全天开放（餐厅营业时间各异）" },
          { label: "类型", value: "美食街区、旅游景点" },
          { label: "特色", value: "蟹肉美食、夜间街区" },
          { label: "推荐游览", value: "傍晚至深夜" }
        ]
      }
    },
    monuments: {
      title: "蟹步道周边地标与景点",
      intro: "蟹步道周边有多个值得一游的景点和特色体验，让您的阿拉卡茹之行更加丰富多彩。",
      items: [
        { name: "蟹肉餐厅", description: "蟹步道沿线有数十家蟹肉餐厅，提供各种蟹肉料理。这里是品尝塞尔希培州特色美食的最佳去处。" },
        { name: "巨型螃蟹雕像（Caranguejo Gigante）", description: "步道入口处的巨型螃蟹雕像是最热门的拍照打卡点，几乎每位游客都会在此合影。建议傍晚前往，此时光线柔和，顺光拍摄效果最好。" },
        { name: "街景与夜生活", description: "入夜后的蟹步道最有人气：霓虹灯、现场 Forró 音乐与海风交织，是阿拉卡茹最具代表性的夜生活场景之一。若想看海景与沙滩，可顺道前往相邻的阿塔莱亚海滩。" }
      ]
    },
    bestTime: {
      title: "最佳游览时间",
      intro: "阿拉卡茹全年气候温暖，是理想的海滨旅游目的地。根据不同的季节和天气条件，您可以规划最佳的行程安排。\n\n**旱季（9月-次年3月）**：天气晴朗，降雨少，是游览阿拉卡茹的最佳时间。适合海滩活动、傍晚漫步与户外用餐。\n\n**雨季（4月-8月）**：降雨较多，但气温依然温暖。游客较少，酒店和餐厅价格更优惠，是体验当地文化的绝佳时机。",
      seasons: [
        { name: "🌞 旱季（9月-次年3月）", description: "旱季是游览阿拉卡茹的最佳时间。天气晴朗，降雨少，适合海滩活动和傍晚漫步。建议提前预订餐厅，尤其是周末和节假日。" },
        { name: "🌧️ 雨季（4月-8月）", description: "雨季降雨较多，但气温依然温暖。游客较少，是体验当地文化的绝佳时机。建议携带雨具，并关注天气预报。" }
      ]
    },
    visiting: {
      title: "实用游览指南",
      intro: "蟹步道是探索阿拉卡茹热带海滨风光的理想去处。为了获得最佳体验，请参考以下实用信息。",
      hours: { title: "开放时间", content: "全天开放\n步道本身24小时开放，沿线餐厅通常在 11:00 - 23:00 营业", note: "建议傍晚至夜间前往，可以感受最热闹的街区氛围与灯光。" },
      price: { title: "费用信息", content: "步道免费开放\n餐饮消费根据餐厅档次不同", note: "步道本身免费，但餐饮和娱乐消费需另行支付。" },
      duration: { title: "游览时长", content: "建议游览时间：1-3小时\n可以漫步步道、品尝美食、感受街区夜色与海景。", note: "时间可根据个人兴趣灵活安排。建议在傍晚至夜间前往，可以同时感受夜生活氛围。" },
      tips: { title: "游览贴士与注意事项", items: [
        "⚠️ **防晒措施**：巴西热带阳光强烈，请做好防晒措施，携带防晒霜和帽子",
        "穿着舒适的鞋子，方便在步道上漫步",
        "可以拍照，但请尊重他人隐私",
        "品尝蟹肉时请注意食品安全，选择卫生条件良好的餐厅",
        "傍晚至夜间是最佳游览时段",
        "可以顺便游览附近的阿塔莱亚海滩",
        "🌱 **文明游览**：请保持环境整洁，不要乱扔垃圾，共同维护这一美丽的海滨空间"
      ] }
    },
    transportation: {
      title: "精准交通指南",
      airport: { title: "✈️ 阿拉卡茹机场 (AJU) ➔ 蟹步道", content: "圣玛利亚机场（Aeroporto de Aracaju - Santa Maria）位于阿拉卡茹市，距离蟹步道较近。", options: [
        { name: "出租车/网约车（推荐）", price: "约 20-40 雷亚尔", time: "15-25 分钟", steps: ["在机场到达大厅外寻找官方出租车柜台或使用 Uber/99 等网约车软件", "告知司机前往 Passarela do Caranguejo（蟹步道）", "阿拉卡茹交通相对便利，车程较短"] }
      ]},
      city: { title: "🚶 从阿拉卡茹市中心出发", content: "蟹步道位于阿拉卡茹市的阿塔莱亚区，从市中心出发可以选择多种方式。建议预留半天时间，将蟹步道与附近海滩一并游览。", steps: ["从市中心乘坐出租车或网约车，约 10-20 分钟", "或乘坐公交车前往 Atalaia 方向", "到达后步行进入蟹步道"] },
      tips: { title: "交通与气候小贴士", items: [
        "🌡️ **气候优势**：阿拉卡茹位于热带地区，全年温暖，是巴西气候最舒适的城市之一",
        "市区内建议使用打车软件（Uber/99）更安全便捷",
        "🚗 **自驾与停车**：海滨大道及蟹步道沿线设有较多公共停车位，但在旺季（如 12 月至 2 月）或周末的傍晚，车位会变得相对紧张，建议提前抵达或优先使用网约车出行。",
        "傍晚至夜间前往可以感受最热闹的街区氛围",
        "可以与阿塔莱亚海滩、阿拉卡茹市中心等景点安排在同一行程",
        "阿拉卡茹的交通相对不太拥堵，出行较为方便"
      ] }
    },
    reviews: { 
      title: "游客评价与周边探索", 
      subtitle: "来自蟹步道的声音：Google Maps 评价概览", 
      viewMore: "在 Google Maps 查看更多评价",
      snapshotNote: "数据同步自 Google 地图（2026 年 10 月）的**聚合评分快照**。游客评价普遍聚焦于：成片的蟹肉餐厅、入口处的巨型螃蟹雕像，以及入夜后热闹的街区氛围。",
      themesTitle: "游客最常提到的体验",
      themes: [
        "🔥 数十家蟹肉与海鲜餐厅，从正餐到小吃摊位一应俱全",
        "🦀 入口处的巨型螃蟹雕像是必拍打卡点",
        "🌙 傍晚至深夜的街区最有人气，现场 Forró 音乐与海边夜色",
        "🚶 沿滨海大道轻松散步，海风与街景相伴"
      ],
      nearbyTitle: "周边值得一游的景点",
      nearbyIntro: "游览完蟹步道后，您可以顺道游览以下附近景点：",
      nearbyItems: [
        { name: "阿塔莱亚海滩 (Praia de Atalaia)", description: "阿拉卡茹最著名的海滩之一，拥有金色沙滩和清澈海水，是游泳和日光浴的理想之地。" },
        { name: "阿拉卡茹市中心 (Centro de Aracaju)", description: "塞尔希培州首府的中心区域，拥有历史悠久的教堂、广场和市场，以及美味的地方美食。" },
        { name: "塞尔希培州海边步道 (Orla de Atalaia)", description: "阿拉卡茹最长的海滨大道，沿途有众多餐厅、酒吧和娱乐场所，是体验当地夜生活的好去处。" }
      ]
    },
    gallery: { title: "照片集锦", viewMore: "在 Google Maps 查看更多相片" },
    faq: { title: "常见问题", subtitle: "深入了解蟹步道", items: [
      { question: "蟹步道的开放时间和费用？", answer: "蟹步道全天24小时开放，免费进入。沿线餐厅通常在 11:00 - 23:00 营业，具体营业时间因餐厅而异。" },
      { question: "游览蟹步道需要多长时间？", answer: "建议游览时间：1-3小时。您可以漫步步道、品尝美食、感受街区夜色与海景。如果在餐厅用餐，时间可能会更长。" },
      { question: "蟹步道有什么特色美食？", answer: "蟹步道以蟹肉料理而闻名。这里的餐厅提供各种烹饪方式的蟹肉，包括煮蟹、烤蟹、蟹肉烩饭等。此外还有新鲜的海鲜和热带水果。" },
      { question: "参观蟹步道有什么注意事项？", answer: "⚠️ 防晒措施：巴西热带阳光强烈，请做好防晒。穿着舒适的鞋子。选择卫生条件良好的餐厅。请保持环境整洁，不要乱扔垃圾。" },
      { question: "蟹步道（Crab Catwalk）位于哪里？", answer: "蟹步道（Passarela do Caranguejo）位于巴西塞尔希培州阿拉卡茹市阿塔莱亚区，地址为 Av. Santos Dumont, 5600 - Atalaia, Aracaju - SE, 49035-240，Plus Code 为 2W5X+6J。" },
      { question: "蟹步道需要门票吗？免费吗？", answer: "蟹步道（Passarela do Caranguejo）是公共海滨空间，全年免费向公众开放，仅餐饮与其他消费需另行付费。" },
      { question: "什么时间去蟹步道最好？", answer: "推荐傍晚至夜间前往，可同时感受夜生活氛围与街区灯光。9月至次年3月的旱季天气晴朗、降雨较少，是阿拉卡茹的最佳旅行季节。" },
      { question: "从阿拉卡茹机场怎么去蟹步道？", answer: "从圣玛利亚机场（AJU）乘坐出租车或网约车（Uber/99）约 15-25 分钟，车费约 20-40 雷亚尔，告知司机前往 Passarela do Caranguejo 即可。" }
    ]},
    location: { title: "蟹步道位置与到访指南", address: "Av. Santos Dumont, 5600 - Atalaia\nAracaju - SE, 49035-240\nBrazil\n（巴西阿拉卡茹）", openMaps: "在 Google Maps 查看位置" },
    about: {
      title: "关于蟹步道（Crab Catwalk / Passarela do Caranguejo）",
      intro: "欢迎来到 **Crab Catwalk（蟹步道）**，它广为人知的名字是 **Passarela do Caranguejo**。景点位于 **巴西 · 塞尔希培州 · 阿拉卡茹** 的核心地带，是前往该地区旅行者的首要目的地。\n\n蟹步道坐落于 **阿塔莱亚海滨大道（Orla de Atalaia）** 沿线（Av. Santos Dumont, 5600 - Atalaia），以成片的蟹肉餐厅、入口处的巨型螃蟹雕像与入夜后的热闹街区闻名，全年免费向公众开放。",
      breadcrumbTitle: "地理位置归属",
      nearbyCluster: "游览 **Crab Catwalk（蟹步道）** 时，游客可以轻松探索周边的历史地标与热门景点，包括 **阿塔莱亚海滩（Praia de Atalaia）** 与 **阿塔莱亚海滨大道（Orla de Atalaia）**。"
    },
    nature: {
      title: "自然地理与生态：红树林、潮汐与蟹",
      subtitle: "读懂这片海岸，才能真正读懂蟹步道",
      intro: `蟹步道所在的**阿塔莱亚海滨**，坐落在阿拉卡茹市东侧的海岸平原上。这里并不是一片普通的热带沙滩：城市东面是开阔的大西洋，西面则是**塞尔希培河（Rio Sergipe）**与**瓦扎-巴里斯河（Rio Vaza-Barris）**入海形成的河口湾。河与海之间，发育出大片**红树林（manguezal）**——正是这些红树林，孕育了让阿拉卡茹闻名的螃蟹。\n\n换句话说，**蟹步道餐桌上的那只螃蟹，来自它身后那片泥泞的潮间带森林**。了解这一点，能让你在品尝蟹肉时，也读懂它背后的海岸生态——而非把步道本身当成观察泥滩螃蟹的地点。`,
      items: [
        { title: "① 红树林：海岸的育幼场", content: "红树林是生长在热带、亚热带潮间带的耐盐木本植物群落。它们的支柱根与呼吸根能抓住淤泥、削弱海浪，为幼鱼、虾蟹和贝类提供躲避天敌的场所。塞尔希培州拥有巴西东北部重要的红树林分布区，阿拉卡茹周边的河口正是其中之一。红树林同时是效率极高的「蓝碳」生态系统——单位面积的固碳能力远高于陆地森林，因此保护红树林本身也是气候行动的一部分。" },
        { title: "② 半日潮：每天两次的节奏", content: "这一带属于**半日潮**海域，一天内大致经历两次涨落，潮差通常在 1.5–2.5 米之间。涨潮时，红树林的呼吸根被淹没，蟹类退回洞穴；退潮时泥滩暴露，蟹类出洞觅食，也正是传统「捡蟹人」（catador de caranguejo）下滩作业的时间。步道边水位的变化，就是观察这一自然节律最直观的窗口。" },
        { title: "③ 蟹中之王：Ucides cordatus", content: "让蟹步道得名的，是**红树林地蟹（caranguejo-uçá，学名 Ucides cordatus）**。它终生生活在红树林泥滩的洞穴中，以红树落叶为主要食物，把叶片拖入洞中慢慢分解，因此被称为红树林的「生态系统工程师」——它把落叶转化成养分，重新还给这片湿地。成体甲宽可达 8–9 厘米，生长缓慢、寿命可达十余年，这也正是它需要被保护的原因。" },
        { title: "④ 气候：全年温暖，旱雨分明", content: "阿拉卡茹属**热带干湿季气候（柯本 As 型）**，全年高温，年均气温约 26°C，季节差异主要由降水而非温度决定。大致 **9 月至次年 3 月为旱季**，日照充足、降雨偏少；**4 月至 8 月为雨季**，多为短时强降水。这种节律直接决定了什么时候适合旅行，也决定了红树林里螃蟹的活跃程度。" },
      ],
      conservation: {
        title: "保护与可持续：为什么「andada」期间不能吃蟹",
        content: `每年雨季前后，红树林地蟹会集体出洞交配、抱卵，这种同步的大规模迁徙在巴西被称为 **andada（安达达）**。为保护繁殖群体，巴西环境部门在 andada 期间实行**禁捕期（defeso）**，禁止捕捉与销售；塞尔希培州另有法规限制可捕蟹的最小甲宽，以确保个体至少完成一次繁殖。\n\n因此，**在禁捕期、或看到明显偏小的螃蟹时，请选择不吃**。这不是矫情，而是让这道地方风味能够持续存在的唯一办法。作为科普站点，我们希望游客理解：餐桌上的美味与湿地里的生态，是同一件事的两面。`,
      },
    },
    culture: {
      title: "历史脉络与蟹文化",
      subtitle: "从一座规划城市，到一道地方风味",
      intro: `要理解蟹步道，需要先理解它所在的城市。**阿拉卡茹（Aracaju）建于 1855 年，是巴西第一座经过统一规划而建成的城市**——为摆脱旧首府圣克里斯托旺的港口淤积问题，当时的省长伊纳西奥·巴尔博萨（Inácio Barbosa）在塞尔希培河与瓦扎-巴里斯河之间的平原上，按棋盘式路网从零建起了新都。今天市中心仍保留着整齐的方格街区与以日期命名的街道。\n\n而**蟹步道（Passarela do Caranguejo）**，是这座城市向海生长出的结果。作为**阿塔莱亚海滨大道（Orla de Atalaia）**上最具代表性的一段滨海步行街区，它把「海」与「蟹」这两个阿拉卡茹最重要的符号，浓缩在同一条动线上。`,
      items: [
        { title: "① 阿塔莱亚海滨大道：城市的客厅", content: "阿塔莱亚海滨大道是阿拉卡茹最主要的滨海公共空间，全长约 6 公里，沿岸串联起海滩、广场、运动设施与餐饮区。它并非一天建成：随着城市向东扩展与多轮滨海整治，这里逐渐从单纯的临海道路，演变为本地人晨跑、傍晚散步、周末家庭聚会的「城市客厅」。蟹步道正是这条大道上人气最旺的一段。" },
        { title: "② 蟹与塞尔希培的身份认同", content: "在塞尔希培州，蟹不只是一道菜，更是一种地方身份的象征。州内河口与红树林面积广大，捕蟹（cata do caranguejo）曾是沿海社区重要的传统生计，形成了以家庭为单位、世代相传的作业方式。当地最经典的吃法是 **caranguejada（炖蟹）**：以番茄、洋葱、椰奶与香草慢炖，端上桌时配一副**小木槌和木砧板**——食客自己动手敲开蟹壳，敲击声此起彼伏，成为蟹步道夜晚特有的背景音。" },
        { title: "③ Forró：海风里的东北部音乐", content: "巴西东北部的代表性民间音乐 **Forró（福罗）**，以手风琴（sanfona）、三角铁（triângulo）与扎本巴鼓（zabumba）构成经典三重奏。它最初与乡村节庆和圣若昂节（Festa de São João，6 月）紧密相连，如今已扩展到城市夜生活。许多蟹步道沿线的餐厅在傍晚安排现场演奏，游客吃蟹、听乐、看海，三者叠加成了阿拉卡茹最典型的夜晚。" },
        { title: "④ 一个常被忽略的地理事实", content: "阿拉卡茹的海岸大致朝东，因此**「太阳落入海平面」的画面在这里并不发生**。蟹步道之所以被视为观景黄金时段，是因为傍晚太阳西沉时，光线以极低的角度掠过城市与河口上空，把云层、海面和滩涂染成金红色——这属于**大气散射**造成的霞光反射，与海边日落各有各的观赏方式。想真正看到海上日出，需要清晨前往。" },
      ],
      legend: {
        title: "民间说法与传说",
        content: `在巴西东北部的民间叙事里，蟹常常不只是「食物」，而是**机敏与坚韧的象征**：它横着走、壳硬、善钻泥洞、被抓住也不轻易松钳，因此常被用来形容一个人「难缠但可敬」。红树林地蟹集体出洞的 andada，也被沿海社区视为自然节律的信号，老一辈会据此判断雨季与捕鱼时节。\n\n需要说明的是，这些属于**口耳相传的地方观念与民间隐喻**，并非可考证的历史事件。本站作为科普性质的非营利站点，对无法核实来源的「传说故事」不做艺术加工与演绎，只呈现有据可查的地理、生态与文化事实，以免误导读者。`,
      },
    },
    facilities: {
      title: "实用设施与服务类型",
      subtitle: "按类别了解周边能获得什么服务，不涉及任何具体商户推荐",
      intro: "以下信息用于帮助游客**规划需求**，按服务类型归纳，不包含任何具体商户名称、品牌或价格承诺。实际营业情况、收费与可用性会随季节和时段变化，出行前请以现场指示与官方信息为准。",
      items: [
        { icon: "🚻", name: "公共洗手间与无障碍", detail: "海滨大道沿线设有公共卫生间，部分由商户经营并可能收取少量使用费。木栈道整体平坦，主入口与观景段通常具备轮椅通行条件，但个别餐饮区入口可能有台阶。建议随身携带纸巾。" },
        { icon: "🅿️", name: "停车", detail: "沿海滨大道的城市道路两侧通常可停车，部分路段在特定时段为限时或收费车位，周边也有私营停车场。傍晚日落时段与周末、节假日车位最为紧张，建议提前到达，或优先选择步行、网约车抵达。" },
        { icon: "🍽️", name: "餐饮（类型）", detail: "以蟹类与海鲜料理餐馆为主，另有小吃摊、烤串、果汁与椰子水摊点。既有面向游客的正式餐厅，也有更休闲的平价小店。多数餐厅支持刷卡，但小摊位通常只收现金或即时转账，建议备少量现金。" },
        { icon: "🏨", name: "住宿（类型）", detail: "阿塔莱亚区集中了从经济型到中高档的酒店、旅馆（pousada）与度假公寓，多数步行或短程车程即可抵达海滨大道。旺季（年末至狂欢节、7 月假期）价格明显上涨，建议提前预订，并确认是否含早餐与停车位。" },
        { icon: "🛒", name: "商超与便利店", detail: "阿塔莱亚区分布有超市、便利店与药房，可购买饮用水、防晒用品、驱蚊液与常用药品。海滨沿线另有纪念品与手工艺品摊位，营业时间多在傍晚至夜间。" },
        { icon: "⛽", name: "加油与充电", detail: "通往海滨大道的主要城市干道沿线设有加油站，通常附带便利店与卫生间。电动汽车充电桩在本市仍属少数且分布零散，建议自驾游客提前确认沿途充电条件并做好里程规划。" },
        { icon: "🏥", name: "医疗与药店", detail: "阿塔莱亚区设有药房与私立医疗机构，可处理轻微外伤、中暑与肠胃不适；重症请前往市级综合医院。紧急医疗电话为 192，消防为 193。强烈建议出行前购买涵盖医疗与意外的旅行保险。" },
        { icon: "💳", name: "银行与支付", detail: "区内分布有银行网点与自动取款机（ATM）。银行卡与移动支付在餐厅、酒店、超市普及度较高，但夜市摊位、海滩小贩与部分停车点仍以现金为主。建议避免在夜间于偏僻处取现。" },
        { icon: "🛡️", name: "安全与应急", detail: "海滨大道夜间照明良好、人流较多，属于相对安全的旅游区域，但仍建议：贵重物品贴身存放、不在海滩上留置物品、夜间避免前往照明不足的滩涂区域。报警电话 190，医疗急救 192，消防 193。" },
      ],
      note: "说明：本页面为公益性科普网站，以上内容仅按**服务类型**做客观归纳，不推荐、不背书、不关联任何具体商户，也不构成消费建议。",
    },
    weather: {
      title: "实时天气与出行建议",
      subtitle: "看天气决定要不要带伞、几点出门最舒服",
      now: "当前观测",
      feelsLike: "体感温度",
      humidity: "相对湿度",
      wind: "风速",
      uv: "紫外线",
      precipitation: "降水量",
      adviceTitle: "出行建议",
      outfitTitle: "出行穿搭",
      activityTitle: "游玩安排",
      packTitle: "随身物品",
      riskTitle: "风险提醒",
      noRisk: "暂无显著天气风险，按原计划出行即可。",
      windForce: "风力",
      waveHeight: "浪高",
      seaTemp: "海水温度",
      hourlyTitle: "未来 12 小时",
      dailyTitle: "未来 7 天预报",
      precipChance: "降水概率",
      sunrise: "日出",
      sunset: "日落",
      loading: "正在获取最新天气…",
      error: "暂时无法获取天气数据，请稍后重试。",
      retry: "重新获取",
      refresh: "刷新",
    },
    tide: {
      title: "潮汐时刻与滩涂节奏",
      subtitle: "涨潮看海、退潮看蟹——读懂半日潮，选对下滩时间",
      intro: `阿拉卡茹外海属于**半日潮**海域，一天内大致经历两次涨潮与两次退潮，潮差通常在 1.5–2.5 米之间。下面的潮位曲线基于潮汐与气象模型计算，可以帮助你判断**此刻潮水在涨还是在退**，以及**下一次高低潮出现在几点**。\n\n对游客来说，这直接决定了两件事：**退潮时滩涂暴露**，是观察红树林地蟹出洞觅食、以及沿滩涂散步的最佳时段；**涨潮时红树林呼吸根被淹没**，海面更靠近步道，更适合看海与拍照。`,
      currentLabel: "当前潮位",
      rising: "涨潮中",
      falling: "退潮中",
      high: "高潮",
      low: "低潮",
      nextHigh: "下次高潮",
      nextLow: "下次低潮",
      chartTitle: "未来 24 小时潮位曲线",
      chartHint: "纵轴为相对平均海平面的潮位高度，横轴为当地时间；曲线上的圆点标出可预测的高潮与低潮。",
      weekTitle: "未来 7 天高低潮时刻",
      loading: "正在获取潮汐数据…",
      error: "暂时无法获取潮汐数据，请稍后重试。",
      retry: "重新获取",
      refresh: "刷新",
      noteTitle: "潮汐是怎么算出来的",
      note: "潮汐主要由月球与太阳的引潮力决定，因此具有很强的周期性；与此同时，气压、风与近岸地形会让实际潮位偏离纯天文预测。本模块给出的高低潮时刻是**基于数值潮汐模型的计算结果**，适合用于规划行程。若涉及下滩作业、游泳或其他涉水活动，请以当地海事与气象部门的官方发布为准。",
      safetyTitle: "滩涂安全提示",
      safety: "退潮后的滩涂看似平坦，实则可能有大面积淤泥与潮沟，而涨潮时海水回灌的速度很快。请勿单独深入滩涂，随时留意回岸路线，不要在被潮水包围的沙洲上停留；雨季或大风天气更应远离滩涂边缘。",
    },
    sources: { title: "资料来源与参考", subtitle: "本指南的内容参考以下权威来源，以持续保证信息的准确性与时效性。", items: [
      { name: "Google 地图：Crab Catwalk 官方资料页", url: SITE.mapsShareUrl, note: "评分、评价数量与地址的核对来源" },
      { name: "巴西旅游部（Ministério do Turismo）", url: SITE.govtTourismUrl, note: "巴西官方旅游资讯" },
      { name: "阿拉卡茹市政府官网", url: SITE.cityGovUrl, note: "地方文化活动与地标推广信息" },
      { name: "巴西国家地理与统计局（IBGE）", url: SITE.ibgeUrl, note: "阿拉卡茹市官方地理与历史数据" },
      { name: "维基百科：Passarela do Caranguejo", url: SITE.wikipediaUrl, note: "背景资料参考" },
      { name: "Open-Meteo 天气 API", url: "https://open-meteo.com/", note: "页面实时天气与紫外线数据" },
      { name: "Open-Meteo 海洋与潮汐 API", url: "https://open-meteo.com/en/docs/marine-weather-api", note: "页面潮位曲线与高低潮时刻" },
      { name: "Google 地图平台", url: "https://www.google.com/maps", note: "地图嵌入与位置核验" }
    ]},
    copyright: "图片版权说明：本网站所展示的所有图片产权及版权均归原摄影者所有。",
    footer: { callToAction: "作为阿拉卡茹的重要旅游地标，请与我们一起爱护环境、尊重当地文化，共同维护这一美丽的热带海滨空间。", text: "© 2026 蟹步道指南 · 保留所有权利。\n本网站是一个独立的第三方指南项目，致力于准确传播蟹步道信息。我们与巴西政府或其他官方机构没有任何关联。", made: "本网站是一个独立的第三方指南项目。为探索者与学习者而制。", linksTitle: "相关链接", links: [
      { name: "巴西联邦政府", url: "https://www.gov.br/pt-br" },
      { name: "巴西旅游部", url: "https://www.gov.br/turismo/pt-br" },
      { name: "巴西官方电子签证系统", url: "https://brazil.vfsevisa.com/" },
      { name: "巴西国家地理与统计局（IBGE）- 阿拉卡茹市官方地理历史库", url: "https://cidades.ibge.gov.br/brasil/se/aracaju/historico" },
      { name: "维基百科：螃蟹步道", url: "https://pt.wikipedia.org/wiki/Passarela_do_Caranguejo" },
      { name: "阿拉卡茹市政府官网：地标文化身份推广", url: "https://aracaju.se.gov.br/noticias/114269/prefeitura_de_aracaju_promove_festival_do_caranguejo_na_orla_da_atalaia.html" }
    ], internalTitle: "站内导航", internalLinks: [
      { name: "蟹步道（Passarela do Caranguejo）餐厅与周边", href: "#monuments" },
      { name: "蟹步道最佳游览时间", href: "#best-time" },
      { name: "怎么去蟹步道：交通指南", href: "#transportation" },
      { name: "蟹步道常见问题解答", href: "#faq" }
    ]}
  },
  en: {
    nav: { history: "History", nature: "Nature", culture: "Culture", architecture: "Features", monuments: "Nearby", weather: "Weather", tide: "Tides", facilities: "Facilities", visiting: "Visit Info", transportation: "Transportation", gallery: "Gallery", reviews: "Reviews", faq: "FAQ", location: "Location" },
    hero: { tags: ["Crab Dining Street", "Giant Crab Statue", "Aracaju Nightlife"], tagline: "Brazil · Sergipe · Aracaju", title: "Crab Catwalk: Things to Do in Aracaju", titleAlt: "Passarela do Caranguejo", subtitle: "Passarela do Caranguejo · Crab Restaurants · Giant Crab · Seaside Nights", cta: "Explore Crab Catwalk" },
    rating: { reviews: "reviews", source: "Google Reviews" },
    history: {
      title: "History & Significance of Crab Catwalk",
      intro: `**Crab Catwalk (Passarela do Caranguejo)** is located in the Atalaia district of Aracaju, the capital of Sergipe state in Brazil. It is not an isolated attraction, but rather the essence of the southern section of the **Orla de Atalaia** (Atalaia Seaside Avenue), a 6-kilometer stretch renowned as "Brazil's most beautiful seaside avenue".\n\n**Attraction Features**: The Crab Catwalk is the liveliest stretch of the Orla de Atalaia, known for its dense cluster of crab and seafood restaurants, the giant crab statue at the entrance, and the vibrant street atmosphere after dark.\n\n**Cultural Significance**: When night falls, the Crab Catwalk reveals its most vibrant side. The sea breeze is not only filled with the aroma of food, but also often accompanied by live **Forró accordion music**, unique to northeastern Brazil. Many restaurants transform into open-air cultural stages on weekends, allowing visitors to feel the passionate and cheerful Latin American rhythms amidst the sound of ocean waves.`
    },
    curiosities: {
      title: "Hidden Stories: Fun Facts About Crab Catwalk",
      content: `**Food Paradise**: Tasting crab at the Crab Catwalk is not just dining, but an immersive cultural experience. The most authentic local way is to order a traditional "Caranguejada" (crab stew). Restaurants usually provide each diner with an iconic **small wooden mallet and cutting board**. Accompanied by the crisp sound of cracking crab shells and a chilled Brazilian national cocktail (Caipirinha), this is the most authentic Aracaju night.\n\n**Evenings & Nightlife**: The Crab Catwalk is at its liveliest from late afternoon to late night. Restaurant lights come on, Forró accordion music drifts through the street, and the sea breeze mixes with the aroma of food — one of Aracaju's most representative nightlife scenes.\n\n**Tourism Development**: With the development of tourism in Aracaju, the Crab Catwalk has gradually become one of the city's most important tourist attractions, attracting more and more domestic and foreign tourists.`
    },
    architecture: {
      title: "Walkway Features & Structure Design",
      intro: "The Crab Catwalk is a seaside dining street along the Orla de Atalaia, built for strolling and eating. The boardwalk is lined with restaurants, snack stands and tourist shops — the most convenient route to walk, eat and feel the sea breeze.",
      specs: {
        structure: { title: "Walkway Structure", content: "The Crab Catwalk is paved with wooden planks, with a sturdy structure and tropical flair. It extends along the coastline, lined with restaurants, where visitors can stroll leisurely and pick their favourite crab spot." },
        design: { title: "Design Features", content: "The design of the walkway fully considers the visitor experience, with viewing platforms, rest areas and dining areas. At night, under the lighting, the walkway appears even more romantic." },
        optics: { title: "Viewing Experience", content: "From the Crab Catwalk you can enjoy the sea view and the street's night atmosphere. The water is clear and blue by day; from late afternoon to late night the restaurant lights come on and street music fills the air — the most atmospheric time to be there." }
      },
      plaque: {
        title: "Basic Attraction Information",
        items: [
          { label: "Name", value: "Crab Catwalk / Passarela do Caranguejo" },
          { label: "Location", value: "Atalaia District, Aracaju, Brazil" },
          { label: "Opening Hours", value: "Open 24 hours (restaurant hours vary)" },
          { label: "Type", value: "Seaside dining street, Tourist attraction" },
          { label: "Features", value: "Crab cuisine, Nightlife" },
          { label: "Best Time to Visit", value: "Late afternoon to late night" }
        ]
      }
    },
    monuments: {
      title: "Landmarks & Attractions Around Passarela do Caranguejo",
      intro: "There are several attractions and special experiences worth visiting around the Crab Catwalk, making your trip to Aracaju more colorful.",
      items: [
        { name: "Crab Restaurants", description: "There are dozens of crab restaurants along the Crab Catwalk, offering various crab dishes. This is the best place to taste Sergipe's specialty cuisine." },
        { name: "Giant Crab Statue (Caranguejo Gigante)", description: "The giant crab statue near the entrance to the walkway is the most popular photo spot — almost every visitor stops for a picture. Go in the late afternoon, when the light is soft and falls on the front of the statue." },
        { name: "Street Scenes & Nightlife", description: "The Crab Catwalk is at its liveliest after dark: neon lights, live Forró music and the sea breeze combine into one of Aracaju's most representative nightlife scenes. For sea views and sand, head to the neighbouring Atalaia Beach." }
      ]
    },
    bestTime: {
      title: "Best Time to Visit",
      intro: "Aracaju has warm weather year-round, making it an ideal seaside tourist destination. You can plan the best itinerary according to different seasons and weather conditions.\n\n**Dry Season (September-March)**: Sunny weather with little rain, the best time to visit Aracaju. Suitable for beach activities, evening strolls and outdoor dining.\n\n**Rainy Season (April-August)**: More rainfall, but temperatures remain warm. Fewer tourists, better prices for hotels and restaurants, an excellent time to experience local culture.",
      seasons: [
        { name: "🌞 Dry Season (September-March)", description: "The dry season is the best time to visit Aracaju. Sunny weather with little rain, suitable for beach activities and evening strolls. It is recommended to book restaurants in advance, especially on weekends and holidays." },
        { name: "🌧️ Rainy Season (April-August)", description: "More rainfall in the rainy season, but temperatures remain warm. Fewer tourists, an excellent time to experience local culture. It is recommended to bring rain gear and pay attention to weather forecasts." }
      ]
    },
    visiting: {
      title: "Practical Visit Guide",
      intro: "The Crab Catwalk is an ideal place to explore the tropical seaside scenery of Aracaju. For the best experience, please refer to the following practical information.",
      hours: { title: "Opening Hours", content: "Open 24 hours\nWalkway open all day, restaurants usually 11:00 - 23:00", note: "It is best to go from late afternoon to night, when the street atmosphere and lights are liveliest." },
      price: { title: "Cost Information", content: "Walkway free admission\nDining costs vary by restaurant", note: "The walkway itself is free, but dining and entertainment costs are paid separately." },
      duration: { title: "Visit Duration", content: "Suggested visit time: 1-3 hours\nYou can stroll the walkway, taste food, and enjoy the night-time street scene and sea views.", note: "Time can be arranged flexibly according to personal interest. It is recommended to go from late afternoon to night to feel the nightlife atmosphere." },
      tips: { title: "Visit Tips & Important Notes", items: [
        "⚠️ **Sun Protection**: Brazilian tropical sun is strong, please take sun protection measures, bring sunscreen and hat",
        "Wear comfortable shoes for walking on the walkway",
        "Photography is allowed, but please respect others' privacy",
        "Pay attention to food safety when tasting crab, choose restaurants with good hygiene conditions",
        "Late afternoon and night are the best visiting times",
        "You can also visit the nearby Atalaia Beach",
        "🌱 **Civilized Visit**: Please keep the environment clean, do not litter, and jointly maintain this beautiful seaside space"
      ] }
    },
    transportation: {
      title: "Precise Transportation Guide",
      airport: { title: "✈️ Aracaju Airport (AJU) ➔ Crab Catwalk", content: "Santa Maria Airport (Aeroporto de Aracaju - Santa Maria) is located in Aracaju city, relatively close to the Crab Catwalk.", options: [
        { name: "Taxi / Ride-hailing (Recommended)", price: "About 20-40 Brazilian Reais", time: "15-25 minutes", steps: ["Find official taxi counters at the airport arrivals hall or use ride-hailing apps like Uber/99", "Tell the driver you are going to Passarela do Caranguejo (Crab Catwalk)", "Aracaju traffic is relatively convenient, with a short driving distance"] }
      ]},
      city: { title: "🚶 From Downtown Aracaju", content: "The Crab Catwalk is located in the Atalaia district of Aracaju. You can choose various ways to get there from the city center. It is recommended to allocate half a day to visit the Crab Catwalk together with nearby beaches.", steps: ["Take a taxi or ride-hailing from downtown, about 10-20 minutes", "Or take a bus towards Atalaia", "After arrival, walk into the Crab Catwalk"] },
      tips: { title: "Transportation & Climate Tips", items: [
        "🌡️ **Climate Advantage**: Aracaju is located in the tropical region, warm all year round, one of the most comfortable cities in Brazil in terms of climate",
        "Using ride-hailing apps (Uber/99) in the city is safer and more convenient",
        "🚗 **Driving & Parking**: There are many public parking spaces along the seaside avenue and Crab Catwalk, but during peak season (December to February) or weekend evenings, parking can be relatively tight. It's recommended to arrive early or prioritize ride-hailing services.",
        "Go from late afternoon to night to enjoy the lively street atmosphere",
        "Combine with Atalaia Beach, downtown Aracaju and other attractions in the same trip",
        "Aracaju's traffic is relatively less congested, making travel more convenient"
      ] }
    },
    reviews: { 
      title: "Visitor Reviews & Nearby Exploration", 
      subtitle: "Crab Catwalk on Google Maps: an overview of visitor ratings",
      viewMore: "View More Reviews on Google Maps",
      snapshotNote: "**Aggregated rating snapshot** from Google Maps (October 2026). Reviews consistently highlight the cluster of crab restaurants, the giant crab statue at the entrance, and the lively night-time street atmosphere.",
      themesTitle: "What visitors mention most",
      themes: [
        "🔥 Dozens of crab and seafood restaurants, from full-service dining to snack stalls",
        "🦀 The giant crab statue at the entrance is a must-photo spot",
        "🌙 The street is liveliest from late afternoon to late night, with live Forró music and seaside lights",
        "🚶 An easy stroll along the waterfront avenue, with sea breeze and street views"
      ],
      nearbyTitle: "Nearby Attractions Worth Visiting",
      nearbyIntro: "After visiting Crab Catwalk, you can easily visit the following nearby attractions:",
      nearbyItems: [
        { name: "Atalaia Beach (Praia de Atalaia)", description: "One of the most famous beaches in Aracaju, with golden sand and clear water, ideal for swimming and sunbathing." },
        { name: "Downtown Aracaju (Centro de Aracaju)", description: "The capital of Sergipe state, home to historic churches, squares and markets, as well as delicious local cuisine." },
        { name: "Orla de Atalaia", description: "The longest seaside avenue in Aracaju, lined with numerous restaurants, bars and entertainment venues, a great place to experience the local nightlife." }
      ]
    },
    gallery: { title: "Photo Gallery", viewMore: "View More Photos on Google Maps" },
    faq: { title: "Frequently Asked Questions", subtitle: "Learn More About Crab Catwalk", items: [
      { question: "What are the opening hours and cost of Crab Catwalk?", answer: "The Crab Catwalk is open 24 hours a day and free to enter. Restaurants along the walkway usually operate from 11:00 - 23:00, specific hours vary by restaurant." },
      { question: "How long does it take to visit Crab Catwalk?", answer: "Suggested visit time: 1-3 hours. You can stroll the walkway, taste food, and enjoy the night-time street scene and sea views. If you dine at restaurants, it may take longer." },
      { question: "What specialty foods are available at Crab Catwalk?", answer: "Crab Catwalk is famous for its crab dishes. Restaurants here offer crab prepared in various cooking styles, including boiled crab, grilled crab, crab rice, etc. There are also fresh seafood and tropical fruits." },
      { question: "What are the important notes for visiting Crab Catwalk?", answer: "⚠️ Sun Protection: Brazilian tropical sun is strong, please protect yourself from the sun. Wear comfortable shoes. Choose restaurants with good hygiene conditions. Please keep the environment clean and do not litter." },
      { question: "Where is Crab Catwalk (Passarela do Caranguejo) located?", answer: "Crab Catwalk is located in the Atalaia district of Aracaju, Sergipe, Brazil, at Av. Santos Dumont, 5600 - Atalaia, Aracaju - SE, 49035-240. Its Plus Code is 2W5X+6J." },
      { question: "Is Crab Catwalk free to visit?", answer: "Yes. Crab Catwalk (Passarela do Caranguejo) is a public seaside space and is free to visit year-round; only dining and other purchases are paid separately." },
      { question: "What is the best time to visit Crab Catwalk?", answer: "Late afternoon to night is best, so you can enjoy both the evening street scene and the lively night atmosphere. The dry season from September to March offers sunny weather with little rain." },
      { question: "How do I get to Crab Catwalk from Aracaju airport?", answer: "From Santa Maria Airport (AJU), a taxi or ride-hailing service (Uber/99) takes about 15-25 minutes and costs around 20-40 Brazilian Reais. Just tell the driver you are going to Passarela do Caranguejo." }
    ]},
    location: { title: "Location & How to Visit Passarela do Caranguejo in Aracaju", address: "Av. Santos Dumont, 5600 - Atalaia\nAracaju - SE, 49035-240\nBrazil", openMaps: "View Location on Google Maps" },
    about: {
      title: "About Crab Catwalk (Passarela do Caranguejo)",
      intro: "Welcome to **Crab Catwalk**, widely recognized as the central **Passarela do Caranguejo**. Located in the heart of **Aracaju**, **Sergipe**, **Brazil**, this destination serves as a primary hub for travelers visiting the region.\n\nThe promenade runs along the **Orla de Atalaia** waterfront at Av. Santos Dumont, 5600 - Atalaia, and is famous for its cluster of crab restaurants, the giant crab statue at the entrance and its lively night-time street atmosphere. It is open to the public free of charge all year round.",
      breadcrumbTitle: "Geographic hierarchy",
      nearbyCluster: "When visiting **Crab Catwalk**, visitors can easily explore surrounding historical landmarks and points of interest, including **Praia de Atalaia (Atalaia Beach)** and **Orla de Atalaia (Atalaia Waterfront)**."
    },
    nature: {
      title: "Geography & Ecology: Mangroves, Tides and Crabs",
      subtitle: "Understanding this coastline is the key to understanding the promenade",
      intro: `The **Atalaia waterfront** where the promenade sits lies on the coastal plain east of Aracaju. This is not an ordinary tropical beach: the city faces the open Atlantic to the east, while to the west the **Rio Sergipe** and the **Rio Vaza-Barris** meet the sea in wide estuaries. Between river and ocean, extensive **mangroves (manguezal)** have developed — and those mangroves are what produced the crab that made Aracaju famous.\n\nIn other words, **the crab on your plate at the promenade comes from the muddy intertidal forest just behind it**. Knowing this lets you read the coastal ecology behind the dish as you eat — the promenade itself is a dining street, not a place to watch mudflat crabs up close.`,
      items: [
        { title: "① Mangroves: the nursery of the coast", content: "Mangroves are salt-tolerant woody plant communities that grow in tropical and subtropical intertidal zones. Their prop roots and pneumatophores trap sediment, absorb wave energy and give juvenile fish, shrimp, crabs and shellfish a place to hide from predators. Sergipe holds some of the most important mangrove areas in northeastern Brazil, and the estuaries around Aracaju are part of them. Mangroves are also exceptionally efficient 'blue carbon' ecosystems — storing far more carbon per hectare than most terrestrial forests, which makes protecting them a form of climate action too." },
        { title: "② Semidiurnal tides: a rhythm twice a day", content: "This stretch of coast experiences **semidiurnal tides**, with roughly two high and two low waters each day and a tidal range usually between 1.5 and 2.5 metres. At high tide the mangrove pneumatophores are submerged and the crabs retreat into their burrows; at low tide the mudflats are exposed, the crabs emerge to feed, and traditional crab collectors (catadores de caranguejo) head out onto the flats. The water level beside the promenade is the most direct window onto this rhythm." },
        { title: "③ The crab at the centre of it all: Ucides cordatus", content: "The species that gives the promenade its name is the **mangrove land crab (caranguejo-uçá, Ucides cordatus)**. It spends its entire life in burrows in the mangrove mud, feeding mainly on fallen mangrove leaves that it drags underground to decompose — which is why it is described as an 'ecosystem engineer' of the mangrove, converting leaf litter back into nutrients for the wetland. Adults can reach 8–9 cm across the carapace, grow slowly and may live more than a decade, which is exactly why the species needs protection." },
        { title: "④ Climate: warm all year, with a clear dry season", content: "Aracaju has a **tropical wet-and-dry climate (Köppen As)**. Temperatures stay high year-round, averaging around 26°C, and the seasons are defined by rainfall rather than temperature. Broadly, **September to March is the dry season**, with plenty of sunshine and little rain, while **April to August is the rainy season**, characterised by short, intense downpours. That rhythm determines both when it is comfortable to travel and how active the crabs are in the mangroves." },
      ],
      conservation: {
        title: "Conservation: why crab is off the menu during the 'andada'",
        content: `Around the rainy season, mangrove land crabs leave their burrows en masse to mate and carry eggs. This synchronised migration is known in Brazil as the **andada**. To protect the breeding population, Brazilian environmental authorities enforce a **closed season (defeso)** during the andada, banning both capture and sale; Sergipe state rules also set a minimum legal carapace width so that each crab can reproduce at least once.\n\nSo **if you are visiting during the closed season, or you are offered unusually small crabs, please choose not to eat them**. This is not sentimentality — it is the only way this local food culture continues to exist. As a non-profit educational site, we want visitors to understand that the dish on the table and the ecology of the wetland are two sides of the same thing.`,
      },
    },
    culture: {
      title: "History and Crab Culture",
      subtitle: "From a planned city to a regional food icon",
      intro: `To understand the promenade you first have to understand the city around it. **Aracaju was founded in 1855 and is the first Brazilian city built to a single, unified plan.** To escape the silting port of the old capital, São Cristóvão, the provincial president Inácio Barbosa laid out a brand-new capital from scratch on the plain between the Rio Sergipe and the Rio Vaza-Barris, using a grid of streets that still shapes the city centre today, including its date-named avenues.\n\nThe **Passarela do Caranguejo** is what happened when that city grew towards the sea. As the most representative dining-and-walk stretch of the **Orla de Atalaia**, it condenses Aracaju's two defining symbols — the ocean and the crab — into one seaside promenade.`,
      items: [
        { title: "① Orla de Atalaia: the city's living room", content: "The Orla de Atalaia is Aracaju's main waterfront public space, roughly 6 km long, linking beaches, squares, sports facilities and restaurant areas. It was not built in a day: as the city expanded eastwards and the waterfront was redeveloped over several decades, a simple coastal road gradually became the place where locals jog at dawn, walk in the evening and gather with family at weekends. The Passarela do Caranguejo is the busiest stretch of it." },
        { title: "② The crab and Sergipe identity", content: "In Sergipe the crab is more than a dish; it is a marker of local identity. With extensive estuaries and mangroves, crab collecting (cata do caranguejo) has long been an important traditional livelihood along the coast, organised around families and passed down through generations. The classic local preparation is **caranguejada**, a slow-cooked stew of tomato, onion, coconut milk and herbs, served with a **small wooden mallet and board**. Guests crack the shells themselves, and the clatter of mallets becomes the distinctive background soundtrack of an evening on the promenade." },
        { title: "③ Forró: northeastern music in the sea breeze", content: "**Forró**, the signature folk music of northeastern Brazil, is built on the classic trio of accordion (sanfona), triangle (triângulo) and zabumba drum. It grew out of rural festivities and the June Festa de São João and has since moved into urban nightlife. Many restaurants along the promenade host live sets in the evening, so eating crab, listening to forró and watching the sea combine into the most typical Aracaju night out." },
        { title: "④ A geographic detail most visitors miss", content: "Aracaju's coast faces roughly east, which means **the sun never actually sets over the ocean here**. The promenade is celebrated as a golden-hour spot because, as the sun drops in the west, light rakes across the city and the estuary at a very low angle, washing the clouds, the sea surface and the tidal flats in gold and red — an effect of **atmospheric scattering**, enjoyed very differently from an ocean sunset. If you want to see the sun rise out of the sea, come at dawn." },
      ],
      legend: {
        title: "Folk sayings and local lore",
        content: `In the folk imagination of northeastern Brazil the crab is often not merely food but a **symbol of resourcefulness and resilience**: it walks sideways, has a hard shell, burrows into mud and will not easily let go once it grips. That is why it is used to describe someone who is 'difficult, but worthy of respect'. The mass emergence of mangrove crabs during the andada is likewise read by coastal communities as a signal of the natural calendar, with older residents using it to judge the rains and the fishing season.\n\nTo be clear, these are **oral traditions and folk metaphors**, not verifiable historical events. As a non-profit educational site, we do not embellish or dramatise legends whose sources cannot be checked; we present only documented geography, ecology and culture so that readers are not misled.`,
      },
    },
    facilities: {
      title: "Practical Facilities & Service Types",
      subtitle: "What kinds of services you can expect nearby — with no specific business recommended",
      intro: "The information below is meant to help you **plan your needs**, organised by service type. It contains no specific business names, brands or price promises. Actual opening hours, charges and availability vary by season and time of day; always check on-site signage and official information before you travel.",
      items: [
        { icon: "🚻", name: "Public restrooms & accessibility", detail: "Public restrooms are available along the waterfront, some operated by businesses and possibly charging a small fee. The wooden deck itself is largely flat and the main entrances and viewing sections are usually wheelchair-accessible, though individual restaurant entrances may have steps. Carrying tissues is a good idea." },
        { icon: "🅿️", name: "Parking", detail: "Street parking is generally available along the avenues behind the waterfront, with some sections restricted or metered at certain hours, plus private car parks nearby. Spaces are tightest around sunset, at weekends and on public holidays. Arriving early, walking, or taking a ride-hailing car is usually easier." },
        { icon: "🍽️", name: "Dining (by type)", detail: "The area is dominated by crab and seafood restaurants, alongside snack stalls, grilled skewers, juice stands and coconut water vendors. Options range from full-service tourist restaurants to casual, inexpensive eateries. Most restaurants accept cards, but small stalls often take only cash or instant transfers, so carry a little cash." },
        { icon: "🏨", name: "Accommodation (by type)", detail: "The Atalaia district concentrates budget to mid-range hotels, guesthouses (pousadas) and holiday apartments, most within walking distance or a short drive of the waterfront. Prices rise sharply in high season (year-end through Carnival, and the July holidays). Book ahead and confirm whether breakfast and parking are included." },
        { icon: "🛒", name: "Shops & convenience stores", detail: "Supermarkets, convenience stores and pharmacies are spread through the Atalaia district and stock drinking water, sunscreen, insect repellent and basic medicines. Souvenir and handicraft stalls line the waterfront, mostly opening in the late afternoon and evening." },
        { icon: "⛽", name: "Fuel & EV charging", detail: "Petrol stations sit along the main city avenues leading to the waterfront, usually with a convenience store and restrooms. Electric vehicle charging points remain few and scattered in the city, so drivers of EVs should confirm charging options along their route and plan their range in advance." },
        { icon: "🏥", name: "Health & pharmacies", detail: "The Atalaia district has pharmacies and private clinics that can handle minor injuries, heat exhaustion and stomach upsets; for serious cases go to a general city hospital. Emergency medical number is 192, fire service 193. Travel insurance covering medical care and accidents is strongly recommended." },
        { icon: "💳", name: "Banking & payments", detail: "Banks and ATMs are available in the district. Cards and mobile payments are widely accepted in restaurants, hotels and supermarkets, but night-market stalls, beach vendors and some parking areas still run mainly on cash. Avoid withdrawing money at night in isolated spots." },
        { icon: "🛡️", name: "Safety & emergencies", detail: "The waterfront is well lit and busy in the evening and is generally a safe tourist area, but it is still wise to keep valuables close to your body, never leave belongings unattended on the beach, and avoid unlit tidal-flat areas after dark. Police 190, ambulance 192, fire service 193." },
      ],
      note: "Note: this is a non-profit educational website. The content above is a neutral summary **by service type only**. We do not recommend, endorse or link to any specific business, and nothing here constitutes purchasing advice.",
    },
    weather: {
      title: "Live Weather & Travel Advice",
      subtitle: "Check the weather to decide whether to pack an umbrella and when to head out",
      now: "Current conditions",
      feelsLike: "Feels like",
      humidity: "Humidity",
      wind: "Wind",
      uv: "UV index",
      precipitation: "Precipitation",
      adviceTitle: "Travel advice",
      outfitTitle: "What to wear",
      activityTitle: "What to do",
      packTitle: "What to bring",
      riskTitle: "Risk alerts",
      noRisk: "No significant weather risks — your plans should be fine.",
      windForce: "Wind force",
      waveHeight: "Wave height",
      seaTemp: "Sea temperature",
      hourlyTitle: "Next 12 hours",
      dailyTitle: "7-day forecast",
      precipChance: "Chance of rain",
      sunrise: "Sunrise",
      sunset: "Sunset",
      loading: "Fetching the latest weather…",
      error: "Weather data is temporarily unavailable. Please try again shortly.",
      retry: "Try again",
      refresh: "Refresh",
    },
    tide: {
      title: "Tide Times and the Rhythm of the Flats",
      subtitle: "Read the semidiurnal cycle and pick the right moment to head out",
      intro: `The sea off Aracaju has **semidiurnal tides**, with roughly two highs and two lows each day and a range usually between 1.5 and 2.5 metres. The curve below is computed from tidal and meteorological models and shows whether the water is **currently rising or falling** and when the **next high and low** will occur.\n\nFor visitors this decides two things: at **low tide the flats are exposed**, the best window to watch mangrove crabs emerge to feed and to walk along the shoreline; at **high tide the mangrove pneumatophores are submerged** and the water comes closer to the promenade, which suits sea views and photography.`,
      currentLabel: "Current level",
      rising: "Rising",
      falling: "Falling",
      high: "High tide",
      low: "Low tide",
      nextHigh: "Next high",
      nextLow: "Next low",
      chartTitle: "Tide curve, next 24 hours",
      chartHint: "Vertical axis: level relative to mean sea level. Horizontal axis: local time. Dots mark the predicted highs and lows.",
      weekTitle: "High and low tides, next 7 days",
      loading: "Fetching tide data…",
      error: "Tide data is temporarily unavailable. Please try again shortly.",
      retry: "Try again",
      refresh: "Refresh",
      noteTitle: "How these tides are calculated",
      note: "Tides are driven mainly by the gravitational pull of the Moon and the Sun, which is why they are so regular; air pressure, wind and local coastal topography then shift the actual level away from a purely astronomical prediction. The times shown here are **model-based estimates**, suitable for planning a visit. For any activity on the flats, swimming or other water-based plans, follow the official guidance of local maritime and meteorological authorities.",
      safetyTitle: "Mudflat safety",
      safety: "An exposed mudflat looks flat but often hides deep mud and tidal channels, and the water returns quickly once the tide turns. Do not walk far out alone, keep track of your route back, never linger on sandbanks that can be cut off, and stay clear of the flat edges in rain or strong wind.",
    },
    sources: { title: "Sources & References", subtitle: "This guide is compiled from the following authoritative sources to keep the information accurate and up to date.", items: [
      { name: "Google Maps: Crab Catwalk listing", url: SITE.mapsShareUrl, note: "Source for rating, review count and address verification" },
      { name: "Brazilian Ministry of Tourism", url: SITE.govtTourismUrl, note: "Official Brazilian tourism information" },
      { name: "Aracaju City Hall", url: SITE.cityGovUrl, note: "Local culture and landmark promotion" },
      { name: "IBGE - Aracaju historical database", url: SITE.ibgeUrl, note: "Official geographic and historical data" },
      { name: "Wikipedia: Passarela do Caranguejo", url: SITE.wikipediaUrl, note: "Background reference" },
      { name: "Open-Meteo Weather API", url: "https://open-meteo.com/", note: "Live weather and UV data shown on this page" },
      { name: "Open-Meteo Marine & Tide API", url: "https://open-meteo.com/en/docs/marine-weather-api", note: "Tide curve and high/low tide times shown on this page" },
      { name: "Google Maps Platform", url: "https://www.google.com/maps", note: "Map embed and location verification" }
    ]},
    copyright: "Image credits: all images displayed on this website remain the property and copyright of their respective photographers.",
    footer: { callToAction: "As an important tourist landmark in Aracaju, please join us in caring for the environment and respecting local culture. Keep the attraction clean and maintain this beautiful tropical seaside space together.", text: "© 2026 Crab Catwalk Guide · All rights reserved.\nThis website is an independent third-party guide project dedicated to accurately sharing information about Crab Catwalk. We are not affiliated with the Brazilian government or any official authority.", made: "This website is an independent third-party guide project. Made for explorers and learners.", linksTitle: "Related Links", links: [
      { name: "Brazil Federal Government", url: "https://www.gov.br/pt-br" },
      { name: "Brazil Ministry of Tourism", url: "https://www.gov.br/turismo/pt-br" },
      { name: "Brazil Official E-Visa System", url: "https://brazil.vfsevisa.com/" },
      { name: "IBGE - Aracaju Historical Database", url: "https://cidades.ibge.gov.br/brasil/se/aracaju/historico" },
      { name: "Wikipedia: Passarela do Caranguejo", url: "https://pt.wikipedia.org/wiki/Passarela_do_Caranguejo" },
      { name: "Aracaju City Hall: Cultural Promotion", url: "https://aracaju.se.gov.br/noticias/114269/prefeitura_de_aracaju_promove_festival_do_caranguejo_na_orla_da_atalaia.html" }
    ], internalTitle: "On this page", internalLinks: [
      { name: "Crab Catwalk (Passarela do Caranguejo) restaurants and nearby", href: "#monuments" },
      { name: "Best time to visit Crab Catwalk", href: "#best-time" },
      { name: "How to get to Crab Catwalk", href: "#transportation" },
      { name: "Crab Catwalk FAQ", href: "#faq" }
    ]}
  },
  pt: {
    nav: { history: "História", nature: "Natureza", culture: "Cultura", architecture: "Características", monuments: "Arredores", weather: "Clima", tide: "Marés", facilities: "Serviços", visiting: "Informações", transportation: "Transporte", gallery: "Galeria", reviews: "Avaliações", faq: "FAQ", location: "Localização" },
    hero: { tags: ["Rua de Gastronomia", "Caranguejo Gigante", "Vida Noturna em Aracaju"], tagline: "Brasil · Sergipe · Aracaju", title: "Passarela do Caranguejo: O que fazer em Aracaju", titleAlt: "Crab Catwalk", subtitle: "Passarela do Caranguejo · Restaurantes de Caranguejo · Caranguejo Gigante · Noite à Beira-Mar", cta: "Explorar a Passarela" },
    rating: { reviews: "avaliações", source: "Google Avaliações" },
    history: {
      title: "História e Significância da Passarela do Caranguejo",
      intro: `A **Passarela do Caranguejo (Crab Catwalk)** está localizada no bairro de Atalaia, em Aracaju, capital do estado de Sergipe, no Brasil. Não é uma atração isolada, mas sim a essência da seção sul da **Orla de Atalaia**, uma extensão de 6 quilômetros conhecida como a "avenida costeira mais bonita do Brasil".\n\n**Características do Atraativo**: A Passarela do Caranguejo é o trecho mais movimentado da Orla de Atalaia, conhecido pelo conjunto de restaurantes de caranguejo e frutos do mar, pela estátua gigante de caranguejo na entrada e pelo animado clima de rua após o anoitecer.\n\n**Significado Cultural**: Quando a noite cai, a Passarela do Caranguejo revela seu lado mais vibrante. A brisa do mar não é apenas preenchida com o aroma da comida, mas também frequentemente acompanhada por **música ao vivo de sanfona (Forró)**, típica do nordeste brasileiro. Muitos restaurantes se transformam em palcos culturais ao ar livre nos fins de semana, permitindo que os visitantes sintam os ritmos latino-americanos apaixonantes e alegres em meio ao som das ondas do mar.`
    },
    curiosities: {
      title: "Histórias Ocultas: Curiosidades sobre a Passarela",
      content: `**Paraíso Gastronômico**: Degustar caranguejo na Passarela do Caranguejo não é apenas uma refeição, mas uma experiência cultural imersiva. A maneira local mais autêntica é pedir uma tradicional "Caranguejada". Os restaurantes geralmente fornecem a cada cliente um icônico **martelinho e tábua de madeira**. Acompanhado pelo som crocante de quebrar cascas de caranguejo e uma Caipirinha gelada, esta é a noite mais autêntica de Aracaju.\n\n**Fim de Tarde e Noite**: A Passarela do Caranguejo fica mais animada do final da tarde à madrugada. As luzes dos restaurantes acendem, a música de sanfona (Forró) ecoa pela rua, e a brisa do mar se mistura ao aroma da comida — um dos cenários mais representativos da vida noturna de Aracaju.\n\n**Desenvolvimento Turístico**: Com o desenvolvimento do turismo em Aracaju, a Passarela do Caranguejo tornou-se gradualmente um dos atrativos turísticos mais importantes da cidade, atraindo cada vez mais turistas nacionais e estrangeiros.`
    },
    architecture: {
      title: "Características do Passeio e Design Estrutural",
      intro: "A Passarela do Caranguejo é uma rua de gastronomia à beira-mar, na Orla de Atalaia, pensada para caminhar e comer. O calçadão de madeira é ladeado por restaurantes, barracas de comida e lojas turísticas — o trajeto mais conveniente para caminhar, comer e sentir a brisa do mar.",
      specs: {
        structure: { title: "Estrutura do Passeio", content: "A Passarela do Caranguejo é pavimentada com tábuas de madeira, com estrutura sólida e ar tropical. Estende-se ao longo da linha costeira, ladeada por restaurantes, onde os visitantes podem caminhar com calma e escolher o seu lugar de caranguejo favorito." },
        design: { title: "Características do Design", content: "O design do passeio considera totalmente a experiência do visitante, com plataformas de observação, áreas de descanso e áreas de jantar. À noite, sob a iluminação, o passeio parece ainda mais romântico." },
        optics: { title: "Experiência de Visualização", content: "Da Passarela do Caranguejo você pode desfrutar da vista para o mar e do clima de rua após o anoitecer. A água é clara e azul de dia; do final da tarde à madrugada as luzes dos restaurantes acendem e a música de rua toma conta — o momento mais animado de estar lá." }
      },
      plaque: {
        title: "Informações Básicas do Atrativo",
        items: [
          { label: "Nome", value: "Passarela do Caranguejo / Crab Catwalk" },
          { label: "Localização", value: "Bairro de Atalaia, Aracaju, Brasil" },
          { label: "Horário", value: "Aberto 24 horas (horários dos restaurantes variam)" },
          { label: "Tipo", value: "Rua de gastronomia, Atraativo turístico" },
          { label: "Características", value: "Culinária de caranguejo, Vida noturna" },
          { label: "Melhor Época", value: "Final da tarde à noite" }
        ]
      }
    },
    monuments: {
      title: "Marcos e Atrações ao Redor da Passarela do Caranguejo",
      intro: "Existem várias atrações e experiências especiais dignas de visita ao redor da Passarela do Caranguejo, tornando sua viagem a Aracaju mais colorida.",
      items: [
        { name: "Restaurantes de Caranguejo", description: "Existem dezenas de restaurantes de caranguejo ao longo da Passarela do Caranguejo, oferecendo vários pratos de caranguejo. Este é o melhor lugar para provar a culinária especial de Sergipe." },
        { name: "Caranguejo Gigante", description: "A estátua do caranguejo gigante, na entrada da passarela, é o ponto de foto mais procurado — quase todo visitante para para registrar o momento. Vá no fim da tarde, quando a luz é mais suave e incide na frente da estátua." },
        { name: "Cena de Rua e Vida Noturna", description: "A Passarela do Caranguejo fica mais animada após o anoitecer: luzes de neon, música de Forró ao vivo e a brisa do mar formam um dos cenários mais representativos da vida noturna de Aracaju. Para mar e areia, siga para a vizinha Praia de Atalaia." }
      ]
    },
    bestTime: {
      title: "Melhor Época para Visitar",
      intro: "Aracaju tem clima quente o ano todo, sendo um destino turístico costeiro ideal. Você pode planejar o melhor itinerário de acordo com diferentes estações e condições climáticas.\n\n**Estação Seca (setembro-março)**: Tempo ensolarado com pouca chuva, a melhor época para visitar Aracaju. Adequado para atividades de praia, caminhadas ao entardecer e jantares ao ar livre.\n\n**Estação Chuvosa (abril-agosto)**: Mais chuvas, mas as temperaturas permanecem quentes. Menos turistas, melhores preços para hotéis e restaurantes, uma excelente oportunidade para experimentar a cultura local.",
      seasons: [
        { name: "🌞 Estação Seca (setembro-março)", description: "A estação seca é a melhor época para visitar Aracaju. Tempo ensolarado com pouca chuva, adequada para atividades de praia e caminhadas ao entardecer. Recomenda-se reservar restaurantes com antecedência, especialmente nos fins de semana e feriados." },
        { name: "🌧️ Estação Chuvosa (abril-agosto)", description: "Mais chuvas na estação chuvosa, mas as temperaturas permanecem quentes. Menos turistas, uma excelente oportunidade para experimentar a cultura local. Recomenda-se levar equipamento de chuva e prestar atenção às previsões meteorológicas." }
      ]
    },
    visiting: {
      title: "Guia Prática de Visita",
      intro: "A Passarela do Caranguejo é um lugar ideal para explorar a paisagem costeira tropical de Aracaju. Para obter a melhor experiência, consulte as seguintes informações práticas.",
      hours: { title: "Horário de Abertura", content: "Aberto 24 horas\nPasseio aberto o dia todo, restaurantes geralmente 11:00 - 23:00", note: "Recomenda-se ir do final da tarde à noite, quando o clima de rua e as luzes estão mais animados." },
      price: { title: "Informações de Custo", content: "Entrada gratuita no passeio\nCustos de refeição variam conforme o restaurante", note: "O passeio em si é gratuito, mas os custos de refeição e entretenimento são pagos separadamente." },
      duration: { title: "Duração da Visita", content: "Tempo sugerido: 1-3 horas\nVocê pode caminhar pelo passeio, provar comida e sentir o clima de rua à noite e as vistas para o mar.", note: "O tempo pode ser organizado de forma flexível de acordo com o interesse pessoal. Recomenda-se ir do final da tarde à noite para sentir a vida noturna." },
      tips: { title: "Dicas de Visita e Notas Importantes", items: [
        "⚠️ **Proteção Solar**: O sol tropical brasileiro é forte, por favor tome medidas de proteção solar, traga protetor solar e chapéu",
        "Use sapatos confortáveis para caminhar pelo passeio",
        "Fotografia é permitida, mas por favor respeite a privacidade dos outros",
        "Preste atenção à segurança alimentar ao provar caranguejo, escolha restaurantes com boas condições de higiene",
        "O final da tarde e a noite são os melhores momentos para visitar",
        "Você também pode visitar a Praia de Atalaia nas proximidades",
        "🌱 **Visita Civilizada**: Por favor, mantenha o ambiente limpo, não jogue lixo e mantenha conjuntamente este belo espaço costeiro"
      ] }
    },
    transportation: {
      title: "Guia Preciso de Transporte",
      airport: { title: "✈️ Aeroporto de Aracaju (AJU) ➔ Passarela do Caranguejo", content: "O Aeroporto Santa Maria (Aeroporto de Aracaju - Santa Maria) está localizado na cidade de Aracaju, relativamente perto da Passarela do Caranguejo.", options: [
        { name: "Táxi / Aplicativo (Recomendado)", price: "Aprox. 20-40 Reais Brasileiros", time: "15-25 minutos", steps: ["Encontre balcões de táxis oficiais na sala de desembarque do aeroporto ou use aplicativos como Uber/99", "Diga ao motorista que você está indo para a Passarela do Caranguejo", "O tráfego em Aracaju é relativamente conveniente, com uma curta distância de direção"] }
      ]},
      city: { title: "🚶 Do Centro de Aracaju", content: "A Passarela do Caranguejo está localizada no bairro de Atalaia em Aracaju. Você pode escolher várias opções para chegar do centro da cidade. Recomenda-se alocar meio dia para visitar a passarela junto com as praias próximas.", steps: ["Tome um táxi ou aplicativo do centro, cerca de 10-20 minutos", "Ou tome um ônibus em direção a Atalaia", "Após a chegada, caminhe até a Passarela do Caranguejo"] },
      tips: { title: "Dicas de Transporte e Clima", items: [
        "🌡️ **Vantagem Climática**: Aracaju está localizada na região tropical, quente o ano todo, uma das cidades mais confortáveis do Brasil em termos climáticos",
        "Usar aplicativos de transporte (Uber/99) na cidade é mais seguro e conveniente",
        "🚗 **Dirigir e Estacionar**: Existem muitas vagas de estacionamento público ao longo da avenida costeira e da Passarela do Caranguejo, mas durante a alta temporada (dezembro a fevereiro) ou nas noites de fim de semana, o estacionamento pode ser relativamente difícil. Recomenda-se chegar cedo ou priorizar serviços de transporte por aplicativo.",
        "Vá do final da tarde à noite para desfrutar do animado clima de rua",
        "Combine com Praia de Atalaia, centro de Aracaju e outras atrações na mesma viagem",
        "O tráfego em Aracaju é relativamente menos congestionado, tornando a viagem mais conveniente"
      ] }
    },
    reviews: { 
      title: "Avaliações de Visitantes e Exploração Próxima", 
      subtitle: "A Passarela do Caranguejo no Google Maps: visão geral das avaliações",
      viewMore: "Ver Mais Avaliações no Google Maps",
      snapshotNote: "**Instantâneo de avaliação agregada** do Google Maps (outubro de 2026). As opiniões dos visitantes destacam o conjunto de restaurantes de caranguejo, a estátua gigante de caranguejo na entrada e o animado clima de rua à noite.",
      themesTitle: "O que os visitantes mais mencionam",
      themes: [
        "🔥 Dezenas de restaurantes de caranguejo e frutos do mar, do jantar completo às barraquinhas",
        "🦀 A estátua gigante de caranguejo na entrada é o ponto de foto obrigatório",
        "🌙 A rua fica mais movimentada do final da tarde à madrugada, com música de Forró ao vivo e luzes à beira-mar",
        "🚶 Passeio fácil pela avenida à beira-mar, com brisa e vistas da rua"
      ],
      nearbyTitle: "Atrações Próximas que Vale a Pena Visitar",
      nearbyIntro: "Após visitar a Passarela do Caranguejo, você pode visitar facilmente as seguintes atrações próximas:",
      nearbyItems: [
        { name: "Praia de Atalaia", description: "Uma das praias mais famosas de Aracaju, com areia dourada e água clara, ideal para nadar e tomar sol." },
        { name: "Centro de Aracaju", description: "A capital do estado de Sergipe, lar de igrejas históricas, praças e mercados, assim como deliciosa culinária local." },
        { name: "Orla de Atalaia", description: "A avenida costeira mais longa de Aracaju, ladeada por numerosos restaurantes, bares e locais de entretenimento, um ótimo lugar para experimentar a vida noturna local." }
      ]
    },
    gallery: { title: "Galeria de Fotos", viewMore: "Ver Mais Fotos no Google Maps" },
    faq: { title: "Perguntas Frequentes", subtitle: "Saiba Mais Sobre a Passarela do Caranguejo", items: [
      { question: "Quais são o horário de abertura e o custo da Passarela do Caranguejo?", answer: "A Passarela do Caranguejo está aberta as 24 horas do dia e a entrada é gratuita. Os restaurantes ao longo do passeio operam geralmente das 11:00 às 23:00, os horários específicos variam conforme o restaurante." },
      { question: "Quanto tempo é necessário para visitar a Passarela do Caranguejo?", answer: "Tempo sugerido: 1-3 horas. Você pode caminhar pelo passeio, provar comida e sentir o clima de rua à noite e as vistas para o mar. Se comer nos restaurantes, pode levar mais tempo." },
      { question: "Qual comida especial está disponível na Passarela do Caranguejo?", answer: "A Passarela do Caranguejo é famosa por seus pratos de caranguejo. Os restaurantes aqui oferecem caranguejo preparado de diversas formas culinárias, incluindo caranguejo cozido, caranguejo grelhado, arroz com caranguejo, etc. Também há frutos do mar frescos e frutas tropicais." },
      { question: "Quais são as notas importantes para visitar a Passarela do Caranguejo?", answer: "⚠️ Proteção Solar: O sol tropical brasileiro é forte, por favor proteja-se do sol. Use sapatos confortáveis. Escolha restaurantes com boas condições de higiene. Por favor mantenha o ambiente limpo e não jogue lixo." },
      { question: "Onde fica a Passarela do Caranguejo (Crab Catwalk)?", answer: "A Passarela do Caranguejo fica no bairro de Atalaia, em Aracaju, Sergipe, Brasil, na Av. Santos Dumont, 5600 - Atalaia, Aracaju - SE, 49035-240. O Plus Code é 2W5X+6J." },
      { question: "A Passarela do Caranguejo é gratuita?", answer: "Sim. A Passarela do Caranguejo é um espaço público à beira-mar e a entrada é gratuita durante todo o ano; apenas refeições e outras compras são pagas à parte." },
      { question: "Qual é a melhor época para visitar a Passarela do Caranguejo?", answer: "O fim da tarde é o melhor momento, pois permite aproveitar o clima de rua à noite e a vida noturna. A estação seca, de setembro a março, tem tempo ensolarado com pouca chuva." },
      { question: "Como chegar à Passarela do Caranguejo a partir do aeroporto de Aracaju?", answer: "Do Aeroporto Santa Maria (AJU), um táxi ou aplicativo (Uber/99) leva cerca de 15-25 minutos e custa aproximadamente 20-40 Reais. Basta informar ao motorista que você vai à Passarela do Caranguejo." }
    ]},
    location: { title: "Localização e Como Visitar a Passarela do Caranguejo em Aracaju", address: "Av. Santos Dumont, 5600 - Atalaia\nAracaju - SE, 49035-240\nBrasil", openMaps: "Ver no Google Maps" },
    about: {
      title: "Sobre a Passarela do Caranguejo (Crab Catwalk)",
      intro: "Bem-vindo à **Passarela do Caranguejo**, amplamente reconhecida como o **Crab Catwalk**. Localizada no coração de **Aracaju**, **Sergipe**, **Brasil**, este destino é um ponto central para os viajantes que visitam a região.\n\nA passarela fica ao longo da **Orla de Atalaia**, na Av. Santos Dumont, 5600 - Atalaia, e é famosa pelo conjunto de restaurantes de caranguejo, pela estátua gigante de caranguejo na entrada e pelo animado clima de rua à noite. É aberta ao público gratuitamente durante todo o ano.",
      breadcrumbTitle: "Hierarquia geográfica",
      nearbyCluster: "Ao visitar a **Passarela do Caranguejo**, os visitantes podem explorar facilmente marcos históricos e pontos de interesse próximos, incluindo a **Praia de Atalaia** e a **Orla de Atalaia**."
    },
    nature: {
      title: "Geografia e Ecologia: Manguezais, Marés e Caranguejos",
      subtitle: "Entender este litoral é a chave para entender a passarela",
      intro: `A **orla de Atalaia**, onde fica a passarela, está na planície costeira a leste de Aracaju. Não se trata de uma praia tropical qualquer: a cidade abre-se para o Atlântico a leste, enquanto a oeste os rios **Sergipe** e **Vaza-Barris** encontram o mar em estuários largos. Entre rio e oceano desenvolveram-se extensos **manguezais** — e foram eles que produziram o caranguejo que tornou Aracaju conhecida.\n\nEm outras palavras, **o caranguejo que chega à sua mesa na passarela vem da floresta de lama logo atrás dela**. Saber disso permite ler a ecologia costeira por trás do prato enquanto se come — a passarela em si é uma rua de gastronomia, não um mirante para observar caranguejos na lama.`,
      items: [
        { title: "① Manguezais: o berçário do litoral", content: "Manguezais são formações vegetais lenhosas tolerantes ao sal, típicas de zonas entremarés tropicais e subtropicais. Suas raízes-escora e raízes respiratórias retêm sedimento, dissipam a energia das ondas e oferecem abrigo a peixes juvenis, camarões, caranguejos e moluscos. Sergipe abriga áreas de manguezal entre as mais importantes do Nordeste brasileiro, e os estuários ao redor de Aracaju fazem parte delas. Manguezais são também ecossistemas de 'carbono azul' extremamente eficientes — estocam muito mais carbono por hectare do que a maioria das florestas terrestres, o que faz da sua proteção também uma ação climática." },
        { title: "② Marés semidiurnas: um ritmo duas vezes por dia", content: "Este trecho do litoral tem **marés semidiurnas**, com cerca de duas preamares e duas baixa-mares por dia e amplitude geralmente entre 1,5 e 2,5 metros. Na preamar as raízes respiratórias ficam submersas e os caranguejos recolhem-se às tocas; na baixa-mar a lama fica exposta, os caranguejos saem para se alimentar e os catadores de caranguejo entram no manguezal. O nível da água ao lado da passarela é a janela mais direta para observar esse ritmo." },
        { title: "③ O caranguejo no centro de tudo: Ucides cordatus", content: "A espécie que dá nome à passarela é o **caranguejo-uçá (Ucides cordatus)**. Ele passa a vida inteira em tocas na lama do manguezal, alimentando-se sobretudo de folhas de mangue que arrasta para dentro da toca para decompor — por isso é descrito como um 'engenheiro do ecossistema': converte a serrapilheira em nutrientes que retornam à área alagada. Os adultos podem atingir 8–9 cm de largura de carapaça, crescem lentamente e podem viver mais de uma década, o que explica por que a espécie precisa de proteção." },
        { title: "④ Clima: quente o ano todo, com estação seca definida", content: "Aracaju tem clima **tropical com estação seca (Köppen As)**. As temperaturas permanecem altas o ano inteiro, com média em torno de 26°C, e as estações são definidas pela chuva, não pela temperatura. De modo geral, **de setembro a março é a estação seca**, com muito sol e pouca chuva, e **de abril a agosto é a estação chuvosa**, marcada por pancadas curtas e intensas. Esse ritmo determina tanto a melhor época para viajar quanto a atividade dos caranguejos no manguezal." },
      ],
      conservation: {
        title: "Conservação: por que não se come caranguejo durante a andada",
        content: `Por volta da estação chuvosa, os caranguejos-uçá saem das tocas em massa para acasalar e carregar ovos. Essa migração sincronizada é conhecida no Brasil como **andada**. Para proteger a população reprodutiva, os órgãos ambientais brasileiros aplicam o **defeso** durante a andada, proibindo captura e venda; normas estaduais de Sergipe também estabelecem largura mínima de carapaça para que cada indivíduo se reproduza ao menos uma vez.\n\nAssim, **se você estiver na região durante o defeso, ou se lhe oferecerem caranguejos visivelmente pequenos, escolha não consumir**. Não é sentimentalismo: é a única forma de essa cultura gastronômica continuar existindo. Como site educativo sem fins lucrativos, queremos que o visitante entenda que o prato na mesa e a ecologia do manguezal são duas faces da mesma coisa.`,
      },
    },
    culture: {
      title: "História e Cultura do Caranguejo",
      subtitle: "De uma cidade planejada a um ícone gastronômico regional",
      intro: `Para entender a passarela é preciso entender primeiro a cidade ao seu redor. **Aracaju foi fundada em 1855 e é a primeira cidade brasileira construída segundo um plano único e unificado.** Para fugir do porto assoreado da antiga capital, São Cristóvão, o presidente da província, Inácio Barbosa, traçou do zero uma nova capital na planície entre os rios Sergipe e Vaza-Barris, com malha ortogonal que ainda hoje define o centro, incluindo as avenidas batizadas com datas.\n\nA **Passarela do Caranguejo** é o resultado do crescimento dessa cidade em direção ao mar. Como trecho mais representativo da **Orla de Atalaia**, ela condensa os dois símbolos que definem Aracaju — o oceano e o caranguejo — em um único trecho à beira-mar.`,
      items: [
        { title: "① Orla de Atalaia: a sala de estar da cidade", content: "A Orla de Atalaia é o principal espaço público à beira-mar de Aracaju, com cerca de 6 km, ligando praias, praças, equipamentos esportivos e áreas de restaurantes. Não foi construída de uma só vez: com a expansão da cidade para leste e sucessivas requalificações da orla, uma simples via costeira tornou-se o lugar onde os moradores correm ao amanhecer, caminham ao entardecer e reúnem a família nos fins de semana. A Passarela do Caranguejo é o trecho mais movimentado." },
        { title: "② O caranguejo e a identidade sergipana", content: "Em Sergipe o caranguejo é mais do que um prato: é marca de identidade local. Com estuários e manguezais extensos, a cata do caranguejo é há muito um ofício tradicional importante no litoral, organizado em torno de famílias e transmitido por gerações. O preparo clássico é a **caranguejada**, cozida lentamente com tomate, cebola, leite de coco e temperos, servida com **martelinho e tábua de madeira**. O próprio cliente quebra a carapaça, e o som dos martelos se torna a trilha sonora característica de uma noite na passarela." },
        { title: "③ Forró: música nordestina na brisa do mar", content: "O **forró**, gênero musical mais característico do Nordeste, baseia-se no trio clássico de sanfona, triângulo e zabumba. Nasceu das festas rurais e do São João de junho e hoje ocupa também a noite urbana. Muitos restaurantes ao longo da passarela têm música ao vivo no fim da tarde, de modo que comer caranguejo, ouvir forró e olhar o mar formam a noite mais típica de Aracaju." },
        { title: "④ Um detalhe geográfico que quase ninguém nota", content: "O litoral de Aracaju está voltado aproximadamente para leste, o que significa que **o sol não se põe sobre o mar aqui**. A passarela é celebrada como ponto de fim de tarde porque, quando o sol declina a oeste, a luz atravessa a cidade e o estuário em ângulo muito baixo, tingindo nuvens, superfície do mar e bancos de areia de dourado e vermelho — um efeito de **dispersão atmosférica**, apreciado de forma bem diferente de um pôr do sol oceânico. Para ver o sol nascendo do mar, é preciso vir de manhã." },
      ],
      legend: {
        title: "Dizeres populares e tradição oral",
        content: `No imaginário popular do Nordeste brasileiro o caranguejo muitas vezes não é apenas alimento, mas **símbolo de astúcia e resistência**: anda de lado, tem carapaça dura, cava tocas na lama e não solta a pinça facilmente. Por isso é usado para descrever alguém 'difícil, mas digno de respeito'. A saída em massa dos caranguejos na andada é igualmente lida pelas comunidades costeiras como sinal do calendário natural, com os mais velhos a usá-la para avaliar as chuvas e a safra de pesca.\n\nÉ importante esclarecer que se trata de **tradição oral e metáforas populares**, não de eventos históricos verificáveis. Como site educativo sem fins lucrativos, não embelezamos nem dramatizamos lendas cujas fontes não podem ser conferidas; apresentamos apenas geografia, ecologia e cultura documentadas, para não induzir o leitor ao erro.`,
      },
    },
    facilities: {
      title: "Serviços e Infraestrutura por Tipo",
      subtitle: "Que tipos de serviço existem no entorno — sem indicar nenhum estabelecimento específico",
      intro: "As informações abaixo servem para ajudar você a **planejar suas necessidades**, organizadas por tipo de serviço. Não contêm nomes de estabelecimentos, marcas ou promessas de preço. Horários, cobranças e disponibilidade variam conforme a estação e o horário; confirme sempre na sinalização local e nas informações oficiais antes de sair.",
      items: [
        { icon: "🚻", name: "Banheiros públicos e acessibilidade", detail: "Há banheiros públicos ao longo da orla, alguns operados por estabelecimentos e que podem cobrar uma pequena taxa. O calçadão de madeira é em grande parte plano e os acessos principais e trechos de mirante costumam ser acessíveis para cadeira de rodas, embora entradas de alguns restaurantes possam ter degraus. Vale levar lenços de papel." },
        { icon: "🅿️", name: "Estacionamento", detail: "Em geral é possível estacionar nas vias urbanas que margeiam a orla, com alguns trechos com restrição ou cobrança em determinados horários, além de estacionamentos privados no entorno. As vagas ficam mais disputadas ao pôr do sol, nos fins de semana e feriados. Chegar mais cedo, ir a pé ou usar aplicativo costuma ser mais simples." },
        { icon: "🍽️", name: "Alimentação (por tipo)", detail: "A área é dominada por restaurantes de caranguejo e frutos do mar, além de barracas de petiscos, espetinhos, sucos e água de coco. Há desde restaurantes turísticos completos até casas mais simples e baratas. A maioria dos restaurantes aceita cartão, mas barracas pequenas normalmente só aceitam dinheiro ou transferência instantânea — leve um pouco de dinheiro." },
        { icon: "🏨", name: "Hospedagem (por tipo)", detail: "O bairro de Atalaia concentra hotéis de categoria econômica a média, pousadas e apartamentos de temporada, a maioria a distância de caminhada ou poucos minutos de carro da orla. Os preços sobem bastante na alta temporada (do fim do ano ao Carnaval e nas férias de julho). Reserve com antecedência e confirme se café da manhã e estacionamento estão incluídos." },
        { icon: "🛒", name: "Mercados e conveniências", detail: "Supermercados, lojas de conveniência e farmácias distribuem-se pelo bairro de Atalaia e vendem água, protetor solar, repelente e medicamentos básicos. Na orla há ainda barracas de lembranças e artesanato, que funcionam principalmente do fim da tarde à noite." },
        { icon: "⛽", name: "Combustível e recarga elétrica", detail: "Há postos de combustível nas principais avenidas que levam à orla, geralmente com loja de conveniência e banheiros. Pontos de recarga para veículos elétricos ainda são poucos e dispersos na cidade, por isso quem dirige elétrico deve confirmar as opções no trajeto e planejar a autonomia com antecedência." },
        { icon: "🏥", name: "Saúde e farmácias", detail: "O bairro de Atalaia conta com farmácias e clínicas privadas capazes de atender ferimentos leves, insolação e mal-estar gastrointestinal; em casos graves, procure um hospital geral. O telefone de emergência médica é 192 e o do Corpo de Bombeiros, 193. Recomenda-se fortemente contratar seguro viagem com cobertura médica e de acidentes." },
        { icon: "💳", name: "Bancos e pagamentos", detail: "Há agências bancárias e caixas eletrônicos no bairro. Cartões e pagamentos por aplicativo são bem aceitos em restaurantes, hotéis e supermercados, mas barracas de feira noturna, vendedores de praia e algumas áreas de estacionamento ainda funcionam principalmente com dinheiro. Evite sacar dinheiro à noite em locais isolados." },
        { icon: "🛡️", name: "Segurança e emergências", detail: "A orla é bem iluminada e movimentada à noite, sendo uma área turística relativamente segura, mas ainda assim vale manter objetos de valor junto ao corpo, nunca deixar pertences sem vigilância na praia e evitar áreas de manguezal sem iluminação depois do escuro. Polícia 190, SAMU 192, Bombeiros 193." },
      ],
      note: "Observação: este é um site educativo sem fins lucrativos. O conteúdo acima é um resumo neutro **apenas por tipo de serviço**. Não recomendamos, endossamos nem vinculamos nenhum estabelecimento específico, e nada aqui constitui recomendação de consumo.",
    },
    weather: {
      title: "Clima em Tempo Real e Dicas de Passeio",
      subtitle: "Veja o tempo para decidir se precisa de guarda-chuva e qual o melhor horário",
      now: "Condições atuais",
      feelsLike: "Sensação",
      humidity: "Umidade",
      wind: "Vento",
      uv: "Índice UV",
      precipitation: "Precipitação",
      adviceTitle: "Dicas para o passeio",
      outfitTitle: "O que vestir",
      activityTitle: "O que fazer",
      packTitle: "O que levar",
      riskTitle: "Alertas de risco",
      noRisk: "Sem riscos meteorológicos relevantes — o roteiro pode seguir.",
      windForce: "Força do vento",
      waveHeight: "Altura das ondas",
      seaTemp: "Temperatura do mar",
      hourlyTitle: "Próximas 12 horas",
      dailyTitle: "Previsão para 7 dias",
      precipChance: "Chance de chuva",
      sunrise: "Nascer do sol",
      sunset: "Pôr do sol",
      loading: "Buscando as condições mais recentes…",
      error: "Não foi possível obter os dados de clima agora. Tente novamente em instantes.",
      retry: "Tentar novamente",
      refresh: "Atualizar",
    },
    tide: {
      title: "Tábua de Marés e o Ritmo da Lama",
      subtitle: "Entenda o ciclo semidiurno e escolha o melhor momento para sair",
      intro: `O mar em frente a Aracaju tem **marés semidiurnas**, com cerca de duas preamares e duas baixa-mares por dia e amplitude geralmente entre 1,5 e 2,5 metros. A curva abaixo é calculada a partir de modelos de maré e de condições meteorológicas e mostra se a água está **subindo ou descendo** e quando ocorrem a **próxima preamar e a próxima baixa-mar**.\n\nPara o visitante isso define duas coisas: na **baixa-mar a lama fica exposta**, melhor janela para ver os caranguejos saindo das tocas e para caminhar pela beira; na **preamar as raízes respiratórias ficam submersas** e a água se aproxima da passarela, ideal para contemplar o mar e fotografar.`,
      currentLabel: "Nível atual",
      rising: "Subindo",
      falling: "Descendo",
      high: "Preamar",
      low: "Baixa-mar",
      nextHigh: "Próxima preamar",
      nextLow: "Próxima baixa-mar",
      chartTitle: "Curva de maré — próximas 24 horas",
      chartHint: "Eixo vertical: nível em relação ao nível médio do mar. Eixo horizontal: hora local. Os pontos indicam preamares e baixa-mares previstas.",
      weekTitle: "Preamares e baixa-mares — próximos 7 dias",
      loading: "Buscando a tábua de marés…",
      error: "Não foi possível obter os dados de maré agora. Tente novamente em instantes.",
      retry: "Tentar novamente",
      refresh: "Atualizar",
      noteTitle: "Como estas marés são calculadas",
      note: "As marés resultam sobretudo da atração gravitacional da Lua e do Sol, o que explica sua regularidade; pressão atmosférica, vento e a topografia costeira local desviam o nível real da previsão puramente astronômica. Os horários aqui apresentados são **estimativas baseadas em modelo**, adequadas para planejar a visita. Para qualquer atividade na lama, banho de mar ou outros planos na água, siga as orientações oficiais das autoridades marítimas e meteorológicas.",
      safetyTitle: "Segurança na lama",
      safety: "A lama exposta parece plana, mas costuma esconder atoleiros e canais de maré, e a água volta rápido depois da virada. Não caminhe muito para longe sozinho, acompanhe o caminho de volta, nunca permaneça em bancos de areia que podem ficar isolados e evite a borda da lama com chuva ou vento forte.",
    },
    sources: { title: "Fontes e Referências", subtitle: "Este guia foi elaborado a partir das seguintes fontes autorizadas, para manter as informações precisas e atualizadas.", items: [
      { name: "Google Maps: ficha da Passarela do Caranguejo", url: SITE.mapsShareUrl, note: "Fonte da avaliação, número de avaliações e verificação do endereço" },
      { name: "Ministério do Turismo do Brasil", url: SITE.govtTourismUrl, note: "Informações oficiais de turismo do Brasil" },
      { name: "Prefeitura de Aracaju", url: SITE.cityGovUrl, note: "Cultura local e divulgação de marcos" },
      { name: "IBGE - banco de dados histórico de Aracaju", url: SITE.ibgeUrl, note: "Dados geográficos e históricos oficiais" },
      { name: "Wikipédia: Passarela do Caranguejo", url: SITE.wikipediaUrl, note: "Referência de contexto" },
      { name: "API de clima Open-Meteo", url: "https://open-meteo.com/", note: "Dados de clima e UV exibidos nesta página" },
      { name: "API marinha e de marés Open-Meteo", url: "https://open-meteo.com/en/docs/marine-weather-api", note: "Curva de maré e horários de preamar/baixa-mar exibidos nesta página" },
      { name: "Google Maps Platform", url: "https://www.google.com/maps", note: "Mapa incorporado e verificação de localização" }
    ]},
    copyright: "Créditos de imagem: todas as imagens exibidas neste site permanecem propriedade e direitos autorais de seus respectivos fotógrafos.",
    footer: { callToAction: "Como importante marco turístico em Aracaju, junte-se a nós para cuidar do meio ambiente e respeitar a cultura local. Mantenha a atração limpa e conserve este belo espaço costeiro tropical juntos.", text: "© 2026 Guia da Passarela do Caranguejo · Todos os direitos reservados.\nEste site é um projeto independente de guia de terceiros dedicado a compartilhar informações precisas sobre a Passarela do Caranguejo. Não estamos afiliados ao governo brasileiro ou a nenhuma autoridade oficial.", made: "Este site é um projeto independente de guia de terceiros. Feito para exploradores e aprendizes.", linksTitle: "Links Relacionados", links: [
      { name: "Governo Federal do Brasil", url: "https://www.gov.br/pt-br" },
      { name: "Ministério do Turismo do Brasil", url: "https://www.gov.br/turismo/pt-br" },
      { name: "Sistema Oficial de Visto Eletrônico do Brasil", url: "https://brazil.vfsevisa.com/" },
      { name: "IBGE - Banco de Dados Históricos de Aracaju", url: "https://cidades.ibge.gov.br/brasil/se/aracaju/historico" },
      { name: "Wikipedia: Passarela do Caranguejo", url: "https://pt.wikipedia.org/wiki/Passarela_do_Caranguejo" },
      { name: "Prefeitura de Aracaju: Promoção Cultural", url: "https://aracaju.se.gov.br/noticias/114269/prefeitura_de_aracaju_promove_festival_do_caranguejo_na_orla_da_atalaia.html" }
    ], internalTitle: "Nesta página", internalLinks: [
      { name: "Restaurantes da Passarela do Caranguejo e arredores", href: "#monuments" },
      { name: "Melhor época para visitar a Passarela do Caranguejo", href: "#best-time" },
      { name: "Como chegar à Passarela do Caranguejo", href: "#transportation" },
      { name: "Perguntas frequentes sobre a Passarela do Caranguejo", href: "#faq" }
    ]}
  }
};
