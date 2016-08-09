import React, { PropTypes } from 'react';
import classNames from 'classnames';
import CSSModules from 'react-css-modules';
import styles from './styles';
import {CreateGrouping, SuggestedGroup} from './option-groups/';

const Suggestions = ({
  displayField,
  options,
  optionGroups,
  visible,
  select,
  selected,
}) => {
  const results = CreateGrouping(options, optionGroups);
  if (results) {
    if (Object.keys(results).length > 0) {
      const applied = classNames('suggestion', 'norm', {'visible': visible});
      return (
        <div styleName={applied}>
          {
            Object.keys(results).map(
              (groupName, index) => (
                <SuggestedGroup
                  group={results[groupName]}
                  select={select}
                  selected={selected}
                  displayField={displayField}
                  key={index}
                />
              )
            )
          }
        </div>
      )
    } else {
      const applied = classNames('norm', {'visible': visible});
      return (
        <div styleName={applied}>
          No results found.
        </div>
      );
    }
  } else {
    const applied = classNames('norm', {'visible': visible});
    return (
      <div styleName={applied}>
        Loading...
      </div>
    )
  }
}

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
}

Suggestions.defaultProps = {
  displayField: 'label',
  visible: false,
}

export default CSSModules(Suggestions, styles, {allowMultiple: true});
