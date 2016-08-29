import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import classNames from 'classnames';
import styles from './styles.scss';

export const SuggestedItem = ({
  item,
  items,
  onClicked,
  optLabel,
  optValue,
}) => {
  let highlight = false;
  for (let i = 0; i < items.length; i++) {
    if (items[i][optLabel] === item[optLabel] && item[optValue] === items[i][optValue]) {
      highlight = true;
      break;
    }
  }

  const applied = classNames({
    item: true,
    selected: highlight,
  });


  return (
    <div className={applied} styleName={applied} onClick={() => onClicked(item)}>
        {item[optLabel]}
    </div>
  );
};

SuggestedItem.propTypes = {
  item: PropTypes.object.isRequired,
  items: PropTypes.array.isRequired,
  optLabel: PropTypes.string.isRequired,
  optValue: PropTypes.string.isRequired,
  onClicked: PropTypes.func.isRequired,
};

export default CSSModules(SuggestedItem, styles, { allowMultiple: true });
