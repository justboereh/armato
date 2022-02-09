const { readFileSync } = require('fs')

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

  for (const line of fileData.split(/\r?\n/)) {
    const indexOfEqual = line.indexOf('=')

    if (!indexOfEqual) continue

    const prop = line.split(indexOfEqual)[0].trim()
    const value = line.split(indexOfEqual)[0].trimStart()

    toReturn[prop] = value
  }

  return toReturn
}
