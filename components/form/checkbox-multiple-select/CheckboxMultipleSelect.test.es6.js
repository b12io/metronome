/* global expect, jest */
import React from 'react'
import { shallow } from 'enzyme'
import CheckboxMultipleSelect from './CheckboxMultipleSelect.es6.js'

let component, options, onChange

beforeEach(() => {
  options = ['Item 1', 'Item 2', 'Item 3']
  onChange = jest.fn()
})

it('should render component with no options', () => {
  component = shallow(<CheckboxMultipleSelect />)
  expect(component.hasClass('ds-checkbox-select')).toBeTruthy()
  expect(component.find('.ds-checkbox-select__label').length).toBe(1)
  expect(component.find('.ds-checkbox-select__label').text()).toBe('Select')
  expect(component.instance().state.options.length).toBe(0)
  expect(component.instance().state.isOpened).toBeFalsy()
  expect(component.find('.ds-checkbox-select__dropdown').length).toBe(0)
})

it('should open dropdown with 3 options on select click', () => {
  component = shallow(<CheckboxMultipleSelect options={options} />)
  component.find('.ds-checkbox-select__label').simulate('click')
  expect(component.find('.ds-checkbox-select__dropdown').length).toBe(1)
  expect(component.find('.ds-checkbox-select__item').length).toBe(3)
})

it('should check first option', () => {
  component = shallow(
    <CheckboxMultipleSelect options={options} onChange={onChange} />
  )
  component.find('.ds-checkbox-select__label').simulate('click')
  component
    .find('.ds-checkbox-select__item')
    .at(0)
    .find('Checkbox')
    .props()
    .onChange()
  expect(component.instance().state.selected['Item 1']).toBeTruthy()
  expect(onChange.mock.calls[0][0]).toBe('Item 1')
  expect(onChange.mock.calls[0][1]).toEqual({ 'Item 1': true })
  component.update()
  expect(component.find('.ds-checkbox-select__label').text()).toBe('Item 1')
})

it('should define selected and disabled options when passed', () => {
  component = shallow(
    <CheckboxMultipleSelect
      options={options}
      selectedOptions={[options[0], options[1]]}
      disabledOptions={[options[1], options[2]]}
    />
  )
  component.find('.ds-checkbox-select__label').simulate('click')
  expect(
    component.find('.ds-checkbox-select__item').at(0).find('Checkbox').props()
      .checked
  ).toBeTruthy()
  expect(
    component.find('.ds-checkbox-select__item').at(1).find('Checkbox').props()
      .checked
  ).toBeTruthy()
  expect(
    component.find('.ds-checkbox-select__item').at(1).find('Checkbox').props()
      .disabled
  ).toBeTruthy()
  expect(
    component.find('.ds-checkbox-select__item').at(2).find('Checkbox').props()
      .disabled
  ).toBeTruthy()
  component.update()
  expect(component.find('.ds-checkbox-select__label').text()).toBe(
    'Item 1, Item 2'
  )
})

it('should render unselectedLabel when no options selected', () => {
  component = shallow(
    <CheckboxMultipleSelect
      unselectedLabel="Filter by price"
      selectedLabel="Custom Label"
      options={options}
    />
  )
  expect(component.instance().state.selected).toEqual({})
  expect(component.find('.ds-checkbox-select__label').text()).toBe(
    'Filter by price'
  )
})

it('should preserve label when `selectedLabel` and custom label is passed', () => {
  component = shallow(
    <CheckboxMultipleSelect
      selectedLabel="Custom Label"
      options={options}
      selectedOptions={[options[0], options[1]]}
    />
  )
  component.find('.ds-checkbox-select__label').simulate('click')
  expect(
    component.find('.ds-checkbox-select__item').at(0).find('Checkbox').props()
      .checked
  ).toBeTruthy()
  expect(
    component.find('.ds-checkbox-select__item').at(1).find('Checkbox').props()
      .checked
  ).toBeTruthy()
  component.update()
  expect(component.find('.ds-checkbox-select__label').text()).toBe(
    'Custom Label'
  )
})
