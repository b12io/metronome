

import * as React from "react";
import classnames from "classnames";
import QuickActions from "../header/QuickActions.es6";

import useClickOutside from "../../../lib/useClickOutside.es6";

import { HeaderQuickAction } from "../header/types.es6";

type Props = {
  hideOverflow: boolean;
  text: string;
  className?: string;
  actionIcon?: React.ReactElement | string;
  onAction?: () => void;
  quickActions?: Array<HeaderQuickAction>;
  quickActionsLabel?: string;
  onQuickActionSelected?: (index: number) => void;
  quickDialog?: React.ReactElement;
};

function SidebarBodyHeader({
  className,
  hideOverflow,
  text,
  actionIcon,
  onAction,
  quickActions,
  quickActionsLabel,
  onQuickActionSelected,
  quickDialog
}: Props) {
  const actionsAvailable = Array.isArray(quickActions) && quickActions.length > 0;
  const actionsRef = React.useRef(null);
  const {
    isVisible: actionsVisible,
    setIsVisible: setActionsVisible
  } = useClickOutside(actionsRef);

  return <div className="ds-sidebar__title-container">
      <h1 className={classnames('ds-sidebar__title', className, {
      'ds-sidebar__title--overflow-hidden': hideOverflow
    })}>
        {text}
      </h1>

      {quickDialog}

      <div className="ds-sidebar__title-icon">
        <span onClick={() => {
        if (typeof onAction === 'function') {
          onAction();
        }

        if (actionsAvailable) {
          setActionsVisible(!actionsVisible);
        }
      }}>
          {actionIcon}
        </span>

        {actionsAvailable && <div ref={actionsRef} className={classnames('ds-dropdown ds-dropdown--right', {
        'ds-dropdown--menu-visible': actionsVisible
      })}>
            <QuickActions actions={quickActions} label={quickActionsLabel} onSelect={idx => {
          if (typeof onQuickActionSelected === 'function') {
            onQuickActionSelected(idx);
            setActionsVisible(false);
          }
        }} />
          </div>}
      </div>
    </div>;
}

SidebarBodyHeader.defaultProps = {
  hideOverflow: false
};

export default SidebarBodyHeader;