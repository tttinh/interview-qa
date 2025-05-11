import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { questions } from '@/assets/data';
import { useState } from 'react';
import { Package, PackageOpen } from 'lucide-react';

const QuestionLoop = () => {
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

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg sm:text-xl">
          {questions[id].question}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-4 py-8">
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="border-primary flex h-24 w-24 cursor-pointer items-center justify-center rounded-full border transition-transform duration-300 hover:scale-110"
        >
          {isOpen ? <PackageOpen size={48} /> : <Package size={48} />}
        </div>

        <p
          className={`text-primary/65 text-sm sm:text-lg ${isOpen ? 'block' : 'hidden'}`}
        >
          {questions[id].answer}
        </p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button onClick={handlePrevious} className="w-1/3 sm:w-32">
          Previous
        </Button>
        <Button onClick={handleNext} className="w-1/3 sm:w-32">
          Next
        </Button>
      </CardFooter>
    </Card>
  );
};

export default QuestionLoop;
