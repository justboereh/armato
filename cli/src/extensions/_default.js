const { readFileSync } = require('fs')
const { parse } = require('yaml')

const slash = require('../slash')

module.exports = ({ relativePath, dirPath, name, ext }, isIndex) => {
  const fileData = readFileSync(
    `${dirPath}/${isIndex ? 'index' : name}${ext}`,
    {
      encoding: 'utf8',
    }
  )

  const toReturn = {
    Path: slash(relativePath),
    Name: name,
    ClassName: ext.substr(1),
  }

  for (const prop in parse(fileData)) {
    if (parse(fileData).hasOwnProperty(prop)) {
      const value = parse(fileData)[prop]

      toReturn[prop] = value
    }
  }

  return toReturn
}
