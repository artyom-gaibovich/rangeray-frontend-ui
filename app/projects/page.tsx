'use client';

import { withLayout } from '@/layout/Layout';
import {
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
} from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

const portfolioItems = [
  {
    id: 1,
    title: 'Сайт PHP',
    description:
      'Интеграция с CRM Bitrix Интеграция с CRM BitrixИнтеграция с CRM BitrixИнтеграция с CRM BitrixИнтеграция с CRM Bitrix',
    updated: '5 мин',
    image: '/sitew_og.png',
  },
  {
    id: 2,
    title: 'Сайт PHP',
    description: 'Интеграция с CRM Bitrix',
    updated: '5 мин',
    image: '/sitew_og.png',
  },
  {
    id: 3,
    title: 'Сайт PHP',
    description: 'Интеграция с CRM Bitrix',
    updated: '5 мин',
    image: '/sitew_og.png',
  },
  {
    id: 4,
    title: 'Сайт PHP',
    description: 'Интеграция с CRM Bitrix',
    updated: '5 мин',
    image: '/sitew_og.png',
  },
  {
    id: 5,
    title: 'Сайт PHP',
    description: 'Интеграция с CRM Bitrix',
    updated: '5 мин',
    image: '/sitew_og.png',
  },
];

function Projects() {
  return (
    <section className='page-wrapper d-flex flex-column min-vh-100 py-5'>
      <Container>
        <Grid
          container
          justifyContent='center'
          textAlign='center'
          spacing={2}
          mb={4}
        >
          <Grid size={{ xs: 12, md: 7 }}>
            <Typography variant='h4' fontWeight='bold'>
              Портфолио
            </Typography>
            <Typography variant='subtitle1' color='text.secondary'>
              Результат нашей работы
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={4}>
          {portfolioItems.map((item) => (
            <Grid key={item.id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
              <Link
                href={`/projects/${item.id}`}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <Card sx={{ height: '100%' }}>
                  <CardMedia>
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={500}
                      height={500}
                      style={{
                        objectFit: 'cover',
                        width: '100%',
                        height: '250px',
                      }}
                    />
                  </CardMedia>
                  <CardContent>
                    <Typography variant='h6'>{item.title}</Typography>
                    <Typography variant='body2' color='text.secondary'>
                      {item.description}
                    </Typography>
                    <Typography variant='caption' color='text.secondary'>
                      Время последнего обновления {item.updated}
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
}

export default withLayout(Projects);
