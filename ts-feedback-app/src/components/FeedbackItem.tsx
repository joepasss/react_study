import { FC } from 'react';
import { FaTimes } from 'react-icons/fa';

import { feedback } from '../data/FeedbackData';

import { Card } from './shared/Card';

interface Props {
  item: feedback;
  handleDelete: (id: string) => void;
}

export const FeedbackItem: FC<Props> = ({ item, handleDelete }) => {
  return (
    <Card>
      <div className='num-display'>{item.rating}</div>
      <button onClick={() => handleDelete(item.id)} className='close'>
        <FaTimes color='purple' />
      </button>
      <div className='text-display'>{item.text}</div>
    </Card>
  );
};
