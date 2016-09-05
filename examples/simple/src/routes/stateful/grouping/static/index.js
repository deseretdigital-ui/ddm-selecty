import React from 'react';
import 'whatwg-fetch';
import { connect } from 'react-redux';
import { SimpleSelecty } from '../../../../../../../dist/ddm.selecty.js';
// import { } from './actions';

const StatfulNoGroupStatic = ({
  alternativeOptions,
  alternativeOptGroups,
  defaultOptions,
  defaultOptGroups,
}) => (
  <div>
    Stateful Static WITH Groupings:
    <div style={{'zIndex':'100', 'position':'relative'}}>
      <SimpleSelecty
        options={defaultOptions}
        optionGroups={defaultOptGroups}
      />
    </div>
    <div style={{width: '100%', display: 'inline-block', marginTop: '20px'}}>
      <SimpleSelecty
        options={alternativeOptions}
        optionGroups={alternativeOptGroups}
      />
    </div>
  </div>
);

function mapStateToProps (state, ownProps) {
  return {...state.global};
}

export default connect(mapStateToProps, {})(StatfulNoGroupStatic)
