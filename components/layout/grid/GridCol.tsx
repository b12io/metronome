
import React from "react";
import classnames from "classnames";

import { Node } from "react";

type Props = {
  className?: string | {
    [key: string]: any;
  };
  children?: Node;
  col: string;
  align: string;
};

function GridCol({
  className,
  children,
  col,
  align
}: Props) {
  const classes = classnames('ds-grid__col', `ds-grid__col--col-${col}`, `ds-grid__col--align-${align}`, className);

  return <div className={classes}>
      {children}
    </div>;
}

GridCol.defaultProps = {
  col: 'auto', // 1 | 2 | 3 | 4 | 5 | 6
  align: 'center' // start | end
};

export default GridCol;