let logs = []
let logsOld = []
let logsNew = []

module.exports = {
  insert: (log) => {
    logs.push(log)
    logsNew.push(log)
  },
  get: (OldNew) => {
    if (!OldNew) return logs

    if (OldNew == 'New') {
      const r = logsNew

      logsOld = [...logsOld, ...logsNew]
      logsNew = []

      return r
    }

    return logsOld
  },
}
