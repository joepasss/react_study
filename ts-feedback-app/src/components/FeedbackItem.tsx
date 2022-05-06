import { FC, useContext } from 'react';
import FeedbackContext, { feedback } from '../context/FeedbackContext';

import { FaTimes, FaEdit } from 'react-icons/fa';

import { Card } from './shared/Card';

interface Props {
  item: feedback;
}

export const FeedbackItem: FC<Props> = ({ item }) => {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);

  return (
    <Card>
      <div className='num-display'>{item.rating}</div>
      <button onClick={() => deleteFeedback(item.id)} className='close'>
        <FaTimes color='purple' />
      </button>
      <button className='edit' onClick={() => editFeedback(item)}>
        <FaEdit color='purple' />
      </button>
      <div className='text-display'>{item.text}</div>
    </Card>
  );
};
