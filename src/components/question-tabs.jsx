import { List, Repeat, Shuffle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import QuestionList from '@/components/question-list';
import QuestionLoop from '@/components/question-loop';
import QuestionShuffle from './question-shuffle';
import { cloneElement } from 'react';

const tabs = [
  {
    id: 'all',
    label: 'All',
    icon: <List />,
    component: <QuestionList />,
  },
  {
    id: 'loop',
    label: 'Loop',
    icon: <Repeat />,
    component: <QuestionLoop />,
  },
  {
    id: 'shuffle',
    label: 'Shuffle',
    icon: <Shuffle />,
    component: <QuestionShuffle />,
  },
];
const QuestionTabs = ({ questions }) => {
  return (
    <Card className="w-full max-w-5xl">
      <CardContent>
        <Tabs defaultValue={tabs[0].id}>
          <TabsList className="flex w-full">
            {tabs.map((tab, index) => (
              <TabsTrigger key={index} value={tab.id}>
                {tab.label}
                {tab.icon}
              </TabsTrigger>
            ))}
          </TabsList>

          {tabs.map((tab, index) => (
            <TabsContent key={index} value={tab.id}>
              {cloneElement(tab.component, { questions })}
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default QuestionTabs;
