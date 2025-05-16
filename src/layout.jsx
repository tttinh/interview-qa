import { ThemeProvider } from '@/components/theme-provider';
import { Outlet } from 'react-router';
import Header from '@/components/header';

const Layout = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <main className="container-auto">
        <Header />
        <Outlet />
      </main>
    </ThemeProvider>
  );
};

export default Layout;
