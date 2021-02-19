import React from 'react'
import { shallow } from 'enzyme'

import Button from '../../form/button/Button'
import FullscreenOverlay from './FullscreenOverlay'

it('should render the leftIcon', function () {
  const icon = shallow(
    <svg />
  )
  const component = shallow(
    <FullscreenOverlay leftIcon={icon}/>
  )

  expect(component.find('.ds-overlay__header-icon')).toHaveLength(1)
})

it('should render no leftIcon by default', function () {
  const component = shallow(
    <FullscreenOverlay/>
  )

  expect(component.find('.ds-overlay__header-icon')).toHaveLength(0)
})
