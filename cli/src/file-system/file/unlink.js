const { parse, dirname } = require('path')

const slash = require('../../slash')
const { get, remove, update } = require('../../tree')

module.exports = (dirPath) => {
  let { dir, name, ext } = parse(dirPath.replace(slash(process.cwd()), ''))

  if (name.substr(0, 5) !== 'index') {
    const item = get({ Path: slash(dir), Name: name, ClassName: ext.substr(1) })

    if (!item) return

    remove(item[0].index)

    return
  }

  const item = get({ Path: dirname(dir), Name: dir.match(/\w+$/g)[0] })

  if (!item) return

  update(item[0].index, { Path: dirname(dir), Name: dir.match(/\w+$/g)[0] })
  console.log({ Path: dirname(dir), Name: dir.match(/\w+$/g)[0] })
}
