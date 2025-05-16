import Headline from '@/components/faq/headline';
import QuestionTabs from '@/components/faq/question-tabs';

const FAQ = ({ data }) => {
  return (
    <section className="flex flex-col items-center gap-12 py-12">
      <Headline />
      <QuestionTabs questions={data} />
    </section>
  );
};

export default FAQ;
