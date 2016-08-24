import React, { PropTypes } from 'react';
import SimpleSelectyStateless from '../stateless/';

class SimpleSelecty extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      filteredOptions: [],
      items: [],
      options: [],
      placeholder: 'Stateless Without Groups',
      tabIndex: 1,
      typedValue: '',
      value: '',
      visible: false,
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

  updateFilteredOptions = filtered => this.setState({ filteredOptions: filtered });
  updateSelected = item => {
    const { items } = this.state;
    if (items.indexOf(item) > -1) {
      return;
    }
    this.setState({ items: [items] });
  }
  updateTypedValue = text => this.setState({ typedValue: text });
  updateVisible = value => this.setState({ visible: value });
  updateValue = text => this.setState({ value: text });

  onBlur = () => this.updateVisible(false);
  onFocus = () => this.updateVisible(true);
  onClicked = item => {
    this.updateValue(item.label);
    this.updateTypedValue(item.label);
    this.updateSelected(item);
    this.updateVisible(false);
  }

  onChange = text => {
    this.updateTypedValue(text);
    this.updateValue(text);
    this.updateSelected(null);
  }

  onOptionsFiltered = filtered => {
    this.updateFilteredOptions(filtered);
  }

  onSelected = item => {
    this.updateValue(item.label);
    this.updateSelected(item);
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
};

export default SimpleSelecty;

// import React, { PropTypes } from 'react';
// import {default as css} from './mainStyles'
//

//   constructor(props, context) {
//
//     this.state = {
//       visible: false,
//       input: '',
//       selected: {
//         name: '',
//         value: '',
//       },
//       label: (this.props.label ? this.props.label : 'name'),
//     };
//   }
//

//
//   _focus = () => {
//     this.setState({ visible: true });
//   }
//
//   _blur = () => {
//     this.setState({ visible: false });
//   }
//
//   _change = (e) => {
//     if (this.props.onChange) {
//       this.props.onChange(e.target.value);
//     }
//     this.setState({
//       input: e.target.value,
//       selected: {
//         value: e.target.value,
//       },
//     });
//   }
//
//   _actions = (ev) => {
//     console.log('Actions');
//     const { selected } = this.state;
//     var keyCode = ev.keyCode;
//     var stateUpdate = {};
//   }
//
//   _itemSelected = (item) => {
//     if (this.props.onSelected) {
//       this.props.onSelected(item);
//     }
//     if (this.props.onChange) {
//       this.props.onChange(item[this.state.label]);
//     }
//
//     this.setState({
//       input: item[this.state.label],
//       selected: {
//         name: item[this.state.label],
//         value: item.value,
//       },
//       visible: false,
//     });
//   }
//
//   render() {
//     // let {_actions, _blur, _change, _focus, _itemSelected, _isSelectedItem} = this;
//     // let {label, input, options, visible, selected} = this.state;
//     // let {optgroups} = this.props;
//     // style={css.autocomplete}
//
//     return (
//       <SimpleSelectyStateless />
//     );
//   }
// }
//
//
//
// export default SimpleSelecty;
