import MainLayout from '@/components/layouts/main-layout';
import FAQ from '@/components/faq';
import { faq } from '@/assets/data';

const GolangRoute = () => {
  return (
    <MainLayout>
      <FAQ data={faq.golang} />
    </MainLayout>
  );
};

export default GolangRoute;
