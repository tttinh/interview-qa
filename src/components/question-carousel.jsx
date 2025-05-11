import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { useEffect, useState } from 'react';
import QuestionCard from './question-card';
import { cn } from '@/lib/utils';

const QUESTIONS_PER_CARD = 5;

const QuestionCarousel = ({ className, questions }) => {
  const pageCount = Math.ceil(questions.length / QUESTIONS_PER_CARD);
  const [api, setApi] = useState(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className={cn('w-11/12 max-w-5xl', className)}>
      <Carousel setApi={setApi}>
        <CarouselContent>
          {[...Array(pageCount)].map((_, index) => {
            const start = index * QUESTIONS_PER_CARD;
            const end = start + QUESTIONS_PER_CARD;
            return (
              <CarouselItem key={index} className="flex items-center">
                <QuestionCard questions={questions.slice(start, end)} />
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="text-muted-foreground py-2 text-center text-sm">
        Slide {current} of {pageCount}
      </div>
    </div>
  );
};

export default QuestionCarousel;
