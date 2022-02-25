const { existsSync, readFileSync, writeFileSync } = require('fs')
const { js2xml } = require('xml-js')
const { createInterface } = require('readline')
const formatxml = require('xml-formatter')

const slash = require('../slash')
const fsobj = require('./fs-to-object')

const isDirectory = (path) => {
  try {
    return fs.lstatSync(path).isDirectory()
  } catch (error) {}
}

module.exports = () => {
  if (!existsSync(`${slash(process.cwd())}/ARMATO.config.json`)) {
    console.log(
      '\n\tARMATO Config file does not exists in directory, canceling...'
    )

    process.exit()
  }

  let configfiledata = JSON.parse(
    readFileSync(`${slash(process.cwd())}/ARMATO.config.json`, 'utf8')
  )

  const beautifiedXML = formatxml(
    js2xml({
      roblox: {
        _attribute: {
          'xmlns:xmime': 'http://www.w3.org/2005/05/xmlmime',
          'xmlns:xsi': 'http://www.w3.org/2001/XMLSchema-instance',
          'xsi:noNamespaceSchemaLocation': 'http://www.roblox.com/roblox.xsd',
          version: 4,
        },
        Item: fsobj(),
      },
    })
  )

  if (configfiledata.buildDir && isDirectory(configfiledata.buildDir)) {
    switch (existsSync(configfiledata.buildDir)) {
      case true:
        const rl = createInterface(process.stdin, process.stdout)

        rl.question('\n\tFile exists, override (y/N)?', (answer) => {
          if (['n', ''].includes(answer.trim().toLowerCase())) process.exit()

          writeFileSync(configfiledata.buildDir, beautifiedXML)
        })
        break

      default:
        writeFileSync(configfiledata.buildDir, beautifiedXML)

        break
    }
  }
}
