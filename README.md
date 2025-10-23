# MonoDev Landing Page

Landing page profesional untuk monodev.id - Solusi Digital Terpadu untuk Bisnis Modern.

## 🚀 Fitur

- **Responsive Design**: Tampilan optimal di semua perangkat (desktop, tablet, mobile)
- **Modern UI**: Desain modern dengan gradient hero section
- **Navigation**: Header tetap dengan hamburger menu untuk mobile
- **Smooth Scrolling**: Navigasi halus antar section
- **Interactive Elements**: Animasi scroll, form handling, dan menu toggle
- **SEO Optimized**: Meta tags lengkap untuk optimasi search engine
- **Indonesian Language**: Seluruh konten dalam Bahasa Indonesia

## 📂 Struktur File

```
.
├── index.html      # Struktur HTML utama
├── styles.css      # Styling CSS responsif
├── script.js       # Fungsi JavaScript interaktif
├── favicon.svg     # Icon website MonoDev
└── README.md       # Dokumentasi
```

## 🎨 Sections

1. **Hero Section**: Judul utama dengan call-to-action buttons
2. **Services Section**: 6 layanan utama (Web Dev, Mobile Apps, Cloud, UI/UX, IT Consulting, Digital Marketing)
3. **About Section**: Informasi perusahaan dengan statistik
4. **Contact Section**: Form kontak dan informasi kontak
5. **Footer**: Quick links dan social media

## 🛠️ Cara Menggunakan

### Lokal Development

1. Clone repository
```bash
git clone https://github.com/fakerteamxyz/landingpage.monodev.git
cd landingpage.monodev
```

2. Buka dengan web server (contoh menggunakan Python)
```bash
python3 -m http.server 8080
```

3. Buka di browser
```
http://localhost:8080
```

### Deploy

Cukup upload semua file ke hosting web Anda. Tidak memerlukan build process atau dependencies tambahan.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎯 Customization

### Mengubah Warna
Edit variabel CSS di `styles.css`:
```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #1e40af;
    --accent-color: #3b82f6;
    ...
}
```

### Mengubah Konten
Edit text langsung di `index.html` pada section yang diinginkan.

### Menambah/Mengurangi Layanan
Edit section `.services-grid` di `index.html`.

## 📄 License

© 2024 MonoDev. All rights reserved.
