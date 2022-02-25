const { existsSync, mkdirSync, writeFileSync, readFileSync } = require('fs')
const jsonFormat = require('json-format')
const sanitize = require('sanitize-filename')

const properties = require('./properties')

module.exports = doitems = (items, path) => {
  if (!items || !path) return

  for (const item of items) {
    const isFolder = item['$'].class === 'Folder'
    const isScript = ['Script', 'LocalScript', 'ModuleScript'].includes(
      item['$'].class
    )

    const props = {
      ...properties(item.Properties),
      referent: item['$'].referent,
    }
    const filepath = (withClass) =>
      `${path}/${sanitize(props.Name)}${
        withClass ? '.' + item['$'].class : ''
      }`

    // if instance has no children
    if (!item.Item) {
      if (isScript) {
        writeFileSync(filepath(true), props.Source)

        continue
      }

      if (!isFolder && existsSync(filepath(true))) {
        let filedata = JSON.parse(readFileSync(filepath(true), 'utf8'))

        if (!(filedata instanceof Array)) {
          filedata = [filedata]
        }

        filedata.push(props)

        writeFileSync(filepath(true), jsonFormat(filedata))

        continue
      }

      writeFileSync(filepath(true), jsonFormat(props))

      continue
    }

    if (!isFolder) {
      if (!existsSync(filepath())) mkdirSync(filepath())

      writeFileSync(
        `${filepath()}/index.${item['$'].class}`,
        isScript ? props.Source : jsonFormat(props)
      )

      doitems(item.Item, filepath())

      continue
    }
  }
}
