import React from 'react'
import DemoLayoutContent from './demo-only-components/DemoLayoutContent.es6.js'
import CodeExample from './demo-only-components/CodeExample.es6.js'
import MetaData from './demo-only-components/MetaData.es6.js'
import {
  MetaDataProps,
  MetaDataPropsItem
} from './demo-only-components/MetaDataProps.es6.js'

import TabbedNavigation from '../../components/layout/tabbed-navigation/TabbedNavigation.es6.js'
import TabbedNavigationItem from '../../components/layout/tabbed-navigation/TabbedNavigationItem.es6.js'
import B12Tooltip from '../../components/layout/tooltip/B12Tooltip.es6.js'

const TabbedNavigationProps = [
  {
    property: 'progress',
    value: 'number',
    defaultValue: '0',
    description:
      'Progress bar indicator width value if progressType is `percent` and order number if `items`'
  },
  {
    property: 'progressType',
    value: 'percent | items',
    defaultValue: 'percent',
    description: 'Type of progress that is applied when showing progress bar'
  },
  {
    property: 'spread',
    value: 'boolean',
    defaultValue: 'false',
    description: 'It spreads TabbedNavigationItems'
  },
  {
    property: 'block',
    value: 'boolean',
    defaultValue: 'false',
    description: 'Changes its display mode to `block`'
  },
  {
    property: 'children',
    value: 'TabbedNavigationItem',
    defaultValue: '',
    description: ''
  }
]

const TabbedNavigationItemProps = [
  {
    property: 'active',
    value: 'boolean',
    defaultValue: 'false',
    description: 'Marks as active element'
  },
  {
    property: 'visited',
    value: 'boolean',
    defaultValue: 'false',
    description: 'Marks as visited element'
  },
  {
    property: 'onClick',
    value: 'function',
    defaultValue: '() => {}',
    description: 'Click handler'
  }
]

function TabbedNavigationPage () {
  return (
    <DemoLayoutContent>
      <div className="app-page-title">
        <h1>TabbedNavigation</h1>
        <MetaData
          importFrom="import TabbedNavigation from '@b12/metronome/components/layout/tabbed-navigation/TabbedNavigation.es6.js'"
          flow="Yes"
          tests="No"
        />
      </div>
      <div className="ds-block">
        <div className="ds-block__title">
          <h4>Default</h4>
        </div>
        <CodeExample
          code={`<TabbedNavigation progress={40}>
  <TabbedNavigationItem visited disabled>Template</TabbedNavigationItem>
  <TabbedNavigationItem visited>Design</TabbedNavigationItem>
  <TabbedNavigationItem active>Setup</TabbedNavigationItem>
  <TabbedNavigationItem clickable>
    <B12Tooltip
      text="This is clickable"
      target="review"
      flip={false}
    >
      {({ tooltip, target }) => (
        <div id={target}>
          Review
          {tooltip}
        </div>
      )}
    </B12Tooltip>
  </TabbedNavigationItem>
</TabbedNavigation>`}
        >
          <TabbedNavigation progress={40}>
            <TabbedNavigationItem visited disabled>
              Template
            </TabbedNavigationItem>
            <TabbedNavigationItem visited>Design</TabbedNavigationItem>
            <TabbedNavigationItem active>Setup</TabbedNavigationItem>
            <TabbedNavigationItem clickable>
              <B12Tooltip text="This is clickable" target="review" flip={false}>
                {({ tooltip, target }) => (
                  <div id={target}>
                    Review
                    {tooltip}
                  </div>
                )}
              </B12Tooltip>
            </TabbedNavigationItem>
          </TabbedNavigation>
        </CodeExample>
      </div>

      <div className="ds-block">
        <div className="ds-block__title">
          <h4>Progress based on items</h4>
        </div>
        <CodeExample
          code={`<TabbedNavigation progress={3} progressType="items">
  <TabbedNavigationItem visited clickable>Template</TabbedNavigationItem>
  <TabbedNavigationItem visited clickable>Design</TabbedNavigationItem>
  <TabbedNavigationItem active>Setup</TabbedNavigationItem>
  <TabbedNavigationItem disabled>Review</TabbedNavigationItem>
</TabbedNavigation>`}
        >
          <TabbedNavigation progress={3} progressType="items">
            <TabbedNavigationItem visited clickable>
              Template
            </TabbedNavigationItem>
            <TabbedNavigationItem visited clickable>
              Design
            </TabbedNavigationItem>
            <TabbedNavigationItem active>Setup</TabbedNavigationItem>
            <TabbedNavigationItem disabled>Review</TabbedNavigationItem>
          </TabbedNavigation>
        </CodeExample>
      </div>

      <div className="ds-block">
        <div className="ds-block__title">
          <h4>TabbedNavigation Props</h4>
        </div>

        <MetaDataProps>
          {TabbedNavigationProps.map((prop) => (
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

      <div className="ds-block">
        <div className="ds-block__title">
          <h4>TabbedNavigationItem Props</h4>
        </div>

        <MetaDataProps>
          {TabbedNavigationItemProps.map((prop) => (
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

export default TabbedNavigationPage
