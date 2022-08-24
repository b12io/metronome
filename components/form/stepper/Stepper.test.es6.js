/* global jest, expect */

import React from 'react'
import { shallow, mount } from 'enzyme'
import Stepper from './Stepper.es6.js'

it('should call onUpdate', (done) => {
  const onUpdate = jest.fn()
  const component = mount(
    <Stepper value="5" label="Test label" onUpdate={onUpdate} />
  )
  component.find('input').simulate('change', { target: { value: 6 } })

  setTimeout(() => {
    expect(onUpdate.mock.calls[0][0]).toEqual(6)
    done()
  }, 750)
})

it('should reject onUpdate', (done) => {
  const onUpdate = jest.fn()
  const component = mount(
    <Stepper value="5" label="Test label" onUpdate={onUpdate} />
  )
  component.find('input').simulate('change', { target: { value: 'abc' } })

  setTimeout(() => {
    expect(component.find('input').at(0).prop('value')).toEqual('')
    done()
  }, 750)
})

it('should show error state', (done) => {
  const onUpdate = jest.fn()
  const component = mount(
    <Stepper value="5" label="Test label" onUpdate={onUpdate} />
  )
  component.find('input').simulate('change', { target: { value: '' } })

  setTimeout(() => {
    expect(component.find('.ds-form-group').hasClass('has-error')).toBeTruthy()
    done()
  }, 750)
})

it('should increase value', () => {
  const component = mount(<Stepper value="5" step={1} />)
  component.find('.stepper__btn--plus').at(0).simulate('click')
  expect(component.find('input').prop('value')).toEqual(6)
})

it('should not go beyond max value', () => {
  const component = mount(<Stepper value="5" max="5" step={1} />)
  component.find('.stepper__btn--plus').at(0).simulate('click')
  expect(component.find('input').prop('value')).toEqual('5')
})

it('should decrease value', () => {
  const component = mount(<Stepper value="5" step={1} />)
  component.find('.stepper__btn--minus').at(0).simulate('click')
  expect(component.find('input').prop('value')).toEqual(4)
})

it('should not go below min value', () => {
  const component = mount(<Stepper value="5" min="5" step={1} />)
  component.find('.stepper__btn--minus').at(0).simulate('click')
  expect(component.find('input').prop('value')).toEqual('5')
})
