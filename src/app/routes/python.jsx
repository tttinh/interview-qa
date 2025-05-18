import MainLayout from '@/components/layouts/main-layout';
import FAQ from '@/components/faq';
import { faq } from '@/assets/data';

const PythonRoute = () => {
  return (
    <MainLayout>
      <FAQ data={faq.python} />
    </MainLayout>
  );
};

export default PythonRoute;
