const { readFileSync } = require('fs')
// dirPath + '/' + (isIndex ? 'index' : name) + ext
// `${dirPath}/${isIndex ? 'index' : name}${ext}`
module.exports = ({ relativePath, dirPath, name, ext }, isIndex) => {
  return {
    Path: relativePath,
    Name: name,
    ClassName: ext.substr(1),
    Source: readFileSync(`${dirPath}/${isIndex ? 'index' : name}${ext}`, {
      encoding: 'utf8',
    }),
  }
}
