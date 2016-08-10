import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules';
import styles from './styles'

const InputElement = ({
  Actions,
  Change,
  Focus,
  inputValue,
  placeHolder,
}) => (
  <input
    type="text"
    name="selectize"
    autoComplete="off"
    placeholder={placeHolder}
    value={inputValue}
    onKeyDown={Actions}
    onChange={Change}
    onClick={Focus}
    styleName='input'
  />
);

InputElement.propTypes = {
  Actions: PropTypes.func.isRequired,
  Change: PropTypes.func.isRequired,
  Focus: PropTypes.func.isRequired,
  value: PropTypes.string,
  placeHolder: PropTypes.string
};

export default CSSModules(InputElement, styles);
