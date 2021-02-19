/* global expect */
import React from 'react'
import renderer from 'react-test-renderer'

import InformationalCard from './InformationalCard.es6.js'

describe('InformationalCard component', () => {
  let testProps

  beforeEach(() => {
    testProps = {
      heading: 'Data.',
      subheading: 'Cookies.'
    }
  })

  test('should render correctly with children', () => {
    const tree = renderer.create(
      <InformationalCard {...testProps}>
        <div>Test children prop</div>
      </InformationalCard>
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('should render correctly without children', () => {
    const tree = renderer.create(<InformationalCard {...testProps} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
