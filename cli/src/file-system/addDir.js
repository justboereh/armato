const { parse } = require('path')
const { readdirSync } = require('fs')

const { isEqual } = require('lodash')

const slash = require('../slash')
const { push, get } = require('../tree')
const logs = require('../logs')

const ignoreTreeItems = [
  {
    Name: 'StarterCharacterScripts',
    Path: 'StarterPlayer',
  },
  {
    Name: 'StarterPlayerScripts',
    Path: 'StarterPlayer',
  },
]

const isDirectory = (path) => {
  try {
    return fs.lstatSync(path).isDirectory()
  } catch (error) {}
}

module.exports = (dirPath) => {
  if (dirPath === '') return
  const { dir, name } = parse(dirPath.replace(slash(process.cwd()), ''))

  if (dir === '') return

  for (const item of readdirSync(dirPath)) {
    if (
      !isDirectory(dirPath + '/' + item) &&
      item.includes('index') &&
      !item.includes('_index') &&
      dir !== ''
    ) {
      const { ext } = parse(item)

      if (
        !get({ Path: '/' + slash(dir), Name: name, ClassName: ext.substr(1) })
      ) {
        let itemJSExt

        try {
          itemJSExt = require('../extensions/' + ext.substr(1))
        } catch {
          itemJSExt = require('../extensions/_default')
        }

        if (itemJSExt) {
          push(
            itemJSExt(
              {
                relativePath: dir,
                dirPath: slash(dirPath),
                name,
                ext,
              },
              true
            )
          )
        }

        return
      }
    }
  }

  let ignoreThis = false

  for (const ignoreItem of ignoreTreeItems) {
    if (
      isEqual(ignoreItem, {
        ...(dir !== '' && { Path: slash(dir) }),
        Name: name,
      })
    ) {
      ignoreThis = true

      continue
    }
  }

  if (
    !ignoreThis &&
    !get({ ...(dir !== '' && { Path: slash(dir) }), Name: name })
  ) {
    push({ ...(dir !== '' && { Path: slash(dir) }), Name: name })
  }
}
