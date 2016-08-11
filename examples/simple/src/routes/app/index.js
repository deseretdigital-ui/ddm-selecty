import React from 'react';
import { Link } from 'react-router'
import CSSModules from 'react-css-modules';
import styles from './styles';
import {SimpleSelectyStateless} from '../../../../../dist/ddm.selecty.js';
import '../../../../../dist/ddm.selecty.css';

const Root = (props) => {
  return (
    <div styleName='main-container'>
      <div styleName='side-menu'>
        <Link styleName="parent" to="/">DDM-Selecty</Link>
        <Link styleName="child" to="/">Simple Selecty</Link>
        <Link styleName="grandchild" to="/">Statless Version</Link>
        <Link styleName="great-grandchild" to="/stateless/no-groups/static">Static with No Groups</Link>
      </div>
      <div styleName='content-window'>
        {React.Children.toArray(props.children)}
      </div>
    </div>
  );
}

Root.propTypes = {
  children: React.PropTypes.node,
};

export default CSSModules(Root, styles);
