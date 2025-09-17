'use client';

import { withLayout } from '@/layout/Layout';
import { Box, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import ContactForm from '@/components/ContactForm/ContactForm';
import { Section } from '@/components/Section/Section';
import { SectionHeader } from '@/components/SectionHeader/SectionHeader';
import { ProjectSection } from '@/components/ProjectSection/ProjectSection';
import { TechStackSection } from '@/components/TechStackSection';
import HeroSection from '@/components/HeroSection/HeroSection';

const teamMembers = [
  {
    name: 'Артём',
    image: '/telegram-cloud-photo-size-2-3978908276710549647-c.jpg',
    roles: [
      'Тех лид, архитектор ПО',
      'Fullstack инженер',
      'Node.js, JavaScript, Golang',
    ],
  },
  {
    name: 'Алексей',
    image: '/alexey.jpg',
    roles: ['Тех лид, архитектор ПО', 'Backend инженер', 'PHP, Golang'],
  },
  {
    name: 'Егор',
    image: '/telegram-peer-photo-size-2-5433942415187767234-1-0-0.jpg',
    roles: ['QA Инженер'],
  },
  {
    name: 'Иван',
    image: '/Anonymous_emblem.svg.png',
    roles: ['Аналитик', 'QA Инженер'],
  },
];

function Home() {
  return (
    <>
      {/* Hero section */}
      <HeroSection></HeroSection>
      <Box
        className='page-wrapper'
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          py: 5,
          px: { xs: 2, md: 5 },
        }}
      >
        <Section>
          <SectionHeader title='стек технологий' />
          <TechStackSection></TechStackSection>
        </Section>

        {/* Portfolio */}
        <Section>
          <SectionHeader
            title='выполненные проекты'
            linkText='посмотреть все'
            linkHref='/projects'
          />
          <ProjectSection></ProjectSection>
        </Section>

        {/* Team */}
        <Section>
          <Typography variant='h4' textAlign='center' mb={6}>
            Состав команды
          </Typography>

          <Grid container spacing={4} justifyContent='center'>
            {teamMembers.map((member, idx) => (
              <Grid
                key={idx}
                sx={{
                  flex: {
                    xs: '1 1 100%', // на мобильных — 100%
                    sm: '1 1 45%', // на планшетах — 2 в ряд
                    md: '1 1 30%', // на десктопе — 3 в ряд
                    lg: '1 1 22%', // на широком экране — 4 в ряд
                  },
                  maxWidth: {
                    xs: '100%',
                    sm: '45%',
                    md: '30%',
                    lg: '22%',
                  },
                  textAlign: 'center',
                }}
              >
                {/* Фото */}
                <Box
                  sx={{
                    width: 160,
                    height: 160,
                    borderRadius: '50%',
                    overflow: 'hidden',
                    mx: 'auto',
                    boxShadow: 3,
                  }}
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={160}
                    height={160}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </Box>

                {/* Имя */}
                <Typography variant='h6' mt={2} fontWeight='bold'>
                  {member.name}
                </Typography>

                {/* Роли */}
                {member.roles.map((role, i) => (
                  <Typography
                    key={i}
                    variant='body2'
                    color='text.secondary'
                    sx={{ lineHeight: 1.6 }}
                  >
                    {role}
                  </Typography>
                ))}
              </Grid>
            ))}
          </Grid>
        </Section>

        {/* Contact Form */}
        <Section>
          <ContactForm></ContactForm>
        </Section>
      </Box>
    </>
  );
}
export default withLayout(Home);
