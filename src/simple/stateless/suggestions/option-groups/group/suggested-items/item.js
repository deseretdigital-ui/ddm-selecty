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
  if (selected[optLabel] === item[optLabel] && item[optValue] === selected[optValue]) {
    highlight = true;
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
  selected: PropTypes.object.isRequired,
  optLabel: PropTypes.string.isRequired,
  optValue: PropTypes.string.isRequired,
  onClicked: PropTypes.func.isRequired,
};

export default CSSModules(SuggestedItem, styles, { allowMultiple: true });
