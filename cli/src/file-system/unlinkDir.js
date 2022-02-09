const { parse } = require('path')

const slash = require('../slash')
const { get, remove } = require('../tree')

module.exports = (dirPath) => {
  const { dir, name } = parse(slash(dirPath.replace(process.cwd(), '')))

  if (dir === '') return
  
  const isInTree = get({ Path: dir, Name: name })

  if (!isInTree) return

  remove(isInTree[0].index)
}
