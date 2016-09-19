import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.scss';

const InputElement = ({
  autofocus,
  disabled,
  name,
  placeholder,
  required,
  value,
  onBlur,
  onChange,
  onFocus,
  onKeyDown,
  onKeyUp,
  tabPost,
}) => (
  <input
    autoComplete="off"
    autoFocus={autofocus}
    disabled={disabled}
    name={name}
    placeholder={placeholder}
    required={required}
    value={value}
    type="text"
    styleName="input"
    onBlur={onBlur} onFocus={onFocus}
    onChange={e => onChange(e.target.value)}
    onKeyDown={e => onKeyDown(e)}
    onKeyUp={e => onKeyUp(e)}
    tabIndex={tabPost}
  />
);

InputElement.propTypes = {
  autofocus: PropTypes.bool.isRequired,
  disabled: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  required: PropTypes.bool.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
  onBlur: PropTypes.func.isRequired,
  onFocus: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onKeyDown: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.bool,
  ]).isRequired,
  onKeyUp: PropTypes.func.isRequired,
  tabPost: PropTypes.number,
};

export default CSSModules(InputElement, styles);
