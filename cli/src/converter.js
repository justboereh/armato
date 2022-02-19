const { parse } = require('path')
const { parseString } = require('xml2js')
const { readFileSync, writeFileSync, existsSync } = require('fs')
const nativeDialog = require('native-file-dialog')

const slash = require('./slash')

module.exports = () => {
  const { dir, name, ext } = parse(process.argv[2])

  if (ext === '.rbxlx') {
    let filedata = readFileSync(process.argv[2], {
      encoding: 'utf8',
    })

    const index = filedata.indexOf('<SharedStrings>')

    if (index) filedata = filedata.slice(0, index)

    filedata += '</roblox>'

    parseString(filedata, function (err, result) {
      if (err) return

      const folderPath = nativeDialog.folder_dialog()

      if (existsSync(folderPath)) {
        writeFileSync(
          `${slash(folderPath)}/converted-${name}.json`,
          JSON.stringify(result.roblox.Item)
        )
      }
    })
  }
}
