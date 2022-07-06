import React from 'react'
import DemoLayoutContent from './demo-only-components/DemoLayoutContent.es6.js'
import CodeExample from './demo-only-components/CodeExample.es6.js'
import Highlighter from './demo-only-components/Highlighter.es6.js'

import Grid from '../../components/layout/grid/Grid.es6.js'
import GridCol from '../../components/layout/grid/GridCol.es6.js'
import Button from '../../components/form/button/Button.es6.js'

function GridPage () {
  return (
    <DemoLayoutContent>
      <div className="app-page-title">
        <h1>Grid</h1>
        <p>This is a super-simple grid to properly distribute components in a row. Components inside grid will wrap if there is not enough space to fit in one line. Grid can contain columns.</p>
        <div className="ds-metadata">
          <div className="ds-metadata__di">
            <div className="ds-metadata__dt">Import</div>
            <div className="ds-metadata__dd"><code>import Grid from &apos;@b12/metronome/components/layout/grid/Grid.es6.js&apos;</code></div>
          </div>
          <div className="ds-metadata__di">
            <div className="ds-metadata__dt">Dependencies</div>
            <div className="ds-metadata__dd">No</div>
          </div>
        </div>
      </div>
      <div className="ds-block">
        <div className="ds-block__title">
          <h4>Single grid row</h4>
          <p>Default styles for grid are:</p>
          <Highlighter language='scss'>{`.ds-grid {
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}`}</Highlighter>
          <p>You can also pass additional classes to the grid container using <code>className</code> prop</p>
        </div>

        <CodeExample code={`<Grid>
  <Button label="Get started" />
  <Button label="Get started" />
  <Button label="Get started" />
</Grid>`}>
          <Grid>
            <Button label="Get started" />
            <Button label="Get started" />
            <Button label="Get started" />
          </Grid>
        </CodeExample>

        <CodeExample code={`<Grid direction="column">
  <Button label="Get started" />
  <Button label="Get started" />
  <Button label="Get started" />
</Grid>`}>
          <Grid direction="column">
            <Button label="Get started" />
            <Button label="Get started" />
            <Button label="Get started" />
          </Grid>
        </CodeExample>

        <CodeExample code={`<Grid nowrap justify="end" align="center">
  <span className="dsu-mr-xxsm">You are one click away from awesomeness!</span>
  <Button primary label="Get started" />
</Grid>`}>
          <Grid nowrap justify="end" align="center">
            <span className="dsu-mr-xxsm">You are one click away from awesomeness!</span>
            <Button primary label="Get started" />
          </Grid>
        </CodeExample>
      </div>
      <div className="ds-block">
        <div className="ds-block__title">
          <h4>Props</h4>
        </div>

        <table className="ds-table">
          <thead>
            <tr>
              <th>Prop</th>
              <th>Values</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>direction</td>
              <td><code>column</code></td>
              <td>Sets direction of the grid to column. Default is &apos;row&apos;.</td>
            </tr>
            <tr>
              <td>justify</td>
              <td><code>start</code> <code>center</code> <code>end</code> <code>around</code></td>
              <td>Distributes items in a row accordingly</td>
            </tr>
            <tr>
              <td>align</td>
              <td><code>start</code> <code>end</code> <code>stretch</code></td>
              <td>Aligns items vertically for row and horizontally for column</td>
            </tr>
            <tr>
              <td>nowrap</td>
              <td>Boolean</td>
              <td>Prevents wrapping of items in a row</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="app-page-title">
        <h1>Grid column</h1>
        <p>Columns are used to divide content in a row. Grid can be nested inside a column</p>
        <div className="ds-metadata">
          <div className="ds-metadata__di">
            <div className="ds-metadata__dt">Import</div>
            <div className="ds-metadata__dd"><code>import GridCol from &apos;@b12/metronome/components/layout/grid/GridCol.es6.js&apos;</code></div>
          </div>
          <div className="ds-metadata__di">
            <div className="ds-metadata__dt">Dependencies</div>
            <div className="ds-metadata__dd">Grid</div>
          </div>
        </div>
      </div>

      <div className="ds-block">
        <div className="ds-block__title">
          <h4>Setting columns</h4>
          <p>We are using 12 column grid. Columns are aligned to center (x-axis) by default.</p>
        </div>

        <CodeExample code={`<Grid justify="between" align="center">
  <GridCol col="3">I&apos;m a column</GridCol>
  <GridCol col="3" align="end">I&apos;m a column</GridCol>
  <GridCol>I&apos;m a column with Lorem ipsum ...</GridCol>
</Grid>`}>
          <Grid justify="between" align="center">
            <GridCol col="3">I&apos;m a column</GridCol>
            <GridCol col="3" align="end">I&apos;m a column</GridCol>
            <GridCol>I&apos;m a column with Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mollis rutrum aliquet. Vivamus quis porttitor justo, in congue urna. Donec vehicula, velit sit amet venenatis vulputate, nisi odio rhoncus elit, a venenatis velit risus ornare dui.</GridCol>
          </Grid>
        </CodeExample>

        <CodeExample title="Nested grid" code={`<Grid justify="between" align="center">
  <GridCol col="3">I&apos;m a column</GridCol>
  <GridCol col="3" align="end">I&apos;m a column</GridCol>
  <GridCol>
    <Grid>
      <Button label="Get started" />
      <Button label="Get started" />
      <Button label="Get started" />
    </Grid>
  </GridCol>
</Grid>`}>
          <Grid justify="between" align="center">
            <GridCol col="3">I&apos;m a column</GridCol>
            <GridCol col="3">I&apos;m a column</GridCol>
            <GridCol>
              <Grid>
                <Button label="Get started" />
                <Button label="Get started" />
                <Button label="Get started" />
              </Grid>
            </GridCol>
          </Grid>
        </CodeExample>
      </div>

      <div className="ds-block">
        <div className="ds-block__title">
          <h4>Props</h4>
        </div>

        <table className="ds-table">
          <thead>
            <tr>
              <th>Prop</th>
              <th>Values</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>col</td>
              <td><code>1</code> <code>2</code> <code>3</code> <code>4</code> <code>5</code> <code>6</code></td>
              <td>Sets width of a column. If no width provided, column will take up remaining space</td>
            </tr>
            <tr>
              <td>align</td>
              <td><code>start</code> <code>end</code></td>
              <td>Aligns column vertically</td>
            </tr>
          </tbody>
        </table>
      </div>
    </DemoLayoutContent>
  )
}

export default GridPage
