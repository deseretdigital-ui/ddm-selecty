import React, { PropTypes } from 'react';
import classNames from 'classnames';
import CSSModules from 'react-css-modules';
import styles from './styles.scss';
import SuggestedGroup from './option-groups/group/';

const Suggestions = ({
  autoHighlight,
  items,
  label,
  options,
  visible,
  onClicked,
}) => {
  const applied = classNames({
    norm: true,
    visible,
    suggestion: Object.keys(options).length > 0,
  });

  if (!options) {
    return <div styleName={applied}>Loading...</div>;
  }

  if (Object.keys(options).length === 0) {
    return <div styleName={applied}>No results found.</div>;
  }

  return (
    <div styleName={applied}>
      {
        Object.keys(options).map(
          (groupName, index) => (
            <SuggestedGroup
              autoHighlight={autoHighlight}
              group={options[groupName]}
              items={items}
              label={label}
              onClicked={onClicked}
              key={index}
            />
          )
        )
      }
    </div>
  );
};

Suggestions.propTypes = {
  autoHighlight: PropTypes.bool.isRequired,
  items: PropTypes.array.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.object.isRequired,
  visible: PropTypes.bool.isRequired,
  onClicked: PropTypes.func.isRequired,
};

export default CSSModules(Suggestions, styles, { allowMultiple: true });
