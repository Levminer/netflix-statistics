require("dotenv").config("../.env")

dbPassword = process.env.MONGODB_

module.exports = {
	mongoURI: dbPassword,
}
