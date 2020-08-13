const express = require("express")
const mongoose = require("mongoose")
const passport = require("passport")
const flash = require("connect-flash")
const session = require("express-session")
const helmet = require("helmet")

const Model = require("./models/User")
const { ensureAuthenticated, forwardAuthenticated } = require("./config/auth")
require("dotenv").config("./.env")
const app = express()
const port = 8080

const server = process.env.SERVER_
const node = process.env.NODE_
const version = "2.5.0"

app.locals.server = server
app.locals.node = node
app.locals.version = version

// helmet
app.use(
	helmet({
		contentSecurityPolicy: false,
	})
)

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
	res.header(
		"Content-Security-Policy",
		"script-src 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://cdnjs.cloudflare.com http://localhost:8080"
	)
	res.header("Feature-Policy", "none")
	res.render("index", {})
})

app.get("/en", (req, res, next) => {
	res.header(
		"Content-Security-Policy",
		"script-src 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://cdnjs.cloudflare.com http://localhost:8080"
	)
	res.render("en", {
		user: req.user,
	})
})

app.get("/hu", (req, res) => {
	res.header(
		"Content-Security-Policy",
		"script-src 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://cdnjs.cloudflare.com http://localhost:8080"
	)
	res.render("hu", {
		user: req.user,
	})
})

app.get("/dashboard/load-statistics", ensureAuthenticated, (req, res) => {
	res.render("load-statistics", {
		user: req.user,
	})
})

app.get("/dashboard/delete-account", ensureAuthenticated, (req, res) => {
	res.render("delete-account", {
		user: req.user,
	})
})

app.post("/api/save-statistics", ensureAuthenticated, (req, res) => {
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

app.post("/api/delete-account", ensureAuthenticated, (req, res) => {
	let body = req.body
	let id = body.id

	Model.findByIdAndDelete(id, (err) => {
		if (err) console.log(err)
		console.log("Account deleted succesfully!")
	})

	res.end()
})

app.use(function (req, res, next) {
	res.status(404).render("404", {})
})

app.listen(process.env.PORT_ || port)
console.log(`Started at ${port} in ${server} on ${node} with ${version}`)
