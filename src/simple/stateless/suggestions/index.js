/* eslint import/no-unresolved: [2, { ignore: ['react'] }] */
import React, { PropTypes } from 'react';
import classNames from 'classnames';
import CSSModules from 'react-css-modules';
import styles from './styles.scss';
import {
  createGrouping,
  sortOptions,
  filterOptions,
  SuggestedGroup,
} from './option-groups/';

const Suggestions = ({
  autoHighlight,
  filterable,
  items,
  label,
  optionGroups,
  options,
  sortable,
  value,
  visible,
  onClicked,
  onFilter,
  onSelected,
}) => {
  // Added to hide eslint errors just for now
  console.log(sortable, onFilter, onSelected);

  let results = createGrouping(sortOptions(options), optionGroups);
  if (filterable) {
    results = filterOptions(label, value, results);
  }
  const applied = classNames({
    norm: true,
    visible,
    suggestion: Object.keys(results).length > 0,
  });

  if (!results) {
    return <div styleName={applied}>Loading...</div>;
  }

  if (Object.keys(results).length === 0) {
    return <div styleName={applied}>No results found.</div>;
  }

  return (
    <div styleName={applied}>
      {
        Object.keys(results).map(
          (groupName, index) => (
            <SuggestedGroup
              autoHighlight={autoHighlight}
              group={results[groupName]}
              items={items}
              label={label}
              onClicked={onClicked}
              key={index}
            />
          )
        )
      }
    </div>
  );
};

Suggestions.propTypes = {
  autoHighlight: PropTypes.bool.isRequired,
  filterable: PropTypes.bool.isRequired,
  items: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  optionGroups: PropTypes.arrayOf(
    PropTypes.shape({
      order: PropTypes.number.isRequired,
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
  options: PropTypes.array.isRequired,
  sortable: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
  visible: PropTypes.bool.isRequired,
  onClicked: PropTypes.func.isRequired,
  onFilter: PropTypes.func.isRequired,
  onSelected: PropTypes.func.isRequired,
};

export default CSSModules(Suggestions, styles, { allowMultiple: true });
