

import * as React from "react";
import classnames from "classnames";
import Button from "../../../components/form/button/Button.es6";
import { ChevronLeft, ChevronRight } from "../../../components/Icons.es6";

type Props = {
  count: number;
  rowsPerPage: number;
  className?: string | Object;
  page: number;
  backgroundType: "light" | "dark";
  onChangePage: (page: number) => void;
};

function TablePagination({
  count,
  className,
  rowsPerPage,
  page,
  backgroundType,
  onChangePage,
  ...otherProps
}: Props) {
  const classNames = classnames('ds-table__pagination', `ds-table__pagination--${backgroundType}`, className);
  const from = count === 0 ? 0 : page * rowsPerPage + 1;
  const to = Math.min(count, (page + 1) * rowsPerPage);
  return <div className={classNames}>
      <div className="ds-table__pagination-text">
        {from}&ndash;{to} of {count}
      </div>
      <div className="buttons-group" {...otherProps}>
        <Button disabled={page === 0} icon={<ChevronLeft color="#706f84" />} onClick={e => onChangePage(page - 1)} />
        <Button disabled={page >= Math.ceil(count / rowsPerPage) - 1} icon={<ChevronRight color="#706f84" />} onClick={e => onChangePage(page + 1)} />
      </div>
    </div>;
}

TablePagination.defaultProps = {
  backgroundType: 'light'
};

export default TablePagination;