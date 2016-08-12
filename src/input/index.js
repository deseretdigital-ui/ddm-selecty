import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules';
import { KEY_MAP } from '../utils/constants'
import styles from './styles'

const InputElement = ({
  onKeyDown = () => {},
  Change,
  inputValue,
  placeholder,
}) => (
  <input
    type="text"
    name="selectize"
    autoComplete="off"
    placeholder={placeholder}
    defaultValue={inputValue}
    onKeyDown={
      e => {
        e.preventDefault();
        const key = KEY_MAP[e.keyCode];
        if (key) {
          onKeyDown(key);
        }
      }
    }

    onChange={Change}
    value={inputValue}
    styleName='input'
  />
);

InputElement.propTypes = {
  onKeyDown: PropTypes.func.isRequired,
  Change: PropTypes.func.isRequired,
  value: PropTypes.string,
  placeholder: PropTypes.string
};

export default CSSModules(InputElement, styles);
