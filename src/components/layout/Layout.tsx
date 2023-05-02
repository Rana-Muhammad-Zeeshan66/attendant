import React from 'react';
import NavBar from '../navbar/NavBar';

interface LayoutProps {
  children: JSX.Element;
}

const Layout = (props: LayoutProps): JSX.Element => {
  const { children } = props;
  return (
    <>
      <NavBar />
      <main>{children}</main>
    </>
  );
};

export default Layout;
