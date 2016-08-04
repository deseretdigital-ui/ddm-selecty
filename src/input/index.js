import React, { PropTypes } from 'react'
// import {default as css} from './selectStyles'
import styles from './styles'
import CSSModules from 'react-css-modules';

class InputElement extends React.Component {
  static propTypes = {
    Actions: PropTypes.func.isRequired,
    Change: PropTypes.func.isRequired,
    Focus: PropTypes.func.isRequired,
    value: PropTypes.string,
    placeHolder: PropTypes.string
  };

  constructor(props, context) {
    super(props, context);
    // this.state = {
    //   value: this.props.value
    // }
  }

  // componentWillReceiveProps (nextProps) {
  //   if(this.props.value != nextProps.value) {
  //     console.log("HERE", nextProps)
  //     this.setState({value: nextProps.value})
  //   }
  // }
  //
  // shouldComponentUpdate (nextProps, nextState) {
  //   return (nextState != this.state);
  // }

  render() {
    let {Actions, Change, Focus, placeHolder, className} = this.props;
    // style={css.inputStyles}

    return (
      <div styleName='input'>
        <input
          type="text"
          name="selectize"
          autoComplete="off"
          placeholder={placeHolder}
          value={this.props.value}
          onKeyDown={Actions}
          onChange={Change}
          onClick={Focus}
        />
       </div>
    );
  }
}

export default CSSModules(InputElement, styles);
