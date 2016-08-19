import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import SuggestedItem from './suggested-items/item';
import styles from './styles.scss';

const SuggestedGroup = ({
  group,
  items,
  label,
  onClicked,
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

SuggestedGroup.propTypes = {
  group: PropTypes.object.isRequired,
  items: PropTypes.array.isRequired,
  label: PropTypes.string.isRequired,
  onClicked: PropTypes.func.isRequired,
};

export default CSSModules(SuggestedGroup, styles);
