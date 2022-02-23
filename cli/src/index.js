const path = require('path')
const { existsSync, writeFileSync, mkdirSync } = require('fs')

const server = require('./server')
const { startingDirectory, startingFiles } = require('./starting')
const converter = require('./converter/index')

switch (process.argv[2]) {
  case 'init':
    const initProject = (projectpath, toCD) => {
      const basename = path.basename(projectpath)

      for (const dir of startingDirectory) {
        if (!existsSync(projectpath + dir)) {
          mkdirSync(projectpath + dir)
        }
      }

      for (const file of startingFiles) {
        writeFileSync(projectpath + file.path, file.content)
      }

      console.log(`
  [SUCCESS] Project created.

            ${toCD ? '`cd ' + basename + '`' : ''}
            \`armato serve\` to start the development server and recieve the port.

      `)
      process.exit()
    }

    if (!process.argv[3]) {
      if (!existsSync(process.cwd() + '/armato.config.json')) {
        initProject(process.cwd())
      } else {
        console.log(`
  [ERROR] Project already exists in directory.

      `)
        process.exit()
      }
    } else {
      mkdirSync(process.cwd() + '/' + process.argv[3])
      initProject(process.cwd() + '/' + process.argv[3], true)
    }

    break

  case 'serve':
    server()

    break

  default:
    if (existsSync(process.argv[2])) converter()

    break
}
