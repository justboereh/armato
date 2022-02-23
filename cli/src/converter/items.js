const { existsSync, mkdirSync, writeFileSync, readFileSync } = require('fs')
const jsonFormat = require('json-format')

const properties = require('./properties')
const naming = require('./naming')

module.exports = doitems = (items, path) => {
  if (!items || !path) return

  for (const item of items) {
    const isFolder = item['$'].class === 'Folder'
    const isScript = ['Script', 'LocalScript', 'ModuleScript'].includes(
      item['$'].class
    )

    const props = properties(item.Properties)
    const filepath = (withClass) =>
      `${path}/${props.Name}${withClass ? '.' + item['$'].class : ''}`

    // if instance has no children
    if (!item.Item) {
      if (!isFolder) {
        if (existsSync(filepath(true))) {
          if (isScript) {
            writeFileSync(filepath(true), props.Source)

            continue
          }

          let filedata = JSON.parse(
            readFileSync(filepath(true), {
              encoding: 'utf8',
            })
          )

          if (typeof filedata === 'object') filedata = [filedata]

          filedata.push(props)

          writeFileSync(filepath(true), jsonFormat(filedata))

          continue
        }

        writeFileSync(filepath(true), jsonFormat(props))

        continue
      }

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
