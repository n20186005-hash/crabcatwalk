export function generateSchema(locale: string) {
  const baseUrl = `https://${process.env.CURRENT_SITE_DOMAIN || "crab-catwalk.com"}`;
  const localUrl = `${baseUrl}/${locale}`;

  const name = locale === "pt"
    ? "Passarela do Caranguejo"
    : locale === "zh"
    ? "蟹步道"
    : "Crab Catwalk";

  const description = locale === "pt"
    ? "Passarela do Caranguejo em Aracaju, Brasil. Famosa passeio marítimo conhecida pelos restaurantes de caranguejo e vista do pôr do sol."
    : locale === "zh"
    ? "巴西阿拉卡茹的蟹步道（Passarela do Caranguejo），是一条著名的海滨木板步道，以蟹肉餐厅和日落景色而闻名。"
    : "Crab Catwalk in Aracaju, Brazil. A famous wooden seaside promenade known for its crab restaurants and sunset views.";

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["TouristAttraction", "Place", "LandmarksOrHistoricalBuildings"],
        "name": name,
        "alternateName": ["Passarela do Caranguejo", "Crab Catwalk", "蟹步道"],
        "description": description,
        "url": localUrl,
        "image": `${baseUrl}/gallery/crab-catwalk (11).jpg`,
        
        // 精确地理坐标（阿拉卡茹蟹步道）
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": -10.9143,
          "longitude": -37.0698
        },
        
        // 地址信息
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Av. Santos Dumont, 5600 - Atalaia",
          "addressLocality": "Aracaju",
          "addressRegion": "Sergipe",
          "addressCountry": "BR"
        },
        
        // 开放时间
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "00:00",
          "closes": "23:59"
        },
        
        // 价格信息
        "priceRange": "Free",
        "isAccessibleForFree": true,
        
        // 景点信息
        "additionalProperty": [
          {
            "@type": "PropertyValue",
            "name": "geoCoordinate",
            "value": "2W5X+6J Atalaia, Aracaju - SE"
          },
          {
            "@type": "PropertyValue",
            "name": "attractionType",
            "value": "Seaside promenade"
          },
          {
            "@type": "PropertyValue",
            "name": "features",
            "value": "Crab cuisine, Sunset viewing"
          }
        ],
        
        // 社交媒体和地图链接
        "sameAs": [
          "https://maps.app.goo.gl/XYFWG3cjXBbhB9QT8",
          "https://www.gov.br/pt-br",
          "https://www.gov.br/turismo/pt-br",
          "https://aracaju.se.gov.br/"
        ]
      },
      
      // Website 结构化数据
      {
        "@type": "WebSite",
        "url": localUrl,
        "name": name,
        "inLanguage": locale === "pt" ? "pt-BR" : locale === "zh" ? "zh-CN" : "en-US",
        "isAccessibleForFree": true,
        "publisher": {
          "@type": "Organization",
          "name": "Crab Catwalk Guide",
        }
      }
    ]
  };
}
