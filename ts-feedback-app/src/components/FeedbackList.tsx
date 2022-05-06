import { FC, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import FeedbackContext, { feedback } from '../context/FeedbackContext';
import { FeedbackItem } from './FeedbackItem';

export const FeedbackList: FC = () => {
  const { feedback } = useContext(FeedbackContext);

  return (
    <div className='feedback-list'>
      <AnimatePresence>
        {feedback.map((item: feedback) => {
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
};
