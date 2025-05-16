import TitleCard from '@/components/title-card';
import QuestionTabs from '@/components/question-tabs';
import behaviour from '@/assets/behaviour';

const BehaviourPage = () => {
  return (
    <section className="flex flex-col items-center gap-12 py-12">
      <TitleCard />
      <QuestionTabs questions={behaviour} />
    </section>
  );
};

export default BehaviourPage;
