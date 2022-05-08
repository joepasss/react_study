import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

export const Box = () => {
  const theme = useContext(ThemeContext);

  return (
    <>
      <div
        className='container mb-2'
        style={{
          backgroundColor: theme.primary.main,
          color: theme.primary.text,
        }}
      >
        Primary Theme Context
      </div>

      <div
        className='container'
        style={{
          backgroundColor: theme.secondary.main,
          color: theme.secondary.text,
        }}
      >
        Secondary Theme Context
      </div>
    </>
  );
};
