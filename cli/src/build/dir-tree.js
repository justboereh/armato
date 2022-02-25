const { existsSync, lstatSync, readdirSync, readFileSync } = require('fs')
const { parse } = require('path')

const slash = require('../slash')

const isDir = (path) => {
  try {
    return lstatSync(path).isDirectory()
  } catch (error) {}
}
const isScript = (str) =>
  ['.Script', '.LocalScript', '.ModuleScript'].includes(str)

const rmDot = (str) => {
  str.substr(1, 1) === '.' ? str.slice(1) : str
}

module.exports = dirtree = (path) => {
  if (!existsSync(path)) process.exit()

  const { dir, name, ext } = parse(slash(path))

  let tree = { _attribute: { class: rmDot(ext) || name } }

  const getData = (ipath, iname, iext) => {
    if (isScript(iext)) {
      return readFileSync(`${ipath}/${iname}${iext}`, 'utf-8')
    }
    return JSON.parse(readFileSync(`${ipath}/${iname}${iext}`, 'utf-8'))
  }

  for (const item of (isDir(path) && readdirSync(path)) || []) {
    const { iname, iext } = parse(slash(`${path}/${item}`))

    if (iname === 'index' && iext) {
      tree._attribute.ext = iext
      tree.data = getData(path, 'index', iext)

      continue
    }

    if (!tree.Item) tree.Item = []

    tree.Item.push(dirtree(`${path}/${item}`))
  }

  if (!isDir(path)) {
    let data = getData(dir, name, ext)

    for (const key in data) {
      const prop = data[key]

      if (!tree.Properties) tree.Properties = {}
      if (!tree.Properties[prop.type]) tree.Properties[prop.type] = []

      if (prop.value) {
        tree.Properties[prop.type].push({ _text: prop.value })

        continue
      }

      for (const part in prop) {
        if (!prop.hasOwnProperty(part) && part !== 'type') continue

        tree.Properties[prop.type].push({ _text: prop[part] })
      }
    }

    if (data.referent) tree._attribute.referent = data.referent
  }

  return tree
}
