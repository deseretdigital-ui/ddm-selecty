import React, { PropTypes } from 'react';
import InputElement from '../../input/';
import Suggestions from './suggestions/';

// import {KEY_MAP} from '../../utils/constants'
// import {default as css} from './mainStyles'

const SimpleSelectyStateless = ({
  blur = () => {},
  filterable,
  focus = () => {},
  displayField,
  load = () => {},
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
    <div onFocus={focus} onBlur={blur}>
      <InputElement
        Actions={_actions}
        Change={e => onValueChange(e.target.value)}
        inputValue={selected.label}
      />
      <Suggestions
        displayField={displayField}
        filterable={filterable}
        optionGroups={optionGroups}
        options={options}
        searchTerm={value}
        select={item => onSelected && onSelected(item)}
        selected={selected}
        value={value}
        visible={visible}
      />
    </div>
  )
};

SimpleSelectyStateless.propTypes = {
  displayField: PropTypes.string,
  filterable: PropTypes.bool,
  load: PropTypes.func,
  onSelected: PropTypes.func,
  onValueChange: PropTypes.func,
  optionGroups: PropTypes.arrayOf(
    PropTypes.shape({
      order: PropTypes.number.isRequired,
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
  options: PropTypes.array,
  placeHolder: PropTypes.string,
};

SimpleSelectyStateless.defaultProps = {
  displayField: 'label',
  filterable: true,
  options: [],
  value: "",
  visibility: false,
};

export default SimpleSelectyStateless;
