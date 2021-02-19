/* global expect */
import React from 'react'
import renderer from 'react-test-renderer'
import FilterOption from '../FilterOption'

it('should not display dropdown by default', () => {
  const tree = renderer.create(<FilterOption filters={[]} />).toJSON()
  expect(tree).toMatchSnapshot()
})

it('should display dropdown', () => {
  const tree = renderer.create(<FilterOption filters={[]} isOpened />).toJSON()
  expect(tree).toMatchSnapshot()
})
