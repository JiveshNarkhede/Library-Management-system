const { connect } = require("mongoose")

const connectDb = async () => {
  return connect("mongodb+srv://mahen:12345a@cluster0.zxtfp.mongodb.net", { dbName: "newtest" })
}

module.exports = { connectDb }
