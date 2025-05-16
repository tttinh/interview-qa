import { ThemeProvider } from '@/components/theme-provider';
import { ModeToggle } from '@/components/mode-toggle';

import { Outlet } from 'react-router';

const Layout = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <main className="container-auto">
        <header className="border-b-primary flex h-16 w-full items-center justify-between gap-4 border-b-2">
          <h2>Enjoy your journey!</h2>
          <ModeToggle />
        </header>

        <section className="flex flex-col items-center gap-12 py-12">
          <Outlet />
        </section>
      </main>
    </ThemeProvider>
  );
};

export default Layout;
