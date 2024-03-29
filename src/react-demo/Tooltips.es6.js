import React from 'react'
import DemoLayoutContent from './demo-only-components/DemoLayoutContent.es6.js'
import CodeExample from './demo-only-components/CodeExample.es6.js'
import MetaData from './demo-only-components/MetaData.es6.js'
import { MetaDataProps, MetaDataPropsItem } from './demo-only-components/MetaDataProps.es6.js'

import { Visible } from '../../components/Icons.es6.js'
import Info from '../../components/layout/info/Info.es6.js'
import Grid from '../../components/layout/grid/Grid.es6.js'
import GridCol from '../../components/layout/grid/GridCol.es6.js'

export default function Tooltips () {
  return (
    <DemoLayoutContent>
      <div className="app-page-title">
        <h1>Tooltips</h1>
        <MetaData
          importFrom="import Info from '@b12/metronome/components/layout/info/Info.es6.js'"
          flow="Yes"
          tests="Yes"
        />
      </div>
      <div className="ds-block">
        <div className="ds-block__title">
          <h4>Example</h4>
        </div>

        <CodeExample
          code={`<Info text='Show Section' icon={Visible} />
<Info text='Show Section'>
  <Visible color='#766cff'/>
</Info>
<Info
  text='Tooltip with custom delay'
  icon={Visible}
  delay={{ show: 500, hide: 0 }}
/>
<Info
  text={
    <ul>
      <li>Unordered List Item 1</li>
      <li>Unordered List Item 2</li>
    </ul>
  }
  icon={Visible}
/>
          `}
        >
          <Grid justify="start">
            <GridCol col="1">
              <Grid>
                <Info
                  text='Icon passed as a prop'
                  icon={Visible}
                />
              </Grid>
            </GridCol>
            <GridCol col="1" align="center">
              <Grid>
                <Info text='Icon passed a a child'>
                  <Visible color='#766cff'/>
                </Info>
              </Grid>
            </GridCol>
            <GridCol col="1" align="center">
              <Grid>
                <Info
                  text='Tooltip with custom delay'
                  icon={Visible}
                  delay={{ show: 500, hide: 0 }}
                />
              </Grid>
            </GridCol>
            <GridCol col="1" align="center">
              <Grid>
                <Info
                  text={
                    <ul>
                      <li>Unordered List Item 1</li>
                      <li>Unordered List Item 2</li>
                    </ul>
                  }
                  icon={Visible}
                />
              </Grid>
            </GridCol>
          </Grid>
        </CodeExample>
      </div>
      <div className="ds-block">
        <div className="ds-block__title">
          <h4>Props</h4>
        </div>

        <MetaDataProps>
          <MetaDataPropsItem
            property="text"
            value="string | HTMLElement"
            defaultValue="undefined"
            description="Text of the tooltip"
          />
          <MetaDataPropsItem
            property="icon"
            value="Element<'svg'>"
            defaultValue="undefined"
            description="Tooltip will be bound to this icon"
          />
          <MetaDataPropsItem
            property="children"
            value="Node"
            defaultValue="undefined"
            description="Any component can be used as an icon"
          />
          <MetaDataPropsItem
            property="delay"
            value="number | { show: number, hide: number }"
            defaultValue="250"
            description="Sets a delay before show/hide tooltip"
          />
        </MetaDataProps>
      </div>
    </DemoLayoutContent>
  )
}
