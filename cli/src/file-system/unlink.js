const { parse } = require('path')

const slash = require('../slash')
const { get, remove } = require('../tree')

module.exports = (dirPath, stat, rename) => {
	console.log(dirPath, stat, rename, get())
	/*
  let { dir, name, ext } = parse(dirPath.replace(slash(process.cwd()), ''))

  const item = get({ Path: slash(dir), Name: name, ClassName: ext.substr(1) })
  console.log(item, slash(dir), name, ext)

  if (item) {
    try {
      itemJSExt = require('../extensions/' + ext.substr(1))
    } catch {
      itemJSExt = require('../extensions/_default')
    }

    if (itemJSExt) {
      remove(item[0].index)
    }
  }*/
}
