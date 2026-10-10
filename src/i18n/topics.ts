// 长尾专题页内容（SEO 报告 P1）：4 个高相关葡萄牙语主题页，三语。
// 每页提供独立、实用的信息，并互相内链，避免与首页段落重复。

export type TopicSlug =
  | "restaurantes-passarela-do-caranguejo"
  | "onde-fica-passarela-do-caranguejo"
  | "caranguejo-gigante-aracaju"
  | "passarela-do-caranguejo-a-noite";

export type TopicLocale = "zh" | "en" | "pt";

export interface TopicSection {
  heading: string;
  body: string;
}

export interface TopicFaq {
  question: string;
  answer: string;
}

export interface TopicContent {
  slug: TopicSlug;
  title: string; // H1
  metaTitle: string; // document <title>
  metaDescription: string;
  intro: string;
  sections: TopicSection[];
  faq: TopicFaq[];
}

export type TopicTranslations = Record<TopicLocale, TopicContent>;

export const TOPIC_SLUGS: TopicSlug[] = [
  "restaurantes-passarela-do-caranguejo",
  "onde-fica-passarela-do-caranguejo",
  "caranguejo-gigante-aracaju",
  "passarela-do-caranguejo-a-noite",
];

export const TOPICS: Record<TopicSlug, TopicTranslations> = {
  "restaurantes-passarela-do-caranguejo": {
    pt: {
      slug: "restaurantes-passarela-do-caranguejo",
      title: "Restaurantes da Passarela do Caranguejo",
      metaTitle: "Restaurantes da Passarela do Caranguejo em Aracaju: guia de caranguejo",
      metaDescription:
        "Onde comer caranguejo na Passarela do Caranguejo, Aracaju: a caranguejada, tipos de restaurante, faixa de preço e dicas para escolher bem.",
      intro:
        "A Passarela do Caranguejo é, acima de tudo, uma **rua de gastronomia**. Ao longo do calçadão ficam dezenas de restaurantes, barracas e quiosques dedicados ao caranguejo e a outros frutos do mar. Aqui o prato principal é sempre o mesmo — mas o estilo de servir muda de lugar para lugar.",
      sections: [
        {
          heading: "O prato principal: a caranguejada",
          body:
            "O mais tradicional é a **caranguejada**: o caranguejo cozido no seu próprio caldo com temperos, servido com pirão, farofa e vatapá. Alguns lugares também servem caranguejo recheado, grelhado ou na moqueca. Pergunte sempre o preço por quilo ou por unidade antes de sentar.",
        },
        {
          heading: "Tipos de estabelecimento",
          body:
            "Há desde restaurantes estruturados com salão amplo e garçons, até barracas simples onde você escolhe o caranguejo no balcão. As barracas costumam ser mais em conta; os restaurantes maiores oferecem mais conforto e estacionamento. Todos ficam no mesmo trecho, então dá para caminhar e comparar.",
        },
        {
          heading: "Preço e pagamento",
          body:
            "O valor gira em torno do preço do caranguejo por quilo, que varia com a temporada. Leve dinheiro para as barracas menores e prefira cartão nos restaurantes maiores. Para economizar, evite os dias de maior movimento e vá em grupos para dividir porções.",
        },
      ],
      faq: [
        {
          question: "Precisa reservar mesa na Passarela do Caranguejo?",
          answer:
            "Em geral não é necessário. Os restaurantes e barracas têm muitas mesas. Nos fins de semana e feriados, os lugares maiores podem lotar à noite — chegar mais cedo evita fila.",
        },
        {
          question: "Tem opção para quem não come caranguejo?",
          answer:
            "Sim. Quase todos os locais servem peixes, camarão, bolinho de caranguejo, porções e petiscos. A caranguejada pode ser a estrela, mas a variedade de frutos do mar é ampla.",
        },
        {
          question: "Qual a faixa de preço para comer lá?",
          answer:
            "Depende do tipo de lugar e do preço do caranguejo por quilo na data. Barracas são mais acessíveis; restaurantes estruturados cobram mais pelo conforto. Confirme o valor antes de pedir.",
        },
        {
          question: "A Passarela serve só caranguejo?",
          answer:
            "Não. Além do caranguejo, é comum encontrar camarão, peixes, caldos, tapioca e doces regionais. A ideia é uma refeição de frutos do mar à beira-mar.",
        },
      ],
    },
    en: {
      slug: "restaurantes-passarela-do-caranguejo",
      title: "Restaurants at Crab Catwalk",
      metaTitle: "Crab Catwalk (Passarela do Caranguejo) Restaurants Aracaju: crab guide",
      metaDescription:
        "Where to eat crab at the Crab Catwalk in Aracaju: the caranguejada, types of restaurants, price range and tips for choosing well.",
      intro:
        "The Crab Catwalk is, above all, a **dining street**. Along the boardwalk sit dozens of restaurants, stalls and kiosks devoted to crab and other seafood. The star dish is always the same — but the way it is served changes from place to place.",
      sections: [
        {
          heading: "The signature dish: caranguejada",
          body:
            "The most traditional is the **caranguejada**: crab boiled in its own broth with seasoning, served with pirão (fish purée), farofa and vatapá. Some places also serve stuffed, grilled or moqueca-style crab. Always ask the price per kilo or per unit before sitting down.",
        },
        {
          heading: "Types of venue",
          body:
            "There are full restaurants with large dining rooms and waiters, and simple stalls where you pick the crab at the counter. Stalls are usually cheaper; larger restaurants add comfort and parking. They all sit on the same stretch, so you can walk and compare.",
        },
        {
          heading: "Price and payment",
          body:
            "Costs revolve around the price of crab per kilo, which changes with the season. Carry cash for the smaller stalls and prefer card at the larger restaurants. To save, avoid peak days and go in groups to share portions.",
        },
      ],
      faq: [
        {
          question: "Do I need to book a table at the Crab Catwalk?",
          answer:
            "Usually not. The restaurants and stalls have many tables. On weekends and holidays the larger places can fill up at night — arriving earlier avoids a queue.",
        },
        {
          question: "Is there an option for people who don't eat crab?",
          answer:
            "Yes. Nearly every spot also serves fish, shrimp, crab cakes, sharing plates and snacks. Crab may be the star, but the seafood selection is broad.",
        },
        {
          question: "What is the typical price range to eat there?",
          answer:
            "It depends on the venue and the price of crab per kilo on the day. Stalls are more affordable; structured restaurants charge more for comfort. Confirm the value before ordering.",
        },
        {
          question: "Is the Crab Catwalk only about crab?",
          answer:
            "No. Besides crab you'll commonly find shrimp, fish, broths, tapioca and regional sweets. The idea is a seafood meal by the sea.",
        },
      ],
    },
    zh: {
      slug: "restaurantes-passarela-do-caranguejo",
      title: "蟹步道餐厅攻略",
      metaTitle: "阿拉卡茹蟹步道（Passarela do Caranguejo）餐厅：吃蟹指南",
      metaDescription:
        "蟹步道（Passarela do Caranguejo）哪里吃蟹：caranguejada 炖蟹、餐厅类型、价格区间与挑选建议。",
      intro:
        "蟹步道本质上是一条**美食街**。木栈道两旁密布着数十家餐厅、摊位与小亭，几乎都主打螃蟹与其他海鲜。这里的招牌菜始终如一——但每家呈现的方式各有不同。",
      sections: [
        {
          heading: "招牌菜：caranguejada 炖蟹",
          body:
            "最传统的是 **caranguejada**：螃蟹连同自身汤汁与香料一起炖煮，配 pirão（鱼蓉）、farofa 与 vatapá 一起上桌。部分店家也供应酿蟹、烤蟹或椰奶炖蟹（moqueca）。入座前务必先问清按公斤或按只计价。",
        },
        {
          heading: "餐厅与摊位类型",
          body:
            "既有带大堂与服务员的正规餐厅，也有在柜台前现点现做的简易摊位。摊位通常更实惠；大型餐厅则提供更好的舒适度与停车。它们集中在同一段路上，边走边比很方便。",
        },
        {
          heading: "价格与支付",
          body:
            "花费主要取决于当日螃蟹每公斤的价格，会随季节波动。小摊位建议备现金，大餐厅多可刷卡。想省钱可避开高峰日，并结伴分食大份量。",
        },
      ],
      faq: [
        {
          question: "蟹步道需要提前订位吗？",
          answer:
            "通常不必。餐厅与摊位的座位很多。周末和节假日的晚间大店可能客满——早点到可避免排队。",
        },
        {
          question: "不吃螃蟹有别的選择吗？",
          answer:
            "有。几乎每家都供应鱼、虾、蟹肉球、拼盘与小吃。螃蟹虽是主角，但海鲜种类相当丰富。",
        },
        {
          question: "在那里吃一顿大概多少钱？",
          answer:
            "取决于店家类型与当日螃蟹每公斤价格。摊位更平价，正规餐厅因舒适度收费更高。点餐前先确认价格。",
        },
        {
          question: "蟹步道只卖螃蟹吗？",
          answer:
            "不是。除螃蟹外，常见还有虾、鱼、浓汤、木薯饼与本地甜点，整体是海边的一顿海鲜大餐。",
        },
      ],
    },
  },

  "onde-fica-passarela-do-caranguejo": {
    pt: {
      slug: "onde-fica-passarela-do-caranguejo",
      title: "Onde Fica a Passarela do Caranguejo",
      metaTitle: "Onde fica a Passarela do Caranguejo em Aracaju: endereço e como chegar",
      metaDescription:
        "Endereço da Passarela do Caranguejo na Orla de Atalaia, Aracaju: como chegar de carro, táxi, app e transporte público.",
      intro:
        "A Passarela do Caranguejo fica na **Orla de Atalaia**, o principal calçadão de lazer de Aracaju, no bairro de Atalaia. O endereço é **Av. Santos Dumont, 5600 - Atalaia, Aracaju - SE, 49035-240, Brasil**.",
      sections: [
        {
          heading: "Localização exata",
          body:
            "Ela ocupa o trecho sul da Orla de Atalaia, à beira-mar. É a parte mais movimentada da avenida, fácil de identificar pela estátua gigante de caranguejo na entrada e pelas luzes dos restaurantes à noite.",
        },
        {
          heading: "Como chegar",
          body:
            "De carro ou app (Uber, 99), basta informar 'Passarela do Caranguejo' ou o endereço acima; o trajeto do centro leva cerca de 15 a 20 minutos, dependendo do trânsito. De ônibus, linhas que atendem a Orla de Atalaia param nas proximidades — desça na parada mais próxima da entrada dos restaurantes.",
        },
        {
          heading: "Estacionamento e dicas",
          body:
            "Há estacionamentos pagos na Orla e vagas em torno da avenida. À noite o movimento é intenso, então chegar mais cedo facilita a vaga. Se estiver hospedado na Orla de Atalaia, dá para ir a pé.",
        },
      ],
      faq: [
        {
          question: "A Passarela fica na praia de Atalaia?",
          answer:
            "Sim, ela fica na Orla de Atalaia, no bairro de Atalaia, à beira-mar. A Praia de Atalaia é a praia ao lado; a passarela é a parte de restaurantes e lazer.",
        },
        {
          question: "Qual o CEP e o endereço completo?",
          answer:
            "Av. Santos Dumont, 5600 - Atalaia, Aracaju - SE, 49035-240, Brasil. O CEP é 49035-240.",
        },
        {
          question: "Dá para ir de transporte público?",
          answer:
            "Sim. Linhas de ônibus que atendem a Orla de Atalaia param perto. Apps de transporte por aplicativo também chegam direto à entrada com mais conforto.",
        },
        {
          question: "É seguro ir à noite?",
          answer:
            "A Orla de Atalaia é uma área de lazer movimentada e bastante frequentada à noite. Como em qualquer destino urbano, mantenha pertences à vista e use transporte de app para voltar.",
        },
      ],
    },
    en: {
      slug: "onde-fica-passarela-do-caranguejo",
      title: "Where Is the Crab Catwalk",
      metaTitle: "Where is the Crab Catwalk in Aracaju: address and how to get there",
      metaDescription:
        "Address of the Crab Catwalk on the Orla de Atalaia, Aracaju: how to get there by car, taxi, rideshare and public transport.",
      intro:
        "The Crab Catwalk is on the **Orla de Atalaia**, Aracaju's main seafront leisure promenade, in the Atalaia neighbourhood. The address is **Av. Santos Dumont, 5600 - Atalaia, Aracaju - SE, 49035-240, Brazil**.",
      sections: [
        {
          heading: "Exact location",
          body:
            "It occupies the southern stretch of the Orla de Atalaia, by the sea. It is the busiest part of the avenue, easy to spot by the giant crab statue at the entrance and the restaurant lights at night.",
        },
        {
          heading: "How to get there",
          body:
            "By car or rideshare (Uber, 99), just say 'Passarela do Caranguejo' or the address above; from the centre it takes about 15–20 minutes depending on traffic. By bus, lines serving the Orla de Atalaia stop nearby — alight at the stop closest to the restaurant entrance.",
        },
        {
          heading: "Parking and tips",
          body:
            "There are paid car parks on the Orla and spaces along the avenue. At night it gets busy, so arriving earlier makes parking easier. If you stay on the Orla de Atalaia, you can walk.",
        },
      ],
      faq: [
        {
          question: "Is the Crab Catwalk on Atalaia beach?",
          answer:
            "Yes, it is on the Orla de Atalaia in the Atalaia neighbourhood, by the sea. Atalaia Beach is the beach next to it; the walkway is the restaurant and leisure part.",
        },
        {
          question: "What is the full address and postcode?",
          answer:
            "Av. Santos Dumont, 5600 - Atalaia, Aracaju - SE, 49035-240, Brazil. The postcode is 49035-240.",
        },
        {
          question: "Can I get there by public transport?",
          answer:
            "Yes. Buses serving the Orla de Atalaia stop nearby. Rideshare apps also drop you right at the entrance with more comfort.",
        },
        {
          question: "Is it safe to go at night?",
          answer:
            "The Orla de Atalaia is a busy leisure area, well frequented at night. As in any city destination, keep belongings in view and use a rideshare app for the return.",
        },
      ],
    },
    zh: {
      slug: "onde-fica-passarela-do-caranguejo",
      title: "蟹步道在哪里",
      metaTitle: "蟹步道（Passarela do Caranguejo）在阿拉卡茹哪里：地址与交通",
      metaDescription:
        "蟹步道位于阿拉卡茹 Atalaia 海滨大道（Orla de Atalaia）的地址：开车、出租车、网约车与公交如何到达。",
      intro:
        "蟹步道位于阿拉卡茹最主要的海滨休闲大道 **Orla de Atalaia**（阿塔莱亚海滨），属于 Atalaia 区。地址为 **Av. Santos Dumont, 5600 - Atalaia, Aracaju - SE, 49035-240, Brazil**。",
      sections: [
        {
          heading: "确切位置",
          body:
            "它处于 Orla de Atalaia 南段、紧邻海边，是整条大道最热闹的一段，凭入口处的巨型螃蟹雕像与夜晚的餐厅灯光很容易辨认。",
        },
        {
          heading: "如何到达",
          body:
            "开车或网约车（Uber、99）直接说「Passarela do Caranguejo」或上述地址即可；从市中心约 15–20 分钟，视路况而定。乘公交可搭前往 Orla de Atalaia 的线路，在离餐厅入口最近的站下车。",
        },
        {
          heading: "停车与小提示",
          body:
            "海滨沿线有收费停车场及路边车位。夜间人流密集，早点到更容易停车。若下榻在 Orla de Atalaia 一带，步行即可到达。",
        },
      ],
      faq: [
        {
          question: "蟹步道在阿塔莱亚海滩上吗？",
          answer:
            "是的，它位于 Atalaia 区的 Orla de Atalaia 海滨。阿塔莱亚海滩（Praia de Atalaia）是旁边的海滩；蟹步道是其中的餐饮与休闲段。",
        },
        {
          question: "完整地址与邮编是什么？",
          answer:
            "Av. Santos Dumont, 5600 - Atalaia, Aracaju - SE, 49035-240, Brazil，邮编 49035-240。",
        },
        {
          question: "能坐公共交通去吗？",
          answer:
            "可以。开往 Orla de Atalaia 的公交线路在附近停靠；网约车也能直接送到入口，更省事。",
        },
        {
          question: "晚上去安全吗？",
          answer:
            "Orla de Atalaia 是热闹的休闲区，夜间人潮较多。像任何城市景点一样，财物随身、回程用网约车即可。",
        },
      ],
    },
  },

  "caranguejo-gigante-aracaju": {
    pt: {
      slug: "caranguejo-gigante-aracaju",
      title: "O Caranguejo Gigante de Aracaju",
      metaTitle: "Caranguejo Gigante da Passarela do Caranguejo em Aracaju: a estátua",
      metaDescription:
        "A estátua gigante de caranguejo na Passarela do Caranguejo, Aracaju: o que é, onde fica e por que virou símbolo da cidade.",
      intro:
        "Na entrada da Passarela do Caranguejo há uma **estátua gigante de caranguejo** que se tornou o cartão-postal mais fotografado de Aracaju. É o ponto de encontro de quem visita a orla e a primeira parada de quase toda foto.",
      sections: [
        {
          heading: "O que é a estátua",
          body:
            "Trata-se de uma escultura de grandes dimensões em forma de caranguejo, instalada à beira da Orla de Atalaia. Não é uma atração de museu, mas um marco público — dá para sentar, subir um degrau e tirar foto à vontade.",
        },
        {
          heading: "Por que virou símbolo",
          body:
            "Aracaju é conhecida pela cultura do caranguejo e pela caranguejada. A estátua resume essa identidade em uma imagem só: quem posta a foto do caranguejo gigante está, na prática, dizendo 'estou em Aracaju'.",
        },
        {
          heading: "Dicas para a visita",
          body:
            "A melhor luz para fotos é no final da tarde e à noite, quando a iluminação realça a escultura. Combine a parada na estátua com um jantar nos restaurantes ao lado — os dois ficam no mesmo trecho.",
        },
      ],
      faq: [
        {
          question: "A estátua fica dentro ou fora da Passarela?",
          answer:
            "Fica na entrada da Passarela do Caranguejo, na Orla de Atalaia. É o primeiro ponto que você encontra ao chegar.",
        },
        {
          question: "Dá para subir ou tocar na estátua?",
          answer:
            "É um marco público aberto. Dá para se aproximar, sentar nas bordas e fotografar. Respeite a sinalização e não suba em partes isoladas.",
        },
        {
          question: "É cobrado para ver a estátua?",
          answer:
            "Não. É espaço público e a visita é gratuita, como toda a orla.",
        },
        {
          question: "Qual o melhor horário para foto?",
          answer:
            "Final da tarde e início da noite, quando a iluminação destaca a escultura e o movimento dos restaurantes cria um bom cenário.",
        },
      ],
    },
    en: {
      slug: "caranguejo-gigante-aracaju",
      title: "The Giant Crab of Aracaju",
      metaTitle: "Giant Crab statue at the Crab Catwalk Aracaju: the landmark",
      metaDescription:
        "The giant crab statue at the Crab Catwalk in Aracaju: what it is, where it is and why it became the city's symbol.",
      intro:
        "At the entrance to the Crab Catwalk stands a **giant crab statue** that has become the most photographed postcard of Aracaju. It is the meeting point for visitors to the seafront and the first stop of almost every photo.",
      sections: [
        {
          heading: "What the statue is",
          body:
            "It is a large crab-shaped sculpture installed by the Orla de Atalaia. It is not a museum piece but a public landmark — you can sit, step up and take photos freely.",
        },
        {
          heading: "Why it became a symbol",
          body:
            "Aracaju is known for its crab culture and the caranguejada. The statue sums up that identity in a single image: posting a photo of the giant crab is, in practice, saying 'I'm in Aracaju'.",
        },
        {
          heading: "Visit tips",
          body:
            "The best light for photos is late afternoon and at night, when the lighting highlights the sculpture. Pair the statue stop with dinner at the neighbouring restaurants — both are on the same stretch.",
        },
      ],
      faq: [
        {
          question: "Is the statue inside or outside the Crab Catwalk?",
          answer:
            "It is at the entrance to the Crab Catwalk, on the Orla de Atalaia. It is the first thing you meet on arrival.",
        },
        {
          question: "Can you climb or touch the statue?",
          answer:
            "It is an open public landmark. You can approach, sit on the edges and photograph it. Respect any signage and do not climb isolated parts.",
        },
        {
          question: "Is there a fee to see the statue?",
          answer:
            "No. It is public space and visiting is free, like the whole seafront.",
        },
        {
          question: "What is the best time for photos?",
          answer:
            "Late afternoon and early evening, when the lighting brings out the sculpture and the restaurant activity makes a good backdrop.",
        },
      ],
    },
    zh: {
      slug: "caranguejo-gigante-aracaju",
      title: "阿拉卡茹的巨型螃蟹雕像",
      metaTitle: "蟹步道（Passarela do Caranguejo）巨型螃蟹雕像：地标指南",
      metaDescription:
        "蟹步道的巨型螃蟹雕像：它是什么、在哪里，以及为何成为阿拉卡茹的城市象征。",
      intro:
        "蟹步道入口处伫立着一座**巨型螃蟹雕像**，它已成为阿拉卡茹被拍照最多的地标明信片，是到访海滨者的集合点，也几乎是每张照片的第一站。",
      sections: [
        {
          heading: "雕像是什么",
          body:
            "这是一座置于 Orla de Atalaia 海滨、体型巨大的螃蟹造型雕塑。它不是博物馆展品，而是一座公共地标——可以靠近、在边缘坐下并随意拍照。",
        },
        {
          heading: "为何成为象征",
          body:
            "阿拉卡茹以螃蟹文化与 caranguejada 炖蟹闻名。这座雕像把这份城市身份浓缩成单一画面：晒出巨型螃蟹的照片，实际上就是在说「我在阿拉卡茹」。",
        },
        {
          heading: "游览建议",
          body:
            "拍照光线最好的是傍晚与夜间，此时灯光会凸显雕塑。可把雕像打卡与旁边餐厅的晚餐安排在一起——两者就在同一段路上。",
        },
      ],
      faq: [
        {
          question: "雕像在蟹步道里面还是外面？",
          answer:
            "它在蟹步道入口、Orla de Atalaia 海滨处，是你抵达后遇到的第一个点。",
        },
        {
          question: "可以攀爬或触摸雕像吗？",
          answer:
            "它是开放的公共地标，可以靠近、在边缘坐下并拍照。请遵守指示，不要攀爬隔离部位。",
        },
        {
          question: "看雕像需要门票吗？",
          answer:
            "不需要。它是公共空间，和整条海滨一样免费开放。",
        },
        {
          question: "什么时间拍照最好？",
          answer:
            "傍晚到入夜前，灯光凸显雕塑，餐厅的人气也构成不错的背景。",
        },
      ],
    },
  },

  "passarela-do-caranguejo-a-noite": {
    pt: {
      slug: "passarela-do-caranguejo-a-noite",
      title: "A Passarela do Caranguejo à Noite",
      metaTitle: "Passarela do Caranguejo à noite em Aracaju: vida noturna e dicas",
      metaDescription:
        "Como é a Passarela do Caranguejo à noite em Aracaju: clima, música, segurança e o melhor horário para ir.",
      intro:
        "Se a Passarela já é movimentada de dia, **à noite ela se transforma**. As luzes dos restaurantes acendem, a música de sanfona (Forró) ecoa pela rua e a brisa do mar mistura aroma de comida com a animação da orla.",
      sections: [
        {
          heading: "O clima noturno",
          body:
            "A partir do final da tarde os restaurantes enchem e a rua ganha vida. É comum ouvir Forró ao vivo ou ambiente com música regional. A atmosfera é descontraída, voltada para comer, conversar e caminhar à beira-mar.",
        },
        {
          heading: "Melhor horário para ir",
          body:
            "O pico é entre 19h e 23h, especialmente de quinta a domingo. Se quer mesa em restaurante grande ou quer evitar fila, chegue por volta das 19h. Quem prefere calma, pode ir mais cedo ou em dias de semana.",
        },
        {
          heading: "Segurança e transporte",
          body:
            "A Orla de Atalaia é bastante frequentada à noite. Mantenha pertences à vista e use app de transporte para voltar ao hotel. Evite deixar bolsas em cadeiras e combinar o ponto de encontro do grupo antes de sair.",
        },
      ],
      faq: [
        {
          question: "A Passarela funciona à noite?",
          answer:
            "Sim. Os restaurantes e barracas funcionam à noite, que é quando a passarela fica mais animada. Não há um 'fechamento' fixo — cada estabelecimento tem seu horário.",
        },
        {
          question: "Tem música ao vivo?",
          answer:
            "Com frequência. Vários lugares têm Forró ao vivo ou música regional ambiente nos fins de semana, criando o clima típico da orla.",
        },
        {
          question: "É seguro andar na orla à noite?",
          answer:
            "A Orla de Atalaia é uma área de lazer movimentada. Como em qualquer cidade, fique atento aos pertences e use transporte de app para o retorno.",
        },
        {
          question: "Vale a pena ir à noite ou de dia?",
          answer:
            "Depende do que procura. De dia é mais tranquilo para caminhar e fotografar a estátua; à noite é melhor para a experiência de jantar, música e vida noturna.",
        },
      ],
    },
    en: {
      slug: "passarela-do-caranguejo-a-noite",
      title: "The Crab Catwalk at Night",
      metaTitle: "Crab Catwalk at night Aracaju: nightlife and tips",
      metaDescription:
        "What the Crab Catwalk is like at night in Aracaju: atmosphere, music, safety and the best time to go.",
      intro:
        "If the Crab Catwalk is busy by day, **at night it transforms**. Restaurant lights switch on, accordion (Forró) music drifts down the street, and the sea breeze mixes the aroma of food with the energy of the seafront.",
      sections: [
        {
          heading: "The night atmosphere",
          body:
            "From late afternoon the restaurants fill and the street comes alive. Live Forró or regional ambient music is common. The mood is relaxed — built around eating, talking and walking by the sea.",
        },
        {
          heading: "Best time to go",
          body:
            "The peak is between 7 PM and 11 PM, especially Thursday to Sunday. For a table at a large restaurant or to avoid a queue, arrive around 7 PM. For a calmer visit, go earlier or on a weekday.",
        },
        {
          heading: "Safety and transport",
          body:
            "The Orla de Atalaia is well frequented at night. Keep belongings in view and use a rideshare app to return to your hotel. Don't leave bags on chairs and agree on a meeting point before heading out.",
        },
      ],
      faq: [
        {
          question: "Is the Crab Catwalk open at night?",
          answer:
            "Yes. Restaurants and stalls operate at night, which is when the walkway is liveliest. There is no fixed 'closing' — each venue sets its own hours.",
        },
        {
          question: "Is there live music?",
          answer:
            "Often. Several places have live Forró or regional ambient music on weekends, creating the typical seafront mood.",
        },
        {
          question: "Is it safe to walk the seafront at night?",
          answer:
            "The Orla de Atalaia is a busy leisure area. As in any city, watch your belongings and use a rideshare app for the way back.",
        },
        {
          question: "Is it worth going at night or by day?",
          answer:
            "It depends on what you want. Daytime is calmer for walking and photographing the statue; night is better for the dinner, music and nightlife experience.",
        },
      ],
    },
    zh: {
      slug: "passarela-do-caranguejo-a-noite",
      title: "蟹步道的夜晚",
      metaTitle: "蟹步道（Passarela do Caranguejo）的夜晚：夜生活与建议",
      metaDescription:
        "蟹步道夜晚在阿拉卡茹是什么样：氛围、音乐、安全与最佳到访时间。",
      intro:
        "如果说白天蟹步道已很热闹，**入夜后它会彻底变身**。餐厅灯光亮起，手风琴 Forró 音乐在街上回荡，海风把食物香气与海滨的活力揉在一起。",
      sections: [
        {
          heading: "夜晚的氛围",
          body:
            "从傍晚起餐厅逐渐坐满，整条街活了起来。常有现场 Forró 或 regional 背景音乐。氛围轻松，以吃饭、聊天与海边散步为主。",
        },
        {
          heading: "最佳到访时间",
          body:
            "高峰在 19:00–23:00，尤其周四至周日。想在大餐厅占位或避开排队，约 19:00 到较好。想安静些可更早或选工作日。",
        },
        {
          heading: "安全与交通",
          body:
            "Orla de Atalaia 夜间人潮密集。财物随身，回程用网约车。别把包留在椅子上，出发前先约好集合点。",
        },
      ],
      faq: [
        {
          question: "蟹步道晚上营业吗？",
          answer:
            "营业。餐厅与摊位夜晚照常，蟹步道在此时最为热闹。没有统一的「关门时间」——各店自定。",
        },
        {
          question: "有现场音乐吗？",
          answer:
            "常有。部分店家周末会安排现场 Forró 或 regional 背景音乐，营造典型海滨气氛。",
        },
        {
          question: "晚上在海滨散步安全吗？",
          answer:
            "Orla de Atalaia 是热闹的休闲区。像任何城市一样，注意财物并用网约车回程即可。",
        },
        {
          question: "值得晚上去还是白天去？",
          answer:
            "看你想体验什么。白天更安静，适合散步与拍雕像；夜晚更适合晚餐、音乐与夜生活体验。",
        },
      ],
    },
  },
};
