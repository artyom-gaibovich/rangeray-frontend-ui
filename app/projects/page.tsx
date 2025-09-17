'use client';

import { withLayout } from '@/layout/Layout';
import { Section } from '@/components/Section/Section';
import { ProjectSection } from '@/components/ProjectSection/ProjectSection';
import { Button } from '@mui/material';
import Link from 'next/link';

function Projects() {
  return (
    <Section>
      <Button
        variant='contained'
        component={Link}
        href='/' // ссылка на главную
        sx={{ mb: 4 }}
      >
        Вернуться на главную
      </Button>

      <ProjectSection />
    </Section>
  );
}

export default withLayout(Projects);
