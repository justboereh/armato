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
  rmSync,
  lstatSync,
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

  // if ext of file is .rbxlx or .rbxmx
  if (!['.rbxlx', '.rbxmx'].includes(ext)) process.exit()

  let filedata = readFileSync(process.argv[2], 'utf8')

  const index = filedata.indexOf('<SharedStrings>')
  filedata = filedata.replace(
    /<BinaryString name="PhysicsGrid"><\!\[CDATA\[[.\w/\n]*=]]><\/BinaryString>/,
    ''
  )

  if (index !== -1) {
    filedata = filedata.slice(0, index)
    filedata += '</roblox>'
  }

  parseString(filedata, (err, result) => {
    if (err) process.exit()

    const folderPath = slash(nativeDialog.folder_dialog())

    if (!existsSync(folderPath)) process.exit()

    function main() {
      mkdirSync(`${folderPath}/.armato`)
      writeFileSync(`${folderPath}/.armato/config.json`, '{}')

      process.stdout.write('\tCreating directories and files ...')

      process.once('exit', () => {
        process.stdout.write('\r\x1b[K')
        process.stdout.write('\tDirectories and files created ✓')
      })

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

    switch (
      existsSync(`${folderPath}/.armato`) &&
      isDirectory(`${folderPath}/.armato`)
    ) {
      case true:
        const rl = createInterface(process.stdin, process.stdout)

        rl.question(
          '\n\tARMATO config file exists, override current project (Y/n)?',
          (answer) => {
            // if user ansers yes to override
            if (['y', ''].includes(answer.trim().toLowerCase())) {
              const files = readdirSync(folderPath)

              const isDirectory = (path) => {
                try {
                  return lstatSync(path).isDirectory()
                } catch (error) {}
              }

              for (const file of files) {
                if (isDirectory(`${folderPath}/${file}`)) {
                  rmSync(`${folderPath}/${file}`, {
                    recursive: true,
                    force: true,
                  })

                  continue
                }

                unlinkSync(`${folderPath}/${file}`)
              }

              main()
            }
          }
        )

        break

      default:
        main()

        break
    }
  })
}
