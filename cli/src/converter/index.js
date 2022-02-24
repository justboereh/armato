const { parse } = require('path')
const { createInterface } = require('readline')
const { parseString } = require('xml2js')
const {
  readFileSync,
  existsSync,
  mkdirSync,
  writeFileSync,
  readdirSync,
  unlinkSync,
} = require('fs')
const nativeDialog = require('native-file-dialog')

const doItems = require('./items')
const slash = require('../slash')

module.exports = () => {
  const { ext } = parse(process.argv[2])

  // clear directory if user has flags
  if (process.argv.some((x) => ['-c, --cleardir'].includes(x))) {
    const files = readdirSync(folderPath)

    // loop through files and remove
    for (const file of files) {
      fs.unlinkSync(`${folderPath}/${file}`)
    }
  }

  // if ext of file is .rbxlx
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

      function main() {
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
      }

      if (existsSync(`${folderPath}/armato.config.json`)) {
        createInterface(process.stdin, process.stdout).question(
          '\n\tARMATO config file exists, override current project (Y/n)?',
          (answer) => {
            // if user ansers yes to override
            if (['y', ''].includes(answer.trim().toLowerCase())) {
              const files = readdirSync(folderPath)

              for (const file of files) {
                unlinkSync(`${folderPath}/${file}`)
              }

              main()
            }
          }
        )
      }
    })
  }
}
