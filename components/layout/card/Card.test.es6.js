/* global expect */
import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'

import Card from './Card.es6.js'
import { ChevronRight, PlusCircle } from '../../Icons.es6.js'

it('renders the card component', () => {
  const component = shallow(<Card />)
  expect(component.prop('className')).toEqual('ds-card')
})

it('adds the proper class', () => {
  const component = shallow(<Card add />)
  expect(component.prop('className')).toEqual(
    expect.stringContaining('ds-card--add')
  )
})

it('renders correctly', () => {
  const tree = renderer
    .create(<Card icon={<ChevronRight />} label="Link" value="Test Link" />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders correctly with add prop', () => {
  const tree = renderer
    .create(<Card add icon={<PlusCircle />} label="Link" value="None" />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('calls onMouseEnter', () => {
  const onMouseEnter = jest.fn()
  const component = shallow(<Card onMouseEnter={onMouseEnter} />)
  component.find('.ds-card').at(0).simulate('mouseenter')
  expect(onMouseEnter.mock.calls.length).toBe(1)
})

it('calls onMouseEnter', () => {
  const onMouseLeave = jest.fn()
  const component = shallow(<Card onMouseLeave={onMouseLeave} />)
  component.find('.ds-card').at(0).simulate('mouseleave')
  expect(onMouseLeave.mock.calls.length).toBe(1)
})
