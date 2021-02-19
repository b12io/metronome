import React from 'react'
import DemoLayoutContent from './demo-only-components/DemoLayoutContent.es6.js'
import CodeExample from './demo-only-components/CodeExample.es6.js'
import MetaData from './demo-only-components/MetaData.es6.js'
import { MetaDataProps, MetaDataPropsItem } from './demo-only-components/MetaDataProps.es6.js'

import Block from '../../components/layout/panel/block/Block.es6.js'
import BlockTitle from '../../components/layout/panel/block/BlockTitle.es6.js'
import BlockContent from '../../components/layout/panel/block/BlockContent.es6.js'
import Button from '../../components/form/button/Button.es6.js'
import Group from '../../components/layout/panel/group/Group.es6.js'
import TextField from '../../components/form/textfield/TextField.es6.js'
import Nav from '../../components/layout/nav/Nav.es6.js'
import NavItem from '../../components/layout/nav/NavItem.es6.js'
import { HomeEmpty, Client, Visible } from '../../components/Icons.es6.js'

import { AppearanceAppearance } from '../../components/Icons.es6.js'

function BlockPage () {
  return (
    <DemoLayoutContent>
      <div className="app-page-title">
        <h1>Block</h1>
        <p>An entity containing title and content. Block component should be used in side panels for dividing logical groups of content.</p>
        <MetaData
          importFrom="import Block from '@b12/design-system/components/layout/panel/block/Block.es6.js'"
          flow="Yes"
          tests="Yes"
        />
      </div>
      <div className="ds-block">
        <div className="ds-block__title">
          <h4>Example</h4>
          <p>Block can contain only 2 children: BlockTitle and BlockContent. This is done so for proper spacing between blocks and inner content. You do not have to (and should) add any spacings.</p>
        </div>

        <CodeExample code={`<Block bottomDivider>
  <BlockTitle
    label="Title of the block"
    description="Long description. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    icon={<AppearanceAppearance />}
    button={<Button label="Action" small />}
  />
  <BlockContent>
    ...
  </BlockContent>
</Block>
<Block>
  <BlockTitle
    label="Navigate to a page"
  />
  <BlockContent>
    ...
  </BlockContent>
</Block>`}>
          <div style={{width: '300px'}}>
            <Block bottomDivider>
              <BlockTitle
                label="Title of the block"
                description="Long description. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                icon={<AppearanceAppearance />}
                button={<Button label="Action" small />}
              />
              <BlockContent>
                <Group>
                  <TextField
                    label="Dummy input"
                    value=""
                  />
                </Group>
                <Group>
                  <TextField
                    label="Another one"
                    value=""
                  />
                </Group>
              </BlockContent>
            </Block>
            <Block>
              <BlockTitle
                label="Navigate to a page"
              />
              <BlockContent>
                <Nav>
                  <NavItem label="Nav item one" icon={<HomeEmpty />} />
                  <NavItem label="Nav item two" icon={<Client />} actionIcon={<Visible width={16} height={12} viewBox="0 0 16 12" />} showArrow onClick={() => {}} onActionClick={() => {}} />
                  <NavItem label="Nav item three" showArrow />
                  <NavItem label="Nav item four" disabled />
                  <NavItem label="Nav item five" />
                </Nav>
              </BlockContent>
            </Block>
          </div>
        </CodeExample>
      </div>
      <div className="ds-block">
        <div className="ds-block__title">
          <h4>Props</h4>
        </div>

        <MetaDataProps>
          <MetaDataPropsItem
            property="bottomDivider"
            value="Boolean"
            defaultValue="false"
            description="Adds divider after block content. Use it if really needed."
          />
          <MetaDataPropsItem
            property="className"
            value="string | Object"
            defaultValue="undefined"
            description="Apply classes if needed"
          />
          <MetaDataPropsItem
            property="children"
            value="React.Element<typeof BlockTitle>,React.Element<typeof BlockContent>"
            defaultValue="-"
            description="Children can only be of type BlockTitle or BlockContent"
          />
        </MetaDataProps>
      </div>
      <div className="app-page-title">
        <h1>BlockTitle</h1>
        <p>Title of the block component that contains <code>label</code>, <code>icon</code>, <code>description</code> and an <code>action</code></p>
        <MetaData
          importFrom="import BlockTitle from '@b12/design-system/components/layout/panel/block/BlockTitle.es6.js'"
          flow="Yes"
          dependencies="Block"
          tests="Yes"
        />
      </div>
      <div className="ds-block">
        <div className="ds-block__title">
          <h4>Example</h4>
          <p>...</p>
        </div>

        <CodeExample code={`<Block>
  <BlockTitle
    label="Title of the block"
    description="Long description. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    icon={<AppearanceAppearance />}
    button={<Button label="Action" small />}
  />
</Block>`}>
          <div style={{width: '300px'}}>
            <Block>
              <BlockTitle
                label="Title of the block"
                description="Long description. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                icon={<AppearanceAppearance />}
                button={<Button label="Action" small />}
              />
            </Block>
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
            defaultValue="-"
            description="Adds title text"
          />
          <MetaDataPropsItem
            property="description"
            value="string | React.Element<*>"
            defaultValue="null"
            description="Adds description to title"
          />
          <MetaDataPropsItem
            property="icon"
            value="React.Node"
            defaultValue="null"
            description="Adds an icon before title text"
          />
          <MetaDataPropsItem
            property="button"
            value="React.Node"
            defaultValue="null"
            description="Adds an action button after title text"
          />
        </MetaDataProps>
      </div>
      <div className="app-page-title">
        <h1>BlockContent</h1>
        <p>Container for any type of content that lives inside Block element.</p>
        <MetaData
          importFrom="import BlockContent from '@b12/design-system/components/layout/panel/block/BlockContent.es6.js'"
          flow="Yes"
          dependencies="Block"
          tests="Yes"
        />
      </div>
      <div className="ds-block">
        <div className="ds-block__title">
          <h4>Example</h4>
        </div>

        <CodeExample code={`<Block>
  <BlockTitle
    label="Title of the block"
  />
  <BlockContent>
    <p>I am a content of the block. We can place anything here, eg button:</p>
    <Button label="Get started" />
  </BlockContent>
</Block>`}>
          <div style={{width: '300px'}}>
            <Block>
              <BlockTitle
                label="Title of the block"
              />
              <BlockContent>
                <p>I am a content of the block. We can place anything here, eg button:</p>
                <Button label="Get started" />
              </BlockContent>
            </Block>
          </div>
        </CodeExample>
      </div>
      <div className="ds-block">
        <div className="ds-block__title">
          <h4>Props</h4>
        </div>

        <MetaDataProps>
          <MetaDataPropsItem
            property="children"
            value="React.Node"
            defaultValue="null"
            description="Children"
          />
        </MetaDataProps>
      </div>
    </DemoLayoutContent>
  )
}

export default BlockPage
