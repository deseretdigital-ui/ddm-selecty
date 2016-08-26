import 'babel-polyfill';

import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
chai.use(chaiEnzyme());

// If you want to skip files matching a certain pattern use the following
// const context = require.context('../../app', true, /^^((?!(app|reducers|rutes)).)*\.js$/);
const context = require.context('../src', true, /^.*\.js$/);
context.keys().forEach(context);
