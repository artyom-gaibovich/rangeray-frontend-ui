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

export const withLayout = <T extends object>(
  Component: FunctionComponent<T>
) => {
  return function WithLayoutComponent(props: T) {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    );
  };
};
