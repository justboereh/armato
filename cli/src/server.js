const { getPort } = require('portfinder')
const express = require('express')
const { existsSync } = require('fs')

const logs = require('./logs')
const tree = require('./tree')

const serverCallbacks = []

let isServerStarted = false

const stdin = process.stdin
stdin.setRawMode(true)
stdin.resume()
stdin.setEncoding('utf8')

exports.isServerStarted = () => isServerStarted

exports.serverCallback = (callback) => {
  serverCallbacks.push(callback)
}

module.exports = () => {
  if (!existsSync(process.cwd() + '/armato.config.json')) {
    console.log(`
  [ERROR] Project not initialized

            \`armato init [Project Name]\` or add "armato.config.json".
    
    `)

    process.exit()
  }

  getPort(function (_, port) {
    const app = express()

    require('./file-system/index')()

    app.get('/tree', (_, res) => {
      res.send(JSON.stringify(tree.get()))
    })

    app.post('/tree', (req, res) => {
      res.send('Hello World!')
    })

    app.get('/logs', (_, res) => {
      res.send(JSON.stringify(logs.get()))
    })

    app.get('/logs/new', (_, res) => {
      res.send(JSON.stringify(logs.get('New')))
    })

    app.get('/logs/old', (_, res) => {
      res.send(JSON.stringify(logs.get('Old')))
    })

    console.log(`
  [SUCCESS] Server Started

            Open the ARMATO plugin in Roblox Studio, enter the port (${port}), and click Connect.

            'ctrl + c' to close server.
    
    `)

    app.listen(port)

    isServerStarted = true

    for (const callback of serverCallbacks) callback(true)

    stdin.on('data', (key) => {
      isServerStarted = false

      for (const callback of serverCallbacks) callback()

      if (key === '\u0003') process.exit()
    })
  })
}
