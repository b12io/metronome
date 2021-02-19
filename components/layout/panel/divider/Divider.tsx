
import React from "react";
import classnames from "classnames";

type Props = {
  className?: string | Object;
};

function Divider(props: Props) {
  const {
    className
  } = props;
  return <div className={classnames({
    'ds-panel__divider': true
  }, className)} />;
}

export default Divider;