import React from 'react'
import { mount } from 'enzyme'

import Select from '../select/Select'
import Option from '../option/Option'

import DimensionInput from './DimensionInput'

let testProps

beforeEach(function () {
  testProps = {
    label: 'Font size',
    value: '1.5',
    units: ['rem', 'em', 'pt', 'px'],
    selectedUnit: 'em',
    onUpdate: jest.fn()
  }
})

it('should render layout', function () {
  const component = mount(<DimensionInput {...testProps} />)

  expect(
    component.find('.ds-form-input-dimension__label').text()
  ).toEqual(testProps.label)

  expect(
    component.find(Option)
  ).toHaveLength(testProps.units.length)

  expect(
    component.find('input').at(0).prop('value')
  ).toEqual(testProps.value)

  expect(
    component.find(Select).at(0).prop('placeholder')
  ).toEqual(testProps.selectedUnit)
})

it('should show default placeholder', function () {
  delete testProps['selectedUnit']

  const component = mount(<DimensionInput {...testProps} />)

  expect(
    component.find(Select).at(0).prop('placeholder')
  ).toEqual('Please select a unit')
})

it('should update unit', function () {
  const component = mount(<DimensionInput {...testProps} />)
  component.find(Option).at(2).simulate('mousedown')

  expect(testProps.onUpdate).toBeCalled()
  expect(['1.5', testProps.units[2]]).toEqual(testProps.onUpdate.mock.calls[0])
})

it('should update value', function () {
  const component = mount(<DimensionInput {...testProps} />)
  component.find('input').simulate('change', { target: { value: '9' } })

  expect(testProps.onUpdate).toBeCalled()
  expect(['9', testProps.selectedUnit]).toEqual(testProps.onUpdate.mock.calls[0])
})

it('should render fixed unit', function () {
  const component = mount(<DimensionInput
    {...{
      fixedUnit: 'px',
      ...testProps
    }}
  />)
  expect(
    component.find('.ds-form-input-dimension__input').hasClass('has-fixed-unit')
  ).toBeTruthy()
  expect(
    component.find('.ds-form-input-dimension__fixed-unit').text()
  ).toEqual('px')
  expect(
    component.find('.ds-form-input-dimension__select').length
  ).toBe(0)
})
