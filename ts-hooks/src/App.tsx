import { FC } from 'react';

import { Counter } from './components/state/Counter';

export const App: FC = () => {
  return (
    <div className='App'>
      <Counter />
    </div>
  );
};
