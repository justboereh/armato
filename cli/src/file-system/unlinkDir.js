const { parse } = require('path')

const slash = require('../slash')
const { get, remove } = require('../tree')
const logs = require('../logs')

module.exports = (dirPath) => {
  const { dir, name } = parse(dirPath.replace(slash(process.cwd()), ''))

  if (dir === '') return
  // console.log('		+ ', logs.get())
}
