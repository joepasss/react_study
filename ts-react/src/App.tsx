import React, { FC, createContext } from 'react';
import './App.css';
import { Person, HairColor } from './components/Person';

interface AppContextInterface {
  name: string;
  age: number;
  country: string;
}

const AppContext = createContext<AppContextInterface | null>(null);

const App: FC = () => {
  const contextValue: AppContextInterface = {
    name: 'JOE',
    age: 69,
    country: 'josun',
  };

  return (
    <AppContext.Provider value={contextValue}>
      <div className='App'>
        <Person
          name='joe'
          age={69}
          email='joe@gmail.com'
          hairColor={HairColor.Blonde}
        />
      </div>
    </AppContext.Provider>
  );
};

export default App;
