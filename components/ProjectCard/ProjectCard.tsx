'use client';

import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Chip,
  Button,
} from '@mui/material';
import Image from 'next/image';
interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  techStack: string[];
  demoLink?: string;
  detailsLink?: string;
}

export const ProjectCard = ({
  image,
  title,
  description,
  techStack,
  demoLink,
  detailsLink,
}: ProjectCardProps) => {
  return (
    <Card
      sx={{
        border: '2px solid #D33C44',
        height: '100%', // все карточки одинаковой высоты
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Картинка */}
      <CardMedia sx={{ position: 'relative', height: 200 }}>
        <Image
          src={image}
          alt={title}
          fill
          style={{
            objectFit: 'cover',
          }}
        />
      </CardMedia>

      {/* Контент */}
      <CardContent sx={{ flexGrow: 1 }}>
        {/* Стек технологий */}
        <Typography
          variant='caption'
          color='text.secondary'
          display='block'
          mb={1}
        >
          {techStack.join(', ')}
        </Typography>

        {/* Заголовок */}
        <Typography variant='h6' noWrap>
          {title}
        </Typography>

        {/* Описание с ограничением строк */}
        <Typography
          variant='body2'
          color='text.secondary'
          sx={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 3, // максимум 3 строки
            WebkitBoxOrient: 'vertical',
          }}
        >
          {description}
        </Typography>
      </CardContent>

      {/* Кнопки */}
      <Box sx={{ p: 2, pt: 0, display: 'flex', gap: 2 }}>
        <Button
          variant='outlined'
          sx={{ borderColor: '#D33C44', color: '#D33C44' }}
          href={demoLink}
          target='_blank'
        >
          Демо <span style={{ marginLeft: 4 }}>{'<~>'}</span>
        </Button>
        <Button
          variant='outlined'
          sx={{ borderColor: '#A5D6FF', color: '#A5D6FF' }}
          href={detailsLink}
        >
          Детали <span style={{ marginLeft: 4 }}>{'=>'} </span>
        </Button>
      </Box>
    </Card>
  );
};
