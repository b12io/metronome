import React from 'react'
import DemoLayoutContent from './demo-only-components/DemoLayoutContent.es6.js'
import CodeExample from './demo-only-components/CodeExample.es6.js'
import MetaData from './demo-only-components/MetaData.es6.js'
import { MetaDataProps, MetaDataPropsItem } from './demo-only-components/MetaDataProps.es6.js'

import Group from '../../components/layout/panel/group/Group.es6.js'
import ButtonGroup from '../../components/form/button-group/ButtonGroup.es6.js'
import TextField from '../../components/form/textfield/TextField.es6.js'
import Select from '../../components/form/select/Select.es6.js'
import Option from '../../components/form/option/Option.es6.js'
import Button from '../../components/form/button/Button.es6.js'
import { Close, Move } from '../../components/Icons.es6.js'
import Dropdown from '../../components/layout/dropdown/Dropdown.es6.js'
import DropdownItem from '../../components/layout/dropdown/DropdownItem.es6.js'
import DropdownItemDivider from '../../components/layout/dropdown/DropdownItemDivider.es6.js'
import DropdownItemHeader from '../../components/layout/dropdown/DropdownItemHeader.es6.js'

function NavPage () {
  return (
    <DemoLayoutContent>
      <div className="app-page-title">
        <h1>ButtonGroup</h1>
        <p>Stateless component that acts like a wrapper that holds several inputs, selects or buttons</p>
        <MetaData
          importFrom="import ButtonGroup from '@b12/design-system/components/form/button-group/ButtonGroup.es6.js'"
          flow="Yes"
          tests="Yes"
        />
      </div>
      <div className="ds-block">
        <div className="ds-block__title">
          <h4>Example</h4>
          <p>Children that you can use in component are: <code>Dropdown</code> and <code>Button</code></p>
        </div>

        <CodeExample code={`<Group>
  <ButtonGroup>
    <Button label="Button" />
    <Button label="Button" primary />
    <Button label="Button" />
  </ButtonGroup>
</Group>
<Group>
  <ButtonGroup>
    <Button label="Button" />
    <Button label="Button" primary />
    <Button icon={<Close color="#fff" />} primary />
  </ButtonGroup>
</Group>
<Group>
  <ButtonGroup>
    <Button label="Button" />
    <Dropdown
      simple
      toggle={<Button label="Toggle me" chevron />}
    >
      <DropdownItemHeader label="Account" />
      <DropdownItem
        label="Menu item one"
        onClick={() => {}}
      />
      <DropdownItem
        label="Menu item two"
        onClick={() => {}}
      />
      <DropdownItem
        label="Menu item three"
        onClick={() => {}}
      />
      <DropdownItem
        label="Menu item three and a half"
        onClick={() => {}}
      />
      <DropdownItemDivider />
      <DropdownItem
        label="Menu item four"
        icon={<Move height="16" color="#ff7878" />}
        onClick={() => {}}
      />
    </Dropdown>
  </ButtonGroup>
</Group>`}>
          <div style={{width: '400px'}}>
            <Group>
              <ButtonGroup>
                <Button label="Button" />
                <Button label="Button" primary />
                <Button label="Button" />
              </ButtonGroup>
            </Group>
            <Group>
              <ButtonGroup>
                <Button label="Button" />
                <Button label="Button" primary />
                <Button icon={<Close color="#fff" />} primary />
              </ButtonGroup>
            </Group>
            <Group>
              <ButtonGroup>
                <Button label="Button" />
                <Dropdown
                  simple
                  toggle={<Button label="Toggle me" chevron />}
                >
                  <DropdownItemHeader label="Account" />
                  <DropdownItem
                    label="Menu item one"
                    onClick={() => {}}
                  />
                  <DropdownItem
                    label="Menu item two"
                    onClick={() => {}}
                  />
                  <DropdownItem
                    label="Menu item three"
                    onClick={() => {}}
                  />
                  <DropdownItem
                    label="Menu item three and a half"
                    onClick={() => {}}
                  />
                  <DropdownItemDivider />
                  <DropdownItem
                    label="Menu item four"
                    icon={<Move height="16" color="#ff7878" />}
                    onClick={() => {}}
                  />
                </Dropdown>
              </ButtonGroup>
            </Group>
          </div>
        </CodeExample>
        <CodeExample code={`<Group label="Vertical">
  <ButtonGroup vertical>
    <Button label="Button" />
    <Button label="Button" primary />
    <Button label="Button" />
  </ButtonGroup>
</Group>
<Group label="Vertical with action button">
  <ButtonGroup vertical>
    <Button label="Button" />
    <Button label="Button" primary />
    <Button icon={<Close color="#fff" />} primary />
  </ButtonGroup>
</Group>`}>
          <div style={{width: '300px'}}>
            <Group label="Vertical">
              <ButtonGroup vertical>
                <Button label="Button" />
                <Button label="Button" primary />
                <Button label="Button" />
              </ButtonGroup>
            </Group>
            <Group label="Vertical with action button">
              <ButtonGroup vertical>
                <Button label="Button" />
                <Button label="Button" primary />
                <Button icon={<Close color="#fff" />} primary />
              </ButtonGroup>
            </Group>
          </div>
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
            defaultValue="undefined"
            description="Apply classes if needed"
          />
          <MetaDataPropsItem
            property="vertical"
            value="Boolean"
            defaultValue="false"
            description="Makes input group vertical"
          />
        </MetaDataProps>
      </div>
    </DemoLayoutContent>
  )
}

export default NavPage
