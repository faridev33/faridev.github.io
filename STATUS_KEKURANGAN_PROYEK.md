# Audit Status Portofolio Proyek & Daftar Kekurangan

Dokumen ini memuat audit lengkap terhadap **15 Proyek Portofolio** pada:
`C:\Users\ghiff\OneDrive\Dokumen\potro\porto1\Portofolio Proyek`

Berdasarkan pemeriksaan menyeluruh pada direktori `C:\Users\ghiff\OneDrive\Dokumen\jquery` serta seluruh folder terkait di `Dokumen`, berikut adalah rincian proyek yang sudah selesai, proyek yang belum dikonversi, serta tautan/aset yang masih kurang.

---

## Ringkasan Eksekutif

| Kategori Status | Jumlah Proyek | Keterangan |
| :--- | :---: | :--- |
| **Selesai Dikonversi ke HTML/CSS** | **7 Proyek** | Berhasil dibuatkan versi standalone HTML/CSS/JS interaktif siap pakai tanpa server. |
| **Source Ada di Luar `jquery` (Belum Dikonversi)** | **2 Proyek** | Source code web ditemukan di folder `Laravel` dan `Data Science`. |
| **Model ML / Riset / Colab (Belum Dikonversi)** | **6 Proyek** | Berbasis Google Colab, paper ilmiah terpublikasi, atau script model Python/YOLO. |
| **Total Proyek Portofolio** | **15 Proyek** | 100% folder telah distrukturkan. |

---

## 1. Proyek yang Sudah Lengkap Dikonversi ke HTML & CSS (7 Proyek)

Semua proyek di bawah ini telah memiliki file `index.html`, `style.css`, `app.js`, serta gambar `preview.png` sehingga **dapat langsung dibuka di browser tanpa perlu menjalankan server / node_modules**:

### 1. Agentic Market Desk – Autonomous IDX Multi-Agent Desk
- **Folder Tujuan:** `Portofolio Proyek/Agentic Market Desk – Autonomous IDX Multi-Agent Desk/`
- **Sumber Asal:** `C:\Users\ghiff\OneDrive\Dokumen\jquery\Agent`
- **File:** `index.html`, `style.css`, `app.js`, `preview.png`, `arsitektur.svg`
- **Status:** **LENGKAP** (UI Top 5 Picks, Screener 30 emiten IDX, Deliberasi 8 Agen, Sentimen Berita, Portofolio).

### 2. OrthoScan AI – Sistem Deteksi Fraktur Citra Rontgen
- **Folder Tujuan:** `Portofolio Proyek/OrthoScan AI – Sistem Deteksi Fraktur Citra Rontgen/`
- **Sumber Asal:** `C:\Users\ghiff\OneDrive\Dokumen\jquery\Deteksi-Patah-tulang`
- **File:** `index.html`, `style.css`, `app.js`, `preview.png`
- **Status:** **LENGKAP** (UI Deteksi Fraktur 7 kelas anatomi, Drag & drop upload, Preset sampel rontgen, Scanning radar inferensi, Bounding box visual, Tab anotasi vs asli, Ringkasan temuan klinis).

### 3. Agent NotebookLM – 3D Multi-Agent Document Research
- **Folder Tujuan:** `Portofolio Proyek/Agent NotebookLM – 3D Multi-Agent Document Research/`
- **Sumber Asal:** `C:\Users\ghiff\OneDrive\Dokumen\jquery\NotebookLM`
- **File:** `index.html`, `style.css`, `app.js`, `preview.png`
- **Status:** **LENGKAP** (Visualisasi 3D Ruang Kerja Isometrik 4 Agen, Live Thought Stream SSE, Manajemen Dokumen & OCR, Alur Pipeline Riset, Pratinjau Markdown & Audit Fakta 98.5%, Metrik Token).

### 4. Multi-platform Learning Management System
- **Folder Tujuan:** `Portofolio Proyek/Multi-platform Learning Management System/`
- **Sumber Asal:** `C:\Users\ghiff\OneDrive\Dokumen\jquery\lms-fari-v1`
- **File:** `index.html`, `style.css`, `app.js`, `preview.png`
- **Status:** **LENGKAP** (Portal Superadmin, Statistik Total Mahasiswa/Guru/Kelas, Kalender Jadwal Akademik, Tabel Kelola Kelas & Pengajar, Keamanan RBAC 4 Tingkat).

### 5. QR Table Ordering & Kitchen Display System
- **Folder Tujuan:** `Portofolio Proyek/QR Table Ordering & Kitchen Display System/`
- **Sumber Asal:** `C:\Users\ghiff\OneDrive\Dokumen\jquery\cafe-fari-v1`
- **File:** `index.html`, `style.css`, `app.js`, `preview.png`
- **Status:** **LENGKAP** (Katalog Pemesanan Menu Meja QR, Keranjang Belanja Dinamis, Integrasi Layar Dapur KDS Antrean Tiket Masak/Ready, Modul Kasir POS).

### 6. AI Candidate Selection & Resume Screener
- **Folder Tujuan:** `Portofolio Proyek/AI Candidate Selection & Resume Screener/`
- **Sumber Asal:** `C:\Users\ghiff\OneDrive\Dokumen\ai engineer\ai-cv-screening`
- **File:** `index.html`, `style.css`, `app.js`, `preview.png`
- **Status:** **LENGKAP** (Dashboard Overview, Ingesti CV PyMuPDF4LLM & Markdown viewer, Kriteria & Bobot 1-10 dinamis, Matriks Evaluasi 3 Tabel komparatif, AI Recruiter Chatbot realtime grounded RAG, Token & Cost Tracker, Diagram Arsitektur).

### 7. Barbershop Live Queue & Booking Management
- **Folder Tujuan:** `Portofolio Proyek/Barbershop Live Queue & Booking Management/`
- **Sumber Asal:** `C:\Users\ghiff\OneDrive\Dokumen\jquery\sistem-barbershop`
- **File:** `index.html`, `style.css`, `app.js`, `preview.png`
- **Status:** **LENGKAP** (Self-service Booking Pelanggan, Live Queue Radar, Simulasi QRIS & Tiket Digital, Dashboard Kasir & Admin, Slider Komisi Kapster 30%-70% real-time, TV Display Digital Signage Kursi 1-3, Audio Chime panggilan antrean, Dark & Light Mode).

---

## 2. Proyek yang Ada Source Code-nya tapi Belum Dikonversi (2 Proyek)

Aplikasi berikut **tidak berada di folder `jquery`**, melainkan di direktori `Dokumen` lainnya, sehingga folder di `Portofolio Proyek` saat ini masih kosong:

| No | Nama Proyek | Lokasi Source Code Nyata di PC | Yang Kurang & Perlu Dibuat |
| :---: | :--- | :--- | :--- |
| **1** | **MediaCare – Clinic Management System** | `C:\Users\ghiff\OneDrive\Dokumen\Laravel\MediaCarePolyclinic` | Berbasis Laravel/PHP, belum ada mockup HTML/CSS standalone untuk rekam medis elektronik (EMR), antrean klinik, dan multi-role dokter/farmasi. |
| **2** | **B2B Customer Retention & Churn Analysis** | `C:\Users\ghiff\OneDrive\Dokumen\Data Science\Customer Retention & Churn Analysis` | Memiliki file `EDA.ipynb`, `hasil.md`, `Data Science.pdf`. Belum dibuatkan dashboard visualisasi HTML/CSS interaktif untuk segmen RFM dan matriks risiko churn. |

---

## 3. Proyek Riset / Computer Vision / Colab yang Masih Kosong (6 Proyek)

Proyek ini berbasis model Machine Learning / Deep Learning, publikasi paper jurnal, atau Google Colab, sehingga belum memiliki interface HTML/CSS standalone di folder portofolionya:

| No | Nama Proyek | Tipe Sumber Daya | Yang Kurang & Perlu Dibuat |
| :---: | :--- | :--- | :--- |
| **1** | **Deteksi Dini Down Syndrome Wajah (Hybrid CNN)** | Paper Ilmiah Publikasi (Jurnal RABIT DOI: `10.36341/rabit.v11i1.7196`) | Folder masih kosong. Perlu dibuatkan: <br>1. Demo visual interaktif HTML/CSS (perbandingan InceptionV3 vs EfficientNetB3 vs Hybrid CNN).<br>2. Salinan artikel PDF / abstract paper & tabel hasil akurasi 92.32%. |
| **2** | **Pediatric Pneumonia Multi-Class Classification** | Model CNN TensorFlow (Link Google Colab di `index.html`) | Folder masih kosong. Perlu dibuatkan UI simulator prediksi rontgen dada 3 kelas (Normal, Bakteri, Virus) berbasis HTML/CSS. |
| **3** | **Automatic License Plate Recognition (ALPR)** | Model YOLOv11 + Custom CNN OCR | Folder masih kosong. Perlu dibuatkan UI HTML/CSS pembacaan plat nomor CCTV kondisi malam/rendah cahaya. |
| **4** | **Toll Road Vehicle Classification System** | Model YOLOv11 Deteksi Golongan Tol | Folder masih kosong. Perlu dibuatkan UI portal gerbang tol otomatis penentu tarif kendaraan Golongan I–IV berbasis HTML/CSS. |
| **5** | **Coffee Bean Species Classification System** | Model MobileNetV2 (Link Google Colab di `index.html`) | Folder masih kosong. Perlu dibuatkan showcase klasifikasi 4 varietas biji kopi komersial dengan contour extraction berbasis HTML/CSS. |
| **6** | **Supermarket Sales & Customer Habits Prediction** | Skrip Machine Learning Random Forest | Folder masih kosong. Perlu dibuatkan dashboard analitik penjualan ritel, heatmap jam sibuk, dan prediksi profil pembeli berbasis HTML/CSS. |

---

## 4. Kekurangan pada Tautan & Integrasi Halaman Utama (`porto1/index.html`)

Pemeriksaan terhadap kode halaman utama portofolio (`C:\Users\ghiff\OneDrive\Dokumen\potro\porto1\index.html`) menemukan beberapa catatan perbaikan:

1. **Tombol "Live Demo" dan "Repository" Masih Mengarah ke `#` (Placeholder):**
   - Pada proyek `Agent NotebookLM`, tombol Demo masih `href="#"`.
   - Pada proyek `ALPR`, `Toll Road`, `MediaCare`, `QR Restaurant`, `Barbershop`, tombol Live Demo dan Repository masih berupa `href="#"` atau link profil umum GitHub `https://github.com/ghiffarihilmi` tanpa nama repo spesifik.

2. **Belum Terhubung ke Salinan HTML/CSS Lokal:**
   - Folder salinan lokal di `Portofolio Proyek/<Nama Proyek>/index.html` dapat langsung di-link dari tombol **"Live Demo"** di halaman `porto1/index.html`, misalnya:
     - `href="Portofolio Proyek/Agentic Market Desk – Autonomous IDX Multi-Agent Desk/index.html"`
     - `href="Portofolio Proyek/OrthoScan AI – Sistem Deteksi Fraktur Citra Rontgen/index.html"`
     - `href="Portofolio Proyek/Agent NotebookLM – 3D Multi-Agent Document Research/index.html"`
     - `href="Portofolio Proyek/Multi-platform Learning Management System/index.html"`
     - `href="Portofolio Proyek/QR Table Ordering & Kitchen Display System/index.html"`
   Dengan demikian, saat pengunjung mengklik kartu proyek di web portofolio lokal Anda, aplikasinya langsung terbuka tanpa error!

---

## 5. Rekomendasi Langkah Selanjutnya

Jika Anda ingin menyelesaikan seluruh sisa proyek:
1. **Batch 1 (Web Apps Ditemukan):** Konversi 4 web app yang sudah ada source-nya (`ai-cv-screening`, `sistem-barbershop`, `MediaCarePolyclinic`, `Customer Retention & Churn Analysis`) ke HTML/CSS mandiri.
2. **Batch 2 (ML & Riset Ditemukan):** Buatkan mockup visual interaktif HTML/CSS untuk 6 proyek AI/Vision/Data Science (Down Syndrome, Pneumonia, ALPR, Toll Road, Coffee Bean, Supermarket).
3. **Integrasi Link:** Perbarui `index.html` utama portofolio agar tombol **Live Demo** langsung menautkan ke file `index.html` di masing-masing folder proyek.
