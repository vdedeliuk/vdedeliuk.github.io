export const uk = {
  siteConfig: {
    name: "Vaysed",
    tagline: "Експерти з розробки Telegram ботів",
    email: "vaysed.dev@gmail.com",
    telegram: "https://t.me/kun3741",
    github: "https://github.com/kun3741",
  },
  hero: {
    headline: "Автоматизуємо Продажі У Telegram",
    subheadline: "Telegram-системи для онлайн-шкіл, спільнот і подій",
    description:
      "Оплата → CRM → доступ → нагадування → аналітика. Одна Telegram-система замість ручної роботи менеджерів. Отримайте схему рішення та попередню оцінку протягом 24 годин.",
    ctaText: "Отримати План Та Оцінку",
    ctaSecondary: "Переглянути Кейси",
  },
  nav: {
    about: "Про Нас",
    services: "Послуги",
    portfolio: "Портфоліо",
    testimonials: "Відгуки",
    contact: "Контакти",
    startProject: "Отримати Оцінку",
  },
  about: {
    title: "Про Нас",
    subtitle: "Перевірена Telegram-експертиза",
    description:
      "Vaysed проєктує Telegram-системи для продажів, платного доступу, навчання та підтримки. У нашому публічному портфоліо — 13+ рішень, а якість роботи підтверджують 5 верифікованих відгуків клієнтів. Спеціалізуємося на платежах, LMS і бізнес-автоматизації.",
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
        id: -3,
        title: "ARENA 27 | Booking API & Telegram CRM",
        description:
          "Production-система автоматизації бронювань для комп’ютерного клубу ARENA 27. Express API приймає заявки з a27.com.ua, валідує та зберігає їх у MongoDB, а Telegram userbot миттєво сповіщає адміністраторів і клієнтів. Приватний адмін-бот дає статистику, пошук клієнтів, перегляд бронювань і сегментовані розсилки з попереднім переглядом та підтвердженням.",
        image: "/images/portfolio/arena-27.webp",
        technologies: ["Node.js", "Express API", "Telegram API", "MongoDB", "OpenAPI"],
        liveUrl: "https://a27.com.ua/",
        featured: true,
      },
      {
        id: -4,
        title: "ApocalypseTON | Telegram Survival Mini App",
        description:
          "Повноцінна survival-гра всередині Telegram: бази з пасивним видобутком ресурсів, експедиції, квести, контейнери, лотерея та реферальна система. Mini App інтегрована з TON Connect для депозитів і виведень, а Node.js backend керує ігровою економікою, on-chain платежами та автоматичними Telegram-нагадуваннями.",
        image: "/images/portfolio/apocalypse-ton.webp",
        technologies: ["React", "Node.js", "Telegram Mini App", "TON Connect", "Prisma"],
        liveUrl: "https://t.me/apocalypse_ton",
      },
      {
        id: 0,
        title: "RESTART 2026 | Telegram LMS Бот",
        description:
          "Цей проєкт являє собою повністю автоматизовану навчальну екосистему на базі Telegram-бота. Система виступає повноцінною заміною адміністраторам та навчальним порталам: вона самостійно проводить користувача через усі етапи навчання, від видачі інтерактивних уроків та перевірки домашніх завдань до обробки оплат і нагадувань. Рішення дозволяє школі ефективно масштабуватися та утримувати студентів завдяки зручному мобільному формату навчання.",
        image: "/images/portfolio/restart-2026.webp",
        technologies: ["Node.js", "Telegram API", "MongoDB", "Monobank"],
        liveUrl: "https://t.me/yurieeva_bot",
      },
      {
        id: 1,
        title: "Vaysed Shop",
        description:
          "Повнофункціональний веб-додаток електронної комерції, побудований на Python та Django, з каталогами товарів, функціональністю кошика, інтеграцією платежів Monobank та готовністю до розгортання Docker. Керує товарами, замовленнями та клієнтами через Django Admin.",
        image: "/images/portfolio/vaysed-shop.webp",
        technologies: ["Python", "Django", "Monobank", "Docker"],
        liveUrl: "https://github.com/kun3741/vaysedshop",
      },
      {
        id: 2,
        title: "Lumos | Бот моніторингу відключень світла",
        description: "Lumos — це Telegram-бот, який автоматично відстежує графіки планових відключень електроенергії від українських провайдерів (зокрема для Івано-Франківської та Львівської областей). Бот дозволяє знайти свою чергу за адресою, підписатися на неї та отримувати миттєві сповіщення про зміну графіків. Також реалізована система розумних нагадувань перед вимкненням та увімкненням світла.",
        image: "/images/portfolio/lumos.webp",
        technologies: ["Python", "MongoDB", "aiohttp"],
        liveUrl: "https://lumos.foo/",
      },
      {
        id: 3,
        title: "Telegram Бот для Замовлення Піци",
        description:
          "Telegram бот на Node.js для онлайн-замовлення піци, з SQLite для управління даними. Включає інтерактивний конструктор піци, кошик, процес оформлення замовлення та функцію зворотного дзвінка для підтримки клієнтів.",
        image: "/images/portfolio/pizza-bot.webp",
        technologies: ["Node.js", "Telegram Bot API", "SQLite"],
        liveUrl: "https://github.com/kun3741/vaysedpizza-tg",
      },
      {
        id: 4,
        title: "Бот Підтримки Prudbay Clothes",
        description:
          "Telegram бот для автоматизації підтримки клієнтів та управління замовленнями для prudbaydelivery, з реєстрацією користувачів, системою тікетів, управлінням замовленнями, інтеграцією MongoDB та Airtable.",
        image: "/images/portfolio/prudbay.webp",
        technologies: ["Node.js", "MongoDB", "Airtable", "Telegram Bot API"],
        liveUrl: "https://t.me/prudbaysupport_bot",
      },
      {
        id: 5,
        title: "Telegram Бот Nova Party",
        description:
          "Комплексне рішення для організаторів подій, яке дозволяє керувати продажем квитків безпосередньо в Telegram. Проєкт розроблено з нуля, включаючи бекенд, логіку інтеграції платіжної системи та адміністративні інструменти. Система дозволяє користувачам легко переглядати події, купувати квитки через Monobank та отримувати їх у вигляді QR-коду. Для адміністраторів реалізовано панель для створення подій, перегляду статистики доходів, трансляції оголошень та валідації квитків через веб-додаток, інтегрований з Telegram.",
        image: "/images/portfolio/nova-party.webp",
        technologies: ["Node.js", "Monobank", "Telegram Bot API", "Web App"],
        liveUrl: "https://t.me/novaparty_bot",
      },
      {
        id: -1,
        title: "PAYBACK CARTEL | Telegram Membership & CRM Automator",
        description:
          "Повністю автоматизована система для продажу онлайн-курсів та управління платним доступом до закритих Telegram-каналів. Бот реєструє користувачів, приймає оплату в криптовалюті через NOWPayments, автоматично видає індивідуальні посилання для вступу, відстежує термін дії підписки та керує доступом (включаючи гнучку систему нагадувань, grace period та автоматичний кік неактивних учасників). Усі дані синхронізуються з CRM на базі Airtable в реальному часі.",
        image: "/images/portfolio/payback-cartel.webp",
        technologies: ["Node.js", "Telegram API", "NOWPayments", "Airtable", "Crypto"],
      },
      {
        id: -2,
        title: "WorkersTon | Пасивний майнинг",
        description: "Купуй віртуальних воркерів за TON, отримуй пасивний щоденний дохід і виводь зароблене - мобільна Telegram Mini App з TON‑гаманцями, реферальною системою та кіберпанк UI.",
        image: "/images/portfolio/workerston.webp",
        technologies: ["Node.js", "Telegram API", "Telegram Mini App", "TON", "Web3"],
        liveUrl: "https://t.me/WorkersTon_Bot",
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
        avatar: "/images/testimonials/hippa.webp",
      },
      {
        quote:
          "Vaysed продемонстрували виняткову експертизу та доставили саме те, що нам потрібно було, з першої спроби. Бездоганний процес не потребував переробок, що заощадило нам цінний час та ресурси.",
        author: "H3nky",
        role: "Технологічний Партнер",
        avatar: "/images/testimonials/h3nky.webp",
      },
      {
        quote:
          "Vaysed перевершили наші очікування, доставивши складну специфікацію, за яку інші б стягнули додаткову плату. Вони надали цінні інсайти та включили комплексний покроковий посібник, зробивши весь процес гладким та прозорим.",
        author: "Ivanov902",
        role: "Команда Розробки ПЗ",
        avatar: "/images/testimonials/ivanov902.webp",
      },
    ],
  },
  contact: {
    title: "Контакти",
    subtitle: "Отримайте план рішення за 24 години",
    description:
      "Опишіть поточний процес і бажаний результат. Ми запропонуємо структуру Telegram-рішення, орієнтовні строки та бюджет.",
    formFields: {
      name: "Ваше Ім'я",
      email: "Ваш Email",
      message: "Що потрібно автоматизувати?",
      submit: "Отримати План Та Оцінку",
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
    offerAgreementUrl: "https://kun.screenshot.host/ofruceef.pdf",
  },
  stats: {
    botsDelivered: "Рішень у портфоліо",
    yearsExperience: "Верифікованих відгуків",
    satisfaction: "Ключові спеціалізації",
    scroll: "Прокрутити",
  },
};

