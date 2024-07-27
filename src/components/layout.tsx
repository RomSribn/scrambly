import React from 'react';
import { Header } from 'components/index';

type Props = { children: JSX.Element };

const Layout: React.FC<Props> = ({ children }) => (
  <div className="max-w-4xl mx-auto px-3">
    <Header />
    {children}
  </div>
);

export default Layout;
