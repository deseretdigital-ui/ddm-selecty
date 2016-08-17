import React from 'react';
import { Link } from 'react-router'
import Collapse, { Panel } from 'rc-collapse';
import CSSModules from 'react-css-modules';
import styles from './styles';
import '../../../../../dist/ddm.selecty.css';

const Root = (props) => {
  return (
    <div styleName='main-container'>
      <div styleName='side-menu'>
        <Link styleName="level-I"   to="/">DDM-Selecty</Link>
        <Link styleName="level-II"  to="/">Simple Selecty</Link>
        <Link styleName="level-III" to="/">No Grouping</Link>
        <Link styleName="level-IV" to="/">Statful</Link>
        <Link styleName="level-V"  to="/stateful/no-groups/static">Static</Link>
        <Link styleName="level-V"  to="/stateful/no-groups/async">Async</Link>
        <Link styleName="level-IV" to="/">Statless</Link>
        <Link styleName="level-V"  to="/stateless/no-groups/static">Static</Link>
        <Link styleName="level-V"  to="/stateless/no-groups/async">Async</Link>
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
