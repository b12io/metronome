import React from 'react'
import DemoLayoutContent from './demo-only-components/DemoLayoutContent.es6.js'
import CodeExample from './demo-only-components/CodeExample.es6.js'
import MetaData from './demo-only-components/MetaData.es6.js'
import { MetaDataProps, MetaDataPropsItem } from './demo-only-components/MetaDataProps.es6.js'

import Button from '../../components/form/button/Button.es6.js'
import { Tablet } from '../../components/Icons.es6.js'

function Buttons () {
  return (
    <DemoLayoutContent>
      <div className="app-page-title">
        <h1>Buttons</h1>

        <MetaData
          importFrom="import Button from '@b12/metronome/components/form/button/Button.es6.js'"
          flow="No"
          tests="Yes"
        />
      </div>

      <div className="ds-block">
        <div className="ds-block__title">
          <h4>Default</h4>
        </div>

        <CodeExample code={`<Button label="Default" title="Here is a title" />
<Button label="Disabled" disabled />
<Button label="Disabled" loading />`}>
          <Button label="Default" title="Here is a title" />
          <Button label="Disabled" disabled />
          <Button label="Disabled" loading />
        </CodeExample>
        <CodeExample title="Primary button" code={`<Button label="Default" primary />
<Button label="Loading" primary disabled />
<Button label="Loading" primary loading />`}>
          <Button label="Default" primary />
          <Button label="Loading" primary disabled />
          <Button label="Loading" primary loading />
        </CodeExample>
        <CodeExample title="Button sizing" code={`<Button label="Small" primary small />
<Button label="Disabled" primary loading small />
<Button label="Default" primary />
<Button label="Large" primary large />
<Button label="Disabled" primary loading large />`}>
          <Button label="Small" primary small />
          <Button label="Disabled" primary loading small />
          <Button label="Default" primary />
          <Button label="Large" primary large />
          <Button label="Disabled" primary loading large />
        </CodeExample>
        <CodeExample title="Button with badges" code={`<Button label="Get Expert Boost" badge="$99" primary />
<Button label="Launch Satellite" badge="$0.99" />`}>
          <Button label="Get Expert Boost" badge="$99" primary />
          <Button label="Launch Satellite" badge="$0.99" />
        </CodeExample>
        <CodeExample title="Button with icon and label" code={'<Button iconWithLabel label="Tablet portrait mode" icon={<Tablet />} />'}>
          <Button iconWithLabel label="Tablet portrait mode" icon={<Tablet />} />
        </CodeExample>
      </div>

      <div className="ds-block">
        <div className="ds-block__title">
          <h4>Button with chevron</h4>
        </div>

        <CodeExample code={`<Button label="I act like a toggle" chevron />
<br /><br />
<div style={{width: '300px'}}>
  <Button label="I act like a toggle" chevron block />
  <br />
  <Button label="Primary button" primary chevron block />
  <br />
  <Button label="Active state" chevron block active />
</div>`}>
          <Button label="I act like a toggle" chevron />
          <br /><br />
          <div style={{width: '300px'}}>
            <Button label="I act like a toggle" chevron block />
            <br />
            <Button label="Primary button" primary chevron block />
            <br />
            <Button label="Active state" chevron block active />
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
            description="Text of the button"
          />
          <MetaDataPropsItem
            property="badge"
            value="string, Node"
            defaultValue="null"
            description="Adds a badge inside a button"
          />
          <MetaDataPropsItem
            property="primary"
            value="Boolean"
            defaultValue="false"
            description="Primary button"
          />
          <MetaDataPropsItem
            property="danger"
            value="Boolean"
            defaultValue="false"
            description="Danger button"
          />
          <MetaDataPropsItem
            property="loading"
            value="Boolean"
            defaultValue="false"
            description="Sets loading state for the button"
          />
          <MetaDataPropsItem
            property="small"
            value="Boolean"
            defaultValue="false"
            description="Small size of the button"
          />
          <MetaDataPropsItem
            property="superSmall"
            value="Boolean"
            defaultValue="false"
            description="Super small size for the button"
          />
          <MetaDataPropsItem
            property="large"
            value="Boolean"
            defaultValue="false"
            description="Large button size"
          />
          <MetaDataPropsItem
            property="wide"
            value="Boolean"
            defaultValue="false"
            description="Sets a width of the button to be 170px (Don't do this in any case!)"
          />
          <MetaDataPropsItem
            property="active"
            value="Boolean"
            defaultValue="false"
            description="Sets active state for the button. No styles currently."
          />
          <MetaDataPropsItem
            property="block"
            value="Boolean"
            defaultValue="false"
            description="Sets button width to be 100% of its container"
          />
          <MetaDataPropsItem
            property="alternative"
            value="Boolean"
            defaultValue="false"
            description="Button will be shown in dark styles."
          />
          <MetaDataPropsItem
            property="disabled"
            value="Boolean"
            defaultValue="false"
            description="Disabled state of the button"
          />
          <MetaDataPropsItem
            property="icon"
            value="element"
            defaultValue="null"
            description="Adds an icon inside a button"
          />
          <MetaDataPropsItem
            property="iconWithLabel"
            value="Boolean"
            defaultValue="false"
            description="Adds an icon and a label inside a button"
          />
          <MetaDataPropsItem
            property="chevron"
            value="Boolean"
            defaultValue="false"
            description="Adds a tiny chevron to right side of the button."
          />
          <MetaDataPropsItem
            property="onClick"
            value="function"
            defaultValue="() => {}"
            description="Handles onClick event"
          />
          <MetaDataPropsItem
            property="type"
            value="button | submit | reset"
            defaultValue="button"
            description="Sets button type"
          />
        </MetaDataProps>
      </div>
    </DemoLayoutContent>
  )
}

export default Buttons
