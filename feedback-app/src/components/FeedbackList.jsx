import { useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import FeedbackContext from '../context/FeedbackContext';

import FeedbackItem from './FeedbackItem';

function FeedbackList() {
  const { feedback } = useContext(FeedbackContext);

  return (
    <div className='feedback-list'>
      <AnimatePresence>
        {feedback.map((item) => {
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <FeedbackItem key={item.id} item={item} />
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}

export default FeedbackList;
