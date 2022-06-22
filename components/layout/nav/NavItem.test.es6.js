/* global expect */
import React from 'react'
import { shallow, mount } from 'enzyme'

import NavItem from './NavItem.es6.js'
import { Visible } from '../../Icons.es6.js'

it('shows arrow icon', () => {
  const component = shallow(<NavItem showArrow />)
  expect(component.find('.ds-nav__item-arrow').exists()).toBe(true)
})

it('shows icon', () => {
  const component = shallow(<NavItem icon={<Visible />} />)
  expect(component.find('.ds-nav__item-icon').exists()).toBe(true)
})

it('shows badge', () => {
  const component = shallow(<NavItem badge="5" />)
  expect(component.find('.ds-nav__item-badge').exists()).toBe(true)
})

it('shows action icon if click handler for action is passed', () => {
  const onActionClick = jest.fn()
  const component = mount(<NavItem onActionClick={onActionClick} actionIcon={<Visible />} />)
  expect(component.find('.ds-nav__item-action svg').exists()).toBe(true)
})

it('should add `ds-nav__item--active` classname once it is active', () => {
  const component = mount(<NavItem active/>)
  expect(component.find('.ds-nav__item--active').exists()).toBe(true)
})

it('calls nav item click event', () => {
  const onClick = jest.fn()
  const component = shallow(<NavItem onClick={onClick} />)
  component.find('.ds-nav__item').at(0).simulate('click')
  expect(onClick.mock.calls.length).toBe(1)
})

it('calls nav item action click event', () => {
  const onActionClick = jest.fn()
  const component = shallow(<NavItem onActionClick={onActionClick} />)
  component.find('.ds-nav__item-action').at(0).simulate('click', {
    stopPropagation: () => {}
  })
  expect(onActionClick.mock.calls.length).toBe(1)
})

it('is disabled', () => {
  const component = shallow(<NavItem disabled />)
  expect(component.hasClass('ds-nav__item--disabled')).toBe(true)
})
