/* global expect, jest */
import React from 'react'
import { shallow } from 'enzyme'

import {
  RotateForward
} from '../../../Icons'

import SidebarHeader from './SidebarHeader'

it('should show a logo', () => {
  const component = shallow(<SidebarHeader showLogo />)
  expect(component.find('img.ds-sidebar__header-logo').exists())
})

it('should display back button if backButton prop === true', () => {
  let component = shallow(<SidebarHeader />)
  expect(component.find('SidebarBackButton').exists()).toBe(false)

  component = shallow(<SidebarHeader backButton onBack={jest.fn()} />)
  expect(component.find('SidebarBackButton').exists())
})

it('should pass left action', () => {
  const component = shallow(
    <SidebarHeader leftAction={<RotateForward />} />
  )
  expect(component.find('RotateForward').exists()).toEqual(true)
})
