'use client';

import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Button,
} from '@mui/material';
import Image from 'next/image';
interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  techStack: readonly string[];
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
          sx={{
            borderColor: '#D33C44',
            color: '#D33C44',
            '&:hover': {
              borderColor: '#FF6B70', // ваш цвет при hover
              backgroundColor: '#FFDCE0', // фон при hover (можно оставить прозрачным)
              color: '#D33C44', // если хотите, чтобы текст оставался тем же
            },
          }}
          href={demoLink}
        >
          Демо <span style={{ marginLeft: 4 }}>{'<~>'}</span>
        </Button>
        <Button
          variant='outlined'
          sx={{
            borderColor: '#A5D6FF',
            color: '#A5D6FF',
            '&:hover': {
              borderColor: '#70C1FF',
              backgroundColor: '#E0F2FF',
              color: '#A5D6FF',
            },
          }}
          href={detailsLink}
        >
          Детали <span style={{ marginLeft: 4 }}>{'=>'} </span>
        </Button>
      </Box>
    </Card>
  );
};
