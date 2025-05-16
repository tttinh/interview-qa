import TitleCard from '@/components/faq/title-card';
import QuestionTabs from '@/components/faq/question-tabs';

const FAQPage = ({ data }) => {
  return (
    <section className="flex flex-col items-center gap-12 py-12">
      <TitleCard />
      <QuestionTabs questions={data} />
    </section>
  );
};

export default FAQPage;
