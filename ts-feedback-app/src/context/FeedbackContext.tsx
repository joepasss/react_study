import { createContext, useState, FC, ReactNode } from 'react';
import { v4 as uuidv4 } from 'uuid';
import FeedbackData from '../data/feedbackData';

interface Props {
  children: ReactNode;
}

export interface feedback {
  id: string;
  rating: number;
  text: string;
}

export interface newFeedback {
  rating: number;
  text: string;
}

export interface feedbacks extends Array<feedback> {}

const FeedbackContext = createContext<any | undefined>(undefined);

export const FeedbackProvider: FC<Props> = ({ children }) => {
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
    <FeedbackContext.Provider value={{ feedback, deleteFeedback, addFeedback }}>
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
