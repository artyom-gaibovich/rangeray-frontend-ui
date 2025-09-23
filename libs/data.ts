export type PortfolioItem = {
  id: number;
  title: string;
  description: string;
  techStack: readonly string[];
  image: string;
  updated: string; // можно использовать Date или string в ISO формате
  demoType: 'link' | 'pdf';
  demoLink: string;
  demoContent?: string; // только для pdf
};

export const portfolioItems: readonly PortfolioItem[] = [
  {
    id: 1,
    title: 'Telegram Bot / АС для автоматического ведения канала',
    description:
      'Автоматизация управления телеграм-каналом с использованием Node.js, TypeScript, React и Telegram API. Запуск в Kubernetes.',
    techStack: ['Node.js', 'TypeScript', 'React', 'Telegram API', 'Kubernetes'],
    image: '/image-5_orig.webp',
    updated: '2024-04-10',
    demoType: 'link',
    demoLink: 'https://t.me/rangeray_demo',
  },
  {
    id: 2,
    title: 'Bybit Trading Bot',
    description:
      'Торговый бот для криптобиржи Bybit с продвинутыми стратегиями и мониторингом в реальном времени.',
    techStack: ['Python', 'Asyncio', 'REST API', 'Docker'],
    image: '/RU_2405-T26987_PM_CopyPro_1600x900.png',
    updated: '2024-03-05',
    demoType: 'link',
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
    demoType: 'link',
    demoLink: 'https://mebel-leningrad.ru',
  },
  {
    id: 4,
    title: 'GEALAN',
    description:
      'Изготавливаем пластиковые окна из профиля GEALAN по немецким технологиям',
    techStack: ['PHP', 'Bitrix Framework', 'MySQL', 'Composer'],
    image: '/projects-cards/gealan.png',
    updated: '2024-01-15',
    demoType: 'pdf',
    demoContent: '/pdf/catalog.pdf',
    demoLink: 'public/pdf/catalog.pdf',
  },
  {
    id: 5,
    title: 'Лензащита',
    description: 'Общество с ограниченной ответстве',
    techStack: ['PHP', 'Bitrix Framework', 'MySQL', 'Composer'],
    image: '/projects-cards/lenzas-logo.png',
    updated: '2024-01-15',
    demoType: 'pdf',
    demoContent: '/pdf/lenzas.pdf',
    demoLink: 'public/pdf/lenzas.pdf',
  },
] as const;
