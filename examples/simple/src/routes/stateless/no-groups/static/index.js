import 'babel-polyfill';
import React from 'react';
import { connect } from 'react-redux';
import { SimpleSelectyStateless } from '../../../../../../../dist/ddm.selecty.js';
import { updateValue, updateVisible } from './actions';

const StatlessNoGroupStatic = ({
  defaultOptions,
  defaultOptGroups,
  selected,
  updateValue,
  updateVisible,
  value,
  visible
}) => {
  const _onSelected = (item, version) => {
    const newObj = {};
    newObj[`${version}SelectedItem`] = item;
    // this.setState({selected: Object.assign ({}, this.state.selected, newObj)}, this.updateProps);
  };
  return (
    <div>
      Default Options WITHOUT Groups:
      <SimpleSelectyStateless
        onValueChange={text => updateValue(text)}
        onSelected={(selected) => {console.log('Item Selected', selected);}}
        selected={selected}
        options={defaultOptions}
        placeholder={'Stateless Without Groups'}
        focus={() => updateVisible(true)}
        blur={() => updateVisible(false)}
        value={value}
        visible={visible}
      />
    </div>
  );
}

function mapStateToProps (state, ownProps) {
  return {...state.global, ...state.SLNGStatic};
};

export default connect(mapStateToProps, {updateValue, updateVisible})(StatlessNoGroupStatic)
