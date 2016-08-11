import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules';
import styles from './styles'

const InputElement = ({
  Actions,
  Change,
  inputValue,
  placeHolder,
}) => {
  return (
    <input
      type="text"
      name="selectize"
      autoComplete="off"
      placeholder={placeHolder}
      defaultValue={inputValue}
      onKeyUp={e => Actions && Actions(e)}
      onChange={Change}
      value={inputValue}
      styleName='input'
    />
  )
};

InputElement.propTypes = {
  Actions: PropTypes.func.isRequired,
  Change: PropTypes.func.isRequired,
  value: PropTypes.string,
  placeHolder: PropTypes.string
};

export default CSSModules(InputElement, styles);
