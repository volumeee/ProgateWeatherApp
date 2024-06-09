# Aplikasi Cuaca Sederhana dengan React Native

Proyek ini merupakan aplikasi cuaca sederhana yang dikembangkan menggunakan framework React Native. Aplikasi ini memungkinkan pengguna untuk mencari informasi cuaca berdasarkan lokasi yang dimasukkan.

## Fitur Aplikasi

- **Mencari Cuaca Berdasarkan Lokasi**: Pengguna dapat memasukkan nama kota untuk mencari informasi cuaca saat ini.
- **Menampilkan Informasi Cuaca**: Aplikasi menampilkan suhu, kondisi cuaca, deskripsi cuaca, visibilitas, dan kecepatan angin.

## Komponen Utama

1. **App.js**: Komponen utama yang mengelola state aplikasi dan merender komponen pencarian cuaca serta informasi cuaca.
2. **WeatherSearch.js**: Formulir untuk memasukkan nama kota dan melakukan pencarian cuaca.
3. **WeatherInfo.js**: Menampilkan informasi cuaca yang diperoleh dari API berdasarkan kota yang dimasukkan pengguna.
4. **Constant.js**: Mengatur informasi URL dan API KEY dari https://api.openweathermap.org.

## State dan Props

### State

- `weatherData`: Menyimpan data cuaca yang diperoleh dari API.
- `status`: Menyimpan status pencarian cuaca (loading, success, error).

### Props

- `searchWeather`: Fungsi untuk mencari cuaca berdasarkan nama kota yang dimasukkan pengguna.
- `weatherData`: Data cuaca yang diperoleh dari API, digunakan untuk menampilkan informasi cuaca di komponen `WeatherInfo`.

## Struktur Komponen

- **App.js**: Komponen utama yang mengelola state `weatherData` dan `status`, serta merender `WeatherSearch` dan `WeatherInfo` berdasarkan status pencarian.
- **WeatherSearch.js**: Komponen yang menangkap input nama kota dari pengguna dan memanggil fungsi `searchWeather` untuk mencari cuaca.
- **WeatherInfo.js**: Komponen yang menerima `weatherData` sebagai props dan menampilkan informasi cuaca.

## Penggunaan

1. **Mencari Cuaca**: Masukkan nama kota pada input di `WeatherSearch` dan tekan tombol "Search".
2. **Menampilkan Informasi Cuaca**: Jika pencarian berhasil, `WeatherInfo` akan menampilkan suhu, kondisi cuaca, deskripsi, visibilitas, dan kecepatan angin berdasarkan data dari API.
3. **Menangani Error**: Jika terjadi kesalahan saat pencarian (misalnya nama kota tidak ditemukan), pesan error akan ditampilkan.

## Instalasi

1. Clone repository ini:
   ```bash
   git clone https://github.com/username/repository.git

2. Masuk direktori proyek:
   ```bash
   cd repository

2. Instal dependencies:
   ```bash
   npm install

2. Jalankan aplikasi:
   ```bash
   npm start


## Authors

- [BagusErwanto](https://github.com/volumeee)
