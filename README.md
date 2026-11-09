# 🌍 EcoLens – "Lihat Dampak Sebelum Membeli"

> Aplikasi web 3D interaktif untuk membantu masyarakat membuat keputusan pembelian yang lebih sadar dari sisi lingkungan.

[![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=white)](https://react.dev/)
[![Three.js](https://img.shields.io/badge/Three.js-000000?style=flat-square&logo=three.js&logoColor=white)](https://threejs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

## 🎯 Tujuan

Membantu masyarakat memahami dampak lingkungan dari setiap produk yang akan dibeli dengan cara yang interaktif, visual, dan mudah dipahami.

## ✨ Fitur Utama

- 🌍 **Bumi 3D Interaktif** - Rotate dengan mouse, response terhadap eco score
- 📱 **Scan Barcode** - Scan kode produk langsung dengan kamera
- 🎯 **Eco Score System** - Rating 0-100 dari ramah lingkungan atau tidaknya produk
- 📊 **Dashboard Statistik** - Lihat history scan dan dampak lingkungan Anda
- 🌱 **Rekomendasi Alternatif** - Saran produk yang lebih ramah lingkungan
- 🎨 **UI Modern** - Design responsif dan animasi smooth
- ♻️ **Edukasi** - Info detail tentang bahan dan dampaknya

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ terinstall
- npm atau yarn
- Browser modern (Chrome, Firefox, Safari, Edge)

### Setup

```bash
# Clone atau download project ini
cd ecolens

# Install dependencies
npm install

# Jalankan dev server
npm run dev
```

Buka http://localhost:5176 di browser Anda.

## 📚 Dokumentasi

Untuk pemula yang baru belajar, **baca dokumentasi ini dalam urutan:**

### 1. **[QUICK_START.md](./QUICK_START.md)** ⚡

Panduan tercepat, hanya 5 menit untuk membuat aplikasi jalan.

### 2. **[TUTORIAL_LENGKAP.md](./TUTORIAL_LENGKAP.md)** 📖

Penjelasan mendalam tentang konsep, arsitektur, dan bagaimana semuanya bekerja. Cocok untuk pemula yang ingin mengerti.

### 3. **[PANDUAN_COPY_PASTE.md](./PANDUAN_COPY_PASTE.md)** 📝

Panduan step-by-step untuk copy-paste code. Cocok untuk hands-on learning.

### 4. **[PENJELASAN_KODE.md](./PENJELASAN_KODE.md)** 🔍

Penjelasan baris demi baris dari kode penting di setiap file. Refer ini saat Anda confuse dengan kode.

## 📂 Struktur Project

```
ecolens/
├── src/
│   ├── components/
│   │   ├── Earth3D.jsx         ← Bumi 3D interaktif (★ PALING PENTING)
│   │   ├── EcoScore.jsx        ← Circular progress bar
│   │   ├── ProductCard.jsx     ← Kartu produk
│   │   ├── ScanCamera.jsx      ← Scanner barcode
│   │   ├── Modal.jsx           ← Popup
│   │   └── Navbar.jsx          ← Menu atas
│   ├── pages/
│   │   ├── Home.jsx            ← Halaman pertama (Earth 3D)
│   │   ├── Scan.jsx            ← Halaman scan barcode
│   │   └── Dashboard.jsx       ← Halaman statistik
│   ├── context/
│   │   └── EcoScoreContext.jsx ← Global state management
│   ├── data/
│   │   └── products.js         ← Database produk
│   ├── App.jsx                 ← App root
│   └── main.jsx                ← Entry point
├── public/                      ← Static files
└── [Config files]              ← vite.config.js, tailwind.config.js, dll
```

## 🎮 Fitur-Fitur

### 🌍 Home Page - 3D Earth Interaktif

- Bumi 3D yang berputar otomatis
- Drag mouse untuk rotate bumi
- Scroll untuk zoom in/out
- Background dengan animasi glow
- Warna berubah sesuai average eco score user

### 📱 Scan Page - Barcode Scanner

- Akses kamera device
- Real-time barcode detection
- Tampilkan produk dari database
- Info bahan dan dampak lingkungan
- Rekomendasi produk alternatif

### 📊 Dashboard - Statistik & Analytics

- Total scan products
- Rata-rata eco score
- Kategori breakdown (pie chart)
- Score distribution (bar chart)
- History scan terakhir

## 🛠 Teknologi yang Digunakan

### Frontend Framework

- **React 19** - UI library
- **Vite 7** - Build tool
- **React Router 7** - Client-side routing

### 3D Graphics

- **Three.js** - 3D library
- **React Three Fiber 9** - React renderer untuk Three.js
- **Drei** - Useful helpers untuk R3F

### Styling

- **Tailwind CSS** - Utility-first CSS
- **PostCSS + Autoprefixer** - CSS preprocessing

### Features

- **react-zxing** - Barcode scanning
- **Recharts** - Data visualization
- **Axios** - HTTP client

## 🚀 Scripts

```bash
npm run dev      # Jalankan dev server
npm run build    # Build untuk production
npm run preview  # Preview production build
npm run lint     # Check code dengan ESLint
```

## 💡 Tips untuk Pemula

### 1. Jangan Overthink

Baca QUICK_START.md dulu, jalankan aplikasi, kemudian explore code.

### 2. Eksperimen

- Ubah warna
- Ubah kecepatan animasi
- Tambah produk baru
- Lihat apa yang berubah

### 3. Pahami Struktur

Setiap file `.jsx` adalah component yang bisa di-reuse.
Setiap component punya tanggung jawab spesifik.

### 4. Belajar Secara Bertahap

- Minggu 1: Jalankan dan explore
- Minggu 2: Ubah styling dan data
- Minggu 3: Pahami 3D Earth
- Minggu 4+: Modifikasi dan create fitur baru

## 📋 Checklist Belajar

- [ ] Baca QUICK_START.md
- [ ] Jalankan `npm run dev`
- [ ] Explore semua halaman (Home, Scan, Dashboard)
- [ ] Test scan dengan barcode `123456`
- [ ] Baca TUTORIAL_LENGKAP.md
- [ ] Ikuti PANDUAN_COPY_PASTE.md (tambah produk baru)
- [ ] Ubah warna dan styling
- [ ] Pahami Earth3D.jsx
- [ ] Buat produk dengan Eco Score sendiri
- [ ] Deploy ke Vercel

## 🐛 Troubleshooting

### Error: "Port adalah already in use"

```bash
# Server akan coba port yang berbeda
# Atau kill process yang menggunakan port
```

### Kamera tidak bisa diakses

- Pastikan browser sudah diberi permission
- Untuk localhost, browser otomatis allow

### Barcode tidak terdetect

- Pastikan barcode cukup besar dan jelas
- Cahaya cukup terang
- Tunggu beberapa detik

### 3D Earth tidak tampil

```bash
npm run build
npm run dev
```

Untuk troubleshooting lengkap, check `PANDUAN_COPY_PASTE.md`

## 📞 Support

Jika ada masalah:

1. Baca dokumentasi (TUTORIAL_LENGKAP.md)
2. Check PENJELASAN_KODE.md
3. Google error message
4. Check DevTools (F12)

## 📄 License

MIT License - Free untuk digunakan dan dimodifikasi

---

**Happy Coding! Selamat belajar membuat web 3D interaktif! 🚀🌍♻️**

_Last Updated: Februari 2026_
