import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules';
import classNames from 'classnames';
import styles from './styles'

const SuggestedItem = ({
  index,
  item,
  itemSelected,
  selected,
  selectItem,
  displayField
}) => {
  const _selected = () => {
    //Check to make sure it's not a label
    if (item.selectable) {
      selectItem(item);
    }
  }
  const isSelected = selected.name == item.name && selected.value == item.value;
  const applied = classNames('item', 'norm', {'isSelected': itemSelected});

  return (
    <div
      styleName={applied}
      key={`item-${index}`}
      onClick={_selected}
    >
      {item[displayField]}
    </div>
  )
}

SuggestedItem.propTypes = {
  item: PropTypes.object.isRequired,
  itemSelected: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
  selected: PropTypes.object.isRequired,
  displayField: PropTypes.string.isRequired,
  selectItem: PropTypes.func.isRequired
};


export default CSSModules(SuggestedItem, styles, {allowMultiple: true});
