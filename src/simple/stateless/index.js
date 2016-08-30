import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import InputElement from '../../input/';
import createGrouping from './suggestions/option-groups/grouping/create';
import sortOptions from './suggestions/option-groups/grouping/sort';
import { filterOptions } from './suggestions/option-groups/grouping/filter';
import keyboardEvents from './utils/keyboadEvents';
import KEY_MAP from './utils/keyMapping';
import Suggestions from './suggestions/';
import styles from './styles.scss';

export const SimpleSelectyStateless = ({
  autofocus,
  autoHighlight,
  autoSuggest,
  disabled,
  filterable,
  filteredOptions,
  items,
  optLabel,
  optValue,
  name,
  noResults,
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
  const results = createGrouping(sortOptions(sortable, data, optLabel), optionGroups);
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
        name={name}
        options={data}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
        onKeyDown={
          e => {
            let suggested = options;

            if (filterable) {
              suggested = (filteredOptions.length > 0 || typedValue.length > 0) ? filteredOptions : options;
            }

            if (sortable) {
              suggested = sortOptions(sortable, suggested, optLabel);
            }

            if (optionGroups.length > 0) {
              suggested = createGrouping(suggested, optionGroups);
            }

            onKeyDown instanceof Function
              ? onKeyDown(e)
              : keyboardEvents(e, optLabel, suggested, items[0], onSelected,
                onChange, typedValue, onOptionsFiltered, optionGroups);
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
                let filtered = null;

                if (sortable) {
                  filtered = sortOptions(sortable, filterOptions(optLabel, e.target.value, options), optLabel);
                } else {
                  filtered = filterOptions(optLabel, e.target.value, options);
                }

                onOptionsFiltered(filtered);
              }
            }
          }
        }
        onSelected={onSelected}
      />
      <Suggestions
        autoHighlight={autoHighlight}
        autoSuggest={autoSuggest}
        selected={items}
        optLabel={optLabel}
        optValue={optValue}
        noResults={noResults}
        options={results}
        value={value}
        visible={visible}
        onClicked={
          item => {
            const filtered = filterOptions(optLabel, item[optLabel], options);
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
  autoSuggest: PropTypes.bool,
  disabled: PropTypes.bool,
  filterable: PropTypes.bool,
  filteredOptions: PropTypes.array,
  items: PropTypes.array,
  optLabel: PropTypes.string,
  optValue: PropTypes.string,
  name: PropTypes.string,
  noResults: PropTypes.shape({
    show: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
  }),
  optionGroups: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.shape({
        order: PropTypes.number.isRequired,
        key: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
      })
    ),
    PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
      })
    ),
  ]),
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
  autoSuggest: true,
  disabled: false,
  filterable: true,
  filteredOptions: [],
  items: [],
  optLabel: 'label',
  optValue: 'value',
  name: 'selecty',
  noResults: { show: true, label: 'No results found.' },
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
