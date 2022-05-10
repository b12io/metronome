import React from 'react'
import DemoLayoutContent from './demo-only-components/DemoLayoutContent.es6.js'
import CodeExample from './demo-only-components/CodeExample.es6.js'
import MetaData from './demo-only-components/MetaData.es6.js'
import { MetaDataProps, MetaDataPropsItem } from './demo-only-components/MetaDataProps.es6.js'

import Badge from '../../components/layout/badge/Badge.es6.js'

const BadgeProps = [
  {
    property: 'label',
    value: 'string',
    defaultValue: '',
    description: 'Badge label'
  },
  {
    property: 'icon',
    value: 'React Node',
    defaultValue: 'null',
    description: 'Badge icon'
  },
  {
    property: 'neutral',
    value: 'boolean',
    defaultValue: 'false',
    description: 'Neutral (greyish) state'
  },
  {
    property: 'success',
    value: 'boolean',
    defaultValue: 'false',
    description: 'Success (green) state'
  },
  {
    property: 'warning',
    value: 'boolean',
    defaultValue: 'false',
    description: 'Warning (red) state'
  },
  {
    property: 'primary',
    value: 'boolean',
    defaultValue: 'false',
    description: 'Primary (purple) state'
  },
  {
    property: 'filled',
    value: 'boolean',
    defaultValue: 'false',
    description: 'Filled state'
  },
  {
    property: 'selected',
    value: 'boolean',
    defaultValue: 'false',
    description: 'Selected state'
  },
  {
    property: 'uppercase',
    value: 'boolean',
    defaultValue: 'false',
    description: 'Label uppercase state'
  },
  {
    property: 'size',
    value: 'small | medium | large',
    defaultValue: 'small',
    description: 'Badge size'
  },
  {
    property: 'hasRemoveIcon',
    value: 'boolean',
    defaultValue: 'false',
    description: 'Show/hide remove icon'
  },
  {
    property: 'onRemoveClick',
    value: 'function',
    defaultValue: '() => {}',
    description: 'Function to call on remove icon click'
  },
]

function BadgesPage () {
  return (
    <DemoLayoutContent>
      <div className="app-page-title">
        <h1>Badges</h1>
        <MetaData
          importFrom="import Badge from '@b12/metronome/components/layout/badge/Badge.es6.js'"
          flow="Yes"
          tests="No"
        />
      </div>

      <div className="ds-block">
        <div className="ds-block__title">
          <h4>Default</h4>
        </div>
        <CodeExample code={`<Badge label="Default"/>
<Badge label="Primary" primary/>
<Badge label="Warning" warning/>
<Badge label="Success" success/>`}>
          <Badge
            label="Default"
          />
          <Badge
            label="Primary"
            primary
          />
          <Badge
            label="Warning"
            warning
          />
          <Badge
            label="Success"
            success
          />
        </CodeExample>
      </div>

      <div className="ds-block">
        <div className="ds-block__title">
          <h4>Filled</h4>
        </div>
        <CodeExample code={`<Badge label="Default" filled neutral/>
<Badge label="Primary" primary filled/>
<Badge label="Warning" warning filled/>
<Badge label="Success" success filled/>`}>
          <Badge
            label="Default"
            filled
            neutral
            style={{marginRight: '10px'}}
          />
          <Badge
            label="Primary"
            primary
            filled
            style={{marginRight: '10px'}}
          />
          <Badge
            label="Warning"
            warning
            filled
            style={{marginRight: '10px'}}
          />
          <Badge
            label="Success"
            success
            filled
            style={{marginRight: '10px'}}
          />
        </CodeExample>
      </div>

      <div className="ds-block">
        <div className="ds-block__title">
          <h4>Selected</h4>
        </div>
        <CodeExample code={`<Badge label="Default" filled neutral selected />
<Badge label="Primary" primary filled selected />
<Badge label="Warning" warning filled selected />
<Badge label="Success" success filled selected />`}>
          <Badge
            label="Default"
            filled
            neutral
            selected
            style={{marginRight: '10px'}}
          />
          <Badge
            label="Primary"
            primary
            filled
            selected
            style={{marginRight: '10px'}}
          />
          <Badge
            label="Warning"
            warning
            filled
            selected
            style={{marginRight: '10px'}}
          />
          <Badge
            label="Success"
            success
            filled
            selected
            style={{marginRight: '10px'}}
          />
        </CodeExample>
      </div>

      <div className="ds-block">
        <div className="ds-block__title">
          <h4>With remove icon</h4>
        </div>
        <CodeExample code={`<Badge label="Default" hasRemoveIcon/>
<Badge label="Primary" neutral filled hasRemoveIcon/>
<Badge label="Primary" primary filled hasRemoveIcon/>
<Badge label="Warning" warning filled hasRemoveIcon/>
<Badge label="Success" success filled hasRemoveIcon/>`}>
          <Badge
            label="Default"
            hasRemoveIcon
            style={{marginRight: '10px'}}
          />
          <Badge
            label="Default"
            filled
            neutral
            hasRemoveIcon
            style={{marginRight: '10px'}}
          />
          <Badge
            label="Primary"
            primary
            filled
            hasRemoveIcon
            style={{marginRight: '10px'}}
          />
          <Badge
            label="Warning"
            warning
            filled
            hasRemoveIcon
            style={{marginRight: '10px'}}
          />
          <Badge
            label="Success"
            success
            filled
            hasRemoveIcon
            style={{marginRight: '10px'}}
          />
        </CodeExample>
      </div>

      <div className="ds-block">
        <div className="ds-block__title">
          <h4>Sizes</h4>
        </div>
        <CodeExample code={`<Badge label="Default" size="small" hasRemoveIcon/>
<Badge label="Primary" size="small" neutral filled hasRemoveIcon/>
<Badge label="Primary" size="medium" primary filled hasRemoveIcon/>
<Badge label="Success" size="large" success filled hasRemoveIcon/>`}>
          <Badge
            label="Default"
            size="small"
            hasRemoveIcon
            style={{marginRight: '10px'}}
          />
          <Badge
            label="Default"
            size="small"
            filled
            neutral
            hasRemoveIcon
            style={{marginRight: '10px'}}
          />
          <Badge
            label="Primary"
            primary
            filled
            size="medium"
            hasRemoveIcon
            style={{marginRight: '10px'}}
          />
          <Badge
            label="Success"
            success
            filled
            size="large"
            hasRemoveIcon
            style={{marginRight: '10px'}}
          />
        </CodeExample>
      </div>

      <div className="ds-block">
        <div className="ds-block__title">
          <h4>Props</h4>
        </div>

        <MetaDataProps>
          {BadgeProps.map(prop => (
            <MetaDataPropsItem
              key={prop.property}
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

export default BadgesPage
