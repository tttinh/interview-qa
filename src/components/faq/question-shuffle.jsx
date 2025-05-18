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
import { Checkbox } from '@/components/ui/checkbox';

const QuestionShuffle = ({ questions }) => {
  const [id, setID] = useState(Math.floor(Math.random() * questions.length));
  const [isAlwaysShowAnswer, setIsAlwaysShowAnswer] = useState(false);
  const [isShowAnswer, setIsShowAnswer] = useState(false);
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
    if (isAlwaysShowAnswer || !isShowAnswer) {
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
    setIsShowAnswer(isShow);
  };

  const handleCheckbox = () => {
    setIsAlwaysShowAnswer(!isAlwaysShowAnswer);
    handleShowHideAnswer(!isAlwaysShowAnswer);
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center space-x-2">
          <Checkbox
            checked={isAlwaysShowAnswer}
            onCheckedChange={handleCheckbox}
            id="showAnswerCheckbox"
          />
          <label
            htmlFor="showAnswerCheckbox"
            className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Always show answers
          </label>
        </div>
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
            disabled={isAlwaysShowAnswer}
            onClick={() => handleShowHideAnswer(!isShowAnswer)}
            className="w-32"
          >
            {isShowAnswer ? 'Hide answer' : 'Show answer'}
          </Button>
          <Button onClick={handleRandomQuestion} className="w-32">
            Another question
          </Button>
        </div>

        <div className="flex w-full justify-center gap-4 sm:hidden">
          <Button
            disabled={isAlwaysShowAnswer}
            onClick={() => handleShowHideAnswer(!isShowAnswer)}
          >
            {isShowAnswer ? <PackageOpen /> : <Package />}
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
