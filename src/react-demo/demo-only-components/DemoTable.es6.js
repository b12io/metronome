/* eslint-disable */
import React from 'react'

import Table from '../../../components/layout/table/Table.es6.js'
import TableHead from '../../../components/layout/table/TableHead.es6.js'
import TableBody from '../../../components/layout/table/TableBody.es6.js'
import TableRow from '../../../components/layout/table/TableRow.es6.js'
import TableCell from '../../../components/layout/table/TableCell.es6.js'
import TableFoot from '../../../components/layout/table/TableFoot.es6.js'
import AvatarItem from '../../../components/layout/avatar/AvatarItem.es6.js'

let counter = 0
function createData(name, calories, fat, carbs, protein) {
  counter += 1
  return { id: counter, name, calories, fat, carbs, protein }
}

const rows = [
  { id: 'name', numeric: false, label: 'Dessert (100g serving)' },
  { id: 'calories', numeric: true, label: 'Calories' },
  { id: 'fat', numeric: true, label: 'Fat (g)' },
  { id: 'carbs', numeric: true, label: 'Carbs (g)' },
  { id: 'protein', numeric: true, label: 'Protein (g)' }
]

const data = [
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Donut', 452, 25.0, 51, 4.9),
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Honeycomb', 408, 3.2, 87, 6.5),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('KitKat', 518, 26.0, 65, 7.0),
  createData('Lollipop', 392, 0.2, 98, 0.0),
  createData('Marshmallow', 318, 0, 81, 2.0),
  createData('Oreo', 437, 18.0, 63, 4.0)
]

export function DemoSimpleTable({ hasFoot, showAvatar, ...tableProps }) {
  return (
    <Table {...tableProps}>
      <TableHead>
        <TableRow>
          {rows.map((row) => (
            <TableCell key={row.id}>{row.label}</TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((row) => (
          <TableRow key={row.id}>
            <TableCell>
              {showAvatar ? (
                <AvatarItem primaryText={row.name} secondaryText="Dessert" />
              ) : (
                row.name
              )}
            </TableCell>
            <TableCell>{row.calories}</TableCell>
            <TableCell>{row.fat}</TableCell>
            <TableCell>{row.carbs}</TableCell>
            <TableCell>{row.protein}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      {hasFoot && (
        <TableFoot>
          <TableRow>
            {rows.map((row) => (
              <TableCell key={row.id}>{row.label}</TableCell>
            ))}
          </TableRow>
        </TableFoot>
      )}
    </Table>
  )
}
