import React, { PropTypes } from 'react'
import SuggestedItem from './suggested-items/item'
import CSSModules from 'react-css-modules';
import styles from './styles'

const SuggestedGroup = ({
  group,
  select,
  selected,
  displayField,
  itemSelected,
}) => (
  <div styleName='optionGroup'>
    { group.label && group.items.length > 0 ? group.label : <noscript/> }
    {
      group.items.map(
        (item, index) => (
          <SuggestedItem
            item={item}
            index={index}
            displayField={displayField}
            itemSelected={itemSelected}
            select={select}
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
  itemSelected: PropTypes.bool.isRequired,
  selected: PropTypes.object.isRequired,
  select: PropTypes.func.isRequired
};

SuggestedGroup.defaultProps = {
  itemSelected: false,
  selected: {id: "198", label: "Donut Shops"}
};


export default CSSModules(SuggestedGroup, styles);
