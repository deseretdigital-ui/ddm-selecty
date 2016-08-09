import React, { PropTypes } from 'react'
import SuggestedItem from './suggested-items/item'
import CSSModules from 'react-css-modules';
import styles from './styles'

const SuggestedGroup = ({
  group,
  index,
  item,
  select,
  selected,
  displayField
}) => (
  <div styleName='optionGroup'>
    {
      (group.label && group.items.length > 0)
        ? (
          <div>
            {group.label}
          </div>
        )
        : <noscript/>
    }
    {
      group.items.map(
        (item, index) => (
          <SuggestedItem
            item={item}
            index={index}
            displayField={displayField}
            itemSelected={itemSelected}
            selectItem={select}
            selected={selected}
            key={`autocomplete-${item[displayField]+index}`}
          />
        )
      )
    }
  </div>
);

SuggestedGroup.propTypes = {
  displayField: PropTypes.string.isRequired,
  group: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  item: PropTypes.object.isRequired,
  itemSelected: PropTypes.bool.isRequired,
  selected: PropTypes.bool.isRequired,
  selectItem: PropTypes.func.isRequired
};

SuggestedGroup.defaultProps = {
  itemSelected: false,
  selected: {id: "198", label: "Donut Shops"}
};


export default CSSModules(SuggestedGroup, styles);
