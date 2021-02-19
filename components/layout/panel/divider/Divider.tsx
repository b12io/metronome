
import React from "react";
import classnames from "classnames";

type Props = {
  className?: string | {
    [key: string]: any;
  };
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