

import React from "react";

type Props = {
  label: string;
};

function DropdownItemHeader({
  label
}: Props) {
  return <li className="ds-dropdown__menu-header">
      {label}
    </li>;
}

export default DropdownItemHeader;