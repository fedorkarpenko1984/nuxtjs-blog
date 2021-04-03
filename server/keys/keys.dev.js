module.exports = {
  MONGO_URI: `mongodb+srv://fedor:chakras88612@cluster0.ds0sl.mongodb.net/express-nuxt-app?retryWrites=true&w=majority`,
  options: {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    writeConcern: {
      j: true
    }
  }
}
