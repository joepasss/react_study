import { FC } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import {
  FeedbackProvider,
  feedback,
  feedbacks,
  newFeedback,
} from './context/FeedbackContext';

import { Header } from './components/Header';
import { FeedbackList } from './components/FeedbackList';
import { FeedbackStats } from './components/FeedbackStats';
import { FeedbackForm } from './components/FeedbackForm';
import { AboutIconLink } from './components/AboutIconLink';
import { AboutPage } from './pages/AboutPage';

export const App: FC = () => {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className='container'>
          <Routes>
            <Route
              path='/'
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                  <AboutIconLink />
                </>
              }
            />
            <Route path='/about' element={<AboutPage />} />
          </Routes>
        </div>
      </Router>
    </FeedbackProvider>
  );
};
