import TitleCard from '@/components/title-card';
import QuestionTabs from '@/components/question-tabs';

const FAQ = ({ data }) => {
  return (
    <section className="flex flex-col items-center gap-12 py-12">
      <TitleCard />
      <QuestionTabs questions={data} />
    </section>
  );
};

export default FAQ;
