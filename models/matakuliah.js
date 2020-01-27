const mongoose = require('mongoose')
const schema = mongoose.Schema
const mkSchema = new schema({
  kodeMataKuliah: {
    type: String,
    required: true
  },
  namamatakuliah: {
    type: String
  },
  jam: {
    type: String
  },
  hari: {
    type: String
  }, 
  ruangan: {
    type: String
  }   ,
  dosen: [
    {
      nidn: String,
      nama: String
    }
  ]
})

module.exports = mongoose.model('matakuliah', mkSchema)