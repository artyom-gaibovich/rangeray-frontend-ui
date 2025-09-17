'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Container,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import TelegramIcon from '@mui/icons-material/Telegram';
import PhoneIcon from '@mui/icons-material/Phone';

const navLinks = [
  { label: 'главная', href: '/' },
  { label: 'работы', href: '/projects' },
  { label: 'о нас', href: '/about' },
  { label: 'контакты', href: '/contacts' },
];

export const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname(); // текущий путь для подсветки

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <AppBar position='fixed' elevation={2} sx={{ bgcolor: '#333333' }}>
        <Container maxWidth='lg'>
          <Toolbar
            disableGutters
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            {/* ====== DESKTOP меню ====== */}
            <Box
              component='ul'
              sx={{
                display: { xs: 'none', md: 'flex' },
                gap: 4,
                p: 0,
                m: 0,
              }}
            >
              {navLinks.map((link) => (
                <Box component='li' key={link.href} sx={{ listStyle: 'none' }}>
                  <Link href={link.href} style={{ textDecoration: 'none' }}>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        fontFamily: "'JetBrains Mono', monospace",
                        fontWeight: 600,
                        color: pathname === link.href ? '#D33C44' : '#A5D6FF',
                        transition: 'color 0.2s',
                        '&:hover': {
                          color: '#D33C44',
                        },
                      }}
                    >
                      <Box sx={{ color: '#D33C44', mr: 0.5 }}>#</Box>
                      {link.label}
                    </Box>
                  </Link>
                </Box>
              ))}
            </Box>

            {/* ====== DESKTOP контакты ====== */}
            <Box
              component='ul'
              sx={{
                display: { xs: 'none', md: 'flex' },
                alignItems: 'center',
                gap: 4,
                p: 0,
                m: 0,
              }}
            >
              <Box component='li' sx={{ listStyle: 'none' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <TelegramIcon sx={{ color: '#E96C72' }} />
                  <Typography
                    sx={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontWeight: 600,
                      color: '#D33C44',
                    }}
                  >
                    @rangeray
                  </Typography>
                </Box>
              </Box>
              <Box component='li' sx={{ listStyle: 'none' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <PhoneIcon sx={{ color: '#E96C72' }} />
                  <Typography
                    sx={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontWeight: 600,
                      color: '#FFFFFF',
                    }}
                  >
                    +7 (914) 447-2000
                  </Typography>
                </Box>
              </Box>
            </Box>

            {/* ====== MOBILE: логотип + бургер ====== */}
            <Box
              sx={{
                display: { xs: 'flex', md: 'none' },
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
              }}
            >
              {/* Логотип */}
              <Link
                href='/'
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  textDecoration: 'none',
                }}
              >
                <img src='/logo.svg' alt='logo' width={32} height={32} />
                <Typography
                  sx={{
                    ml: 1,
                    fontFamily: "'JetBrains Mono', monospace",
                    fontWeight: 700,
                    color: '#A5D6FF',
                  }}
                >
                  RangeRay
                </Typography>
              </Link>

              {/* Бургер */}
              <IconButton
                edge='end'
                color='inherit'
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Отступ под фиксированный AppBar */}
      <Toolbar />

      {/* Drawer для мобильного меню */}
      <Drawer
        anchor='right'
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          '& .MuiDrawer-paper': {
            width: 240,
            bgcolor: '#333333',
            color: '#fff',
          },
        }}
      >
        <List>
          {navLinks.map((link) => (
            <ListItem key={link.href} disablePadding>
              <ListItemButton
                component={Link}
                href={link.href}
                onClick={handleDrawerToggle}
              >
                <ListItemText
                  primary={link.label}
                  primaryTypographyProps={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontWeight: 600,
                    color: pathname === link.href ? '#D33C44' : '#A5D6FF',
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};
