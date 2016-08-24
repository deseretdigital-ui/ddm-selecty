import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import InputElement from '../../input/';
import createGrouping from '../shared/option-groups/create';
import sortOptions from '../shared/option-groups/sort';
import { filterOptions } from '../shared/option-groups/filter';
import keyboardEvents from '../../utils/keyboadEvents';
import KEY_MAP from '../../utils/keyMapping';
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
  tabIndex,
  typedValue,
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
  const data = filterable && typedValue.length ? filteredOptions : options;
  const results = createGrouping(sortOptions(sortable, data), optionGroups);

  return (
    <div
      onBlur={onBlur}
      onFocus={onFocus}
      styleName="wrapper"
      tabIndex={tabIndex}
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
        onKeyDown={
          e => {
            const suggested = (filteredOptions.length > 0 || typedValue.length > 0) ? filteredOptions : options;
            onKeyDown instanceof Function
              ? onKeyDown(e)
              : keyboardEvents(e, label, suggested, items[0], onSelected, onChange, typedValue, onOptionsFiltered);
          }
        }
        onKeyUp={
          e => {
            // Enter for every character except for the tab, enter, and arrow keys
            const key = KEY_MAP[e.keyCode];
            if (!key) {
              if (onFilter instanceof Function) {
                onFilter(e);
              } else if (filterable) {
                const filtered = filterOptions(label, e.target.value, options);
                onOptionsFiltered(filtered);
              }
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
        onClicked={
          item => {
            const filtered = filterOptions(label, item.label, options);
            onOptionsFiltered(filtered);
            onClicked(item);
          }
        }
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
  tabIndex: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  typedValue: PropTypes.string,
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
  tabIndex: 1,
  typedValue: '',
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
