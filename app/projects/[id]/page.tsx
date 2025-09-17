'use client';

import { withLayout } from '@/layout/Layout';
import { useParams } from 'next/navigation';
import { Button, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import { Section } from '@/components/Section/Section';
import Link from 'next/link';
import { portfolioItems } from '@/libs/data';

function ProjectDetail() {
  const params = useParams();
  const item = portfolioItems.find((p) => p.id === Number(params.id));

  if (!item) {
    return <Typography variant='h6'>Проект не найден</Typography>;
  }

  return (
    <Section>
      <Button
        variant='contained'
        component={Link}
        href='/' // ссылка на главную
        sx={{ mb: 4 }}
      >
        Вернуться на главную
      </Button>
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
    </Section>
  );
}

export default withLayout(ProjectDetail);
