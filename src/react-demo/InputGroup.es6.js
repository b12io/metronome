import React from 'react'
import DemoLayoutContent from './demo-only-components/DemoLayoutContent.es6.js'
import CodeExample from './demo-only-components/CodeExample.es6.js'
import MetaData from './demo-only-components/MetaData.es6.js'
import { MetaDataProps, MetaDataPropsItem } from './demo-only-components/MetaDataProps.es6.js'

import Group from '../../components/layout/panel/group/Group.es6.js'
import InputGroup from '../../components/form/input-group/InputGroup.es6.js'
import TextField from '../../components/form/textfield/TextField.es6.js'
import Select from '../../components/form/select/Select.es6.js'
import Option from '../../components/form/option/Option.es6.js'
import Button from '../../components/form/button/Button.es6.js'
import { RemoveCircle } from '../../components/Icons.es6.js'

function NavPage () {
  return (
    <DemoLayoutContent>
      <div className="app-page-title">
        <h1>InputGroup</h1>
        <p>Stateless component that acts like a wrapper that holds several inputs, selects or buttons</p>
        <MetaData
          importFrom="import InputGroup from '@b12/design-system/components/form/input-group/InputGroup.es6.js'"
          flow="Yes"
          tests="Yes"
        />
      </div>
      <div className="ds-block">
        <div className="ds-block__title">
          <h4>Example</h4>
          <p>Children that you can use in component are: <code>Select</code>, <code>TextField</code>, <code>Button</code></p>
        </div>

        <CodeExample code={`<Group>
  <InputGroup>
    <Select>...</Select>
    <TextField value="The value" />
    <Button icon={<RemoveCircle />} />
  </InputGroup>
</Group>
<Group>
  <InputGroup>
    <TextField value="The value" />
    <Select>...</Select>
  </InputGroup>
</Group>
<Group>
  <InputGroup>
    <Select>...</Select>
    <TextField value="The value" />
    <Select>...</Select>
  </InputGroup>
</Group>
<Group>
  <InputGroup>
    <Button primary label="Go!" />
    <Select>...</Select>
  </InputGroup>
</Group>`}>
          <div style={{width: '400px'}}>
            <Group>
              <InputGroup>
                <Select>
                  <Option label="Option 1" key="option-1" value="1" />
                  <Option label="Option 2" key="option-2" value="1" />
                  <Option label="Option 3" key="option-3" value="1" />
                </Select>
                <TextField
                  value="The value"
                />
                <Button icon={<RemoveCircle />} />
              </InputGroup>
            </Group>
            <Group>
              <InputGroup>
                <TextField
                  value="The value"
                />
                <Select>
                  <Option label="Option 1" key="option-1" value="1" />
                  <Option label="Option 2" key="option-2" value="1" />
                  <Option label="Option 3" key="option-3" value="1" />
                </Select>
              </InputGroup>
            </Group>
            <Group>
              <InputGroup>
                <Select>
                  <Option label="Option 1" key="option-1" value="1" />
                  <Option label="Option 2" key="option-2" value="1" />
                  <Option label="Option 3" key="option-3" value="1" />
                </Select>
                <TextField
                  value="The value"
                />
                <Select>
                  <Option label="Option 1" key="option-1" value="1" />
                  <Option label="Option 2" key="option-2" value="1" />
                  <Option label="Option 3" key="option-3" value="1" />
                </Select>
              </InputGroup>
            </Group>
            <Group>
              <InputGroup>
                <Button primary label="Go!" />
                <Select>
                  <Option label="Option 1" key="option-1" value="1" />
                  <Option label="Option 2" key="option-2" value="1" />
                  <Option label="Option 3" key="option-3" value="1" />
                </Select>
              </InputGroup>
            </Group>
          </div>
        </CodeExample>
        <CodeExample code={`<Group label="Vertical">
  <InputGroup vertical>
    <TextField value="The value" />
    <TextField value="Another value" />
  </InputGroup>
</Group>
<Group label="Vertical with action button">
  <InputGroup vertical>
    <TextField value="The value" />
    <TextField value="Another value" />
    <TextField value="Third value" />
    <Button label="Apply" block />
  </InputGroup>
</Group>`}>
          <div style={{width: '300px'}}>
            <Group label="Vertical">
              <InputGroup vertical>
                <TextField value="The value" />
                <TextField value="Another value" />
              </InputGroup>
            </Group>
            <Group label="Vertical with action button">
              <InputGroup vertical>
                <TextField value="The value" />
                <TextField value="Another value" />
                <TextField value="Third value" />
                <Button label="Apply" block />
              </InputGroup>
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
