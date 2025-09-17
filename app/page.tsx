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
    role: 'Senior Node.js Developer',
    image: '/telegram-cloud-photo-size-2-3978908276710549647-c.jpg',
  },
  {
    name: 'Алексей',
    role: 'Senior PHP Developer',
    image: '/alexey.jpg',
  },
  {
    name: 'Егор',
    role: 'QA Tester',
    image: '/telegram-peer-photo-size-2-5433942415187767234-1-0-0.jpg',
  },
  {
    name: 'Григорий',
    role: 'Senior PHP Developer',
    image: '/Anonymous_emblem.svg.png',
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
          <SectionHeader title='#стек технологий' />
          <TechStackSection></TechStackSection>
        </Section>

        {/* Portfolio */}
        <Section>
          <SectionHeader
            title='#выполненные проекты'
            linkText='посмотреть все'
            linkHref='/projects'
          />
          <ProjectSection></ProjectSection>
        </Section>

        {/* Team */}
        <Section>
          <Typography variant='h4' textAlign='center' mb={4}>
            Состав команды
          </Typography>
          <Grid
            container
            spacing={4}
            justifyContent={{ xs: 'center', md: 'space-between' }}
            width='100%'
          >
            {teamMembers.map((member, idx) => (
              <Grid
                key={idx}
                sx={{
                  xs: 6,
                  sm: 4,
                  md: 3,
                  lg: 2,
                }}
                textAlign='center'
              >
                {/* Контейнер для изображения */}
                <Box
                  sx={{
                    width: 160,
                    height: 160,
                    borderRadius: '50%',
                    overflow: 'hidden',
                    mx: 'auto',
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

                <Typography variant='h6' mt={2}>
                  {member.name}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  {member.role}
                </Typography>
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
