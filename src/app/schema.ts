import { SITE, SITE_BASE_URL, ATTRACTION_ID } from "@/i18n/site";

/**
 * 全站权威结构化数据（Schema.org / JSON-LD）
 * ------------------------------------------------------------------
 * 由 [locale]/layout.tsx 在服务端渲染，输出稳定、可静态抓取的 @graph：
 *   - TouristAttraction（实体锚点 @id = https://{domain}/#attraction）
 *   - WebSite
 *   - Organization
 *   - BreadcrumbList（实体 → 城市 → 州 → 国家 归属层级）
 * 使用统一 @id，便于 Google Knowledge Graph 精确锚定站点实体。
 */
export function generateSchema(locale: string) {
  const baseUrl = SITE_BASE_URL;
  const localUrl = `${baseUrl}/${locale}`;

  const lang =
    locale === "pt" ? "pt-BR" : locale === "zh" ? "zh-CN" : "en-US";

  const description =
    locale === "pt"
      ? "Passarela do Caranguejo em Aracaju, Brasil. Famosa passeio marítimo conhecida pelos restaurantes de caranguejo e vista do pôr do sol."
      : locale === "zh"
      ? "巴西阿拉卡茹的蟹步道（Passarela do Caranguejo），是一条著名的海滨木板步道，以蟹肉餐厅和日落景色而闻名。"
      : "Crab Catwalk in Aracaju, Brazil. A famous wooden seaside promenade known for its crab restaurants and sunset views.";

  // 图片地址必须与 public/gallery 下真实存在的文件一致。
  // 旧命名 "crab-catwalk (5).jpg" 已随资源重命名失效，会让 Google 图片抓取 404。
  const images = [
    `${baseUrl}${SITE.heroImage}`,
    `${baseUrl}/gallery/crab-catwalk-05.jpg`,
    `${baseUrl}/gallery/crab-catwalk-08.jpg`,
  ];

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["TouristAttraction", "Place", "LandmarksOrHistoricalBuildings"],
        "@id": ATTRACTION_ID,
        name: SITE.fullName,
        alternateName: [
          SITE.shortName,
          SITE.nameZh,
          `${SITE.city} ${SITE.fullName}`,
        ],
        description,
        url: localUrl,
        mainEntityOfPage: localUrl,
        image: images,

        // 精确地理坐标（与 Google 地图资料一致）
        geo: {
          "@type": "GeoCoordinates",
          latitude: SITE.latitude,
          longitude: SITE.longitude,
        },

        // NAP 一致性：名称 / 地址必须与 Google 地图资料完全一致
        address: {
          "@type": "PostalAddress",
          streetAddress: SITE.streetAddress,
          addressLocality: SITE.city,
          addressRegion: SITE.state,
          postalCode: SITE.postalCode,
          addressCountry: SITE.countryCode,
        },

        hasMap: SITE.mapsShareUrl,

        // 开放时间
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "00:00",
          closes: "23:59",
        },

        // 评分与价格
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: SITE.ratingValue,
          reviewCount: SITE.reviewCount,
          bestRating: "5",
          worstRating: "1",
        },
        priceRange: "Free",
        isAccessibleForFree: true,
        publicAccess: true,

        // 帮助搜索引擎把实体归入正确的「主题簇」，而不是当作泛泛的景点页
        touristType: ["Beach", "Gastronomy", "Sunset", "Nightlife"],
        availableLanguage: ["Portuguese", "English", "Chinese"],

        // 景点信息
        additionalProperty: [
          {
            "@type": "PropertyValue",
            name: "geoCoordinate",
            value: `${SITE.plusCode}, ${SITE.city} - ${SITE.stateCode}`,
          },
          {
            "@type": "PropertyValue",
            name: "attractionType",
            value: "Seaside promenade",
          },
          {
            "@type": "PropertyValue",
            name: "features",
            value: "Crab cuisine, Sunset viewing",
          },
        ],

        // 社交媒体、地图与权威来源链接
        sameAs: [
          SITE.mapsShareUrl,
          SITE.govtFederalUrl,
          SITE.govtTourismUrl,
          SITE.cityGovUrl,
          SITE.wikipediaUrl,
        ],
      },

      // Website 结构化数据
      {
        "@type": "WebSite",
        "@id": `${baseUrl}/#website`,
        url: `${baseUrl}/`,
        name:
          locale === "pt"
            ? "Guia da Passarela do Caranguejo"
            : locale === "zh"
            ? "蟹步道指南"
            : "Crab Catwalk Guide",
        inLanguage: lang,
        isAccessibleForFree: true,
        publisher: {
          "@id": `${baseUrl}/#organization`,
        },
        about: {
          "@id": ATTRACTION_ID,
        },
      },

      // 发布者 Organization
      {
        "@type": "Organization",
        "@id": `${baseUrl}/#organization`,
        name: "Crab Catwalk Guide",
        url: `${baseUrl}/`,
        logo: `${baseUrl}/icon.svg`,
      },

      // 地理面包屑：实体 → 城市 → 州 → 国家
      {
        "@type": "BreadcrumbList",
        "@id": `${baseUrl}/#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: SITE.fullName,
            item: localUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: SITE.city,
            item: `${baseUrl}/${locale}#location`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: SITE.state,
            item: `${baseUrl}/${locale}#location`,
          },
          {
            "@type": "ListItem",
            position: 4,
            name: SITE.country,
            item: `${baseUrl}/${locale}#location`,
          },
        ],
      },
    ],
  };
}
