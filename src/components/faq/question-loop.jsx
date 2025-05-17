import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  ArrowBigLeft,
  ArrowBigRight,
  Package,
  PackageOpen,
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const QuestionLoop = ({ questions }) => {
  const [id, setID] = useState(0);
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

  const handleNext = () => {
    if (!showAnswer) {
      setID((prev) => {
        if (prev === questions.length - 1) {
          return 0;
        }

        return prev + 1;
      });
      return;
    }

    handleShowHideAnswer(false);
    // Clear any existing timeout if data changes again mid-animation
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    timeoutRef.current = setTimeout(() => {
      setID((prev) => {
        if (prev === questions.length - 1) {
          return 0;
        }

        return prev + 1;
      });
    }, 400);
  };

  const handlePrevious = () => {
    if (!showAnswer) {
      setID((prev) => {
        if (prev === 0) {
          return questions.length - 1;
        }

        return prev - 1;
      });
      return;
    }

    handleShowHideAnswer(false);
    // Clear any existing timeout if data changes again mid-animation
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    timeoutRef.current = setTimeout(() => {
      setID((prev) => {
        if (prev === 0) {
          return questions.length - 1;
        }

        return prev - 1;
      });
    }, 400);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm sm:text-lg md:text-xl">
          {questions[id].question}{' '}
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
          <Button onClick={handlePrevious} className="w-32">
            Previous
          </Button>
          <Button
            onClick={() => handleShowHideAnswer(!showAnswer)}
            className="w-32"
          >
            {showAnswer ? 'Hide answer' : 'Show answer'}
          </Button>
          <Button onClick={handleNext} className="w-32">
            Next
          </Button>
        </div>

        <div className="flex w-full justify-center gap-4 sm:hidden">
          <Button onClick={handlePrevious}>
            <ArrowBigLeft />
          </Button>
          <Button onClick={() => handleShowHideAnswer(!showAnswer)}>
            {showAnswer ? <PackageOpen /> : <Package />}
          </Button>
          <Button onClick={handleNext}>
            <ArrowBigRight />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default QuestionLoop;
