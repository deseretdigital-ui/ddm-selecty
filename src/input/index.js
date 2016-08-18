import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import keyboardEvents from './keyboadEvents';
import styles from './styles.scss';

const InputElement = ({
  autofocus,
  disabled,
  items,
  name,
  options,
  placeholder,
  required,
  value,
  onChange,
  onKeyDown,
  onKeyUp,
  onSelected,
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
    onKeyDown={
      e => {
        onKeyDown instanceof Function
          ? onKeyDown(e)
          : keyboardEvents(e, options, items[0], onSelected);
      }
    }
    onKeyUp={e => onKeyUp(e.target.value)}
  />
);

InputElement.propTypes = {
  autofocus: PropTypes.bool.isRequired,
  disabled: PropTypes.bool.isRequired,
  items: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  placeholder: PropTypes.string.isRequired,
  required: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onKeyDown: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.bool,
  ]).isRequired,
  onKeyUp: PropTypes.func.isRequired,
  onSelected: PropTypes.func.isRequired,
};

export default CSSModules(InputElement, styles);
