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

const source = {
  settings: {
    theme: 'dark',
    notifications: {
      email: true
    }
  }
}

const variables = [
  { username: ['user.name'] },
  { theme: ['settings.theme'] },
  { notification: ['settings.notifications.sms', 'settings.notifications.email'] }
]

const result = extract(source, variables)

console.log(result) // { username: undefined, theme: 'dark', notification: true }
```

---

## API Reference

### `extract(source, variables)`

**Returns**: `Object`

- **`source`**: `Object`  
  The source object from which values will be extracted.

- **`variables`**: `Array<Object>`  
  An array of objects, where each object defines a key and a list of paths to search for the corresponding value in the `source` object.  
  - **`key`**: `string`  
    The key to which the extracted value will be assigned in the resulting object.  
  - **`value`**: `Array<string>`  
    An array of paths (as dot-separated strings) to search for the value in the `source` object. The first valid path will be used to extract the value.

---