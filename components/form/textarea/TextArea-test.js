/* global jest, expect */
import React from 'react'
import { shallow } from 'enzyme'
import TextArea from './TextArea'
it('should call onUpdate', () => {
  const onUpdate = jest.fn()
  const component = shallow(<TextArea value="Hey world" label="test" onUpdate={onUpdate} />)
  component.find('textarea').simulate('change', { target: { value: 'Hey back' } })
  expect(onUpdate.mock.calls[0][0].target.value).toEqual('Hey back')
})

it('should call onFocus', () => {
  const onFocus = jest.fn()
  const component = shallow(<TextArea value="Hey world" label="test" onFocus={onFocus} />)
  component.find('textarea').simulate('focus')
  expect(onFocus).toHaveBeenCalled()
})

it('should call onBlur', () => {
  const onBlur = jest.fn()
  const component = shallow(<TextArea value="Hey world" label="test" onBlur={onBlur} />)
  component.find('textarea').simulate('blur')
  expect(onBlur).toHaveBeenCalled()
})
