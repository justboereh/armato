const { readFileSync, writeFileSync } = require('fs')

const dirtree = require('./dir-tree')

function getJSON(str) {
  let parsed = []
  try {
    parsed = JSON.parse(str)
  } catch (e) {
    return false
  }
  return parsed
}

const isScript = (x) => ['.Script', '.LocalScript', '.ModuleScript'].includes(x)
const getIndex = (item) => {
  if (item.children) {
    for (const child of item.children) {
      if (child.name === 'index') {
        return readFileSync(child.path, 'utf-8')
      }
    }
  }

  return null
}

module.exports = () => {
  // array of random number
  let doingNumbers = []

  // tree to return
  let rtree = []

  let tree = dirtree(process.cwd())

  writeFileSync('./test.json', JSON.stringify(tree))

  function main(children, ptree) {
    for (const item of children) {
      if (!ptree.Item) ptree.Item = []

      let itree = {
        _attributes: {
          class: item.name,
          ...(getIndex(item) && { referent: getIndex(item).referent }),
        },
      }

      if (item.type === 'directory' && getIndex(item)) {
        if (getJSON(getIndex(item))) {
          // console.log(getJSON(getIndex(item)), ' OKAY')
        }

        itree['_text'] = getIndex(item)

        ptree.Item.push(itree)

        continue
      }
      // console.log(getIndex(item), true)

      getIndex(item)

      if (isScript(item.extension)) {
      }

      ptree.Item.push(itree)
    }

    return ptree
  }

  for (const item of tree.children) {
    let itree = {
      _attributes: {
        class: item.name,
        ...(item.data && { referent: item.data.referent }),
      },
    }

    if (item.type === 'directory' && item) {
      continue
    }

    if (item.children) itree = main(item.children, itree)

    rtree.push(itree)
  }

  return rtree
}
