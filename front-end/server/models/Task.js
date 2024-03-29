const mongoose = require('mongoose')

const ResponseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'must provide name'],
  },
  email: {
    type: String,
    required: [true, 'must provide email'],
  },
  message: {
    type: String,
    required: [true, 'must provide name'],
  },

})

module.exports = mongoose.model('Response', ResponseSchema)