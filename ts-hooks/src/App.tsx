import { FC } from 'react';
import { ThemeContextProvider } from './components/context/ThemeContext';

import { Box } from './components/context/Box';

export const App: FC = () => {
  return (
    <div className='App'>
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
    </div>
  );
};
