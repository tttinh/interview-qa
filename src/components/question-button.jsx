import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
  DialogClose,
} from '@/components/ui/dialog';
import { Shuffle } from 'lucide-react';
import { useState } from 'react';

const QuestionButton = ({ questions }) => {
  const [id, setID] = useState(0);

  const handleClick = () => {
    setID(Math.floor(Math.random() * questions.length));
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button onClick={handleClick}>
          Random Question <Shuffle />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-2xl">
        <div className="flex min-h-[320px] flex-col gap-4 py-8">
          <h1 className="text-lg sm:text-xl">{questions[id].question}</h1>
          <p className="text-primary/65 text-sm sm:text-lg">
            {questions[id].answer}
          </p>
        </div>
        <DialogFooter>
          <Button onClick={handleClick}>Another Question</Button>
          <DialogClose asChild>
            <Button variant="secondary">Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default QuestionButton;
