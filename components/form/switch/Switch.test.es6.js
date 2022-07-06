/* global expect, jest */
import React from 'react'
import { shallow, mount } from 'enzyme'
import Button from '../button/Button.es6.js'
import Switch from './Switch.es6.js'

it('should render inline', () => {
  const component = shallow(<Switch />)
  expect(component.prop('className')).toEqual('buttons-group')
})

it('should render as block', () => {
  const component = shallow(<Switch block />)
  expect(component.prop('className')).toEqual(
    'buttons-group buttons-group--block'
  )
})

it('should select second button', () => {
  const component = mount(
    <Switch selected={1}>
      <Button />
      <Button />
    </Switch>
  )
  expect(component.find('button').at(0).hasClass('active')).toBeFalsy()
  expect(component.find('button').at(1).hasClass('active')).toBeTruthy()
})

it('should trigger select second button', () => {
  const onChange = jest.fn()
  const component = mount(
    <Switch onChange={onChange}>
      <Button />
      <Button />
    </Switch>
  )
  expect(component.find('button.active').length).toEqual(0)
  component.find('button').at(1).simulate('click')
  expect(onChange.mock.calls[0][0]).toEqual(1)
})
