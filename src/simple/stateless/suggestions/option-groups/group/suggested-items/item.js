import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import classNames from 'classnames';
import styles from './styles.scss';

export class SuggestedItem extends React.Component {
  componentDidUpdate(prevProps) {
    const { highlight, optLabel, optValue, selected } = this.props;
    // only scroll into view if the active item changed last render
    if (highlight && (selected[optLabel] !== prevProps.selected[optLabel] ||
          selected[optValue] !== prevProps.selected[optValue])) {
      this.props.scrollIntoView(this.refs.suggestedActiveItem);
    }
  }

  render() {
    const {
      highlight,
      item,
      onClicked,
      optLabel,
      optValue,
      selected,
    } = this.props;
    const hover = (selected[optLabel] === null && selected[optValue] === null);
    let ref = 'nonActiveItem';
    if (highlight) {
      ref = 'suggestedActiveItem';
    }
    const applied = classNames({
      item: hover,
      itemNoHover: !hover,
      selected: highlight,
    });

    return (
      <div className={applied} styleName={applied} onClick={() => onClicked(item)} ref={ref}>
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
