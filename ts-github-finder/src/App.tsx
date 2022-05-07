import { FC } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Navbar } from './component/layout/Navbar';
import { Footer } from './component/layout/Footer';

export const App: FC = () => {
  return (
    <Router>
      <div className='flex flex-col justify-between h-screen'>
        <Navbar />
        <main>
          <h1 className='text-3xl font-bold underline'>HELLO WORLD!</h1>

          <Footer />
        </main>
      </div>
    </Router>
  );
};

export default App;
