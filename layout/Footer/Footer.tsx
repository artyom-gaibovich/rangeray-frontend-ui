'use client';

import {
  Box,
  Container,
  Grid,
  Link,
  Typography,
  IconButton,
} from '@mui/material';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';
import { format } from 'date-fns';

export const Footer = () => {
  return (
    <Box
      component='footer'
      sx={{
        py: 4,
        mt: 'auto',
        backgroundColor: (theme) =>
          theme.palette.mode === 'light' ? '#f5f5f5' : theme.palette.grey[900],
      }}
    >
      <Container maxWidth='lg'>
        <Grid
          container
          spacing={2}
          alignItems='center'
          justifyContent='space-between'
        >
          {/* Левая часть */}
          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{
              textAlign: { xs: 'center', md: 'left' },
              mb: { xs: 2, md: 0 },
            }}
          >
            <Box>
              <Link
                href='/about'
                color='inherit'
                underline='hover'
                sx={{ mx: 1 }}
              >
                О нас
              </Link>
              <Link
                href='/contacts'
                color='inherit'
                underline='hover'
                sx={{ mx: 1 }}
              >
                Контакты
              </Link>
              <Link
                href='/privacy'
                color='inherit'
                underline='hover'
                sx={{ mx: 1 }}
              >
                Политика конфиденциальности
              </Link>
            </Box>
            <Typography variant='body2' color='text.secondary'>
              &copy; 2020 - {format(new Date(), 'yyyy')} Все права защищены
            </Typography>
          </Grid>

          {/* Правая часть */}
          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{ textAlign: { xs: 'center', md: 'right' } }}
          >
            <IconButton
              href='https://facebook.com'
              target='_blank'
              color='primary'
            >
              <Facebook />
            </IconButton>
            <IconButton
              href='https://twitter.com'
              target='_blank'
              color='primary'
            >
              <Twitter />
            </IconButton>
            <IconButton
              href='https://instagram.com'
              target='_blank'
              color='primary'
            >
              <Instagram />
            </IconButton>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
