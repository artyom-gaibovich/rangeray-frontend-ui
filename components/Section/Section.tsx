import { Box, Container } from '@mui/material';
import { ReactNode } from 'react';

export function Section({
  children,
  narrow = false, // если нужно более узкий контейнер (например, форма)
}: {
  children: ReactNode;
  narrow?: boolean;
}) {
  return (
    <Box component='section' sx={{ py: 8 }}>
      <Container maxWidth={narrow ? 'md' : 'lg'}>{children}</Container>
    </Box>
  );
}
