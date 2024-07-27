import React from 'react';
import { Header, Footer } from 'components/index';

type Props = { children: JSX.Element };

const Layout: React.FC<Props> = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default Layout;
