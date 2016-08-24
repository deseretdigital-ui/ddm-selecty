import React from 'react';
import 'whatwg-fetch';
import { connect } from 'react-redux';
import { SimpleSelecty } from '../../../../../../../dist/ddm.selecty.js';
// import { } from './actions';

const StatfulNoGroupStatic = ({
  defaultOptions,
}) => (
  <div>
    Stateful Static Data WITHOUT Groups:
    <SimpleSelecty
      options={defaultOptions}
    />
    <div style={{width: '100%', display: 'inline-block', marginTop: '20px'}}>
      The below SimpleSelecty component is an exact duplicate of the one above
      but is included to demonstrate the responsive nature of SimpleSelecty.
      Below's version is wrapped in a div with a width of 500px and SimpleSelecty
      will fill up 100% of its container's width.
      <div style={{width: '500px', marginTop: '20px'}}>
        <SimpleSelecty
          options={defaultOptions}
        />
      </div>
    </div>
  </div>
);

function mapStateToProps (state, ownProps) {
  return {...state.global, ...state.SFNGStatic};
}

export default connect(mapStateToProps, {})(StatfulNoGroupStatic)
