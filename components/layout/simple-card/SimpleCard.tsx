
import * as React from "react";
import classnames from "classnames";

type Props = {
  align: "left" | "center" | "right";
  className?: string | {
    [key: string]: any;
  };
  children: React.ReactNode;
};

function SimpleCard({
  align,
  className,
  children
}: Props) {
  const classNames = classnames('ds-simple-card', `ds-simple-card--align-${align}`, className);
  return <div className={classNames}>
      {children}
    </div>;
}

SimpleCard.defaultProps = {
  align: 'left'
};

export default SimpleCard;