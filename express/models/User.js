const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	supporter: {
		type: Boolean,
		default: false,
	},
	plan: {
		type: Number,
		default: 0,
	},
	max_statistics: {
		type: Number,
		default: 0,
	},
	saved_statistics: {
		type: Array,
	},
	saved_dates: {
		type: Array,
	},
	date: {
		type: Date,
		default: Date.now,
	},
})

const User = mongoose.model("User", UserSchema)

module.exports = User
