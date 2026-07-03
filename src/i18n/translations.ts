export type Locale = "zh" | "en" | "pt";
export type LinkItem = { name: string; url: string };
export type FAQItem = { question: string; answer: string };
export type TransportOption = { name: string; time: string; price: string; steps: string[] };

export type SeasonInfo = { name: string; description: string };

export type Translations = {
  nav: { history: string; architecture: string; monuments: string; visiting: string; transportation: string; gallery: string; reviews: string; faq: string; location: string };
  hero: { tags: string[]; tagline: string; title: string; subtitle: string; cta: string };
  rating: { reviews: string; source: string };
  history: { title: string; intro: string };
  curiosities: { title: string; content: string };
  architecture: { title: string; intro: string; specs: { structure: { title: string; content: string }; design: { title: string; content: string }; optics: { title: string; content: string } }; plaque: { title: string; items: { label: string; value: string }[] } };
  monuments: { title: string; intro: string; items: { name: string; description: string }[] };
  bestTime: { title: string; intro: string; seasons: SeasonInfo[] };
  visiting: { title: string; intro: string; hours: { title: string; content: string; note: string }; price: { title: string; content: string; note: string }; duration: { title: string; content: string; note: string }; tips: { title: string; items: string[] } };
  transportation: { title: string; airport: { title: string; content: string; options: TransportOption[] }; publicTransport?: { title: string; content: string; options: { name: string; description: string; steps: string[] }[] }; cycling?: { title: string; content: string }; localTransport?: { title: string; description?: string; content?: string; steps?: string[] }; city: { title: string; content: string; steps: string[] }; tips: { title: string; items: string[] } };
  gallery: { title: string; viewMore: string };
  reviews: { title: string; subtitle: string; viewMore: string; nearbyTitle: string; nearbyIntro: string; nearbyItems: { name: string; description: string }[] };
  faq: { title: string; subtitle: string; items: FAQItem[] };
  location: { title: string; address: string; openMaps: string };
  footer: { callToAction: string; text: string; made: string; linksTitle: string; links: LinkItem[] };
};

export const translations: Record<Locale, Translations> = {
  zh: {
    nav: { history: "历史沿革", architecture: "景点特色", monuments: "周边玩乐", visiting: "游览信息", transportation: "交通指南", gallery: "照片集锦", reviews: "游客评价", faq: "常见问题", location: "地图位置" },
    hero: { tags: ["滨海步道", "热带风光", "阿拉卡茹必游"], tagline: "巴西 · 塞尔希培州 · 阿拉卡茹", title: "蟹步道", subtitle: "Crab Catwalk · Passarela do Caranguejo · 海滨走廊 · 热带风情", cta: "探索蟹步道" },
    rating: { reviews: "条评价", source: "Google 评论" },
    history: {
      title: "历史沿革与发展",
      intro: `**蟹步道（Crab Catwalk / Passarela do Caranguejo）** 位于巴西塞尔希培州首府阿拉卡茹（Aracaju）的阿塔莱亚区（Atalaia），是该市最著名的海滨旅游景点之一。\n\n**景点特色**：蟹步道是一条著名的海滨木板步道，以其众多的蟹肉餐厅而闻名。这里不仅是品尝当地美味蟹料理的最佳去处，也是欣赏南美洲壮丽日落的热门地点。\n\n**文化意义**：作为阿拉卡茹重要的文化和旅游地标，蟹步道吸引了大量游客前来品尝美食、欣赏海景和体验当地的热带海滨文化。步道沿线有众多餐厅、酒吧和旅游设施，是体验巴西东北部海岸风情的理想之地。`
    },
    curiosities: {
      title: "隐藏的故事：蟹步道的趣味知识",
      content: `**美食天堂**：蟹步道以其众多的蟹肉餐厅而闻名，这里的蟹肉料理是塞尔希培州的代表性美食。游客可以品尝到各种烹饪方式的蟹肉，包括传统的巴西风味。\n\n**日落观赏地**：蟹步道是阿拉卡茹观赏日落的最佳地点之一。傍晚时分，夕阳西下，海面波光粼粼，景色十分壮观。\n\n**旅游发展**：随着阿拉卡茹旅游业的发展，蟹步道逐渐成为该市最重要的旅游名片之一，吸引了越来越多的国内外游客。`
    },
    architecture: {
      title: "步道特色与结构设计",
      intro: "蟹步道是一条精心设计的海滨木板步道，蜿蜒于海滩之上，为游客提供了舒适的海滨漫步体验。步道两侧遍布餐厅、小吃摊和旅游商店。",
      specs: {
        structure: { title: "步道结构", content: "蟹步道采用木质地板铺设，结构坚固且富有热带风情。步道沿海岸线延伸，游客可以在这里悠闲漫步，欣赏大海美景。" },
        design: { title: "设计特色", content: "步道的设计充分考虑了游客的体验，设有观景平台、休息区和餐饮区。夜晚在灯光的映衬下，步道更显浪漫氛围。" },
        optics: { title: "观赏体验", content: "从蟹步道可以欣赏到壮丽的海景和日落。白天海水清澈蔚蓝，夜晚灯光璀璨，为游客提供全天候的视觉享受。" }
      },
      plaque: {
        title: "景点基本信息",
        items: [
          { label: "名称", value: "蟹步道（Crab Catwalk）/ Passarela do Caranguejo" },
          { label: "位置", value: "阿拉卡茹市阿塔莱亚区，巴西" },
          { label: "开放时间", value: "全天开放（餐厅营业时间各异）" },
          { label: "类型", value: "海滨步道、旅游景点" },
          { label: "特色", value: "蟹肉美食、日落观赏" },
          { label: "推荐游览", value: "傍晚至日落时分" }
        ]
      }
    },
    monuments: {
      title: "周边景点与特色",
      intro: "蟹步道周边有多个值得一游的景点和特色体验，让您的阿拉卡茹之行更加丰富多彩。",
      items: [
        { name: "蟹肉餐厅", description: "蟹步道沿线有数十家蟹肉餐厅，提供各种蟹肉料理。这里是品尝塞尔希培州特色美食的最佳去处。" },
        { name: "海滩与日落", description: "阿塔莱亚海滩（Praia de Atalaia）是阿拉卡茹最著名的海滩之一。在蟹步道上可以欣赏到壮丽的海景和日落。" }
      ]
    },
    bestTime: {
      title: "最佳游览时间",
      intro: "阿拉卡茹全年气候温暖，是理想的海滨旅游目的地。根据不同的季节和天气条件，您可以规划最佳的行程安排。\n\n**旱季（9月-次年3月）**：天气晴朗，降雨少，是游览阿拉卡茹的最佳时间。适合海滩活动、观赏日落和户外用餐。\n\n**雨季（4月-8月）**：降雨较多，但气温依然温暖。游客较少，酒店和餐厅价格更优惠，是体验当地文化的绝佳时机。",
      seasons: [
        { name: "🌞 旱季（9月-次年3月）", description: "旱季是游览阿拉卡茹的最佳时间。天气晴朗，降雨少，适合海滩活动和观赏日落。建议提前预订餐厅，尤其是周末和节假日。" },
        { name: "🌧️ 雨季（4月-8月）", description: "雨季降雨较多，但气温依然温暖。游客较少，是体验当地文化的绝佳时机。建议携带雨具，并关注天气预报。" }
      ]
    },
    visiting: {
      title: "实用游览指南",
      intro: "蟹步道是探索阿拉卡茹热带海滨风光的理想去处。为了获得最佳体验，请参考以下实用信息。",
      hours: { title: "开放时间", content: "全天开放\n步道本身24小时开放，沿线餐厅通常在 11:00 - 23:00 营业", note: "建议傍晚前往，可以欣赏美丽的日落景色。" },
      price: { title: "费用信息", content: "步道免费开放\n餐饮消费根据餐厅档次不同", note: "步道本身免费，但餐饮和娱乐消费需另行支付。" },
      duration: { title: "游览时长", content: "建议游览时间：1-3小时\n可以漫步步道、品尝美食、欣赏日落和海景。", note: "时间可根据个人兴趣灵活安排。建议在傍晚时分前往，可以同时欣赏日落。" },
      tips: { title: "游览贴士与注意事项", items: [
        "⚠️ **防晒措施**：巴西热带阳光强烈，请做好防晒措施，携带防晒霜和帽子",
        "穿着舒适的鞋子，方便在步道上漫步",
        "可以拍照，但请尊重他人隐私",
        "品尝蟹肉时请注意食品安全，选择卫生条件良好的餐厅",
        "傍晚和日落时分是最佳游览时段",
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
        "傍晚时分前往可以欣赏到美丽的日落",
        "可以与阿塔莱亚海滩、阿拉卡茹市中心等景点安排在同一行程",
        "阿拉卡茹的交通相对不太拥堵，出行较为方便"
      ] }
    },
    reviews: { 
      title: "游客评价与周边探索", 
      subtitle: "来自蟹步道的声音：Google Maps 真实见证", 
      viewMore: "在 Google Maps 查看更多评价",
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
      { question: "游览蟹步道需要多长时间？", answer: "建议游览时间：1-3小时。您可以漫步步道、品尝美食、欣赏日落和海景。如果在餐厅用餐，时间可能会更长。" },
      { question: "蟹步道有什么特色美食？", answer: "蟹步道以蟹肉料理而闻名。这里的餐厅提供各种烹饪方式的蟹肉，包括煮蟹、烤蟹、蟹肉烩饭等。此外还有新鲜的海鲜和热带水果。" },
      { question: "参观蟹步道有什么注意事项？", answer: "⚠️ 防晒措施：巴西热带阳光强烈，请做好防晒。穿着舒适的鞋子。选择卫生条件良好的餐厅。请保持环境整洁，不要乱扔垃圾。" }
    ]},
    location: { title: "地图位置", address: "Av. Santos Dumont, 5600 - Atalaia\nAracaju - SE, 49035-240\nBrazil\n（巴西阿拉卡茹）", openMaps: "在 Google Maps 查看位置" },
    footer: { callToAction: "作为阿拉卡茹的重要旅游地标，请与我们一起爱护环境、尊重当地文化，共同维护这一美丽的热带海滨空间。", text: "© 2026 蟹步道指南 · 保留所有权利。\n本网站是一个独立的第三方指南项目，致力于准确传播蟹步道信息。我们与巴西政府或其他官方机构没有任何关联。", made: "本网站是一个独立的第三方指南项目。为探索者与学习者而制。", linksTitle: "相关链接", links: [
      { name: "巴西联邦政府", url: "https://www.gov.br/pt-br" },
      { name: "巴西旅游部", url: "https://www.gov.br/turismo/pt-br" },
      { name: "巴西官方电子签证系统", url: "https://brazil.vfsevisa.com/" },
      { name: "巴西国家地理与统计局（IBGE）- 阿拉卡茹市官方地理历史库", url: "https://cidades.ibge.gov.br/brasil/se/aracaju/historico" },
      { name: "维基百科：螃蟹步道", url: "https://pt.wikipedia.org/wiki/Passarela_do_Caranguejo" },
      { name: "阿拉卡茹市政府官网：地标文化身份推广", url: "https://aracaju.se.gov.br/noticias/114269/prefeitura_de_aracaju_promove_festival_do_caranguejo_na_orla_da_atalaia.html" }
    ]}
  },
  en: {
    nav: { history: "History", architecture: "Features", monuments: "Nearby", visiting: "Visit Info", transportation: "Transportation", gallery: "Gallery", reviews: "Reviews", faq: "FAQ", location: "Location" },
    hero: { tags: ["Seaside Walkway", "Tropical Scenery", "Aracaju Must-See"], tagline: "Brazil · Sergipe · Aracaju", title: "Crab Catwalk", subtitle: "Crab Catwalk · Passarela do Caranguejo · Seaside Promenade · Tropical Charm", cta: "Explore Crab Catwalk" },
    rating: { reviews: "reviews", source: "Google Reviews" },
    history: {
      title: "History & Development",
      intro: `The Crab Catwalk (Passarela do Caranguejo) is located in the Atalaia district of Aracaju, the capital of Sergipe state in Brazil. It is one of the city's most famous seaside tourist attractions.\n\n**Attraction Features**: The Crab Catwalk is a famous wooden seaside promenade, known for its numerous crab restaurants. It is not only the best place to taste local delicious crab dishes, but also a popular spot for watching spectacular sunsets in South America.\n\n**Cultural Significance**: As an important tourist and cultural landmark in Aracaju, the Crab Catwalk attracts many tourists to taste food, enjoy sea views and experience the local tropical seaside culture. The walkway is lined with numerous restaurants, bars and tourist facilities, making it an ideal place to experience the coastal style of northeastern Brazil.`
    },
    curiosities: {
      title: "Hidden Stories: Fun Facts About Crab Catwalk",
      content: `**Food Paradise**: The Crab Catwalk is famous for its numerous crab restaurants. The crab dishes here are representative cuisine of Sergipe state. Visitors can taste crab prepared in various cooking styles, including traditional Brazilian flavors.\n\n**Sunset Viewing Spot**: The Crab Catwalk is one of the best places to watch sunset in Aracaju. In the evening, the sun sets in the west, and the sea sparkles, creating a spectacular view.\n\n**Tourism Development**: With the development of tourism in Aracaju, the Crab Catwalk has gradually become one of the city's most important tourist attractions, attracting more and more domestic and foreign tourists.`
    },
    architecture: {
      title: "Walkway Features & Structure Design",
      intro: "The Crab Catwalk is a carefully designed wooden seaside promenade that winds along the beach, providing visitors with a comfortable seaside walking experience. The walkway is lined with restaurants, snack stands and tourist shops.",
      specs: {
        structure: { title: "Walkway Structure", content: "The Crab Catwalk is paved with wooden planks, with a sturdy structure and tropical flair. The walkway extends along the coastline, where visitors can leisurely stroll and enjoy the sea views." },
        design: { title: "Design Features", content: "The design of the walkway fully considers the visitor experience, with viewing platforms, rest areas and dining areas. At night, under the lighting, the walkway appears even more romantic." },
        optics: { title: "Viewing Experience", content: "From the Crab Catwalk, you can enjoy spectacular sea views and sunsets. The sea water is clear and blue during the day, and the lights are bright at night, providing visitors with all-day visual enjoyment." }
      },
      plaque: {
        title: "Basic Attraction Information",
        items: [
          { label: "Name", value: "Crab Catwalk / Passarela do Caranguejo" },
          { label: "Location", value: "Atalaia District, Aracaju, Brazil" },
          { label: "Opening Hours", value: "Open 24 hours (restaurant hours vary)" },
          { label: "Type", value: "Seaside promenade, Tourist attraction" },
          { label: "Features", value: "Crab cuisine, Sunset viewing" },
          { label: "Best Time to Visit", value: "Evening to sunset" }
        ]
      }
    },
    monuments: {
      title: "Nearby Attractions & Features",
      intro: "There are several attractions and special experiences worth visiting around the Crab Catwalk, making your trip to Aracaju more colorful.",
      items: [
        { name: "Crab Restaurants", description: "There are dozens of crab restaurants along the Crab Catwalk, offering various crab dishes. This is the best place to taste Sergipe's specialty cuisine." },
        { name: "Beach & Sunset", description: "Atalaia Beach (Praia de Atalaia) is one of the most famous beaches in Aracaju. You can enjoy spectacular sea views and sunsets from the Crab Catwalk." }
      ]
    },
    bestTime: {
      title: "Best Time to Visit",
      intro: "Aracaju has warm weather year-round, making it an ideal seaside tourist destination. You can plan the best itinerary according to different seasons and weather conditions.\n\n**Dry Season (September-March)**: Sunny weather with little rain, the best time to visit Aracaju. Suitable for beach activities, sunset watching and outdoor dining.\n\n**Rainy Season (April-August)**: More rainfall, but temperatures remain warm. Fewer tourists, better prices for hotels and restaurants, an excellent time to experience local culture.",
      seasons: [
        { name: "🌞 Dry Season (September-March)", description: "The dry season is the best time to visit Aracaju. Sunny weather with little rain, suitable for beach activities and sunset watching. It is recommended to book restaurants in advance, especially on weekends and holidays." },
        { name: "🌧️ Rainy Season (April-August)", description: "More rainfall in the rainy season, but temperatures remain warm. Fewer tourists, an excellent time to experience local culture. It is recommended to bring rain gear and pay attention to weather forecasts." }
      ]
    },
    visiting: {
      title: "Practical Visit Guide",
      intro: "The Crab Catwalk is an ideal place to explore the tropical seaside scenery of Aracaju. For the best experience, please refer to the following practical information.",
      hours: { title: "Opening Hours", content: "Open 24 hours\nWalkway open all day, restaurants usually 11:00 - 23:00", note: "It is recommended to go in the evening to enjoy the beautiful sunset." },
      price: { title: "Cost Information", content: "Walkway free admission\nDining costs vary by restaurant", note: "The walkway itself is free, but dining and entertainment costs are paid separately." },
      duration: { title: "Visit Duration", content: "Suggested visit time: 1-3 hours\nYou can stroll the walkway, taste food, and enjoy sunset and sea views.", note: "Time can be arranged flexibly according to personal interest. It is recommended to go in the evening to enjoy the sunset." },
      tips: { title: "Visit Tips & Important Notes", items: [
        "⚠️ **Sun Protection**: Brazilian tropical sun is strong, please take sun protection measures, bring sunscreen and hat",
        "Wear comfortable shoes for walking on the walkway",
        "Photography is allowed, but please respect others' privacy",
        "Pay attention to food safety when tasting crab, choose restaurants with good hygiene conditions",
        "Evening and sunset are the best visiting times",
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
        "Go in the evening to enjoy the beautiful sunset",
        "Combine with Atalaia Beach, downtown Aracaju and other attractions in the same trip",
        "Aracaju's traffic is relatively less congested, making travel more convenient"
      ] }
    },
    reviews: { 
      title: "Visitor Reviews & Nearby Exploration", 
      subtitle: "Voices from Crab Catwalk: Real Testimonials from Google Maps", 
      viewMore: "View More Reviews on Google Maps",
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
      { question: "How long does it take to visit Crab Catwalk?", answer: "Suggested visit time: 1-3 hours. You can stroll the walkway, taste food, and enjoy sunset and sea views. If you dine at restaurants, it may take longer." },
      { question: "What specialty foods are available at Crab Catwalk?", answer: "Crab Catwalk is famous for its crab dishes. Restaurants here offer crab prepared in various cooking styles, including boiled crab, grilled crab, crab rice, etc. There are also fresh seafood and tropical fruits." },
      { question: "What are the important notes for visiting Crab Catwalk?", answer: "⚠️ Sun Protection: Brazilian tropical sun is strong, please protect yourself from the sun. Wear comfortable shoes. Choose restaurants with good hygiene conditions. Please keep the environment clean and do not litter." }
    ]},
    location: { title: "Map Location", address: "Av. Santos Dumont, 5600 - Atalaia\nAracaju - SE, 49035-240\nBrazil", openMaps: "View Location on Google Maps" },
    footer: { callToAction: "As an important tourist landmark in Aracaju, please join us in caring for the environment and respecting local culture. Keep the attraction clean and maintain this beautiful tropical seaside space together.", text: "© 2026 Crab Catwalk Guide · All rights reserved.\nThis website is an independent third-party guide project dedicated to accurately sharing information about Crab Catwalk. We are not affiliated with the Brazilian government or any official authority.", made: "This website is an independent third-party guide project. Made for explorers and learners.", linksTitle: "Related Links", links: [
      { name: "Brazil Federal Government", url: "https://www.gov.br/pt-br" },
      { name: "Brazil Ministry of Tourism", url: "https://www.gov.br/turismo/pt-br" },
      { name: "Brazil Official E-Visa System", url: "https://brazil.vfsevisa.com/" },
      { name: "IBGE - Aracaju Historical Database", url: "https://cidades.ibge.gov.br/brasil/se/aracaju/historico" },
      { name: "Wikipedia: Passarela do Caranguejo", url: "https://pt.wikipedia.org/wiki/Passarela_do_Caranguejo" },
      { name: "Aracaju City Hall: Cultural Promotion", url: "https://aracaju.se.gov.br/noticias/114269/prefeitura_de_aracaju_promove_festival_do_caranguejo_na_orla_da_atalaia.html" }
    ]}
  },
  pt: {
    nav: { history: "História", architecture: "Características", monuments: "Arredores", visiting: "Informações", transportation: "Transporte", gallery: "Galeria", reviews: "Avaliações", faq: "FAQ", location: "Localização" },
    hero: { tags: ["Passeio Marítimo", "Paisagem Tropical", "Imperdível em Aracaju"], tagline: "Brasil · Sergipe · Aracaju", title: "Passarela do Caranguejo", subtitle: "Crab Catwalk · Passarela do Caranguejo · Passeio Marítimo · Encanto Tropical", cta: "Explorar a Passarela" },
    rating: { reviews: "avaliações", source: "Google Avaliações" },
    history: {
      title: "História e Desenvolvimento",
      intro: `A Passarela do Caranguejo está localizada no bairro de Atalaia, em Aracaju, capital do estado de Sergipe, no Brasil. É um dos atrativos turísticos costeiros mais famosos da cidade.\n\n**Características do Atrativo**: A Passarela do Caranguejo é um famoso passeio marítimo de madeira, conhecido por seus numerosos restaurantes de caranguejo. É não apenas o melhor lugar para provar os deliciosos pratos de caranguejo locais, mas também um local popular para assistir aos espetaculares pores do sol na América do Sul.\n\n**Significado Cultural**: Como um importante marco turístico e cultural em Aracaju, a Passarela do Caranguejo atrai muitos turistas para provar comida, desfrutar das vistas para o mar e experimentar a cultura costeira tropical local. O passeio está repleto de numerosos restaurantes, bares e instalações turísticas, tornando-se um lugar ideal para experimentar o estilo de vida costeiro do nordeste do Brasil.`
    },
    curiosities: {
      title: "Histórias Ocultas: Curiosidades sobre a Passarela",
      content: `**Paraíso Gastronômico**: A Passarela do Caranguejo é famosa por seus numerosos restaurantes de caranguejo. Os pratos de caranguejo aqui são a culinária representativa do estado de Sergipe. Os visitantes podem provar caranguejo preparado de diversas formas culinárias, incluindo sabores tradicionais brasileiros.\n\n**Lugar para Ver Pores do Sol**: A Passarela do Caranguejo é um dos melhores lugares para ver o pôr do sol em Aracaju. À tarde, o sol se põe no oeste e o mar brilha, criando uma vista espetacular.\n\n**Desenvolvimento Turístico**: Com o desenvolvimento do turismo em Aracaju, a Passarela do Caranguejo tornou-se gradualmente um dos atrativos turísticos mais importantes da cidade, atraindo cada vez mais turistas nacionais e estrangeiros.`
    },
    architecture: {
      title: "Características do Passeio e Design Estrutural",
      intro: "A Passarela do Caranguejo é um passeio marítimo de madeira cuidadosamente projetado que serpenteia ao longo da praia, proporcionando aos visitantes uma experiência de caminhada costeira confortável. O passeio é ladeado por restaurantes, barracas de comida e lojas turísticas.",
      specs: {
        structure: { title: "Estrutura do Passeio", content: "A Passarela do Caranguejo é pavimentada com tábuas de madeira, com estrutura sólida e ar tropical. O passeio se estende ao longo da linha costeira, onde os visitantes podem caminhar com calma e desfrutar das vistas para o mar." },
        design: { title: "Características do Design", content: "O design do passeio considera totalmente a experiência do visitante, com plataformas de observação, áreas de descanso e áreas de jantar. À noite, sob a iluminação, o passeio parece ainda mais romântico." },
        optics: { title: "Experiência de Visualização", content: "Da Passarela do Caranguejo, você pode desfrutar de espetaculares vistas para o mar e pores do sol. A água do mar é clara e azul durante o dia, e as luzes brilham à noite, proporcionando aos visitantes prazer visual o dia todo." }
      },
      plaque: {
        title: "Informações Básicas do Atrativo",
        items: [
          { label: "Nome", value: "Passarela do Caranguejo / Crab Catwalk" },
          { label: "Localização", value: "Bairro de Atalaia, Aracaju, Brasil" },
          { label: "Horário", value: "Aberto 24 horas (horários dos restaurantes variam)" },
          { label: "Tipo", value: "Passeio marítimo, Atrativo turístico" },
          { label: "Características", value: "Culinária de caranguejo, Vista do pôr do sol" },
          { label: "Melhor Época", value: "Tarde até o pôr do sol" }
        ]
      }
    },
    monuments: {
      title: "Atrações Próximas e Características",
      intro: "Existem várias atrações e experiências especiais dignas de visita ao redor da Passarela do Caranguejo, tornando sua viagem a Aracaju mais colorida.",
      items: [
        { name: "Restaurantes de Caranguejo", description: "Existem dezenas de restaurantes de caranguejo ao longo da Passarela do Caranguejo, oferecendo vários pratos de caranguejo. Este é o melhor lugar para provar a culinária especial de Sergipe." },
        { name: "Praia e Pôr do Sol", description: "A Praia de Atalaia (Praia de Atalaia) é uma das praias mais famosas de Aracaju. Você pode desfrutar de vistas espetaculares para o mar e pores do sol da Passarela do Caranguejo." }
      ]
    },
    bestTime: {
      title: "Melhor Época para Visitar",
      intro: "Aracaju tem clima quente o ano todo, sendo um destino turístico costeiro ideal. Você pode planejar o melhor itinerário de acordo com diferentes estações e condições climáticas.\n\n**Estação Seca (setembro-março)**: Tempo ensolarado com pouca chuva, a melhor época para visitar Aracaju. Adequado para atividades de praia, observação do pôr do sol e jantares ao ar livre.\n\n**Estação Chuvosa (abril-agosto)**: Mais chuvas, mas as temperaturas permanecem quentes. Menos turistas, melhores preços para hotéis e restaurantes, uma excelente oportunidade para experimentar a cultura local.",
      seasons: [
        { name: "🌞 Estação Seca (setembro-março)", description: "A estação seca é a melhor época para visitar Aracaju. Tempo ensolarado com pouca chuva, adequado para atividades de praia e observação do pôr do sol. Recomenda-se reservar restaurantes com antecedência, especialmente nos fins de semana e feriados." },
        { name: "🌧️ Estação Chuvosa (abril-agosto)", description: "Mais chuvas na estação chuvosa, mas as temperaturas permanecem quentes. Menos turistas, uma excelente oportunidade para experimentar a cultura local. Recomenda-se levar equipamento de chuva e prestar atenção às previsões meteorológicas." }
      ]
    },
    visiting: {
      title: "Guia Prática de Visita",
      intro: "A Passarela do Caranguejo é um lugar ideal para explorar a paisagem costeira tropical de Aracaju. Para obter a melhor experiência, consulte as seguintes informações práticas.",
      hours: { title: "Horário de Abertura", content: "Aberto 24 horas\nPasseio aberto o dia todo, restaurantes geralmente 11:00 - 23:00", note: "Recomenda-se ir à tarde para desfrutar do belo pôr do sol." },
      price: { title: "Informações de Custo", content: "Entrada gratuita no passeio\nCustos de refeição variam conforme o restaurante", note: "O passeio em si é gratuito, mas os custos de refeição e entretenimento são pagos separadamente." },
      duration: { title: "Duração da Visita", content: "Tempo sugerido: 1-3 horas\nVocê pode caminhar pelo passeio, provar comida e desfrutar do pôr do sol e vistas para o mar.", note: "O tempo pode ser organizado de forma flexível de acordo com o interesse pessoal. Recomenda-se ir à tarde para desfrutar do pôr do sol." },
      tips: { title: "Dicas de Visita e Notas Importantes", items: [
        "⚠️ **Proteção Solar**: O sol tropical brasileiro é forte, por favor tome medidas de proteção solar, traga protetor solar e chapéu",
        "Use sapatos confortáveis para caminhar pelo passeio",
        "Fotografia é permitida, mas por favor respeite a privacidade dos outros",
        "Preste atenção à segurança alimentar ao provar caranguejo, escolha restaurantes com boas condições de higiene",
        "A tarde e o pôr do sol são os melhores momentos para visitar",
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
        "Vá à tarde para desfrutar do belo pôr do sol",
        "Combine com Praia de Atalaia, centro de Aracaju e outras atrações na mesma viagem",
        "O tráfego em Aracaju é relativamente menos congestionado, tornando a viagem mais conveniente"
      ] }
    },
    reviews: { 
      title: "Avaliações de Visitantes e Exploração Próxima", 
      subtitle: "Vozes da Passarela do Caranguejo: Testemunhos Reais do Google Maps", 
      viewMore: "Ver Mais Avaliações no Google Maps",
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
      { question: "Quanto tempo é necessário para visitar a Passarela do Caranguejo?", answer: "Tempo sugerido: 1-3 horas. Você pode caminhar pelo passeio, provar comida e desfrutar do pôr do sol e vistas para o mar. Se comer nos restaurantes, pode levar mais tempo." },
      { question: "Qual comida especial está disponível na Passarela do Caranguejo?", answer: "A Passarela do Caranguejo é famosa por seus pratos de caranguejo. Os restaurantes aqui oferecem caranguejo preparado de diversas formas culinárias, incluindo caranguejo cozido, caranguejo grelhado, arroz com caranguejo, etc. Também há frutos do mar frescos e frutas tropicais." },
      { question: "Quais são as notas importantes para visitar a Passarela do Caranguejo?", answer: "⚠️ Proteção Solar: O sol tropical brasileiro é forte, por favor proteja-se do sol. Use sapatos confortáveis. Escolha restaurantes com boas condições de higiene. Por favor mantenha o ambiente limpo e não jogue lixo." }
    ]},
    location: { title: "Localização", address: "Av. Santos Dumont, 5600 - Atalaia\nAracaju - SE, 49035-240\nBrasil", openMaps: "Ver no Google Maps" },
    footer: { callToAction: "Como importante marco turístico em Aracaju, junte-se a nós para cuidar do meio ambiente e respeitar a cultura local. Mantenha a atração limpa e conserve este belo espaço costeiro tropical juntos.", text: "© 2026 Guia da Passarela do Caranguejo · Todos os direitos reservados.\nEste site é um projeto independente de guia de terceiros dedicado a compartilhar informações precisas sobre a Passarela do Caranguejo. Não estamos afiliados ao governo brasileiro ou a nenhuma autoridade oficial.", made: "Este site é um projeto independente de guia de terceiros. Feito para exploradores e aprendizes.", linksTitle: "Links Relacionados", links: [
      { name: "Governo Federal do Brasil", url: "https://www.gov.br/pt-br" },
      { name: "Ministério do Turismo do Brasil", url: "https://www.gov.br/turismo/pt-br" },
      { name: "Sistema Oficial de Visto Eletrônico do Brasil", url: "https://brazil.vfsevisa.com/" },
      { name: "IBGE - Banco de Dados Históricos de Aracaju", url: "https://cidades.ibge.gov.br/brasil/se/aracaju/historico" },
      { name: "Wikipedia: Passarela do Caranguejo", url: "https://pt.wikipedia.org/wiki/Passarela_do_Caranguejo" },
      { name: "Prefeitura de Aracaju: Promoção Cultural", url: "https://aracaju.se.gov.br/noticias/114269/prefeitura_de_aracaju_promove_festival_do_caranguejo_na_orla_da_atalaia.html" }
    ]}
  }
};
