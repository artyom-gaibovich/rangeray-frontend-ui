import React, { FunctionComponent, JSX } from 'react';
import { Footer } from '@/layout/Footer/Footer';
import { Header } from '@/layout/Header/Header';
import { LayoutProps } from '@/layout/Layout.props';

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <div>
      <Header></Header>
      <main>{children}</main>
      <Footer></Footer>
    </div>
  );
};

export const withLayout = <T extends Record<string, unknown>>(
  Component: FunctionComponent<T>
) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    );
  };
};
