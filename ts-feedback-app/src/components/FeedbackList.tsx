import { ChangeEvent, FC } from 'react';

import { feedbacks, feedback } from '../data/FeedbackData';
import { FeedbackItem } from './FeedbackItem';

interface Props {
  feedbacks: feedbacks;
  handleDelete: (id: string) => void;
}

export const FeedbackList: FC<Props> = ({ feedbacks, handleDelete }) => {
  return (
    <div className='feedback-list'>
      {feedbacks.map((item: feedback) => {
        return (
          <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
        );
      })}
    </div>
  );
};
