import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { useState } from 'react';

import AboutPage from './pages/AboutPage';

import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutIconLink from './components/AboutIconLink';

import { FeedbackProvider } from './context/FeedbackContext';
import FeedbackData from './data/FeedbackData';

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete?'))
      setFeedback(feedback.filter((item) => item.id !== id));
  };

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  return (
    <FeedbackProvider>
      <BrowserRouter>
        <Header />
        <div className='container'>
          <Routes>
            <Route
              exact
              path='/'
              element={
                <>
                  <FeedbackForm handleAdd={addFeedback} />
                  <FeedbackStats />
                  <FeedbackList handleDelete={deleteFeedback} />
                  <AboutIconLink />
                </>
              }
            />
            <Route path='/about' element={<AboutPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </FeedbackProvider>
  );
}

export default App;
