import { ThemeProvider } from '@/components/faq/theme-provider';
import Header from '@/components/header';

const MainLayout = ({ children }) => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <main className="container-auto">
        <Header />
        {children}
      </main>
    </ThemeProvider>
  );
};

export default MainLayout;
