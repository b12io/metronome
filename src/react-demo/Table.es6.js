import React from 'react'
import DemoLayoutContent from './demo-only-components/DemoLayoutContent.es6.js'
import CodeExample from './demo-only-components/CodeExample.es6.js'
import MetaData from './demo-only-components/MetaData.es6.js'
import {
  MetaDataProps,
  MetaDataPropsItem
} from './demo-only-components/MetaDataProps.es6.js'
import { DemoSimpleTable } from './demo-only-components/DemoTable.es6.js'
import DemoSmartTable from './demo-only-components/DemoSmartTable.es6.js'

const TABLE_PROPS = [
  {
    property: 'cardLike',
    value: 'boolean',
    defaultValue: 'undefined',
    description: 'Show table in the form of card'
  },
  {
    property: 'padding',
    value: 'compact | comfortable',
    defaultValue: 'undefined',
    description:
      '`compact` - adds slight padding for cells, `comfortable` - adds significant padding for cells for better reading experience'
  },
  {
    property: 'verticalAlign',
    value: 'top | middle',
    defaultValue: 'undefined',
    description: 'Aligns content in cells to either top or middle'
  },
  {
    property: 'background',
    value: 'light | transparent',
    defaultValue: 'light',
    description: 'Table background color'
  },
  {
    property: 'responsive',
    value: 'boolean',
    defaultValue: 'false',
    description: 'Responsive table (horizontal scroll)'
  }
]

const TABLE_ROW_PROPS = [
  {
    property: 'noHover',
    value: 'boolean',
    defaultValue: 'undefined',
    description: 'Removes hover effect from all children TableCells'
  }
]

const TABLE_CELL_PROPS = [
  {
    property: 'nowrap',
    value: 'boolean',
    defaultValue: 'undefined',
    description: 'No wraps the content of table cell'
  },
  {
    property: 'align',
    value: 'left | center | right',
    defaultValue: 'left',
    description: 'Aligns content to either left or right'
  }
]

const TABLE_PAGINATION_PROPS = [
  {
    property: 'count',
    value: 'number',
    defaultValue: 'undefined',
    description: 'Number of total table data items'
  },
  {
    property: 'page',
    value: 'number',
    defaultValue: 'undefined',
    description: 'Current page number, starting with 0 as first page'
  },
  {
    property: 'rowsPerPage',
    value: 'number',
    defaultValue: 'undefined',
    description: 'Rows number to show per page'
  },
  {
    property: 'onChangePage',
    value: 'function',
    defaultValue: 'undefined',
    description:
      'Function to call every time buttons are clicked, passes page number to change to'
  }
]

export default function TablePage() {
  return (
    <DemoLayoutContent>
      <div className="app-page-title">
        <h1>Table</h1>
        <MetaData
          importFrom="import Table from '@b12/metronome/components/layout/table/Table.es6',
import TableHead from '@b12/metronome/components/layout/table/TableHead.es6',
import TableBody from '@b12/metronome/components/layout/table/TableBody.es6',
import TableRow from '@b12/metronome/components/layout/table/TableRow.es6',
import TableCell from '@b12/metronome/components/layout/table/TableCell.es6',
import AvatarItem from '@b12/metronome/components/layout/avatar/AvatarItem.es6',
import TableSortLabel from '@b12/metronome/components/layout/table/TableSortLabel.es6',
import TablePagination from '@b12/metronome/components/layout/table/TablePagination.es6'"
          flow="Yes"
          tests="Yes"
        />
      </div>
      <div className="ds-block">
        <div className="ds-block__title">
          <h4>Default table</h4>
        </div>

        <CodeExample
          code={`<Table>
  <TableHead>
    <TableRow>
      {rows.map(row => (
        <TableCell
          key={row.id}
          align={row.numeric ? 'center' : 'left'}
        >{row.label}</TableCell>
      ))}
    </TableRow>
  </TableHead>
  <TableBody>
    {data.map(row => (
      <TableRow key={row.id}>
        <TableCell>{row.name}</TableCell>
        <TableCell>{row.calories}</TableCell>
        <TableCell>{row.fat}</TableCell>
        <TableCell>{row.carbs}</TableCell>
        <TableCell>{row.protein}</TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>`}
        >
          <DemoSimpleTable />
        </CodeExample>
      </div>
      <div className="ds-block">
        <div className="ds-block__title">
          <h4>Responsive table</h4>
          <p>
            Adding <code>responsive</code> prop allows table to be scrollable
            horizontally on smaller devices.
          </p>
        </div>

        <CodeExample
          code={`<Table
  responsive
  cardLike
>
  <TableHead>
    <TableRow>
      {rows.map(row => (
        <TableCell
          key={row.id}
          align={row.numeric ? 'center' : 'left'}
        >{row.label}</TableCell>
      ))}
    </TableRow>
  </TableHead>
  <TableBody>
    {data.map(row => (
      <TableRow key={row.id}>
        <TableCell>{row.name}</TableCell>
        <TableCell>{row.calories}</TableCell>
        <TableCell>{row.fat}</TableCell>
        <TableCell>{row.carbs}</TableCell>
        <TableCell>{row.protein}</TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>`}
        >
          <DemoSimpleTable responsive cardLike />
        </CodeExample>
      </div>
      <div className="ds-block">
        <div className="ds-block__title">
          <h4>Table with wrapper (card-like table)</h4>
        </div>

        <CodeExample
          code={`<Table
  padding='compact'
  cardLike
>
  <TableHead>
    <TableRow>
      {rows.map(row => (
        <TableCell
          key={row.id}
          align={row.numeric ? 'center' : 'left'}
        >{row.label}</TableCell>
      ))}
    </TableRow>
  </TableHead>
  <TableBody>
    {data.map(row => (
      <TableRow key={row.id}>
        <TableCell>{row.name}</TableCell>
        <TableCell>{row.calories}</TableCell>
        <TableCell>{row.fat}</TableCell>
        <TableCell>{row.carbs}</TableCell>
        <TableCell>{row.protein}</TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>`}
        >
          <DemoSimpleTable padding="compact" cardLike />
        </CodeExample>
      </div>
      <div className="ds-block">
        <div className="ds-block__title">
          <h4>Table with `comfortable` paddings and avatars</h4>
        </div>

        <CodeExample
          code={`<Table
  padding='comfortable'
  verticalAlign='middle'
  cardLike
>
  <TableHead>
    <TableRow>
      {rows.map(row => (
        <TableCell
          key={row.id}
          align={row.numeric ? 'center' : 'left'}
        >{row.label}</TableCell>
      ))}
    </TableRow>
  </TableHead>
  <TableBody>
    {data.map(row => (
      <TableRow key={row.id}>
        <TableCell>
          <AvatarItem
            primaryText={row.name}
            secondaryText="Dessert"
          />
        </TableCell>
        <TableCell>{row.calories}</TableCell>
        <TableCell>{row.fat}</TableCell>
        <TableCell>{row.carbs}</TableCell>
        <TableCell>{row.protein}</TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>`}
        >
          <DemoSimpleTable
            padding="comfortable"
            verticalAlign="middle"
            cardLike
            showAvatar
          />
        </CodeExample>
      </div>
      <div className="ds-block">
        <div className="ds-block__title">
          <h4>Advanced table with column sorting and pagination</h4>
        </div>

        <CodeExample
          code={`import React from 'react'

import Table from '@b12/metronome/components/layout/table/Table.es6.js'
import TableHead from '@b12/metronome/components/layout/table/TableHead.es6.js'
import TableBody from '@b12/metronome/components/layout/table/TableBody.es6.js'
import TableRow from '@b12/metronome/components/layout/table/TableRow.es6.js'
import TableCell from '@b12/metronome/components/layout/table/TableCell.es6.js'
import AvatarItem from '@b12/metronome/components/layout/avatar/AvatarItem.es6.js'
import TablePagination from '@b12/metronome/components/layout/table/TablePagination.es6.js'
import Grid from '@b12/metronome/components/layout/grid/Grid.es6.js'

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
}`}
        >
          <DemoSmartTable />
        </CodeExample>
      </div>
      <div className="ds-block">
        <div className="ds-block__title">
          <h4>Table Props</h4>
        </div>

        <MetaDataProps>
          {TABLE_PROPS.map((props, ind) => (
            <MetaDataPropsItem key={ind} {...props} />
          ))}
        </MetaDataProps>
      </div>
      <div className="ds-block">
        <div className="ds-block__title">
          <h4>TableRow Props</h4>
        </div>

        <MetaDataProps>
          {TABLE_ROW_PROPS.map((props, ind) => (
            <MetaDataPropsItem key={ind} {...props} />
          ))}
        </MetaDataProps>
      </div>
      <div className="ds-block">
        <div className="ds-block__title">
          <h4>TableCell Props</h4>
        </div>

        <MetaDataProps>
          {TABLE_CELL_PROPS.map((props, ind) => (
            <MetaDataPropsItem key={ind} {...props} />
          ))}
        </MetaDataProps>
      </div>
      <div className="ds-block">
        <div className="ds-block__title">
          <h4>TablePagination Props</h4>
        </div>

        <MetaDataProps>
          {TABLE_PAGINATION_PROPS.map((props, ind) => (
            <MetaDataPropsItem key={ind} {...props} />
          ))}
        </MetaDataProps>
      </div>
    </DemoLayoutContent>
  )
}
