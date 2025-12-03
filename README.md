   __  __       _       _            _____                                           _       
  |  \/  |     | |     | |          |  __ \                                         | |      
  | \  / | __ _| |_ ___| |__   __ _ | |__) | __ ___  _ __   __ _  __ _  __ _ _ __ __| | __ _ 
  | |\/| |/ _` | __/ __| '_ \ / _` ||  ___/ '__/ _ \| '_ \ / _` |/ _` |/ _` | '__/ _` |/ _` |
  | |  | | (_| | || (__| | | | (_| || |   | | | (_) | |_) | (_| | (_| | (_| | | | (_| | (_| |
  |_|  |_|\__,_|\__\___|_| |_|\__,_||_|   |_|  \___/| .__/ \__,_|\__, |\__,_|_|  \__,_|\__,_|
                                                    | |           __/ |                      
                                                    |_|          |___/                       
  > SYSTEM STATUS: ONLINE
  > TARGET: HUMAN PSYCHE MANIPULATION (VIA MATCHA)
  > VERSION: 1.3.0


100 Alasan Kenapa Kamu Harus Suka Matcha

Sebuah single-page application (SPA) interaktif yang dirancang sebagai bentuk "kampanye digital" untuk mempromosikan Matcha. Proyek ini dibangun untuk mendemonstrasikan kemampuan manipulasi DOM, animasi CSS tingkat lanjut, dan logika JavaScript tanpa ketergantungan pada framework eksternal.

Website ini memiliki elemen psikologis yang humoris, di mana pengguna "dipaksa" secara halus untuk menyetujui bahwa Matcha adalah minuman terbaik melalui interaksi antarmuka (UI) yang manipulatif namun estetis.

[ FITUR UTAMA ]

1. Sistem Tema Dinamis (Dynamic Theming)

Aplikasi ini mendukung pergantian tema secara real-time yang mengubah variabel CSS (:root) untuk memberikan nuansa yang berbeda:

Normal Mode (Sage): Tampilan default yang tenang dan minimalis.

Matcha Mode (Neon): Mode high-contrast dengan skema warna gelap dan aksen hijau neon.

Danger Mode: Mode peringatan yang dipicu oleh interaksi negatif pengguna, lengkap dengan animasi guncangan (screen shake) dan overlay merah.

2. Mekanisme Gacha (RNG Manipulation)

Fitur simulasi mesin slot untuk pemilihan minuman.

Logika Deterministik: Meskipun terlihat acak, algoritma telah diatur untuk selalu menghasilkan varian "Matcha" setelah sejumlah putaran tertentu.

Visual Feedback: Teks hasil akhir dilengkapi dengan efek glitch CSS untuk menambah kesan dramatis.

3. Komponen UI Kustom

Menghindari penggunaan window.alert() bawaan browser demi pengalaman pengguna (UX) yang lebih imersif.

Custom Modal: Jendela pop-up dengan desain yang konsisten dengan tema.

Animasi Masuk: Modal muncul dengan efek overshoot/bouncy menggunakan kurva Bezier kustom.

Dark Pattern UX (Satire): Tombol penutup sengaja dihilangkan pada Terms & Condition awal sebagai bagian dari narasi humor proyek.

4. Interaksi Mikro & Partikel

Cursor Trail: Partikel debu hijau mengikuti posisi kursor atau sentuhan layar.

Ripple Effect: Efek gelombang air visual saat tombol diklik (diimplementasikan via JS & CSS).

Parallax Background: Elemen latar belakang bergerak merespons gyroscope pada perangkat mobile.

5. Integrasi AI Chatbot (Beta)

Asisten virtual "MatchaBot" yang terintegrasi menggunakan Gemini API.

Berperan sebagai persona yang obsesif terhadap Matcha.

Mampu menjawab pertanyaan pengguna dengan konteks spesifik mengenai Matcha.

[ TEKNOLOGI ]

Proyek ini dibangun dengan pendekatan Vanilla (Tanpa Framework) untuk performa maksimal dan ukuran file yang minimal.

Komponen

Teknologi

Deskripsi

Markup

HTML5

Struktur semantik dan aksesibilitas dasar.

Styling

CSS3

Variabel CSS, Keyframe Animation, Flexbox/Grid.

Scripting

JavaScript (ES6+)

Logika DOM, Event Handling, Fetch API.

AI Engine

Google Gemini API

Pemrosesan bahasa alami untuk fitur Chatbot.

[ STRUKTUR PROYEK ]

Proyek ini menganut arsitektur Monolith (Single File) untuk kemudahan distribusi dan deployment.

/
├── index.html          # Berisi seluruh kode (HTML, CSS, JS)
└── README.md           # Dokumentasi proyek


[ CARA MENJALANKAN ]

Karena proyek ini tidak memerlukan proses build atau bundling (seperti Webpack/Vite), cara menjalankannya sangat sederhana:

Clone repositori ini atau Download sebagai ZIP.

Buka file index.html langsung menggunakan peramban web modern (Chrome, Firefox, Edge, Safari).

Untuk fitur AI Chatbot, pastikan Anda memiliki koneksi internet.

[ CATATAN RILIS ]

v1.3.0

Penambahan fitur AI Chatbot dengan integrasi Gemini API.

Perbaikan kontras warna teks pada "Mode Matcha" (Neon) untuk keterbacaan yang lebih baik.

Penggantian alert() browser menjadi komponen Modal kustom.

Penambahan animasi jump scare halus pada kemunculan modal.

v1.0.0

Rilis awal dengan fitur dasar 100 Alasan dan Gacha.

Disclaimer: Proyek ini dibuat untuk tujuan hiburan dan edukasi pemrograman web.
