/* global expect */

import React from 'react'
import { shallow } from 'enzyme'
import Button from './Button.es6.js'
import { Help } from '../../Icons.es6.js'

it('should render default button', () => {
  const component = shallow(<Button />)
  expect(component.prop('className')).toEqual('button')
})

it('should render primary button', () => {
  const component = shallow(<Button primary />)
  expect(component.prop('className')).toEqual('button button--primary')
})

it('should render loading', () => {
  const component = shallow(<Button loading />)
  expect(component.prop('className')).toEqual('button is-loading')
  expect(component.find('.button__spinner').length).toEqual(1)
})

it('should render small', () => {
  const component = shallow(<Button small />)
  expect(component.prop('className')).toEqual('button button--sm')
})

it('should render large', () => {
  const component = shallow(<Button large />)
  expect(component.prop('className')).toEqual('button button--lg')
})

it('should render icon', () => {
  const component = shallow(<Button icon={<Help />} />)
  expect(component.find(Help).length).toEqual(1)
})

it('should be active', () => {
  const component = shallow(<Button active />)
  expect(component.prop('className')).toEqual('button active')
})

it('should pass id', () => {
  const component = shallow(<Button id="button-id"/>)
  expect(component.prop('id')).toEqual('button-id')
})

it('should render alternative button', () => {
  const component = shallow(<Button alternative/>)
  expect(component.hasClass('button--alternative')).toBe(true)
})

it('should pass type', () => {
  const component = shallow(<Button type="submit" />)
  expect(component.find('button').prop('type')).toEqual('submit')
})
