import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import classNames from 'classnames';
import styles from './styles.scss';

export class SuggestedItem extends React.Component {
  componentDidUpdate(prevProps) {
    const {
      highlight, optLabel, optValue, selected,
    } = this.props;
    // only scroll into view if the active item changed last render
    if (highlight && (selected[optLabel] !== prevProps.selected[optLabel]
          || selected[optValue] !== prevProps.selected[optValue])) {
      this.props.scrollIntoView(this.refs.suggestedActiveItem);
    }
  }

  render() {
    const {
      highlight,
      item,
      onClicked,
      optLabel,
      selected,
    } = this.props;
    const ref = highlight ? 'suggestedActiveItem' : 'nonActiveItem';

    const applied = classNames({
      item: selected.optLabel === item.optLabel,
      selected: highlight,
    });

    return (
      <div
        styleName={applied}
        onClick={() => onClicked(item)}
        ref={ref}
      >
        {item[optLabel]}
      </div>
    );
  }
}

SuggestedItem.propTypes = {
  highlight: PropTypes.bool.isRequired,
  item: PropTypes.object.isRequired,
  optLabel: PropTypes.string.isRequired,
  optValue: PropTypes.string.isRequired,
  onClicked: PropTypes.func.isRequired,
  selected: PropTypes.object.isRequired,
  scrollIntoView: PropTypes.func.isRequired,
};

export default CSSModules(SuggestedItem, styles, { allowMultiple: true });
