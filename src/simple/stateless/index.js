import React, { PropTypes } from 'react'
import InputElement from '../../input/'
import Suggestions from './suggestions/'
import {KEY_MAP} from '../../utils/constants'
// import {default as css} from './mainStyles'

const SimpleSelectyStateless = ({
    blur,
    displayField,
    focus,
    input,
    onValueChange,
    optionGroups,
    options,
    onSelected,
    selected,
    value,
    visibility,
}) => {
  const _blur = () => {if(blur) {blur();}}
  const _change = (e) => {if(onChange) {onChange(e.target.value);}}
  const _focus = () => {if(focus) {focus();}}
  const _itemSelected = (item) => {if(onSelected) {onSelected(item);}}
  const _actions = (ev) => {
    let {selected} = this.state;
    var keyCode = ev.keyCode;
    var stateUpdate = {};
  }

  return (
    <div onMouseLeave={_blur}>
      <InputElement
        Actions={_actions}
        Change={_change}
        Focus={_focus}
        value={input}
      />
      <Suggestions
        visible={visibility}
        options={options}
        searchTerm={value}
        displayField={displayField}
        select={_itemSelected}
        selected={selected}
        optionGroups={optionGroups}
      />
    </div>
  )
}

SimpleSelectyStateless.propTypes = {
  load: PropTypes.func,
  onValueChange: PropTypes.func,
  onSelected: PropTypes.func,
  options: PropTypes.array,
  placeHolder: PropTypes.string,
  displayField: PropTypes.string,
  optionGroups: PropTypes.arrayOf(PropTypes.shape({
    order: PropTypes.number.isRequired,
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
  }))
};

SimpleSelectyStateless.defaultProps = {
  options: [],
  visibility: false,
  value: "",
  displayField: 'label',
}

export default SimpleSelectyStateless;
