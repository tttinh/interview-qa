import { questions } from '@/assets/data';
import { ThemeProvider } from '@/components/theme-provider';
import { ModeToggle } from '@/components/mode-toggle';
import QuestionButton from '@/components/question-button';
import QuestionCard from '@/components/question-card';
import TitleCard from './components/title-card';
import QuestionCarousel from './components/question-carousel';

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <main className="container-auto">
        <header className="border-b-primary flex h-16 w-full items-center justify-between gap-4 border-b-2">
          <ModeToggle />
          <QuestionButton questions={questions} />
        </header>

        <section className="flex-center flex-col gap-12 py-12">
          <TitleCard
            title="Interview Questions and Answers"
            description="That's a really interesting question and I wish I knew the answer. I don't. I can only guess. In my opinion, I think..."
          />
          <QuestionCard className="hidden md:block" questions={questions} />
          <QuestionCarousel className="md:hidden" questions={questions} />
        </section>
      </main>
    </ThemeProvider>
  );
};

export default App;
