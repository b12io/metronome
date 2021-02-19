import React from 'react'
import { shallow } from 'enzyme'
import faker from 'faker'

import CheckboxSelect from './CheckboxSelect'
import Checkbox from '../checkbox/Checkbox'
import Option from '../option/Option'
import Select from '../select/Select'

let label, option1, option2, options, component

beforeEach(() => {
  label = faker.lorem.word()
  option1 = {
    label: 'Option1',
    value: 1
  }
  option2 = {
    label: 'Option2',
    value: 2
  }
  options = [option1, option2]
  component = shallow(
    <CheckboxSelect
      checked={true}
      disabled={false}
      label={label}
      selectOptions={options}
      selectedOption={option1}
    />
  )
})

it('should render checkbox and not select when unchecked', () => {
  const unchecked = shallow(<CheckboxSelect checked={false} />)
  expect(unchecked.find(Checkbox).exists())
  expect(unchecked.find(Select).exists()).toBeFalsy()
})

it('should render checkbox and select when checked', () => {
  expect(component.find(Checkbox).exists())
  expect(component.find(Select).exists())
  expect(component.find(Option).exists())
})

it('should render all options', () => {
  expect(component.find(Option)).toHaveLength(options.length)
})

it('should reflect the active option', () => {
  expect(component.find(Option).at(0).prop('active')).toEqual(true)
  expect(component.find(Select).at(0).prop('placeholder')).toEqual(option1.label)
})

it('should show the right checkbox label', () => {
  expect(component.find(Checkbox).at(0).prop('label')).toEqual(label)
})

it('should disable checkbox when disabled', () => {
  const disabled = shallow(<CheckboxSelect disabled={true} />)
  expect(disabled.find(Checkbox).at(0).prop('disabled')).toEqual(true)
})
