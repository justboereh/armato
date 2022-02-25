const chokidar = require('chokidar')

const slash = require('../slash')

const fsAdd = require('./file/add')
const fsChange = require('./file/change')
const fsUnlink = require('./file/unlink')
const fsAddDir = require('./dir/add')
const fsUnlinkDir = require('./dir/unlink')

const ignored = [slash(process.cwd()) + '/armato.config.json']

let timeout = Date.now()

module.exports = () => {
  chokidar
    .watch('.', {
      cwd: process.cwd(),
      ignored,
      useFsEvents: true,
    })
    .on('add', fsAdd)
  chokidar
    .watch('.', {
      cwd: process.cwd(),
      ignored,
      useFsEvents: true,
    })
    .on('change', fsChange)
  chokidar
    .watch('.', {
      cwd: process.cwd(),
      ignored,
      useFsEvents: true,
    })
    .on('unlink', fsUnlink)

  // DIRECTORY
  chokidar
    .watch('.', {
      cwd: process.cwd(),
      ignored,
      useFsEvents: true,
    })
    .on('addDir', fsAddDir)
  chokidar
    .watch('.', {
      cwd: process.cwd(),
      ignored,
      useFsEvents: true,
    })
    .on('unlinkDir', fsUnlinkDir)
}
