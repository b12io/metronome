/* global expect */

import React from 'react'
import { shallow, mount } from 'enzyme'

import DropdownItem from './DropdownItem.es6.js'

it('should be disabled', () => {
  const onClick = jest.fn()
  const component = shallow(<DropdownItem disabled label="I am disabled and not clickable" />)

  expect(component.hasClass('ds-dropdown__menu-item--disabled')).toBe(true)
  component.simulate('click')
  expect(onClick.mock.calls.length).toBe(0)
})
