import React, { FC } from 'react';
import './App.css';
import { Person } from './components/Person';

const App: FC = () => {
  return (
    <div className='App'>
      <Person name='joe' age={69} email='joe@gmail.com' />
    </div>
  );
};

export default App;
