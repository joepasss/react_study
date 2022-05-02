import { FC } from 'react';

import { Header } from './components/Header';
import { FeedbackItem } from './components/FeedbackItem';

export const App: FC = () => {
  return (
    <>
      <Header />
      <div className='container'>
        <FeedbackItem />
      </div>
    </>
  );
};
