const { parse } = require('path')

const slash = require('../slash')
const { get, update } = require('../tree')

module.exports = (dirPath) => {
  let { dir, name, ext } = parse(dirPath.replace(slash(process.cwd()), ''))

  const item = get({ Path: slash(dir), Name: name, ClassName: ext.substr(1) })
  // console.log(item, slash(dir), name, ext)

  if (item) {
    try {
      itemJSExt = require('../extensions/' + ext.substr(1))
    } catch {
      itemJSExt = require('../extensions/_default')
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
          }
        )
      )
    }
  }
}
