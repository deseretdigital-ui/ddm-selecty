import React, { PropTypes } from 'react';
import SimpleSelectyStateless from '../stateless/';

class SimpleSelecty extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      filteredOptions: [],
      items: this.props.items ? this.props.items : [{ id: null, label: null }],
      options: this.props.options ? this.props.options : [],
      placeholder: this.props.placeHolder ? this.props.placeHolder : '',
      tabIndex: this.props.tabIndex ? this.props.tabIndex : 1,
      typedValue: '',
      value: this.props.value ? this.props.value : '',
      visible: this.props.visible ? this.props.visible : false,
    };
  }

  componentWillMount() {
    if (this.props.load) {
      (this.props.load())({}, this.api);
    } else {
      const options = (this.props.options ? this.props.options : []);
      this.setState({ options });
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

  onBlur = () => this.setState({ visible: false });
  onFocus = () => this.setState({ visible: true });

  onClicked = item => {
    this.setState({
      items: [item],
      typedValue: item.label,
      value: item.label,
      visible: false,
    }, () => {
      this.updateSelected(item);
    });
  }

  onChange = text => {
    this.setState({
      typedValue: text,
      value: text,
      items: [{ id: null, label: null }],
    });
  }

  onOptionsFiltered = filtered => {
    this.setState({ filteredOptions: filtered });
  }

  onSelected = item => {
    const { items } = this.state;
    if (items.indexOf(item) > -1) {
      return;
    }

    this.setState({
      items: [item],
      value: item.label,
    });
  }

  render() {
    return (
      <SimpleSelectyStateless
        onBlur={this.onBlur}
        onFocus={this.onFocus}
        onClicked={this.onClicked}
        onChange={this.onChange}
        onOptionsFiltered={this.onOptionsFiltered}
        onSelected={this.onSelected}
        filteredOptions={this.state.filteredOptions}
        items={this.state.items}
        options={this.state.options}
        placeholder={this.state.placeholder}
        tabIndex={this.state.tabIndex}
        typedValue={this.state.typedValue}
        value={this.state.value}
        visible={this.state.visible}
      />
    );
  }
}

SimpleSelecty.propTypes = {
  items: PropTypes.array,
  load: PropTypes.func,
  options: PropTypes.array,
  placeHolder: PropTypes.string,
  onChange: PropTypes.func,
  onSelected: PropTypes.func,
  optgroups: PropTypes.arrayOf(PropTypes.shape({
    order: PropTypes.number.isRequired,
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  })),
  tabIndex: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  value: PropTypes.string,
  visible: PropTypes.bool,
};

export default SimpleSelecty;
