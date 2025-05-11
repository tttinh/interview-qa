import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';

const TitleCard = ({ title, description }) => {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <h1 className="outline-primary rounded-md px-8 py-12 text-3xl font-bold outline hover:outline-4 sm:text-4xl">
          {title}
        </h1>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>ME</AvatarFallback>
          </Avatar>
          <p>{description}</p>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

export default TitleCard;
