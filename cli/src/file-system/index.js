const chokidar = require('chokidar')

const slash = require('../slash')

const fsAdd = require('./add')
const fsAddDir = require('./addDir')
const fsChange = require('./change')
const fsUnlink = require('./unlink')
const fsUnlinkDir = require('./unlinkDir')

const ignored = [slash(process.cwd()) + '/armato.config.json']

let timeout = Date.now()

module.exports = () => {
  chokidar.watch('.', { cwd: process.cwd(), ignored }).on('add', fsAdd)
  chokidar.watch('.', { cwd: process.cwd(), ignored }).on('change', fsChange)
  chokidar.watch('.', { cwd: process.cwd(), ignored }).on('unlink', fsUnlink)

  // DIRECTORY
  chokidar.watch('.', { cwd: process.cwd(), ignored }).on('addDir', fsAddDir)
  chokidar
    .watch('.', { cwd: process.cwd(), ignored })
    .on('unlinkDir', fsUnlinkDir)
}
