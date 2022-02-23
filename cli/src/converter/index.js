const { parse } = require('path')
const { parseString } = require('xml2js')
const { readFileSync, existsSync, mkdirSync, writeFileSync } = require('fs')
const nativeDialog = require('native-file-dialog')

const doItems = require('./items')
const slash = require('../slash')

module.exports = () => {
  const { ext } = parse(process.argv[2])

  if (ext === '.rbxlx') {
    let filedata = readFileSync(process.argv[2], {
      encoding: 'utf8',
    })

    const index = filedata.indexOf('<SharedStrings>')

    if (index) filedata = filedata.slice(0, index)

    filedata += '</roblox>'

    parseString(filedata, (err, result) => {
      if (err) return

      const folderPath = slash(nativeDialog.folder_dialog())

      if (!existsSync(folderPath)) process.exit()

      writeFileSync(`${folderPath}/armato.config.json`, '{}')

      for (const item of result.roblox.Item) {
        if (
          !process.argv.some((x) =>
            ['-e', '--everything'].includes(x.toLowerCase())
          ) &&
          !item.Item
        )
          continue

        if (!existsSync(`${folderPath}/${item['$'].class}`)) {
          mkdirSync(`${folderPath}/${item['$'].class}`)
        }

        if (item.Item) doItems(item.Item, `${folderPath}/${item['$'].class}`)
      }

      process.exit()
    })
  }
}
