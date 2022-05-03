import { FC } from 'react';
import { feedbacks } from '../data/FeedbackData';

interface Props {
  feedbacks: feedbacks;
}

export const FeedbackStats: FC<Props> = ({ feedbacks }) => {
  let average: number | string =
    feedbacks.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedbacks.length;

  average = average.toFixed(1);

  return (
    <div className='feedback-stats'>
      <h4>{feedbacks.length} Reviews</h4>
      <h4>Average Rating: {average === 'NaN' ? 0 : average}</h4>
    </div>
  );
};
