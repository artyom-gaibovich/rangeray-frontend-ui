'use client';

import { withLayout } from '@/layout/Layout';
import {
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
} from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { Section } from '@/components/Section/Section';
import { ProjectSection } from '@/components/ProjectSection/ProjectSection';

const portfolioItems = [
  {
    id: 1,
    title: 'Сайт PHP',
    description:
      'Интеграция с CRM Bitrix Интеграция с CRM BitrixИнтеграция с CRM BitrixИнтеграция с CRM BitrixИнтеграция с CRM Bitrix',
    updated: '5 мин',
    image: '/sitew_og.png',
  },
  {
    id: 2,
    title: 'Сайт PHP',
    description: 'Интеграция с CRM Bitrix',
    updated: '5 мин',
    image: '/sitew_og.png',
  },
  {
    id: 3,
    title: 'Сайт PHP',
    description: 'Интеграция с CRM Bitrix',
    updated: '5 мин',
    image: '/sitew_og.png',
  },
  {
    id: 4,
    title: 'Сайт PHP',
    description: 'Интеграция с CRM Bitrix',
    updated: '5 мин',
    image: '/sitew_og.png',
  },
  {
    id: 5,
    title: 'Сайт PHP',
    description: 'Интеграция с CRM Bitrix',
    updated: '5 мин',
    image: '/sitew_og.png',
  },
];

function Projects() {
  return (
    <Section>
      <ProjectSection></ProjectSection>
    </Section>
  );
}

export default withLayout(Projects);
