
import React from "react";
import classnames from "classnames";

import { Node } from "react";

type Props = {
  className?: string;
  children: Node;
  styles: {
    [attr: string]: number | string;
  };
};

/**
 * Panel.
 */
function Panel({
  children,
  styles,
  className
}: Props) {
  return <div className={classnames('ds-panel', className)} style={styles}>
      {children}
    </div>;
}

Panel.defaultProps = {
  children: [],
  styles: {}
};

export default Panel;