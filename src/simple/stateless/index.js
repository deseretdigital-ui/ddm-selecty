/* eslint import/no-unresolved: [2, { ignore: ['react'] }] */
import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import InputElement from '../../input/';
import Suggestions from './suggestions/';
import styles from './styles.scss';

const SimpleSelectyStateless = ({
  label,
  filterable,
  onBlur = () => {},
  onFocus = () => {},
  onKeyDown = () => {},
  optionGroups,
  options,
  onClicked,
  onChange,
  placeholder,
  items,
  value,
  visible,
}) => (
  <div
    onFocus={onFocus}
    onBlur={onBlur}
    styleName="wrapper"
    tabIndex="1"
  >
    <InputElement
      onKeyDown={onKeyDown}
      onChange={e => onChange(e.target.value)}
      inputValue={value}
      placeholder={placeholder}
    />
    <Suggestions
      label={label}
      filterable={filterable}
      optionGroups={optionGroups}
      options={options}
      searchTerm={value}
      onClicked={onClicked}
      items={items}
      value={value}
      visible={visible}
    />
  </div>
);

SimpleSelectyStateless.propTypes = {
  label: PropTypes.string,
  filterable: PropTypes.bool,
  load: PropTypes.func,
  onClicked: PropTypes.func,
  onChange: PropTypes.func,
  onKeyDown: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  optionGroups: PropTypes.arrayOf(
    PropTypes.shape({
      order: PropTypes.number.isRequired,
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
  options: PropTypes.array,
  placeholder: PropTypes.string,
  items: PropTypes.object,
  value: PropTypes.string,
  visible: PropTypes.bool.isRequired,
};

SimpleSelectyStateless.defaultProps = {
  label: 'label',
  filterable: true,
  options: [],
  value: '',
  visibility: false,
};

export default CSSModules(SimpleSelectyStateless, styles, { allowMultiple: true });
