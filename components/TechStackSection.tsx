'use client';

import { Box, Grid, Typography } from '@mui/material';

const techStackData = [
  {
    title: 'Languages',
    items: ['PHP', 'Golang', 'JavaScript', 'Python', 'TypeScript'],
  },
  {
    title: 'Databases',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'],
  },
  {
    title: 'Frameworks',
    items: ['NestJS', 'React', 'Next.js', 'Laravel', 'Vue.js'],
  },
  {
    title: 'Systems',
    items: ['Docker', 'Kubernetes', 'Linux', 'Git'],
  },
  {
    title: 'Data Processing',
    items: ['RabbitMQ', 'Kafka', 'Celery', 'Pandas'],
  },
  {
    title: 'CI/CD',
    items: ['GitHub Actions', 'GitLab CI', 'Jenkins', 'ArgoCD'],
  },
];

export function TechStackSection() {
  return (
    <Grid container spacing={4} justifyContent='center'>
      {techStackData.map((stack, idx) => (
        <Grid
          key={idx}
          sx={{
            xs: 12,
            sm: 6,
            md: 4,
          }}
        >
          <Box
            sx={{
              backgroundColor: '#18202A',
              borderRadius: 2,
              overflow: 'hidden',
              boxShadow: 3,
            }}
          >
            {/* Заголовок карточки */}
            <Box
              sx={{
                backgroundColor: '#FFFFFF',
                px: 2,
                py: 1,
              }}
            >
              <Typography
                variant='h6'
                sx={{
                  color: '#D33C44',
                  fontWeight: 700,
                  fontFamily: "'JetBrains Mono', monospace",
                }}
              >
                {stack.title}
              </Typography>
            </Box>

            {/* Список */}
            <Box sx={{ px: 2, py: 2 }}>
              {stack.items.map((item, i) => (
                <Typography
                  key={i}
                  sx={{
                    color: '#FFFFFF',
                    fontFamily: "'JetBrains Mono', monospace",
                    mb: 1,
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <Box
                    component='span'
                    sx={{
                      color: '#D33C44',
                      fontWeight: 700,
                      mr: 1,
                    }}
                  >
                    +
                  </Box>
                  {item}
                </Typography>
              ))}
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}
