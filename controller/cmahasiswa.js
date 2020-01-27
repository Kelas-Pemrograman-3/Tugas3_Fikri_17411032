const mahasiswaModel = require('../models/mahasiswa')
const bcrypt = require('bcryptjs')

exports.postmahasiswa = (data) =>
  new Promise((resolve, reject) => {
  bcrypt.hash(data.password, 10, (err, hash) => {
    data.password = hash
    // console.log(data.password)
    mahasiswaModel.find({
      npm: data.npm
    }).then(hasil => {
      if (hasil.length > 0) {
        reject({
          error: true,
          pesan: 'NPM Sudah Digunakan'
        })
      }else{
        mahasiswaModel.create(data)
        .then(res => {
          resolve({
            error: false,
            pesan: 'Berhasil Registrasi'
          })
        }).catch(() => {
          reject({
            error: true,
            pesan: 'Gagal Registrasi'
          })
        })
      }
    })
  })
})

exports.login = (data) => 
  new Promise ((resolve, reject) => {
    mahasiswaModel.findOne({
      npm: data.npm
    }).then(res => {
      // console.log(res)
      if (res === null) {
        reject({
          error: true,
          pesan: 'NPM Tidak terdaftar'
        })
      } else {
        let passwordhash = res.password
        if (bcrypt.compareSync(data.password, passwordhash)) {
          resolve({
            error: false,
            pesan: 'Berhasil Login',
            data: res
          })
        } else {
          reject({
            error: true,
            pesan: 'Password Anda Salah'
          })
        }
      }
    })
  })

exports.getallmahasiswa = () =>
  new Promise((resolve, reject) => {
    mahasiswaModel.find()
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
  