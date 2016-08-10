import React, { PropTypes } from 'react';
import classNames from 'classnames';
import CSSModules from 'react-css-modules';
import styles from './styles';
import {
  CreateGrouping,
  SuggestedGroup,
} from './option-groups/';

const Suggestions = ({
  displayField,
  options,
  optionGroups,
  visible,
  select,
  selected,
}) => {
  const results = CreateGrouping(options, optionGroups);
  const applied = classNames({
    'norm': true,
    'visible': visible,
    'suggestion': Object.keys(results).length > 0,
  });

  if (!results) {
    return <div styleName={applied}>Loading...</div>
  }

  if (Object.keys(results).length == 0) {
    return <div styleName={applied}>No results found.</div>
  }

  return (
    <div styleName={applied}>
      {
        Object.keys(results).map(
          (groupName, index) => (
            <SuggestedGroup
              group={results[groupName]}
              selected={selected}
              displayField={displayField}
              selectItem={select}
              key={index}
            />
          )
        )
      }
    </div>
  )
};

Suggestions.propTypes = {
  displayField: PropTypes.string.isRequired,
  options: PropTypes.array,
  optionGroups: PropTypes.arrayOf(PropTypes.shape({
    order: PropTypes.number.isRequired,
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
  })),
  select: PropTypes.func.isRequired,
  selected: PropTypes.object,
  visible: PropTypes.bool.isRequired,
};

Suggestions.defaultProps = {
  displayField: 'label',
  visible: false,
};

export default CSSModules(Suggestions, styles, {allowMultiple: true});
