import { Box, Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%', // ширина всей секции
        minHeight: { xs: '400px', md: '600px' }, // высота секции
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        py: { xs: 12, md: 16 },
        // Фон на всю ширину
        backgroundImage: `url('/space.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          bgcolor: 'rgba(0,0,0,0.5)',
          zIndex: 0,
        },
      }}
    >
      <Container
        maxWidth='lg'
        sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}
      >
        <Grid container justifyContent='center' spacing={2}>
          <Grid item xs={12}>
            <Image
              src='/logo.svg'
              alt='logo'
              width={100}
              height={100}
              style={{ display: 'inline-block', marginBottom: 16 }}
            />
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
      </Container>
    </Box>
  );
}
