
import * as React from "react";
import TableCell from "./TableCell.es6";
import classnames from "classnames";

type TableCellType = React.ReactElement<typeof TableCell>;

type Props = {
  isInTableHeader?: boolean;
  noHover?: boolean;
  children: React.ChildrenArray<TableCellType> | TableCellType;
  onClick?: () => void;
  className?: string | Object;
};

function TableRow({
  children,
  isInTableHeader,
  noHover,
  onClick,
  className,
  ...otherProps
}: Props) {
  const classNames = classnames({
    'ds-table__row-no-hover': noHover,
    'ds-table__row-clickable': onClick
  }, className);
  if (isInTableHeader) {
    return <tr className={classNames} {...otherProps}>
        {React.Children.map(children, child => {
        return React.cloneElement(child, {
          isInTableHeader
        });
      })}
      </tr>;
  }
  return <tr className={classNames} onClick={onClick} {...otherProps}>
      {children}
    </tr>;
}

TableRow.defaultProps = {
  onClick: () => {}
};

export default TableRow;