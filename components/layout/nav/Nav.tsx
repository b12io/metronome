

import * as React from "react";
import classnames from "classnames";

import NavItem from "./NavItem.es6";

type NavItemType = React.ReactElement<typeof NavItem>;

type Props = {
  bordered: boolean;
  className?: string | Object;
  children: React.ChildrenArray<NavItemType> | NavItemType;
};

class Nav extends React.Component<Props> {

  static defaultProps = {
    bordered: false,
    className: ''
  };

  render() {
    return <div className={classnames({
      'ds-nav': true,
      'ds-nav--bordered': this.props.bordered
    }, this.props.className)}>
        {this.props.children}
      </div>;
  }
}

export default Nav;