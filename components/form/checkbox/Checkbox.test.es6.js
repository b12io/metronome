/* global expect, jest */

import React from 'react'
import { shallow } from 'enzyme'
import Checkbox from './Checkbox.es6.js'

it('should render label', () => {
  const component = shallow(<Checkbox label="Option 1" />)
  expect(
    component.find('.ds-form-control-checkbox__label').text().trim()
  ).toEqual('Option 1')
})

it('should be checked', () => {
  const component = shallow(<Checkbox label="Option 1" checked />)
  expect(component.find('input').at(0).prop('checked')).toBeTruthy()
})

it('should be disabled', () => {
  const component = shallow(<Checkbox label="Option 1" disabled />)
  expect(component.find('input').at(0).prop('disabled')).toBeTruthy()
})

it('should show error', () => {
  const component = shallow(<Checkbox label="Option 1" hasError />)
  expect(component.find('label').at(0).hasClass('has-error'))
})

it('should call onChange', () => {
  const onChange = jest.fn()
  const component = shallow(
    <Checkbox label="Option 1" value="1" onChange={onChange} />
  )
  component.find('input').simulate('change', { target: { checked: true } })
  expect(onChange.mock.calls[0][0]).toEqual(true)
})
