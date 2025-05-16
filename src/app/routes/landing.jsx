import MainLayout from '@/components/layouts/main-layout';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { links } from '@/assets/data';
import { Link } from 'react-router';

const LandingRoute = () => {
  return (
    <MainLayout>
      <section className="flex flex-col items-center gap-12 py-12">
        <Card className="w-full max-w-3xl">
          <CardHeader>
            <CardTitle className="text-center text-2xl sm:text-3xl md:text-4xl">
              Interview Questions and Answers
            </CardTitle>
            <CardDescription className="text-center sm:text-lg">
              Please pick a skill to start practicing.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center gap-4">
            {links.map((link, index) => (
              <Button className="w-32" key={index}>
                <Link to={link.href}>{link.label}</Link>
              </Button>
            ))}
          </CardContent>
        </Card>
      </section>
    </MainLayout>
  );
};

export default LandingRoute;
