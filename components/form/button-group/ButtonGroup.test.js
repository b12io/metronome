/* global expect */

import React from 'react'
import { shallow, mount } from 'enzyme'

import ButtonGroup from './ButtonGroup'

it('is horizontal', () => {
  const component = shallow(<ButtonGroup />)
  expect(component.hasClass('ds-button-group--vertical')).toBe(false)
})

it('is vertical', () => {
  const component = shallow(<ButtonGroup vertical />)
  expect(component.hasClass('ds-button-group--vertical')).toBe(true)
})
