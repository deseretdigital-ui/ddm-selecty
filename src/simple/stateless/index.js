/* eslint import/no-unresolved: [2, { ignore: ['react'] }] */
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
  // console.log('TEMP to bypass eslint', onFilter, onSelected)
  let results = options.slice(0);

  if (filterable) {
    results = filterOptions(label, value, options);
    if (onOptionsFiltered) {
      onOptionsFiltered(results);
    }
  }

  results = createGrouping(sortOptions(results), optionGroups);

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
        label={label}
        name={name}
        options={options}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
      <Suggestions
        autoHighlight={autoHighlight}
        filterable={filterable}
        items={items}
        label={label}
        optionGroups={optionGroups}
        options={results}
        sortable={sortable}
        value={value}
        visible={visible}
        onClicked={onClicked}
        onFilter={onFilter}
        onSelected={onSelected}
      />
    </div>
  );
};

SimpleSelectyStateless.propTypes = {
  autofocus: PropTypes.bool,
  autoHighlight: PropTypes.bool,
  disabled: PropTypes.bool,
  filterable: PropTypes.bool,
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
  onFilter: PropTypes.func,
  onFocus: PropTypes.func,
  onKeyDown: PropTypes.func,
  onOptionsFiltered: PropTypes.func,
  onSelected: PropTypes.func,
};

SimpleSelectyStateless.defaultProps = {
  autofocus: false,
  autoHighlight: false,
  disabled: false,
  filterable: true,
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
  onFilter: () => {},
  onFocus: () => {},
  onKeyDown: () => {},
  onSelected: () => {},
};

export default CSSModules(SimpleSelectyStateless, styles, { allowMultiple: true });
