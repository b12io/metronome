import React from 'react'
import { shallow } from 'enzyme'

import CollapsibleCardList from './CollapsibleCardList.es6.js'
import CollapsibleCardListItem from './CollapsibleCardListItem.es6.js'

let component

beforeEach(() => {
  component = shallow(
    <CollapsibleCardList>
      <CollapsibleCardListItem
        label="Label 1"
      >
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, odio.</p>
      </CollapsibleCardListItem>
      <CollapsibleCardListItem
        label="Label 2"
      >
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, odio.</p>
      </CollapsibleCardListItem>
      <CollapsibleCardListItem
        label="Label 3"
      >
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, odio.</p>
      </CollapsibleCardListItem>
    </CollapsibleCardList>
  )
})

it('should render component with three children items', function () {
  expect(component.hasClass('collapsible-card-list')).toBe(true)
  expect(component.find('CollapsibleCardListItem').length).toBe(3)
  expect(component.instance().state.activeIndex).toBe(-1)
  expect(component.find('CollapsibleCardListItem').some(
    item => item.props().isActive
  )).toBeFalsy()
})

it('should switch activeIndex on CollapsibleCardListItem click', () => {
  component.find('CollapsibleCardListItem').at(1).props().onSelect()
  expect(component.instance().state.activeIndex).toBe(1)
  component.update()
  expect(component.find('CollapsibleCardListItem').at(1).props().isActive).toBeTruthy()
})

it('should toggle activeIndex on CollapsibleCardListItem click several times', () => {
  const cardListItem = component.find('CollapsibleCardListItem').at(1)
  cardListItem.props().onSelect()
  expect(component.instance().state.activeIndex).toBe(1)
  component.update()
  expect(component.find('CollapsibleCardListItem').at(1).props().isActive).toBeTruthy()
  cardListItem.props().onSelect()
  expect(component.instance().state.activeIndex).toBe(-1)
  component.update()
  expect(component.find('CollapsibleCardListItem').at(1).props().isActive).toBeFalsy()
})

it('should open proper card list item when activeIndex is set', () => {
  const component = shallow(
    <CollapsibleCardList activeIndex={1}>
      <CollapsibleCardListItem
        label="Label 1"
      >
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, odio.</p>
      </CollapsibleCardListItem>
      <CollapsibleCardListItem
        label="Label 2"
      >
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, odio.</p>
      </CollapsibleCardListItem>
    </CollapsibleCardList>
  )
  expect(component.instance().state.activeIndex).toBe(1)
  expect(component.find('CollapsibleCardListItem').at(1).props().isActive).toBeTruthy()
})
