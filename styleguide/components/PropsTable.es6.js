import React from 'react'

import Table from '../../../metronome/components/layout/table/Table.es6.js'
import TableHead from '../../../metronome/components/layout/table/TableHead.es6.js'
import TableBody from '../../../metronome/components/layout/table/TableBody.es6.js'
import TableRow from '../../../metronome/components/layout/table/TableRow.es6.js'
import TableCell from '../../../metronome/components/layout/table/TableCell.es6.js'

const PropsTable = ({ columns, rows, getRowKey }) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          {columns.map(({ caption }) => (
            <TableCell key={caption} align="left">
              {caption}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={getRowKey(row)}>
            {columns.map(({ render }, index) => (
              <TableCell key={index}>{render(row)}</TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default PropsTable
