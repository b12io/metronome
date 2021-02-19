import React from 'react'
import DemoLayoutContent from './demo-only-components/DemoLayoutContent'
import CodeExample from './demo-only-components/CodeExample'
import MetaData from './demo-only-components/MetaData'
import { MetaDataProps, MetaDataPropsItem } from './demo-only-components/MetaDataProps'

import SimpleCard from '../../components/layout/simple-card/SimpleCard'

const RangeSliderProps = [
  {
    property: 'align',
    value: 'left | center | right',
    defaultValue: 'left',
    description: 'Content alignment'
  },
  {
    property: 'className',
    value: 'string | Object',
    defaultValue: '-',
    description: 'Apply classes if needed'
  }
]

export default function AvatarItemPage () {
  return (
    <DemoLayoutContent>
      <div className="app-page-title">
        <h1>SimpleCard</h1>
        <p>Simplest card component</p>
        <MetaData
          importFrom="import SimpleCard from '@b12/design-system/components/layout/simple-card/SimpleCard'"
          flow="Yes"
          tests="No"
        />
      </div>
      <div className="ds-block">
        <div className="ds-block__title">
          <h4>Example</h4>
        </div>

        <CodeExample code={`<SimpleCard className="customize-classname" align="center">
  Any content
</SimpleCard>
`}>
          <SimpleCard className="customize-classname" align="center">
            <div>Any content</div>
          </SimpleCard>
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
