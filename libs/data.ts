export const portfolioItems = [
  {
    id: 1,
    title: 'Telegram Bot / АС для автоматического ведения канала',
    description:
      'Автоматизация управления телеграм-каналом с использованием Node.js, TypeScript, React и Telegram API. Запуск в Kubernetes.',
    techStack: ['Node.js', 'TypeScript', 'React', 'Telegram API', 'Kubernetes'],
    image: '/image-5_orig.webp',
    updated: '2024-04-10',
    demoLink: 'https://t.me/rangeray_demo', // 🔗 демо
  },
  {
    id: 2,
    title: 'Bybit Trading Bot',
    description:
      'Торговый бот для криптобиржи Bybit с продвинутыми стратегиями и мониторингом в реальном времени.',
    techStack: ['Python', 'Asyncio', 'REST API', 'Docker'],
    image: '/RU_2405-T26987_PM_CopyPro_1600x900.png',
    updated: '2024-03-05',
    demoLink: 'https://github.com/rangeray/bybit-bot',
  },
  {
    id: 3,
    title: 'Сайт мебель на заказ для Ленинградской области',
    description:
      'Сайт-витрина с заказом мебели на заказ, адаптивный дизайн и удобный UX/UI.',
    techStack: ['React', 'Next.js', 'CSS Modules', 'Node.js'],
    image: '/ytf1cpnvpe8vkn6sm7cl0y3x6haxctnh.jpg',
    updated: '2023-12-20',
    demoLink: 'https://mebel-leningrad.ru',
  },
  {
    id: 4,
    title: 'Bitrix Migrator',
    description:
      'Система миграций для проектов на Bitrix, автоматизация переноса данных и структуры.',
    techStack: ['PHP', 'Bitrix Framework', 'MySQL', 'Composer'],
    image: '/8ec9bcc4-27d9-4031-a680-69f2b20f38ad.webp',
    updated: '2024-01-15',
    demoLink: 'https://bitrix.rangeray.ru',
  },
  {
    id: 5,
    title: 'Vega Content System',
    description:
      'CMS для управления контентом с расширяемой архитектурой, поддержкой мультиязычности и кастомных модулей.',
    techStack: ['Laravel', 'Vue.js', 'MySQL', 'Redis'],
    image: '/nature-pixel-art-ai-generated-3840-x-2160-v0-hdoiobp7mzfc1.webp',
    updated: '2024-02-28',
    demoLink: 'https://vega.rangeray.ru',
  },
] as const;
