import React from 'react'
import DemoLayoutContent from './demo-only-components/DemoLayoutContent.es6.js'
import CodeExample from './demo-only-components/CodeExample.es6.js'
import MetaData from './demo-only-components/MetaData.es6.js'
import {
  MetaDataProps,
  MetaDataPropsItem
} from './demo-only-components/MetaDataProps.es6.js'

import AvatarItem from '../../components/layout/avatar/AvatarItem.es6.js'

export default function AvatarItemPage() {
  return (
    <DemoLayoutContent>
      <div className="app-page-title">
        <h1>AvatarItem</h1>
        <p>A component that represents a user</p>
        <MetaData
          importFrom="import AvatarItem from '@b12/metronome/components/layout/avatar/AvatarItem.es6.js'"
          flow="Yes"
          tests="Yes"
        />
      </div>
      <div className="ds-block">
        <div className="ds-block__title">
          <h4>Example</h4>
          <p>...</p>
        </div>

        <CodeExample
          code={`<AvatarItem
  primaryText="Patrick Glebovsky"
  hasHover
  showIconOnly
/>
<AvatarItem
  primaryText="Patrick Glebovsky"
/>
<AvatarItem
  primaryText="Edil Kratskih"
  secondaryText="awesomefrontender@gmail.com"
  isActive
/>
<AvatarItem
  primaryText="Adam"
/>
<AvatarItem
  primaryText="Nicolas Cage"
  secondaryText="Hollywood actor"
  imgSrc="https://www.placecage.com/c/200/200"
/>
<AvatarItem
  primaryText="Fluffy Mittens"
  secondaryText="Is online now"
  imgSrc="http://placekitten.com/200/200"
  isActive
/>`}
        >
          <AvatarItem primaryText="Patrick Glebovsky" hasHover showIconOnly />
          <br />
          <br />
          <AvatarItem primaryText="Patrick Glebovsky" />
          <br />
          <br />
          <AvatarItem
            primaryText="Edil Kratskih"
            secondaryText="awesomefrontender@gmail.com"
            isActive
          />
          <br />
          <br />
          <AvatarItem primaryText="Adam" />
          <br />
          <br />
          <AvatarItem
            primaryText="Nicolas Cage"
            secondaryText="Hollywood actor"
            imgSrc="https://www.placecage.com/c/200/200"
          />
          <br />
          <br />
          <AvatarItem
            primaryText="Fluffy Mittens"
            secondaryText="Is online now"
            imgSrc="http://placekitten.com/200/200"
            isActive
          />
        </CodeExample>
      </div>
      <div className="ds-block">
        <div className="ds-block__title">
          <h4>Props</h4>
        </div>

        <MetaDataProps>
          <MetaDataPropsItem
            property="className"
            value="string | Object"
            defaultValue="-"
            description="Apply classes if needed"
          />
          <MetaDataPropsItem
            property="imgSrc"
            value="string"
            defaultValue="-"
            description="Source of the image to be displayed as avatar. Should be an url"
          />
          <MetaDataPropsItem
            property="primaryText"
            value="string"
            defaultValue="-"
            description="User name. Initials for the avatar image (if no imgSrc provided) will be generated from it. If name has middle name, only first name and last name will be used for initials"
          />
          <MetaDataPropsItem
            property="secondaryText"
            value="string"
            defaultValue="-"
            description="Any text value"
          />
          <MetaDataPropsItem
            property="hasHover"
            value="boolean"
            defaultValue="-"
            description="Changes cursor to hand on hover to indicate that avatar is clickable"
          />
          <MetaDataPropsItem
            property="showIconOnly"
            value="boolean"
            defaultValue="-"
            description="Hides user name and support text"
          />
          <MetaDataPropsItem
            property="isActive"
            value="boolean"
            defaultValue="-"
            description="Adds small green indicator"
          />
          <MetaDataPropsItem
            property="onClick"
            value="function"
            defaultValue="-"
            description="Handles onClick event"
          />
        </MetaDataProps>
      </div>
    </DemoLayoutContent>
  )
}
