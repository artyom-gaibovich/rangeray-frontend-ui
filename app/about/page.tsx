'use client';

import { withLayout } from '@/layout/Layout';
import {
  Container,
  Grid,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';

function About() {
  return (
    <Box className='page-wrapper d-flex flex-column min-vh-100'>
      <Container>
        <Grid container justifyContent='center'>
          <Grid size={{ xs: 12 }}>
            <Typography variant='h4' textAlign='center' gutterBottom>
              О компании
            </Typography>

            <Typography paragraph>
              &#34;Range-Ray&#34; — ваше цифровое будущее начинается здесь. Мы —
              креативное интернет-агентство, специализирующееся на разработке,
              поддержке и развитии веб-проектов любой сложности. От стильных
              сайтов-визиток до масштабных интернет-магазинов и полноценных
              платформ недвижимости — мы превращаем идеи в эффективные цифровые
              решения.
            </Typography>

            <List>
              <ListItem>
                <ListItemText primary='Индивидуальный подход — каждое решение создаётся под нужды бизнеса.' />
              </ListItem>
              <ListItem>
                <ListItemText primary='Современные технологии — только актуальные и проверенные инструменты.' />
              </ListItem>
              <ListItem>
                <ListItemText primary='Поддержка 24/7 — ваши проекты всегда под надёжным контролем.' />
              </ListItem>
              <ListItem>
                <ListItemText primary='Рост и масштабируемость — фундамент для уверенного роста в онлайне.' />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default withLayout(About);
