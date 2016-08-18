import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import InputElement from '../../input/';
import createGrouping from '../shared/option-groups/create';
import sortOptions from '../shared/option-groups/sort';
import { filterOptions } from '../shared/option-groups/filter';
import Suggestions from './suggestions/';
import styles from './styles.scss';

const SimpleSelectyStateless = ({
  autofocus,
  autoHighlight,
  disabled,
  filterable,
  filteredOptions,
  items,
  label,
  name,
  optionGroups,
  options,
  placeholder,
  required,
  sortable,
  value,
  visible,
  onBlur,
  onChange,
  onClicked,
  onFilter,
  onFocus,
  onKeyDown,
  onOptionsFiltered,
  onSelected,
}) => {
  const data = (filterable && filteredOptions.length) || value.length ? filteredOptions : options;
  const results = createGrouping(sortOptions(sortable, data), optionGroups);

  return (
    <div
      onBlur={onBlur}
      onFocus={onFocus}
      styleName="wrapper"
      tabIndex="1"
    >
      <InputElement
        autofocus={autofocus}
        disabled={disabled}
        items={items}
        name={name}
        options={data}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        onKeyUp={
          e => {
            if (onFilter instanceof Function) {
              onFilter(e);
            } else if (filterable) {
              const filtered = filterOptions(label, value, options);
              onOptionsFiltered(filtered);
            }
          }
        }
        onSelected={onSelected}
      />
      <Suggestions
        autoHighlight={autoHighlight}
        items={items}
        label={label}
        options={results}
        visible={visible}
        onClicked={onClicked}
      />
    </div>
  );
};

SimpleSelectyStateless.propTypes = {
  autofocus: PropTypes.bool,
  autoHighlight: PropTypes.bool,
  disabled: PropTypes.bool,
  filterable: PropTypes.bool,
  filteredOptions: PropTypes.array,
  items: PropTypes.array,
  label: PropTypes.string,
  name: PropTypes.string,
  optionGroups: PropTypes.arrayOf(
    PropTypes.shape({
      order: PropTypes.number.isRequired,
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
  options: PropTypes.array,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  sortable: PropTypes.bool,
  value: PropTypes.string,
  visible: PropTypes.bool,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onClicked: PropTypes.func,
  onFilter: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.bool,
  ]),
  onFocus: PropTypes.func,
  onKeyDown: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.bool,
  ]),
  onOptionsFiltered: PropTypes.func,
  onSelected: PropTypes.func,
};

SimpleSelectyStateless.defaultProps = {
  autofocus: false,
  autoHighlight: false,
  disabled: false,
  filterable: true,
  filteredOptions: [],
  items: [],
  label: 'label',
  name: 'selectize',
  options: [],
  optionGroups: [],
  placeholder: '',
  required: false,
  sortable: false,
  value: '',
  visible: false,
  onBlur: () => {},
  onChange: () => {},
  onClicked: () => {},
  onFilter: false,
  onFocus: () => {},
  onKeyDown: false,
  onOptionsFiltered: () => {},
  onSelected: () => {},
};

export default CSSModules(SimpleSelectyStateless, styles, { allowMultiple: true });
