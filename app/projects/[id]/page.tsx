'use client';

import { withLayout } from '@/layout/Layout';
import { useParams } from 'next/navigation';
import { Button, Grid, Typography, Modal, Box } from '@mui/material';
import Image from 'next/image';
import { Section } from '@/components/Section/Section';
import Link from 'next/link';
import { portfolioItems } from '@/libs/data';
import { useState } from 'react';

function ProjectDetail() {
  const params = useParams();
  const item = portfolioItems.find((p) => p.id === Number(params.id));
  const [open, setOpen] = useState(false);

  if (!item) {
    return <Typography variant='h6'>Проект не найден</Typography>;
  }

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Section>
      <Button
        variant='contained'
        component={Link}
        href='/'
        sx={{ mb: 4, mr: 2 }}
      >
        Вернуться на главную
      </Button>

      {/* Demo кнопка */}
      {item.demoLink && item.demoType === 'link' && (
        <Button
          variant='outlined'
          sx={{
            borderColor: '#D33C44',
            color: '#D33C44',
            mb: 4,
            '&:hover': {
              borderColor: '#FF6B70',
              backgroundColor: '#FFDCE0',
            },
          }}
          href={item.demoLink}
          target='_blank'
          rel='noopener noreferrer'
        >
          Demo {'<~>'}
        </Button>
      )}

      {item.demoLink && item.demoType === 'pdf' && (
        <>
          <Button
            variant='outlined'
            sx={{
              borderColor: '#D33C44',
              color: '#D33C44',
              mb: 4,
              '&:hover': {
                borderColor: '#FF6B70',
                backgroundColor: '#FFDCE0',
              },
            }}
            onClick={handleOpen}
          >
            Demo {'<~>'}
          </Button>

          <Modal open={open} onClose={handleClose}>
            <Box
              sx={{
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: { xs: '95%', md: '60%' },
                height: { xs: '90%', md: '80%' },
                bgcolor: '#18202A',
                borderRadius: 2,
                boxShadow: '0 0 20px rgba(0,0,0,0.6)',
                p: 2,
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Button
                onClick={handleClose}
                sx={{
                  alignSelf: 'flex-end',
                  minWidth: 0,
                  p: 0.5,
                  mb: 1,
                  color: '#D33C44',
                  fontWeight: 'bold',
                  fontSize: '1.2rem',
                  '&:hover': { backgroundColor: 'rgba(211,60,68,0.1)' },
                }}
              >
                ✕
              </Button>

              <Box
                sx={{
                  flexGrow: 1,
                  overflow: 'auto',
                  bgcolor: '#fff',
                  borderRadius: 1,
                }}
              >
                <iframe
                  src={item.demoContent}
                  style={{
                    width: '100%',
                    height: '100%',
                    border: 'none',
                    borderRadius: 4,
                  }}
                  title='PDF Demo'
                />
              </Box>
            </Box>
          </Modal>
        </>
      )}

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
