'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <AppBar
        position='fixed'
        elevation={2}
        sx={{
          bgcolor: '#333333',
        }}
      >
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
                display: { xs: 'none', md: 'flex' }, // скрываем на мобилке
                gap: 4,
                p: 0,
                m: 0,
              }}
            >
              {navLinks.map((link) => (
                <Box component='li' key={link.href} sx={{ listStyle: 'none' }}>
                  <Link
                    href={link.href}
                    style={{
                      textDecoration: 'none',
                      fontFamily: "'Roboto Mono', monospace",
                      fontWeight: 600,
                      display: 'flex',
                      alignItems: 'center',
                      color: '#A5D6FF',
                    }}
                  >
                    <span style={{ color: '#D33C44', marginRight: '4px' }}>
                      #
                    </span>
                    {link.label}
                  </Link>
                </Box>
              ))}
            </Box>

            {/* ====== DESKTOP контакты ====== */}
            <Box
              component='ul'
              sx={{
                display: { xs: 'none', md: 'flex' }, // скрываем на мобилке
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
                      fontFamily: "'Roboto Mono', monospace",
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
                      fontFamily: "'Roboto Mono', monospace",
                      fontWeight: 600,
                      color: '#FFFFFF',
                    }}
                  >
                    +7 (914) 484-9962
                  </Typography>
                </Box>
              </Box>
            </Box>

            {/* ====== MOBILE: логотип + бургер ====== */}
            <Box
              sx={{
                display: { xs: 'flex', md: 'none' }, // показываем только на мобилке
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
                <Image src='/logo.svg' alt='logo' width={32} height={32} />
                <Typography
                  sx={{
                    ml: 1,
                    fontFamily: "'Formular', monospace",
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
                    fontFamily: "'Roboto Mono', monospace",
                    fontWeight: 600,
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
