import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { useState } from 'react';
import { Package, PackageOpen } from 'lucide-react';

const QuestionShuffle = ({ questions }) => {
  const [id, setID] = useState(Math.floor(Math.random() * questions.length));
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(false);
    setID(Math.floor(Math.random() * questions.length));
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
      <CardFooter>
        <Button onClick={handleClick} className="mx-auto w-full sm:w-32">
          Next
        </Button>
      </CardFooter>
    </Card>
  );
};

export default QuestionShuffle;
