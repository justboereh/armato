const { readFileSync } = require('fs')

const slash = require('../slash')

module.exports = ({ relativePath, dirPath, name, ext }, isIndex) => {
  return [
    {
      Path: slash(relativePath),
      Name: name,
      ClassName: ext.substr(1),
      Source: readFileSync(`${dirPath}/${isIndex ? 'index' : name}${ext}`, {
        encoding: 'utf8',
      }),
    },
  ]
}
