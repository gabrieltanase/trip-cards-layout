"use strict"
var express = require("express")
const bodyParser = require("body-parser")
const jsonParser = bodyParser.json()
const fs = require("fs")
const HOST = "0.0.0.0"
const PORT = 7070

const cors = require("cors")
const app = express()

app.use(cors())

app.get("/data", (req, res, next) => {
  res.json(readResponseFile("data"))
})

function readResponseFile(fileName) {
  return JSON.parse(
    fs.readFileSync(process.cwd() + `/responses/${fileName}.json`).toString()
  )
}

app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)
