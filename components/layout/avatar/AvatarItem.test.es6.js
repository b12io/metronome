/* global expect */

import React from 'react'
import { shallow } from 'enzyme'

import AvatarItem from './AvatarItem.es6.js'

const onClick = jest.fn()
const defaultAvatarComponent = shallow(
  <AvatarItem
    primaryText="Fluffy Mittens"
    secondaryText="Is online now"
    imgSrc="http://placekitten.com/200/200"
    isActive
    hasHover
    onClick={onClick}
  />
)

it('renders primary and secondary text', () => {
  expect(defaultAvatarComponent.find('.ds-avatar__text-primary').text()).toBe('Fluffy Mittens')
  expect(defaultAvatarComponent.find('.ds-avatar__text-secondary').text()).toBe('Is online now')
})

it('renders avatar image', () => {
  expect(defaultAvatarComponent.find('.ds-avatar__avatar').hasClass('ds-avatar__avatar--has-image')).toBe(true)
  const avatarImage = defaultAvatarComponent.find('.ds-avatar__avatar').prop('style').backgroundImage
  expect(avatarImage).toEqual('url(http://placekitten.com/200/200)')
})

it('is clickable', () => {
  defaultAvatarComponent.simulate('click')
  expect(onClick.mock.calls.length).toBe(1)
})

it('has hover state', () => {
  expect(defaultAvatarComponent.hasClass('ds-avatar--has-hover')).toBe(true)
})

it('has active indicator', () => {
  expect(defaultAvatarComponent.hasClass('ds-avatar--is-active')).toBe(true)
})

it('shows avatar only', () => {
  const component = shallow(
    <AvatarItem
      primaryText="Fluffy Mittens"
      secondaryText="Is online now"
      showIconOnly
    />
  )
  expect(component.find('.ds-avatar__text').exists()).toBe(false)
})

it('renders initials properly', () => {
  const component = shallow(
    <AvatarItem
      primaryText="Fluffy"
    />
  )
  const component1 = shallow(
    <AvatarItem
      primaryText="Fluffy Mittens"
    />
  )
  const component2 = shallow(
    <AvatarItem
      primaryText="Fluffy Dragon Mittens"
    />
  )
  expect(component.find('.ds-avatar__avatar').text()).toBe('F')
  expect(component1.find('.ds-avatar__avatar').text()).toBe('FM')
  expect(component2.find('.ds-avatar__avatar').text()).toBe('FM')
})

