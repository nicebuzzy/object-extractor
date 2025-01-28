# Object Extractor

## Overview

The `extract` function retrieves values from a source object using a list of paths. For each specified key, multiple paths can be provided, and the function returns the value from the first valid path found.

---

## Installation

### Node

```bash
npm install @nicebuzzy/object-extractor
```

### Browser

```html
<script type="module">
  import extract from 'https://esm.run/@nicebuzzy/object-extractor'
</script>
```

---

## Usage

```js
import extract from '@nicebuzzy/object-extractor'

const user = {
  theme: 'light'
}

const settings = {
  theme: 'dark',
  notifications: {
    email: true
  }
}

const variables = {
  username: ['name', 'username'],
  theme: ['theme'],
  notification: ['notifications.sms', 'notifications.email']
}

const result = extract(variables, user, settings)

console.log(result) // { theme: 'light', notification: true }
```

---

## API Reference

### `extract(variables, ...sources)`

**Returns**: `Object`

- **`variables`**: `Object`  
  An object where each key represents the name of the variable in the resulting object, and the value is an array of paths (as dot-separated strings) to search for the corresponding value in the `sources`.

- **`sources`**: `...Object`  
  One or more source objects from which values will be extracted. The function searches for values in the order of the provided sources, using the first valid path found.

---