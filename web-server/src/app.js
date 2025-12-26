const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/prediksiCuaca')

const app = express()

// Menentukan port dari environment (untuk deployment) atau default 3000 saat lokal
const port = process.env.PORT || 3000

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine dan lokasi folder views
app.set('view engine', 'hbs')
app.set('views', viewPath)
hbs.registerPartials(partialsPath)

// Setup direktori statis
app.use(express.static(publicDirectoryPath))

// Halaman utama
app.get('', (req, res) => {
    res.render('index', {
        judul: 'Aplikasi Cek Cuaca',
        nama: 'Rindhiani Putri'
    })
})

// Halaman bantuan / FAQ
app.get('/bantuan', (req, res) => {
    res.render('bantuan', {
        judul: 'Bantuan Saya',
        teksBantuan: 'Ini adalah teks bantuan',
        nama: 'Rindhiani Putri'
    })
})

// Halaman info cuaca
app.get('/infocuaca', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'Kamu harus memasukan lokasi yang ingin dicari'
        })
    }

    geocode(req.query.address, (error, { latitude, longitude, location } = {}) => {
        if (error) {
            return res.send({ error })
        }

        forecast(latitude, longitude, (error, dataPrediksi) => {
            if (error) {
                return res.send({ error })
            }

            res.send({
                prediksiCuaca: dataPrediksi,
                lokasi: location,
                address: req.query.address
            })
        })
    })
})

// Halaman tentang
app.get('/tentang', (req, res) => {
    res.render('tentang', {
        judul: 'Tentang Saya',
        nama: 'Rindhiani Putri'
    })
})

// Halaman 404 untuk bantuan
app.get('/bantuan/*', (req, res) => {
    res.render('404', {
        judul: '404',
        nama: 'Rindhiani Putri',
        pesanKesalahan: 'Artikel yang dicari tidak ditemukan.'
    })
})

// Halaman 404 umum
app.get('*', (req, res) => {
    res.render('404', {
        judul: '404',
        nama: 'Rindhiani Putri',
        pesanKesalahan: 'Halaman tidak ditemukan.'
    })
})

// Jalankan server
app.listen(port, () => {
    console.log('Server berjalan di port ' + port)
})
