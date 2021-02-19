/* global expect, jest */

import React from 'react'
import { shallow, mount } from 'enzyme'
import Radio from './Radio.es6.js'

it('should render label', () => {
  const component = shallow(<Radio label="Option 1" />)
  expect(component.find('.ds-form-control-radio__label').at(0).text().trim()).toEqual('Option 1')
})

it('should be checked', () => {
  const component = shallow(<Radio label="Option 1" checked />)
  expect(component.find('input').at(0).prop('checked')).toBeTruthy()
})

it('should be disabled', () => {
  const component = shallow(<Radio label="Option 1" disabled />)
  expect(component.find('input').at(0).prop('disabled')).toBeTruthy()
})

it('should set the right value', () => {
  const component = shallow(<Radio label="Option 1" value="1" />)
  expect(component.find('input').at(0).prop('value')).toEqual('1')
})

it('should call onChange', () => {
  const onChange = jest.fn()
  const value = '1'
  const component = shallow(<Radio label="Option 1" value={value} onChange={onChange} />)
  component.find('input').simulate('change')
  expect(onChange.mock.calls[0][0]).toEqual(value)
})

