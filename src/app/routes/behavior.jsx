import MainLayout from '@/components/layouts/main-layout';
import FAQ from '@/components/faq';
import { faq } from '@/assets/data';

const BehaviorRoute = () => {
  return (
    <MainLayout>
      <FAQ data={faq.behavior} />
    </MainLayout>
  );
};

export default BehaviorRoute;
