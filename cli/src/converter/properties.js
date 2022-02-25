const Num = (x) => (!isNaN(Number(x)) ? Number(x) : x)
const Bool = (x) => (x === 'false' ? false : x === 'true' ? true : x)

module.exports = (properties) => {
  const returnee = {}

  for (const type in properties[0]) {
    if (!properties[0].hasOwnProperty(type)) continue

    for (const prop of properties[0][type]) {
      if (Object.keys(prop).length <= 1) continue

      let value = prop['_']

      if (!value) {
        returnee[prop['$'].name] = {}

        for (const propkey in prop) {
          if (!prop.hasOwnProperty(propkey) || propkey === '$') continue

          value = prop[propkey]

          if (prop[propkey] instanceof Array && prop[propkey].length === 1) {
            value = prop[propkey][0]
          }

          returnee[prop['$'].name][propkey] = Bool(Num(value))
        }

        continue
      }

      returnee[prop['$'].name] = Bool(Num(value))
    }
  }

  return returnee
}
