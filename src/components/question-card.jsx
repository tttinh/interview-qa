import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import QuestionList from '@/components/question-list';

const tabs = [
  {
    id: 'all',
    label: 'All',
    component: <QuestionList />,
  },
  {
    id: 'loop',
    label: 'Loop',
    component: <QuestionList />,
  },
  {
    id: 'shuffle',
    label: 'Shuffle',
    component: <QuestionList />,
  },
];
const QuestionCard = () => {
  return (
    <Card>
      <CardContent>
        <Tabs defaultValue={tabs[0].id} className="w-full max-w-3xl">
          <TabsList className="flex w-full">
            {tabs.map((tab, index) => (
              <TabsTrigger key={index} value={tab.id}>
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {tabs.map((tab, index) => (
            <TabsContent key={index} value={tab.id}>
              {tab.component}
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default QuestionCard;
