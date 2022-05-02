import { FC, useState } from 'react';

export const FeedbackItem: FC = () => {
  const [rating, setRating] = useState<number>(7);
  const [text, setText] = useState<string>(
    'This is an example of a feedback item & useState'
  );

  return (
    <div className='card'>
      <div className='num-display'>{rating}</div>
      <div className='text-display'>{text}</div>
    </div>
  );
};
