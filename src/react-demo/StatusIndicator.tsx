import React from 'react'
import DemoLayoutContent from './demo-only-components/DemoLayoutContent'
import CodeExample from './demo-only-components/CodeExample'
import MetaData from './demo-only-components/MetaData'
import { MetaDataProps, MetaDataPropsItem } from './demo-only-components/MetaDataProps'

import StatusIndicator from '../../components/layout/status-indicator/StatusIndicator'

const BadgeProps = [
  {
    property: 'status',
    value: 'success | default | error | warning',
    defaultValue: 'default',
    description: 'Status'
  },
  {
    property: 'statusLabels',
    value: 'Object',
    defaultValue: `{
      success: 'Active',
      default: 'Inactive',
      error: 'Error',
      warning: 'Warning'
    }`,
    description: 'Labels for each type of status'
  }
]

function StatusIndicatorPage () {
  const statusLabels ={
    success: 'Available',
    error: 'Not configured',
    default: 'Not available',
    warning: 'Warning'
  }
  return (
    <DemoLayoutContent>
      <div className="app-page-title">
        <h1>StatusIndicator</h1>
        <MetaData
          importFrom="import StatusIndicator from '@b12/design-system/components/layout/status-indicator/StatusIndicator'"
          flow="Yes"
          tests="No"
        />
      </div>

      <div className="ds-block">
        <div className="ds-block__title">
          <h4>Default</h4>
        </div>
        <CodeExample code={`<StatusIndicator />
<StatusIndicator status="success"/>
<StatusIndicator status="warning"/>
<StatusIndicator status="error"/>`}>
          <StatusIndicator /><br/>
          <StatusIndicator status="success"/><br/>
          <StatusIndicator status="warning"/><br/>
          <StatusIndicator status="error"/>
        </CodeExample>
      </div>

      <div className="ds-block">
        <div className="ds-block__title">
          <h4>Filled</h4>
        </div>
        <CodeExample code={`<StatusIndicator
  statusLabels={{
    success: 'Available',
    error: 'Not configured',
    default: 'Not available',
    warning: 'Warning'
  }}/>

<StatusIndicator
  status="success"
  statusLabels={{
    success: 'Available',
    error: 'Not configured',
    default: 'Not available',
    warning: 'Warning'
  }}/>

<StatusIndicator
  status="error"
  statusLabels={{
    success: 'Available',
    error: 'Not configured',
    default: 'Not available',
    warning: 'Warning'
  }}/>

<StatusIndicator
  status="warning"
  statusLabels={{
    success: 'Available',
    error: 'Not configured',
    default: 'Not available',
    warning: 'Warning'
  }}/>`}>
          <StatusIndicator statusLabels={statusLabels}/><br/>
          <StatusIndicator status="success" statusLabels={statusLabels}/><br/>
          <StatusIndicator status="warning" statusLabels={statusLabels}/><br/>
          <StatusIndicator status="error" statusLabels={statusLabels}/>
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

export default StatusIndicatorPage
