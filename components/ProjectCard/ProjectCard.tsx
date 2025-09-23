'use client';

import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Modal,
  Box,
  Button,
} from '@mui/material';
import Image from 'next/image';
import { useState } from 'react';

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  techStack: readonly string[];
  demoLink?: string;
  demoType: string;
  demoContent?: string;
  detailsLink?: string;
}

export const ProjectCard = ({
  image,
  title,
  description,
  techStack,
  demoLink,
  demoType = 'link',
  demoContent,
  detailsLink,
}: ProjectCardProps) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Card
        sx={{
          border: '2px solid #D33C44',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <CardMedia sx={{ position: 'relative', height: 200 }}>
          <Image src={image} alt={title} fill style={{ objectFit: 'cover' }} />
        </CardMedia>

        <CardContent sx={{ flexGrow: 1 }}>
          <Typography
            variant='caption'
            color='text.secondary'
            display='block'
            mb={1}
          >
            {techStack.join(', ')}
          </Typography>

          <Typography variant='h6' noWrap>
            {title}
          </Typography>

          <Typography
            variant='body2'
            color='text.secondary'
            sx={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
            }}
          >
            {description}
          </Typography>
        </CardContent>

        <Box sx={{ p: 2, pt: 0, display: 'flex', gap: 2 }}>
          {demoType === 'link' && demoLink ? (
            <Button
              variant='outlined'
              sx={{
                borderColor: '#D33C44',
                color: '#D33C44',
                '&:hover': {
                  borderColor: '#FF6B70',
                  backgroundColor: '#FFDCE0',
                  color: '#D33C44',
                },
              }}
              href={demoLink}
              target='_blank'
              rel='noopener noreferrer'
            >
              Демо <span style={{ marginLeft: 4 }}>{'<~>'}</span>
            </Button>
          ) : demoType === 'pdf' && demoContent ? (
            <Button
              variant='outlined'
              sx={{
                borderColor: '#D33C44',
                color: '#D33C44',
                '&:hover': {
                  borderColor: '#FF6B70',
                  backgroundColor: '#FFDCE0',
                  color: '#D33C44',
                },
              }}
              onClick={handleOpen}
            >
              Демо <span style={{ marginLeft: 4 }}>{'<~>'}</span>
            </Button>
          ) : null}

          {detailsLink && (
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
          )}
        </Box>
      </Card>

      {/* Модалка для PDF */}
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: { xs: '95%', md: '60%' },
            height: { xs: '90%', md: '80%' },
            bgcolor: '#18202A', // основной фон модалки
            borderRadius: 2,
            boxShadow: '0 0 20px rgba(0,0,0,0.6)',
            p: 2,
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* Кнопка закрытия */}
          <Button
            onClick={handleClose}
            sx={{
              alignSelf: 'flex-end',
              minWidth: 0,
              p: 0.5,
              mb: 1,
              color: '#D33C44', // красная кнопка закрытия
              fontWeight: 'bold',
              fontSize: '1.2rem',
              '&:hover': {
                backgroundColor: 'rgba(211,60,68,0.1)',
              },
            }}
          >
            ✕
          </Button>

          {/* PDF */}
          <Box
            sx={{
              flexGrow: 1,
              overflow: 'auto',
              bgcolor: '#fff',
              borderRadius: 1,
            }}
          >
            <iframe
              src={demoContent}
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                borderRadius: '4px',
              }}
              title='PDF Demo'
            />
          </Box>
        </Box>
      </Modal>
    </>
  );
};
