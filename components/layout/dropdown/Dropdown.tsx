

import React, { Node, ElementRef, Fragment } from "react";
import classnames from "classnames";

import DropdownItem from "./DropdownItem.es6";
import DropdownItemHeader from "./DropdownItemHeader.es6";
import DropdownItemDivider from "./DropdownItemDivider.es6";

type State = {
  isMenuVisible: boolean;
};

type Props = {
  className?: string | Object;
  simple?: boolean;
  isMenuVisible: boolean;
  toggle: string | Node;
  toggleIcon?: Node;
  menuOnRightSide?: boolean;
  children: Node;
  quickActions?: Node;
};

type MouseOrTouchEvent = MouseEvent | TouchEvent;

type ElRef = ElementRef<any>;

class Dropdown extends React.Component<Props, State> {

  state = {
    isMenuVisible: this.props.isMenuVisible
  };

  static defaultProps = {
    isMenuVisible: false,
    toggle: ''
  };

  toggleRef: ElRef = React.createRef();

  componentDidMount() {
    document.addEventListener('click', this.onDocumentClick, false);
    document.addEventListener('touchend', this.onDocumentClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.onDocumentClick, false);
    document.removeEventListener('touchend', this.onDocumentClick, false);
  }

  onDocumentClick = (event: MouseOrTouchEvent) => {
    if (!this.toggleRef.current.contains(event.target) && this.state.isMenuVisible) {
      this.setState({ isMenuVisible: false });
    }
  };

  onToggle = (event: React.SyntheticEvent<HTMLDivElement>) => {
    event && event.stopPropagation();
    this.setState(prevState => ({
      isMenuVisible: !prevState.isMenuVisible
    }));
  };

  onCloseMenu = () => {
    this.setState({ isMenuVisible: false });
  };

  render() {
    const {
      isMenuVisible
    } = this.state;
    const {
      className,
      simple,
      toggle,
      toggleIcon,
      menuOnRightSide,
      quickActions,
      children
    } = this.props;
    const isToggleObject = !(typeof toggle === 'string');

    let hasSpecialContent = false;

    React.Children.forEach(children, child => {
      if (child && child.type !== DropdownItem && child.type !== DropdownItemHeader && child.type !== DropdownItemDivider && child.type !== Fragment) {
        hasSpecialContent = true;
      }
    });

    const childrenWithCallback = React.Children.toArray(children).map(child => React.cloneElement(child, {
      onCloseMenu: this.onCloseMenu
    }));

    return <div className={classnames({
      'ds-dropdown': true,
      'ds-dropdown--simple': simple,
      'ds-dropdown--open-at-bottom': true,
      'ds-dropdown--right': menuOnRightSide,
      'ds-dropdown--menu-visible': isMenuVisible,
      'ds-dropdown--has-quick-action': quickActions
    }, className)} ref={this.toggleRef}>
        <div className={classnames({
        'ds-dropdown__toggle': true,
        'ds-dropdown__toggle--has-button': isToggleObject
      })} onClick={this.onToggle}>
          {!isToggleObject && toggleIcon}
          {toggle}
        </div>
        {hasSpecialContent && <div className="ds-dropdown__menu ds-dropdown__menu--with-content">
            {children}
            <div className="ds-dropdown__menu-actions">
              {quickActions}
            </div>
          </div>}
        {!hasSpecialContent && <ul className="ds-dropdown__menu">
            {childrenWithCallback}
          </ul>}
      </div>;
  }
}

export default Dropdown;