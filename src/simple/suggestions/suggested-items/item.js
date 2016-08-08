import React, { PropTypes } from 'react'
import styles from '../styles'

class SuggestedItem extends React.Component {
  static propTypes = {
    item: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    selected: PropTypes.object.isRequired,
    displayField: PropTypes.string.isRequired,
    selectItem: PropTypes.func.isRequired
  };

  constructor(props, context) {
    super(props, context);
    this._selected = this._selected.bind(this);
  }

  _selected () {
    let {item} = this.props;
    //Check to make sure it's not a label
    if(item.selectable) {
      this.props.selectItem(item);
    }
  }

  render() {
    let {index, item, selected, displayField} = this.props;

    // Classes for div
    // 'autocomplete__item': true,
    // 'autocomplete__item--selected': selected,
    // 'clickable': true
    //
    let isSelected = selected.name == item.name && selected.value == item.value;
    // style={[css.item, css.norm, isSelected && css.selected]}
    return (
      <div
        className={styles.item}
        key={`item-${index}`}
        onClick={this._selected}
      >
        {item[displayField]}
      </div>
    )
  }
}

export default SuggestedItem;
