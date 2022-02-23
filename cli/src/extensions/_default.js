const { readFileSync } = require('fs')

const slash = require('../slash')

module.exports = ({ relativePath, dirPath, name, ext }, isIndex) => {
  const toReturn = []

  const parsedData = JSON.parse(
    readFileSync(`${dirPath}/${isIndex ? 'index' : name}${ext}`, {
      encoding: 'utf8',
    })
  )
  const returnData = {
    Path: slash(relativePath),
    Name: name,
    ClassName: ext.substr(1),
  }

  function doProps(props) {
    const r = { ...returnData }

    for (const prop in props) {
      if (props.hasOwnProperty(prop)) {
        const value = props[prop]

        r[prop] = value
      }
    }

    return r
  }

  if (typeof parsedData === 'object') {
    toReturn.push(doProps(parsedData))

    return toReturn
  }

  for (const item of parsedData) toReturn.push(doProps(item))

  return toReturn
}
