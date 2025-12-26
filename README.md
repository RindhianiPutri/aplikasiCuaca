# 🌦️ Aplikasi Cuaca Berbasis Web

Aplikasi Cuaca adalah aplikasi **web fullstack** yang dibangun menggunakan **Node.js dan Express** untuk menampilkan **informasi cuaca terkini** dan **berita terbaru seputar cuaca serta iklim**. Aplikasi ini dirancang dengan antarmuka yang sederhana, responsif, dan mudah digunakan.

**Mata Kuliah:** Pemrograman Berbasis Jaringan  
**Dosen:** Randi Proska Sandra, S.Pd, M.Sc ©2023


## ✨ Fitur Utama

* 📍 **Cek Cuaca Berdasarkan Lokasi**
  Pengguna dapat memasukkan nama lokasi untuk melihat kondisi cuaca dan prakiraan terkini.

* 📰 **Berita Cuaca & Iklim**
  Menyajikan berita terbaru yang relevan dengan isu cuaca dan perubahan iklim.

* 💡 **Halaman Bantuan**
  Berisi panduan penggunaan aplikasi serta FAQ.

* 👤 **Tentang Aplikasi**
  Informasi singkat mengenai pengembang dan tujuan pembuatan aplikasi.



## 🛠️ Teknologi yang Digunakan

| Bagian          | Teknologi                       |
| --------------- | ------------------------------- |
| Backend         | Node.js, Express.js             |
| Frontend        | HTML, CSS, JavaScript (Vanilla) |
| Template Engine | Handlebars (HBS)                |
| API Cuaca       | WeatherStack API                |
| API Berita      | Mediastack API                  |
| API Lokasi      | Nominatim (OpenStreetMap)       |
| Konfigurasi     | dotenv                          |
| Deployment      | Vercel                          |



## 📁 Struktur Proyek

```bash
project-root/
│
├── public/          # Aset statis (CSS, JS, gambar)
│   ├── css/
│   ├── js/
│   └── img/
│
├── src/
│   ├── utils/       # Fungsi geocoding & cuaca
│   └── app.js       # Konfigurasi server Express
│
├── templates/
│   ├── views/       # Halaman HBS
│   └── partials/    # Komponen reusable
│
├── .env             # Variabel environment
├── package.json
└── README.md
```


## 🚀 Cara Menjalankan Aplikasi

### 1️⃣ Clone Repository

```bash
git clone https://github.com/hammPa/Aplikasi-Cek-Cuaca.git
cd Aplikasi-Cek-Cuaca
```

### 2️⃣ Install Dependency

```bash
npm install
```

### 3️⃣ Konfigurasi Environment

Buat file `.env` di root folder, lalu isi dengan konfigurasi berikut:

```env
PORT=4000
MEDIA=https://api.mediastack.com
MEDIA_API_KEY=api_media
WEATHER=http://api.weatherstack.com
API_KEY=api_weather
MAP=https://nominatim.openstreetmap.org
```

> ⚠️ Pastikan API Key yang digunakan masih aktif dan valid.

### 4️⃣ Jalankan Server

```bash
node src/app.js
```

### 5️⃣ Akses Aplikasi

Buka browser dan kunjungi:

```
http://localhost:4000
```

## 📌 Catatan

* Aplikasi ini cocok digunakan sebagai **projek pembelajaran fullstack JavaScript**.
* Seluruh tampilan dirancang responsif untuk desktop dan mobile.
* Struktur folder dibuat modular agar mudah dikembangkan.


## 📄 Lisensi

Proyek ini bersifat **open-source** dan bebas digunakan untuk keperluan pembelajaran.


🌤️ *Selamat menggunakan Aplikasi Cuaca!*
