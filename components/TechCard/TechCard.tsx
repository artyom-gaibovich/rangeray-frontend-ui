import { Card, CardContent, Chip, Stack, Typography } from '@mui/material';
import { JSX } from 'react';

interface TechCardProps {
  title: string;
  techs: { name: string; icon?: string }[];
}

export const TechCard = ({ title, techs }: TechCardProps): JSX.Element => {
  return (
    <Card sx={{ height: '100%', p: 2 }}>
      <CardContent>
        <Typography variant='h6' gutterBottom>
          {title}
        </Typography>
        <Stack direction='row' flexWrap='wrap' gap={1}>
          {techs.map((tech, idx) => (
            <Chip
              key={idx}
              label={tech.name}
              icon={
                tech.icon ? <i className={`bi bi-${tech.icon}`} /> : undefined
              }
              size='small'
              color='primary'
              variant='outlined'
            />
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
};
