function extract(variables = {}, ...sources) {
  const result = {}

  for (const [key, paths] of Object.entries(variables)) {
    for (const source of sources) {
      const value = paths.map(path => getValueByPath(source, path)).find(value => value !== undefined)

      if (value !== undefined) {
        result[key] = value
        break
      }
    }
  }

  return result
}

function getValueByPath(object = {}, path) {
  return path.split('.').reduce((acc, key) => acc && acc[key], object)
}

export default extract