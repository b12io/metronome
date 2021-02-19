import React from 'react'
import { shallow } from 'enzyme'
import faker from 'faker'

import PaletteOption from './PaletteOption.es6.js'

let color1, color2, colors

beforeEach(() => {
  color1 = faker.internet.color()
  color2 = faker.internet.color()
  colors = [color1, color2]
})

it('should render colors', () => {
  const component = shallow(<PaletteOption colors={colors} />)
  expect(component.find(`div[style*="background-color:${color1}"]`).exists())
  expect(component.find(`div[style*="background-color:${color2}"]`).exists())
})

it('should be selected', () => {
  const component = shallow(<PaletteOption colors={colors} selected />)
  expect(component.find('.ds-palette-option--selected').exists())
  expect(component.find('.ds-palette-option__selected-icon').exists())
})

it('should show block option', () => {
  const component = shallow(<PaletteOption colors={colors} block />)
  expect(component.find('.ds-palette-option--block').exists())
})

it('should call onOptionClick', () => {
  const onOptionClick = jest.fn()
  const component = shallow(
    <PaletteOption colors={colors}
      onOptionClick={onOptionClick}
      value={{slug: 'test'}}
    />
  )
  component.find('.ds-palette-option').at(0).simulate('click')
  expect(onOptionClick.mock.calls.length).toEqual(1)
  expect(onOptionClick.mock.calls[0][1]).toEqual({ slug: 'test' })
})
