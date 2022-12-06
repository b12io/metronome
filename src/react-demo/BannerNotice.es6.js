import React, { useState } from 'react'
import DemoLayoutContent from './demo-only-components/DemoLayoutContent.es6.js'
import CodeExample from './demo-only-components/CodeExample.es6.js'
import MetaData from './demo-only-components/MetaData.es6.js'
import {
  MetaDataProps,
  MetaDataPropsItem
} from './demo-only-components/MetaDataProps.es6.js'

import BannerNotice from '../../components/layout/banner-notice/BannerNotice.es6.js'

const codeExample1 = `
<BannerNotice
  title="Want to fix your file?"
  text={
    <>
      Take a minute to{' '}
      <a href="#somewhere">view errors and solutions</a>, edit file
      and upload again.
    </>
  }
/>
`

const codeExample2 = `
<BannerNotice
  icon="tip"
  title="You can improve this section"
  text="It would be really great if you add some text"
/>
<BannerNotice
  icon="check"
  type="success"
  text="All services saved correctly"
/>
<BannerNotice
  type="warning"
  title="Please publish your website first"
  text="Changes to this section won't be visible until you publish your website"
/>
<BannerNotice
  type="danger"
  title="Warning!"
  text="Deleting all sections will disable this page completely"
/>
`

const codeExample3 = `
<BannerNotice
  icon="tip"
  title="You can dismiss me"
  text="It would be really great if you add some text"
  showClose
  onCloseClick={() => {
    setVisible(false)
  }}
/>
`

const BannerNoticePage = () => {
  const [visible, setVisible] = useState(true)

  return (
    <DemoLayoutContent>
      <div className="app-page-title">
        <h1>BannerNotice</h1>
        <p>Information banner with different styles for info/alerts</p>
        <MetaData
          importFrom="import BannerNotice from '@b12/metronome/components/layout/banner-notice/BannerNotice.es6.js'"
          flow="Yes"
          tests="Yes"
        />
      </div>

      <div className="ds-block">
        <div className="ds-block__title">
          <h3>Default</h3>
          <p>
            Here is a default representation of Banner Notice component. It
            takes up all available width of the container. Please be advised
            that you should control spacing (margins) in place.
          </p>
          <p>
            <code>text</code> property accepts both React.Node (if you need
            breaks or links) or string
          </p>
        </div>

        <CodeExample code={codeExample1}>
          <div
            style={{
              width: 350
            }}
          >
            <BannerNotice
              title="Want to fix your file?"
              text={
                <>
                  Take a minute to{' '}
                  <a href="#somewhere">view errors and solutions</a>, edit file
                  and upload again.
                </>
              }
            />
          </div>
        </CodeExample>
      </div>

      <div className="ds-block">
        <div className="ds-block__title">
          <h3>Color and Icon variations</h3>
          <p>
            Pass <code>type</code> prop to change notice appearance. You can
            also change <code>icon</code> or pass your own.
          </p>
        </div>
        <CodeExample code={codeExample2}>
          <div
            style={{
              width: 350,
              display: 'flex',
              flexDirection: 'column',
              gap: '10px'
            }}
          >
            <BannerNotice
              icon="tip"
              title="You can improve this section"
              text="It would be really great if you add some text"
            />
            <BannerNotice
              icon="check"
              type="success"
              text="All services saved correctly"
            />
            <BannerNotice
              type="warning"
              title="Please publish your website first"
              text="Changes to this section won't be visible until you publish your website"
            />
            <BannerNotice
              type="danger"
              title="Warning!"
              text="Deleting all sections will disable this page completely"
            />
          </div>
        </CodeExample>
      </div>

      <div className="ds-block">
        <div className="ds-block__title">
          <h3>Dismissing banner notice</h3>
          <p>
            You can pass <code>onCloseClick</code> function to dismiss notice.
            Please be advised that you should handle cookies on your own.
          </p>
        </div>
        <CodeExample code={codeExample3}>
          <div
            style={{
              width: 350,
              display: 'flex',
              flexDirection: 'column',
              gap: '10px'
            }}
          >
            {visible && (
              <BannerNotice
                icon="tip"
                title="You can dismiss me"
                text="It would be really great if you add some text here"
                showClose
                onCloseClick={() => {
                  setVisible(false)
                }}
              />
            )}
          </div>
        </CodeExample>
      </div>

      <div className="ds-block">
        <div className="ds-block__title">
          <h3>Guides and restrictions</h3>
          <ul>
            <li>
              Banner notices are displayed inline, in the sidebar or main
              content area, to indicate if something is wrong or needs
              attention. They are ideally placed at the top of their respective
              area so that they can be easily noticed when the page loads.
            </li>
            <li>
              If something is wrong, we should always explain how to fix it and
              can optionally include an action as a shortcut.
            </li>
            <li>
              In the event that there are multiple notices, we can stack them in
              order of priority with the most important issue appearing at the
              top.
            </li>
            <li>
              We can optionally offer a dismissal button for notices that don’t
              need to persist after their first viewing.
            </li>
            <li>No images / multiple controls </li>
          </ul>
        </div>
      </div>

      <div className="ds-block">
        <div className="ds-block__title">
          <h4>Props</h4>
        </div>

        <MetaDataProps>
          <MetaDataPropsItem
            property="type"
            value="default | warning | success | danger"
            defaultValue="default"
            description="Optional. Color variations of the notice"
          />
          <MetaDataPropsItem
            property="icon"
            value="infoCircle | tip | check | React.Node"
            defaultValue="infoCircle"
            description="Optional"
          />
          <MetaDataPropsItem
            property="title"
            value="string"
            defaultValue=""
            description="Optional"
          />
          <MetaDataPropsItem
            property="text"
            value="string | React.Node"
            defaultValue=""
            description="Required"
          />
          <MetaDataPropsItem
            property="showClose"
            value="boolean"
            defaultValue="false"
            description="Optional. Show dismiss button"
          />
          <MetaDataPropsItem
            property="onCloseClick"
            value="function"
            defaultValue="false"
            description="Optional. Remove banner notice."
          />
          <MetaDataPropsItem
            property="className"
            value="string"
            defaultValue=""
            description="Optional"
          />
        </MetaDataProps>
      </div>
    </DemoLayoutContent>
  )
}

export default BannerNoticePage
