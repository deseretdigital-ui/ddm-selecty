import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import classNames from 'classnames';
import styles from './styles.scss';

export const SuggestedItem = ({
  item,
  selected,
  onClicked,
  optLabel,
  optValue,
}) => {
  let highlight = false;
  for (let i = 0; i < selected.length; i++) {
    if (selected[i][optLabel] === item[optLabel] && item[optValue] === selected[i][optValue]) {
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
      {item[optLabel]}
    </div>
  );
};

SuggestedItem.propTypes = {
  item: PropTypes.object.isRequired,
  selected: PropTypes.array.isRequired,
  optLabel: PropTypes.string.isRequired,
  optValue: PropTypes.string.isRequired,
  onClicked: PropTypes.func.isRequired,
};

export default CSSModules(SuggestedItem, styles, { allowMultiple: true });
