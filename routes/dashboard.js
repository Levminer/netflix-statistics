const express = require("express")
const router = express.Router()

const { ensureAuthenticated, forwardAuthenticated } = require("../config/auth")

// dashboard
router.get("/dashboard", ensureAuthenticated, (req, res) => {
	res.render("dashboard", {
		user: req.user,
	})
})

module.exports = router
