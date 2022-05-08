import { FC } from 'react';
import { UserContextProvider } from './components/context/UserContext';

import { User } from './components/context/User';

export const App: FC = () => {
  return (
    <div className='App'>
      <UserContextProvider>
        <User />
      </UserContextProvider>
    </div>
  );
};
