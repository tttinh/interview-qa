import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { cn } from '@/lib/utils';
import { questions } from '@/assets/data';

const QuestionList = ({ className }) => {
  return (
    <>
      <Accordion type="single" collapsible className={cn('w-full', className)}>
        {questions.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="cursor-pointer text-lg sm:text-xl">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-primary/65 text-sm sm:text-lg">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default QuestionList;
