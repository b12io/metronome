/* global expect */
import React from 'react'
import { shallow } from 'enzyme'

import Nav from './Nav.es6.js'

it('has no bordered class by default', () => {
  const component = shallow(<Nav />)
  expect(component.hasClass('ds-nav--bordered')).toBe(false)
})

it('has bordered class', () => {
  const component = shallow(<Nav bordered />)
  expect(component.hasClass('ds-nav--bordered')).toBe(true)
})
