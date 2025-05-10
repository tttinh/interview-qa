import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
  DialogClose,
} from '@/components/ui/dialog';
import { useState } from 'react';

export function RandomQuestion({ items }) {
  const [id, setID] = useState(0);

  const handleClick = () => {
    setID(Math.floor(Math.random() * items.length));
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button onClick={handleClick}>Random Question</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-2xl">
        <div className="flex min-h-[320px] flex-col gap-4 py-8">
          <h1 className="text-2xl">{items[id].question}</h1>
          <p className="text-lg">{items[id].answer}</p>
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
}
