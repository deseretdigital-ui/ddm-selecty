import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import filterOptions from '../simple/shared/option-groups/filter';
import KEY_MAP from './keyMapping';
import styles from './styles.scss';

const InputElement = ({
  autofocus,
  disabled,
  label,
  name,
  options,
  placeholder,
  required,
  value,
  onChange,
  onKeyDown,
}) => {
  return (
    <div>
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
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={e => onKeyDown(e)}
      />
    </div>
  );
};

InputElement.propTypes = {
  autofocus: PropTypes.bool.isRequired,
  disabled: PropTypes.bool.isRequired,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  placeholder: PropTypes.string.isRequired,
  required: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func.isRequired,
};

export default CSSModules(InputElement, styles);
