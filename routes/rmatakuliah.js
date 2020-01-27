const matakuliah = require('express')()
const mkController = require('../controller/cmatakuliah')

matakuliah.post('/postmk', (req, res) => {
  mkController.postmk(req.body)
    .then(result => {
      res.json(result)
    }).catch(err => {
      res.json(err)
    })
})    

matakuliah.get('/getallmk', (req, res) => {
  mkController.getallmk()
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

module.exports = matakuliah
