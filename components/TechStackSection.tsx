'use client';
import { Box, Typography, Grid } from '@mui/material';

const techStackData = [
  {
    title: 'CI/CD',
    items: ['GitHub Actions', 'GitLab CI', 'Jenkins', 'ArgoCD'],
  },

  { title: 'Systems', items: ['Docker', 'Kubernetes', 'Linux', 'Git'] },
  {
    title: 'Data Processing',
    items: ['RabbitMQ', 'Kafka', 'Celery', 'Pandas'],
  },

  {
    title: 'Languages',
    items: ['PHP', 'Golang', 'JavaScript', 'Python', 'TypeScript'],
  },

  { title: 'Databases', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'] },

  {
    title: 'Frameworks',
    items: ['NestJS', 'React', 'Next.js', 'Laravel', 'Vue.js'],
  },
];

export function TechStackSection() {
  // Разбиваем на ряды: [1 элемент], [2 элемента], [3 элемента]
  const rows = [
    techStackData.slice(3, 6),
    techStackData.slice(1, 3),
    techStackData.slice(0, 1),
  ];

  return (
    <Box
      display='flex'
      flexDirection='column'
      gap={2}
      sx={{
        backgroundImage: `url(/ar.svg), url(/layer1.svg)`,
        backgroundRepeat: 'no-repeat, no-repeat',
        backgroundPosition: 'center, left-center',
        backgroundSize: '1008px 647px, 158px 181px', // или contain, если нужно полностью влезть
        padding: 4, // отступы, чтобы контент не прилегал к краям

        // прижимаем ряд к правому краю
      }}
    >
      {rows.map((row, rowIdx) => (
        <Grid
          container
          key={rowIdx}
          spacing={2}
          sx={{
            justifyContent: 'flex-end',
          }}
        >
          {row.map((stack, idx) => (
            <Grid key={idx} sx={{ width: '285px' }}>
              <Box
                sx={{
                  backgroundColor: '#18202A',
                  borderRadius: 0,
                  border: '1px solid #FFFFFF',
                  overflow: 'hidden',
                  boxShadow: 3,
                }}
              >
                <Box sx={{ backgroundColor: '#FFFFFF', px: 2, py: 1 }}>
                  <Typography
                    variant='h6'
                    sx={{
                      color: '#D33C44',
                      fontWeight: 500,
                      fontSize: '24px',
                      fontFamily: "'JetBrains Mono', monospace",
                    }}
                  >
                    {stack.title}
                  </Typography>
                </Box>

                <Box sx={{ px: 2, py: 2 }}>
                  {stack.items.map((item, i) => (
                    <Typography
                      key={i}
                      sx={{
                        color: '#FFFFFF',
                        fontFamily: "'JetBrains Mono', monospace",
                        mb: 1,
                        fontSize: '16px',
                        fontWeight: 100,
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      <Box
                        component='span'
                        sx={{ color: '#D33C44', fontWeight: 100, mr: 1 }}
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
      ))}
    </Box>
  );
}
