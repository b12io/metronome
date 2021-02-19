/* global expect */
import React from 'react'
import renderer from 'react-test-renderer'
import moment from 'moment'

import B12DatePicker from '../DatePicker'

describe('B12DatePicker component', () => {
  test('should render the react datepicker component using dropdown styles as a custom input', () => {
    const date = moment('2018-03-29')
    const tree = renderer.create(
      <B12DatePicker value={date} />
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
