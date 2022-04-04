import { createContext, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

// import FeedbackData from '../data/FeedbackData';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  // hard coded data from ui
  // const [feedback, setFeedback] = useState(FeedbackData);

  const [isLoading, setIsLoading] = useState(true);

  // fetch data from json-server
  const [feedback, setFeedback] = useState([]);
  useEffect(() => {
    fetchFeedback();
  });

  const fetchFeedback = async () => {
    const response = await fetch(`/feedback?_sort=id&_order=desc`);

    const data = await response.json();

    setFeedback(data);
    setIsLoading(false);
  };

  const [feedbackEdit, setFeedbackEdit] = useState({ item: {}, edit: false });

  // delete Feedback
  const deleteFeedback = async (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      await fetch(`/feedback/${id}`, { method: 'DELETE' });

      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  // add Feedback
  const addFeedback = async (newFeedback) => {
    const response = await fetch('/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newFeedback),
    });

    const data = await response.json();

    setFeedback([data, ...feedback]);
  };

  // Set item to be update
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  // update feedback item
  const updateFeedback = async (id, updItem) => {
    const response = await fetch(`/feedback/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updItem),
    });

    const data = await response.json();

    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...data } : item))
    );
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        isLoading,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
