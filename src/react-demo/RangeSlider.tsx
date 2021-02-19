import React from 'react'
import DemoLayoutContent from './demo-only-components/DemoLayoutContent'
import CodeExample from './demo-only-components/CodeExample'
import MetaData from './demo-only-components/MetaData'
import { MetaDataProps, MetaDataPropsItem } from './demo-only-components/MetaDataProps'

import RangeSlider from '../../components/form/range-slider/RangeSlider'
import DemoRangeSlider from './demo-only-components/DemoRangeSlider'

const RangeSliderProps = [
  {
    property: 'label',
    value: 'string',
    defaultValue: '-',
    description: 'Component label'
  },
  {
    property: 'min',
    value: 'string',
    defaultValue: '-',
    description: 'Range min value'
  },
  {
    property: 'max',
    value: 'string',
    defaultValue: '-',
    description: 'Range max value'
  },
  {
    property: 'value',
    value: 'string | number',
    defaultValue: '-',
    description: 'Input value'
  },
  {
    property: 'step',
    value: 'string | number',
    defaultValue: '-',
    description: 'Input range step value'
  },
  {
    property: 'minCaption',
    value: 'string',
    defaultValue: '-',
    description: 'Range min caption'
  },
  {
    property: 'centerCaption',
    value: 'string',
    defaultValue: '-',
    description: 'Range center caption'
  },
  {
    property: 'maxCaption',
    value: 'string',
    defaultValue: '-',
    description: 'Range max caption'
  },
  {
    property: 'disabled',
    value: 'boolean',
    defaultValue: '-',
    description: 'Disable input'
  },
  {
    property: 'className',
    value: 'string | Object',
    defaultValue: '-',
    description: 'Apply classes if needed'
  },
  {
    property: 'onChange',
    value: '(value: string) => any',
    defaultValue: '-',
    description: 'Function called every time range is changed'
  }
]

export default function AvatarItemPage () {
  return (
    <DemoLayoutContent>
      <div className="app-page-title">
        <h1>RangeSlider</h1>
        <p>Input type range form component</p>
        <MetaData
          importFrom="import RangeSlider from '@b12/design-system/components/form/range-slider/RangeSlider'"
          flow="Yes"
          tests="Yes"
        />
      </div>
      <div className="ds-block">
        <div className="ds-block__title">
          <h4>Example</h4>
        </div>

        <CodeExample code={`<RangeSlider
  label="Basic"
  value={basic}
  onChange={(value) => this.handleChange(value, 'basic')}
/>
<RangeSlider
  label="With min/max"
  value={minMax}
  min="1"
  max="100"
  onChange={(value) => {}}
/>
<RangeSlider
  label="With min/max and step"
  value={withStep}
  min="10"
  max="120"
  step="10"
  onChange={(value) => {}}
/>
<RangeSlider
  label="Disabled state"
  value={withStep}
  disabled
  onChange={(value) => {}}
/>
<RangeSlider
  label="With range captions"
  value={basic}
  minCaption="Left"
  centerCaption="Center"
  maxCaption="Right"
  onChange={(value) => {}}
/>
`}>
          <DemoRangeSlider />
        </CodeExample>
      </div>
      <div className="ds-block">
        <div className="ds-block__title">
          <h4>Props</h4>
        </div>

        <MetaDataProps>
          {RangeSliderProps.map(prop => (
            <MetaDataPropsItem
              property={prop.property}
              value={prop.value}
              defaultValue={prop.defaultValue}
              description={prop.description}
            />
          ))}
        </MetaDataProps>
      </div>
    </DemoLayoutContent>
  )
}
