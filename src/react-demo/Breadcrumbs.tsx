import React from 'react'
import faker from 'faker'
import DemoLayoutContent from './demo-only-components/DemoLayoutContent'
import MetaData from './demo-only-components/MetaData'
import CodeExample from './demo-only-components/CodeExample'

import Breadcrumbs from '../../components/layout/breadcrumbs/Breadcrumbs'
import { Home } from '../../components/Icons'

export default function BreadcrumbsDemo () {
  return (
    <DemoLayoutContent>
      <div className="app-page-title">
        <h1>TabbedNavigation</h1>
        <MetaData
          importFrom="import Breadcrumbs from '@b12/design-system/components/layout/breadcrumbs/Breadcrumbs'"
          flow="Yes"
          tests="No"
        />
      </div>

      <div className="ds-block">
        <div className="ds-block__title">
          <h4>Default</h4>
          <CodeExample code={`<Breadcrumbs
  maxEntryWidth={90}
  onClick={(entry, index) => {
    console.log({ entry, index })
  }}
  entries={[{ label: 'Entry label' }]}
/>`}>
            <div style={{ width: 600, background: 'aliceblue' }}>
              <Breadcrumbs
                maxEntryWidth={90}
                onClick={(entry, index) => {
                  console.log({ entry, index })
                }}
                entries={[{ label: <Home />
                }].concat((Array.from(Array(10))).map(_ => ({
                  label: faker.lorem.sentence()}
                )))}
              />
            </div>
          </CodeExample>
        </div>
      </div>

      <div className="ds-block">
        <div className="ds-block__title">
          <h4>Small words</h4>
          <CodeExample code={`<Breadcrumbs
  maxEntryWidth={90}
  onClick={(entry, index) => {
    console.log({ entry, index })
  }}
  entries={[{ label: 'Entry label' }]}
/>`}>
            <div style={{ width: 400, background: 'aliceblue' }}>
              <Breadcrumbs
                maxEntryWidth={90}
                onClick={(entry, index) => {
                  console.log({ entry, index })
                }}
                entries={[{ label: <Home />
                }].concat((Array.from(Array(10))).map(_ => ({
                  label: faker.lorem.word()}
                )))}
              />
            </div>
          </CodeExample>
        </div>
      </div>

      <div className="ds-block">
        <div className="ds-block__title">
          <h4>Single item entry</h4>
          <CodeExample code={`<Breadcrumbs
  maxEntryWidth={90}
  onClick={(entry, index) => {
    console.log({ entry, index })
  }}
  entries={[{ label: 'Entry label' }]}
/>`}>
            <div style={{ width: 400, background: 'aliceblue' }}>
              <Breadcrumbs
                maxEntryWidth={90}
                onClick={(entry, index) => {
                  console.log({ entry, index })
                }}
                entries={[{ label: <Home /> }]}
              />
            </div>
          </CodeExample>
        </div>
      </div>
    </DemoLayoutContent>
  )
}
