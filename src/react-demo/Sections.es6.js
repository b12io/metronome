import React from 'react'
import DemoLayoutContent from './demo-only-components/DemoLayoutContent.es6.js'
import Sidebar from '../../components/layout/sidebar/Sidebar.es6.js'
import SidebarHeader from '../../components/layout/sidebar/header/SidebarHeader.es6.js'
import SidebarBodyHeader from '../../components/layout/sidebar/body/SidebarBodyHeader.es6.js'
import SidebarBody from '../../components/layout/sidebar/body/SidebarBody.es6.js'
import SidebarActions from '../../components/layout/sidebar/actions/SidebarActions.es6.js'
import Button from '../../components/form/button/Button.es6.js'
import { Close, Back, Gear } from '../../components/Icons.es6.js'
import TabbedNavigation from '../../components/layout/tabbed-navigation/TabbedNavigation.es6.js'
import TabbedNavigationItem from '../../components/layout/tabbed-navigation/TabbedNavigationItem.es6.js'
import B12Tooltip from '../../components/layout/tooltip/B12Tooltip.es6.js'

function Sections () {
  return (
    <DemoLayoutContent darkBg>
      <div className="app-page-title">
        <h1>Sections</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
          aliquid suscipit natus rem, ipsa molestiae voluptate vero obcaecati
          voluptatibus ea nobis neque necessitatibus excepturi perferendis, fuga
          voluptatem totam quae quas.
        </p>
      </div>
      <div className="ds-row">
        <div className="ds-col">
          <h4 className="u-m-b-sm">Sidebar</h4>
          <Sidebar>
            <SidebarHeader title="Section Title" />
            <SidebarBody>Section Content</SidebarBody>
          </Sidebar>
        </div>
        <div className="ds-col">
          <h4 className="u-m-b-sm">Sidebar with back btn</h4>
          <Sidebar>
            <SidebarHeader title="Section Title" backIcon={<Back />} />
            <SidebarBody>Section Content</SidebarBody>
          </Sidebar>
        </div>
        <div className="ds-col">
          <h4 className="u-m-b-sm">Sidebar with actions</h4>
          <Sidebar>
            <SidebarHeader
              title="Section Title"
              actionIcon={<Gear height="19" width="19" />}
            />
            <SidebarBody>Section Content</SidebarBody>
            <SidebarActions>
              <Button label="Button" primary block small />
            </SidebarActions>
          </Sidebar>
        </div>
      </div>
      <div className="ds-row">
        <div className="ds-col">
          <h4 className="u-m-b-sm">Section steps</h4>
          <Sidebar>
            <SidebarHeader
              title="Section Title"
              steps="Step 1 of 5"
              actionIcon={<Close />}
            />
            <SidebarBody>Section Content</SidebarBody>
          </Sidebar>
        </div>
        <div className="ds-col">
          <h4 className="u-m-b-sm">Section progress</h4>
          <Sidebar>
            <SidebarHeader
              title="Section Title"
              steps="Step 1 of 5"
              progress="20"
              actionIcon={<Close />}
            />
            <SidebarBody>Section Content</SidebarBody>
          </Sidebar>
        </div>
        <div className="ds-col">
          <h4 className="u-m-b-sm">Sidebar actions</h4>
          <Sidebar>
            <SidebarHeader
              title="Section Title"
              steps="Step 1 of 5"
              actionIcon={<Close />}
            />
            <SidebarBody>Section Content</SidebarBody>
            <SidebarActions>
              <Button label="Back" small />
              <Button label="Continue" primary small />
            </SidebarActions>
          </Sidebar>
        </div>
      </div>
      <div className="ds-row">
        <div className="ds-col">
          <h4 className="u-m-b-sm">Section with tabbed navigation</h4>
          <Sidebar>
            <SidebarHeader
              title="Section Title"
              actionIcon={<Close />}
              backButton
              homeButton
              tabbedNavigation={
                <TabbedNavigation progress={3} progressType="items" block>
                  <TabbedNavigationItem visited>Template</TabbedNavigationItem>
                  <TabbedNavigationItem visited>Design</TabbedNavigationItem>
                  <TabbedNavigationItem active>Setup</TabbedNavigationItem>
                  <TabbedNavigationItem>
                    <B12Tooltip text="This is tooltip" target="review">
                      {({ tooltip, target }) => (
                        <div id={target}>
                          Review
                          {tooltip}
                        </div>
                      )}
                    </B12Tooltip>
                  </TabbedNavigationItem>
                </TabbedNavigation>
              }
            ></SidebarHeader>
            <SidebarBody>Section Content</SidebarBody>
          </Sidebar>
        </div>
        <div className="ds-col">
          <h4 className="u-m-b-sm">Section with body header</h4>
          <Sidebar>
            <SidebarBody>
              <SidebarBodyHeader
                text="Sidebar body header"
                actionIcon={<Gear height="19" width="19" />}
                quickActionsLabel="Quick actions label"
                onQuickActionSelected={(index) => {
                  console.log('onQuickActionSelected', { index })
                }}
                quickActions={[
                  {
                    icon: null,
                    text: 'label 1'
                  },
                  {
                    icon: null,
                    text: 'label 2'
                  }
                ]}
              />
              Section Content
            </SidebarBody>
          </Sidebar>
        </div>
        <div className="ds-col"></div>
      </div>
    </DemoLayoutContent>
  )
}

export default Sections
