import propTypes from 'prop-types';
import s from './Section.module.css';

export default function Section({title, children}) {
  return (
    <div className={s.container}>
      <h2> {title}</h2>
      {children}
    </div>
  );
}

Section.propTypes = {
  title: propTypes.string.isRequired,
};
