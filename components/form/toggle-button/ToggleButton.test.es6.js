/* global expect */

import React from 'react'
import { shallow } from 'enzyme'
import ToggleButton from './ToggleButton.es6.js'

describe('DatetimePicker component', () => {
  let testProps, component

  beforeEach(() => {
    testProps = {
      label: 'My toggle button',
      checked: false,
      onChange: jest.fn()
    }
    component = shallow(<ToggleButton {...testProps} />)
  })

  it('should render label', () => {
    expect(component.find('.ds-form-control-toggle__label').at(0).text().trim()).toEqual('My toggle button')
  })

  it('should be toggled off by default', () => {
    expect(component.find('input').at(0).prop('checked')).toBeFalsy()
  })

  it('should be checked', () => {
    component.setProps({ checked: true })
    expect(component.find('input').at(0).prop('checked')).toBeTruthy()
  })

  it('should call onChange', () => {
    component.find('input').simulate('change', {target: { checked: true}})
    expect(testProps.onChange.mock.calls[0][0]).toEqual(true)
    component.find('input').simulate('change', {target: { checked: false}})
    expect(testProps.onChange.mock.calls[1][0]).toEqual(false)
  })
})

