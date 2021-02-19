/* global expect */

import React from 'react'
import { shallow } from 'enzyme'

import BlockContent from './BlockContent'

it('renders properly', () => {
  const component = shallow(<BlockContent />)
  expect(component.prop('className')).toEqual('ds-content-block__body')
})
