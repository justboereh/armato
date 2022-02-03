const { parse } = require('path')

const slash = require('../slash')
const { get, remove } = require('../tree')
const logs = require('../logs')

module.exports = (dirPath, stat, rename) => {
  console.log('		+ ', logs.get())
}
