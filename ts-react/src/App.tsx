import React, { FC } from 'react';
import './App.css';
import { Person, HairColor } from './components/Person';

const App: FC = () => {
  return (
    <div className='App'>
      <Person
        name='joe'
        age={69}
        email='joe@gmail.com'
        hairColor={HairColor.Blonde}
      />
    </div>
  );
};

export default App;
