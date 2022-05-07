import { FC } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Pages
import { Home } from './pages/Home';
import { About } from './pages/About';
import { NotFound } from './pages/NotFound';

// Components
import { Navbar } from './component/layout/Navbar';
import { Footer } from './component/layout/Footer';

export const App: FC = () => {
  return (
    <Router>
      <div className='flex flex-col justify-between h-screen'>
        <Navbar />
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/notfound' element={<NotFound />} />
            <Route path='/*' element={<NotFound />} />
          </Routes>

          <Footer />
        </main>
      </div>
    </Router>
  );
};

export default App;
