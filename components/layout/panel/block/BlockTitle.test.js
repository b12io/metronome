/* global expect */

import React from 'react'
import { shallow, mount } from 'enzyme'

import BlockTitle from './BlockTitle'
import Button from '../../../form/button/Button'
import { Home } from '../../../Icons'

it('should have title text', () => {
  const component = shallow(<BlockTitle label="I am a title" />)
  expect(component.find('.ds-content-block__header-title').exists()).toBe(true)
  expect(component.find('.ds-content-block__header-title h4').exists()).toBe(true)
})

it('should show icon', () => {
  const component = mount(<BlockTitle label="I am a title" icon={<Home />} />)
  expect(component.find('Icon').exists()).toBe(true)
})

it('should show action button', () => {
  const component = shallow(<BlockTitle label="I am a title" button={<Button label="I am a button" small />} />)
  expect(component.find('Button').exists()).toBe(true)
})

it('should have description text', () => {
  const component = shallow(<BlockTitle label="I am a title" description="I am a description" />)
  expect(component.find('.ds-content-block__header-description').exists()).toBe(true)
})
