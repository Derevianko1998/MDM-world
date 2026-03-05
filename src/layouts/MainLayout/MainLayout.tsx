import { Outlet } from 'react-router-dom';
import { Header, Footer } from '@/components';

export const MainLayout = () => {
  return (
    <div className="app-layout">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};