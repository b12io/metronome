import React from 'react'
import DemoLayoutContent from './demo-only-components/DemoLayoutContent.es6.js'
import CodeExample from './demo-only-components/CodeExample.es6.js'
import MetaData from './demo-only-components/MetaData.es6.js'
import {
  MetaDataProps,
  MetaDataPropsItem
} from './demo-only-components/MetaDataProps.es6.js'

import Button from '../../components/form/button/Button.es6.js'
import Switch from '../../components/form/switch/Switch.es6.js'
import { Desktop, Tablet, Mobile } from '../../components/Icons.es6.js'

function SwitchPage() {
  return (
    <DemoLayoutContent>
      <div className="app-page-title">
        <h1>Switch</h1>

        <MetaData
          importFrom="import Switch from '@b12/metronome/components/form/switch/Switch.es6.js'"
          flow="No"
          tests="Yes"
        />
      </div>

      <div className="ds-block">
        <div className="ds-block__title">
          <h4>Default</h4>
        </div>

        <CodeExample
          code={`<Switch selected={0}>
  <Button label="Left" />
  <Button label="Middle" />
  <Button label="Right" />
</Switch>`}
        >
          <Switch selected={0}>
            <Button label="Left" />
            <Button label="Middle" />
            <Button label="Right" />
          </Switch>
          <Switch selected={1}>
            <Button icon={<Desktop height="19" width="24" />} />
            <Button icon={<Tablet height="19" />} />
            <Button icon={<Mobile height="19" />} />
          </Switch>
          <Switch selected={2}>
            <Button label="Left" small />
            <Button label="Middle" small />
            <Button label="Right" small />
          </Switch>
        </CodeExample>
        <CodeExample
          code={`<Switch selected={0} block>
  <Button label="Left" />
  <Button label="Middle" />
  <Button label="Right" />
</Switch>`}
        >
          <Switch selected={0} block>
            <Button label="Left" />
            <Button label="Middle" />
            <Button label="Right" />
          </Switch>
        </CodeExample>
      </div>
      <div className="ds-block">
        <div className="ds-block__title">
          <h4>Props</h4>
        </div>

        <MetaDataProps>
          <MetaDataPropsItem
            property="children"
            value="object, array"
            defaultValue="[]"
            description="Children of the button switch (buttons only)"
          />
          <MetaDataPropsItem
            property="block"
            value="Boolean"
            defaultValue="false"
            description="Switch will be 100% width of its parent"
          />
          <MetaDataPropsItem
            property="selected"
            value="number"
            defaultValue="-1"
            description="Predefined selected button. Starting index is 0."
          />
          <MetaDataPropsItem
            property="onChange"
            value="function"
            defaultValue="() => {}"
            description="Handles onChange event"
          />
        </MetaDataProps>
      </div>
    </DemoLayoutContent>
  )
}

export default SwitchPage
