import React from 'react'
import DemoLayoutContent from './demo-only-components/DemoLayoutContent'
import Highlighter from './demo-only-components/Highlighter'

function Typography () {
  return (
    <DemoLayoutContent>
      <div className="app-page-title">
        <h1>Typography</h1>
        <p>We use sans-serif fonts for most of our type, the exception being when you want to display code then you should defer to monospace fonts.</p>
        <p>Font family depends on the OS that the user is using. Font family defined as follows:</p>

        <Highlighter language='scss'>{`font-family: -apple-system, SFUIText, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;`}</Highlighter>
      </div>

      <table className="ds-table">
        <thead>
          <tr>
            <th>Style</th>
            <th>Size</th>
            <th>Mixin</th>
            <th>Tag / Class</th>
            <th>Usage</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><h1>DisplayXL</h1></td>
            <td>28px</td>
            <td><code>@include display-xl-font;</code></td>
            <td><code>h1</code> <code>.display-xl-font</code></td>
            <td>Signup headings, modal headings</td>
          </tr>
          <tr>
            <td><h2>DisplayLarge</h2></td>
            <td>22px</td>
            <td><code>@include display-large-font;</code></td>
            <td><code>h2</code> <code>.display-large-font</code></td>
            <td>&mdash;</td>
          </tr>
          <tr>
            <td><h3>Display</h3></td>
            <td>20px</td>
            <td><code>@include display-font;</code></td>
            <td><code>h3</code> <code>.display-font</code></td>
            <td>Sidebar headings</td>
          </tr>
          <tr>
            <td><h4>DisplaySmall</h4></td>
            <td>16px</td>
            <td><code>@include display-small-font;</code></td>
            <td><code>h4</code> <code>.display-small-font</code></td>
            <td>Section headings</td>
          </tr>
          <tr>
            <td><h5>DisplayXSmall</h5></td>
            <td>14px</td>
            <td><code>@include display-xsmall-font;</code></td>
            <td><code>h5</code> <code>.display-xsmall-font</code></td>
            <td>Subsection headings</td>
          </tr>
          <tr>
            <td><p className="lead">BodyLarge</p></td>
            <td>16px</td>
            <td><code>@include body-large-font;</code></td>
            <td><code>p</code> with <code>.lead</code></td>
            <td></td>
          </tr>
          <tr>
            <td><p>Body</p></td>
            <td>14px</td>
            <td><code>@include body-font;</code></td>
            <td><code>p</code></td>
            <td>Default body copy</td>
          </tr>
          <tr>
            <td><p className="text-sm">BodySmall</p></td>
            <td>13px</td>
            <td><code>@include body-small-font;</code></td>
            <td><code>p</code> with <code>.text-sm</code></td>
            <td>Section headings, subdued actions</td>
          </tr>
          <tr>
            <td><p className="text-xs">BodyXSmall</p></td>
            <td>12px</td>
            <td><code>@include body-xsmall-font;</code></td>
            <td><code>p</code> with <code>.text-xs</code></td>
            <td>Navigation labels</td>
          </tr>
        </tbody>
      </table>
    </DemoLayoutContent>
  )
}

export default Typography
