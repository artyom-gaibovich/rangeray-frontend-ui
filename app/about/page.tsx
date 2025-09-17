'use client';

import { Section } from '@/components/Section/Section';
import {
  Container,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { withLayout } from '@/layout/Layout';

function About() {
  return (
    <Section>
      <Container maxWidth='md'>
        <Grid container justifyContent='center'>
          <Grid xs={12}>
            <Typography
              variant='h3'
              textAlign='center'
              gutterBottom
              sx={{ fontWeight: 'bold', mb: 4 }}
            >
              О компании
            </Typography>

            <Typography
              variant='body1'
              paragraph
              textAlign='center'
              sx={{ mb: 4 }}
            >
              <b>&quot;Range-Ray&quot;</b> — ваше цифровое будущее начинается
              здесь. Мы — креативное интернет-агентство, специализирующееся на
              разработке, поддержке и развитии веб-проектов любой сложности. От
              стильных сайтов-визиток до масштабных интернет-магазинов и
              полноценных платформ недвижимости — мы превращаем идеи в
              эффективные цифровые решения.
            </Typography>

            <List sx={{ width: '100%', maxWidth: 800, mx: 'auto' }}>
              {[
                'Индивидуальный подход — каждое решение создаётся под нужды бизнеса.',
                'Современные технологии — только актуальные и проверенные инструменты.',
                'Поддержка 24/7 — ваши проекты всегда под надёжным контролем.',
                'Рост и масштабируемость — фундамент для уверенного роста в онлайне.',
              ].map((text, idx) => (
                <ListItem key={idx}>
                  <ListItemIcon>
                    <CheckCircleIcon sx={{ color: '#D33C44' }} />
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
      </Container>
    </Section>
  );
}

export default withLayout(About);
