import React, { PropTypes } from 'react';
import InputElement from '../../input/';
import Suggestions from './suggestions/';

// import {KEY_MAP} from '../../utils/constants'
// import {default as css} from './mainStyles'

const SimpleSelectyStateless = ({
  load = () => {},
  blur = () => {},
  focus = () => {},
  displayField,
  input,
  optionGroups,
  options,
  onSelected,
  onValueChange,
  selected,
  value,
  visible,
}) => {
  const _actions = e => {
    /*
    let {selected} = this.state;
    var keyCode = ev.keyCode;
    var stateUpdate = {};
    */
    load(e.target.value, result => {
      options = result;
      console.log(result);
    });
  };

  return (
    <div onFocus={focus}>
      <InputElement
        Actions={_actions}
        Change={e => onValueChange(e.target.value)}
        inputValue={selected.label}
      />
      <Suggestions
        visible={visible}
        options={options}
        searchTerm={value}
        displayField={displayField}
        select={item => onSelected && onSelected(item)}
        selected={selected}
        optionGroups={optionGroups}
      />
    </div>
  )
};

SimpleSelectyStateless.propTypes = {
  load: PropTypes.func,
  onValueChange: PropTypes.func,
  onSelected: PropTypes.func,
  options: PropTypes.array,
  placeHolder: PropTypes.string,
  displayField: PropTypes.string,
  optionGroups: PropTypes.arrayOf(
    PropTypes.shape({
      order: PropTypes.number.isRequired,
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
};

SimpleSelectyStateless.defaultProps = {
  options: [],
  visibility: false,
  value: "",
  displayField: 'label',
};

export default SimpleSelectyStateless;
