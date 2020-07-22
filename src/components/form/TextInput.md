A simple text input

```jsx
import { useState } from "react";
import { TextInput } from "westreact";
const [x, setX] = useState("");

<TextInput value={x} onChange={setX} placeHolder="Set me" />;
```
