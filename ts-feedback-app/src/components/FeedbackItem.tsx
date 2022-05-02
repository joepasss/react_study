import { FC } from 'react';

import { feedback } from '../data/FeedbackData';

interface Props {
  item: feedback;
}

export const FeedbackItem: FC<Props> = ({ item }) => {
  return (
    <div className='card'>
      <div className='num-display'>{item.rating}</div>
      <div className='text-display'>{item.text}</div>
    </div>
  );
};
