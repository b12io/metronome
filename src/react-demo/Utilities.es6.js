import React from 'react'
import DemoLayoutContent from './demo-only-components/DemoLayoutContent.es6.js'
import CodeExample from './demo-only-components/CodeExample.es6.js'
import Highlighter from './demo-only-components/Highlighter.es6.js'

import Button from '../../components/form/button/Button.es6.js'

const text = '.dsu-{property}{sides}-{size}'

function UtilitiesPage () {
  return (
    <DemoLayoutContent>
      <div className="app-page-title">
        <h1>Utilities</h1>
        <p>Classes and mixins that help combine and distribute components quickly and easily.</p>
      </div>
      <div className="ds-block">
        <div className="ds-block__title">
          <h4>Spacing</h4>
          <p>We use a range of shorthand margin and padding utility classes to modify an element&quot;s appearance. For example, if you want to set margin bottom to 5px for a div, add this class: <code>.dsu-mb-xxxxsm</code></p>
          <p>The classes are named using the format <code>{text}</code> (<i>dsu</i> stands for <i>design-system-utility</i>)</p>
          <p>Where <i>property</i> is one of:</p>
          <ul>
            <li><code>m</code> - margin</li>
            <li><code>p</code> - padding</li>
          </ul>
          <p>Where <i>side</i> is one of:</p>
          <ul>
            <li><code>t</code> - top</li>
            <li><code>r</code> - right</li>
            <li><code>b</code> - bottom</li>
            <li><code>l</code> - left</li>
            <li><code>v</code> - vertical (top and bottom)</li>
            <li><code>h</code> - horizontal (left and right)</li>
            <li><code>a</code> - all sides</li>
          </ul>
          <p>Where <i>size</i> is one of:</p>
          <Highlighter language='scss'>{`$spacing: (
  'null': 0,
  'xxxxsm': 5px,
  'xxxsm':  10px,
  'xxsm':   15px,
  'xsm':    20px,
  'sm':     25px,
  'md':     30px,
  'lg':     35px,
  'xlg':    40px,
  'xxlg':   45px,
  'xxxlg':  50px
);`}</Highlighter>
          <p>You can also use these sizes in SCSS by using this function: <code>spacing(&quot;size&quot;)</code>. Please check an example below:</p>
          <Highlighter language='scss'>{`.side-pane {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 360px;
  padding: spacing('xsm'); // will be converted to 20px
);`}</Highlighter>
          <p>Check some examples below.</p>
        </div>

        <CodeExample code={`<Button primary label="I am Groot" />
<Button label="I am Groot" className="dsu-ml-xsm" />
<Button label="I am Groot" className="dsu-ml-xxlg" />`}>
          <Button primary label="I am Groot" />
          <Button label="I am Groot" className="dsu-ml-xsm" />
          <Button label="I am Groot" className="dsu-ml-xxlg" />
        </CodeExample>
        <CodeExample code={`<div style={{width: '300px'}}>
  <Button label="I am Groot" block className="dsu-mb-lg" />
  <Button primary label="I am Groot" block className="dsu-pv-lg" />
  <Button label="I am Groot" block className="dsu-mt-sm" />
</div>`}>
          <div style={{width: '300px'}}>
            <Button label="I am Groot" block className="dsu-mb-lg" />
            <Button primary label="I am Groot" block className="dsu-pv-lg" />
            <Button label="I am Groot" block className="dsu-mt-sm" />
          </div>
        </CodeExample>
      </div>

      <div className="ds-block">
        <div className="ds-block__title">
          <h4>Visibility classes</h4>
          <p>Show or hide elements when needed</p>
        </div>
        <ul>
          <li><code>.dsu-hide</code> - applies <i>display: none</i></li>
          <li><code>.dsu-block</code> - applies <i>display: block</i></li>
          <li><code>.dsu-inline-block</code> - applies <i>display: inline-block</i></li>
        </ul>
      </div>
    </DemoLayoutContent>
  )
}

export default UtilitiesPage
