import React from 'react'
import { shallow } from 'enzyme'

import Button from '../../form/button/Button.es6.js'
import CardListConfirmation from './CardListConfirmation.es6.js'

it('should not show any buttons', function () {
  const component = shallow(
    <CardListConfirmation
      title="Title"
      help="Help text"
    />
  )

  expect(component.find(Button)).toHaveLength(0)
})

it('should render only yes button', function () {
  const component = shallow(
    <CardListConfirmation
      title="Title"
      help="Help text"
      yes="OK"
    />
  )

  expect(component.find(Button)).toHaveLength(1)

  const button = component.find(Button).at(0)
  expect(button.prop('label')).toEqual('OK')
})

it('should render only no button', function () {
  const component = shallow(
    <CardListConfirmation
      title="Title"
      help="Help text"
      no="CANCEL"
    />
  )

  expect(component.find(Button)).toHaveLength(1)

  const button = component.find(Button).at(0)
  expect(button.prop('label')).toEqual('CANCEL')
})

it('should render yes button as primary by default', function () {
  const component = shallow(
    <CardListConfirmation
      title="Title"
      help="Help text"
      yes="OK"
      no="CANCEL"
    />
  )

  const primaryButton = component.findWhere(c => c.type() === Button && c.prop('primary'))
  expect(primaryButton).toHaveLength(1)
  expect(primaryButton.at(0).prop('label')).toEqual('OK')
})

it('should render no button as primary', function () {
  const component = shallow(
    <CardListConfirmation
      title="Title"
      help="Help text"
      yes="OK"
      no="CANCEL"
      defaultAction="no"
    />
  )

  const primaryButton = component.findWhere(c => c.type() === Button && c.prop('primary'))
  expect(primaryButton).toHaveLength(1)
  expect(primaryButton.at(0).prop('label')).toEqual('CANCEL')
})

it('should trigger yes callback', function () {
  const onClick = jest.fn()
  const component = shallow(
    <CardListConfirmation
      title="Title"
      help="Help text"
      yes="OK"
      no="CANCEL"
      defaultAction="no"
      onClick={onClick}
    />
  )

  const yesButton = component.find(Button).at(1)
  yesButton.prop('onClick')()
  expect(onClick).toBeCalled()
})

it('should trigger no callback', function () {
  const onClick = jest.fn()
  const component = shallow(
    <CardListConfirmation
      title="Title"
      help="Help text"
      yes="OK"
      no="CANCEL"
      defaultAction="no"
      onClick={onClick}
    />
  )

  const noButton = component.find(Button).at(0)
  noButton.prop('onClick')()
  expect(onClick).toBeCalled()
})
