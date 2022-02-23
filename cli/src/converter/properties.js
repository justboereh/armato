
module.exports = (properties) => {
  const returnee = {}

  for (const type in properties[0]) {
    if (!properties[0].hasOwnProperty(type)) continue

    for (const prop of properties[0][type]) {
      if (Object.keys(prop).length <= 1) continue

      let value = prop['_']

      if (!prop['_']) {
      }

      returnee[prop['$'].name] = value
    }
  }

  return returnee
}
