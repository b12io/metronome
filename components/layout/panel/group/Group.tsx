
import React from "react";
import classnames from "classnames";
import { Element, Node } from "react";

type Props = {
  children: Node;
  icon: Element<any> | null | undefined;
  label: string | null | undefined;
};

/**
 * Form group
 */
function Group({
  label,
  children,
  icon
}: Props) {
  return <div className="ds-form-group">
      {(label || icon) && <div className={classnames({
      'ds-control-label': true,
      'ds-control-label--with-icon': icon && label,
      'ds-control-label--icon-only': icon && !label
    })}>
          {label}
          {icon}
        </div>}
      {children}
    </div>;
}

Group.defaultProps = {
  icon: null,
  label: null
};

export default Group;