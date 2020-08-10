require("dotenv").config("../.env")

dbPassword = process.env.MONGODB

module.exports = {
	mongoURI: dbPassword,
}
