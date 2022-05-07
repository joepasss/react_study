import { FC } from 'react';

const spinner = require('./assets/spinner.gif');

export const Spinner: FC = () => {
  return (
    <div className='w-100 mt-20'>
      <img
        src={spinner}
        alt='loading ...'
        width={100}
        className='text-center, mx-auto'
      />
    </div>
  );
};
