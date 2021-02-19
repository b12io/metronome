import React from 'react'

import Table from '../../../components/layout/table/Table.es6'
import TableHead from '../../../components/layout/table/TableHead.es6'
import TableBody from '../../../components/layout/table/TableBody.es6'
import TableRow from '../../../components/layout/table/TableRow.es6'
import TableCell from '../../../components/layout/table/TableCell.es6'
import AvatarItem from '../../../components/layout/avatar/AvatarItem.es6'
import TablePagination from '../../../components/layout/table/TablePagination.es6'
import Grid from '../../../components/layout/grid/Grid.es6.js'

let counter = 0
function createData (name, calories, fat, carbs, protein) {
  counter += 1
  return { id: counter, name, calories, fat, carbs, protein }
}

const rows = [
  { id: 'name', numeric: false, label: 'Dessert (100g serving)' },
  { id: 'calories', numeric: true, label: 'Calories' },
  { id: 'fat', numeric: true, label: 'Fat (g)' },
  { id: 'carbs', numeric: true, label: 'Carbs (g)' },
  { id: 'protein', numeric: true, label: 'Protein (g)' },
]

export default class DemoSmartTable extends React.Component {
  state = {
    data: [
      createData('Cupcake', 305, 3.7, 67, 4.3),
      createData('Donut', 452, 25.0, 51, 4.9),
      createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
      createData('Gingerbread', 356, 16.0, 49, 3.9),
      createData('Honeycomb', 408, 3.2, 87, 6.5),
      createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
      createData('KitKat', 518, 26.0, 65, 7.0),
      createData('Lollipop', 392, 0.2, 98, 0.0),
      createData('Marshmallow', 318, 0, 81, 2.0),
      createData('Oreo', 437, 18.0, 63, 4.0),
      createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
      createData('KitKat', 518, 26.0, 65, 7.0),
      createData('Lollipop', 392, 0.2, 98, 0.0),
    ],
    page: 0,
    rowsPerPage: 5,
  }

  handleChangePage = (page) => {
    this.setState({ page })
  }

  render () {
    const { data, rowsPerPage, page } = this.state
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage)
    return (
      <div>
        <Grid nowrap justify="end" align="center">
          <TablePagination
            count={data.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={this.handleChangePage}
          />
        </Grid>
        <Table
          padding="comfortable"
          verticalAlign="middle"
          cardLike
        >
          <TableHead>
            <TableRow>
              {rows.map(row => (
                <TableCell key={row.id} align={row.numeric ? 'center' : 'left'}>
                  {row.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map(row => (
                <TableRow key={row.id}>
                  <TableCell width="35%">
                    <AvatarItem
                      primaryText={row.name}
                      secondaryText="Dessert"
                    />
                  </TableCell>
                  <TableCell align="center">{row.calories}</TableCell>
                  <TableCell align="center">{row.fat}</TableCell>
                  <TableCell align="center">{row.carbs}</TableCell>
                  <TableCell align="center">{row.protein}</TableCell>
                </TableRow>
              ))}
            {emptyRows > 0 && (
              <TableRow
                style={{ height: 71 * emptyRows }}
                noHover
              >
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    )
  }
}
