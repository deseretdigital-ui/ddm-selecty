/* eslint import/no-unresolved: [2, { ignore: ['react'] }] */
import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import SuggestedItem from './suggested-items/item';
import styles from './styles.scss';

const SuggestedGroup = ({
  group,
  onClicked,
  items,
  label,
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
              label={label}
              onClicked={onClicked}
              items={items}
              key={index}
            />
          )
        )
      }
    </div>
  );
};

SuggestedGroup.propTypes = {
  label: PropTypes.string.isRequired,
  group: PropTypes.object.isRequired,
  items: PropTypes.object.isRequired,
  onClicked: PropTypes.func.isRequired,
};

export default CSSModules(SuggestedGroup, styles);
