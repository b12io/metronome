/* global expect, jest */

import React from 'react'
import { shallow, mount } from 'enzyme'
import Select from './Select.es6.js'
import Option from '../option/Option.es6.js'

it('should render label', () => {
  const component = shallow(<Select label="Media" />)
  expect(component.find('.ds-control-label').at(0).text().trim()).toEqual('Media')
})

it('should render default placeholder', () => {
  const component = shallow(<Select label="Media" />)
  expect(component.find('.ds-form-control-select__toggle').at(0).text().trim()).toEqual('Please select')
})

it('should render passed in placeholder', () => {
  const component = shallow(<Select label="Media" placeholder="My test placeholder" />)
  expect(component.find('.ds-form-control-select__toggle').at(0).text().trim()).toEqual('My test placeholder')
})

it('should not show help by default', () => {
  const component = shallow(<Select label="Media" />)
  expect(component.find('.ds-form-group__help-text').length).toEqual(0)
})

it('should display help message', () => {
  const component = shallow(<Select label="Media" help="Help message" />)
  expect(component.find('.ds-form-group__help-text').length).toEqual(1)
  expect(component.find('.ds-form-group__help-text span').at(0).text().trim()).toEqual('Help message')
})

it('should display error style', () => {
  const component = shallow(<Select label="Media" error />)
  expect(component.hasClass('has-feedback')).toBeTruthy()
  expect(component.hasClass('has-error')).toBeTruthy()
})

it('should be disabled', () => {
  const component = shallow(<Select label="Media" disabled />)
  expect(component.hasClass('has-feedback')).toBeTruthy()
  expect(component.hasClass('is-disabled')).toBeTruthy()
})

it('should not toggle for disabled', () => {
  const component = shallow(<Select label="Media" disabled />)

  expect(component
    .find('.ds-form-control-select')
    .hasClass('ds-form-control-select--focused')
  ).toBeFalsy()

  component
    .find('.ds-form-control-select__toggle')
    .simulate('click')

  expect(component
    .find('.ds-form-control-select')
    .hasClass('ds-form-control-select--focused')
  ).toBeFalsy()
})

it('should show options on click', () => {
  const component = shallow(<Select label="Media" />)

  expect(component
    .find('.ds-form-control-select')
    .hasClass('ds-form-control-select--focused')
  ).toBeFalsy()

  component
    .find('.ds-form-control-select__toggle')
    .simulate('click')

  expect(component
    .find('.ds-form-control-select')
    .hasClass('ds-form-control-select--focused')
  ).toBeTruthy()
})

it('should render options correctly', () => {
  const component = shallow(
    <Select label="Media">
      <Option key="1" label="Item 1" />
      <Option key="2" label="Item 2" />
    </Select>
  )

  expect(component.children().length).toEqual(2)
})

it('should call onChange', () => {
  const onChange = jest.fn()

  const component = mount(
    <Select label="Media" onChange={onChange}>
      <Option key="1" label="Item 1" value={{ id: 1 }} />
      <Option key="2" label="Item 2" value={{ id: 2 }} />
    </Select>
  )

  // Select first option
  component.find(Option).at(0).simulate('mousedown')

  // Check callback
  expect(onChange.mock.calls.length).toEqual(1)
  expect(onChange.mock.calls[0][0]).toEqual({ id: 1 })
})

it('should search', () => {
  const onChange = jest.fn()
  const onFilter = (items, query) => {
    return items.filter(item => item.props.label.indexOf(query) >= 0)
  }

  const component = mount(
    <Select label="Media" onChange={onChange} filter={onFilter}>
      <Option key="1" label="Item 1" value={{ id: 1 }} />
      <Option key="2" label="Item 2" value={{ id: 2 }} />
    </Select>
  )

  expect(component.find(Option).length).toEqual(2)

  // Open menu
  component
    .find('.ds-form-control-select__toggle')
    .simulate('click')

  // Search
  component
    .find('.ds-form-control-select__search input')
    .simulate('change', { target: { value: 'Item 1' } })

  // Filter out Item 2
  expect(component.find(Option).length).toEqual(1)
})

// What to show if we have empty Select?
