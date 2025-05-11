import { ThemeProvider } from '@/components/theme-provider';
import { ModeToggle } from '@/components/mode-toggle';
import TitleCard from './components/title-card';
import QuestionCard from './components/question-card';

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <main className="container-auto">
        <header className="border-b-primary flex h-16 w-full items-center justify-between gap-4 border-b-2">
          <ModeToggle />
        </header>

        <section className="flex flex-col items-center gap-12 py-12">
          <TitleCard />
          <QuestionCard />
        </section>
      </main>
    </ThemeProvider>
  );
};

export default App;
