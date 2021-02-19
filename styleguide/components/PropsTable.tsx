
import React from "react";
import { Node } from "react";

import Table from "../../../design-system/components/layout/table/Table.es6";
import TableHead from "../../../design-system/components/layout/table/TableHead.es6";
import TableBody from "../../../design-system/components/layout/table/TableBody.es6";
import TableRow from "../../../design-system/components/layout/table/TableRow.es6";
import TableCell from "../../../design-system/components/layout/table/TableCell.es6";

type Props = {
  columns: {
    caption: string;
    render: (row: {name: string;}) => Node;
  }[];
  rows: {name: string;}[];
  getRowKey: (row: {name: string;}) => string;
};

const PropsTable = ({
  columns,
  rows,
  getRowKey
}: Props) => {
  return <Table>
      <TableHead>
        <TableRow>
          {columns.map(({
          caption
        }) => <TableCell key={caption} align="left">
              {caption}
            </TableCell>)}
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map(row => <TableRow key={getRowKey(row)}>
            {columns.map(({
          render
        }, index) => <TableCell key={index}>{render(row)}</TableCell>)}
          </TableRow>)}
      </TableBody>
    </Table>;
};

export default PropsTable;