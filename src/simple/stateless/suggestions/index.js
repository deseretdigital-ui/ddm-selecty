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
  displayField,
  filterable,
  options,
  optionGroups,
  value,
  visible,
  onSelect,
  selected,
}) => {
  let results = createGrouping(sortOptions(options), optionGroups);
  if (filterable) {
    results = filterOptions(displayField, value, results);
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
              group={results[groupName]}
              selected={selected}
              displayField={displayField}
              onSelect={onSelect}
              key={index}
            />
          )
        )
      }
    </div>
  );
};

Suggestions.propTypes = {
  displayField: PropTypes.string.isRequired,
  filterable: PropTypes.bool,
  options: PropTypes.array,
  optionGroups: PropTypes.arrayOf(PropTypes.shape({
    order: PropTypes.number.isRequired,
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  })),
  onSelect: PropTypes.func.isRequired,
  selected: PropTypes.object,
  value: PropTypes.string,
  visible: PropTypes.bool.isRequired,
};

Suggestions.defaultProps = {
  displayField: 'label',
  visible: false,
};

export default CSSModules(Suggestions, styles, { allowMultiple: true });
