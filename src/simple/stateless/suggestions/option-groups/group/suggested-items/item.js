import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import classNames from 'classnames';
import styles from './styles.scss';

const SuggestedItem = ({
  item,
  items,
  onClicked,
  label,
}) => {
  let highlight = false;
  for (let i = 0; i < items.length; i++) {
    if (items[i].id === item.id) {
      highlight = true;
      break;
    }
  }

  const applied = classNames({
    item: true,
    selected: highlight,
  });

  return (
    <div styleName={applied} onClick={() => onClicked(item)}>
      {item[label]}
    </div>
  );
};

SuggestedItem.propTypes = {
  item: PropTypes.object.isRequired,
  items: PropTypes.array.isRequired,
  label: PropTypes.string.isRequired,
  onClicked: PropTypes.func.isRequired,
};

export default CSSModules(SuggestedItem, styles, { allowMultiple: true });
