
import React, { Fragment } from "react";
import classnames from "classnames";
import { isEmpty } from "lodash";

import { Element } from "react";
import { HeaderQuickAction } from "./types.es6";

type Props = {
  actions: Array<HeaderQuickAction> | null | undefined;
  label: string;
  onSelect: (idx: number) => void;
};

function QuickActions({
  actions,
  onSelect,
  label
}: Props) {
  if (isEmpty(actions) || !Array.isArray(actions)) {
    return null;
  }

  const DropdownMenuDivider = () => <li className="ds-dropdown__menu-divider" />;

  return <ul className="ds-dropdown__menu">
      <li className="ds-dropdown__menu-header">
        {label}
      </li>
      {actions.map(({
      icon,
      text,
      divider,
      hidden,
      disabled,
      onActionSelect
    }: HeaderQuickAction, index) => <Fragment key={text}>
          <li className={classnames({
        'ds-dropdown__menu-item': true,
        'ds-dropdown__menu-item--hidden': hidden,
        'ds-dropdown__menu-item--disabled': disabled,
        'ds-dropdown__menu-item--no-icon': !icon
      })} onClick={() => {
        if (disabled) {
          return;
        }

        if (onActionSelect) {
          onActionSelect();
        }
        onSelect(index);
      }}>
            <span>{icon}{text}</span>
          </li>
          {divider && <DropdownMenuDivider />}
        </Fragment>)}
    </ul>;
}

QuickActions.defaultProps = {
  actions: null,
  label: ''
};

export default QuickActions;