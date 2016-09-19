import React from 'react';
import CSSModules from 'react-css-modules';
import InputElement from '../../input/';
import defaultProps from './_defaultProps';
import propTypes from './_propTypes';
import createGrouping from './suggestions/option-groups/grouping/create';
import { sortOptions } from './suggestions/option-groups/grouping/sort';
import filterOptions, { filterGroupings } from './suggestions/option-groups/grouping/filter';
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
  onChosen,
  optionGroups,
  options,
  optLabel,
  optValue,
  placeholder,
  required,
  sortable,
  tab,
  typedValue,
  value,
  visible,
}) => {
  const updateFunctions = {
    onChange,
    onFilter,
    onFiltered,
    onKeyDown,
    onChosen,
  };

  const Options = {
    filtered: null,
    grouped: null,
    groupings: optionGroups.length ? optionGroups : null,
    label: optLabel,
    limit,
    original: options,
    selected: item,
    sorted: null,
    value: optValue,
  };

  Options.filtered = filterable && typedValue.length && !lazyLoading ? filteredOptions : options;

  if (Options.filtered.length <= 0) {
    Options.sorted = sortOptions(options, optLabel, sortable);
    Options.grouped = createGrouping(Options.sorted, optionGroups);
    Options.filtered = filterGroupings(optLabel, optValue, limit, Options.grouped, optionGroups);
  } else {
    Options.sorted = sortOptions(Options.filtered, optLabel, sortable);
    Options.grouped = createGrouping(Options.sorted, optionGroups);
  }
  return (
    <div styleName="wrapper">
      <InputElement
        autofocus={autofocus}
        disabled={disabled}
        name={name}
        placeholder={placeholder}
        required={required}
        value={value}
        onBlur={onBlur} onFocus={onFocus}
        onKeyDown={e => keyEvents(e, 'down', filterable, lazyLoading, Options, sortable, typedValue, updateFunctions)}
        onKeyUp={e => keyEvents(e, 'up', filterable, lazyLoading, Options, sortable, typedValue, updateFunctions)}
        onChange={onChange}
        tabPost={tab}
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
        options={Options.grouped}
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
