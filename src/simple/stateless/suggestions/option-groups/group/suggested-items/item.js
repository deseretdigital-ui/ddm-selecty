import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules';
import classNames from 'classnames';
import styles from './styles'

const SuggestedItem = ({
  item,
  selected,
  onSelect,
  displayField,
}) => {
  const applied = classNames({
    'item': true,
    'selected': selected.id === item.id,
  });

  return (
    <div styleName={applied} onClick={() => onSelect(item)}>
      {item[displayField]}
    </div>
  )
};

SuggestedItem.propTypes = {
  item: PropTypes.object.isRequired,
  selected: PropTypes.object.isRequired,
  displayField: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
};


export default CSSModules(SuggestedItem, styles, {allowMultiple: true});
