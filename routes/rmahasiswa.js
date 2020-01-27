const mahasiswa = require('express')()
const mahasiswaController = require('../controller/cmahasiswa')

mahasiswa.post('/postmhs', (req, res) => {
  mahasiswaController.postmahasiswa(req.body)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

mahasiswa.post('/loginmhs', (req, res) => {
  mahasiswaController.login(req.body)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

mahasiswa.get('/getallmhs', (req, res) => {
  mahasiswaController.getallmahasiswa()
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

module.exports = mahasiswa