export const uk = {
  siteConfig: {
    name: "Vaysed",
    tagline: "Експерти з розробки Telegram ботів",
    email: "vaysed.dev@gmail.com",
    telegram: "https://t.me/kun3741",
    github: "https://github.com/kun3741",
  },
  hero: {
    headline: "Ми Створюємо Потужні Telegram Боти",
    subheadline: "Агенція з розробки Telegram ботів",
    description:
      "Від простих автоматизацій до складних інтеграцій платежів — ми створюємо високопродуктивні Telegram боти, які залучають користувачів, автоматизують робочі процеси та розвивають ваш бізнес.",
    ctaText: "Розпочати Проєкт Бота",
    ctaSecondary: "Переглянути Наші Боти",
  },
  nav: {
    about: "Про Нас",
    services: "Послуги",
    portfolio: "Портфоліо",
    testimonials: "Відгуки",
    contact: "Контакти",
    startProject: "Розпочати Проєкт",
  },
  about: {
    title: "Про Нас",
    subtitle: "Спеціалісти з Telegram ботів",
    description:
      "Ми — команда захоплених розробників, присвячених виключно створенню виняткових Telegram ботів. Маючи роки досвіду та сотні розгорнутих ботів, ми перетворюємо ваші ідеї на потужні, масштабовані рішення ботів, які залучають користувачів та автоматизують процеси.",
    highlights: [
      {
        title: "Швидка Доставка",
        description: "Гнучка розробка забезпечує швидкий запуск вашого бота.",
        icon: "Zap",
      },
      {
        title: "Безпека та Надійність",
        description: "Корпоративна безпека для платежів та даних користувачів.",
        icon: "Shield",
      },
      {
        title: "Підтримка 24/7",
        description: "Постійне обслуговування та підтримка всіх наших ботів.",
        icon: "MessageSquare",
      },
      {
        title: "Індивідуальні Рішення",
        description: "Адаптована функціональність бота під ваші унікальні потреби.",
        icon: "Layers",
      },
    ],
  },
  services: {
    title: "Послуги",
    subtitle: "Що Ми Створюємо",
    services: [
      {
        title: "Індивідуальні Telegram Боти",
        description:
          "Повністю індивідуальні боти, розроблені з нуля для відповідності вашим конкретним бізнес-вимогам та робочим процесам.",
        icon: "Bot",
        technologies: ["Python", "Node.js", "Telegram Bot API"],
      },
      {
        title: "Інтеграція Платежів",
        description:
          "Безшовна обробка платежів у Telegram з використанням Stripe, криптовалют та нативних платежів Telegram.",
        icon: "CreditCard",
        technologies: ["Stripe", "Telegram Payments", "Crypto"],
      },
      {
        title: "Інтеграції API",
        description:
          "Підключіть вашого бота до будь-якого зовнішнього сервісу — CRM, бази даних, платіжні шлюзи та сторонні API.",
        icon: "Plug",
        technologies: ["REST APIs", "Webhooks", "OAuth"],
      },
      {
        title: "Аналітика Ботів",
        description:
          "Відстежуйте залученість користувачів, конверсії та продуктивність бота з детальними аналітичними панелями.",
        icon: "BarChart3",
        technologies: ["Аналітика", "Панелі", "Звітність"],
      },
      {
        title: "Інтеграція Баз Даних",
        description:
          "Підключіть вашого бота до баз даних для управління користувачами, відстеження замовлень та зберігання даних.",
        icon: "Database",
        technologies: ["PostgreSQL", "MongoDB", "Redis"],
      },
      {
        title: "Обслуговування Ботів",
        description:
          "Постійна підтримка, оновлення та масштабування для безперебійної роботи вашого бота 24/7.",
        icon: "Wrench",
        technologies: ["Моніторинг", "Оновлення", "Масштабування"],
      },
    ],
  },
  portfolio: {
    title: "Портфоліо",
    subtitle: "Проєкти, Які Ми Створили",
    featuredLabel: "Рекомендовано",
    projects: [
      {
        id: -1,
        title: "Lumos | Бот моніторингу відключень світла",
        description: "Lumos — це Telegram-бот, який автоматично відстежує графіки планових відключень електроенергії від українських провайдерів (зокрема для Івано-Франківської та Львівської областей). Бот дозволяє знайти свою чергу за адресою, підписатися на неї та отримувати миттєві сповіщення про зміну графіків. Також реалізована система розумних нагадувань перед вимкненням та увімкненням світла.",
        image: "https://kun.vaysed.tech/mzofggk7.png",
        technologies: ["Python", "MongoDB", "aiohttp"],
        liveUrl: "https://lumos.foo/",
        featured: true,
      },
      {
        id: 0,
        title: "RESTART 2026 | Telegram LMS Бот",
        description:
          "Цей проєкт являє собою повністю автоматизовану навчальну екосистему на базі Telegram-бота. Система виступає повноцінною заміною адміністраторам та навчальним порталам: вона самостійно проводить користувача через усі етапи навчання, від видачі інтерактивних уроків та перевірки домашніх завдань до обробки оплат і нагадувань. Рішення дозволяє школі ефективно масштабуватися та утримувати студентів завдяки зручному мобільному формату навчання.",
        image: "https://kun.vaysed.tech/abi66gbs.png",
        technologies: ["Node.js", "Telegram API", "MongoDB", "Monobank"],
        liveUrl: "https://t.me/yurieeva_bot",
      },
      {
        id: 1,
        title: "Vaysed Shop",
        description:
          "Повнофункціональний веб-додаток електронної комерції, побудований на Python та Django, з каталогами товарів, функціональністю кошика, інтеграцією платежів Monobank та готовністю до розгортання Docker. Керує товарами, замовленнями та клієнтами через Django Admin.",
        image: "https://kun.vaysed.tech/u614anq1.png",
        technologies: ["Python", "Django", "Monobank", "Docker"],
        liveUrl: "https://github.com/kun3741/vaysedshop",
      },
      {
        id: 2,
        title: "Telegram Бот для Замовлення Піци",
        description:
          "Telegram бот на Node.js для онлайн-замовлення піци, з SQLite для управління даними. Включає інтерактивний конструктор піци, кошик, процес оформлення замовлення та функцію зворотного дзвінка для підтримки клієнтів.",
        image: "https://kun.vaysed.tech/kjbeqeiy.png",
        technologies: ["Node.js", "Telegram Bot API", "SQLite"],
        liveUrl: "https://github.com/kun3741/vaysedpizza-tg",
      },
      {
        id: 3,
        title: "Бот Підтримки Prudbay Clothes",
        description:
          "Telegram бот для автоматизації підтримки клієнтів та управління замовленнями для prudbaydelivery, з реєстрацією користувачів, системою тікетів, управлінням замовленнями, інтеграцією MongoDB та Airtable.",
        image: "https://kun.vaysed.tech/q9cgsf7q.png",
        technologies: ["Node.js", "MongoDB", "Airtable", "Telegram Bot API"],
        liveUrl: "https://t.me/prudbaysupport_bot",
      },
      {
        id: 4,
        title: "Telegram Бот Nova Party",
        description:
          "Комплексне рішення для організаторів подій, яке дозволяє керувати продажем квитків безпосередньо в Telegram. Проєкт розроблено з нуля, включаючи бекенд, логіку інтеграції платіжної системи та адміністративні інструменти. Система дозволяє користувачам легко переглядати події, купувати квитки через Monobank та отримувати їх у вигляді QR-коду. Для адміністраторів реалізовано панель для створення подій, перегляду статистики доходів, трансляції оголошень та валідації квитків через веб-додаток, інтегрований з Telegram.",
        image: "https://vaysed.tech/ao4ll2ho.png",
        technologies: ["Node.js", "Monobank", "Telegram Bot API", "Web App"],
        liveUrl: "https://t.me/novaparty_bot",
      },
      {
        id: 6,
        title: "Бот Перевірки Підписки",
        description:
          "Telegram бот з WebApp для перевірки підписки користувачів на канали та надання ексклюзивного контенту лише підписникам. Побудований на Node.js/Express, має функції перевірки підписки, інтерфейс WebApp та безпечну доставку контенту.",
        image: "https://vaysed.tech/2geycx3a.png",
        technologies: ["Node.js", "Express", "Telegram Bot API", "WebApp"],
        liveUrl: "https://github.com/kun3741/subscribe-checker",
      },
    ],
    viewProject: "Переглянути Проєкт",
  },
  testimonials: {
    title: "Відгуки",
    subtitle: "Що Говорять Клієнти",
    testimonials: [
      {
        quote:
          "Vaysed доставив повнофункціональний веб-додаток у рекордний час. Їхня технічна експертиза та увага до деталей призвели до швидкого, чистого та високоякісного рішення. Ми високо рекомендуємо їхні послуги.",
        author: "Hippa",
        role: "Компанія Цифрових Рішень",
        avatar: "https://kun.vaysed.tech/3yy5ewa7.png",
      },
      {
        quote:
          "Vaysed продемонстрували виняткову експертизу та доставили саме те, що нам потрібно було, з першої спроби. Бездоганний процес не потребував переробок, що заощадило нам цінний час та ресурси.",
        author: "H3nky",
        role: "Технологічний Партнер",
        avatar: "https://kun.vaysed.tech/fbla1p84.png",
      },
      {
        quote:
          "Vaysed перевершили наші очікування, доставивши складну специфікацію, за яку інші б стягнули додаткову плату. Вони надали цінні інсайти та включили комплексний покроковий посібник, зробивши весь процес гладким та прозорим.",
        author: "Ivanov902",
        role: "Команда Розробки ПЗ",
        avatar: "https://kun.vaysed.tech/0utgv3by.png",
      },
    ],
  },
  contact: {
    title: "Контакти",
    subtitle: "Давайте Створимо Вашого Бота",
    description:
      "Готові автоматизувати свій бізнес з індивідуальним Telegram ботом? Зв'яжіться з нами, і давайте обговоримо ваш проєкт.",
    formFields: {
      name: "Ваше Ім'я",
      email: "Ваш Email",
      message: "Розкажіть нам про вашу ідею бота",
      submit: "Надіслати Повідомлення",
    },
    sending: "Відправка...",
    email: "Email",
    phone: "Телефон",
    telegram: "Telegram",
    followUs: "Слідкуйте за Нами",
  },
  footer: {
    copyright: (year: number) => `© ${year} Vaysed. Всі права захищені.`,
    tagline: "Створено з точністю. Доставлено з турботою.",
    offerAgreement: "Договір оферти",
    offerAgreementUrl: "https://kun.vaysed.tech/ofruceef.pdf",
  },
  stats: {
    botsDelivered: "Ботів Доставлено",
    yearsExperience: "Років Досвіду",
    satisfaction: "Задоволеність",
    scroll: "Прокрутити",
  },
};

