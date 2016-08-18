import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
// import filterOptions from '../simple/shared/option-groups/filter';
// import KEY_MAP from './keyMapping';
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
    onKeyDown={onKeyDown}
  />
);

InputElement.propTypes = {
  autofocus: PropTypes.bool.isRequired,
  disabled: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  required: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func.isRequired,
};

export default CSSModules(InputElement, styles);
