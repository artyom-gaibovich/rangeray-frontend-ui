'use client';

import { Box, Typography, Grid } from '@mui/material';
import { Section } from '@/components/Section/Section';
import { SectionHeader } from '@/components/SectionHeader/SectionHeader';
import { portfolioItems } from '@/app/page';
import { ProjectCard } from '@/components/ProjectCard/ProjectCard';

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

export function TechStackSectionOld() {
  return (
    <Section
      sx={{
        mt: { xs: 6, md: 0 }, // добавляем верхний отступ только на мобильных
        position: 'relative',
        py: 8,
        px: { xs: 2, md: 5 },
        backgroundImage: "url('/tech-bg.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Grid container spacing={4} justifyContent='flex-end'>
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
    </Section>
  );
}

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

function PR() {
  return (
    <Grid container spacing={4} justifyContent='center'>
      {portfolioItems.map((item, i) => (
        <Grid
          key={i}
          size={{
            xs: 12,
            sm: 6,
            md: 4,
          }}
        >
          <ProjectCard
            image={item.image}
            title={item.title}
            description={item.description}
            techStack={item.techStack}
            demoLink={item.demoLink || '#'}
            detailsLink={`/projects/${i + 1}`}
          />
        </Grid>
      ))}
    </Grid>
  );
}
