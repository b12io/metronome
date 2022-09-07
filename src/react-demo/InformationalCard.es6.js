import React from 'react'
import DemoLayoutContent from './demo-only-components/DemoLayoutContent.es6.js'
import CodeExample from './demo-only-components/CodeExample.es6.js'
import MetaData from './demo-only-components/MetaData.es6.js'
import { MetaDataProps, MetaDataPropsItem } from './demo-only-components/MetaDataProps.es6.js'

import InformationalCard from '../../components/layout/informational-card/InformationalCard.es6.js'
import Checkbox from '../../components/form/checkbox/Checkbox.es6.js'


const codeExample1 = `
<InformationalCard
  heading="Card with no children"
  subheading="This card was not passed a children prop and uses the default accent color."
/>
`

const codeExample2 = `
<InformationalCard
  accentColor="#6548C7"
  heading="Card with children and accentColor props"
  subheading="This card was passed a children prop and uses its own accent color."
>
  <Checkbox
    checked={this.state.isChecked}
    label="Checkbox label"
    onChange={this.handleToggleCheckbox}
  />
</InformationalCard>
`

class InformationalCardPage extends React.Component {
  state = {
    isChecked: false
  }

  handleToggleCheckbox = () => {
    this.setState(state => ({
      isChecked: !state.isChecked
    }))
  }

  render () {
    return (
      <DemoLayoutContent>
        <div className="app-page-title">
          <h1>InformationalCard</h1>
          <p>Simple card component to convey information</p>
          <MetaData
            importFrom="import InformationalCard from '@b12/metronome/components/layout/informational-card/InformationalCard.es6.js'"
            flow="Yes"
            tests="Yes"
          />
        </div>

        <div className="ds-block">
          <div className="ds-block__title">
            <h4>Example</h4>
            <p>
              This component takes an optional `children` prop that can be used to display
              an action item or aditional content. It also optionally takes an `accentColor` prop
              to change the color of the bar at the top of the card and the color of the info icon.
            </p>
          </div>

          <CodeExample code={codeExample1}>
            <div style={{ width: 350 }}>
              <InformationalCard
                heading="Card with no children"
                subheading="This card was not passed a children prop and uses the default accent color."
              />
            </div>
          </CodeExample>
          <CodeExample code={codeExample2}>
            <div style={{ width: 350 }}>
              <InformationalCard
                accentColor="#6548C7"
                heading="Card with children and accentColor props"
                subheading={<span>This card was passed a children prop and uses its own accent color.</span>}
              >
                <Checkbox
                  checked={this.state.isChecked}
                  label="Checkbox label"
                  onChange={this.handleToggleCheckbox}
                />
              </InformationalCard>
            </div>
          </CodeExample>
        </div>

        <div className="ds-block">
          <div className="ds-block__title">
            <h4>Props</h4>
          </div>

          <MetaDataProps>
            <MetaDataPropsItem
              property="accentColor"
              value="string"
              defaultValue="#F5BE33"
              description="Color of top bar and icon background"
            />
            <MetaDataPropsItem
              property="children"
              value="Node"
              description="Optional"
            />
            <MetaDataPropsItem
              property="heading"
              value="string | React Node"
            />
            <MetaDataPropsItem
              property="showIcon"
              value="boolean"
              defaultValue="true"
              description="Passing value of `false` will hide info icon"
            />
            <MetaDataPropsItem
              property="subheading"
              value="string | React Node"
            />
          </MetaDataProps>
        </div>
      </DemoLayoutContent>
    )
  }
}

export default InformationalCardPage
