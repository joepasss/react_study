import { FC, useState } from 'react';

import { FeedbackData, feedbacks } from './data/FeedbackData';

import { Header } from './components/Header';
import { FeedbackList } from './components/FeedbackList';

export const App: FC = () => {
  const [feedback, setFeedback] = useState<feedbacks>(FeedbackData);

  return (
    <>
      <Header />
      <div className='container'>
        <FeedbackList feedbacks={feedback} />
      </div>
    </>
  );
};
