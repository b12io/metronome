/* global expect, jest */
import React from 'react'
import { shallow } from 'enzyme'
import MiniSelect from '../MiniSelect.es6.js'

let component, inputValueChange, selectValueChange

const selectOptions = ['px', 'rem', 'em', '%']

beforeEach(() => {
  inputValueChange = jest.fn()
  selectValueChange = jest.fn()
  component = shallow(
    <MiniSelect
      label="Mini Select"
      selectOptions={selectOptions}
      inputValueChange={inputValueChange}
      selectValueChange={selectValueChange}
    />
  )
})

it('should render component', () => {
  expect(component.hasClass('ds-form-group')).toBeTruthy()
  expect(component.find('.ds-control-label').text()).toBe('Mini Select')
  expect(component.instance().props.selectPosition).toBe('left')
})

it('should toggle select dropdown', () => {
  component.find('.ds-mini-select__dropdown-toggle').simulate('click')
  component.update()
  expect(component.find('li').length).toBe(4)
  expect(component.find('li').at(0).text()).toBe('px')
  expect(component.find('li').at(3).text()).toBe('%')
})

it('should call selectValueChange on option click', () => {
  component.find('.ds-mini-select__dropdown-toggle').simulate('click')
  component.update()
  expect(component.find('li').length).toBe(4)
  component.find('li').at(0).simulate('click')
  expect(selectValueChange.mock.calls.length).toBe(1)
  expect(selectValueChange.mock.calls[0][0]).toBe('px')
  expect(component.find('li').length).toBe(0)
})

it('should call inputValueChange on option click', () => {
  component
    .find('input')
    .simulate('change', { target: { value: 'My new value' } })
  expect(inputValueChange.mock.calls[0][0]).toEqual('My new value')
})

it('should render select on right', () => {
  component = shallow(<MiniSelect label="Mini Select" selectPosition="right" />)
  expect(
    component
      .find('.ds-mini-select__dropdown')
      .hasClass('ds-mini-select__dropdown--right')
  ).toBeTruthy()
  expect(component.instance().props.selectPosition).toBe('right')
})

it('should render input and select values', () => {
  component = shallow(
    <MiniSelect
      label="Mini Select"
      selectOptions={selectOptions}
      inputValue="My value"
      selectValue="rem"
      inputValueChange={inputValueChange}
      selectValueChange={selectValueChange}
    />
  )
  expect(component.find('input').props().value).toBe('My value')
  expect(component.find('.ds-mini-select__dropdown-toggle').text()).toBe('rem')
})

it('should disable input and select', () => {
  component = shallow(
    <MiniSelect
      label="Mini Select"
      inputDisabled
      selectDisabled
      selectOptions={selectOptions}
      inputValue="My value"
      selectValue="rem"
      inputValueChange={inputValueChange}
      selectValueChange={selectValueChange}
    />
  )
  expect(
    component.find('.ds-mini-select').hasClass('ds-mini-select--disabled')
  ).toBeTruthy()
  expect(component.find('input').props().disabled).toBeTruthy()
  expect(component.find('Disabled').length).toBe(1)
})
