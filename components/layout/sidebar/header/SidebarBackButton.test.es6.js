/* global expect, jest */
import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'

import SidebarBackButton from './SidebarBackButton.es6.js'

describe('SidebarBackButton component', () => {
  test('renders correctly', () => {
    const tree = renderer
      .create(<SidebarBackButton onClick={jest.fn()} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('fires onClick prop when clicked', () => {
    const wrapper = shallow(<SidebarBackButton onClick={jest.fn()} />)
    wrapper.find('.ds-sidebar__header-back-button-container').simulate('click')
    expect(wrapper.instance().props.onClick).toHaveBeenCalled()
  })
})
