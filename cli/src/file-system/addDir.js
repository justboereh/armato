const { parse } = require('path')
const { readdirSync } = require('fs')

const slash = require('../slash')
const { push, get } = require('../tree')
const logs = require('../logs')

const isDirectory = (path) => {
  try {
    return fs.lstatSync(path).isDirectory()
  } catch (error) {}
}

module.exports = (dirPath) => {
  console.log(logs.get())
  if (dirPath === '') return
  const { dir, name } = parse(dirPath.replace(slash(process.cwd()), ''))

  for (const item of readdirSync(dirPath)) {
    if (
      !isDirectory(dirPath + '/' + item) &&
      item.includes('index') &&
      !item.includes('_index')
    ) {
      const { ext } = parse(item)

      if (!get({ Path: '/' + dir, Name: name, ClassName: ext.substr(1) })) {
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

  if (!get({ ...(dir !== '' && { Path: dir }), Name: name })) {
    push({ ...(dir !== '' && { Path: dir }), Name: name })
  }
}
