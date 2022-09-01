/* global expect */

import React from 'react'
import { shallow } from 'enzyme'
import ToggleButton from './ToggleButton.es6.js'

it('should render label', () => {
  const component = shallow(<ToggleButton label="My toggle button" />)
  expect(component.find('.ds-form-control-toggle__label').at(0).text().trim()).toEqual('My toggle button')
})

it('should be toggled off by default', () => {
  const component = shallow(<ToggleButton />)
  expect(component.find('input').at(0).prop('checked')).toBeFalsy()
})

it('should be checked', () => {
  const component = shallow(<ToggleButton checked/>)
  expect(component.find('input').at(0).prop('checked')).toBeTruthy()
})

it('should call onChange', () => {
  const onChange = jest.fn()
  const component = shallow(<ToggleButton onChange={onChange} />)
  component.find('input').simulate('change', {target: { checked: true}})
  expect(onChange.mock.calls[0][0]).toEqual(true)
  component.find('input').simulate('change', {target: { checked: false}})
  expect(onChange.mock.calls[1][0]).toEqual(false)
})

