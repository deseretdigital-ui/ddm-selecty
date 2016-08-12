import React, { PropTypes } from 'react'
import SuggestedItem from './suggested-items/item'
import CSSModules from 'react-css-modules';
import styles from './styles'

const SuggestedGroup = ({
  group,
  onSelect,
  selected,
  displayField,
  itemSelected,
}) => {
  if (!group.items.length) {
    return <noscript/>;
  }

  return (
    <div styleName='optionGroup'>
      { group.label || <noscript/> }
      {
        group.items.map(
          (item, index) => (
            <SuggestedItem
              item={item}
              displayField={displayField}
              itemSelected={itemSelected}
              onSelect={onSelect}
              selected={selected}
              key={`autocomplete-${item[displayField]+index}`}
            />
          )
        )
      }
    </div>
  );
}

SuggestedGroup.propTypes = {
  displayField: PropTypes.string.isRequired,
  group: PropTypes.object.isRequired,
  itemSelected: PropTypes.bool.isRequired,
  selected: PropTypes.object.isRequired,
  onSelect: PropTypes.func.isRequired
};

SuggestedGroup.defaultProps = {
  itemSelected: false,
  selected: {id: "198", label: "Donut Shops"}
};


export default CSSModules(SuggestedGroup, styles);
