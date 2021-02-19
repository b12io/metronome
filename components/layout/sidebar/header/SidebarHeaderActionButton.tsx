
import React from "react";
import classnames from "classnames";
import { Node } from "react";

type Props = {
  dropdown?: boolean;
  icon?: Node | string;
  onClick: (arg0: React.SyntheticEvent<HTMLDivElement>) => void;
};

function SidebarHeaderActionButton({
  dropdown,
  icon,
  onClick
}: Props) {
  return <button type="button" onClick={onClick} className={classnames({
    'ds-dropdown__toggle': dropdown,
    'ds-dropdown__toggle--no-padding': dropdown && typeof icon === 'string'
  })}>
      {icon}
    </button>;
}

SidebarHeaderActionButton.defaultProps = {
  dropdown: false,
  icon: ''
};

export default SidebarHeaderActionButton;