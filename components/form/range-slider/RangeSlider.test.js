/* global expect, jest */

import React from 'react'
import { mount } from 'enzyme'
import RangeSlider from './RangeSlider.es6.js'

it('should render range slider component', () => {
  const component = mount(<RangeSlider
    label="Label"
    value="10"
    onChange={(value) => {}}
  />)
  expect(component.find('.ds-form-range-slider').length).toBe(1)
  expect(component.find('.ds-control-label').at(0).text().trim()).toEqual('Label')
  expect(component.find('input').props().value).toBe('10')
  expect(component.find('.ds-form-range-slider__captions').length).toBe(0)
})

it('should pass min, max, step props', () => {
  const component = mount(<RangeSlider
    label="Label"
    value="10"
    min="1"
    max="100"
    step="5"
    onChange={(value) => {}}
  />)
  expect(component.find('input').props().value).toBe('10')
  expect(component.find('input').props().min).toBe('1')
  expect(component.find('input').props().max).toBe('100')
  expect(component.find('input').props().step).toBe('5')
})

it('should render max, min, center captions', () => {
  const component = mount(<RangeSlider
    label="Label"
    value="10"
    minCaption="Left"
    centerCaption="Center"
    maxCaption="Right"
    onChange={(value) => {}}
  />)
  expect(component.find('.ds-form-range-slider__caption').length).toBe(1)
  expect(component.find('.ds-form-range-slider__caption-item').length).toBe(3)
  expect(component.find('.ds-form-range-slider__caption-item').at(0).text()).toBe('Left')
  expect(component.find('.ds-form-range-slider__caption-item').at(1).text()).toBe('Center')
  expect(component.find('.ds-form-range-slider__caption-item').at(2).text()).toBe('Right')
})

it('should call onChange on input value change', () => {
  const onChange = jest.fn()
  const component = mount(<RangeSlider
    label="Label"
    value="10"
    onChange={onChange}
  />)
  component.find('input').simulate('change', {target: {value: '20'}})
  expect(onChange).toHaveBeenCalledWith('20')
})
