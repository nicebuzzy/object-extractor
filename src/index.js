function extract(source = {}, variables = []) {
  return variables.reduce((result, variable) => {
    const [[key, paths]] = Object.entries(variable)
    return {
      ...result,
      [key]: paths.map(path => getValueByPath(source, path)).find(value => value !== undefined)
    }
  }, {})
}

function getValueByPath(object = {}, path = '') {
  return path.split('.').reduce((acc, key) => acc && acc[key], object)
}

export default extract