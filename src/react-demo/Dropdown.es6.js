import React from 'react'
import DemoLayoutContent from './demo-only-components/DemoLayoutContent.es6.js'
import CodeExample from './demo-only-components/CodeExample.es6.js'
import MetaData from './demo-only-components/MetaData.es6.js'
import {
  MetaDataProps,
  MetaDataPropsItem
} from './demo-only-components/MetaDataProps.es6.js'

import Dropdown from '../../components/layout/dropdown/Dropdown.es6.js'
import DropdownItem from '../../components/layout/dropdown/DropdownItem.es6.js'
import DropdownItemDivider from '../../components/layout/dropdown/DropdownItemDivider.es6.js'
import DropdownItemHeader from '../../components/layout/dropdown/DropdownItemHeader.es6.js'
import Button from '../../components/form/button/Button.es6.js'
import Group from '../../components/layout/panel/group/Group.es6.js'
import TextField from '../../components/form/textfield/TextField.es6.js'
import Select from '../../components/form/select/Select.es6.js'
import Option from '../../components/form/option/Option.es6.js'
import {
  Customer,
  ContactInformation,
  Lock,
  Move
} from '../../components/Icons.es6.js'

function DropdownPage () {
  return (
    <DemoLayoutContent>
      <div className="app-page-title">
        <h2>Dropdown</h2>
        <p>
          Toggle contextual overlays for displaying lists of links and more.
        </p>

        <MetaData
          importFrom="import Dropdown from '@b12/metronome/components/layout/dropdown/Dropdown.es6.js',
          import DropdownItemHeader from '@b12/metronome/components/layout/dropdown/DropdownItemHeader.es6.js',
          import DropdownItem from '@b12/metronome/components/layout/dropdown/DropdownItem.es6.js',
          import DropdownItemDivider from '@b12/metronome/components/layout/dropdown/DropdownItemDivider.es6.js'"
          flow="Yes"
          tests="Yes"
        />
      </div>

      <div className="ds-block">
        <div className="ds-block__title">
          <h4>Default dropdown</h4>
          <p>
            By default dropdown opens on the left side of its toggler. Clicking
            on an item or outside of the dropdown, closes the dropdown.
          </p>
        </div>

        <CodeExample
          code={`<Dropdown
  toggle="Account actions"
  toggleIcon={<Customer height="16" color="#706F84" />}
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
  <DropdownItemHeader label="Other stuff" />
  <DropdownItem
    label="Menu item three"
    disabled
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
</Dropdown>`}
        >
          <Dropdown
            toggle="Account actions"
            toggleIcon={<Customer height="16" color="#706F84" />}
          >
            <DropdownItemHeader label="Account" />
            <DropdownItem
              label="Menu item one"
              icon={<Lock height="16" color="#ff9900" />}
              onClick={() => {}}
            />
            <DropdownItem
              label="Menu item two"
              icon={<ContactInformation height="16" color="#ff9900" />}
              onClick={() => {}}
            />
            <DropdownItemHeader label="Other stuff" />
            <DropdownItem label="Menu item three" disabled onClick={() => {}} />
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
        </CodeExample>
      </div>
      <div className="ds-block">
        <div className="ds-block__title">
          <h4>Use any type of toggle</h4>
          <p>You can specify any element to be a toggle, eg Button.</p>
        </div>
        <CodeExample
          code={`<Dropdown
  toggle={<Button label="Toggle me" chevron />}
  toggleIcon={<Customer height="16" color="#706F84" />}
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
  <DropdownItemHeader label="Other stuff" />
  <DropdownItem
    label="Menu item three"
    disabled
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
</Dropdown>`}
        >
          <Dropdown
            toggle={<Button label="Toggle me" chevron />}
            toggleIcon={<Customer height="16" color="#706F84" />}
          >
            <DropdownItemHeader label="Account" />
            <DropdownItem label="Menu item one" onClick={() => {}} />
            <DropdownItem label="Menu item two" onClick={() => {}} />
            <DropdownItemHeader label="Other stuff" />
            <DropdownItem label="Menu item three" disabled onClick={() => {}} />
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
        </CodeExample>
      </div>
      <div className="ds-block">
        <div className="ds-block__title">
          <h4>Simple dropdown</h4>
          <p>
            Change the style of the dropdown to be <code>simple</code>. In this
            case icons will not be displayed.
          </p>
        </div>
        <CodeExample
          code={`<Dropdown
  simple
  toggle={<Button label="Toggle me" chevron />}
  toggleIcon={<Customer height="16" color="#706F84" />}
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
</Dropdown>`}
        >
          <Dropdown
            simple
            toggle={<Button label="Toggle me" chevron />}
            toggleIcon={<Customer height="16" color="#706F84" />}
          >
            <DropdownItemHeader label="Account" />
            <DropdownItem label="Menu item one" onClick={() => {}} />
            <DropdownItem label="Menu item two" onClick={() => {}} />
            <DropdownItem label="Menu item three" onClick={() => {}} />
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
        </CodeExample>
      </div>

      <div className="ds-block">
        <div className="ds-block__title">
          <h4>Dropdown with content and quick actions</h4>
          <p>
            You can set dropdown content to be of any type, eg. form with
            inputs.
          </p>
        </div>
        <CodeExample
          code={`<Dropdown
  simple
  toggle={<Button label="Dropdown with content" chevron />}
  toggleIcon={<Customer height="16" color="#706F84" />}
  quickActions={<>
    <Button label="Quick action" />
    <Button label="Quick action" />
  </>}
>
  <Group>
    <Select label="Default">
      <Option label="Option 1" key="option-1" value="1" />
      <Option label="Option 2" key="option-2" value="1" />
    </Select>
  </Group>
  <Group>
    <TextField
      label="Some field"
      value="The value"
      onUpdate={() => {}}
    />
  </Group>
  <Group>
    <TextField
      label="Disabled"
      value="The value"
      disabled
      onUpdate={() => {}}
    />
  </Group>
  <Button label="Apply" block primary onClick={() => {}} className="dsu-mt-xxsm" />
</Dropdown>`}
        >
          <Dropdown
            simple
            toggle={<Button label="Dropdown with content" chevron />}
            toggleIcon={<Customer height="16" color="#706F84" />}
            quickActions={
              <React.Fragment>
                <Button label="Quick action" />
                <Button label="Quick action" />
              </React.Fragment>
            }
          >
            <Group>
              <Select label="Default">
                <Option label="Option 1" key="option-1" value="1" />
                <Option label="Option 2" key="option-2" value="1" />
              </Select>
            </Group>
            <Group>
              <TextField
                label="Some field"
                value="The value"
                onUpdate={() => {}}
              />
            </Group>
            <Group>
              <TextField
                label="Disabled"
                value="The value"
                disabled
                onUpdate={() => {}}
              />
            </Group>
            <Button
              label="Apply"
              block
              primary
              onClick={() => {}}
              className="dsu-mt-xxsm"
            />
          </Dropdown>
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
            property="simple"
            value="Boolean"
            defaultValue="false"
            description="Changes style of the dropdown to be simple. Icons will not be displayed."
          />
          <MetaDataPropsItem
            property="toggle"
            value="string, Node"
            defaultValue="-"
            description="Label of the toggle or an Element (eg. Button)"
          />
          <MetaDataPropsItem
            property="toggleIcon"
            value="Node"
            defaultValue="-"
            description="Icon to be displayed before label. Hidden when `toggle` is an Element"
          />
          <MetaDataPropsItem
            property="menuOnRightSide"
            value="Boolean"
            defaultValue="false"
            description="Menu stick to right side of the toggle when opened"
          />
          <MetaDataPropsItem
            property="quickActions"
            value="Node"
            defaultValue="undefined"
            description=""
          />
          <MetaDataPropsItem
            property="children"
            value="Node"
            defaultValue="false"
            description=""
          />
        </MetaDataProps>
      </div>
    </DemoLayoutContent>
  )
}

export default DropdownPage
