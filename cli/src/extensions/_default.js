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
    Path: relativePath,
    Name: name,
    ClassName: ext.substr(1),
  }

  for (const line of fileData.split(/\r?\n/)) {
    if (!line.match(/[\s+][^.]+/g) || !line.match(/[\w]+/g)) continue

    const value = line.match(/[\s+][^.]+/g)[0].trimStart()
    const prop = line.match(/[\w]+/g)[0]

    toReturn[prop] = value
  }

  return toReturn
}
