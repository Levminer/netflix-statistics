const express = require("express")
const mongoose = require("mongoose")
const passport = require("passport")
const flash = require("connect-flash")
const session = require("express-session")

const Model = require("./models/User")
const { ensureAuthenticated, forwardAuthenticated } = require("./config/auth")

const app = express()
const port = 8080

const server = "s0"
const node = "n0"
const version = "2.0.0"

app.locals.server = server
app.locals.node = node
app.locals.version = version

// Passport Config
require("./config/passport")(passport)

// DB Config
const db = require("./config/keys").mongoURI

// Connect to MongoDB
mongoose
	.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => console.log("MongoDB Connected"))
	.catch((err) => console.log(err))

// EJS
app.set("view engine", "ejs")

// Express body parser
app.use(express.urlencoded({ extended: true }))

// Express session
app.use(
	session({
		secret: "secret",
		resave: true,
		saveUninitialized: true,
	})
)

// Passport middleware
app.use(passport.initialize())
app.use(passport.session())

// Connect flash
app.use(flash())

// Global variables
app.use(function (req, res, next) {
	res.locals.success_msg = req.flash("success_msg")
	res.locals.error_msg = req.flash("error_msg")
	res.locals.error = req.flash("error")
	next()
})

// Routes
app.use("/", require("./routes/index.js"))
app.use("/account", require("./routes/account.js"))

app.use(express.json({ limit: "1mb" }))
app.use(express.static(__dirname + "/views"))

app.get("/", (req, res) => {
	res.render("index", {})
})

app.get("/en", (req, res, next) => {
	res.render("en", {
		user: req.user,
	})
})

app.get("/hu", (req, res) => {
	res.render("hu", {
		user: req.user,
	})
})

app.post("/api", ensureAuthenticated, (req, res) => {
	let body = req.body
	let id = body.id
	let statistics = body.results

	Model.findOneAndUpdate({ _id: id }, { $push: { saved_statistics: statistics } }, function (error, success) {
		if (error) {
			console.log(error)
		} else {
			console.log(success)
		}
	})

	res.end()
})

app.get("/ins", (req, res) => {
	var objFriends = "ASDASDASDASD"
	Model.findOneAndUpdate({ _id: "5f296c398ba8042f10da6238" }, { $push: { saved_statistics: objFriends } }, function (
		error,
		success
	) {
		if (error) {
			res.send("Error")
			console.log(error)
		} else {
			res.send("Succes")
			console.log(success)
		}
	})
})

app.use(function (req, res, next) {
	res.status(404).render("error", {})
})

app.listen(port)
console.log(`Started at ${port} in ${server} on ${node} with ${version}`)
