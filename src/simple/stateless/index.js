import React from 'react';
import CSSModules from 'react-css-modules';
import InputElement from '../../input/';
import defaultProps from './_defaultProps';
import propTypes from './_propTypes';
import createGrouping from './suggestions/option-groups/grouping/create';
import sortOptions from './suggestions/option-groups/grouping/sort';
import filterOptions from './suggestions/option-groups/grouping/filter';
import { keyEvents } from './utils/keyEvents';
import Suggestions from './suggestions/';
import styles from './styles.scss';

export const SimpleSelectyStateless = ({
  autofocus,
  autoHighlight,
  autoSuggest,
  disabled,
  filterable,
  filteredOptions,
  item,
  lazyLoading,
  limit,
  loading,
  name,
  noResults,
  onBlur,
  onChange,
  onClicked,
  onFilter,
  onFocus,
  onKeyDown,
  onFiltered,
  onSelected,
  optionGroups,
  options,
  optLabel,
  optValue,
  placeholder,
  required,
  sortable,
  tabIndex,
  typedValue,
  value,
  visible,
}) => {
  const filteredOpts = filterable && typedValue.length && !lazyLoading ? filteredOptions : options;
  const sortedOpts = sortOptions(filteredOpts, optLabel, sortable);
  const groupedOpts = createGrouping(sortedOpts, optionGroups);

  const updateFunctions = {
    onChange,
    onFilter,
    onFiltered,
    onKeyDown,
    onSelected,
  };

  const Options = {
    filtered: filteredOpts,
    grouped: groupedOpts,
    groupings: optionGroups,
    label: optLabel,
    limit,
    original: options,
    selected: item,
    sorted: sortedOpts,
    value: optValue,
  };

  return (
    <div onBlur={onBlur} onFocus={onFocus} tabIndex={tabIndex} styleName="wrapper">
      <InputElement
        autofocus={autofocus}
        disabled={disabled}
        name={name}
        placeholder={placeholder}
        required={required}
        value={value}
        onKeyDown={e => keyEvents(e, 'down', filterable, lazyLoading, Options, sortable, typedValue, updateFunctions)}
        onKeyUp={e => keyEvents(e, 'up', filterable, lazyLoading, Options, sortable, typedValue, updateFunctions)}
        onChange={onChange}
      />
      <Suggestions
        autoHighlight={autoHighlight}
        autoSuggest={autoSuggest}
        selected={item}
        limit={limit}
        loading={loading}
        noResults={noResults}
        optLabel={optLabel}
        optValue={optValue}
        options={groupedOpts}
        value={value}
        visible={visible}
        onClicked={
          clickedItem => {
            const updatedOptions = filterOptions(Options, clickedItem[optLabel]);
            onFiltered(updatedOptions);
            onClicked(clickedItem);
          }
        }
      />
    </div>
  );
};

SimpleSelectyStateless.propTypes = propTypes;
SimpleSelectyStateless.defaultProps = defaultProps;

export default CSSModules(SimpleSelectyStateless, styles, { allowMultiple: true });
