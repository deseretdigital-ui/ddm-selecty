import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import CSSModules from 'react-css-modules';
import styles from './styles.scss';
import SuggestedGroup from './option-groups/group/';

export class Suggestions extends React.Component {
  scrollIntoView = (element) => {
    const container = ReactDOM.findDOMNode(this.refs.dropdownSuggestions);
    const containerDimension = container.getBoundingClientRect();
    const node = ReactDOM.findDOMNode(element);
    const itemDimension = node.getBoundingClientRect();
    const itemHeight = itemDimension.bottom - itemDimension.top;

    if (itemDimension.bottom > containerDimension.bottom) {
      container.scrollTop += itemDimension.bottom - containerDimension.bottom;
    } else if (itemDimension.top < containerDimension.top) {
      container.scrollTop -= containerDimension.top - itemDimension.top;
    }
  }

  render() {
    const {
      autoHighlight,
      autoSuggest,
      selected,
      limit,
      loading,
      optLabel,
      optValue,
      noResults,
      options,
      visible,
      value,
      onClicked,
    } = this.props;

    const baseStyles = {
      norm: true,
      visible,
      suggestion: Object.keys(options).length > 0,
    };

    if (!autoSuggest && value.length === 0) {
      baseStyles.visible = false;
    }

    if (loading) {
      const applied = classNames(baseStyles);
      return <div styleName={applied}>Loading...</div>;
    }

    if (Object.keys(options).length === 1 && options[Object.keys(options)[0]].items.length === 0) {
      if (!noResults.show) {
        return <noscript />;
      }
      baseStyles.empty = true;
      const applied = classNames(baseStyles);

      return <div styleName={applied}>{noResults.label}</div>;
    }
    const applied = classNames(baseStyles);

    return (
      <div styleName={applied} ref="dropdownSuggestions">
        {
          Object.keys(options).map(
            (groupName, index) => (
              <SuggestedGroup
                autoHighlight={autoHighlight}
                group={options[groupName]}
                limit={limit}
                optLabel={optLabel}
                optValue={optValue}
                onClicked={onClicked}
                key={index}
                selected={selected}
                scrollIntoView={this.scrollIntoView}
              />
            )
          )
        }
      </div>
    );
  }
}

Suggestions.propTypes = {
  autoHighlight: PropTypes.bool.isRequired,
  autoSuggest: PropTypes.bool.isRequired,
  selected: PropTypes.object.isRequired,
  limit: PropTypes.number,
  loading: PropTypes.bool,
  optLabel: PropTypes.string.isRequired,
  optValue: PropTypes.string.isRequired,
  noResults: PropTypes.shape({
    show: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
  }),
  options: PropTypes.object.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  visible: PropTypes.bool.isRequired,
  onClicked: PropTypes.func.isRequired,
};

export default CSSModules(Suggestions, styles, { allowMultiple: true });
