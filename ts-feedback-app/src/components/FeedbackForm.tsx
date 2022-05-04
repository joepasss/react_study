import { ChangeEvent, FC, useState } from 'react';
import { Card } from './shared/Card';
import { Button } from './shared/Button';
import { RatingSelect } from './RatingSelect';

export const FeedbackForm: FC = () => {
  const [text, setText] = useState<string>('');
  const [btnDisabled, setBtnDisabled] = useState<boolean>(true);
  const [message, setMessage] = useState<string | null>('');
  const [rating, setRating] = useState<number>(10);

  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (text === '') {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== '' && text.trim().length <= 10) {
      setBtnDisabled(true);
      setMessage('Text must be at least 10 characters');
    } else {
      setBtnDisabled(false);
      setMessage(null);
    }

    setText(e.target.value);
  };

  return (
    <Card>
      <form>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect setRating={setRating} />
        <div className='input-group'>
          <input
            type='text'
            placeholder='Write a review'
            onChange={(e) => handleTextChange(e)}
            value={text}
          />
          <Button type='submit' isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  );
};
