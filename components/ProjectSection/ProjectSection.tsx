import { Grid } from '@mui/material';
import { ProjectCard } from '@/components/ProjectCard/ProjectCard';
import { portfolioItems } from '@/libs/data';

export function ProjectSection() {
  return (
    <Grid container spacing={4} justifyContent='flex-start'>
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
            demoType={item.demoType}
            description={item.description}
            techStack={item.techStack}
            demoContent={item.demoContent}
            demoLink={item.demoLink || '#'}
            detailsLink={`/projects/${i + 1}`}
          />
        </Grid>
      ))}
    </Grid>
  );
}
