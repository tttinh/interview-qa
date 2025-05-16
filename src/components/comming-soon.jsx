import { Card, CardHeader, CardTitle } from '@/components/ui/card';

const CommingSoon = () => {
  return (
    <section className="flex flex-col items-center gap-12 py-12">
      <Card className="w-full max-w-3xl">
        <CardHeader>
          <CardTitle className="text-center text-2xl sm:text-3xl md:text-4xl">
            Comming Soon...
          </CardTitle>
        </CardHeader>
      </Card>
    </section>
  );
};

export default CommingSoon;
