import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { useState } from 'react';

const QuestionLoop = ({ questions }) => {
  const [id, setID] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const handleNext = () => {
    setIsOpen(false);
    setID((prev) => {
      if (prev === questions.length - 1) {
        return 0;
      }

      return prev + 1;
    });
  };

  const handlePrevious = () => {
    setIsOpen(false);
    setID((prev) => {
      if (prev === 0) {
        return questions.length - 1;
      }

      return prev - 1;
    });
  };

  const handleShowHideAnswer = () => {
    setIsOpen(!isOpen);
    const content = document.getElementById('answer');
    // Toggle the content's max-height for smooth opening and closing
    if (content.style.maxHeight && content.style.maxHeight !== '0px') {
      content.style.maxHeight = '0';
    } else {
      content.style.maxHeight = content.scrollHeight + 'px';
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg sm:text-xl">
          {questions[id].question}{' '}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div
          id="answer"
          class="max-h-0 overflow-hidden transition-all duration-300 ease-in-out"
        >
          <p class="text-primary/65 text-sm sm:text-lg">
            {questions[id].answer}
          </p>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between gap-2 md:justify-center">
        <Button onClick={handlePrevious} className="w-1/3 sm:w-32">
          Previous
        </Button>
        <Button onClick={handleShowHideAnswer} className="w-1/3 sm:w-32">
          {isOpen ? 'Hide answer' : 'Show answer'}
        </Button>
        <Button onClick={handleNext} className="w-1/3 sm:w-32">
          Next
        </Button>
      </CardFooter>
    </Card>
  );
};

export default QuestionLoop;
