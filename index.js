const http = require('http')
const fs = require('fs')
// const { response } = require('express');
let contentInHome = ''
let contentInFile = ''
let reg = ''
fs.readFile('home.html',
  (err, home) => {
    if (err) {
      throw err
    }
    contentInHome = home
  })

fs.readFile('project.html',
  (err, fil) => {
    if (err) {
      throw err
    }
    contentInFile = fil
  })

fs.readFile('registration.html',
  (err, regf) => {
    if (err) {
      throw err
    }
    reg = regf
  })
const args = require('minimist')(process.argv.slice(2))
http.createServer((request, response) => {
  const url = request.url
  response.writeHeader(200, { 'Content-type': 'text/html' })
  switch (url) {
    case '/project':
      response.write(contentInFile)
      response.end()
      break
    case '/registration':
      response.write(reg)
      response.end()
      break
    default:
      response.write(contentInHome)
      response.end()
      break
  }
}).listen(args.port)
