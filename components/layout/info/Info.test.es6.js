import React from 'react'
import { shallow, mount } from 'enzyme'
import { Hidden } from '../../Icons.es6.js'

import Info from './Info.es6.js'

it('should render svg set through the icon property', () => {
  const mockDelay = 100
  const component = shallow(<Info
      text='Test message'
      icon={Hidden}
      delay={mockDelay}
    />)

  expect(component.find('B12Tooltip').length).toEqual(1)
  expect(component.find('B12Tooltip').html()).toContain('svg')
  expect(component.find('B12Tooltip').prop('delay')).toEqual(mockDelay)
})

it('should render svg set as a child', () => {
  const component = shallow(<Info
      text='Test message'
    >
      <Hidden/>
    </Info>)

  expect(component.find('B12Tooltip').length).toEqual(1)
  expect(component.find('B12Tooltip').html()).toContain('svg')
})
