import TitleCard from '@/components/title-card';
import QuestionTabs from '@/components/question-tabs';
import behaviour from '@/assets/behaviour';

const BehaviourPage = () => {
  return (
    <>
      <TitleCard />
      <QuestionTabs questions={behaviour} />
    </>
  );
};

export default BehaviourPage;
