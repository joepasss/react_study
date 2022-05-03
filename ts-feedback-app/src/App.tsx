import { FC, useState } from 'react';

import { FeedbackData, feedbacks } from './data/FeedbackData';

import { Header } from './components/Header';
import { FeedbackList } from './components/FeedbackList';
import { FeedbackStats } from './components/FeedbackStats';

export const App: FC = () => {
  const [feedback, setFeedback] = useState<feedbacks>(FeedbackData);

  const deleteFeedback = (id: string) => {
    const newFeedback = feedback.filter((item) => item.id !== id);

    setFeedback(newFeedback);
  };

  return (
    <>
      <Header />
      <div className='container'>
        <FeedbackStats feedbacks={feedback} />
        <FeedbackList feedbacks={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  );
};
