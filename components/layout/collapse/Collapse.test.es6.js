/* global expect */
import React from 'react'
import { mount } from 'enzyme'

import Collapse from './Collapse.es6.js'

const text = (<p>Lorem ipsum</p>)

it('should render component with children', () => {
  const component = mount(<Collapse collapseHeight={60}>
    {text}
  </Collapse>)
  component.instance().componentDidMount()
  component.setState({
    contentHeight: 120
  })
  expect(component.find('.ds-collapse').length).toBe(1)
  expect(component.find('.ds-collapse__action').text()).toBe('View less')
  expect(component.instance().state.isCollapsed).toBeFalsy()
})

it('should collapse and expand on `.ds-collapse__action` click', () => {
  const component = mount(<Collapse collapseHeight={60}>
    {text}
  </Collapse>)
  component.instance().componentDidMount()
  component.setState({
    contentHeight: 120
  })
  // Collapse
  component.find('.ds-collapse__action').simulate('click')
  expect(component.instance().state.isCollapsed).toBeTruthy()
  expect(component.find('.ds-collapse__action').text()).toBe('View more')
  expect(component.find('.ds-collapse__body').props().style).toEqual({ height: 60 })

  // Expand
  component.find('.ds-collapse__action').simulate('click')
  expect(component.instance().state.isCollapsed).toBeFalsy()
  expect(component.find('.ds-collapse__action').text()).toBe('View less')
  expect(component.find('.ds-collapse__body').props().style).toEqual({ height: 120 })
})

it('should render custom action labels', () => {
  const component = mount(<Collapse
    collapseHeight={80}
    expandLabel="More"
    collapseLabel="Less"
    isCollapsed={true}
  >
    {text}
  </Collapse>)
  component.instance().componentDidMount()
  component.setState({
    contentHeight: 120
  })
  expect(component.instance().state.isCollapsed).toBeTruthy()
  expect(component.find('.ds-collapse__action').text()).toBe('More')
  // Expand
  component.find('.ds-collapse__action').simulate('click')
  expect(component.find('.ds-collapse__action').text()).toBe('Less')
})

it('should not render action label if contentHeight is smaller than collapseHeight ', () => {
  const component = mount(<Collapse collapseHeight={60}>
    <p>Some small text</p>
  </Collapse>)
  component.setState({
    contentHeight: 10
  })
  expect(component.find('.ds-collapse__action').length).toBe(0)
})
