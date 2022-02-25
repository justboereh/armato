const { parse, dirname } = require('path')
const { readdirSync } = require('fs')

const slash = require('../../slash')
const { push, get, update } = require('../../tree')

module.exports = (dirPath) => {
  let { dir, name, ext } = parse(dirPath.replace(slash(process.cwd()), ''))

  if (name.substr(0, 5) !== 'index') {
    name = name.replace(/^[_]/g, '')

    if (get({ Path: dir, Name: name, ClassName: ext.substr(1) })) return
    let itemJSExt

    try {
      itemJSExt = require('../../extensions/' + ext.substr(1))
    } catch {
      itemJSExt = require('../../extensions/_default')
    }

    if (itemJSExt) {
      push(
        itemJSExt({
          relativePath: slash(dir),
          dirPath: slash(`${process.cwd()}/${dir}`),
          name,
          ext,
        })
      )
    }

    return
  }

  const item = get({ Path: dirname(dir), Name: dir.match(/\w+$/g)[0] })

  // exists in tree
  if (item) {
    // but is a folder
    if (item[0].item && !item[0].item.ClassName) {
      let itemJSExt

      try {
        itemJSExt = require('../../extensions/' + ext.substr(1))
      } catch {
        itemJSExt = require('../../extensions/_default')
      }

      if (itemJSExt) {
        update(
          item[0].index,
          itemJSExt(
            {
              relativePath: slash(dir),
              dirPath: slash(`${process.cwd()}/${dir}`),
              name: item[0].item.Name,
              ext,
            },
            true
          )
        )
      }
    }
  }
}
