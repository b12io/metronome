

import React from "react";
import classnames from "classnames";
import { ChevronRight } from "../../Icons.es6";

import { Node } from "react";

type Props = {
  className?: string | {
    [key: string]: any;
  };
  label: string;
  disabled: boolean;
  showArrow: boolean;
  icon?: Node;
  actionIcon?: Node;
  badge?: string | number;
  active: boolean;
  onClick: () => void;
  onActionClick: () => void;
};

class NavItem extends React.Component<Props> {

  static defaultProps = {
    label: '',
    disabled: false,
    showArrow: false,
    active: false,
    onClick: () => {},
    onActionClick: () => {}
  };

  handleActionClick = (event: React.SyntheticEvent<any>) => {
    event.stopPropagation();

    this.props.onActionClick();
  };

  render() {
    const {
      disabled,
      className,
      icon,
      label,
      showArrow,
      active,
      onClick,
      onActionClick,
      actionIcon,
      badge
    } = this.props;
    const classNames = classnames({
      'ds-nav__item': true,
      'ds-nav__item--disabled': disabled,
      'ds-nav__item--active': active
    }, className);

    return <div className={classNames} onClick={onClick}>
        {icon && <div className="ds-nav__item-icon">
            {icon}
          </div>}
        <div className="ds-nav__item-label">
          {label}
        </div>
        {badge && <div className="ds-nav__item-badge">
            {badge}
          </div>}
        {onActionClick && <div className="ds-nav__item-action" onClick={this.handleActionClick}>
            {actionIcon}
          </div>}
        {showArrow && <div className="ds-nav__item-arrow">
            <ChevronRight />
          </div>}
      </div>;
  }
}

export default NavItem;