import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { useState } from 'react';

const QuestionShuffle = ({ questions }) => {
  const [id, setID] = useState(Math.floor(Math.random() * questions.length));
  const [isOpen, setIsOpen] = useState(false);

  const handleRandom = () => {
    setIsOpen(false);
    setID(Math.floor(Math.random() * questions.length));
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
          {questions[id].question}
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
        <Button onClick={handleShowHideAnswer} className="w-1/2 sm:w-32">
          {isOpen ? 'Hide answer' : 'Show answer'}
        </Button>
        <Button onClick={handleRandom} className="w-1/2 sm:w-32">
          Another question
        </Button>
      </CardFooter>
    </Card>
  );
};

export default QuestionShuffle;
