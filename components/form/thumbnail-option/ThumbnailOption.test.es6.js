import React from 'react'
import { mount, shallow } from 'enzyme'
import faker from 'faker'

import ThumbnailOption from './ThumbnailOption.es6.js'

let image

beforeEach(() => {
  image = faker.image.imageUrl()
})

it('should render thumbnail', () => {
  const component = shallow(<ThumbnailOption thumbnail={image} />)
  expect(component.find('.ds-thumbnail-option__thumbnail-container').exists())
  expect(component.find(`img[src='${image}']`).exists())
})

it('should be selected', () => {
  const component = mount(<ThumbnailOption thumbnail={image} selected />)
  expect(component.find('.ds-thumbnail-option--selected').exists())
  expect(component.find('.ds-thumbnail-option__selected-icon').exists())
})

it('should call onOptionClick', () => {
  const onOptionClick = jest.fn()
  const component = shallow(
    <ThumbnailOption
      thumbnail={image}
      onOptionClick={onOptionClick}
      value={{ slug: 'test' }}
    />
  )
  component.find('.ds-thumbnail-option').at(0).simulate('click')
  expect(onOptionClick.mock.calls.length).toEqual(1)
  expect(onOptionClick.mock.calls[0][1]).toEqual({ slug: 'test' })
})
