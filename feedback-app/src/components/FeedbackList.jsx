import { useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import FeedbackContext from '../context/FeedbackContext';

import PropTypes from 'prop-types';
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

FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ),
};

export default FeedbackList;
