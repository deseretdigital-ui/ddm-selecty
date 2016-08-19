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
        <ul>
          <li data-level="0">
            <Link styleName="level-I" to="/">
              DDM-Selecty
            </Link>
          </li>
          <li data-level="1">
            <Link styleName="level-I" to="/">
              <b>1</b> Simple Selecty
            </Link>
            <ul>
              <li data-level="1.1">
                <Link styleName="level-II" to="/stateful/">
                  <b>1.1 </b> stateful
                </Link>
              </li>
              <ul>
                <li data-level="1.1">
                  <Link styleName="level-IV" to="/stateful/no-groups/async">
                    <b>-</b> Async & No Group
                  </Link>
                </li>
                <li data-level="1.1">
                  <Link styleName="level-IV" to="/stateful/no-groups/static">
                    <b>-</b> Static & No Group
                  </Link>
                </li>
              </ul>
            </ul>
            <ul>
              <li data-level="1.1">
                <Link styleName="level-II" to="/stateless/">
                  <b>1.2</b> Statless
                </Link>
              </li>
              <ul>
                <li data-level="1.1">
                  <Link styleName="level-IV" to="/stateless/no-groups/async">
                    <b>-</b> Async & No Group
                  </Link>
                </li>
                <li data-level="1.1">
                  <Link styleName="level-IV" to="/stateless/no-groups/static">
                    <b>-</b> Static & No Group
                  </Link>
                </li>
              </ul>
            </ul>
          </li>
        </ul>
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
