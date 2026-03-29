# Deployment Guide: ZhaRaPorto 🚀

Panduan langkah demi langkah untuk merilis website Anda secara online menggunakan Vercel (Rekomendasi Utama).

## Persiapan Awal
1. Pastikan semua perubahan sudah di-commit ke **GitHub**.
2. Buat akun di [Vercel.com](https://vercel.com) (Log in via GitHub).

## Metode 1: Via Vercel Dashboard (Paling Mudah)
1. Klik tombol **"Add New"** -> **"Project"** di dashboard Vercel.
2. Hubungkan akun GitHub Anda jika belum.
3. Cari repository **`ZhaRaPorto`** dan klik **"Import"**.
4. Di bagian **Build & Output Settings**, Vercel akan otomatis mengenali Next.js. Anda tidak perlu mengubah apapun.
5. Klik **"Deploy"**.
6. Tunggu ~1 menit. Selesai!

## Metode 2: Via Vercel CLI (Professional)
1. Instal Vercel CLI:
   ```bash
   npm install -g vercel
   ```
2. Login ke Vercel:
   ```bash
   vercel login
   ```
3. Deploy proyek:
   ```bash
   vercel
   ```
4. Verifikasi dan rilis ke produksi:
   ```bash
   vercel --prod
   ```

## Catatan Penting
- **Optimization**: Project ini sudah menggunakan `next/image` dan data terkompresi. Performa pada Vercel akan sangat optimal secara otomatis.
- **Custom Domain**: Anda bisa menambahkan domain kustom (misal: `zirara.page`) di tab **Settings -> Domains** pada dashboard Vercel.

---
*Happy Deploying!* ❄️💜⚡
