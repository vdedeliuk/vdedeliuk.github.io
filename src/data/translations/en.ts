export const en = {
  siteConfig: {
    name: "Vaysed",
    tagline: "Telegram Bot Development Experts",
    email: "vaysed.dev@gmail.com",
    telegram: "https://t.me/kun3741",
    github: "https://github.com/kun3741",
  },
  hero: {
    headline: "Automate Sales In Telegram",
    subheadline: "Telegram systems for online schools, communities and events",
    description:
      "Payments → CRM → access → reminders → analytics. One Telegram system instead of repetitive manager work. Get a solution outline and preliminary estimate within 24 hours.",
    ctaText: "Get Plan & Estimate",
    ctaSecondary: "View Case Studies",
  },
  nav: {
    about: "About",
    services: "Services",
    portfolio: "Portfolio",
    testimonials: "Testimonials",
    contact: "Contact",
    startProject: "Get Estimate",
  },
  about: {
    title: "About Us",
    subtitle: "Verified Telegram Expertise",
    description:
      "Vaysed designs Telegram systems for sales, paid access, education, and support. Our public portfolio includes 13+ solutions, backed by 5 verified client reviews. We specialize in payments, LMS platforms, and business automation.",
    highlights: [
      {
        title: "Fast Delivery",
        description: "Agile development ensures your bot goes live quickly.",
        icon: "Zap",
      },
      {
        title: "Secure & Reliable",
        description: "Enterprise-grade security for payments and user data.",
        icon: "Shield",
      },
      {
        title: "24/7 Support",
        description: "Ongoing maintenance and support for all our bots.",
        icon: "MessageSquare",
      },
      {
        title: "Custom Solutions",
        description: "Tailored bot functionality for your unique needs.",
        icon: "Layers",
      },
    ],
  },
  services: {
    title: "Services",
    subtitle: "What We Build",
    services: [
      {
        title: "Custom Telegram Bots",
        description:
          "Fully custom bots designed from scratch to meet your specific business requirements and workflows.",
        icon: "Bot",
        technologies: ["Python", "Node.js", "Telegram Bot API"],
      },
      {
        title: "Payment Integration",
        description:
          "Seamless payment processing within Telegram using Stripe, crypto, and Telegram's native payments.",
        icon: "CreditCard",
        technologies: ["Stripe", "Telegram Payments", "Crypto"],
      },
      {
        title: "API Integrations",
        description:
          "Connect your bot to any external service—CRMs, databases, payment gateways, and third-party APIs.",
        icon: "Plug",
        technologies: ["REST APIs", "Webhooks", "OAuth"],
      },
      {
        title: "Bot Analytics",
        description:
          "Track user engagement, conversion rates, and bot performance with detailed analytics dashboards.",
        icon: "BarChart3",
        technologies: ["Analytics", "Dashboards", "Reporting"],
      },
      {
        title: "Database Integration",
        description:
          "Connect your bot to databases for user management, order tracking, and persistent data storage.",
        icon: "Database",
        technologies: ["PostgreSQL", "MongoDB", "Redis"],
      },
      {
        title: "Bot Maintenance",
        description:
          "Ongoing support, updates, and scaling to keep your bot running smoothly 24/7.",
        icon: "Wrench",
        technologies: ["Monitoring", "Updates", "Scaling"],
      },
    ],
  },
  portfolio: {
    title: "Portfolio",
    subtitle: "Projects We've Built",
    featuredLabel: "Featured",
    projects: [
      {
        id: -1,
        title: "PAYBACK CARTEL | Telegram Membership & CRM Automator",
        description:
          "PAYBACK CARTEL is a fully automated system for selling online courses and managing premium access to private Telegram channels. The bot registers users, accepts cryptocurrency payments via NOWPayments, automatically generates individual invite links, monitors subscription periods, and manages access control (including a dynamic notification system, a 5-day grace period, and automated removal of expired accounts). All client data is synchronized with an Airtable CRM in real-time.",
        image: "/images/portfolio/payback-cartel.webp",
        technologies: ["Node.js", "Telegram API", "NOWPayments", "Airtable", "Crypto"],
        featured: true,
      },
      {
        id: -2,
        title: "WorkersTon | Passive Mining",
        description: "Buy virtual workers with TON, earn passive daily rewards for 60‑day contracts, and withdraw - mobile-first Telegram Mini App with TON wallet integration and 10% referral rewards.",
        image: "/images/portfolio/workerston.webp",
        technologies: ["Node.js", "Telegram API", "Telegram Mini App", "TON", "Web3"],
        liveUrl: "https://t.me/WorkersTon_Bot",
        featured: true,
      },
      {
        id: 0,
        title: "RESTART 2026 | Telegram LMS Bot",
        description:
          "This project serves as a comprehensive Learning Management System built entirely within a Telegram bot interface. The solution automates the complete educational workflow, managing interactive content delivery, homework tracking, payment processing, and student retention via smart scheduling. By streamlining these administrative processes, the platform enables seamless scaling for the school and provides students with an accessible, always-on learning environment.",
        image: "/images/portfolio/restart-2026.webp",
        technologies: ["Node.js", "Telegram API", "MongoDB", "Monobank"],
        liveUrl: "https://t.me/yurieeva_bot",
      },
      {
        id: 1,
        title: "Vaysed Shop",
        description:
          "A full-stack e-commerce web application built with Python and Django, featuring product catalogs, shopping cart functionality, Monobank payment integration, and Docker deployment readiness. Manages products, orders, and customers via Django Admin.",
        image: "/images/portfolio/vaysed-shop.webp",
        technologies: ["Python", "Django", "Monobank", "Docker"],
        liveUrl: "https://github.com/kun3741/vaysedshop",
      },
      {
        id: 2,
        title: "Lumos | Power Outage Tracker Bot",
        description: "Lumos is a Telegram bot that automatically monitors planned power outage schedules from Ukrainian energy providers (specifically for the Ivano-Frankivsk and Lviv regions). The bot allows users to automatically find their queue by entering their address, subscribe to updates, and receive real-time notifications about schedule changes. It also features a smart reminder system that alerts users before the power goes off or comes back on.",
        image: "/images/portfolio/lumos.webp",
        technologies: ["Python", "MongoDB", "aiohttp"],
        liveUrl: "https://lumos.foo/",
      },
      {
        id: 3,
        title: "Pizza Ordering Telegram Bot",
        description:
          "A Node.js Telegram bot facilitating online pizza orders, with SQLite for data management. Includes an interactive pizza builder, shopping cart, checkout process, and a callback request feature for customer support.",
        image: "/images/portfolio/pizza-bot.webp",
        technologies: ["Node.js", "Telegram Bot API", "SQLite"],
        liveUrl: "https://github.com/kun3741/vaysedpizza-tg",
      },
      {
        id: 4,
        title: "Prudbay Clothes Support Bot",
        description:
          "A Telegram bot to automate customer support and order management for prudbaydelivery, featuring user registration, ticketing, order management, MongoDB & Airtable integration.",
        image: "/images/portfolio/prudbay.webp",
        technologies: ["Node.js", "MongoDB", "Airtable", "Telegram Bot API"],
        liveUrl: "https://t.me/prudbaysupport_bot",
      },
      {
        id: 5,
        title: "Nova Party Telegram Bot",
        description:
          "A comprehensive solution for event organizers that allows managing ticket sales directly within Telegram. The project was developed from scratch, including the backend, payment system integration logic, and administrative tools. The system enables users to easily browse events, purchase tickets via Monobank, and receive them as a QR code. For administrators, a panel has been implemented to create events, view revenue statistics, broadcast announcements, and validate tickets through a Telegram-integrated web app.",
        image: "/images/portfolio/nova-party.webp",
        technologies: ["Node.js", "Monobank", "Telegram Bot API", "Web App"],
        liveUrl: "https://t.me/novaparty_bot",
      },
    ],
    viewProject: "View Project",
  },
  testimonials: {
    title: "Testimonials",
    subtitle: "What Clients Say",
    testimonials: [
      {
        quote:
          "Vaysed delivered a complete web application in record time. Their technical expertise and attention to detail resulted in a fast, clean, and high-quality solution. We highly recommend their services.",
        author: "Hippa",
        role: "Digital Solutions Company",
        avatar: "/images/testimonials/hippa.webp",
      },
      {
        quote:
          "Vaysed demonstrated exceptional expertise and delivered exactly what we needed on the first attempt. The seamless process required no revisions, saving us valuable time and resources.",
        author: "H3nky",
        role: "Technology Partner",
        avatar: "/images/testimonials/h3nky.webp",
      },
      {
        quote:
          "Vaysed exceeded our expectations by delivering a complex specification that others would charge extra for. They provided valuable insights and included a comprehensive step-by-step guide, making the entire process smooth and transparent.",
        author: "Ivanov902",
        role: "Software Development Team",
        avatar: "/images/testimonials/ivanov902.webp",
      },
    ],
  },
  contact: {
    title: "Contact",
    subtitle: "Get a solution plan within 24 hours",
    description:
      "Describe your current workflow and desired outcome. We will propose a Telegram solution structure, estimated timeline, and budget.",
    formFields: {
      name: "Your Name",
      email: "Your Email",
      message: "What should we automate?",
      submit: "Get Plan & Estimate",
    },
    sending: "Sending...",
    email: "Email",
    phone: "Phone",
    telegram: "Telegram",
    followUs: "Follow Us",
  },
  footer: {
    copyright: (year: number) => `© ${year} Vaysed. All rights reserved.`,
    tagline: "Built with precision. Delivered with care.",
    offerAgreement: "Offer Agreement",
    offerAgreementUrl: "https://kun.screenshot.host/yfprnlx0.pdf",
  },
  stats: {
    botsDelivered: "Solutions in portfolio",
    yearsExperience: "Verified reviews",
    satisfaction: "Core specializations",
    scroll: "Scroll",
  },
};

