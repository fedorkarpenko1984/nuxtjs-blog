module.exports = {
  MONGO_URI: process.env.MONGO_URI,
  options: {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    writeConcern: {
      j: true
    }
  },
  JWT: process.env.JWT
}
