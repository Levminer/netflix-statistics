// requires
const express = require("express")
const mongoose = require("mongoose")
const passport = require("passport")
const flash = require("connect-flash")
const session = require("express-session")
//! TEST const helmet = require("helmet")

// exports
const Model = require("./models/User")
const { ensureAuthenticated, forwardAuthenticated } = require("./config/auth")
require("dotenv").config("./.env")

// express
const app = express()
const port = process.env.PORT_ || 8080


// locals
const version = "2.4.0"
const server = process.env.SERVER_
const node = process.env.NODE_

app.locals.version = version
app.locals.server = server
app.locals.node = node

app.use(
	helmet({
		contentSecurityPolicy: false,
	})
)

// ejs
app.set("view engine", "ejs")

// configs
require("./config/passport")(passport)
const db = require("./config/keys").mongoURI

// mongodb
mongoose
	.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => console.log("MongoDB Connected"))
	.catch((err) => console.log(err))

// express body parser
app.use(express.urlencoded({ extended: true }))

// express session
app.use(
	session({
		secret: "secret",
		resave: true,
		saveUninitialized: true,
	})
)

// passport middleware
app.use(passport.initialize())
app.use(passport.session())

// connect flash
app.use(flash())

// global variables
app.use((req, res, next) => {
	res.locals.success_msg = req.flash("success_msg")
	res.locals.error_msg = req.flash("error_msg")
	res.locals.error = req.flash("error")
	next()
})

// express middlewares
app.use(express.json({ limit: "1mb" }))
app.use(express.static(__dirname + "/views"))

// external routes
app.use("/", require("./routes/dashboard.js"))
app.use("/account", require("./routes/account.js"))

// routes
app.get("/", (req, res) => {
	res.header("Content-Security-Policy", "script-src 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com")
	res.header("Feature-Policy", "none")
	res.render("index", {})
})

app.get("/en", (req, res) => {
	res.render("en", {
		user: req.user,
	})
})

app.get("/hu", (req, res) => {
	res.render("hu", {
		user: req.user,
	})
})

app.get("/about", (req, res) => {
	res.render("about", {})
})

app.get("/support", (req, res) => {
	res.render("support", {})
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

// api
app.post("/api/save-statistics", ensureAuthenticated, (req, res) => {
	let body = req.body
	let id = body.id
	let statistics = body.results

	Model.findOneAndUpdate({ _id: id }, { $push: { saved_statistics: statistics } }, (err) => {
		if (err) {
			console.log(err)
		} else {
			console.log("Statistics uploaded succesfully!")
		}
	})

	res.end()
})

app.post("/api/delete-account", ensureAuthenticated, (req, res) => {
	let body = req.body
	let id = body.id

	Model.findByIdAndDelete(id, (err) => {
		if (err) {
			console.log(err)
		} else {
			console.log("Account deleted succesfully!")
		}
	})

	res.end()
})

// Error
app.use((req, res, next) => {
	res.status(404).render("404", {})
})

// Start
app.listen(port)
console.log(`Started at ${port} in ${server} on ${node} with ${version}`)
