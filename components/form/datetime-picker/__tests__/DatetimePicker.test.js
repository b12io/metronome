/* global expect, jest */
import React from 'react'
import moment from 'moment'
import uuidV4 from 'uuid/v4'
import { mount } from 'enzyme'

import B12DatePicker from '../DatePicker'
import B12TimePicker from '../TimePicker'
import DatetimePicker from '../DatetimePicker'

describe('DatetimePicker component', () => {
  let testProps

  beforeEach(() => {
    testProps = {
      updateDatetime: jest.fn(),
      uuid: uuidV4()
    }
  })

  test('should pass 3 new props to its children: value, onChange, & onChangeRaw', () => {
    const wrapper = mount(
      <DatetimePicker
        {...testProps}
        value={moment('2018-03-29T12:00')}
      >
        <B12DatePicker />
        <B12TimePicker />
      </DatetimePicker>
    )
    expect(wrapper.state('datetime').isValid()).toBe(true)

    expect(wrapper.find(B12DatePicker).prop('value')).toBeDefined()
    expect(wrapper.find(B12DatePicker).prop('onChange')).toBeDefined()
    expect(wrapper.find(B12DatePicker).prop('onChangeRaw')).toBeDefined()

    expect(wrapper.find(B12TimePicker).prop('value')).toBeDefined()
    expect(wrapper.find(B12TimePicker).prop('onChange')).toBeDefined()
    expect(wrapper.find(B12TimePicker).prop('onChangeRaw')).toBeDefined()
  })
})
