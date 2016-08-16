import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import SuggestedItem from './suggested-items/item';
import styles from './styles.scss';

const SuggestedGroup = ({
  group,
  onSelect,
  selected,
  displayField,
}) => {
  if (!group.items.length) {
    return <noscript />;
  }

  return (
    <div styleName="optionGroup">
      { group.label || <noscript /> }
      {
        group.items.map(
          (item, index) => (
            <SuggestedItem
              item={item}
              displayField={displayField}
              onSelect={onSelect}
              selected={selected}
              key={index}
            />
          )
        )
      }
    </div>
  );
};

SuggestedGroup.propTypes = {
  displayField: PropTypes.string.isRequired,
  group: PropTypes.object.isRequired,
  selected: PropTypes.object.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default CSSModules(SuggestedGroup, styles);
