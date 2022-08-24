/* global expect */

import React from 'react'
import { mount } from 'enzyme'

import Table from './Table.es6.js'
import TableHead from './TableHead.es6.js'
import TableFoot from './TableFoot.es6.js'
import TableBody from './TableBody.es6.js'
import TableRow from './TableRow.es6.js'
import TableCell from './TableCell.es6.js'

function renderTable(tableProps = {}, tableCellProps = {}) {
  const columnLabels = ['Contact', 'Phone', 'Notes']
  const rows = [
    {
      id: 1,
      contact: 'Patrick Glebovsky',
      phone: '+1 (234) 567-8900',
      notes: 'lorem ipsum'
    },
    {
      id: 2,
      contact: 'John Doe',
      phone: '+1 (234) 567-8900',
      notes: 'ipsum dolor sit'
    },
    {
      id: 3,
      contact: 'Jane Doe',
      phone: '+1 (234) 567-8900',
      notes: 'dolor sit ament'
    }
  ]
  return (
    <Table {...tableProps}>
      <TableHead>
        <TableRow>
          {columnLabels.map((label) => (
            <TableCell key={label}>{label}</TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.id}>
            <TableCell {...tableCellProps}>{row.contact}</TableCell>
            <TableCell {...tableCellProps}>{row.phone}</TableCell>
            <TableCell {...tableCellProps}>{row.notes}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

it('render table component', () => {
  const component = mount(renderTable())
  expect(component.find('.ds-table').length).toBe(1)
  expect(component.find('thead').length).toBe(1)
  expect(component.find('thead').find('TableCell').length).toBe(3)
  expect(component.find('thead').find('th').length).toBe(3)
  expect(component.find('tbody').length).toBe(1)
  expect(component.find('tbody').find('TableRow').length).toBe(3)
  expect(component.find('tbody').find('tr').at(0).find('td').length).toBe(3)
})

it('should have compact padding and have vertical align middle', () => {
  const component = mount(
    renderTable({
      padding: 'compact',
      verticalAlign: 'middle'
    })
  )
  expect(component.find('.ds-table').length).toBe(1)
  expect(component.find('.ds-table').hasClass('ds-table--compact')).toBeTruthy()
  expect(
    component.find('.ds-table').hasClass('ds-table--vertical-align-middle')
  ).toBeTruthy()
})

it('should render card like table', () => {
  const component = mount(
    renderTable({
      cardLike: true
    })
  )
  expect(component.find('.ds-table-wrapper').length).toBe(1)
})

it('should render numeric and nowrap table cells', () => {
  const component = mount(
    renderTable(
      {},
      {
        align: 'center',
        nowrap: true
      }
    )
  )
  expect(
    component
      .find('tbody')
      .find('tr')
      .at(0)
      .find('.ds-table__cell--align-center').length
  ).toBe(3)
  expect(
    component.find('tbody').find('tr').at(0).find('.ds-table__cell--nowrap')
      .length
  ).toBe(3)
})
