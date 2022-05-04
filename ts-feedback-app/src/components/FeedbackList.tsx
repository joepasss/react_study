import { FC } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { feedbacks, feedback } from '../data/FeedbackData';
import { FeedbackItem } from './FeedbackItem';

interface Props {
  feedbacks: feedbacks;
  handleDelete: (id: string) => void;
}

export const FeedbackList: FC<Props> = ({ feedbacks, handleDelete }) => {
  return (
    <div className='feedback-list'>
      <AnimatePresence>
        {feedbacks.map((item: feedback) => {
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <FeedbackItem
                key={item.id}
                item={item}
                handleDelete={handleDelete}
              />
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
};
