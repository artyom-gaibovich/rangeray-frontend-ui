import React, { FunctionComponent, JSX } from 'react';
import { Footer } from '@/layout/Footer/Footer';
import { Header } from '@/layout/Header/Header';
import { LayoutProps } from '@/layout/Layout.props';
import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from '@/app/theme';

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh', // вся высота экрана
      }}
    >
      <Header></Header>
      <main>{children}</main>
      <Footer></Footer>
    </Box>
  );
};

export const withLayout = <T extends object>(
  Component: FunctionComponent<T>
) => {
  return function WithLayoutComponent(props: T) {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
          <Component {...props} />
        </Layout>
      </ThemeProvider>
    );
  };
};
