### Default

```jsx
import Button from './Button.es6.js';

<>
    <Button label="Default" title="Here is a title"/>
    <Button label="Disabled" disabled />
    <Button label="Disabled" loading />
</>
```

#### Primary Button
```jsx
import Button from './Button.es6.js';

<>
    <Button label="Default" primary />
    <Button label="Loading" primary disabled />
    <Button label="Loading" primary loading />
</>
```

#### Button Sizing
```jsx
import Button from './Button.es6.js';

<>
    <Button label="Small" primary small />
    <Button label="Disabled" primary loading small />
    <Button label="Default" primary />
    <Button label="Large" primary large />
    <Button label="Disabled" primary loading large />
</>
```

#### Button with Badges
```jsx
import Button from './Button.es6.js';

<>
    <Button label="Get Expert Boost" badge="$99" primary />
    <Button label="Launch Satellite" badge="$0.99" />
</>
```

#### Button with Chevron
```jsx
import Button from './Button.es6.js';

<>
    <Button label="I act like a toggle" chevron />
    <br /><br />
    <div style={{width: '300px'}}>
    <Button label="I act like a toggle" chevron block />
    <br />
    <Button label="Primary button" primary chevron block />
    <br />
    <Button label="Active state" chevron block active />
    </div>
</>
```
