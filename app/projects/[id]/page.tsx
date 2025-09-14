'use client';

import { withLayout } from '@/layout/Layout';
import { useParams } from 'next/navigation';
import { Grid, Typography, Box } from '@mui/material';
import Image from 'next/image';

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

function ProjectDetail() {
  const params = useParams();
  const item = portfolioItems.find((p) => p.id === Number(params.id));

  if (!item) {
    return <Typography variant='h6'>Проект не найден</Typography>;
  }

  return (
    <Box className='min-vh-100' sx={{ py: 5, px: { xs: 2, md: 5 } }}>
      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Image
            src={item.image}
            alt={item.title}
            width={500}
            height={500}
            style={{ objectFit: 'cover', width: '100%', height: '250px' }}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography variant='h4' gutterBottom>
            {item.title}
          </Typography>
          <Typography variant='caption' color='text.secondary' gutterBottom>
            {item.updated}
          </Typography>
          <Typography variant='body1' gutterBottom>
            {item.description}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default withLayout(ProjectDetail);
