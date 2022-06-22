/* global expect */
import React from 'react'
import { shallow, mount } from 'enzyme'

import Block from './Block.es6.js'
import BlockTitle from './BlockTitle.es6.js'
import BlockContent from './BlockContent.es6.js'

it('has no bottom divider', () => {
  const component = shallow(<Block />)
  expect(component.hasClass('ds-content-block--divider')).toBe(false)
})

it('has bottom divider', () => {
  const component = shallow(<Block bottomDivider />)
  expect(component.hasClass('ds-content-block--divider')).toBe(true)
})

it('should render only title or content components', () => {
  const component = mount(<Block>
    <BlockTitle label="I am a title" />
    <BlockContent>I am a content</BlockContent>
  </Block>)
  expect(component.find('BlockTitle').type()).toEqual(BlockTitle)
  expect(component.find('BlockContent').type()).toEqual(BlockContent)
})

it('should not render anything rather than title or content components', () => {
  const component = mount(<Block>
    <h4>I am a title</h4>
    <div>I am a content</div>
  </Block>)
  expect(component.findWhere(c => c.type() === BlockTitle).length).toBe(0)
  expect(component.findWhere(c => c.type() === BlockContent).length).toBe(0)
})
