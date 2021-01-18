import propTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

export default function FeedbackOptions({onLeaveFeedback}) {
  return (
    <div className={s.container}>
      <button id="goodFeedback" type="button" onClick={onLeaveFeedback}>
        Good
      </button>
      <button
        id="neutralFeedback"
        type="button"
        onClick={onLeaveFeedback}
      >
        Neutral
      </button>
      <button id="badFeedback" type="button" onClick={onLeaveFeedback}>
        Bad
      </button>
      {/* <button
                    id='neutralFeedback'
                    type='button'
                    onClick={props.onleaveFeedback}>Neutral</button>
                <button
                    id='badFeedback'
                    type='button'
                    onClick={props.onleaveFeedback}>Bad</button> */}
    </div>
  );
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: propTypes.func.isRequired,
};
