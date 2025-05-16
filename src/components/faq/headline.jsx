import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const Headline = () => {
  return (
    <Card className="w-full max-w-3xl">
      <CardHeader>
        <CardTitle className="text-center text-2xl sm:text-3xl md:text-4xl">
          We cannot answer every questions!
        </CardTitle>
        <CardDescription className="text-center sm:text-lg">
          That's a really interesting question and I wish I knew the answer. I
          don't. I can only guess. In my opinion, I think...
        </CardDescription>
      </CardHeader>
    </Card>
  );
};

export default Headline;
