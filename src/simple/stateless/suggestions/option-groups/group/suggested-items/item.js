/* eslint import/no-unresolved: [2, { ignore: ['react'] }] */
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
  const applied = classNames({
    item: true,
    selected: items.id === item.id,
  });

  return (
    <div styleName={applied} onClick={() => onClicked(item)}>
      {item[label]}
    </div>
  );
};

SuggestedItem.propTypes = {
  item: PropTypes.object.isRequired,
  items: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  onClicked: PropTypes.func.isRequired,
};

export default CSSModules(SuggestedItem, styles, { allowMultiple: true });
