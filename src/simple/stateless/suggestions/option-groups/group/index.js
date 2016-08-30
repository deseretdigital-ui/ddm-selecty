import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import classNames from 'classnames';
import SuggestedItem from './suggested-items/item';
import styles from './styles.scss';

const SuggestedGroup = ({
  group,
  selected,
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
  return (
    <div styleName={styling}>
      { group.label || <noscript /> }
      {
        group.items.map(
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
  optLabel: PropTypes.string.isRequired,
  optValue: PropTypes.string.isRequired,
  onClicked: PropTypes.func.isRequired,
};

export default CSSModules(SuggestedGroup, styles, { allowMultiple: true });
