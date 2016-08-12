import React, { PropTypes } from 'react';
import InputElement from '../../input/';
import Suggestions from './suggestions/';
import CSSModules from 'react-css-modules';
import styles from './styles';

const SimpleSelectyStateless = ({
  blur = () => {},
  filterable,
  focus = () => {},
  displayField,
  load = () => {},
  onKeyDown = () => {},
  optionGroups,
  options,
  onSelected,
  onValueChange,
  placeholder,
  selected,
  value,
  visible,
}) => (
  <div
    onFocus={focus}
    onBlur={blur}
    styleName="wrapper"
    tabIndex="1"
  >
    <InputElement
      onKeyDown={onKeyDown}
      Change={e => onValueChange(e.target.value)}
      inputValue={value}
      placeholder={placeholder}
    />
    <Suggestions
      displayField={displayField}
      filterable={filterable}
      optionGroups={optionGroups}
      options={options}
      searchTerm={value}
      onSelect={onSelected}
      selected={selected}
      value={value}
      visible={visible}
    />
  </div>
);

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
  placeholder: PropTypes.string,
};

SimpleSelectyStateless.defaultProps = {
  displayField: 'label',
  filterable: true,
  options: [],
  value: '',
  visibility: false,
};

export default CSSModules(SimpleSelectyStateless, styles, { allowMultiple: true });
