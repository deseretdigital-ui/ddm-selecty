import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import classNames from 'classnames';
import SuggestedItem from './suggested-items/item';
import styles from './styles.scss';

export const SuggestedGroup = ({
  group,
  selected,
  limit,
  optLabel,
  optValue,
  onClicked,
}) => {
  const styling = classNames({
    optionGroup: true,
    grouping: group.label,
  });

  if (!group.items.length) {
    return <noscript />;
  }
  const suggestions = [];
  let numSuggestions = null;

  if (group.limit && group.limit !== 'all') {
    numSuggestions = group.limit;
  } else if (group.limit === 'all') {
    numSuggestions = null;
  } else if (limit) {
    numSuggestions = limit;
  }

  for (let index = 0; index < group.items.length; index++) {
    if (numSuggestions && index >= numSuggestions) { break; }
    suggestions.push(group.items[index]);
  }

  return (
    <div styleName={styling}>
      { group.label || <noscript /> }
      {
        suggestions.map(
          (item, index) => (
            <SuggestedItem
              item={item}
              selected={selected}
              optLabel={optLabel}
              optValue={optValue}
              onClicked={onClicked}
              key={index}
            />
          )
        )
      }
    </div>
  );
};

SuggestedGroup.propTypes = {
  group: PropTypes.object.isRequired,
  selected: PropTypes.array.isRequired,
  limit: PropTypes.number,
  optLabel: PropTypes.string.isRequired,
  optValue: PropTypes.string.isRequired,
  onClicked: PropTypes.func.isRequired,
};

export default CSSModules(SuggestedGroup, styles, { allowMultiple: true });
