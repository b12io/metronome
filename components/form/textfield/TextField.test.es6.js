/* global jest, expect */
import React from 'react'
import { shallow, mount } from 'enzyme'
import { SketchPicker } from 'react-color'
import TextField from './TextField.es6.js'
import { Locked } from '../../Icons.es6.js'

it('should have a `has-feedack` class', () => {
  let component
  const onUpdate = jest.fn()

  // Locked
  component = shallow(
    <TextField locked value="" label="Test label" onUpdate={onUpdate} />
  )
  expect(component.hasClass('has-feedback')).toBeTruthy()

  // Error
  component = shallow(
    <TextField error value="" label="Test label" onUpdate={onUpdate} />
  )
  expect(component.hasClass('has-feedback')).toBeTruthy()

  // Success
  component = shallow(
    <TextField success value="" label="Test label" onUpdate={onUpdate} />
  )
  expect(component.hasClass('has-feedback')).toBeTruthy()

  // Disabled
  component = shallow(
    <TextField disabled value="" label="Test label" onUpdate={onUpdate} />
  )
  expect(component.hasClass('has-feedback')).toBeTruthy()
})

it('should be disabled', () => {
  let component
  const onUpdate = jest.fn()

  component = shallow(
    <TextField locked value="" label="Test label" onUpdate={onUpdate} />
  )
  expect(component.find('input').at(0).prop('disabled')).toBeTruthy()

  component = shallow(
    <TextField disabled value="" label="Test label" onUpdate={onUpdate} />
  )
  expect(component.find('input').at(0).prop('disabled')).toBeTruthy()
})

it('should call onUpdate', () => {
  const onUpdate = jest.fn()
  const component = shallow(
    <TextField value="" label="Test label" onUpdate={onUpdate} />
  )
  component
    .find('input')
    .simulate('change', { target: { value: 'My new value' } })
  expect(onUpdate.mock.calls[0][0]).toEqual('My new value')
})

it('should call onBlur', () => {
  const onBlur = jest.fn()
  const component = shallow(
    <TextField value="" label="Test label" onBlur={onBlur} />
  )
  component.find('input').simulate('blur', { target: { value: 'New value' } })
  expect(onBlur.mock.calls[0][0]).toEqual('New value')
})

it('should not have help text by default', () => {
  const component = shallow(
    <TextField value="" label="Test label" onUpdate={jest.fn()} />
  )
  const help = component.find('.ds-form-group__help-text')
  expect(help.length).toEqual(0)
})

it('should display help text', () => {
  const component = shallow(
    <TextField
      value=""
      label="Test label"
      help="Help message"
      onUpdate={jest.fn()}
    />
  )
  const help = component.find('.ds-form-group__help-text')
  expect(help.exists()).toBeTruthy()
  expect(help.find('Help').exists()).toBeTruthy()
  expect(help.find('span').at(0).text().trim()).toEqual('Help message')
})

it('should not display color', () => {
  const component = shallow(
    <TextField
      value="rgba(0,0,0,1)"
      label="Background color"
      help="Please select color"
      onUpdate={jest.fn()}
    />
  )

  // Should wrap field with color picker class
  expect(component.find('.form-control-color-picker').length).toEqual(0)

  // Display currently selected color
  expect(component.find('.form-control-color-picker__color').length).toEqual(0)
})

it('should display color', () => {
  const component = shallow(
    <TextField
      value="rgba(0,0,0,1)"
      label="Background color"
      help="Please select color"
      onUpdate={jest.fn()}
      color
    />
  )

  // Should wrap field with color picker class
  expect(component.find('.ds-form-control-color-picker').length).toEqual(1)

  // Display currently selected color
  expect(component.find('.ds-form-control-color-picker__color').length).toEqual(
    1
  )
})

it('should show SketchPicker', () => {
  const component = shallow(
    <TextField
      value="rgba(0,0,0,1)"
      label="Background color"
      help="Please select color"
      onUpdate={jest.fn()}
      color
    />
  )

  // Sketch picker should be hidden
  expect(component.find(SketchPicker).length).toEqual(0)

  // Show picker
  component.find('.ds-form-control-color-picker__color').simulate('click')

  // Ensure that picker is visible
  expect(component.find(SketchPicker).length).toEqual(1)
})

it('should not show icon', function () {
  let component = mount(<TextField locked value="" label="Test label" />)
  expect(component.find('svg').length).toBe(1)

  component = mount(<TextField value="" label="Test label" />)
  expect(component.find('svg').length).toBe(0)
})
