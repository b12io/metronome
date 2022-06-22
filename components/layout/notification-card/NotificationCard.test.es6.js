/* global expect */
import React from 'react'
import { shallow } from 'enzyme'

import { DateIcon } from '../../Icons.es6.js'
import NotificationCard from './NotificationCard.es6.js'

it('should render component with empty label', () => {
  const component = shallow(<NotificationCard />)
  expect(component.hasClass('ds-notification')).toBeTruthy()
  expect(component.find('Checkmark').length).toBe(1)
  expect(component.find('.ds-notification__label').text()).toBe('')
})

it('should render custom label with success class name', () => {
  const component = shallow(<NotificationCard
    label="My success notification"
    success
  />)
  expect(component.hasClass('ds-notification--success')).toBeTruthy()
  expect(component.find('.ds-notification__label').text()).toBe('My success notification')
})

it('should render DateIcon component as notification icon', () => {
  const component = shallow(<NotificationCard
    icon={<DateIcon />}
    label="My success notification"
    success
  />)
  expect(component.find('DateIcon').length).toBe(1)
})

it('should render component with warning option', () => {
  const component = shallow(<NotificationCard warning />)
  expect(component.hasClass('ds-notification--warning')).toBeTruthy()
})
