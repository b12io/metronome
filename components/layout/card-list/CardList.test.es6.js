import React from 'react'
import { shallow } from 'enzyme'

import CardList from './CardList.es6.js'

it('is bordered and clickable by default', function () {
  const component = shallow(
    <CardList bordered/>
  )

  expect(component.hasClass('card-list--bordered')).toBe(true)
  expect(component.hasClass('card-list--is-clickable')).toBe(true)
})

it('is not bordered', function () {
  const component = shallow(
    <CardList bordered={false}/>
  )

  expect(component.hasClass('card-list--bordered')).toBe(false)
})

it('is clickable', function () {
  const component = shallow(
    <CardList/>
  )

  expect(component.hasClass('card-list--is-clickable')).toBe(true)
})

it('is not clickable', function () {
  const component = shallow(
    <CardList clickable={false}/>
  )

  expect(component.hasClass('card-list--is-clickable')).toBe(false)
})
