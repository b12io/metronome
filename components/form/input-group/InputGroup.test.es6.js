/* global expect */
import React from 'react'
import { shallow, mount } from 'enzyme'

import InputGroup from './InputGroup.es6.js'

it('is horizontal', () => {
  const component = shallow(<InputGroup />)
  expect(component.hasClass('ds-input-group--vertical')).toBe(false)
})

it('is vertical', () => {
  const component = shallow(<InputGroup vertical />)
  expect(component.hasClass('ds-input-group--vertical')).toBe(true)
})
