const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
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
  date: {
    type: Date,
    default: Date.now,
  },
})

const Model = mongoose.model("User", UserSchema)

module.exports = Model
