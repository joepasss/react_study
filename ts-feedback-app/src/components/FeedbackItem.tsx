import { FC, useContext } from 'react';
import FeedbackContext, { feedback } from '../context/FeedbackContext';

import { FaTimes } from 'react-icons/fa';

import { Card } from './shared/Card';

interface Props {
  item: feedback;
}

export const FeedbackItem: FC<Props> = ({ item }) => {
  const { deleteFeedback } = useContext(FeedbackContext);

  return (
    <Card>
      <div className='num-display'>{item.rating}</div>
      <button onClick={() => deleteFeedback(item.id)} className='close'>
        <FaTimes color='purple' />
      </button>
      <div className='text-display'>{item.text}</div>
    </Card>
  );
};
