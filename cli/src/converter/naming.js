const { existsSync, mkdirSync, writeFileSync } = require('fs')

const index = (name) => (name === 'index' && first ? '_' + name : name)

module.exports = naming = ({ dir, name, classn, first }) => {
  console.log({ dir, name, classn, first })
  const isFolder = classn === 'Folder'

  name = index(name)

  if (existsSync(dir + name + !isFolder ? classn : '')) {
    naming({
      first: dir,
      name: '%' + name,
      class: classn,
    })
  }
  console.log('okay')

  return `${dir}/${name}.${!isFolder ? classn : ''}`
}
