# MioWeb — Tahap 1

Starter frontend MioWeb menggunakan React + TypeScript + Vite.

## Isi tahap 1
- Layout responsive untuk HP dan desktop
- Katalog demo Manga, Manhwa, Manhua, dan Novel
- Pencarian judul dan filter kategori
- Detail judul sederhana
- Bookmark sementara di state aplikasi
- Placeholder dashboard admin

## Menjalankan proyek
Pastikan Node.js tersedia, lalu jalankan:

```bash
npm install
npm run dev
```

Buka alamat lokal yang ditampilkan Vite.

## Catatan penting
Tahap ini hanya prototipe frontend. Belum ada login sungguhan, database, API eksternal, chapter reader, maupun keamanan admin. Bookmark juga belum tersimpan permanen.

Konten dan cover demo dibuat sebagai placeholder. Untuk konten produksi, gunakan karya sendiri, domain publik, atau konten yang penggunaannya sudah diizinkan. Integrasi API pihak ketiga harus mengikuti ketentuan layanan dan atribusi sumbernya.

## Tahap berikutnya
1. Hubungkan Supabase Auth dan database.
2. Tambahkan API katalog yang penggunaan datanya diizinkan.
3. Bangun reader chapter untuk konten berlisensi.
4. Buat admin dashboard dengan role admin yang diverifikasi di server.
