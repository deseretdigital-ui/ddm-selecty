import React from 'react';

const SimpleSelecty = () => (
  <div>
    Stateful implementation
  </div>
);

export default SimpleSelecty;

// import React, { PropTypes } from 'react';
// import {default as css} from './mainStyles'
//
// class SimpleSelecty extends React.Component {
//   constructor(props, context) {
//     super(props, context);
//     this.state = {
//       visible: false,
//       input: '',
//       selected: {
//         name: '',
//         value: '',
//       },
//       displayField: (this.props.displayField ? this.props.displayField : 'name'),
//     };
//   }
//
//   componentWillMount() {
//     if (this.props.load) {
//       (this.props.load())({}, this._resolveAPI);
//     } else {
//       const options = (this.props.options ? this.props.options : []);
//       this.setState({ options });
//     }
//   }
//
//   _resolveAPI = (res = null) => {
//     let opts = (this.props.options ? this.props.options : []);
//     let proceed = true;
//     if (res) {
//       if (Array.isArray(res)) {
//         for (var i = 0; i < res.length; i++) {
//           if (typeof res[i] !== 'object') {
//             proceed = false;
//             break;
//           }
//         }
//         if (proceed) {
//           opts = res;
//         }
//       } else {
//         console.warn('Warning: UI-Elements SimpleSelecty requries an array of objects.');
//       }
//     } else {
//       console.warn('Warning: UI-Elements SimpleSelecty API request did not return correctly');
//     }
//     this.setState({ options: opts });
//   }
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
//       this.props.onChange(item[this.state.displayField]);
//     }
//
//     this.setState({
//       input: item[this.state.displayField],
//       selected: {
//         name: item[this.state.displayField],
//         value: item.value,
//       },
//       visible: false,
//     });
//   }
//
//   render() {
//     // let {_actions, _blur, _change, _focus, _itemSelected, _isSelectedItem} = this;
//     // let {displayField, input, options, visible, selected} = this.state;
//     // let {optgroups} = this.props;
//     // style={css.autocomplete}
//
//     return (
//       <SimpleSelectyStateless />
//     );
//   }
// }
//
// SimpleSelecty.propTypes = {
//   load: PropTypes.func,
//   onChange: PropTypes.func,
//   onSelected: PropTypes.func,
//   options: PropTypes.array,
//   placeHolder: PropTypes.string,
//   displayField: PropTypes.string,
//   optgroups: PropTypes.arrayOf(PropTypes.shape({
//     order: PropTypes.number.isRequired,
//     value: PropTypes.string.isRequired,
//     label: PropTypes.string.isRequired,
//   })),
// };
//
// export default SimpleSelecty;
