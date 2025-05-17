import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const PAGE_SIZE = 10;
const QuestionList = ({ questions }) => {
  const [visibleItemNumber, setVisibleItemNumber] = useState(
    PAGE_SIZE <= questions.length ? PAGE_SIZE : questions.length,
  );

  const handleMore = () => {
    setVisibleItemNumber((prev) => {
      if (prev + PAGE_SIZE > questions.length) {
        return questions.length;
      }

      return prev + 10;
    });
  };

  return (
    <div className="flex-center flex-col gap-8">
      <Accordion type="single" collapsible className="w-full">
        {Array.from({ length: visibleItemNumber }).map((_, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="cursor-pointer text-lg sm:text-xl">
              {questions[index].question}
            </AccordionTrigger>
            <AccordionContent className="text-primary/65 text-sm sm:text-lg">
              {questions[index].answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      {visibleItemNumber < questions.length && (
        <Button onClick={handleMore} className="w-full sm:w-32">
          More
        </Button>
      )}
    </div>
  );
};

export default QuestionList;
