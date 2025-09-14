'use client';

import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Grid,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

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
      <AppBar position='static' color='default' elevation={1}>
        <Toolbar>
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
                  <Typography variant='h6' sx={{ ml: 1 }}>
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
                gap: 2,
              }}
            >
              {navLinks.map((link) => (
                <Button
                  key={link.href}
                  component={Link}
                  href={link.href}
                  color='inherit'
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
      </AppBar>

      {/* Drawer для мобильного меню */}
      <Drawer
        anchor='right'
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          '& .MuiDrawer-paper': { width: 240 },
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
                <ListItemText primary={link.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};
