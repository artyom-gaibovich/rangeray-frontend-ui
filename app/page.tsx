'use client';

import { withLayout } from '@/layout/Layout';
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Container,
  TextField,
  Button,
} from '@mui/material';
import Image from 'next/image';
import { TechCard } from '@/components/TechCard/TechCard';

const features = [
  {
    icon: 'shield-lock', // Надежность и безопасность
    title: 'Надежность и безопасность',
    description:
      'Все проекты проходят тщательное тестирование и защищены от основных уязвимостей, включая SQL-инъекции, XSS и другие распространённые угрозы.',
  },
  {
    icon: 'phone', // Адаптивный дизайн
    title: 'Адаптивный дизайн',
    description:
      'Мы создаём сайты и приложения, которые отлично работают на любых устройствах — от мобильных телефонов до больших экранов.',
  },
  {
    icon: 'cpu', // Современные технологии
    title: 'Современные технологии',
    description:
      'Используем актуальные стеки и фреймворки, такие как React, Node.js, TypeScript и Kubernetes для масштабируемых и производительных решений.',
  },
  {
    icon: 'person-check', // Индивидуальный подход
    title: 'Индивидуальный подход',
    description:
      'Проектируем интерфейсы и функционал под уникальные потребности каждого клиента, создавая удобные и эффективные решения.',
  },
  {
    icon: 'tools', // Поддержка и сопровождение
    title: 'Поддержка и сопровождение',
    description:
      'Оказываем техническую поддержку и регулярное обновление проектов, чтобы ваши интернет-сервисы всегда оставались современными и работали без сбоев.',
  },
];

const portfolioItems = [
  {
    title: 'Telegram Bot / АС для автоматического ведения канала',
    description:
      'Автоматизация управления телеграм-каналом с использованием Node.js, TypeScript, React и Telegram API. Запуск в Kubernetes.',
    techStack: ['Node.js', 'TypeScript', 'React', 'Telegram API', 'Kubernetes'],
    image: '/image-5_orig.webp',
    updated: '2024-04-10',
  },
  {
    title: 'Bybit Trading Bot',
    description:
      'Торговый бот для криптобиржи Bybit с продвинутыми стратегиями и мониторингом в реальном времени.',
    techStack: ['Python', 'Asyncio', 'REST API', 'Docker'],
    image: '/RU_2405-T26987_PM_CopyPro_1600x900.png',
    updated: '2024-03-05',
  },
  {
    title: 'Сайт мебель на заказ для Ленинградской области',
    description:
      'Сайт-витрина с заказом мебели на заказ, адаптивный дизайн и удобный UX/UI.',
    techStack: ['React', 'Next.js', 'CSS Modules', 'Node.js'],
    image: '/ytf1cpnvpe8vkn6sm7cl0y3x6haxctnh.jpg',
    updated: '2023-12-20',
  },
  {
    title: 'Bitrix Migrator',
    description:
      'Система миграций для проектов на Bitrix, автоматизация переноса данных и структуры.',
    techStack: ['PHP', 'Bitrix Framework', 'MySQL', 'Composer'],
    image: '/8ec9bcc4-27d9-4031-a680-69f2b20f38ad.webp',
    updated: '2024-01-15',
  },
  {
    title: 'Vega Content System',
    description:
      'CMS для управления контентом с расширяемой архитектурой, поддержкой мультиязычности и кастомных модулей.',
    techStack: ['Laravel', 'Vue.js', 'MySQL', 'Redis'],
    image: '/nature-pixel-art-ai-generated-3840-x-2160-v0-hdoiobp7mzfc1.webp',
    updated: '2024-02-28',
  },
];

const teamMembers = [
  {
    name: 'Артём',
    role: 'Senior Node.js Developer',
    image: '/telegram-cloud-photo-size-2-3978908276710549647-c.jpg',
  },
  {
    name: 'Алексей',
    role: 'Senior PHP Developer',
    image: '/alexey.jpg',
  },
  {
    name: 'Егор',
    role: 'QA Tester',
    image: '/telegram-peer-photo-size-2-5433942415187767234-1-0-0.jpg',
  },
  {
    name: 'Григорий',
    role: 'Senior PHP Developer',
    image: '/Anonymous_emblem.svg.png',
  },
];

const showcases = [
  {
    title: 'Полностью адаптивный дизайн',
    text: `Мы создаём интернет-проекты, которые идеально отображаются и работают на любых устройствах — от мобильных телефонов до десктопов. Адаптивность — ключ к комфортному пользовательскому опыту и высокой конверсии.`,
    image: '/bg-showcase-1.jpg',
    orderImageFirst: false,
  },
  {
    title: 'Современные технологии и инструменты',
    text: `Используем передовые технологии, включая Bootstrap 5, React, Node.js и Kubernetes, чтобы создавать масштабируемые, производительные и легко поддерживаемые веб-решения.`,
    image: '/bg-showcase-1.jpg',
    orderImageFirst: true,
  },
  {
    title: 'Индивидуальный подход и гибкость',
    text: `Наши проекты легко адаптируются под ваши бизнес-задачи: от простого сайта-визитки до сложных интернет-магазинов и сервисов недвижимости. Мы создаём удобные и масштабируемые решения с возможностью дальнейшего развития.`,
    image: '/bg-showcase-1.jpg',
    orderImageFirst: false,
  },
  {
    title: 'Интеграция с внешними сервисами',
    text: `Интегрируем сайты с Telegram, CRM, платёжными системами, картами и другими API. Автоматизируем процессы и упрощаем управление бизнесом.`,
    image: '/bg-showcase-1.jpg',
    orderImageFirst: true,
  },
  {
    title: 'Поддержка и развитие проектов',
    text: `Мы не просто сдаём сайт — мы сопровождаем его, развиваем, добавляем новые функции и следим за стабильной работой. Долгосрочное сотрудничество — наша цель.`,
    image: '/bg-showcase-1.jpg',
    orderImageFirst: false,
  },
  {
    title: 'SEO и производительность',
    text: `Уделяем внимание быстрой загрузке, чистому коду и оптимизации под поисковые системы, чтобы ваши клиенты быстрее находили вас в интернете.`,
    image: '/bg-showcase-1.jpg',
    orderImageFirst: true,
  },
];

const techStackData = [
  {
    title: 'Языки программирования',
    techs: [
      { name: 'PHP' },
      { name: 'NodeJS' },
      { name: 'Golang' },
      { name: 'Python' },
    ],
  },
  {
    title: 'Базы данных',
    techs: [{ name: 'PostgreSQL' }, { name: 'MySQL' }, { name: 'MongoDB' }],
  },
  {
    title: 'Фреймворки',
    techs: [
      { name: 'NestJS' },
      { name: 'React' },
      { name: 'Next.js' },
      { name: 'Laravel' },
    ],
  },
  {
    title: 'Системы',
    techs: [{ name: 'Docker' }, { name: 'Kubernetes' }, { name: 'Linux' }],
  },
  {
    title: 'Обработка данных',
    techs: [{ name: 'Redis' }, { name: 'RabbitMQ' }, { name: 'ElasticSearch' }],
  },
  {
    title: 'CI/CD',
    techs: [
      { name: 'GitHub Actions' },
      { name: 'GitLab CI' },
      { name: 'Jenkins' },
    ],
  },
];

function Section({
  children,
  narrow = false, // если нужно более узкий контейнер (например, форма)
}: {
  children: React.ReactNode;
  narrow?: boolean;
}) {
  return (
    <Box component='section' sx={{ py: 8 }}>
      <Container maxWidth={narrow ? 'md' : 'lg'}>{children}</Container>
    </Box>
  );
}

function Home() {
  return (
    <Box
      className='page-wrapper'
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        py: 5,
        px: { xs: 2, md: 5 },
      }}
    >
      {/* Hero Section */}
      <Section sx={{ position: 'relative', overflow: 'hidden', mb: 5 }}>
        {/* Фоновое изображение */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100%',
            backgroundSize: 'cover',
            backgroundImage: `url('/space.png')`,
            backgroundPosition: 'center',
            zIndex: -1,
            '&::after': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              bgcolor: 'rgba(0,0,0,0.5)', // полупрозрачный оверлей для контраста текста
            },
          }}
        />

        <Grid container justifyContent='center' textAlign='center' spacing={2}>
          <Grid
            item
            xs={12}
            sx={{ position: 'relative', zIndex: 1, py: { xs: 8, md: 16 } }}
          >
            {/* Логотип */}
            <Image
              src='/logo.svg'
              alt='logo'
              width={100}
              height={100}
              style={{ display: 'inline-block', marginBottom: 16 }}
            />

            {/* Основной текст */}
            <Typography
              variant='h2'
              sx={{
                fontFamily: "'JetBrains Mono', monospace",
                fontWeight: 700,
                color: '#fff',
                fontSize: { xs: '2rem', md: '4rem' },
              }}
              gutterBottom
            >
              RANGE RAY
            </Typography>

            <Typography
              variant='h5'
              sx={{
                fontFamily: "'JetBrains Mono', monospace",
                color: '#A5D6FF',
                mb: 4,
                fontSize: { xs: '1rem', md: '1.5rem' },
              }}
            >
              WEB-DEVELOPMENT
            </Typography>

            {/* Заголовок */}
            <Typography
              variant='h6'
              sx={{
                fontFamily: "'JetBrains Mono', monospace",
                fontWeight: 400,
                color: '#fff',
                maxWidth: 800,
                mx: 'auto',
                fontSize: { xs: '0.9rem', md: '1.2rem' },
              }}
            >
              Мы создаем высоконагруженные и безопасные веб-приложения, учитывая
              современные стандарты производительности и безопасности.
            </Typography>
          </Grid>
        </Grid>
      </Section>

      {/* Portfolio */}
      <Section>
        <Typography
          variant='h4'
          fontWeight='bold'
          textAlign='center'
          gutterBottom
        >
          Портфолио
        </Typography>
        <Typography
          variant='subtitle1'
          color='text.secondary'
          textAlign='center'
          mb={4}
        >
          Результат нашей работы
        </Typography>
        <Grid container spacing={4} justifyContent='center'>
          {portfolioItems.map((item, i) => (
            <Grid key={i} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
              <Card sx={{ height: '100%' }}>
                <CardMedia>
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={500}
                    height={500}
                    style={{ objectFit: 'cover', width: '100%', height: 250 }}
                  />
                </CardMedia>
                <CardContent>
                  <Typography variant='h6'>{item.title}</Typography>
                  <Typography variant='body2' color='text.secondary'>
                    {item.description}
                  </Typography>
                  <Typography variant='caption' color='text.secondary'>
                    Технологии: {item.techStack.join(', ')}
                  </Typography>
                  {item.updated && (
                    <Typography
                      variant='caption'
                      color='text.secondary'
                      display='block'
                    >
                      Последнее обновление: {item.updated}
                    </Typography>
                  )}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Section>

      {/* Team */}
      <Section>
        <Typography variant='h4' textAlign='center' mb={4}>
          Состав команды
        </Typography>
        <Grid container spacing={4} justifyContent='space-between' width='100%'>
          {teamMembers.map((member, idx) => (
            <Grid
              item // обязательно item
              key={idx}
              xs={6}
              sm={4}
              md={3}
              lg={2}
              textAlign='center'
            >
              {/* Контейнер для изображения */}
              <Box
                sx={{
                  width: 160,
                  height: 160,
                  borderRadius: '50%',
                  overflow: 'hidden',
                  mx: 'auto',
                }}
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  width={160}
                  height={160}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </Box>

              <Typography variant='h6' mt={2}>
                {member.name}
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                {member.role}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Section>

      {/* Contact Form */}
      <Section>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, lg: 5 }}>
            <Typography variant='h5' mb={2}>
              Форма обратной связи
            </Typography>
            <Typography variant='body2' mb={1}>
              Предлагаемый удобный в сопровождении инструмент
            </Typography>
            <Typography variant='body2' mb={2}>
              По вопросам сотрудничества пишите:
            </Typography>
            <Typography variant='body2'>
              <b>Mail:</b> mail@rangeray.ru
            </Typography>
            <Typography variant='body2'>
              <b>Phone:</b> +7 (914) 484-9962
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, lg: 7 }}>
            <Box
              component='form'
              sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
            >
              <Grid container spacing={2}>
                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField fullWidth label='Имя' variant='outlined' />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField fullWidth label='Фамилия' variant='outlined' />
                </Grid>
              </Grid>
              <TextField fullWidth label='Email' variant='outlined' />
              <TextField
                fullWidth
                label='Ваш вопрос...'
                multiline
                rows={4}
                variant='outlined'
              />
              <Button variant='contained' color='primary' fullWidth>
                Отправить
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Section>
    </Box>
  );
}
export default withLayout(Home);
