import React from 'react'
import ReactDOM from 'react-dom'
import {
  UIRouter,
  UIView,
  UISref,
  UISrefActive,
  hashLocationPlugin
} from '@uirouter/react'

import './scss/style.scss'

import DemoLayout from './react-demo/demo-only-components/DemoLayout.es6.js'
import DemoLayoutNav from './react-demo/demo-only-components/DemoLayoutNav.es6.js'
import Welcome from './react-demo/Welcome.es6.js'
import Colors from './react-demo/Colors.es6.js'
import Typography from './react-demo/Typography.es6.js'
import Grid from './react-demo/Grid.es6.js'
import Utilities from './react-demo/Utilities.es6.js'
import Buttons from './react-demo/Buttons.es6.js'
import Switch from './react-demo/Switch.es6.js'
import Dropdown from './react-demo/Dropdown.es6.js'
import Icons from './react-demo/Icons.es6.js'
import Inputs from './react-demo/Inputs.es6.js'
import InputGroup from './react-demo/InputGroup.es6.js'
import Stepper from './react-demo/Stepper.es6.js'
import DimensionInput from './react-demo/DimensionInput.es6.js'
import Nav from './react-demo/Nav.es6.js'
import BlockPage from './react-demo/Block.es6.js'
import Miscellaneous from './react-demo/Miscellaneous.es6.js'
import Bar from './react-demo/Bar.es6.js'
import Sections from './react-demo/Sections.es6.js'
import Table from './react-demo/Table.es6.js'
import AvatarItem from './react-demo/AvatarItem.es6.js'
import InformationalCard from './react-demo/InformationalCard.es6.js'
import RangeSlider from './react-demo/RangeSlider.es6.js'
import Cards from './react-demo/Cards.es6.js'
import Tooltips from './react-demo/Tooltips.es6.js'
import Badges from './react-demo/Badges.es6.js'
import StatusIndicator from './react-demo/StatusIndicator.es6.js'
import TabbedNavigation from './react-demo/TabbedNavigation.es6.js'
import Breadcrumbs from './react-demo/Breadcrumbs.es6.js'
import ButtonGroup from './react-demo/ButtonGroup.es6.js'
import ToggleButton from './react-demo/ToggleButton.es6.js'

const uiStates = [
  {
    name: 'welcome',
    url: 'welcome',
    component: Welcome
  },
  {
    name: 'colors',
    url: 'colors',
    component: Colors
  },
  {
    name: 'typography',
    url: 'typography',
    component: Typography
  },
  {
    name: 'grid',
    url: 'grid',
    component: Grid
  },
  {
    name: 'table',
    url: 'table',
    component: Table
  },
  {
    name: 'utils',
    url: 'utils',
    component: Utilities
  },
  {
    name: 'buttons',
    url: 'buttons',
    component: Buttons
  },
  {
    name: 'switch',
    url: 'switch',
    component: Switch
  },
  {
    name: 'dropdown',
    url: 'dropdown',
    component: Dropdown
  },
  {
    name: 'icons',
    url: 'icons',
    component: Icons
  },
  {
    name: 'avatar',
    url: 'avatar',
    component: AvatarItem
  },
  {
    name: 'inputs',
    url: 'inputs',
    component: Inputs
  },
  {
    name: 'inputGroup',
    url: 'inputGroup',
    component: InputGroup
  },
  {
    name: 'stepper',
    url: 'stepper',
    component: Stepper
  },
  {
    name: 'dimensionInput',
    url: 'dimensionInput',
    component: DimensionInput
  },
  {
    name: 'nav',
    url: 'nav',
    component: Nav
  },
  {
    name: 'block',
    url: 'block',
    component: BlockPage
  },
  {
    name: 'informationalCard',
    url: 'informationalCard',
    component: InformationalCard
  },
  {
    name: 'miscellaneous',
    url: 'miscellaneous',
    component: Miscellaneous
  },
  {
    name: 'previewFrameBar',
    url: 'previewFrameBar',
    component: Bar
  },
  {
    name: 'sections',
    url: 'sections',
    component: Sections
  },
  {
    name: 'rangeSlider',
    url: 'range-slider',
    component: RangeSlider
  },
  {
    name: 'cards',
    url: 'cards',
    component: Cards
  },
  {
    name: 'tooltips',
    url: 'tooltips',
    component: Tooltips
  },
  {
    name: 'badges',
    url: 'badges',
    component: Badges
  },
  {
    name: 'statusIndicator',
    url: 'status-indicator',
    component: StatusIndicator
  },
  {
    name: 'tabbedNavigation',
    url: 'tabbed-navigation',
    component: TabbedNavigation
  },
  {
    name: 'breadcrumbs',
    url: 'breadcrumbs',
    component: Breadcrumbs
  },
  {
    name: 'buttonGroup',
    url: 'button-group',
    component: ButtonGroup
  },
  {
    name: 'toggleButton',
    url: 'toggle-button',
    component: ToggleButton
  }
]

const routerConfig = (router) => {
  router.urlRouter.otherwise('welcome')
  router.transitionService.onEnter({}, (trans, state) => {
    window.scrollTo(0, 0)
  })
}

ReactDOM.render(
  <UIRouter
    plugins={[hashLocationPlugin]}
    states={uiStates}
    config={routerConfig}
  >
    <DemoLayout>
      <DemoLayoutNav>
        <ul className="nav">
          <li className="nav__header">Core</li>
          <UISrefActive class="active">
            <UISref to="typography">
              <li><a>Typography</a></li>
            </UISref>
          </UISrefActive>
          <UISrefActive class="active">
            <UISref to="colors">
              <li><a>Colors</a></li>
            </UISref>
          </UISrefActive>
          <UISrefActive class="active">
            <UISref to="icons">
              <li><a>Icons</a></li>
            </UISref>
          </UISrefActive>
          <UISrefActive class="active">
            <UISref to="grid">
              <li><a>Grid</a></li>
            </UISref>
          </UISrefActive>
          <UISrefActive class="active">
            <UISref to="table">
              <li><a>Table</a></li>
            </UISref>
          </UISrefActive>
          <UISrefActive class="active">
            <UISref to="utils">
              <li><a>Utilities</a></li>
            </UISref>
          </UISrefActive>
          <li className="nav__header">Components</li>
          <UISrefActive class="active">
            <UISref to="buttons">
              <li><a>Buttons</a></li>
            </UISref>
          </UISrefActive>
          <UISrefActive class="active">
            <UISref to="buttonGroup">
              <li><a>ButtonGroup</a></li>
            </UISref>
          </UISrefActive>
          <UISrefActive class="active">
            <UISref to="badges">
              <li><a>Badges</a></li>
            </UISref>
          </UISrefActive>
          <UISrefActive class="active">
            <UISref to="breadcrumbs">
              <li><a>Breadcrumbs</a></li>
            </UISref>
          </UISrefActive><UISrefActive class="active">
            <UISref to="switch">
              <li><a>Switch</a></li>
            </UISref>
          </UISrefActive>
          <UISrefActive class="active">
            <UISref to="dropdown">
              <li><a>Dropdown</a></li>
            </UISref>
          </UISrefActive>
          <UISrefActive class="active">
            <UISref to="inputs">
              <li><a>Inputs</a></li>
            </UISref>
          </UISrefActive>
          <UISrefActive class="active">
            <UISref to="inputGroup">
              <li><a>InputGroup</a></li>
            </UISref>
          </UISrefActive>
          <UISrefActive class="active">
            <UISref to="stepper">
              <li><a>Stepper</a></li>
            </UISref>
          </UISrefActive>
          <UISrefActive class="active">
            <UISref to="dimensionInput">
              <li><a>Dimension input</a></li>
            </UISref>
          </UISrefActive>
          <UISrefActive class="active">
            <UISref to="nav">
              <li><a>Nav</a></li>
            </UISref>
          </UISrefActive>
          <UISrefActive class="active">
            <UISref to="block">
              <li><a>Block</a></li>
            </UISref>
          </UISrefActive>
          <UISrefActive class="active">
            <UISref to="avatar">
              <li><a>AvatarItem</a></li>
            </UISref>
          </UISrefActive>
          <UISrefActive class="active">
            <UISref to="informationalCard">
              <li><a>InformationalCard</a></li>
            </UISref>
          </UISrefActive>
          <UISrefActive class="active">
            <UISref to="rangeSlider">
              <li><a>RangeSlider</a></li>
            </UISref>
          </UISrefActive>
          <UISrefActive class="active">
            <UISref to="cards">
              <li><a>Cards</a></li>
            </UISref>
          </UISrefActive>
          <UISrefActive class="active">
            <UISref to="tooltips">
              <li><a>Tooltips</a></li>
            </UISref>
          </UISrefActive>
          <UISrefActive class="active">
            <UISref to="tabbedNavigation">
              <li><a>TabbedNavigation</a></li>
            </UISref>
          </UISrefActive>
          <UISrefActive class="active">
            <UISref to="statusIndicator">
              <li><a>StatusIndicator</a></li>
            </UISref>
          </UISrefActive>
          <UISrefActive class="active">
            <UISref to="toggleButton">
              <li><a>ToggleButton</a></li>
            </UISref>
          </UISrefActive>
          <li className="nav__header">Composition</li>
          <UISrefActive class="active">
            <UISref to="previewFrameBar">
              <li><a>Preview frame bar</a></li>
            </UISref>
          </UISrefActive>
          <UISrefActive class="active">
            <UISref to="sections">
              <li><a>Sections</a></li>
            </UISref>
          </UISrefActive>
          <UISrefActive class="active">
            <UISref to="miscellaneous">
              <li><a>Miscellaneous</a></li>
            </UISref>
          </UISrefActive>
        </ul>
      </DemoLayoutNav>
      <UIView/>
    </DemoLayout>
  </UIRouter>,
  document.getElementById('index')
)
