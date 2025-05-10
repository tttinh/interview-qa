import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

import { questions } from '@/assets/data';
import { ThemeProvider } from '@/components/theme-provider';
import { ModeToggle } from '@/components/mode-toggle';
import { RandomQuestion } from './components/random-question';

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <main className="container-auto">
        <header className="flex h-16 w-full justify-end gap-4">
          <RandomQuestion items={questions} />
          <ModeToggle />
        </header>

        <section className="flex-center flex-col">
          <h1 className="py-12 text-5xl font-bold">
            Interview Questions and Answers
          </h1>
          <Accordion type="single" collapsible className="w-full max-w-3xl">
            {questions.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="cursor-pointer text-2xl">
                  {`${index + 1}. ${item.question}`}
                </AccordionTrigger>
                <AccordionContent className="text-lg">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      </main>
    </ThemeProvider>
  );
};

export default App;
