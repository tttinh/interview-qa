import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const QuestionCard = ({ questions }) => {
  return (
    <>
      <Accordion type="single" collapsible className="w-full max-w-5xl">
        {questions.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="cursor-pointer text-lg sm:text-xl">
              {`${index + 1}. ${item.question}`}
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

export default QuestionCard;
