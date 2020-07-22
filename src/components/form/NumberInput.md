A simple number input

```jsx
import { useState } from "react";
import { NumberInput } from "westreact";
const [x, setX] = useState(0);

<NumberInput value={x} onChange={setX} placeHolder="Set me" />;
```
