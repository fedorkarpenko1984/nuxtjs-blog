const {model, Schema} = require('mongoose')
const mongoose = require('mongoose')

mongoose.set('useCreateIndex', true)
const userSchema = new Schema({
  login: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true,
    maxlength: 6
  }
})

module.exports = model('users', userSchema)
