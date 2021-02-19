/* global expect */
import React from 'react'
import renderer from 'react-test-renderer'
import moment from 'moment'

import B12TimePicker from '../TimePicker'

describe('B12TimePicker component', () => {
  const time = moment('12:00 PM', 'h:mm A')

  test('should render with label when label is passed in', () => {
    const tree = renderer.create(
      <B12TimePicker value={time} label="Test label" />
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('should render with Time label when no label is passed in', () => {
    const tree = renderer.create(
      <B12TimePicker value={time} />
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
