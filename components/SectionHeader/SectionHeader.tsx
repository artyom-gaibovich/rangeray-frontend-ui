'use client';

import Link from 'next/link';
import { Box, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

interface SectionHeaderProps {
  title: string;
  linkText?: string;
  linkHref?: string;
}

export const SectionHeader = ({
  title,
  linkText,
  linkHref,
}: SectionHeaderProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        mb: 4,
      }}
    >
      {/* Левая часть с заголовком и линией */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Typography
          variant='h4'
          sx={{
            fontFamily: "'JetBrains Mono', monospace",
            fontWeight: 700,
          }}
        >
          {title}
        </Typography>
        <Box
          sx={{
            width: 80,
            height: 3,
            bgcolor: '#D33C44',
            borderRadius: 2,
          }}
        />
      </Box>

      {/* Правая часть (ссылка "посмотреть все") */}
      {linkText && linkHref && (
        <Link
          href={linkHref}
          style={{
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
            color: '#D33C44',
            fontFamily: "'JetBrains Mono', monospace",
            fontWeight: 600,
          }}
        >
          {linkText}
          <ArrowForwardIcon sx={{ ml: 1 }} />
        </Link>
      )}
    </Box>
  );
};
