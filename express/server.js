const express = require("express")
const mongoose = require("mongoose")
const Model = require("./Model")

const app = express()
const port = 8080

const server = "s0"
const node = "n0"
const version = "2.0.0"

app.locals.server = server
app.locals.node = node
app.locals.version = version

//statistics
let stat

// DB
const db =
  "mongodb+srv://ser:1234@mnr-fyqdo.mongodb.net/test?retryWrites=true&w=majority"
mongoose.connect(db, (err) => {
  if (err) return console.log("ERROR")
  console.log("MDB connected!")
})

app.set("view engine", "ejs")
app.use(express.json({ limit: "1mb" }))

app.get("/", (req, res) => {
  res.render("index", {})
  app.use(express.static(__dirname + "/views"))
})

app.get("/en", (req, res) => {
  res.render("en", {})
  app.use(express.static(__dirname + "/views"))
})

app.get("/hu", (req, res) => {
  res.render("hu", {})
  app.use(express.static(__dirname + "/views"))
})

app.post("/api", (req, res) => {
  console.log("Data coming:")
  stat = req.body

  Model.findOneAndUpdate(
    { _id: "5f296c398ba8042f10da6238" },
    { $push: { saved_statistics: stat } },
    function (error, success) {
      if (error) {
        console.log(error)
      } else {
        console.log(success)
      }
    }
  )

  res.end()
})

app.get("/api", (req, res) => {
  console.log("Seraching data...")

  Model.find({}).exec((err, users) => {
    if (err) {
      console.log("Searh error")
    } else {
      res.json(users)
      console.log(users)
    }
  })
})

app.get("/ins", (req, res) => {
  var objFriends = "ASDASDASDASD"
  Model.findOneAndUpdate(
    { _id: "5f296c398ba8042f10da6238" },
    { $push: { saved_statistics: objFriends } },
    function (error, success) {
      if (error) {
        res.send("Error")
        console.log(error)
      } else {
        res.send("Succes")
        console.log(success)
      }
    }
  )
})

app.use(function (req, res, next) {
  res.status(404).send("Sorry can't find that!")
  app.use(express.static(__dirname + "/views"))
})

app.listen(port)
console.log(`Started at ${port} in ${server} on ${node} with ${version}`)
