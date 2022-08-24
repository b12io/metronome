/* global expect, jest */

import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'

import Option from './Option.es6.js'

it('should have correct className', () => {
  const component = shallow(<Option label="test label" />)
  expect(
    component.hasClass('ds-form-control-select__dropdown-options-item')
  ).toBeTruthy()
})

it('should add collection className for collection option', () => {
  const component = shallow(<Option collectionOption label="test label" />)
  expect(
    component.hasClass(
      'ds-form-control-select__dropdown-options-item--collection'
    )
  )
})

it('should display its label', () => {
  const component = shallow(<Option label="test label" />)
  expect(component.text().trim()).toEqual('test label')
})

it('should call `onOptionClick`', () => {
  const onOptionClick = jest.fn()
  const component = shallow(
    <Option onOptionClick={onOptionClick} label="test label" />
  )
  component
    .find('.ds-form-control-select__dropdown-options-item')
    .simulate('mousedown')
  expect(onOptionClick.mock.calls.length).toEqual(1)
})

it('renders correctly', () => {
  const tree = renderer.create(<Option label="test label" />).toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders correctly with preview', () => {
  const tree = renderer
    .create(<Option label="test label" preview="test preview" />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders correctly as collection option with preview', () => {
  const preview = {
    thumbnail: 'test-image.jpg',
    original: 'test-image.jpg'
  }
  const tree = renderer
    .create(<Option collectionOption label="test label" preview={preview} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders correctly as collection option without preview', () => {
  const tree = renderer
    .create(<Option collectionOption label="test label" />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
