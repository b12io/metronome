
import React from "react";
import classnames from "classnames";

import { Node } from "react";

type Props = {
  className?: string | Object;
  children?: Node;
  justify: string;
  align: string;
  direction: string;
  nowrap?: boolean;
};

/**
 * Grid.
 */
function Grid({
  className,
  children,
  justify,
  align,
  direction,
  nowrap
}: Props) {
  const classes = classnames('ds-grid', `ds-grid--justify-${justify}`, `ds-grid--align-${align}`, `ds-grid--direction-${direction}`, { 'ds-grid--nowrap': nowrap }, className);

  return <div className={classes}>
      {children}
    </div>;
}

Grid.defaultProps = {
  justify: 'between', // start | center | end | around
  align: 'center', // start | end | stretch
  direction: 'row' // column
};

export default Grid;