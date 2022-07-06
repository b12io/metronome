import React from 'react'
import DemoLayoutContent from './demo-only-components/DemoLayoutContent.es6.js'
import DemoColorCard from './demo-only-components/DemoColorCard.es6.js'

const BRAND_COLORS = [
  {
    name: 'Lightest',
    color: '#f6f5ff',
    variable: '$ds-brand-lightest-color'
  },
  {
    name: 'Lightest hover',
    color: '#F6F5FF',
    variable: '$ds-brand-lightest-hover-color'
  },
  {
    name: 'Lighter',
    color: '#756cf9',
    variable: '$ds-brand-lighter-color'
  },
  {
    name: 'Light',
    color: '#766cff',
    variable: '$ds-brand-light-color'
  },
  {
    name: 'Regular',
    color: '#6548c7',
    variable: '$ds-brand-regular-color'
  },
  {
    name: 'Medium',
    color: '#5048c7',
    variable: '$ds-brand-medium-color'
  },
  {
    name: 'Semi Medium',
    color: '#382dd4',
    variable: '$ds-brand-semi-medium-color'
  },
  {
    name: 'Dark',
    color: '#2a22a1',
    variable: '$ds-brand-dark-color'
  }
]

const UI_COLORS = [
  {
    name: 'Lightest',
    color: '#ffffff',
    variable: '$ds-ui-lightest-color'
  },
  {
    name: 'Light',
    color: '#fdfdfd',
    variable: '$ds-ui-light-color'
  },
  {
    name: 'Regular',
    color: '#f2f2f2',
    variable: '$ds-ui-regular-color'
  },
  {
    name: 'Dark',
    color: '#d9d9d9',
    variable: '$ds-ui-dark-color'
  },
  {
    name: 'Darker',
    color: '#cccccc',
    variable: '$ds-ui-darker-color'
  },
  {
    name: 'Darkest',
    color: '#b3b3b3',
    variable: '$ds-ui-darkest-color'
  },
  {
    name: 'Background',
    color: '#f5f5f7',
    variable: '$ds-ui-background-color'
  },
  {
    name: 'Background Dark',
    color: '#695ff6',
    variable: '$ds-ui-background-dark-color'
  },
  {
    name: 'Background Darker',
    color: '#413AA1',
    variable: '$ds-ui-background-darker-color'
  },
  {
    name: 'Border',
    color: '#e6e6e6',
    variable: '$ds-ui-border-color'
  }
]

const DISPLAY_COLORS = [
  {
    name: 'Light',
    color: '#706f84',
    variable: '$ds-display-light-color'
  },
  {
    name: 'Regular',
    color: '#110f33',
    variable: '$ds-display-regular-color'
  },
  {
    name: 'Dark',
    color: '#0f0d3a',
    variable: '$ds-display-dark-color'
  }
]

const BODY_COLORS = [
  {
    name: 'Light',
    color: '#808080',
    variable: '$ds-body-light-color'
  },
  {
    name: 'Lighter',
    color: '#84839c',
    variable: '$ds-body-lighter-color'
  },
  {
    name: 'Regular',
    color: '#4d4d4d',
    variable: '$ds-body-regular-color'
  }
]

const ACCENT_COLORS = [
  {
    name: 'Success regular',
    color: '#8fc980',
    variable: '$ds-success-regular-color'
  },
  {
    name: 'Success dark',
    color: '#6b9660',
    variable: '$ds-success-dark-color'
  },
  {
    name: 'Warning regular',
    color: '#f8d074',
    variable: '$ds-warning-regular-color'
  },
  {
    name: 'Warning dark',
    color: '#f5be33',
    variable: '$ds-warning-dark-color'
  },
  {
    name: 'Error regular',
    color: '#f05e5e',
    variable: '$ds-error-regular-color'
  },
  {
    name: 'Error dark',
    color: '#bd4a4a',
    variable: '$ds-error-dark-color'
  }
]

const MISC_COLORS = [
  {
    name: 'Icon focus',
    color: '#5048c7',
    variable: '$ds-icon-focus-color'
  },
  {
    name: 'Badge background',
    color: '#8e8d9e',
    variable: '$ds-adge-background-color'
  }
]

function Colors () {
  return (
    <DemoLayoutContent>
      <div className="app-page-title">
        <h2>Colors</h2>
      </div>

      <div className="ds-block">
        <div className="ds-block__title">
          <h4>Brand</h4>
          <p>Buttons, DisplayXL, Active sidebar icon</p>
        </div>
        <div className="ds-color-cards">
          {BRAND_COLORS.map((item, index) => (
            <DemoColorCard
              key={`${item.name}-${index}`}
              name={item.name}
              color={item.color}
              variable={item.variable}
            />
          ))}
        </div>
      </div>

      <div className="ds-block dsu-mt-lg">
        <div className="ds-block__title">
          <h4>UI</h4>
          <p>Icons, borders, shadows</p>
        </div>

        <div className="ds-color-cards">
          {UI_COLORS.map((item, index) => (
            <DemoColorCard
              key={`${item.name}-${index}`}
              name={item.name}
              color={item.color}
              variable={item.variable}
            />
          ))}
        </div>
      </div>

      <div className="ds-block dsu-mt-lg">
        <div className="ds-block__title">
          <h4>Display</h4>
          <p>Headings, Sidebar icons</p>
        </div>

        <div className="ds-color-cards">
          {DISPLAY_COLORS.map((item, index) => (
            <DemoColorCard
              key={`${item.name}-${index}`}
              name={item.name}
              color={item.color}
              variable={item.variable}
            />
          ))}
        </div>
      </div>

      <div className="ds-block dsu-mt-lg">
        <div className="ds-block__title">
          <h4>Body</h4>
          <p>Body copy</p>
        </div>

        <div className="ds-color-cards">
          {BODY_COLORS.map((item, index) => (
            <DemoColorCard
              key={`${item.name}-${index}`}
              name={item.name}
              color={item.color}
              variable={item.variable}
            />
          ))}
        </div>
      </div>

      <div className="ds-block dsu-mt-lg">
        <div className="ds-block__title">
          <h4>Success, Error, Warning</h4>
          <p>Icons and text on text inputs</p>
        </div>

        <div className="ds-color-cards">
          {ACCENT_COLORS.map((item, index) => (
            <DemoColorCard
              key={`${item.name}-${index}`}
              name={item.name}
              color={item.color}
              variable={item.variable}
            />
          ))}
        </div>
      </div>

      <div className="ds-block dsu-mt-lg">
        <div className="ds-block__title">
          <h4>Misc</h4>
          <p>Other things</p>
        </div>

        <div className="ds-color-cards">
          {MISC_COLORS.map((item, index) => (
            <DemoColorCard
              key={`${item.name}-${index}`}
              name={item.name}
              color={item.color}
              variable={item.variable}
            />
          ))}
        </div>
      </div>
    </DemoLayoutContent>
  )
}

export default Colors
