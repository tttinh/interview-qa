import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { DicesIcon, Package, PackageOpen } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const QuestionShuffle = ({ questions }) => {
  const [id, setID] = useState(Math.floor(Math.random() * questions.length));
  const [showAnswer, setShowAnswer] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    // Cleanup previous timeout on re-render or unmount
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []); // Empty dependency array for cleanup on unmount

  const handleRandomQuestion = () => {
    if (!showAnswer) {
      setID(Math.floor(Math.random() * questions.length));
      return;
    }

    handleShowHideAnswer(false);
    // Clear any existing timeout if data changes again mid-animation
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    timeoutRef.current = setTimeout(() => {
      setID(Math.floor(Math.random() * questions.length));
    }, 400);
  };

  const handleShowHideAnswer = (isShow) => {
    const content = document.getElementById('answer');
    // Toggle the content's max-height for smooth opening and closing
    if (isShow) {
      content.style.maxHeight = content.scrollHeight + 'px';
    } else {
      content.style.maxHeight = '0';
    }
    setShowAnswer(isShow);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm sm:text-lg md:text-xl">
          {questions[id].question}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div
          id="answer"
          className="max-h-0 overflow-hidden transition-all duration-300 ease-in-out"
        >
          <p className="text-primary/65 text-sm sm:text-lg">
            {questions[id].answer}
          </p>
        </div>
      </CardContent>
      <CardFooter>
        <div className="hidden w-full justify-center gap-4 sm:flex">
          <Button
            onClick={() => handleShowHideAnswer(!showAnswer)}
            className="w-32"
          >
            {showAnswer ? 'Hide answer' : 'Show answer'}
          </Button>
          <Button onClick={handleRandomQuestion} className="w-32">
            Another question
          </Button>
        </div>

        <div className="flex w-full justify-center gap-4 sm:hidden">
          <Button onClick={() => handleShowHideAnswer(!showAnswer)}>
            {showAnswer ? <PackageOpen /> : <Package />}
          </Button>
          <Button onClick={handleRandomQuestion}>
            <DicesIcon />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default QuestionShuffle;
