import React from 'react'
import DemoLayoutContent from './demo-only-components/DemoLayoutContent.es6.js'
import CodeExample from './demo-only-components/CodeExample.es6.js'
import MetaData from './demo-only-components/MetaData.es6.js'
import { MetaDataProps, MetaDataPropsItem } from './demo-only-components/MetaDataProps.es6.js'

import DimensionGroup from '../../components/form/dimension/DimensionGroup.es6.js'
import DimensionInput from '../../components/form/dimension/DimensionInput.es6.js'
import DimensionBoolean from '../../components/form/dimension/DimensionBoolean.es6.js'
import DimensionSelect from '../../components/form/dimension/DimensionSelect.es6.js'

function InputDimension () {
  return (
    <DemoLayoutContent>
      <div className="app-page-title">
        <h1>Dimension input</h1>
        <p>This is a complex input that allows you to choose several values for a variable.</p>

        <MetaData
          importFrom="import DimensionGroup from '@b12/design-system/components/form/dimension/DimensionGroup.es6.js',
          import DimensionInput from '@b12/design-system/components/form/dimension/DimensionInput.es6.js',
          import DimensionBoolean from '@b12/design-system/components/form/dimension/DimensionBoolean.es6.js',
          import DimensionSelect from '@b12/design-system/components/form/dimension/DimensionSelect.es6.js'"
          flow="Yes"
          tests="Yes"
        />
      </div>

      <div className="ds-block">
        <div className="ds-block__title">
          <h4>Default</h4>
        </div>

        <CodeExample code={`<DimensionGroup>
  <DimensionInput
    label="Font size"
    help="Help text"
    value="1"
    units={["px", "pt"]}
    selectedUnit="px"
    onUpdate={() => {}}
  />
  <DimensionInput
    label="Letter spacing"
    value="0.5"
    units={["px", "pt"]}
    selectedUnit="px"
    onUpdate={() => {}}
  />
</DimensionGroup>`}>
          <div style={{width: '360px'}}>
            <DimensionGroup>
              <DimensionInput
                label="Font size"
                help="Help text"
                value="1"
                units={["px", "pt"]}
                selectedUnit="px"
                onUpdate={() => {}}
              />
              <DimensionInput
                label="Letter spacing"
                value="0.5"
                units={["px", "pt"]}
                selectedUnit="px"
                onUpdate={() => {}}
              />
            </DimensionGroup>
          </div>
        </CodeExample>
      </div>

      <div className="ds-block">
        <div className="ds-block__title">
          <h4>Fixed unit</h4>
        </div>

        <CodeExample code={`<DimensionGroup>
  <DimensionInput
    label="Font size"
    help="Help text"
    value="1"
    fixedUnit="px"
    onUpdate={() => {}}
  />
</DimensionGroup>`}>
          <div style={{width: '360px'}}>
            <DimensionGroup>
              <DimensionInput
                label="Font size"
                help="Help text"
                value="1"
                fixedUnit="px"
                onUpdate={() => {}}
              />
            </DimensionGroup>
          </div>
        </CodeExample>
      </div>

      <div className="ds-block">
        <div className="ds-block__title">
          <h4>Boolean</h4>
        </div>

        <CodeExample code={`<DimensionGroup>
  <DimensionBoolean help="Help text" label="Boolean value" value={true} onChange={() => {}} />
  <DimensionBoolean label="Alternate background" value={false} onChange={() => {}} />
</DimensionGroup>`}>
          <div style={{width: '360px'}}>
            <DimensionGroup>
              <DimensionBoolean help="Help text" label="Boolean value" value={true} onChange={() => {}} />
              <DimensionBoolean label="Alternate background" value={false} onChange={() => {}} />
            </DimensionGroup>
          </div>
        </CodeExample>
      </div>

      <div className="ds-block">
        <div className="ds-block__title">
          <h4>Select</h4>
        </div>

        <CodeExample code={`<DimensionGroup>
  <DimensionSelect help="Help text" label="Size" choices={["big", "small", "regular"]} onChange={() => {}} />
  <DimensionSelect label="Button style" choices={['outlined', 'plain']} selectedChoice='plain' onChange={() => {}}/>
</DimensionGroup>`}>
          <div style={{width: '360px'}}>
            <DimensionGroup>
              <DimensionSelect help="Help text" label="Size" choices={["big", "small", "regular"]} onChange={() => {}} />
              <DimensionSelect label="Button style" choices={['outlined', 'plain']} selectedChoice='plain' onChange={() => {}}/>
            </DimensionGroup>
          </div>
        </CodeExample>
      </div>
    </DemoLayoutContent>
  )
}

export default InputDimension
