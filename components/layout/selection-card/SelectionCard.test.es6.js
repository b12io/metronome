import React from 'react'
import { shallow } from 'enzyme'

import Button from '../../form/button/Button.es6.js'
import SelectionCard from './SelectionCard.es6.js'

it('should render one button', function () {
  const component = shallow(<SelectionCard buttonLabel="OK" />)

  expect(component.find(Button)).toHaveLength(1)

  const button = component.find(Button).at(0)
  expect(button.prop('label')).toEqual('OK')
})

it('should render no preview', function () {
  const component = shallow(<SelectionCard preview={null} />)

  expect(component.find('.ds-selection-card__preview')).toHaveLength(0)
})

it('should render one preview', function () {
  const previewNode = <div />
  const component = shallow(<SelectionCard preview={previewNode} />)

  expect(component.find('.ds-selection-card__preview')).toHaveLength(1)
})

it('should render a thumbnail', function () {
  const component = shallow(
    <SelectionCard thumbnail={'thumbnail.png'} thumbnailCover={true} />
  )

  expect(component.find('.ds-selection-card__thumbnail')).toHaveLength(1)
  expect(component.find('.ds-selection-card__thumbnail-cover')).toHaveLength(1)
})

it('should call onclick callback', function () {
  const onClickStub = jest.fn()
  const component = shallow(
    <SelectionCard value="nice" onClick={onClickStub} buttonLabel="OK" />
  )

  const button = component.find(Button).at(0)
  button.simulate('click')
  expect(onClickStub).toBeCalledWith('nice')
})

it('should scroll', function () {
  const component = shallow(<SelectionCard scroll />)

  expect(component.hasClass('ds-selection-card__scroll')).toBe(true)
})

it('should not scroll', function () {
  const component = shallow(<SelectionCard scroll={false} />)

  expect(component.hasClass('ds-selection-card__scroll')).toBe(false)
})
