import React, { PropTypes } from 'react'
import InputElement from '../input/'
import Suggestions from './suggestions/'
import {KEY_MAP} from '../utils/constants'
// import {default as css} from './mainStyles'

class SimpleSelecty extends React.Component {
  static propTypes = {
    load: PropTypes.func,
    onChange: PropTypes.func,
    onSelected: PropTypes.func,
    options: PropTypes.array,
    placeHolder: PropTypes.string,
    displayField: PropTypes.string,
    optgroups: PropTypes.arrayOf(PropTypes.shape({
      order: PropTypes.number.isRequired,
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired
    }))
  };

  constructor(props, context) {
    super(props, context);
    this._focus = this._focus.bind(this);
    this._blur = this._blur.bind(this);
    this._change = this._change.bind (this);
    this._actions = this._actions.bind (this);
    this._itemSelected = this._itemSelected.bind(this);
    this._resolveAPI = this._resolveAPI.bind(this);

    this.state = {
      visible: false,
      input: '',
      selected: {
        name: '',
        value: ''
      },
      displayField: (this.props.displayField ? this.props.displayField : "name")
    }
  }

  componentWillMount () {
    if(this.props.load) {
      (this.props.load())({}, this._resolveAPI);
    } else {
      let options = (this.props.options ? this.props.options : []);
      this.setState({options});
    }
  }

  shouldComponentUpdate (nextProps, nextState) {
    return (nextProps != this.props) || (nextState != this.state)
  }

  _resolveAPI (res = null) {
    let opts = (this.props.options ? this.props.options : []);
    let proceed = true;
    if (res) {
      if (Array.isArray(res)) {
        for(var i = 0; i < res.length; i++) {
          if(typeof res[i] !== "object"){
            console.warn("Warning: UI-Elements SimpleSelecty has a non-object variable in its array. Unable to use api results.");
            proceed = false;
            break;
          }
        }
        if (proceed) {
          opts = res;
        }
      } else {
        console.warn("Warning: UI-Elements SimpleSelecty requries an array of objects. Unable to use api results.");
      }
    } else {
      console.warn("Warning: UI-Elements SimpleSelecty API request did not return correctly");
    }
    this.setState({options: opts});
  }

  _focus() {
    this.setState({visible: true});
  }

  _blur() {
    this.setState({visible: false});
  }

  _change(e) {
    if(this.props.onChange) {
      this.props.onChange(e.target.value);
    }
    this.setState({
      input: e.target.value,
      selected: {
        value: e.target.value
      }
    });
  }

  _actions(ev) {
    console.log("Actions");
    let {selected} = this.state;
    var keyCode = ev.keyCode;
    var stateUpdate = {};
  }

  _itemSelected (item) {
    if(this.props.onSelected) {
      this.props.onSelected(item);
    }
    if(this.props.onChange) {
      this.props.onChange(item[this.state.displayField]);
    }

    this.setState({
      input: item[this.state.displayField],
      selected: {
        name: item[this.state.displayField],
        value: item.value
      },
      visible: false
    });
  }

  render() {
    let {_actions, _blur, _change, _focus, _itemSelected, _isSelectedItem} = this;
    let {displayField, input, options, visible, selected} = this.state;
    let {optgroups} = this.props;
    // style={css.autocomplete}
    
    return (
      <div onMouseLeave={_blur}>
        <InputElement
          Actions={_actions}
          Change={_change}
          Focus={_focus}
          value={input}
        />
        <Suggestions
          visible={visible}
          options={options}
          searchTerm={input}
          displayField={displayField}
          select={_itemSelected}
          selected={selected}
          optgroups={optgroups}
        />
      </div>
    )
  }
}

export default SimpleSelecty;
