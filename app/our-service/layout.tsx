'use client';

import { FooterSection } from '@/components/footer';
import { Header } from '@/components/layout/navbar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='flex min-h-screen w-full flex-col'>
      <Header />
      <main className='mx-auto w-full flex-grow'>{children}</main>
      <FooterSection />
    </div>
  );
};

export default Layout;
