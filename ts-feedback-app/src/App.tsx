import { FC, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { newFeedback, FeedbackData, feedbacks } from './data/FeedbackData';

import { Header } from './components/Header';
import { FeedbackList } from './components/FeedbackList';
import { FeedbackStats } from './components/FeedbackStats';
import { FeedbackForm } from './components/FeedbackForm';

export const App: FC = () => {
  const [feedback, setFeedback] = useState<feedbacks>(FeedbackData);

  const deleteFeedback = (id: string) => {
    const newFeedback = feedback.filter((item) => item.id !== id);

    setFeedback(newFeedback);
  };

  const addFeedback = (newFeedback: newFeedback) => {
    const data = {
      id: uuidv4(),
      text: newFeedback.text,
      rating: newFeedback.rating,
    };

    setFeedback([data, ...feedback]);
  };

  return (
    <>
      <Header />
      <div className='container'>
        <FeedbackForm handleAdd={addFeedback} />
        <FeedbackStats feedbacks={feedback} />
        <FeedbackList feedbacks={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  );
};
