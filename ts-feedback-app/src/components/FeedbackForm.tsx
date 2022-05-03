import { ChangeEvent, FC, useState } from 'react';
import { Card } from './shared/Card';
import { Button } from './shared/Button';

export const FeedbackForm: FC = () => {
  const [text, setText] = useState<string>('');

  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  return (
    <Card>
      <form>
        <h2>How would you rate your service with us?</h2>
        <div className='input-group'>
          <input
            type='text'
            placeholder='Write a review'
            onChange={(e) => handleTextChange(e)}
          />
          <Button type='submit'>Send</Button>
        </div>
      </form>
    </Card>
  );
};
