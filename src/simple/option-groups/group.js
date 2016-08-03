import React, { PropTypes } from 'react'
import SuggestedItem from '../suggestions/suggested-items/item'
// import {default as css} from './groupItemStyles'

class SuggestedGroup extends React.Component {
  static propTypes = {
    group: PropTypes.object.isRequired
    // item: PropTypes.object.isRequired,
    // index: PropTypes.number.isRequired,
    // selected: PropTypes.bool.isRequired,
    // displayField: PropTypes.string.isRequired,
    // selectItem: PropTypes.func.isRequired
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      group: this.props.group
    }
  }

  componentDidMount () { }

  shouldComponentUpdate (nextProps, nextState) {
    return true;
  }

  render() {
    let {group, index, item, select, selected, displayField} = this.props;
    // style={css.optionGroup}
    return (
      <div>
        {
          (group.label && group.items.length > 0)
            ? (
              <div>
                {group.label}
              </div>
            )
            : ''
        }
        {
          group.items.map(
            (item, index) => (
              <SuggestedItem
                item={item}
                index={index}
                displayField={displayField}
                selectItem={select}
                selected={selected}
                key={`autocomplete-${item[displayField]+index}`}
              />
            )
          )
        }
      </div>
    )
  }
}

export default SuggestedGroup;
