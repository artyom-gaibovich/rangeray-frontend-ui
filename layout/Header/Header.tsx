'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Grid,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Container,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const navLinks = [
  { label: 'О нас', href: '/about' },
  { label: 'Контакты', href: '/contacts' },
  { label: 'Проекты', href: '/projects' },
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
        color='default'
        elevation={3}
        sx={{
          bgcolor: 'background.default',
          zIndex: (theme) => theme.zIndex.appBar,
          borderBottom: '1px solid rgba(175, 213, 251, 0.3)',
        }}
      >
        <Container maxWidth='lg'>
          <Toolbar disableGutters>
            <Grid container alignItems='center'>
              {/* Лого */}
              <Grid size={{ xs: 6, md: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Link
                    href='/'
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      textDecoration: 'none',
                      color: 'inherit',
                    }}
                  >
                    <Image src='/logo.svg' alt='logo' width={40} height={40} />
                    <Typography
                      variant='h6'
                      sx={{ ml: 1, fontFamily: "'Formular', monospace" }}
                    >
                      RangeRay
                    </Typography>
                  </Link>
                </Box>
              </Grid>

              {/* Навигация (desktop) */}
              <Grid
                size={{ xs: 0, md: 9 }}
                sx={{
                  display: { xs: 'none', md: 'flex' },
                  justifyContent: 'flex-end',
                  gap: 3,
                }}
              >
                {navLinks.map((link) => (
                  <Button
                    key={link.href}
                    component={Link}
                    href={link.href}
                    color='inherit'
                    sx={{
                      fontFamily: "'Roboto Mono', monospace",
                      fontWeight: 600,
                      '&:hover': { color: 'primary.main' },
                    }}
                  >
                    {link.label}
                  </Button>
                ))}
              </Grid>

              {/* Бургер-меню (mobile) */}
              <Grid
                size={{ xs: 6, md: 0 }}
                sx={{
                  display: { xs: 'flex', md: 'none' },
                  justifyContent: 'flex-end',
                }}
              >
                <IconButton
                  edge='end'
                  color='inherit'
                  onClick={handleDrawerToggle}
                >
                  <MenuIcon />
                </IconButton>
              </Grid>
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Компенсатор высоты AppBar */}
      <Toolbar />

      {/* Drawer для мобильного меню */}
      <Drawer
        anchor='right'
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          '& .MuiDrawer-paper': { width: 240, bgcolor: 'background.paper' },
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
