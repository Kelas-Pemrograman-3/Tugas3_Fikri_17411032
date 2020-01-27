const mkModel = require('../models/matakuliah')

exports.postmk = (data) =>
  new Promise((resolve, reject) => {
    mkModel.create(data)
      .then(res => {
        resolve({
          error: false,
          pesan: 'Berhasil Input Data'
        })
      }).catch(() => {
        reject({
          error: true,
          pesan: 'Gagal Input Data'
        })
      })
  })

  exports.getallmk = () =>
  new Promise((resolve, reject) => {
    mkModel.find()
      .then(res => {
        resolve({
          error: false,
          pesan: 'Berhasil Mengambil Data',
          data: res
        })
      }).catch(() => {
        reject({
          error: true,
          pesan: 'Gagal Mengambil Data'
        })
      })
  })