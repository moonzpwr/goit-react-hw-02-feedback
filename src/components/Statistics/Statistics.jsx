import propTypes from 'prop-types';
import s from './Statistics.module.css';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <ul>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li className={s.bold}>Total: {total()}</li>
      <li className={s.bold}>Positive Feedback: {positivePercentage()}%</li>
    </ul>
  );
}

Statistics.propTypes = {
  good: propTypes.number.isRequired,
  neutral: propTypes.number.isRequired,
  bad: propTypes.number.isRequired,
  total: propTypes.func.isRequired,
  positivePercentage: propTypes.func.isRequired,
};
