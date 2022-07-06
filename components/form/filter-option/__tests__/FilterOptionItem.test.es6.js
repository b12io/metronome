import React from 'react'
import renderer from 'react-test-renderer'
import FilterOptionItem from '../FilterOptionItem.es6.js'

describe('FilterOptionItem component', () => {
  let testProps

  beforeEach(() => {
    testProps = {
      filter: {
        field_name: 'id',
        operator: 'gte',
        value: 1
      },
      filterableFields: [],
      handleUpdateFilter: jest.fn()
    }
  })

  test('should not display content by default', () => {
    const tree = renderer.create(<FilterOptionItem {...testProps} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('should display content', () => {
    const tree = renderer
      .create(<FilterOptionItem {...testProps} isOpened />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
