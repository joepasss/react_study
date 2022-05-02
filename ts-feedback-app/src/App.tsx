import { FC } from 'react';

import { Header } from './components/Header';

export const App: FC = () => {
  return (
    <>
      <div className='container'>
        <Header />
        <h1>My App</h1>
      </div>
    </>
  );
};
