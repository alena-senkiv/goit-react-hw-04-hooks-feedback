import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  console.log(options);
  return options.map(option => (
    <button
      key={option}
      className={styles[option]}
      onClick={() => {
        onLeaveFeedback(option);
      }}
    >
      {option}
    </button>
  ));
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func,
};
