/* global expect */

import React from 'react'
import { shallow, mount } from 'enzyme'

import Dropdown from './Dropdown.es6.js'
import DropdownItem from './DropdownItem.es6.js'
import DropdownItemHeader from './DropdownItemHeader.es6.js'
import DropdownItemDivider from './DropdownItemDivider.es6.js'
import Button from '../../form/button/Button.es6.js'
import { Customer } from '../../../components/Icons.es6.js'

it('should render toggle with icon and label', () => {
  const component = shallow(
    <Dropdown
      toggle="Toggle me"
      toggleIcon={<Customer height="16" color="#706F84" />}
    ></Dropdown>
  )

  expect(component.find('.ds-dropdown__toggle').exists()).toBe(true)
  expect(component.find('.ds-dropdown__toggle').text().trim()).toBe('<Customer />Toggle me')
  expect(component.find('Customer').exists()).toBe(true)
})

it('should render custom toggle', () => {
  const component = shallow(
    <Dropdown
      toggle={<Button label="Toggle me" chevron />}
    ></Dropdown>
  )

  expect(component.find('.ds-dropdown__toggle').exists()).toBe(true)
  expect(component.find('Button').exists()).toBe(true)
})

it('should render default dropdown menu items', () => {
  const component = shallow(
    <Dropdown
      toggle="Toggle me"
      toggleIcon={<Customer height="16" color="#706F84" />}
    >
      <DropdownItemHeader label="Header" />
      <DropdownItem label="Link 1" />
      <DropdownItemDivider />
      <DropdownItem label="Link 2" />
    </Dropdown>
  )

  expect(component.find('ul.ds-dropdown__menu').exists()).toBe(true)
  expect(component.find('DropdownItem').exists()).toBe(true)
  expect(component.find('DropdownItemHeader').exists()).toBe(true)
  expect(component.find('DropdownItemDivider').exists()).toBe(true)
})

it('should render custom dropdown content', () => {
  const component = shallow(
    <Dropdown
      toggle="Toggle me"
      toggleIcon={<Customer height="16" color="#706F84" />}
    >
      <div>Custom content</div>
    </Dropdown>
  )

  expect(component.find('div.ds-dropdown__menu--with-content').exists()).toBe(true)
})

it('should show dropdown menu by clicking toggle', () => {
  const onClick = jest.fn()
  const component = shallow(
    <Dropdown
      toggle="Toggle me"
    >
      <DropdownItemHeader label="Header" />
      <DropdownItem label="Link 1" />
      <DropdownItemDivider />
      <DropdownItem label="Link 2" />
    </Dropdown>
  )

  component.find('.ds-dropdown__toggle').simulate('click')
  expect(component.hasClass('ds-dropdown--menu-visible')).toBe(true)
})

it('should hide dropdown menu by clicking on menu item', () => {
  const onClick = jest.fn()
  const component = mount(
    <Dropdown
      toggle="Toggle me"
    >
      <DropdownItemHeader label="Header" />
      <DropdownItem label="Link 1" onClick={onClick} />
      <DropdownItemDivider />
      <DropdownItem label="Link 2" onClick={onClick} />
    </Dropdown>
  )

  component.find('.ds-dropdown__toggle').simulate('click')
  expect(component.find('.ds-dropdown').hasClass('ds-dropdown--menu-visible')).toBe(true)
  component.find('.ds-dropdown__menu-item').at(0).simulate('click')
  expect(component.find('.ds-dropdown').hasClass('ds-dropdown--menu-visible')).toBe(false)
})
