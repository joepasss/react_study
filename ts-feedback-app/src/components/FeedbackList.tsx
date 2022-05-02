import { FC } from 'react';

import { feedbacks, feedback } from '../data/FeedbackData';
import { FeedbackItem } from './FeedbackItem';

interface Props {
  feedbacks: feedbacks;
}

export const FeedbackList: FC<Props> = ({ feedbacks }) => {
  return (
    <div className='feedback-list'>
      {feedbacks.map((item: feedback) => {
        return <FeedbackItem key={item.id} item={item} />;
      })}
    </div>
  );
};
