'use client';

import { Box, Typography, Container, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { withLayout } from '@/layout/Layout';

const steps = [
  { title: 'Git и платформы', items: ['GitHub', 'GitLab'] },
  {
    title: 'Linux (базовые команды)',
    items: ['CLI basics', 'Файловая система'],
  },
  { title: 'HTML + CSS', items: ['Семантика', 'Flex/Grid', 'Адаптив'] },
  { title: 'JavaScript', items: ['ES6+', 'DOM', 'Async/Await'] },
  { title: 'Пакетные менеджеры', items: ['npm', 'pnpm', 'yarn'] },
  { title: 'TypeScript', items: ['Типы', 'Generics', 'Интерфейсы'] },
  {
    title: 'Фреймворки и библиотеки',
    items: [
      'React',
      'Redux Toolkit',
      'Router',
      'RTK Query',
      'Axios',
      'Next.js',
    ],
  },
  { title: 'Альтернативы', items: ['Vue / Nuxt', 'Angular'] },
  { title: 'Docker', items: ['Docker Compose', 'Образы', 'Контейнеры'] },
  { title: 'CI/CD', items: ['GitLab Runner', 'Jenkins', 'K3S', 'Swarm'] },
];

function RoadMap() {
  return (
    <Box sx={{ bgcolor: '#18202A', color: '#fff', py: 10, minHeight: '100vh' }}>
      <Container>
        <Typography
          variant='h3'
          gutterBottom
          textAlign='center'
          sx={{
            fontFamily: "'JetBrains Mono', monospace",
            color: '#D33C44',
            mb: 6,
          }}
        >
          🚀 RoadMap Frontend Разработчика
        </Typography>

        <Grid container spacing={6} justifyContent='center'>
          {steps.map((step, idx) => (
            <Grid
              key={idx}
              sx={{
                xs: 12,
                md: 6,
                position: 'relative',
              }}
            >
              {/* Карточка */}
              <Paper
                component={motion.div}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                sx={{
                  p: 3,
                  borderRadius: 3,
                  bgcolor: '#1E293B',
                  border: '1px solid #D33C44',
                }}
              >
                <Typography
                  variant='h5'
                  sx={{
                    fontFamily: "'JetBrains Mono', monospace",
                    color: '#D33C44',
                    mb: 2,
                  }}
                >
                  {idx + 1}. {step.title}
                </Typography>
                {step.items.map((item, i) => (
                  <Typography key={i} sx={{ color: '#fff', mb: 1 }}>
                    ➕ {item}
                  </Typography>
                ))}
              </Paper>

              {/* Анимированная стрелка */}
              {idx < steps.length - 1 && (
                <Box
                  component={motion.div}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  sx={{
                    position: 'absolute',
                    left: '50%',
                    bottom: -30,
                    transform: 'translateX(-50%)',
                    fontSize: '2rem',
                    color: '#D33C44',
                  }}
                >
                  ↓
                </Box>
              )}
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default withLayout(RoadMap);
