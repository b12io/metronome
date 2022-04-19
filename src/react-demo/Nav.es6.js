import React from 'react'
import DemoLayoutContent from './demo-only-components/DemoLayoutContent.es6.js'
import CodeExample from './demo-only-components/CodeExample.es6.js'
import Highlighter from './demo-only-components/Highlighter.es6.js'
import MetaData from './demo-only-components/MetaData.es6.js'
import { MetaDataProps, MetaDataPropsItem } from './demo-only-components/MetaDataProps.es6.js'

import Nav from '../../components/layout/nav/Nav.es6.js'
import NavItem from '../../components/layout/nav/NavItem.es6.js'
import { HomeEmpty, Client, Visible } from '../../components/Icons.es6.js'

function NavPage () {
  return (
    <DemoLayoutContent>
      <div className="app-page-title">
        <h1>Nav</h1>
        <p>This is a simple navigation component for sidebar.</p>
        <MetaData
          importFrom="import Nav from '@b12/metronome/components/layout/nav/Nav.es6.js'"
          flow="Yes"
          tests="Yes"
        />
      </div>
      <div className="ds-block">
        <div className="ds-block__title">
          <h4>Default example</h4>
          <p>By default the navigation displays without borders, dividers, icons and etc.</p>
        </div>

        <CodeExample code={`<Nav>
  <NavItem label="Nav item one" icon={<HomeEmpty />} />
  <NavItem label="Nav item two"
    icon={<Client />}
    actionIcon={<Visible width={16} height={12} viewBox="0 0 16 12" />}
    showArrow
    onClick={() => {}}
    onActionClick={() => {}}
  />
  <NavItem label="Nav item three" showArrow />
  <NavItem label="Nav item four" disabled />
  <NavItem label="Nav item five" badge="5" />
</Nav>`}>
          <div style={{width: '300px'}}>
            <Nav>
              <NavItem label="Nav item one" icon={<HomeEmpty />} />
              <NavItem label="Nav item two" icon={<Client />} actionIcon={<Visible width={16} height={12} viewBox="0 0 16 12" />} showArrow onClick={() => {}} onActionClick={() => {}} />
              <NavItem label="Nav item three" active showArrow />
              <NavItem label="Nav item four" disabled />
              <NavItem label="Nav item five" badge="5" />
            </Nav>
          </div>
        </CodeExample>
        <CodeExample code={`<Nav bordered>
  <NavItem label="Nav item one" showArrow />
  <NavItem label="Nav item two" icon={<Client />} showArrow />
  <NavItem label="Nav item three" showArrow />
  <NavItem label="Nav item four" disabled showArrow />
  <NavItem label="Nav item five" showArrow />
</Nav>`}>
          <div style={{width: '300px'}}>
            <Nav bordered>
              <NavItem label="Nav item one" showArrow />
              <NavItem label="Nav item two" icon={<Client />} showArrow />
              <NavItem label="Nav item three" showArrow />
              <NavItem label="Nav item four" disabled showArrow />
              <NavItem label="Nav item five" active showArrow />
              <NavItem label="Nav item six" showArrow />
            </Nav>
          </div>
        </CodeExample>
      </div>
      <div className="ds-block">
        <div className="ds-block__title">
          <h4>Props</h4>
        </div>

        <MetaDataProps>
          <MetaDataPropsItem
            property="bordered"
            value="Boolean"
            defaultValue="false"
            description="Changes style of the navigation to be bordered"
          />
          <MetaDataPropsItem
            property="className"
            value="string | Object"
            defaultValue="undefined"
            description="Apply classes if needed"
          />
        </MetaDataProps>
      </div>

      <div className="app-page-title">
        <h1>NavItem</h1>
        <p>Navigation item to be used in Nav</p>
        <MetaData
          importFrom="import NavItem from '@b12/metronome/components/layout/nav/NavItem.es6.js'"
          flow="Yes"
          tests="Yes"
          dependencies="Nav"
        />
      </div>

      <div className="ds-block">
        <div className="ds-block__title">
          <h4>Default example</h4>
        </div>

        <CodeExample code={`<Nav>
  <NavItem label="Nav item two"
    icon={<Client />}
    actionIcon={<Visible width={16} height={12} viewBox="0 0 16 12" />}
    showArrow
    onClick={() => {}}
    onActionClick={() => {}}
  />
</Nav>`}>
          <div style={{width: '300px'}}>
            <Nav>
              <NavItem label="Nav item two" icon={<Client />} actionIcon={<Visible width={16} height={12} viewBox="0 0 16 12" />} showArrow onClick={() => {}} onActionClick={() => {}} />
            </Nav>
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
            defaultValue="undefined"
            description="Navigation item text"
          />
          <MetaDataPropsItem
            property="icon"
            value="Node"
            defaultValue="undefined"
            description="Adds an icon before label"
          />
          <MetaDataPropsItem
            property="badge"
            value="string | number"
            defaultValue="undefined"
            description="Adds a badge"
          />
          <MetaDataPropsItem
            property="active"
            value="boolean"
            defaultValue="false"
            description="Adds active class name"
          />
          <MetaDataPropsItem
            property="showArrow"
            value="Boolean"
            defaultValue="false"
            description="Adds an arrow on the right side of nav item"
          />
          <MetaDataPropsItem
            property="onClick"
            value="function"
            defaultValue="undefined"
            description="Click action"
          />
          <MetaDataPropsItem
            property="onActionClick"
            value="function"
            defaultValue="undefined"
            description="Handles clicking on action icon"
          />
          <MetaDataPropsItem
            property="actionIcon"
            value="Node"
            defaultValue="undefined"
            description="Action icon to be shown before arrow or at the right side of nav item"
          />
        </MetaDataProps>
      </div>
    </DemoLayoutContent>
  )
}

export default NavPage
