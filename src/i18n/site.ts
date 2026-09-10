/**
 * 单景点 SEO 实体绑定配置变量表
 * ------------------------------------------------------------------
 * 全站唯一数据源（Single Source of Truth）。
 * 如需复用到其他景点，只需替换本文件中的变量值即可，
 * 页面、结构化数据与 Meta 标签都会自动同步。
 */
export const SITE = {
  /* ── 域名 ── */
  domain: "crabcatwalk.com",
  baseUrl: "https://crabcatwalk.com",

  /* ── 实体名称 ── */
  /** 景点官方全称 */
  fullName: "Crab Catwalk",
  /** 景点常用俗称 / 域名对应含义 */
  shortName: "Passarela do Caranguejo",
  /** 中文名称 */
  nameZh: "蟹步道",

  /* ── 归属层级（地理面包屑） ── */
  city: "Aracaju",
  cityZh: "阿拉卡茹",
  state: "Sergipe",
  stateCode: "SE",
  country: "Brazil",
  countryCode: "BR",
  countryNameZh: "巴西",
  countryNamePt: "Brasil",

  /* ── NAP（名称 / 地址 / 坐标）—— 必须与 Google 地图资料完全一致 ── */
  streetAddress: "Av. Santos Dumont, 5600 - Atalaia",
  postalCode: "49035-240",
  plusCode: "2W5X+6J Atalaia",
  fullAddress: "Av. Santos Dumont, 5600 - Atalaia, Aracaju - SE, 49035-240, Brazil",
  latitude: -10.9919512,
  longitude: -37.0509275,

  /* ── 评分数据 ── */
  ratingValue: "4.7",
  reviewCount: "23553",

  /* ── 地图 ── */
  mapsShareUrl: "https://maps.app.goo.gl/XYFWG3cjXBbhB9QT8",
  mapsEmbedSrc:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6961.181902777386!2d-37.0509275!3d-10.991951199999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71ab12777d246a3%3A0x3e4c31cccd727faf!2sCrab%20Catwalk!5e1!3m2!1szh-CN!2s!4v1789006322685!5m2!1szh-CN!2s",

  /* ── 图片 ── */
  heroImage: "/gallery/crab-catwalk-11.jpg",
  heroImageAlt: "Crab Catwalk (Passarela do Caranguejo) - Main view in Aracaju, Brazil",

  /* ── 多语言 ── */
  /** 默认语言：葡萄牙语（景点所在地官方语言） */
  defaultLocale: "pt",
  locales: ["pt", "zh", "en"] as const,

  /* ── 周边核心地标 ── */
  nearbyLandmarks: [
    { name: "Praia de Atalaia", nameZh: "阿塔莱亚海滩", nameEn: "Atalaia Beach" },
    { name: "Orla de Atalaia", nameZh: "阿塔莱亚海滨大道", nameEn: "Atalaia Waterfront" },
  ],

  /* ── 权威外链（.gov / .org） ── */
  govtTourismUrl: "https://www.gov.br/turismo/pt-br",
  govtFederalUrl: "https://www.gov.br/pt-br",
  cityGovUrl: "https://aracaju.se.gov.br/",
  ibgeUrl: "https://cidades.ibge.gov.br/brasil/se/aracaju/historico",
  wikipediaUrl: "https://pt.wikipedia.org/wiki/Passarela_do_Caranguejo",

  /* ── 分析与站点标识 ── */
  ga4Id: "G-HXM22WWPKP",
  themeColor: "#1a2e1a",
  backgroundColor: "#faf8f5",
} as const;

/** 解析后的站点根地址（优先使用构建期环境变量） */
export const SITE_BASE_URL = `https://${process.env.CURRENT_SITE_DOMAIN || SITE.domain}`;

/** 结构化数据实体的稳定锚点 @id */
export const ATTRACTION_ID = `${SITE_BASE_URL}/#attraction`;

/** 图片版权声明 */
export const IMAGE_COPYRIGHT =
  "本网站所展示的所有图片产权及版权均归原摄影者所有。";
