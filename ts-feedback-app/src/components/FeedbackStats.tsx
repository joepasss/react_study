import { FC, useContext } from 'react';
import FeedbackContext, { feedback } from '../context/FeedbackContext';

export const FeedbackStats: FC = () => {
  const { feedback } = useContext(FeedbackContext);

  let average: number | string =
    feedback.reduce((acc: number, cur: feedback) => {
      return acc + cur.rating;
    }, 0) / feedback.length;

  average = average.toFixed(1);

  return (
    <div className='feedback-stats'>
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {average === 'NaN' ? 0 : average}</h4>
    </div>
  );
};
