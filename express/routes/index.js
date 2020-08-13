const express = require("express")
const path = require("path")
const router = express.Router()
const { ensureAuthenticated, forwardAuthenticated } = require("../config/auth")

// Dashboard
router.get("/dashboard", ensureAuthenticated, (req, res) => {
	res.render("dashboard", {
		user: req.user,
	})
})

module.exports = router
