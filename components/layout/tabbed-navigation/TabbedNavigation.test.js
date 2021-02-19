/* global expect */

import React from 'react'
import { mount } from 'enzyme'

import TabbedNavigation from './TabbedNavigation.es6.js'
import TabbedNavigationItem from './TabbedNavigationItem.es6.js'

let component

describe('TabbedNavigation component', () => {
  beforeEach(() => {
    component = mount(
      <TabbedNavigation
        progress={40}
      >
        <TabbedNavigationItem visited>Template</TabbedNavigationItem>
        <TabbedNavigationItem visited>Design</TabbedNavigationItem>
        <TabbedNavigationItem active>Setup</TabbedNavigationItem>
      </TabbedNavigation>
    )
  })

  it('renders tabbed navigation', () => {
    expect(component.find('.ds-tabbed-nav').length).toBe(1)
    expect(component.find('.ds-tabbed-nav__progress').length).toBe(1)
    expect(component.find('TabbedNavigationItem').length).toBe(3)
    expect(component.find('.ds-tabbed-nav__item--visited').length).toBe(2)
    expect(component.find('.ds-tabbed-nav__item--active').length).toBe(1)
  })

  it('should make children items spread', () => {
    component = mount(
      <TabbedNavigation
        progress={40}
        spread
      >
        <TabbedNavigationItem visited>Template</TabbedNavigationItem>
        <TabbedNavigationItem visited>Design</TabbedNavigationItem>
        <TabbedNavigationItem active>Setup</TabbedNavigationItem>
      </TabbedNavigation>
    )

    expect(component.find('.ds-tabbed-nav--spread').length).toBe(1)
  })

  it('should change progress to items mode', () => {
    component = mount(
      <TabbedNavigation
        progressType="items"
        progress={1}
      >
        <TabbedNavigationItem visited>Template</TabbedNavigationItem>
        <TabbedNavigationItem visited>Design</TabbedNavigationItem>
        <TabbedNavigationItem active>Setup</TabbedNavigationItem>
      </TabbedNavigation>
    )

    expect(component.find('.ds-tabbed-nav__progress').length).toBe(0)
    expect(component.find('TabbedNavigationItem').at(0).props().showProgress).toBeTruthy()
    expect(component.find('.ds-tabbed-nav__separator').at(0).hasClass('ds-tabbed-nav__separator--has-progress')).toBeTruthy()
  })
})
