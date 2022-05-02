import { FC } from 'react';

import { feedback } from '../data/FeedbackData';

import { Card } from './shared/Card';

interface Props {
  item: feedback;
}

export const FeedbackItem: FC<Props> = ({ item }) => {
  return (
    <Card>
      <div className='num-display'>{item.rating}</div>
      <div className='text-display'>{item.text}</div>
    </Card>
  );
};
