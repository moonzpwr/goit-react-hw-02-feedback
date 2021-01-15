import propTypes from 'prop-types';
import s from './Section.module.css';

export default function Section(props) {
  return (
    <div className={s.container}>
      <h2> {props.title}</h2>
      {props.children}
    </div>
  );
}

Section.propTypes = {
  title: propTypes.string.isRequired,
};
