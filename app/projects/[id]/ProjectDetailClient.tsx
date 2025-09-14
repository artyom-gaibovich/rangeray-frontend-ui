'use client';

import { Grid, Typography, Box } from '@mui/material';
import Image from 'next/image';

interface ProjectItem {
  id: number;
  title: string;
  description: string;
  updated: string;
  image: string;
  content: string;
}

interface ProjectDetailClientProps {
  item: ProjectItem;
}

export default function ProjectDetailClient({
  item,
}: ProjectDetailClientProps) {
  return (
    <Box className='min-vh-100' sx={{ py: 5 }}>
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
          <Typography>{item.content}</Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
