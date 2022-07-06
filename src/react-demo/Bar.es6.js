import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import github from 'react-syntax-highlighter/styles/hljs/github'

import DemoLayoutContent from './demo-only-components/DemoLayoutContent.es6.js'
import Button from '../../components/form/button/Button.es6.js'
import { Desktop, Faq, Checkmark } from '../../components/Icons.es6.js'

const previewFrameBarHtml = `<div className="ds-preview-frame-bar">
  <div className="ds-preview-frame-bar__col">
    <div className="ds-dropdown">
      <div className="ds-dropdown__toggle">
        <Desktop height="16" color="#706F84" /> Desktop view
      </div>
      <ul className="ds-dropdown__menu">
        <li className="ds-dropdown__menu-item">
          <span>Desktop view</span>
        </li>
        <li className="ds-dropdown__menu-item">
          <span>Tablet view</span>
        </li>
        <li className="ds-dropdown__menu-item">
          <span>Mobile view</span>
        </li>
        <li className="ds-dropdown__menu-item">
          <span>Preview in new window</span>
        </li>
      </ul>
    </div>
    <a className="ds-link-with-icon" href=""><Faq height="16" color="#706F84" /> Support</a>
  </div>
  <div className="ds-preview-frame-bar__col">
    <Button label="Preview" />
    <Button label="Publish" primary />
  </div>
</div>
`

const previewFrameBarHtml2 = `<div className="ds-preview-frame-bar">
  <div className="ds-preview-frame-bar__col">
    <div className="ds-dropdown ds-dropdown--menu-visible">
      <div className="ds-dropdown__toggle">
        <Desktop height="16" color="#706F84" /> Desktop view
      </div>
      <ul className="ds-dropdown__menu">
        <li className="ds-dropdown__menu-item">
          <span>Desktop view</span>
        </li>
        <li className="ds-dropdown__menu-item">
          <span>Tablet view</span>
        </li>
        <li className="ds-dropdown__menu-item">
          <span>Mobile view</span>
        </li>
        <li className="ds-dropdown__menu-item">
          <span>Preview in new window</span>
        </li>
      </ul>
    </div>
    <a className="ds-link-with-icon" href=""><Faq height="16" color="#706F84" /> Support</a>
  </div>
  <div className="ds-preview-frame-bar__col">
    <Button label="Preview" />
    <Button label="Publish" primary />
  </div>
</div>
`

function Dropdown () {
  return (
    <DemoLayoutContent>
      <div className="app-page-title">
        <h2>Composition</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
          aliquid suscipit natus rem, ipsa molestiae voluptate vero obcaecati
          voluptatibus ea nobis neque necessitatibus excepturi perferendis, fuga
          voluptatem totam quae quas.
        </p>
      </div>

      <div className="ds-block">
        <div className="ds-block__title">
          <h4>Preview frame top navigation bar</h4>
        </div>

        <div className="ds-example">
          <div className="ds-example__preview">
            <div className="ds-preview-frame-bar" style={{ padding: '0 10px' }}>
              <div className="ds-preview-frame-bar__col">
                <div className="ds-dropdown">
                  <div className="ds-dropdown__toggle">
                    <Desktop height="16" color="#706F84" /> Desktop view
                  </div>
                  <ul className="ds-dropdown__menu">
                    <li className="ds-dropdown__menu-item">
                      <span>Desktop view</span>
                    </li>
                    <li className="ds-dropdown__menu-item">
                      <span>Tablet view</span>
                    </li>
                    <li className="ds-dropdown__menu-item">
                      <span>Mobile view</span>
                    </li>
                    <li className="ds-dropdown__menu-item">
                      <span>Preview in new window</span>
                    </li>
                  </ul>
                </div>
                <a className="ds-link-with-icon">
                  <Faq height="16" color="#706F84" /> Support
                </a>
              </div>
              <div className="ds-preview-frame-bar__col">
                <Button label="Preview" />
                <Button label="Publish" primary />
              </div>
            </div>
          </div>
          <div className="ds-example__code">
            <SyntaxHighlighter language="html" style={github}>
              {previewFrameBarHtml}
            </SyntaxHighlighter>
          </div>
        </div>
        <div className="ds-example" id="bar">
          <div className="ds-example__preview" style={{ minHeight: '260px' }}>
            <div className="ds-preview-frame-bar" style={{ padding: '0 10px' }}>
              <div className="ds-preview-frame-bar__col">
                <div className="ds-dropdown ds-dropdown--menu-visible">
                  <div className="ds-dropdown__toggle">
                    <Desktop height="16" color="#706F84" /> Desktop view
                  </div>
                  <ul className="ds-dropdown__menu">
                    <li className="ds-dropdown__menu-item">
                      <span>
                        <Checkmark height="16" color="#756cf9" /> Desktop view
                      </span>
                    </li>
                    <li className="ds-dropdown__menu-item">
                      <span>Tablet view</span>
                    </li>
                    <li className="ds-dropdown__menu-item">
                      <span>Mobile view</span>
                    </li>
                    <li className="ds-dropdown__menu-item">
                      <span>Preview in new window</span>
                    </li>
                  </ul>
                </div>
                <a className="ds-link-with-icon">
                  <Faq height="16" color="#706F84" /> Support
                </a>
              </div>
              <div className="ds-preview-frame-bar__col">
                <Button label="Preview" />
                <Button label="Publish" primary />
              </div>
            </div>
          </div>
          <div className="ds-example__code">
            <SyntaxHighlighter language="html" style={github}>
              {previewFrameBarHtml2}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
    </DemoLayoutContent>
  )
}

export default Dropdown
