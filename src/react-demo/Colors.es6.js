import React from 'react'
import DemoLayoutContent from './demo-only-components/DemoLayoutContent.es6.js'

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
          <div className="ds-color-card">
            <div className="ds-color-card__color" style={{backgroundColor: '#f6f5ff'}}></div>
            <div className="ds-color-card__body">
              <h5>Lightest <small>#f6f5ff</small></h5>
              <code>$ds-brand-lightest-color</code>
            </div>
          </div>

          <div className="ds-color-card">
            <div className="ds-color-card__color" style={{backgroundColor: '#766cff'}}></div>
            <div className="ds-color-card__body">
              <h5>Light <small>#766cff</small></h5>
              <code>$ds-brand-light-color</code>
            </div>
          </div>

          <div className="ds-color-card">
            <div className="ds-color-card__color" style={{backgroundColor: '#382dd4'}}></div>
            <div className="ds-color-card__body">
              <h5>Regular <small>#382dd4</small></h5>
              <code>$ds-brand-regular-color</code>
            </div>
          </div>

          <div className="ds-color-card">
            <div className="ds-color-card__color" style={{backgroundColor: '#2a22a1'}}></div>
            <div className="ds-color-card__body">
              <h5>Dark <small>#2a22a1</small></h5>
              <code>$ds-brand-dark-color</code>
            </div>
          </div>
        </div>
      </div>

      <div className="ds-block dsu-mt-lg">
        <div className="ds-block__title">
          <h4>UI</h4>
          <p>Icons, borders, shadows</p>
        </div>

        <div className="ds-color-cards">
          <div className="ds-color-card">
            <div className="ds-color-card__color" style={{backgroundColor: '#ffffff'}}></div>
            <div className="ds-color-card__body">
              <h5>Lightest <small>#ffffff</small></h5>
              <code>$ds-ui-lightest-color</code>
            </div>
          </div>

          <div className="ds-color-card">
            <div className="ds-color-card__color" style={{backgroundColor: '#fdfdfd'}}></div>
            <div className="ds-color-card__body">
              <h5>Light <small>#fdfdfd</small></h5>
              <code>$ds-ui-light-color</code>
            </div>
          </div>

          <div className="ds-color-card">
            <div className="ds-color-card__color" style={{backgroundColor: '#f2f2f2'}}></div>
            <div className="ds-color-card__body">
              <h5>Regular <small>#f2f2f2</small></h5>
              <code>$ds-ui-regular-color</code>
            </div>
          </div>

          <div className="ds-color-card">
            <div className="ds-color-card__color" style={{backgroundColor: '#d9d9d9'}}></div>
            <div className="ds-color-card__body">
              <h5>Dark <small>#d9d9d9</small></h5>
              <code>$ds-ui-dark-color</code>
            </div>
          </div>

          <div className="ds-color-card">
            <div className="ds-color-card__color" style={{backgroundColor: '#cccccc'}}></div>
            <div className="ds-color-card__body">
              <h5>Darker <small>#cccccc</small></h5>
              <code>$ds-ui-darker-color</code>
            </div>
          </div>

          <div className="ds-color-card">
            <div className="ds-color-card__color" style={{backgroundColor: '#b3b3b3'}}></div>
            <div className="ds-color-card__body">
              <h5>Darkest <small>#b3b3b3</small></h5>
              <code>$ds-ui-darkest-color</code>
            </div>
          </div>
        </div>
      </div>

      <div className="ds-block dsu-mt-lg">
        <div className="ds-block__title">
          <h4>Display</h4>
          <p>Headings, Sidebar icons</p>
        </div>

        <div className="ds-color-cards">
          <div className="ds-color-card">
            <div className="ds-color-card__color" style={{backgroundColor: '#706f84'}}></div>
            <div className="ds-color-card__body">
              <h5>Light <small>#706f84</small></h5>
              <code>$ds-display-light-color</code>
            </div>
          </div>

          <div className="ds-color-card">
            <div className="ds-color-card__color" style={{backgroundColor: '#110f33'}}></div>
            <div className="ds-color-card__body">
              <h5>Regular <small>#110f33</small></h5>
              <code>$ds-display-regular-color</code>
            </div>
          </div>

          <div className="ds-color-card">
            <div className="ds-color-card__color" style={{backgroundColor: '#0f0d3a'}}></div>
            <div className="ds-color-card__body">
              <h5>Dark <small>#0f0d3a</small></h5>
              <code>$ds-display-dark-color</code>
            </div>
          </div>
        </div>
      </div>

      <div className="ds-block dsu-mt-lg">
        <div className="ds-block__title">
          <h4>Body</h4>
          <p>Body copy</p>
        </div>

        <div className="ds-color-cards">
          <div className="ds-color-card">
            <div className="ds-color-card__color" style={{backgroundColor: '#8e8d9e'}}></div>
            <div className="ds-color-card__body">
              <h5>Lighter <small>#8e8d9e</small></h5>
              <code>$ds-body-lighter-color</code>
            </div>
          </div>

          <div className="ds-color-card">
            <div className="ds-color-card__color" style={{backgroundColor: '#808080'}}></div>
            <div className="ds-color-card__body">
              <h5>Light <small>#808080</small></h5>
              <code>$ds-body-light-color</code>
            </div>
          </div>

          <div className="ds-color-card">
            <div className="ds-color-card__color" style={{backgroundColor: '#4d4d4d'}}></div>
            <div className="ds-color-card__body">
              <h5>Regular <small>#4d4d4d</small></h5>
              <code>$ds-body-regular-color</code>
            </div>
          </div>
        </div>
      </div>

      <div className="ds-block dsu-mt-lg">
        <div className="ds-block__title">
          <h4>Success</h4>
          <p>Icons and text on successful text inputs</p>
        </div>

        <div className="ds-color-cards">
          <div className="ds-color-card">
            <div className="ds-color-card__color" style={{backgroundColor: '#8fc980'}}></div>
            <div className="ds-color-card__body">
              <h5>Regular <small>#8fc980</small></h5>
              <code>$ds-success-regular-color</code>
            </div>
          </div>

          <div className="ds-color-card">
            <div className="ds-color-card__color" style={{backgroundColor: '#6b9660'}}></div>
            <div className="ds-color-card__body">
              <h5>Dark <small>#6b9660</small></h5>
              <code>$ds-success-dark-color</code>
            </div>
          </div>
        </div>
      </div>

      <div className="ds-block dsu-mt-lg">
        <div className="ds-block__title">
          <h4>Error</h4>
          <p>Icons and text on text inputs with errors</p>
        </div>

        <div className="ds-color-cards">
          <div className="ds-color-card">
            <div className="ds-color-card__color" style={{backgroundColor: '#f05e5e'}}></div>
            <div className="ds-color-card__body">
              <h5>Regular <small>#f05e5e</small></h5>
              <code>$ds-error-regular-color</code>
            </div>
          </div>

          <div className="ds-color-card">
            <div className="ds-color-card__color" style={{backgroundColor: '#bd4a4a'}}></div>
            <div className="ds-color-card__body">
              <h5>Dark <small>#bd4a4a</small></h5>
              <code>$ds-error-dark-color</code>
            </div>
          </div>
        </div>
      </div>

      <div className="ds-block dsu-mt-lg">
        <div className="ds-block__title">
          <h4>Warning</h4>
          <p>Icons and text on text inputs with warnings</p>
        </div>

        <div className="ds-color-cards">
          <div className="ds-color-card">
            <div className="ds-color-card__color" style={{backgroundColor: '#f8d074'}}></div>
            <div className="ds-color-card__body">
              <h5>Regular <small>#f8d074</small></h5>
              <code>$ds-warning-regular-color</code>
            </div>
          </div>

          <div className="ds-color-card">
            <div className="ds-color-card__color" style={{backgroundColor: '#f5be33'}}></div>
            <div className="ds-color-card__body">
              <h5>Dark <small>#f5be33</small></h5>
              <code>$ds-warning-dark-color</code>
            </div>
          </div>
        </div>
      </div>
    </DemoLayoutContent>
  )
}

export default Colors
