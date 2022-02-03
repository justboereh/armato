const { readdirSync } = require('fs')

const isDirectory = (path) => {
  try {
    const stats = fs.lstatSync(path)
    return stats.isDirectory()
  } catch (error) {}
}

const getPathNameExt = (path) => {
  const lastIndex = path.lastIndexOf('\\')
  const newpath = path.substr(0, lastIndex)
  const nameext = path.substr(lastIndex + 1)
  const name = nameext.substr(0, nameext.lastIndexOf('.'))
  const ext = nameext.substr(nameext.lastIndexOf('.') + 1)

  return { path: newpath, name, ext }
}

module.exports = (
  directoryPath = process.cwd(),
  workingTree = [],
  callback = () => {}
) => {
  // array of random numbers
  let workingArray = []

  // call to remove from workingArray to check if array is empty then run callback with workingTree as parameter
  const removeWorkingArray = (i) => {
    i = workingArray.indexOf(i)

    if (i !== -1) {
      workingArray = workingArray.slice(i, i)

      setTimeout(() => {
        if (workingArray.length < 1) {
          callback(workingTree)
        }
      }, 250)
    }
  }

  // main function
  const createtree = (dirPath = directoryPath) => {
    // read directory
    readdirSync(dirPath).forEach((item) => {
      const rannum = Math.random()
      workingArray.push(rannum)

      const relativePath = directoryPath.replace(process.cwd(), '')
      const { name, ext } = getPathNameExt(item)

      if (relativePath === '' && ext === 'armato') {
        removeWorkingArray(rannum)

        return
      }

      // the item is a directory
      if (isDirectory(dirPath + '/' + name + ext)) {
        createtree(dirPath + '/' + name + ext)

        workingTree.push(
          relativePath === ''
            ? { Name: ext }
            : {
                path: relativePath,
                Name: name,
              }
        )
      } else {
        const itemJSExt = require('./extensions/' + ext)

        if (itemJSExt) {
          workingTree.push(itemJSExt({ relativePath, dirPath, name, ext }))
        }
      }

      // console.log(relativePath, name, ext, workingTree);
      // console.log(workingTree);

      removeWorkingArray(rannum)
    })
  }

  createtree()
}

const create = (callback = () => {}) => {
  // array of random numbers
  let working = []

  // call to remove from workingArray to check if array is empty then run callback with workingTree as parameter
  const popWorking = (i) => {
    i = working.indexOf(i)

    if (i !== -1) {
      working = working.slice(i, i)

      setTimeout(() => {
        if (working.length < 1) {
          callback(tree)
        }
      }, 250)
    }
  }

  const isDirectory = (path) => {
    try {
      return fs.lstatSync(path).isDirectory()
    } catch (error) {}
  }

  // main function
  const createtree = (dirPath = slash(process.cwd)) => {
    // read directory
    fs.readdirSync(dirPath).forEach((item) => {
      const rannum = Math.random()
      working.push(rannum)

      const relativePath = dirPath.replace(slash(process.cwd()), '')
      const { name, ext } = path.parse(item)

      console.log(name, ' +   ', ext, relativePath)

      if (relativePath === '' && name === '.armato') {
        popWorking(rannum)

        return
      }

      // the item is a directory
      if (isDirectory(dirPath + '/' + name + ext)) {
        createtree(dirPath + '/' + name + ext)

        tree.push(
          relativePath === ''
            ? { Name: name }
            : {
                Path: relativePath,
                Name: name,
              }
        )
      } else {
        const itemJSExt = require('./extensions/' + ext.substr(1))

        if (itemJSExt) {
          tree.push(itemJSExt({ relativePath, dirPath, name, ext }))
        } else {
          const def = require('./extensions/_default')

          tree.push(def({ relativePath, dirPath, name, ext }))
        }
      }

      console.log(relativePath, name, ext, tree)
      // console.log(workingTree);

      popWorking(rannum)
    })
  }

  createtree()
}
