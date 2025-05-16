import { ThemeProvider } from '@/components/faq/theme-provider';
import { Outlet } from 'react-router';
import Header from '@/components/faq/header';

const FAQLayout = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <main className="container-auto">
        <Header />
        <Outlet />
      </main>
    </ThemeProvider>
  );
};

export default FAQLayout;
