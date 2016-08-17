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
  label,
  filterable,
  options,
  optionGroups,
  value,
  visible,
  onClicked,
  items,
}) => {
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
              group={results[groupName]}
              onClicked={onClicked}
              items={items}
              label={label}
              key={index}
            />
          )
        )
      }
    </div>
  );
};

Suggestions.propTypes = {
  label: PropTypes.string.isRequired,
  filterable: PropTypes.bool,
  options: PropTypes.array,
  optionGroups: PropTypes.arrayOf(PropTypes.shape({
    order: PropTypes.number.isRequired,
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  })),
  onClicked: PropTypes.func.isRequired,
  items: PropTypes.object,
  value: PropTypes.string,
  visible: PropTypes.bool.isRequired,
};

Suggestions.defaultProps = {
  label: 'label',
  visible: false,
};

export default CSSModules(Suggestions, styles, { allowMultiple: true });
