import React, { useState } from 'react'
import DemoLayoutContent from './demo-only-components/DemoLayoutContent.es6.js'
import CodeExample from './demo-only-components/CodeExample.es6.js'
import MetaData from './demo-only-components/MetaData.es6.js'
import { MetaDataProps, MetaDataPropsItem } from './demo-only-components/MetaDataProps.es6.js'

import ToggleButton from '../../components/form/toggle-button/ToggleButton.es6.js'

function Buttons () {
  const [checked, setChecked] = useState(false)
  return (
    <DemoLayoutContent>
      <div className="app-page-title">
        <h1>Toggle buttons</h1>

        <MetaData
          importFrom="import Button from '@b12/metronome/components/form/toggle-button/ToggleButton.es6.js'"
          flow="No"
          tests="Yes"
        />
      </div>

      <div className="ds-block">
        <CodeExample code={`<ToggleButton checked={checked} onChange={setChecked} label={checked ? 'Checked' : 'Unchecked'} />`}>
          <ToggleButton checked={checked} onChange={setChecked} label={checked ? 'Checked' : 'Unchecked'} />
        </CodeExample>
      </div>
      <div className="ds-block">
        <div className="ds-block__title">
          <h4>Props</h4>
        </div>

        <MetaDataProps>
          <MetaDataPropsItem
            property="label"
            value="string | Node"
            defaultValue="-"
            description="Label of the toggle button"
          />
          <MetaDataPropsItem
            property="checked"
            value="Boolean"
            defaultValue="false"
            description="Defines whether the toggle button is checked"
          />
          <MetaDataPropsItem
            property="onChange"
            value="function"
            defaultValue="() => {}"
            description="Triggers when the toggle button is clicked. Returns a boolean value."
          />
          <MetaDataPropsItem
            property="className"
            value="string | Object"
            defaultValue="-"
            description="Apply classes if needed"
          />
        </MetaDataProps>
      </div>
    </DemoLayoutContent>
  )
}

export default Buttons
