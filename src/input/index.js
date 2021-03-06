import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import styles from './styles.scss';

const InputElement = ({
  autofocus,
  disabled,
  name,
  placeholder,
  required,
  value,
  onChange,
  onKeyDown,
  onKeyUp,
  tabIndex,
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
    onChange={e => onChange(e.target.value)}
    onKeyDown={e => onKeyDown(e)}
    onKeyUp={e => onKeyUp(e)}
    tabIndex={tabIndex}
    onFocus={e => e.target.select()}
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
  onChange: PropTypes.func.isRequired,
  onKeyDown: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.bool,
  ]).isRequired,
  onKeyUp: PropTypes.func.isRequired,
  tabIndex: PropTypes.number,
};

export default CSSModules(InputElement, styles);
