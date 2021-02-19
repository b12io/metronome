
import * as React from "react";
import classnames from "classnames";
import TableHead from "./TableHead.es6";
import TableBody from "./TableBody.es6";

type TableHeadType = React.ReactElement<typeof TableHead>;
type TableBodyType = React.ReactElement<typeof TableBody>;

type Props = {
  className?: string | {
    [key: string]: any;
  };
  cardLike?: boolean;
  padding?: "compact" | "comfortable";
  verticalAlign: "top" | "middle";
  background: "light" | "transparent";
  children: React.ChildrenArray<TableHeadType | TableBodyType> | TableHeadType | TableBodyType;
};

function Table({
  className,
  cardLike,
  padding,
  verticalAlign,
  children,
  background,
  ...otherProps
}: Props) {
  const wrapperClasses = classnames({
    'ds-table-wrapper': cardLike
  });
  const tableClasses = classnames('ds-table', {
    'ds-table--compact': padding && padding === 'compact',
    'ds-table--comfortable': padding && padding === 'comfortable'
  }, `ds-table--vertical-align-${verticalAlign}`, `ds-table--background-${background}`, className);

  return <div className={wrapperClasses}>
      <table className={tableClasses} {...otherProps}>
        {children}
      </table>
    </div>;
}

Table.defaultProps = {
  background: 'transparent',
  verticalAlign: 'top'
};

export default Table;