import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import KEY_MAP from '../utils/constants';
import load from '../utils/api';
import styles from './styles.scss';

const InputElement = ({
  onKeyDown = () => {},
  onChange,
  inputValue,
  placeholder,
}) => (
  <input
    type="text"
    name="selectize"
    autoComplete="off"
    placeholder={placeholder}
    onKeyDown={
      e => {
        const key = KEY_MAP[e.keyCode];
        if (key) {
          e.preventDefault();
          onKeyDown(key);
        }
      }
    }
    onChange={
      e => {
        load('//ksllocal.dev/api/autocomplete/get?q=', e.target.value);
        onChange(e);
      }
    }
    value={inputValue}
    styleName="input"
  />
);

InputElement.propTypes = {
  onKeyDown: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  inputValue: PropTypes.string,
  placeholder: PropTypes.string,
};

export default CSSModules(InputElement, styles);
