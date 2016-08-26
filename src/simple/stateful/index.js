import React, { PropTypes } from 'react';
import SimpleSelectyStateless from '../stateless/';

class SimpleSelecty extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      filteredOptions: [],
      items: this.props.items,
      options: this.props.options,
      placeholder: this.props.placeholder,
      tabIndex: this.props.tabIndex,
      typedValue: '',
      value: this.props.value,
      visible: this.props.visible,
    };
  }

  componentWillMount() {
    if (this.props.load) {
      (this.props.load())({}, this.api);
    }
  }

  api = (res = null) => {
    let opts = (this.props.options ? this.props.options : []);
    let proceed = true;
    if (res) {
      if (Array.isArray(res)) {
        for (var i = 0; i < res.length; i++) {
          if (typeof res[i] !== 'object') {
            proceed = false;
            break;
          }
        }
        if (proceed) {
          opts = res;
        }
      } else {
        console.warn('Warning: UI-Elements SimpleSelecty requries an array of objects.');
      }
    } else {
      console.warn('Warning: UI-Elements SimpleSelecty API request did not return correctly');
    }
    this.setState({ options: opts });
  }

  onBlur = () => {
    this.setState({ visible: false }, () => {
      if (this.props.onBlur) {
        this.props.onBlur();
      }
    });
  }
  onFocus = () => {
    this.setState({ visible: true }, () => {
      if (this.props.onFocus) {
        this.props.onFocus();
      }
    });
  }

  onClicked = item => {
    this.setState({
      items: [item],
      typedValue: this.props.optLabel ? item[this.props.optLabel] : item.label,
      value: item[this.props.optLabel],
      visible: false,
    }, () => {
      if (this.props.onClicked) {
        this.props.onClicked(item);
      }
    });
  }

  onChange = text => {
    const selected = {}
    const value = this.props.optValue ? this.props.optValue : 'id';
    const label = this.props.optLabel ? this.props.optLabel : 'label';
    selected[value] = null;
    selected[label] = null;

    this.setState({
      typedValue: text,
      value: text,
      items: [selected],
    }, () => {
      if (this.props.onChange) {
        this.props.onClicked(text);
      }
    });
  }

  onOptionsFiltered = filtered => {
    this.setState({ filteredOptions: filtered }, () => {
      if (this.props.onOptionsFiltered) {
        this.props.onOptionsFiltered(filtered);
      }
    });
  }

  onSelected = item => {
    const { items } = this.state;
    if (items.indexOf(item) > -1) {
      return;
    }

    this.setState({
      items: [item],
      value: this.props.optLabel ? item[this.props.optLabel] : item.label,
    }, () => {
      if (this.props.onSelected) {
        this.props.onSelected(item);
      }
    });
  }

  render() {
    return (
      <SimpleSelectyStateless
        autofocus={this.props.autofocus}
        autoHighlight={this.props.autoHighlight}
        autoSuggest={this.props.autoSuggest}
        disabled={this.props.disabled}
        filterable={this.props.filterable}
        filteredOptions={this.state.filteredOptions}
        items={this.state.items}
        optLabel={this.props.optLabel}
        optValue={this.props.optValue}
        name={this.props.name}
        noResults={this.props.noResults}
        onBlur={this.onBlur}
        onClicked={this.onClicked}
        onChange={this.onChange}
        onFilter={this.props.onFilter}
        onFocus={this.onFocus}
        onKeyDown={this.props.onKeyDown}
        onOptionsFiltered={this.onOptionsFiltered}
        onSelected={this.onSelected}
        options={this.state.options}
        placeholder={this.state.placeholder}
        required={this.props.required}
        sortable={this.props.sortable}
        tabIndex={this.state.tabIndex}
        typedValue={this.state.typedValue}
        value={this.state.value}
        visible={this.state.visible}
      />
    );
  }
}

SimpleSelecty.propTypes = {
  autofocus: PropTypes.bool,
  autoHighlight: PropTypes.bool,
  autoSuggest: PropTypes.bool,
  disabled: PropTypes.bool,
  filterable: PropTypes.bool,
  items: PropTypes.array,
  optLabel: PropTypes.string,
  optValue: PropTypes.string,
  load: PropTypes.func,
  name: PropTypes.string,
  noResults: PropTypes.shape({
    show: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
  }),
  options: PropTypes.array,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onClicked: PropTypes.func,
  onFilter: PropTypes.func,
  onFocus: PropTypes.func,
  onKeyDown: PropTypes.func,
  onSelected: PropTypes.func,
  onOptionsFiltered: PropTypes.func,
  optgroups: PropTypes.arrayOf(PropTypes.shape({
    order: PropTypes.number.isRequired,
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  })),
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  sortable: PropTypes.bool,
  tabIndex: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  value: PropTypes.string,
  visible: PropTypes.bool,
};

SimpleSelecty.defaultProps = {
  autofocus: false,
  autoHighlight: false,
  autoSuggest: true,
  disabled: false,
  filterable: true,
  filteredOptions: [],
  items: [{ id: null, label: null }],
  optLabel: 'label',
  optValue: 'id',
  name: 'selecty',
  noResults: { show: true, label: 'No results found.' },
  options: [],
  optionGroups: [],
  placeholder: '',
  required: false,
  sortable: false,
  tabIndex: 1,
  typedValue: '',
  value: '',
  visible: false,
  onBlur: null,
  onChange: null,
  onClicked: null,
  onFilter: null,
  onFocus: null,
  onKeyDown: null,
  onOptionsFiltered: null,
  onSelected: null,
};


export default SimpleSelecty;
