import MainLayout from '@/components/layouts/main-layout';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Link } from 'react-router';

const NotFoundRoute = () => {
  return (
    <MainLayout>
      <section className="flex flex-col items-center gap-12 py-12">
        <Card className="w-full max-w-3xl">
          <CardHeader>
            <CardTitle className="text-center text-2xl sm:text-3xl md:text-4xl">
              404 - Page Not Found
            </CardTitle>
            <CardDescription className="text-center sm:text-lg">
              Sorry, the page you are looking for does not exist.
            </CardDescription>
          </CardHeader>
          <CardFooter className="flex flex-col items-center">
            <Button className="w-full max-w-3xs">
              <Link to="/interview-qa">Back to Home</Link>
            </Button>
          </CardFooter>
        </Card>
      </section>
    </MainLayout>
  );
};

export default NotFoundRoute;
