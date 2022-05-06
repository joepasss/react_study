import { createContext, useState, FC, ReactNode } from 'react';
import { v4 as uuidv4 } from 'uuid';
import FeedbackData from '../data/FeedbackData';

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
  const [feedbackEdit, setFeedbackEdit] = useState<{
    item: feedback;
    edit: boolean;
  }>({
    item: { id: '', text: '', rating: 10 },
    edit: false,
  });
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

  const editFeedback = (item: feedback) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  const updateItem = (id: string, updItem: feedback) => {
    setFeedback(
      feedback.map((item: feedback) =>
        item.id === id ? { ...item, ...updItem } : item
      )
    );

    setFeedbackEdit({
      item: { id: '', rating: 10, text: '' },
      edit: false,
    });
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateItem,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
