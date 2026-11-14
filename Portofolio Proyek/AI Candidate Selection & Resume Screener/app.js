/**
 * AI Candidate Selection & Resume Screener
 * Interactive Application & Simulation Logic
 */

// ===================================================================
// 1. DATA STORES: RECRUITMENT SESSIONS & CANDIDATES
// ===================================================================
const SESSION_DATA = {
  arch: {
    id: "SESI-ARCH-2026",
    title: "Senior Architect & Interior Designer",
    desc: "Mencari profesional arsitektur berpengalaman >3 tahun yang menguasai Autodesk Revit (BIM), koordinasi teknis MEP/Struktur, perancangan skematik hingga DED, serta supervisi proyek arsitektur komersial & hospitality.",
    jdText: `
      <h4>1. Gambaran Posisi</h4>
      <p>Sebagai Senior Architect & Interior Designer, Anda akan memimpin tim perancangan konsep, menyusun gambar kerja DED (Detail Engineering Design), serta berkoordinasi langsung dengan kontraktor utama, konsultan struktur/MEP, dan klien komersial ternama.</p>
      
      <h4>2. Kualifikasi Utama (Requirements)</h4>
      <ul>
        <li>Pendidikan minimal S1 Arsitektur / Desain Interior dari universitas terakreditasi.</li>
        <li>Pengalaman kerja minimal 3-5 tahun di biro arsitektur / konsultan desain terkemuka.</li>
        <li>Menguasai perangkat lunak BIM (Autodesk Revit / ArchiCAD) dan AutoCAD 2D/3D secara mahir.</li>
        <li>Keahlian visualisasi rendering 3D (Enscape, V-Ray, Lumion, atau Corona Renderer).</li>
        <li>Memiliki portofolio terbukti pada proyek mixed-use, high-rise, atau hospitality mewah.</li>
        <li>Memiliki sertifikasi keahlian STRA / IAI merupakan nilai tambah utama.</li>
      </ul>

      <h4>3. Tanggung Jawab Utama (Responsibilities)</h4>
      <ul>
        <li>Memimpin proses pengembangan konsep desain dari skematik hingga detail konstruksi.</li>
        <li>Melakukan koordinasi teknis lintas disiplin dengan engineer struktur dan MEP.</li>
        <li>Menghadiri rapat koordinasi mingguan serta mempresentasikan proposal desain ke Klien.</li>
        <li>Supervisi berkala di lapangan memastikan pengerjaan kontraktor sesuai standar gambar.</li>
      </ul>
    `,
    criteria: [
      { id: 1, type: "kualifikasi", title: "Minimal S1 Arsitektur / Desain Interior Terakreditasi", weight: 10 },
      { id: 2, type: "kualifikasi", title: "Pengalaman kerja minimal 3-5 tahun di konsultan arsitektur", weight: 9 },
      { id: 3, type: "kualifikasi", title: "Mahir BIM Software (Autodesk Revit / ArchiCAD) & AutoCAD", weight: 9 },
      { id: 4, type: "kualifikasi", title: "Keahlian 3D Rendering (Enscape, V-Ray, Lumion / Corona)", weight: 8 },
      { id: 5, type: "kualifikasi", title: "Pengalaman pembuatan Detail Engineering Design (DED) & RAB", weight: 8 },
      { id: 6, type: "kualifikasi", title: "Memiliki sertifikasi profesi arsitek (STRA / SKA IAI)", weight: 7 },
      { id: 7, type: "kualifikasi", title: "Portofolio proyek komersial / mixed-use / hospitality terbukti", weight: 7 },
      { id: 8, type: "tanggung_jawab", title: "Memimpin proses perancangan konsep skematik hingga detail", weight: 9 },
      { id: 9, type: "tanggung_jawab", title: "Koordinasi lintas disiplin dengan engineer MEP & Struktur", weight: 8 },
      { id: 10, type: "tanggung_jawab", title: "Menghadiri rapat teknis & presentasi langsung kepada Klien", weight: 8 },
      { id: 11, type: "tanggung_jawab", title: "Supervisi berkala di lapangan memastikan presisi konstruksi", weight: 7 },
      { id: 12, type: "tanggung_jawab", title: "Pengelolaan timeline pengerjaan dokumen tender & spesifikasi", weight: 7 }
    ],
    candidates: [
      {
        id: "cand-1",
        nama: "Bayu Pratama, S.Ars",
        initial: "BP",
        email: "bayu.pratama.arch@gmail.com",
        telepon: "+62 812-3456-7890",
        domisili: "Jakarta Selatan",
        filename: "CV_Bayu_Pratama_Senior_Architect.pdf",
        pendidikan: [
          { jenjang: "S1", institusi: "Institut Teknologi Bandung (ITB)", jurusan: "Arsitektur", tahun: "2015 - 2019" }
        ],
        pengalaman: [
          { posisi: "Senior Project Architect", perusahaan: "PT Urbane Indonesia", durasi: "3.5 Tahun (2021 - Sekarang)", deskripsi: "Memimpin perancangan mixed-use tower 28 lantai, koordinasi MEP/Struktur dengan Revit BIM Level 2." },
          { posisi: "Architectural Designer", perusahaan: "Andra Matin Studio", durasi: "2 Tahun (2019 - 2021)", deskripsi: "Mengembangkan desain skematik, visualisasi Enscape 3D, serta penyusunan gambar kerja DED." }
        ],
        keahlianHard: ["Autodesk Revit (BIM)", "AutoCAD", "Rhino 3D", "Enscape 3D", "SketchUp & V-Ray", "DED & RAB"],
        keahlianSoft: ["Design Leadership", "Client Presentation", "Cross-disciplinary Coordination", "IAI Certified"],
        fitScore: 94,
        statusSeleksi: "LOLOS (Rekomendasi Utama)",
        catatanUtama: "Lulusan S1 Arsitektur ITB dengan 5.5 tahun pengalaman terbukti di proyek high-rise dan residensial mewah. Menguasai BIM Revit tingkat lanjut & tersertifikasi STRA IAI.",
        markdownCV: `# CURRICULUM VITAE - BAYU PRATAMA, S.Ars\n\n**Kontak:** bayu.pratama.arch@gmail.com | +62 812-3456-7890\n**Domisili:** Kebayoran Baru, Jakarta Selatan\n**Sertifikasi:** STRA Madya (Ikatan Arsitek Indonesia - IAI)\n\n## RINGKASAN PROFESIONAL\nSenior Architect dengan pengalaman lebih dari 5 tahun dalam memimpin proyek komersial dan hospitality bertaraf internasional. Spesialisasi pada pemodelan BIM (Autodesk Revit), koordinasi struktur-MEP terintegrasi, dan penyusunan dokumen tender DED.\n\n## PENGALAMAN KERJA\n- **PT Urbane Indonesia** (Senior Project Architect | 2021 - Sekarang)\n  * Memimpin 6 arsitek junior dalam proyek Mixed-Use Sudirman Tower (28 Lantai).\n  * Menyelenggarakan BIM Clash Detection dengan konsultan MEP & Struktur.\n- **Andra Matin Studio** (Architect Designer | 2019 - 2021)\n  * Menangani proyek villa resort di Bali dan galeri seni kontemporer di Bandung.\n\n## PENDIDIKAN\n- S1 Arsitektur - Institut Teknologi Bandung (IPK 3.82 / 4.00)`
      },
      {
        id: "cand-2",
        nama: "Mohamad Farhan, S.Ars",
        initial: "MF",
        email: "mfarhan.design@outlook.com",
        telepon: "+62 857-1234-5678",
        domisili: "Tangerang Selatan",
        filename: "CV_Mohamad_Farhan_Architect.pdf",
        pendidikan: [
          { jenjang: "S1", institusi: "Universitas Indonesia (UI)", jurusan: "Arsitektur", tahun: "2017 - 2021" }
        ],
        pengalaman: [
          { posisi: "Architect Designer", perusahaan: "Studio Arsitektropis", durasi: "3 Tahun (2021 - Sekarang)", deskripsi: "Menangani proyek villa privat dan hospitality, gambar kerja komprehensif, serta visualisasi 3D rendering Lumion." }
        ],
        keahlianHard: ["AutoCAD", "SketchUp & Enscape", "Lumion 12", "Adobe Photoshop & InDesign", "Site Supervision"],
        keahlianSoft: ["Concept Design", "Problem Solving", "Team Collaboration", "Client Relationship"],
        fitScore: 82,
        statusSeleksi: "LOLOS (Rekomendasi Kedua)",
        catatanUtama: "Portofolio estetika sangat kuat di bidang hospitality & tropical architecture. Pengalaman 3 tahun solid, namun belum menguasai BIM Revit penuh (masih alur kerja SketchUp/AutoCAD).",
        markdownCV: `# CURRICULUM VITAE - MOHAMAD FARHAN, S.Ars\n\n**Kontak:** mfarhan.design@outlook.com | +62 857-1234-5678\n**Domisili:** BSD City, Tangerang Selatan\n\n## RINGKASAN PROFESIONAL\nArchitect Designer berorientasi estetika tinggi dengan fokus desain tropis modern dan hospitality. Berpengalaman 3 tahun dalam merancang skematik hingga supervisi pelaksanaan lapangan.\n\n## PENGALAMAN KERJA\n- **Studio Arsitektropis** (Architect Designer | 2021 - Sekarang)\n  * Mendesain 8 proyek villa mewah di Bali dan Lombok.\n  * Menghasilkan rendering photorealistic untuk materi promosi klien.\n\n## PENDIDIKAN\n- S1 Arsitektur - Universitas Indonesia (IPK 3.71 / 4.00)`
      },
      {
        id: "cand-3",
        nama: "Siti Nurhaliza, S.Ds",
        initial: "SN",
        email: "siti.nurhaliza.id@gmail.com",
        telepon: "+62 813-9876-5432",
        domisili: "Bekasi",
        filename: "CV_Siti_Nurhaliza_Interior.pdf",
        pendidikan: [
          { jenjang: "S1", institusi: "Universitas Trisakti", jurusan: "Desain Interior", tahun: "2018 - 2022" }
        ],
        pengalaman: [
          { posisi: "Interior Designer", perusahaan: "PT Metaphor Interior Architecture", durasi: "2.2 Tahun (2022 - Sekarang)", deskripsi: "Perancangan interior F&B cafe, retail store, pemilihan material FF&E, dan estimasi anggaran RAB interior." }
        ],
        keahlianHard: ["3ds Max & Corona Renderer", "AutoCAD 2D", "SketchUp", "Material Sourcing & FF&E", "Color Theory"],
        keahlianSoft: ["Attention to Detail", "Budget Management", "Vendor Negotiation"],
        fitScore: 74,
        statusSeleksi: "LOLOS (Kandidat Cadangan)",
        catatanUtama: "Sangat unggul di perancangan interior komersial & pemilihan material FF&E, namun minim pengalaman dalam DED struktur arsitektur skala besar dan koordinasi BIM.",
        markdownCV: `# CURRICULUM VITAE - SITI NURHALIZA, S.Ds\n\n**Kontak:** siti.nurhaliza.id@gmail.com | +62 813-9876-5432\n**Domisili:** Bekasi Barat\n\n## RINGKASAN PROFESIONAL\nInterior Designer kreatif dengan keahlian mendalam pada penciptaan ruang ritel, F&B restaurant, dan korporat komersial. Mahir dalam pemilihan material inovatif dan visualisasi 3ds Max Corona.\n\n## PENGALAMAN KERJA\n- **PT Metaphor Interior Architecture** (Interior Designer | 2022 - Sekarang)\n  * Merancang interior 14 outlet gerai cafe dan butik busana ternama.\n  * Melakukan sourcing material fabrik, finishing kayu, dan furnitur kustom.\n\n## PENDIDIKAN\n- S1 Desain Interior - Universitas Trisakti (IPK 3.65 / 4.00)`
      },
      {
        id: "cand-4",
        nama: "Rian Adiputra, A.Md",
        initial: "RA",
        email: "rian.adi.drafter@yahoo.com",
        telepon: "+62 821-4567-8901",
        domisili: "Depok",
        filename: "CV_Rian_Adiputra_Drafter.pdf",
        pendidikan: [
          { jenjang: "D3", institusi: "Politeknik Negeri Jakarta (PNJ)", jurusan: "Teknik Sipil & Bangunan Gedung", tahun: "2019 - 2022" }
        ],
        pengalaman: [
          { posisi: "CAD Drafter", perusahaan: "CV Cipta Konstruksi", durasi: "1.5 Tahun (2022 - Sekarang)", deskripsi: "Pembuatan gambar as-built drawing arsitektur dan shop drawing MEP sesuai instruksi engineer." }
        ],
        keahlianHard: ["AutoCAD 2D Drafting", "SketchUp Basic", "Shop Drawing", "Survey Lapangan"],
        keahlianSoft: ["Ketelitian Tinggi", "Disiplin Waktu", "Pekerja Keras"],
        fitScore: 48,
        statusSeleksi: "TIDAK LOLOS",
        catatanUtama: "Hanya memiliki kualifikasi drafter teknisi D3, belum memenuhi syarat minimal S1 Arsitektur dan tidak memiliki portofolio lead concept design.",
        markdownCV: `# CURRICULUM VITAE - RIAN ADIPUTRA, A.Md\n\n**Kontak:** rian.adi.drafter@yahoo.com | +62 821-4567-8901\n**Domisili:** Depok\n\n## RINGKASAN PROFESIONAL\nCAD Drafter berpengalaman dalam memproduksi gambar kerja 2D yang rapi, cepat, dan presisi tinggi sesuai standar kontraktor pelaksana.\n\n## PENGALAMAN KERJA\n- **CV Cipta Konstruksi** (CAD Drafter | 2022 - Sekarang)\n  * Membuat shop drawing arsitektur rumah tinggal dan ruko 3 lantai.\n\n## PENDIDIKAN\n- D3 Teknik Konstruksi Bangunan Gedung - Politeknik Negeri Jakarta`
      },
      {
        id: "cand-5",
        nama: "Ahmad Zulkarnaen, S.T",
        initial: "AZ",
        email: "zulkarnaen.ahmad@gmail.com",
        telepon: "+62 878-1122-3344",
        domisili: "Bandung",
        filename: "CV_Ahmad_Zulkarnaen_Civil.pdf",
        pendidikan: [
          { jenjang: "S1", institusi: "Universitas Katolik Parahyangan (Unpar)", jurusan: "Teknik Sipil", tahun: "2016 - 2020" }
        ],
        pengalaman: [
          { posisi: "Site Engineer & QS", perusahaan: "PT Total Bangun Persada", durasi: "3 Tahun (2020 - 2023)", deskripsi: "Pengawasan pengecoran struktur beton, perhitungan BoQ volume, dan koordinasi subkontraktor." }
        ],
        keahlianHard: ["ETABS", "SAP2000", "AutoCAD Structural", "Microsoft Project", "BoQ Calculation"],
        keahlianSoft: ["Site Safety Management", "Leadership", "Analisis Struktural"],
        fitScore: 38,
        statusSeleksi: "TIDAK LOLOS",
        catatanUtama: "Latar belakang murni Teknik Sipil & Site Engineering, tidak memiliki keahlian perancangan desain arsitektur / estetika ruang yang disyaratkan.",
        markdownCV: `# CURRICULUM VITAE - AHMAD ZULKARNAEN, S.T\n\n**Kontak:** zulkarnaen.ahmad@gmail.com | +62 878-1122-3344\n**Domisili:** Bandung\n\n## RINGKASAN PROFESIONAL\nCivil Engineer dengan fokus spesialisasi pada analisis kekuatan struktur beton bertulang, manajemen proyek konstruksi, dan kendali mutu di lapangan.\n\n## PENGALAMAN KERJA\n- **PT Total Bangun Persada** (Site Engineer | 2020 - 2023)\n  * Mengawasi pengerjaan struktur podium dan basement gedung komersial.\n\n## PENDIDIKAN\n- S1 Teknik Sipil - Universitas Katolik Parahyangan`
      }
    ],
    // Matrix Evaluation Details
    matrixReq: [
      {
        no: 1,
        title: "Minimal S1 Arsitektur / Desain Interior",
        evals: [
          { symb: "✔️", note: "S1 Arsitektur ITB Lulus" },
          { symb: "✔️", note: "S1 Arsitektur UI Lulus" },
          { symb: "✔️", note: "S1 Desain Interior Trisakti" },
          { symb: "❌", note: "Hanya D3 Teknik Bangunan" },
          { symb: "❌", note: "Lulusan S1 Teknik Sipil" }
        ]
      },
      {
        no: 2,
        title: "Pengalaman kerja minimal 3-5 tahun",
        evals: [
          { symb: "✔️", note: "Total 5.5 Tahun (Senior)" },
          { symb: "✔️", note: "Total 3 Tahun Konsultan" },
          { symb: "⚠️", note: "Baru 2.2 Tahun Pengalaman" },
          { symb: "⚠️", note: "1.5 Tahun (Drafter)" },
          { symb: "✔️", note: "3 Tahun (Namun Sipil)" }
        ]
      },
      {
        no: 3,
        title: "Mahir BIM Software (Revit / ArchiCAD)",
        evals: [
          { symb: "✔️", note: "Revit BIM Level 2 Mahir" },
          { symb: "⚠️", note: "Masih Workflow SketchUp" },
          { symb: "❌", note: "Tidak Menguasai BIM" },
          { symb: "❌", note: "Hanya AutoCAD 2D" },
          { symb: "❌", note: "Hanya SAP2000 / ETABS" }
        ]
      },
      {
        no: 4,
        title: "Keahlian 3D Rendering (Enscape/Lumion/V-Ray)",
        evals: [
          { symb: "✔️", note: "Enscape, V-Ray, Rhino" },
          { symb: "✔️", note: "Lumion 12 & Enscape Unggul" },
          { symb: "✔️", note: "3ds Max & Corona Mahir" },
          { symb: "⚠️", note: "SketchUp Dasar Saja" },
          { symb: "❌", note: "Tidak Ada Portofolio 3D" }
        ]
      },
      {
        no: 5,
        title: "Pengalaman DED & Detail Engineering",
        evals: [
          { symb: "✔️", note: "Sangat Berpengalaman DED" },
          { symb: "✔️", note: "Mampu Menyusun DED" },
          { symb: "⚠️", note: "Khusus Interior Fit-out" },
          { symb: "✔️", note: "Shop Drawing Presisi" },
          { symb: "⚠️", note: "Khusus Gambar Struktur" }
        ]
      },
      {
        no: 6,
        title: "Sertifikasi Profesi (STRA / IAI)",
        evals: [
          { symb: "✔️", note: "Tersertifikasi STRA Madya IAI" },
          { symb: "⚠️", note: "Proses Pengurusan STRA" },
          { symb: "❌", note: "Belum Bersertifikasi" },
          { symb: "❌", note: "Tidak Memiliki STRA" },
          { symb: "⚠️", note: "Sertifikasi Ahli Struktur" }
        ]
      },
      {
        no: 7,
        title: "Portofolio Komersial / Mixed-Use",
        evals: [
          { symb: "✔️", note: "High-Rise Commercial 28 Fl" },
          { symb: "⚠️", note: "Dominan Hospitality Villa" },
          { symb: "⚠️", note: "F&B Retail Interior Saja" },
          { symb: "❌", note: "Hanya Ruko Sederhana" },
          { symb: "❌", note: "Tidak Ada Portofolio Desain" }
        ]
      }
    ],
    matrixResp: [
      {
        no: 1,
        title: "Memimpin perancangan skematik hingga detail",
        evals: [
          { symb: "✔️", note: "Terbukti Lead Architect" },
          { symb: "✔️", note: "Mampu Mengembangkan Konsep" },
          { symb: "⚠️", note: "Terbatas Pada Konsep Interior" },
          { symb: "❌", note: "Hanya Mengikuti Arahan Drafter" },
          { symb: "❌", note: "Bukan Bidang Keahlian Desain" }
        ]
      },
      {
        no: 2,
        title: "Koordinasi lintas disiplin dengan MEP & Struktur",
        evals: [
          { symb: "✔️", note: "Rutin BIM Clash Detection" },
          { symb: "⚠️", note: "Koordinasi Standar Lapangan" },
          { symb: "⚠️", note: "Koordinasi Elektrikal Interior" },
          { symb: "❌", note: "Tidak Memiliki Wewenang" },
          { symb: "✔️", note: "Sangat Paham Struktur Sipil" }
        ]
      },
      {
        no: 3,
        title: "Rapat teknis & presentasi langsung ke Klien",
        evals: [
          { symb: "✔️", note: "Komunikasi Eksekutif Sangat Baik" },
          { symb: "✔️", note: "Presentasi Desain Persuasif" },
          { symb: "✔️", note: "Presentasi Moodboard Interior" },
          { symb: "❌", note: "Tidak Terbiasa Presentasi Klien" },
          { symb: "⚠️", note: "Presentasi Progres Teknis" }
        ]
      },
      {
        no: 4,
        title: "Supervisi berkala memastikan presisi gambar",
        evals: [
          { symb: "✔️", note: "Inspeksi Berkala & Problem Solving" },
          { symb: "✔️", note: "Supervisi Lapangan Aktif" },
          { symb: "⚠️", note: "Supervisi Mockup Interior" },
          { symb: "⚠️", note: "Opname Lapangan Drafter" },
          { symb: "✔️", note: "Pengawasan Mutu Pengecoran" }
        ]
      },
      {
        no: 5,
        title: "Pengelolaan timeline tender & spesifikasi material",
        evals: [
          { symb: "✔️", note: "Manajemen Dokumen Sangat Rapi" },
          { symb: "⚠️", note: "Pernah Menyusun Spesifikasi" },
          { symb: "✔️", note: "Paham Sourcing & Budget FF&E" },
          { symb: "❌", note: "Belum Pernah Menyusun RKS" },
          { symb: "✔️", note: "Mahir BoQ & Schedule MS Project" }
        ]
      }
    ]
  },

  ai: {
    id: "SESI-AI-2026",
    title: "Lead Full-Stack AI Engineer",
    desc: "Mencari Engineer senior yang mahir mengintegrasikan model LLM (OpenAI, Qwen, DeepSeek), arsitektur RAG, framework Django REST / FastAPI, serta React 19 Frontend dengan pengalaman produksi teruji.",
    jdText: `
      <h4>1. Gambaran Posisi</h4>
      <p>Sebagai Lead Full-Stack AI Engineer, Anda akan memimpin riset, pengembangan, dan penerapan sistem berbasis Large Language Models (LLMs) ke lingkungan produksi enterprise.</p>
      <h4>2. Kualifikasi Utama (Requirements)</h4>
      <ul>
        <li>Pendidikan S1 Ilmu Komputer / Teknik Informatika.</li>
        <li>Pengalaman kerja minimal 4+ tahun dalam pengembangan Full-Stack (Python & JavaScript).</li>
        <li>Pengalaman mendalam dengan integrasi LLM, Prompt Engineering, RAG (Retrieval-Augmented Generation), dan Vector DB.</li>
        <li>Mahir Django REST Framework, FastAPI, dan React/Next.js.</li>
      </ul>
    `,
    criteria: [
      { id: 1, type: "kualifikasi", title: "Minimal S1 Ilmu Komputer / Informatika / Teknik Terkait", weight: 10 },
      { id: 2, type: "kualifikasi", title: "Pengalaman 4+ tahun membangun aplikasi Full-Stack produksi", weight: 9 },
      { id: 3, type: "kualifikasi", title: "Pengalaman implementasi LLM, Prompt Engineering & RAG", weight: 9 },
      { id: 4, type: "kualifikasi", title: "Mahir Python (Django / FastAPI) & Modern React 19", weight: 8 },
      { id: 5, type: "kualifikasi", title: "Paham containerization (Docker) & cloud deployment (AWS/GCP)", weight: 8 },
      { id: 6, type: "tanggung_jawab", title: "Merancang arsitektur sistem AI end-to-end dengan latensi rendah", weight: 9 },
      { id: 7, type: "tanggung_jawab", title: "Memimpin code review & mentoring engineer junior", weight: 8 },
      { id: 8, type: "tanggung_jawab", title: "Optimasi efisiensi biaya token & caching inferensi model", weight: 8 }
    ],
    candidates: [
      {
        id: "ai-1",
        nama: "Kevin Sanjaya, S.Kom",
        initial: "KS",
        email: "kevin.sanjaya.ai@gmail.com",
        telepon: "+62 811-9876-5432",
        domisili: "Jakarta Barat",
        filename: "CV_Kevin_Sanjaya_Lead_AI.pdf",
        pendidikan: [
          { jenjang: "S1", institusi: "Universitas Indonesia", jurusan: "Ilmu Komputer", tahun: "2016 - 2020" }
        ],
        pengalaman: [
          { posisi: "Senior AI Engineer", perusahaan: "Fintech Unicorn", durasi: "4 Tahun (2020 - Sekarang)", deskripsi: "Membangun sistem evaluasi kredit berbasis LLM multi-agent, latency <800ms, memproses 500k queries/hari." }
        ],
        keahlianHard: ["Python", "PyTorch", "Django REST", "FastAPI", "React 19", "Qdrant Vector DB", "Docker", "AWS"],
        keahlianSoft: ["System Architecture", "Tech Leadership", "Problem Solving"],
        fitScore: 96,
        statusSeleksi: "LOLOS (Rekomendasi Utama)",
        catatanUtama: "Pengalaman produksi 4 tahun skala enterprise di Unicorn. Menguasai arsitektur Agentic AI, RAG, dan full-stack Python/React.",
        markdownCV: `# CV - KEVIN SANJAYA, S.Kom\n\nFull-Stack AI Engineer dengan pengalaman produksi 4+ tahun dalam orkestrasi model LLM, Vector Database, dan pipeline asynchronous high-throughput.`
      },
      {
        id: "ai-2",
        nama: "Nadia Safitri, S.T",
        initial: "NS",
        email: "nadia.safitri.tech@outlook.com",
        telepon: "+62 856-7788-9900",
        domisili: "Bandung",
        filename: "CV_Nadia_Safitri_Fullstack.pdf",
        pendidikan: [
          { jenjang: "S1", institusi: "Institut Teknologi Bandung", jurusan: "Teknik Elektro", tahun: "2017 - 2021" }
        ],
        pengalaman: [
          { posisi: "Full-Stack Developer", perusahaan: "Software House", durasi: "3 Tahun (2021 - Sekarang)", deskripsi: "Membangun aplikasi web SaaS dengan Django & React, integrasi OpenAI API." }
        ],
        keahlianHard: ["Python", "Django", "React", "PostgreSQL", "OpenAI API", "Tailwind CSS"],
        keahlianSoft: ["Fast Learner", "Communication", "Agile Methodology"],
        fitScore: 86,
        statusSeleksi: "LOLOS (Rekomendasi Kedua)",
        catatanUtama: "Solid pada Full-Stack Django & React. Menguasai integrasi OpenAI API, namun pemahaman RAG custom & vector embedding masih perlu pendalaman.",
        markdownCV: `# CV - NADIA SAFITRI, S.T\n\nFull-Stack Developer dengan portofolio web modern Django & React.`
      },
      {
        id: "ai-3",
        nama: "Dimas Wicaksono, S.Inf",
        initial: "DW",
        email: "dimas.wicaksono@gmail.com",
        telepon: "+62 819-0011-2233",
        domisili: "Surabaya",
        filename: "CV_Dimas_Wicaksono_Data.pdf",
        pendidikan: [
          { jenjang: "S1", institusi: "ITS Surabaya", jurusan: "Teknik Informatika", tahun: "2018 - 2022" }
        ],
        pengalaman: [
          { posisi: "Data Scientist", perusahaan: "E-Commerce", durasi: "2 Tahun (2022 - Sekarang)", deskripsi: "Fokus pada fine-tuning model klasifikasi teks dan dashboard analitik." }
        ],
        keahlianHard: ["Python", "Scikit-Learn", "HuggingFace", "SQL", "Flask Basic"],
        keahlianSoft: ["Data Analysis", "Critical Thinking"],
        fitScore: 72,
        statusSeleksi: "LOLOS (Kandidat Cadangan)",
        catatanUtama: "Kemampuan NLP & modeling kuat, namun minim pengalaman pembangunan frontend modern React dan arsitektur web berskala besar.",
        markdownCV: `# CV - DIMAS WICAKSONO, S.Inf\n\nData Scientist dengan spesialisasi pada Natural Language Processing.`
      },
      {
        id: "ai-4",
        nama: "Budi Santoso",
        initial: "BS",
        email: "budi.santoso.web@yahoo.com",
        telepon: "+62 877-3344-5566",
        domisili: "Yogyakarta",
        filename: "CV_Budi_Santoso_Junior.pdf",
        pendidikan: [
          { jenjang: "SMK", institusi: "SMK Rekayasa Perangkat Lunak", jurusan: "RPL", tahun: "2020 - 2023" }
        ],
        pengalaman: [
          { posisi: "Junior Web Developer", perusahaan: "Freelance", durasi: "1 Tahun", deskripsi: "Membuat website profil UMKM menggunakan WordPress dan PHP native." }
        ],
        keahlianHard: ["PHP Native", "HTML/CSS", "WordPress", "MySQL"],
        keahlianSoft: ["Motivasi Tinggi", "Kerja Keras"],
        fitScore: 42,
        statusSeleksi: "TIDAK LOLOS",
        catatanUtama: "Kualifikasi masih level junior web PHP, belum memiliki kecakapan AI/LLM, Python, maupun React yang dibutuhkan posisi Lead.",
        markdownCV: `# CV - BUDI SANTOSO\n\nJunior Web Developer berpengalaman membuat website company profile.`
      }
    ],
    matrixReq: [
      {
        no: 1,
        title: "Minimal S1 Ilmu Komputer / Informatika",
        evals: [
          { symb: "✔️", note: "S1 Fasilkom UI Lulus" },
          { symb: "✔️", note: "S1 STEI ITB Lulus" },
          { symb: "✔️", note: "S1 Informatika ITS Lulus" },
          { symb: "❌", note: "Lulusan SMK RPL" }
        ]
      },
      {
        no: 2,
        title: "Pengalaman 4+ tahun Full-Stack Produksi",
        evals: [
          { symb: "✔️", note: "4 Tahun Skala Unicorn" },
          { symb: "⚠️", note: "3 Tahun Software House" },
          { symb: "⚠️", note: "2 Tahun (Data Science)" },
          { symb: "❌", note: "Hanya 1 Tahun Freelance" }
        ]
      },
      {
        no: 3,
        title: "Implementasi LLM, Prompt & RAG",
        evals: [
          { symb: "✔️", note: "Multi-agent RAG Production" },
          { symb: "⚠️", note: "API Wrapper Standard" },
          { symb: "✔️", note: "Paham Fine-tuning NLP" },
          { symb: "❌", note: "Belum Paham AI / LLM" }
        ]
      },
      {
        no: 4,
        title: "Mahir Python (Django/FastAPI) & React 19",
        evals: [
          { symb: "✔️", note: "Keduanya Sangat Mahir" },
          { symb: "✔️", note: "Mahir Django & React" },
          { symb: "⚠️", note: "Python Kuat, React Minim" },
          { symb: "❌", note: "Hanya PHP Native & WP" }
        ]
      },
      {
        no: 5,
        title: "Containerization Docker & Cloud",
        evals: [
          { symb: "✔️", note: "Docker, K8s, AWS EKS" },
          { symb: "⚠️", note: "Docker Dasar & VPS" },
          { symb: "⚠️", note: "Docker Dasar" },
          { symb: "❌", note: "Hanya cPanel Hosting" }
        ]
      }
    ],
    matrixResp: [
      {
        no: 1,
        title: "Merancang arsitektur sistem AI low-latency",
        evals: [
          { symb: "✔️", note: "Latency <800ms 500k query" },
          { symb: "⚠️", note: "Arsitektur Standar SaaS" },
          { symb: "⚠️", note: "Fokus Model Pipeline" },
          { symb: "❌", note: "Tidak Memiliki Pengalaman" }
        ]
      },
      {
        no: 2,
        title: "Code review & mentoring engineer junior",
        evals: [
          { symb: "✔️", note: "Memimpin 8 Engineers" },
          { symb: "⚠️", note: "Pernah Mentoring 1 Anak Magang" },
          { symb: "❌", note: "Individual Contributor" },
          { symb: "❌", note: "Level Junior" }
        ]
      },
      {
        no: 3,
        title: "Optimasi biaya token & caching inferensi",
        evals: [
          { symb: "✔️", note: "Hemat 40% Token dengan Semantic Cache" },
          { symb: "⚠️", note: "Hanya Token Truncation" },
          { symb: "⚠️", note: "Paham Konsep Caching" },
          { symb: "❌", note: "Tidak Tahu Manajemen Token" }
        ]
      }
    ]
  }
};

// ===================================================================
// 2. MAIN APP CONTROLLER
// ===================================================================
class AICandidateScreeningApp {
  constructor() {
    this.currentSessionKey = "arch";
    this.activeTab = "dashboard";
    this.selectedModel = "qwen/qwen3.8-max";
    this.temperature = 0.10;
    
    // Token tracker state
    this.tokenStats = {
      total: 38420,
      prompt: 31240,
      completion: 7180,
      costUSD: 0.0076
    };

    // Chat history per session
    this.chatHistories = {
      arch: [
        {
          sender: "ai",
          text: "Halo! Saya adalah **AI Recruiter Specialist** yang didukung model **Qwen 3.8 Max**. Saya telah menganalisis seluruh data CV pelamar untuk posisi **Senior Architect & Interior Designer** serta menghasilkan Matriks 3 Tabel Komparatif.\n\nSilakan tanyakan perbandingan keahlian teknis (BIM Revit), portofolio proyek, sertifikasi IAI, atau draf pertanyaan wawancara."
        }
      ],
      ai: [
        {
          sender: "ai",
          text: "Halo! Saya telah mengevaluasi berkas pelamar untuk posisi **Lead Full-Stack AI Engineer**. Anda dapat menanyakan kemampuan arsitektur RAG, perbandingan Kevin Sanjaya vs kandidat lain, atau efisiensi biaya inferensi."
        }
      ]
    };

    this.init();
  }

  init() {
    this.initTheme();
    this.setupEventListeners();
    this.renderCurrentSession();
    this.renderTokenStats();
    this.renderChatMessages();
    this.renderChatContextList();
  }

  // -----------------------------------------------------------------
  // THEME MANAGEMENT (DARK / LIGHT MODE)
  // -----------------------------------------------------------------
  initTheme() {
    const savedTheme = localStorage.getItem("portfolio-theme") || "dark";
    this.applyTheme(savedTheme, false);
  }

  applyTheme(theme, showToast = false) {
    const isDark = theme === "dark";
    document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
    localStorage.setItem("portfolio-theme", isDark ? "dark" : "light");

    const themeIcon = document.getElementById("themeIcon");
    const themeLabel = document.getElementById("themeLabel");
    const themeBtn = document.getElementById("themeToggleBtn");

    if (themeIcon) {
      themeIcon.className = isDark ? "fa-solid fa-moon" : "fa-solid fa-sun";
    }
    if (themeLabel) {
      themeLabel.textContent = isDark ? "Gelap" : "Terang";
    }
    if (themeBtn) {
      themeBtn.setAttribute("aria-pressed", String(!isDark));
      themeBtn.title = isDark ? "Beralih ke Mode Terang (Light Mode)" : "Beralih ke Mode Gelap (Dark Mode)";
    }

    if (showToast) {
      this.showToast(`Mode ${isDark ? "Gelap (Dark Mode)" : "Terang (Light Mode)"} diaktifkan`, "info");
    }
  }

  toggleTheme() {
    const currentTheme = document.documentElement.getAttribute("data-theme") || "dark";
    const nextTheme = currentTheme === "dark" ? "light" : "dark";
    this.applyTheme(nextTheme, true);
  }

  // -----------------------------------------------------------------
  // EVENT LISTENERS BINDING
  // -----------------------------------------------------------------
  setupEventListeners() {
    // Navigation Tabs
    const navButtons = document.querySelectorAll(".nav-btn");
    navButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        const tab = btn.dataset.tab;
        this.switchTab(tab);
      });
    });

    // Session Switcher Dropdown
    const sessionSelect = document.getElementById("sessionSelect");
    if (sessionSelect) {
      sessionSelect.addEventListener("change", (e) => {
        this.currentSessionKey = e.target.value;
        this.renderCurrentSession();
        this.renderChatMessages();
        this.renderChatContextList();
        this.showToast(`Beralih ke sesi: ${this.getCurrentSession().title}`, "info");
      });
    }

    // New Session Button
    const btnNewSession = document.getElementById("btnNewSession");
    if (btnNewSession) {
      btnNewSession.addEventListener("click", () => {
        document.getElementById("newSessionModal").classList.add("active");
      });
    }

    // New Session Form Submit
    const newSessionForm = document.getElementById("newSessionForm");
    if (newSessionForm) {
      newSessionForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const title = document.getElementById("newSessionTitle").value.trim();
        const desc = document.getElementById("newSessionDesc").value.trim();
        if (!title) return;

        const newKey = "session_" + Date.now();
        SESSION_DATA[newKey] = {
          id: "SESI-" + Math.floor(1000 + Math.random() * 9000),
          title: title,
          desc: desc,
          jdText: `<h4>Deskripsi Pekerjaan</h4><p>${desc}</p>`,
          criteria: [
            { id: 1, type: "kualifikasi", title: "Pendidikan S1 / S2 Relevan", weight: 9 },
            { id: 2, type: "kualifikasi", title: "Pengalaman Kerja Relevan minimal 3 Tahun", weight: 8 },
            { id: 3, type: "tanggung_jawab", title: "Mampu memimpin inisiatif & berkolaborasi lintas tim", weight: 8 }
          ],
          candidates: [
            {
              id: "new-c1",
              nama: "Rian Hendrawan, S.T",
              initial: "RH",
              email: "rian.hendrawan@gmail.com",
              telepon: "+62 812-9988-7766",
              domisili: "Jakarta Pusat",
              filename: "CV_Rian_Hendrawan.pdf",
              pendidikan: [{ jenjang: "S1", institusi: "Universitas Indonesia", jurusan: "Teknik", tahun: "2018 - 2022" }],
              pengalaman: [{ posisi: "Professional Specialist", perusahaan: "PT Corpora Indonesia", durasi: "3 Tahun", deskripsi: "Menangani proyek strategis perusahaan." }],
              keahlianHard: ["Project Management", "Technical Analysis", "Reporting"],
              keahlianSoft: ["Communication", "Leadership"],
              fitScore: 88,
              statusSeleksi: "LOLOS (Rekomendasi Utama)",
              catatanUtama: "Kandidat memiliki fondasi kuat dan pengalaman relevan memenuhi standar kualifikasi sesi baru.",
              markdownCV: `# CV RIAN HENDRAWAN\nPengalaman 3 tahun di bidang spesialisasi terkait.`
            }
          ],
          matrixReq: [
            {
              no: 1,
              title: "Pendidikan S1 / S2 Relevan",
              evals: [{ symb: "✔️", note: "Lulusan S1 Universitas Indonesia" }]
            }
          ],
          matrixResp: [
            {
              no: 1,
              title: "Mampu memimpin inisiatif & berkolaborasi",
              evals: [{ symb: "✔️", note: "Terbukti memimpin proyek di PT Corpora" }]
            }
          ]
        };

        // Add to dropdown
        const opt = document.createElement("option");
        opt.value = newKey;
        opt.textContent = title;
        sessionSelect.appendChild(opt);
        sessionSelect.value = newKey;
        this.currentSessionKey = newKey;

        this.chatHistories[newKey] = [
          {
            sender: "ai",
            text: `Sesi rekrutmen baru **${title}** berhasil dibuat! AI siap menerima berkas pelamar dan mengekstrak kualifikasi lowongan.`
          }
        ];

        this.closeNewSessionModal();
        this.renderCurrentSession();
        this.renderChatMessages();
        this.renderChatContextList();
        this.showToast(`Sesi "${title}" berhasil dibuat!`, "success");
      });
    }

    // View Job Doc Modal
    const btnViewJobDoc = document.getElementById("btnViewJobDoc");
    if (btnViewJobDoc) {
      btnViewJobDoc.addEventListener("click", () => {
        const session = this.getCurrentSession();
        document.getElementById("jdModalTitle").textContent = "Dokumen Lowongan Kerja: " + session.title;
        document.getElementById("jdModalContent").innerHTML = session.jdText;
        document.getElementById("jobDescModal").classList.add("active");
      });
    }

    // Quick AI Run Button & Matrix Action Execute Button
    const btnQuickRunAI = document.getElementById("btnQuickRunAI");
    const btnExecuteAnalysis = document.getElementById("btnExecuteAnalysis");
    [btnQuickRunAI, btnExecuteAnalysis].forEach(btn => {
      if (btn) {
        btn.addEventListener("click", () => this.runSimulatedAIAnalysis());
      }
    });

    // Quick Upload Button & Simulate Upload Button
    const btnQuickUpload = document.getElementById("btnQuickUpload");
    const btnSimulateUpload = document.getElementById("btnSimulateUpload");
    [btnQuickUpload, btnSimulateUpload].forEach(btn => {
      if (btn) {
        btn.addEventListener("click", () => this.simulateCandidateUpload());
      }
    });

    // File Input change
    const fileInput = document.getElementById("fileInput");
    if (fileInput) {
      fileInput.addEventListener("change", (e) => {
        if (e.target.files.length > 0) {
          this.simulateCandidateUpload(e.target.files[0].name);
        }
      });
    }

    // Candidate Search Filter
    const searchInput = document.getElementById("candidateSearchInput");
    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        this.filterCandidateTable(e.target.value);
      });
    }

    // Reset Candidates Button
    const btnResetCandidates = document.getElementById("btnResetCandidates");
    if (btnResetCandidates) {
      btnResetCandidates.addEventListener("click", () => {
        this.showToast("Daftar CV kandidat direset ke sampel standar.", "info");
        this.renderCurrentSession();
      });
    }

    // Trigger Doc Extract Button in Criteria Tab
    const btnTriggerDocExtract = document.getElementById("btnTriggerDocExtract");
    if (btnTriggerDocExtract) {
      btnTriggerDocExtract.addEventListener("click", () => {
        this.showToast("PyMuPDF4LLM mengekstrak 12 kriteria dari PDF Lowongan Kerja...", "info");
        this.addTokenUsage(1250, 450);
        setTimeout(() => {
          this.showToast("Ekstraksi kriteria selesai & bobot prioritas diperbarui!", "success");
        }, 1200);
      });
    }

    // Reset Criteria Button
    const btnResetCriteria = document.getElementById("btnResetCriteria");
    if (btnResetCriteria) {
      btnResetCriteria.addEventListener("click", () => {
        this.showToast("Bobot kriteria dikembalikan ke pengaturan default.", "info");
        this.renderCriteriaList();
        this.recalculateScores();
      });
    }

    // Add Manual Criteria Form
    const addCriteriaForm = document.getElementById("addCriteriaForm");
    if (addCriteriaForm) {
      addCriteriaForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const type = document.getElementById("newCriteriaType").value;
        const title = document.getElementById("newCriteriaTitle").value.trim();
        const weight = parseInt(document.getElementById("newCriteriaWeight").value);
        if (!title) return;

        const session = this.getCurrentSession();
        const newId = session.criteria.length + 1;
        session.criteria.push({ id: newId, type, title, weight });

        document.getElementById("newCriteriaTitle").value = "";
        this.renderCriteriaList();
        this.recalculateScores();
        this.showToast("Kriteria baru berhasil ditambahkan!", "success");
      });
    }

    // Export CSV Button
    const btnExportCSV = document.getElementById("btnExportCSV");
    if (btnExportCSV) {
      btnExportCSV.addEventListener("click", () => this.exportSummaryCSV());
    }

    // Copy Markdown Summary
    const btnCopyMarkdownSummary = document.getElementById("btnCopyMarkdownSummary");
    if (btnCopyMarkdownSummary) {
      btnCopyMarkdownSummary.addEventListener("click", () => this.copyMarkdownSummary());
    }

    // Chat Send Button & Enter Key
    const btnSendChat = document.getElementById("btnSendChat");
    const chatInput = document.getElementById("chatInput");
    if (btnSendChat && chatInput) {
      btnSendChat.addEventListener("click", () => {
        this.sendChatMessage(chatInput.value);
      });

      chatInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
          e.preventDefault();
          this.sendChatMessage(chatInput.value);
        }
      });
    }

    // Clear Chat History
    const btnClearChat = document.getElementById("btnClearChatHistory");
    if (btnClearChat) {
      btnClearChat.addEventListener("click", () => {
        this.chatHistories[this.currentSessionKey] = [];
        this.renderChatMessages();
        this.showToast("Riwayat chat sesi ini telah dibersihkan.", "info");
      });
    }

    // Model Switcher in Config Tab
    const modelSelect = document.getElementById("modelSelect");
    if (modelSelect) {
      modelSelect.addEventListener("change", (e) => {
        this.selectedModel = e.target.value;
        this.showToast(`Model LLM dialihkan ke: ${e.target.value}`, "info");
      });
    }

    // Temperature Slider
    const tempSlider = document.getElementById("tempSlider");
    const tempValueBadge = document.getElementById("tempValueBadge");
    if (tempSlider && tempValueBadge) {
      tempSlider.addEventListener("input", (e) => {
        const val = parseFloat(e.target.value).toFixed(2);
        this.temperature = val;
        tempValueBadge.textContent = `${val} (${val <= 0.2 ? "High Precision" : "Creative"})`;
      });
    }

    // Test API Connection
    const btnTestApi = document.getElementById("btnTestApiConnection");
    if (btnTestApi) {
      btnTestApi.addEventListener("click", () => {
        btnTestApi.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Menguji...`;
        setTimeout(() => {
          btnTestApi.innerHTML = `<i class="fa-solid fa-plug"></i> Tes Koneksi`;
          this.showToast("Koneksi API Gateway OpenRouter Sukses (Latensi 38ms)!", "success");
        }, 800);
      });
    }

    // Reset Token Stats
    const btnResetTokens = document.getElementById("btnResetTokens");
    if (btnResetTokens) {
      btnResetTokens.addEventListener("click", () => {
        this.tokenStats = { total: 0, prompt: 0, completion: 0, costUSD: 0 };
        this.renderTokenStats();
        this.showToast("Statistik penggunaan token direset.", "info");
      });
    }

    // Token Pill Header click -> switch to config tab
    const tokenPill = document.getElementById("tokenHeaderPill");
    if (tokenPill) {
      tokenPill.addEventListener("click", () => {
        this.switchTab("config");
      });
    }

    // Ask about Candidate in Candidate Modal
    const btnAskCand = document.getElementById("btnAskAboutCandidate");
    if (btnAskCand) {
      btnAskCand.addEventListener("click", () => {
        const candName = document.getElementById("modalCandName").textContent;
        this.closeCandidateModal();
        this.switchTab("chat");
        this.sendChatMessage(`Berikan analisis mendalam mengenai potensi, kelebihan, dan kelemahan dari kandidat ${candName}.`);
      });
    }

    // Theme Toggle Button
    const themeToggleBtn = document.getElementById("themeToggleBtn");
    if (themeToggleBtn) {
      themeToggleBtn.addEventListener("click", () => {
        this.toggleTheme();
      });
    }
  }

  // -----------------------------------------------------------------
  // HELPER: GET CURRENT SESSION
  // -----------------------------------------------------------------
  getCurrentSession() {
    return SESSION_DATA[this.currentSessionKey] || SESSION_DATA.arch;
  }

  // -----------------------------------------------------------------
  // SWITCH ACTIVE TAB
  // -----------------------------------------------------------------
  switchTab(tabName) {
    this.activeTab = tabName;

    // Update Nav Buttons
    const navButtons = document.querySelectorAll(".nav-btn");
    navButtons.forEach(btn => {
      if (btn.dataset.tab === tabName) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });

    // Update Panes
    const panes = document.querySelectorAll(".tab-pane");
    panes.forEach(pane => {
      if (pane.id === `pane-${tabName}`) {
        pane.classList.add("active");
      } else {
        pane.classList.remove("active");
      }
    });

    // Scroll to top
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // -----------------------------------------------------------------
  // RENDER COMPLETE CURRENT SESSION VIEW
  // -----------------------------------------------------------------
  renderCurrentSession() {
    const session = this.getCurrentSession();

    // Header & Hero Banner
    document.getElementById("dashSessionId").textContent = `ID: ${session.id}`;
    document.getElementById("dashJobTitle").textContent = session.title;
    document.getElementById("dashJobDesc").textContent = session.desc;

    // Badges Count
    document.getElementById("candidateCountBadge").textContent = session.candidates.length;
    document.getElementById("criteriaCountBadge").textContent = session.criteria.length;
    document.getElementById("candRosterCount").textContent = session.candidates.length;
    document.getElementById("criteriaListCount").textContent = session.criteria.length;

    // KPIs
    document.getElementById("dashTotalCV").textContent = session.candidates.length;
    const shortlisted = session.candidates.filter(c => c.fitScore >= 70).length;
    document.getElementById("dashShortlisted").textContent = shortlisted;

    const totalScores = session.candidates.reduce((acc, c) => acc + c.fitScore, 0);
    const avgScore = session.candidates.length > 0 ? (totalScores / session.candidates.length).toFixed(1) : "0";
    document.getElementById("dashAvgScore").textContent = `${avgScore}%`;

    // Top Candidate
    const topCand = session.candidates[0] || {};
    document.getElementById("dashTopAvatar").textContent = topCand.initial || "AI";
    document.getElementById("dashTopName").textContent = topCand.nama || "-";
    document.getElementById("dashTopSub").textContent = topCand.pendidikan?.[0]?.jurusan ? `${topCand.pendidikan[0].jenjang} ${topCand.pendidikan[0].jurusan}` : "Kandidat Unggulan";
    document.getElementById("dashTopScore").textContent = `${topCand.fitScore || 0}%`;
    document.getElementById("dashTopStatus").textContent = topCand.statusSeleksi || "-";
    document.getElementById("dashTopNotes").textContent = `"${topCand.catatanUtama || 'Memenuhi kriteria utama seleksi'}"`;

    // Render Sub-Components
    this.renderLeaderboardTable();
    this.renderCandidateRosterTable();
    this.renderCriteriaList();
    this.render3MatrixTables();
  }

  // -----------------------------------------------------------------
  // RENDER LEADERBOARD TABLE (DASHBOARD)
  // -----------------------------------------------------------------
  renderLeaderboardTable() {
    const tbody = document.getElementById("dashLeaderboardBody");
    if (!tbody) return;
    tbody.innerHTML = "";

    const session = this.getCurrentSession();
    session.candidates.forEach((cand, idx) => {
      const tr = document.createElement("tr");

      const rankBadgeClass = idx === 0 ? "rank-1" : idx === 1 ? "rank-2" : idx === 2 ? "rank-3" : "rank-other";
      const fillClass = cand.fitScore >= 85 ? "green" : cand.fitScore >= 70 ? "blue" : cand.fitScore >= 50 ? "amber" : "red";
      const statusBadgeClass = cand.statusSeleksi.includes("Utama") ? "status-utama" : cand.statusSeleksi.includes("Kedua") ? "status-kedua" : cand.statusSeleksi.includes("Cadangan") ? "status-cadangan" : "status-tolak";

      const eduStr = cand.pendidikan?.[0] ? `${cand.pendidikan[0].jenjang} ${cand.pendidikan[0].institusi}` : "-";
      const expStr = cand.pengalaman?.[0] ? cand.pengalaman[0].posisi : "-";

      tr.innerHTML = `
        <td style="text-align: center;">
          <span class="rank-badge ${rankBadgeClass}">#${idx + 1}</span>
        </td>
        <td>
          <div class="cand-cell-name">${cand.nama}</div>
          <div class="cand-cell-sub">${cand.email}</div>
        </td>
        <td>
          <div style="font-weight: 600; font-size: 12px;">${eduStr}</div>
          <div class="cand-cell-sub">${expStr}</div>
        </td>
        <td>
          <div class="fit-progress-wrap">
            <div class="fit-progress-bar">
              <div class="fit-progress-fill ${fillClass}" style="width: ${cand.fitScore}%;"></div>
            </div>
            <span class="fit-score-text">${cand.fitScore}%</span>
          </div>
        </td>
        <td>
          <span class="badge-status ${statusBadgeClass}">${cand.statusSeleksi}</span>
        </td>
        <td style="text-align: center;">
          <button class="btn-table-action" onclick="app.showCandidateDetail(${idx})">
            <i class="fa-solid fa-eye"></i> Profil
          </button>
        </td>
      `;
      tbody.appendChild(tr);
    });
  }

  // -----------------------------------------------------------------
  // RENDER CANDIDATES ROSTER TABLE (TAB 2)
  // -----------------------------------------------------------------
  renderCandidateRosterTable() {
    const tbody = document.getElementById("candidatesTableBody");
    if (!tbody) return;
    tbody.innerHTML = "";

    const session = this.getCurrentSession();
    session.candidates.forEach((cand, idx) => {
      const tr = document.createElement("tr");

      const skillsHTML = cand.keahlianHard?.slice(0, 3).map(s => `<span class="skill-tag-pill">${s}</span>`).join("") || "-";
      const lastExp = cand.pengalaman?.[0] ? `${cand.pengalaman[0].posisi} (${cand.pengalaman[0].perusahaan})` : "-";
      const lastEdu = cand.pendidikan?.[0] ? `${cand.pendidikan[0].jenjang} ${cand.pendidikan[0].jurusan} - ${cand.pendidikan[0].institusi}` : "-";

      tr.innerHTML = `
        <td>
          <div class="cand-cell-name">${cand.nama}</div>
          <div class="cand-cell-sub"><i class="fa-solid fa-file-pdf text-rose"></i> ${cand.filename}</div>
        </td>
        <td>
          <div style="font-size: 12px;"><i class="fa-solid fa-envelope"></i> ${cand.email}</div>
          <div class="cand-cell-sub"><i class="fa-solid fa-location-dot"></i> ${cand.domisili} | ${cand.telepon}</div>
        </td>
        <td style="font-size: 12px; color: var(--text-secondary); max-width: 220px;">
          ${lastEdu}
        </td>
        <td style="font-size: 12px; color: var(--text-secondary); max-width: 220px;">
          ${lastExp}
        </td>
        <td style="max-width: 200px;">
          ${skillsHTML}
        </td>
        <td style="text-align: center;">
          <span class="badge-pdf-md" title="PyMuPDF4LLM Markdown Parsed">PDF → MD</span>
        </td>
        <td style="text-align: center;">
          <button class="btn-table-action" onclick="app.showCandidateDetail(${idx})">
            <i class="fa-solid fa-id-card"></i> Detail
          </button>
        </td>
      `;
      tbody.appendChild(tr);
    });
  }

  // -----------------------------------------------------------------
  // FILTER CANDIDATE TABLE (SEARCH BOX)
  // -----------------------------------------------------------------
  filterCandidateTable(keyword) {
    const term = keyword.toLowerCase();
    const rows = document.querySelectorAll("#candidatesTableBody tr");
    rows.forEach(row => {
      const text = row.textContent.toLowerCase();
      if (text.includes(term)) {
        row.style.display = "";
      } else {
        row.style.display = "none";
      }
    });
  }

  // -----------------------------------------------------------------
  // RENDER CRITERIA LIST (TAB 3)
  // -----------------------------------------------------------------
  renderCriteriaList() {
    const container = document.getElementById("criteriaListContainer");
    if (!container) return;
    container.innerHTML = "";

    const session = this.getCurrentSession();
    session.criteria.forEach((crit) => {
      const row = document.createElement("div");
      row.className = "criteria-row";

      const priority = this.getPriorityBadge(crit.weight);

      row.innerHTML = `
        <div class="criteria-title-col">
          <span class="criteria-type-badge ${crit.type}">
            ${crit.type === "kualifikasi" ? "Kualifikasi" : "Tanggung Jawab"}
          </span>
          <div class="criteria-text">${crit.title}</div>
        </div>

        <div class="criteria-weight-col">
          <div class="weight-slider-wrap">
            <div class="weight-header-row">
              <span class="priority-tag ${priority.class}">${priority.label}</span>
              <span class="weight-val-num" id="weight-val-${crit.id}">${crit.weight} / 10</span>
            </div>
            <input 
              type="range" 
              min="1" 
              max="10" 
              step="1" 
              value="${crit.weight}" 
              class="slider-custom"
              oninput="app.handleWeightChange(${crit.id}, this.value)"
            />
          </div>
          <button class="btn-delete-crit" onclick="app.deleteCriteria(${crit.id})" title="Hapus Kriteria">
            <i class="fa-solid fa-trash-can"></i>
          </button>
        </div>
      `;
      container.appendChild(row);
    });
  }

  // -----------------------------------------------------------------
  // HANDLE WEIGHT CHANGE & LIVE RECALCULATION
  // -----------------------------------------------------------------
  handleWeightChange(critId, newWeight) {
    const session = this.getCurrentSession();
    const crit = session.criteria.find(c => c.id === critId);
    if (!crit) return;

    crit.weight = parseInt(newWeight);
    const weightValEl = document.getElementById(`weight-val-${critId}`);
    if (weightValEl) {
      weightValEl.textContent = `${crit.weight} / 10`;
    }

    // Live update priority tag
    const priority = this.getPriorityBadge(crit.weight);
    const row = weightValEl?.closest(".criteria-row");
    const priorityTag = row?.querySelector(".priority-tag");
    if (priorityTag) {
      priorityTag.className = `priority-tag ${priority.class}`;
      priorityTag.textContent = priority.label;
    }

    this.recalculateScores();
  }

  getPriorityBadge(score) {
    if (score >= 9) return { label: "Sangat Wajib", class: "urgent" };
    if (score >= 7) return { label: "Penting", class: "important" };
    if (score >= 5) return { label: "Sedang", class: "medium" };
    return { label: "Opsional", class: "optional" };
  }

  deleteCriteria(critId) {
    const session = this.getCurrentSession();
    session.criteria = session.criteria.filter(c => c.id !== critId);
    this.renderCriteriaList();
    this.recalculateScores();
    this.showToast("Kriteria dihapus.", "info");
  }

  // -----------------------------------------------------------------
  // RECALCULATE CANDIDATE SCORES DYNAMICALLY
  // -----------------------------------------------------------------
  recalculateScores() {
    const session = this.getCurrentSession();
    const totalWeights = session.criteria.reduce((sum, c) => sum + c.weight, 0);

    // Dynamic adjustment factor: candidates maintain relative baseline with subtle weight sensitivity
    session.candidates.forEach((cand, idx) => {
      let base = 90 - (idx * 14);
      // Small variation based on total weights
      let delta = (totalWeights % 10) - 5;
      cand.fitScore = Math.min(99, Math.max(30, base + delta));

      if (cand.fitScore >= 90) cand.statusSeleksi = "LOLOS (Rekomendasi Utama)";
      else if (cand.fitScore >= 80) cand.statusSeleksi = "LOLOS (Rekomendasi Kedua)";
      else if (cand.fitScore >= 70) cand.statusSeleksi = "LOLOS (Kandidat Cadangan)";
      else cand.statusSeleksi = "TIDAK LOLOS";
    });

    // Re-sort candidates by fitScore descending
    session.candidates.sort((a, b) => b.fitScore - a.fitScore);

    // Refresh UI
    this.renderLeaderboardTable();
    this.renderCandidateRosterTable();
    this.render3MatrixTables();
  }

  // -----------------------------------------------------------------
  // RENDER 3 COMPARATIVE MATRIX TABLES (TAB 4)
  // -----------------------------------------------------------------
  render3MatrixTables() {
    const session = this.getCurrentSession();

    // 1. TABEL 3: KESIMPULAN RINGKASAN
    const summaryBody = document.getElementById("tableSummaryBody");
    if (summaryBody) {
      summaryBody.innerHTML = "";
      session.candidates.forEach((cand, idx) => {
        const tr = document.createElement("tr");

        const rankBadgeClass = idx === 0 ? "rank-1" : idx === 1 ? "rank-2" : idx === 2 ? "rank-3" : "rank-other";
        const fillClass = cand.fitScore >= 85 ? "green" : cand.fitScore >= 70 ? "blue" : cand.fitScore >= 50 ? "amber" : "red";
        const statusBadgeClass = cand.statusSeleksi.includes("Utama") ? "status-utama" : cand.statusSeleksi.includes("Kedua") ? "status-kedua" : cand.statusSeleksi.includes("Cadangan") ? "status-cadangan" : "status-tolak";

        tr.innerHTML = `
          <td style="text-align: center;">
            <span class="rank-badge ${rankBadgeClass}">#${idx + 1}</span>
          </td>
          <td style="font-weight: 800; font-size: 14px; color: var(--text-white);">
            ${cand.nama}
            <div style="font-size: 11px; color: var(--text-muted); font-weight: normal;">${cand.domisili}</div>
          </td>
          <td>
            <div class="fit-progress-wrap">
              <div class="fit-progress-bar">
                <div class="fit-progress-fill ${fillClass}" style="width: ${cand.fitScore}%;"></div>
              </div>
              <span class="fit-score-text">${cand.fitScore}%</span>
            </div>
          </td>
          <td style="font-size: 12.5px; color: var(--text-secondary); line-height: 1.5;">
            ${cand.catatanUtama}
          </td>
          <td>
            <span class="badge-status ${statusBadgeClass}">${cand.statusSeleksi}</span>
          </td>
          <td style="text-align: center;">
            <button class="btn-table-action" onclick="app.showCandidateDetail(${idx})">
              <i class="fa-solid fa-eye"></i> Profil
            </button>
          </td>
        `;
        summaryBody.appendChild(tr);
      });
    }

    // 2. TABEL 1: EVALUASI PERSYARATAN (REQUIREMENTS)
    const reqHead = document.getElementById("tableReqMatrixHead");
    const reqBody = document.getElementById("tableReqMatrixBody");
    if (reqHead && reqBody && session.matrixReq) {
      // Build Head with Candidate Columns
      let headHTML = `
        <tr>
          <th style="width: 45px; text-align: center;">No</th>
          <th style="min-width: 280px;">Persyaratan (Requirements)</th>
      `;
      session.candidates.forEach(c => {
        headHTML += `<th class="cand-col-head">${c.nama.split(",")[0]}</th>`;
      });
      headHTML += `</tr>`;
      reqHead.innerHTML = headHTML;

      // Build Body Rows
      reqBody.innerHTML = "";
      session.matrixReq.forEach(row => {
        const tr = document.createElement("tr");
        let rowHTML = `
          <td style="text-align: center; font-weight: 800; color: var(--text-muted);">${row.no}</td>
          <td style="font-weight: 600; font-size: 13px; color: var(--text-white);">${row.title}</td>
        `;

        session.candidates.forEach((cand, cIdx) => {
          const evalItem = row.evals?.[cIdx] || { symb: "✔️", note: "Memenuhi kriteria" };
          rowHTML += `
            <td class="eval-cell">
              <span class="eval-symb">${evalItem.symb}</span>
              <span class="eval-note">(${evalItem.note})</span>
            </td>
          `;
        });
        tr.innerHTML = rowHTML;
        reqBody.appendChild(tr);
      });
    }

    // 3. TABEL 2: EVALUASI TANGGUNG JAWAB (RESPONSIBILITIES)
    const respHead = document.getElementById("tableRespMatrixHead");
    const respBody = document.getElementById("tableRespMatrixBody");
    if (respHead && respBody && session.matrixResp) {
      // Build Head with Candidate Columns
      let headHTML = `
        <tr>
          <th style="width: 45px; text-align: center;">No</th>
          <th style="min-width: 280px;">Tanggung Jawab (Responsibilities)</th>
      `;
      session.candidates.forEach(c => {
        headHTML += `<th class="cand-col-head" style="color: var(--purple-400);">${c.nama.split(",")[0]}</th>`;
      });
      headHTML += `</tr>`;
      respHead.innerHTML = headHTML;

      // Build Body Rows
      respBody.innerHTML = "";
      session.matrixResp.forEach(row => {
        const tr = document.createElement("tr");
        let rowHTML = `
          <td style="text-align: center; font-weight: 800; color: var(--text-muted);">${row.no}</td>
          <td style="font-weight: 600; font-size: 13px; color: var(--text-white);">${row.title}</td>
        `;

        session.candidates.forEach((cand, cIdx) => {
          const evalItem = row.evals?.[cIdx] || { symb: "✔️", note: "Sesuai ekspektasi" };
          rowHTML += `
            <td class="eval-cell">
              <span class="eval-symb">${evalItem.symb}</span>
              <span class="eval-note">(${evalItem.note})</span>
            </td>
          `;
        });
        tr.innerHTML = rowHTML;
        respBody.appendChild(tr);
      });
    }
  }

  // -----------------------------------------------------------------
  // SHOW CANDIDATE DETAIL MODAL
  // -----------------------------------------------------------------
  showCandidateDetail(candIndex) {
    const session = this.getCurrentSession();
    const cand = session.candidates[candIndex];
    if (!cand) return;

    document.getElementById("modalCandAvatar").textContent = cand.initial;
    document.getElementById("modalCandName").textContent = cand.nama;
    document.getElementById("modalCandSub").textContent = `${cand.pendidikan?.[0]?.institusi || 'Pendidikan'} • ${cand.domisili}`;
    document.getElementById("modalCandEmail").textContent = cand.email;
    document.getElementById("modalCandPhone").textContent = cand.telepon;
    document.getElementById("modalCandDomisili").textContent = cand.domisili;
    document.getElementById("modalCandScore").textContent = `${cand.fitScore}%`;
    document.getElementById("modalCandStatus").textContent = cand.statusSeleksi;
    document.getElementById("modalCandEvalText").textContent = `"${cand.catatanUtama}"`;

    // Experience Timeline
    const expContainer = document.getElementById("modalExpTimeline");
    expContainer.innerHTML = "";
    cand.pengalaman?.forEach(exp => {
      const item = document.createElement("div");
      item.className = "timeline-item";
      item.innerHTML = `
        <div class="t-role">${exp.posisi}</div>
        <div class="t-company">${exp.perusahaan} • ${exp.durasi}</div>
        <div class="t-desc">${exp.deskripsi}</div>
      `;
      expContainer.appendChild(item);
    });

    // Education Timeline
    const eduContainer = document.getElementById("modalEduTimeline");
    eduContainer.innerHTML = "";
    cand.pendidikan?.forEach(edu => {
      const item = document.createElement("div");
      item.className = "timeline-item";
      item.innerHTML = `
        <div class="t-role">${edu.jenjang} ${edu.jurusan}</div>
        <div class="t-company">${edu.institusi} • ${edu.tahun}</div>
      `;
      eduContainer.appendChild(item);
    });

    // Hard Skills
    const hardContainer = document.getElementById("modalHardSkills");
    hardContainer.innerHTML = cand.keahlianHard?.map(s => `<span class="tag-item" style="color: var(--blue-400); border-color: rgba(59, 130, 246, 0.3);">${s}</span>`).join("") || "-";

    // Soft Skills
    const softContainer = document.getElementById("modalSoftSkills");
    softContainer.innerHTML = cand.keahlianSoft?.map(s => `<span class="tag-item" style="color: var(--amber-400); border-color: rgba(245, 158, 11, 0.3);">${s}</span>`).join("") || "-";

    // Markdown preview
    document.getElementById("modalMarkdownContent").textContent = cand.markdownCV || "# Tidak ada data raw markdown";

    document.getElementById("candidateModal").classList.add("active");
  }

  closeCandidateModal() {
    document.getElementById("candidateModal").classList.remove("active");
  }

  closeJobDescModal() {
    document.getElementById("jobDescModal").classList.remove("active");
  }

  closeNewSessionModal() {
    document.getElementById("newSessionModal").classList.remove("active");
  }

  // -----------------------------------------------------------------
  // SIMULATION: RUN AI ANALYSIS WITH STEP-BY-STEP PROGRESS
  // -----------------------------------------------------------------
  runSimulatedAIAnalysis() {
    const banner = document.getElementById("pipelineBanner");
    const title = document.getElementById("pipelineStepTitle");
    const desc = document.getElementById("pipelineStepDesc");
    const meter = document.getElementById("pipelineMeterBar");

    this.switchTab("candidates");
    banner.style.display = "flex";
    meter.style.width = "20%";
    title.textContent = "Tahap 1: Ingesti Dokumen & Parsing PyMuPDF4LLM";
    desc.textContent = "Mengonversi seluruh berkas PDF pelamar menjadi format Markdown (.md) semantik...";

    setTimeout(() => {
      meter.style.width = "50%";
      title.textContent = "Tahap 2: Ekstraksi Entitas & Profiling Single-CV";
      desc.textContent = "Mengekstrak kontak, riwayat pendidikan, durasi pengalaman, serta hard/soft skills...";
    }, 1000);

    setTimeout(() => {
      meter.style.width = "80%";
      title.textContent = "Tahap 3: Sintesis Matriks 3 Tabel dengan Qwen 3.8 Max";
      desc.textContent = "Mengevaluasi kesesuaian seluruh kandidat secara komparatif terhadap 12 kriteria berbobot...";
    }, 2000);

    setTimeout(() => {
      meter.style.width = "100%";
      title.textContent = "Analisa Selesai!";
      desc.textContent = "3 Tabel Matriks Komparatif telah berhasil diperbarui dan siap ditinjau.";
      this.addTokenUsage(4820, 1640);
      this.recalculateScores();

      setTimeout(() => {
        banner.style.display = "none";
        this.switchTab("matrix");
        this.showToast("Analisa AI 3 Tabel Matriks berhasil dijalankan!", "success");
      }, 700);
    }, 3000);
  }

  // -----------------------------------------------------------------
  // SIMULATION: UPLOAD CANDIDATE
  // -----------------------------------------------------------------
  simulateCandidateUpload(customFileName) {
    const session = this.getCurrentSession();
    const newIdx = session.candidates.length + 1;
    const sampleNames = ["Hendra Wijaya, S.Ars", "Dewi Anggraini, S.T", "Reza Pratama, M.Ars", "Fajar Nugraha, S.T"];
    const chosenName = sampleNames[newIdx % sampleNames.length];
    const fileName = customFileName || `CV_${chosenName.replace(/[^a-zA-Z]/g, "_")}.pdf`;

    const banner = document.getElementById("pipelineBanner");
    banner.style.display = "flex";
    document.getElementById("pipelineStepTitle").textContent = "Mengunggah Berkas CV: " + fileName;
    document.getElementById("pipelineStepDesc").textContent = "PyMuPDF4LLM mengekstrak identitas & merestrukturisasi resume...";
    document.getElementById("pipelineMeterBar").style.width = "65%";

    setTimeout(() => {
      banner.style.display = "none";
      const newCand = {
        id: "cand-" + Date.now(),
        nama: chosenName,
        initial: chosenName.split(" ").map(w => w[0]).join("").slice(0, 2),
        email: `${chosenName.toLowerCase().replace(/[^a-z]/g, "")}@example.com`,
        telepon: "+62 81" + Math.floor(100000000 + Math.random() * 900000000),
        domisili: "Jakarta & Sekitarnya",
        filename: fileName,
        pendidikan: [{ jenjang: "S1", institusi: "Universitas Terkemuka", jurusan: "Teknik Arsitektur", tahun: "2017 - 2021" }],
        pengalaman: [{ posisi: "Project Architect", perusahaan: "Konsultan Desain", durasi: "3 Tahun", deskripsi: "Mendesain gambar kerja dan visualisasi 3D." }],
        keahlianHard: ["AutoCAD", "Revit BIM", "SketchUp", "Photoshop"],
        keahlianSoft: ["Communication", "Teamwork"],
        fitScore: 84,
        statusSeleksi: "LOLOS (Rekomendasi Kedua)",
        catatanUtama: "Berkas baru berhasil diekstrak dan masuk dalam rekomendasi kedua seleksi.",
        markdownCV: `# CV ${chosenName}\nResume pelamar hasil ekstraksi PyMuPDF4LLM.`
      };

      session.candidates.push(newCand);
      this.addTokenUsage(1400, 380);
      this.recalculateScores();
      this.renderCurrentSession();
      this.showToast(`Berhasil menambahkan berkas ${chosenName}!`, "success");
    }, 1400);
  }

  // -----------------------------------------------------------------
  // TOKEN TRACKER LOGIC
  // -----------------------------------------------------------------
  addTokenUsage(promptTokens, compTokens) {
    this.tokenStats.prompt += promptTokens;
    this.tokenStats.completion += compTokens;
    this.tokenStats.total = this.tokenStats.prompt + this.tokenStats.completion;
    
    // Qwen 3.8 Max OpenRouter rate approx: $0.16 / 1M prompt, $0.60 / 1M completion
    const cost = (this.tokenStats.prompt / 1000000 * 0.16) + (this.tokenStats.completion / 1000000 * 0.60);
    this.tokenStats.costUSD = parseFloat(cost.toFixed(4));

    this.renderTokenStats();
  }

  renderTokenStats() {
    const formattedTotal = this.tokenStats.total.toLocaleString("id-ID");
    const formattedPrompt = this.tokenStats.prompt.toLocaleString("id-ID");
    const formattedComp = this.tokenStats.completion.toLocaleString("id-ID");
    const costStr = `$${this.tokenStats.costUSD}`;
    const idrCost = Math.round(this.tokenStats.costUSD * 16100).toLocaleString("id-ID");

    document.getElementById("headerTokenCount").textContent = `${formattedTotal} Tokens`;
    document.getElementById("headerCostTag").textContent = costStr;

    document.getElementById("statTotalTokens").textContent = formattedTotal;
    document.getElementById("statPromptTokens").textContent = formattedPrompt;
    document.getElementById("statCompTokens").textContent = formattedComp;
    document.getElementById("statCostUSD").textContent = `${costStr} (Rp ${idrCost})`;
  }

  // -----------------------------------------------------------------
  // CHATBOT INTERACTIVE SYSTEM
  // -----------------------------------------------------------------
  renderChatMessages() {
    const stream = document.getElementById("chatStream");
    if (!stream) return;
    stream.innerHTML = "";

    const history = this.chatHistories[this.currentSessionKey] || [];
    history.forEach(msg => {
      const msgDiv = document.createElement("div");
      msgDiv.className = `chat-message ${msg.sender}`;

      const avatar = msg.sender === "ai" ? `<i class="fa-solid fa-robot"></i>` : `<i class="fa-solid fa-user"></i>`;

      msgDiv.innerHTML = `
        <div class="msg-avatar">${avatar}</div>
        <div class="msg-body">
          ${this.formatMarkdown(msg.text)}
        </div>
      `;
      stream.appendChild(msgDiv);
    });

    stream.scrollTop = stream.scrollHeight;
  }

  renderChatContextList() {
    const list = document.getElementById("chatCandidateContextList");
    if (!list) return;
    list.innerHTML = "";

    const session = this.getCurrentSession();
    session.candidates.forEach(c => {
      const li = document.createElement("li");
      li.className = "context-candidate-item";
      li.innerHTML = `
        <span class="context-cand-name">${c.nama}</span>
        <span class="context-cand-score">${c.fitScore}%</span>
      `;
      list.appendChild(li);
    });
  }

  formatMarkdown(text) {
    if (!text) return "";
    let html = text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/\n\n/g, '</p><p>')
      .replace(/\n- /g, '<br>• ')
      .replace(/\n/g, '<br>');
    return `<p>${html}</p>`;
  }

  runQuickChat(question) {
    this.switchTab("chat");
    this.sendChatMessage(question);
  }

  sendChatMessage(rawText) {
    const text = (rawText || "").trim();
    if (!text) return;

    const chatInput = document.getElementById("chatInput");
    if (chatInput) chatInput.value = "";

    if (!this.chatHistories[this.currentSessionKey]) {
      this.chatHistories[this.currentSessionKey] = [];
    }

    // Add user message
    this.chatHistories[this.currentSessionKey].push({
      sender: "user",
      text: text
    });
    this.renderChatMessages();

    // AI Recruiter generates contextual grounded response
    this.addTokenUsage(320, 280);

    setTimeout(() => {
      const aiReply = this.generateAIResponse(text);
      this.chatHistories[this.currentSessionKey].push({
        sender: "ai",
        text: aiReply
      });
      this.renderChatMessages();
    }, 700);
  }

  generateAIResponse(query) {
    const session = this.getCurrentSession();
    const q = query.toLowerCase();

    if (q.includes("siapa") && (q.includes("nomor satu") || q.includes("terbaik") || q.includes("siap kerja"))) {
      const top = session.candidates[0];
      return `Berdasarkan evaluasi **3 Tabel Matriks**, kandidat rekomendasi utama adalah **${top.nama}** dengan skor kecocokan **${top.fitScore}%**.\n\n**Alasan Utama:**\n- ${top.catatanUtama}\n- Seluruh persyaratan wajib pada Tabel 1 terpenuhi dengan simbol **✔️ (Memenuhi Penuh)**.\n- Memiliki rekam jejak kepemimpinan perancangan proyek yang terbukti langsung aplikatif untuk posisi ${session.title}.`;
    }

    if (q.includes("bandingkan") || (q.includes("bayu") && q.includes("farhan"))) {
      return `**Perbandingan Komparatif: Bayu Pratama vs Mohamad Farhan**\n\n1. **Keahlian Software BIM & DED:**\n   - **Bayu Pratama (94%):** Mahir Autodesk Revit (BIM Level 2) dan berpengalaman koordinasi benturan (clash detection) dengan MEP & Struktur.\n   - **Mohamad Farhan (82%):** Masih menggunakan alur kerja SketchUp dan AutoCAD, belum menguasai Revit secara mendalam.\n\n2. **Kekuatan Desain:**\n   - Farhan sangat unggul pada estetika tropis dan hospitality mewah.\n   - Bayu unggul pada proyek high-rise dan manajemen teknis berskala besar.\n\n3. **Sertifikasi:**\n   - Bayu telah memiliki sertifikasi **STRA Madya IAI**, sedangkan Farhan masih dalam proses pengurusan.`;
    }

    if (q.includes("sertifikasi") || q.includes("stra") || q.includes("iai")) {
      return `Berdasarkan hasil parsing dokumen CV:\n\n- **Bayu Pratama, S.Ars:** Memiliki sertifikasi resmi **STRA Madya (Ikatan Arsitek Indonesia - IAI)**.\n- **Mohamad Farhan:** Tercatat sedang dalam proses pengurusan sertifikasi keahlian.\n- Kandidat lainnya (Siti Nurhaliza, Rian Adiputra, Ahmad Zulkarnaen) tidak mencantumkan sertifikasi profesi arsitek yang relevan.`;
    }

    if (q.includes("wawancara") || q.includes("pertanyaan")) {
      return `**Draf Pertanyaan Wawancara Teknis Rekomendasi AI:**\n\n1. *"Bisakah Anda menceritakan pengalaman saat memimpin koordinasi clash detection BIM Revit antara arsitektur dan MEP pada proyek high-rise?"*\n2. *"Bagaimana strategi Anda dalam menyelesaikan perubahan desain mendadak dari Klien tanpa mengorbankan timeline tender DED?"*\n3. *"Apa tantangan terberat yang pernah Anda hadapi dalam supervisi kesesuaian gambar arsitektur terhadap pelaksanaan kontraktor di lapangan?"*`;
    }

    if (q.includes("tidak lolos") || q.includes("ditolak") || q.includes("kelemahan")) {
      return `**Evaluasi Kandidat yang Tidak Lolos / Perlu Catatan:**\n\n- **Rian Adiputra (48%):** Latar belakang pendidikan D3 Teknik Drafter, belum memenuhi kualifikasi minimal S1 Arsitektur dan tidak memiliki portofolio perancangan skematik mandiri.\n- **Ahmad Zulkarnaen (38%):** Memiliki keahlian kuat di bidang Teknik Sipil & Struktur (ETABS/SAP2000), namun tidak memiliki keahlian estetika ruang dan desain arsitektur yang disyaratkan lowongan ini.\n- **Siti Nurhaliza (74% - Cadangan):** Portofolio interior sangat baik, namun belum memiliki pengalaman perancangan DED struktur arsitektur skala luas.`;
    }

    // Default Fallback
    return `Mengenai pertanyaan Anda: *"**${query}**"*\n\nBerdasarkan data profil kandidat pada sesi **${session.title}**, seluruh data evaluasi telah dicocokkan dengan **${session.criteria.length} kriteria berbobot**. Rekomendasi terbaik saat ini tetap dipimpin oleh **${session.candidates[0].nama}** (${session.candidates[0].fitScore}%), disusul oleh **${session.candidates[1]?.nama || 'Kandidat Kedua'}** (${session.candidates[1]?.fitScore || 0}%).\n\nApakah ada aspek spesifik lain yang ingin Anda bandingkan?`;
  }

  // -----------------------------------------------------------------
  // EXPORT UTILITIES (CSV & MARKDOWN)
  // -----------------------------------------------------------------
  exportSummaryCSV() {
    const session = this.getCurrentSession();
    let csv = "Rank,Nama Kandidat,Email,Telepon,Domisili,Kesesuaian Fit Score,Status Seleksi,Catatan Utama\n";

    session.candidates.forEach((c, idx) => {
      const cleanNote = `"${c.catatanUtama.replace(/"/g, '""')}"`;
      csv += `${idx + 1},"${c.nama}","${c.email}","${c.telepon}","${c.domisili}",${c.fitScore}%,"${c.statusSeleksi}",${cleanNote}\n`;
    });

    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `Hasil_Seleksi_${session.id}.csv`;
    a.click();
    URL.revokeObjectURL(url);

    this.showToast("File CSV Hasil Seleksi berhasil diunduh!", "success");
  }

  copyMarkdownSummary() {
    const session = this.getCurrentSession();
    let md = `# Laporan Seleksi AI - ${session.title}\n\n`;
    md += `**Sesi:** ${session.id} | **Engine:** Qwen 3.8 Max (1M Context)\n\n`;
    md += `## Peringkat Kandidat Terpilih\n\n`;
    md += `| Rank | Nama Kandidat | Skor | Status | Catatan Utama |\n`;
    md += `| :---: | :--- | :---: | :--- | :--- |\n`;

    session.candidates.forEach((c, idx) => {
      md += `| #${idx + 1} | **${c.nama}** | ${c.fitScore}% | ${c.statusSeleksi} | ${c.catatanUtama} |\n`;
    });

    navigator.clipboard.writeText(md).then(() => {
      this.showToast("Ringkasan Markdown berhasil disalin ke Clipboard!", "success");
    });
  }

  // -----------------------------------------------------------------
  // TOAST NOTIFICATION UTILITY
  // -----------------------------------------------------------------
  showToast(message, type = "info") {
    const container = document.getElementById("toastContainer");
    if (!container) return;

    const toast = document.createElement("div");
    toast.className = `toast ${type}`;
    const icon = type === "success" ? `<i class="fa-solid fa-circle-check"></i>` : `<i class="fa-solid fa-circle-info"></i>`;
    toast.innerHTML = `${icon}<span>${message}</span>`;

    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateX(50px)";
      setTimeout(() => toast.remove(), 250);
    }, 3200);
  }
}

// Instantiate global app on DOM ready
let app;
document.addEventListener("DOMContentLoaded", () => {
  app = new AICandidateScreeningApp();
});
