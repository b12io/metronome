### Checkbox Example
```js
import Checkbox from "./Checkbox.es6.js";

const [isSelected, setSelected] = React.useState(false);

<>
    <Checkbox name="Checkbox" checked={isSelected} onChange={() => setSelected(!isSelected)}/>
</>
```
