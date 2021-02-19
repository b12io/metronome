
import React from "react";
import { Node } from "react";
import classnames from "classnames";

type Props = {
  children: Node;
  alignRight?: boolean;
  alignLeft?: boolean;
};

function SidebarActions({
  children,
  alignRight,
  alignLeft
}: Props) {
  return <div className={classnames({
    'ds-sidebar__actions': true,
    'ds-sidebar__actions--right': alignRight,
    'ds-sidebar__actions--left': alignLeft
  })}>
      {children}
    </div>;
}

SidebarActions.defaultProps = {
  children: []
};

export default SidebarActions;