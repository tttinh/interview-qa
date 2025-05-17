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
import { NavLink } from 'react-router';

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
              Enjoy your journey. You chose this path. Pick a skill to start.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-center flex-col gap-4 sm:flex-row">
            {links.map((link, index) => (
              <NavLink key={index} to={link.href} end>
                <Button className="w-32">{link.label}</Button>
              </NavLink>
            ))}
          </CardContent>
        </Card>
      </section>
    </MainLayout>
  );
};

export default LandingRoute;
