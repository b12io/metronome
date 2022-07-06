import React from 'react'
import DemoLayoutContent from './demo-only-components/DemoLayoutContent.es6.js'
import CodeExample from './demo-only-components/CodeExample.es6.js'
import MetaData from './demo-only-components/MetaData.es6.js'
import {
  MetaDataProps,
  MetaDataPropsItem
} from './demo-only-components/MetaDataProps.es6.js'

import Stepper from '../../components/form/stepper/Stepper.es6.js'

function StepperPage () {
  return (
    <DemoLayoutContent>
      <div className="app-page-title">
        <h1>Stepper</h1>
        <p>
          An input component with increase and decrease value functionality.
          User can input value manually. The input itself contains a pattern
          `[0-9]` that restricts user to input only numbers.
        </p>
        <MetaData
          importFrom="import Stepper from '@b12/metronome/components/form/stepper/Stepper.es6.js'"
          flow="Yes"
          tests="Yes"
        />
      </div>
      <div className="ds-block">
        <CodeExample
          code={`<Stepper label="Simple stepper component" value={10} min={5} max={15} step={1} />
<div style={{width: '260px', marginTop: '10px'}}>
  <Stepper label="Choose a value" value={22} min={20} max={24} step={1} />
</div>`}
        >
          <Stepper
            label="Simple stepper component"
            value={10}
            min={5}
            max={15}
            step={1}
          />
          <div style={{ width: '260px', marginTop: '10px' }}>
            <Stepper
              label="Choose a value"
              value={22}
              min={20}
              max={24}
              step={1}
            />
          </div>
        </CodeExample>
      </div>

      <div className="ds-block">
        <div className="ds-block__title">
          <h4>Props</h4>
        </div>

        <MetaDataProps>
          <MetaDataPropsItem
            property="label"
            value="string"
            defaultValue="null"
            description="Label of an input field"
          />
          <MetaDataPropsItem
            property="value"
            value="number"
            defaultValue="0"
            description="Predefined value of an input"
          />
          <MetaDataPropsItem
            property="min"
            value="number"
            defaultValue="0"
            description="Lowest value for input"
          />
          <MetaDataPropsItem
            property="max"
            value="number"
            defaultValue="100"
            description="Maximum value for input"
          />
          <MetaDataPropsItem
            property="step"
            value="number"
            defaultValue="1"
            description="Increases or decreases input value by provided step number"
          />
        </MetaDataProps>
      </div>
    </DemoLayoutContent>
  )
}

export default StepperPage
