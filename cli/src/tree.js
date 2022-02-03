const _ = require('lodash')

const logs = require('./logs')

let tree = []

exports.get = (keysValues) => {
  if (!keysValues) return tree
  if (tree.length < 1) return null

  let toReturn = []

  for (let index = 0; index < tree.length; index++) {
    const item = tree[index]
    let doSkip = false
    let isThis = true

    for (const rItem of toReturn) {
      if (_.isEqual(rItem, item)) doSkip = true
    }

    if (doSkip) continue

    for (const key in keysValues) {
      if (
        item.hasOwnProperty(key) &&
        (!item[key] || item[key] !== keysValues[key])
      ) {
        isThis = false

        continue
      }
    }

    if (isThis) toReturn.push({ index, item })
  }

  return toReturn.length > 0 ? toReturn : null
}

exports.update = (index, value) => {
  logs.insert({
    intent: 'change',
    data: value,
  })

  tree[index] = value
}

exports.push = (value) => {
  logs.insert({
    intent: 'add',
    data: value,
  })

  tree.push(value)
}

exports.remove = (index) => {
  if (typeof index === 'number') {
    logs.insert({
      intent: 'remove',
      data: tree[index],
    })

    tree = tree.splice(index, 1)

    return
  }
}
