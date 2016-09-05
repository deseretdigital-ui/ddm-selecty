import React, { PropTypes } from 'react';
import SimpleSelectyStateless from '../stateless/';

class SimpleSelecty extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      loading: (this.props.load !== null),
      filteredOptions: [],
      item: this.props.item,
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

  onClicked = clickedItem => {
    this.setState({
      item: clickedItem,
      typedValue: this.props.optLabel ? clickedItem[this.props.optLabel] : clickedItem.label,
      value: clickedItem[this.props.optLabel],
      visible: false,
    }, () => {
      if (this.props.onClicked) {
        this.props.onClicked(clickedItem);
      }
    });
  }

  onChange = text => {
    const value = this.props.optValue ? this.props.optValue : 'id';
    const label = this.props.optLabel ? this.props.optLabel : 'label';

    const cond = {};
    cond.loading = false;

    // Reset the item selected to null
    const selected = {};
    selected[value] = null;
    selected[label] = null;

    if (this.props.lazyLoad) {
      if (text === '') {
        cond.options = [];
      } else {
        cond.loading = true;
      }
    }

    this.setState({
      typedValue: text,
      value: text,
      item: selected,
      ...cond,
    }, () => {
      if (this.props.lazyLoad && text !== '') {
        (this.props.lazyLoad())(this.state.typedValue, this.api);
      }

      if (this.props.onChange) {
        this.props.onChange(text);
      }
    });
  }

  onFiltered = filtered => {
    this.setState({ filteredOptions: filtered }, () => {
      if (this.props.onFiltered) {
        this.props.onFiltered(filtered);
      }
    });
  }

  onSelected = selectedItem => {
    const { item } = this.state;
    const label = this.props.optLabel ? this.props.optLabel : 'label';
    const value = this.props.optValue ? this.props.optValue : 'id';

    if (item[label] === selectedItem[label] && item[value] === selectedItem[value]) {
      return;
    }

    this.setState({
      item: selectedItem,
      value: selectedItem[label],
    }, () => {
      if (this.props.onSelected) {
        this.props.onSelected(selectedItem);
      }
    });
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
      } else if (typeof res === 'object') {
        opts = [res];
      } else {
        console.warn('Warning: UI-Elements SimpleSelecty requries an array of objects.');
      }
    } else {
      console.warn('Warning: UI-Elements SimpleSelecty API request did not return correctly');
    }
    this.setState({ loading: false, options: opts });
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
        item={this.state.item}
        lazyLoading={this.props.lazyLoad !== null}
        limit={this.props.limit}
        loading={this.state.loading}
        optLabel={this.props.optLabel}
        optValue={this.props.optValue}
        optionGroups={this.props.optionGroups}
        name={this.props.name}
        noResults={this.props.noResults}
        onBlur={this.onBlur}
        onClicked={this.onClicked}
        onChange={this.onChange}
        onFilter={this.props.onFilter}
        onFocus={this.onFocus}
        onKeyDown={this.props.onKeyDown}
        onFiltered={this.onFiltered}
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
  item: PropTypes.object,
  lazyLoad: PropTypes.func,
  limit: PropTypes.number,
  load: PropTypes.func,
  optLabel: PropTypes.string,
  optValue: PropTypes.string,
  options: PropTypes.array,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onClicked: PropTypes.func,
  onFilter: PropTypes.func,
  onFocus: PropTypes.func,
  onKeyDown: PropTypes.func,
  onSelected: PropTypes.func,
  onFiltered: PropTypes.func,
  optionGroups: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.shape({
        order: PropTypes.number.isRequired,
        key: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        limit: PropTypes.oneOfType([
          PropTypes.number,
          PropTypes.string,
        ]),
      })
    ),
    PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        limit: PropTypes.oneOfType([
          PropTypes.number,
          PropTypes.string,
        ]),
      })
    ),
  ]),
  name: PropTypes.string,
  noResults: PropTypes.shape({
    show: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
  }),
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
  item: { id: null, label: null },
  lazyLoad: null,
  limit: null,
  load: null,
  onBlur: null,
  onChange: null,
  onClicked: null,
  onFilter: null,
  onFocus: null,
  onKeyDown: null,
  onFiltered: null,
  options: [],
  optionGroups: [],
  optLabel: 'label',
  optValue: 'id',
  onSelected: null,
  name: 'selecty',
  noResults: { show: true, label: 'No results found.' },
  placeholder: '',
  required: false,
  sortable: false,
  tabIndex: 1,
  typedValue: '',
  value: '',
  visible: false,
};


export default SimpleSelecty;
