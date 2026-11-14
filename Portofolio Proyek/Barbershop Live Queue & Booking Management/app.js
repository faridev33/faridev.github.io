/**
 * Barbershop Live Queue & Booking Management
 * Multi-Page Interactive Logic & Simulation Engine
 */

class BarbershopApp {
  constructor() {
    this.activeAdminTab = "antrian";
    this.currentBookingStep = 1;
    this.commissionPercent = 50;

    this.selectedBarber = "Budi Pratama";
    this.selectedServiceIds = [1, 3];
    this.lastCreatedTicket = null;

    // Shared Data Stores (persisted via sessionStorage for cross-page)
    this.services = JSON.parse(sessionStorage.getItem("bs_services")) || [
      { id: 1, nama: "Potong Rambut Classic", harga: 35000, durasi: 30, kategori: "Haircut", desc: "Potongan rambut rapi berkelas, fade, pompadour, atau taper cut." },
      { id: 2, nama: "Cukur Kumis & Jenggot (Shaving)", harga: 15000, durasi: 15, kategori: "Beard", desc: "Rapikan kumis & jenggot dengan razor presisi dan hot towel." },
      { id: 3, nama: "Cuci Rambut & Pijat Kepala", harga: 20000, durasi: 20, kategori: "Treatment", desc: "Keramas bersih dengan shampo premium dan relaksasi pijat leher." },
      { id: 4, nama: "Paket Ganteng Maksimal (Lengkap)", harga: 60000, durasi: 50, kategori: "Haircut", desc: "Potong rambut + cuci + shaving + tonic + pomade styling." },
      { id: 5, nama: "Hair Coloring & Bleaching", harga: 75000, durasi: 60, kategori: "Coloring", desc: "Pewarnaan rambut trendi (Ash grey, brown, blonde) berkilau." },
      { id: 6, nama: "Creambath & Face Massage", harga: 45000, durasi: 35, kategori: "Treatment", desc: "Perawatan kulit kepala dan pijatan rileks menyegarkan." }
    ];

    this.barbers = [
      { name: "Budi Pratama", role: "Senior Barber", spec: "Classic Fade & Pompadour", rating: 4.9, initial: "BP" },
      { name: "Rian Hidayat", role: "Styling Specialist", spec: "Textured Crop & Mullet", rating: 4.8, initial: "RH" },
      { name: "Dani Saputra", role: "Beard & Shave Expert", spec: "Hot Towel Shave & Beard", rating: 4.9, initial: "DS" },
      { name: "Siapa Saja", role: "Antrean Tercepat", spec: "Kapster yang Siap Pertama", rating: 4.8, initial: "⚡" }
    ];

    this.sessionsList = ["Sesi 1 (Pagi)", "Sesi 2 (Sore)", "Sesi 3 (Malam)"];

    this.queues = JSON.parse(sessionStorage.getItem("bs_queues")) || [
      { id: 1, noAntrian: 1, nama: "Ahmad Rizky", serviceNames: "Potong Rambut Classic + Cuci", harga: 55000, barber: "Budi Pratama", sesi: "Sesi 1 (Pagi)", status: "Selesai", waktu: "10:15" },
      { id: 2, noAntrian: 2, nama: "Dimas Anggara", serviceNames: "Potong Rambut Classic", harga: 35000, barber: "Rian Hidayat", sesi: "Sesi 1 (Pagi)", status: "Selesai", waktu: "11:30" },
      { id: 3, noAntrian: 3, nama: "Riko Saputra", serviceNames: "Potong Rambut Classic", harga: 35000, barber: "Budi Pratama", sesi: "Sesi 1 (Pagi)", status: "Diproses", waktu: "12:10" },
      { id: 4, noAntrian: 4, nama: "Faisal Tanjung", serviceNames: "Paket Ganteng Maksimal", harga: 60000, barber: "Rian Hidayat", sesi: "Sesi 2 (Sore)", status: "Diproses", waktu: "14:15" },
      { id: 5, noAntrian: 5, nama: "Ilham Ramadhan", serviceNames: "Cukur Kumis & Jenggot", harga: 15000, barber: "Dani Saputra", sesi: "Sesi 2 (Sore)", status: "Menunggu", waktu: "14:40" },
      { id: 6, noAntrian: 6, nama: "Kevin Sanjaya", serviceNames: "Potong Rambut Classic + Cukur", harga: 50000, barber: "Rian Hidayat", sesi: "Sesi 2 (Sore)", status: "Menunggu", waktu: "15:00" },
      { id: 7, noAntrian: 7, nama: "Bagus Setiawan", serviceNames: "Paket Ganteng Maksimal", harga: 60000, barber: "Dani Saputra", sesi: "Sesi 2 (Sore)", status: "Menunggu", waktu: "15:30" }
    ];

    this.transactions = JSON.parse(sessionStorage.getItem("bs_transactions")) || [
      { id: 101, noAntrian: 1, nama: "Ahmad Rizky", serviceNames: "Potong Rambut Classic + Cuci", harga: 55000, barber: "Budi Pratama", sesi: "Sesi 1 (Pagi)", waktu: "10:15 WIB" },
      { id: 102, noAntrian: 2, nama: "Dimas Anggara", serviceNames: "Potong Rambut Classic", harga: 35000, barber: "Rian Hidayat", sesi: "Sesi 1 (Pagi)", waktu: "11:30 WIB" },
      { id: 103, noAntrian: 8, nama: "Farhan Maulana", serviceNames: "Paket Ganteng Maksimal", harga: 60000, barber: "Budi Pratama", sesi: "Sesi 1 (Pagi)", waktu: "13:00 WIB" },
      { id: 104, noAntrian: 9, nama: "Hendra Wijaya", serviceNames: "Potong + Shaving", harga: 50000, barber: "Rian Hidayat", sesi: "Sesi 2 (Sore)", waktu: "14:45 WIB" },
      { id: 105, noAntrian: 10, nama: "Yoga Pratama", serviceNames: "Creambath & Face Massage", harga: 45000, barber: "Dani Saputra", sesi: "Sesi 2 (Sore)", waktu: "15:50 WIB" },
      { id: 106, noAntrian: 11, nama: "Rendra Kurnia", serviceNames: "Potong Rambut Classic", harga: 35000, barber: "Dani Saputra", sesi: "Sesi 3 (Malam)", waktu: "18:30 WIB" },
      { id: 107, noAntrian: 12, nama: "Bayu Pratama", serviceNames: "Potong Rambut Classic + Cuci", harga: 55000, barber: "Budi Pratama", sesi: "Sesi 3 (Malam)", waktu: "19:15 WIB" },
      { id: 108, noAntrian: 13, nama: "Doni Prasetyo", serviceNames: "Paket Ganteng Maksimal", harga: 60000, barber: "Budi Pratama", sesi: "Sesi 3 (Malam)", waktu: "20:00 WIB" },
      { id: 109, noAntrian: 14, nama: "Eko Cahyono", serviceNames: "Hair Coloring Ash Grey", harga: 75000, barber: "Rian Hidayat", sesi: "Sesi 1 (Pagi)", waktu: "11:00 WIB" },
      { id: 110, noAntrian: 15, nama: "Gideon Sanjaya", serviceNames: "Potong Rambut Classic", harga: 35000, barber: "Dani Saputra", sesi: "Sesi 3 (Malam)", waktu: "20:45 WIB" }
    ];

    this.init();
  }

  // ---------------------------------------------------------------
  // PERSISTENCE (sessionStorage for cross-page sync)
  // ---------------------------------------------------------------
  persist() {
    sessionStorage.setItem("bs_queues", JSON.stringify(this.queues));
    sessionStorage.setItem("bs_transactions", JSON.stringify(this.transactions));
    sessionStorage.setItem("bs_services", JSON.stringify(this.services));
  }

  // ---------------------------------------------------------------
  // INITIALIZATION (detects page and initializes relevant parts)
  // ---------------------------------------------------------------
  init() {
    this.initTheme();
    this.setupEventListeners();

    const isCustomerPage = !!document.getElementById("barberSelectionGrid");
    const isAdminPage = !!document.getElementById("adminQueueTableBody");

    if (isCustomerPage) {
      this.renderCustomerBarbers();
      this.renderCustomerServices();
      this.updateCustomerTotalDisplay();
      this.renderLiveRadarStats();
    }

    if (isAdminPage) {
      this.renderAdminQueueTable();
      this.renderRevenueAnalytics();
      this.renderServicesTable();
      this.renderTVScreen();
      this.startTVClock();
      this.renderLiveRadarStats();
    }
  }

  // ---------------------------------------------------------------
  // THEME (Dark & Light Mode)
  // ---------------------------------------------------------------
  initTheme() {
    const saved = localStorage.getItem("portfolio-theme") || "dark";
    this.applyTheme(saved, false);
  }

  applyTheme(theme, showToast = false) {
    const isDark = theme === "dark";
    document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
    localStorage.setItem("portfolio-theme", isDark ? "dark" : "light");

    const icon = document.getElementById("themeIcon");
    if (icon) icon.className = isDark ? "fa-solid fa-moon" : "fa-solid fa-sun";
    if (showToast) this.showToast(`Mode ${isDark ? "Gelap" : "Terang"} diaktifkan`, "info");
  }

  toggleTheme() {
    const cur = document.documentElement.getAttribute("data-theme") || "dark";
    this.applyTheme(cur === "dark" ? "light" : "dark", true);
  }

  // ---------------------------------------------------------------
  // ADMIN SIDEBAR
  // ---------------------------------------------------------------
  toggleSidebar() {
    const sidebar = document.getElementById("adminSidebar");
    if (!sidebar) return;
    // On mobile: toggle mobile-open; on desktop: toggle collapsed
    if (window.innerWidth <= 900) {
      sidebar.classList.toggle("mobile-open");
    } else {
      sidebar.classList.toggle("collapsed");
    }
  }

  switchAdminTab(tabName) {
    this.activeAdminTab = tabName;

    document.querySelectorAll(".sidebar-link[data-tab]").forEach(btn => {
      btn.classList.toggle("active", btn.dataset.tab === tabName);
    });

    document.querySelectorAll(".admin-tab-pane").forEach(pane => {
      pane.classList.toggle("active", pane.id === `adminPane-${tabName}`);
    });

    // Update topbar title
    const titles = {
      antrian: ["Live Queue Console", "Kelola antrean pelanggan secara real-time"],
      pendapatan: ["Analitik Pendapatan", "Bagi hasil komisi kapster & barbershop"],
      layanan: ["Katalog Layanan", "Daftar harga dan tarif layanan barbershop"],
      display: ["Layar TV & QR Code", "Simulasi layar antrean ruang tunggu dan QR meja"],
      arsitektur: ["Arsitektur Sistem", "Alur kerja dan teknologi yang digunakan"]
    };
    const t = titles[tabName] || ["Dashboard", ""];
    const titleEl = document.getElementById("topbarPageTitle");
    const subEl = document.getElementById("topbarPageSub");
    if (titleEl) titleEl.textContent = t[0];
    if (subEl) subEl.textContent = t[1];

    // Close mobile sidebar after selection
    const sidebar = document.getElementById("adminSidebar");
    if (sidebar && window.innerWidth <= 900) {
      sidebar.classList.remove("mobile-open");
    }
  }

  // ---------------------------------------------------------------
  // EVENT LISTENERS
  // ---------------------------------------------------------------
  setupEventListeners() {
    const themeBtn = document.getElementById("themeToggleBtn");
    if (themeBtn) themeBtn.addEventListener("click", () => this.toggleTheme());
  }

  // ---------------------------------------------------------------
  // AUDIO BELL (Web Audio API)
  // ---------------------------------------------------------------
  playAudioBell() {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      const ctx = new AudioContext();
      const now = ctx.currentTime;

      const osc1 = ctx.createOscillator();
      const gain1 = ctx.createGain();
      osc1.type = "sine";
      osc1.frequency.setValueAtTime(587.33, now);
      gain1.gain.setValueAtTime(0.3, now);
      gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.8);
      osc1.connect(gain1); gain1.connect(ctx.destination);
      osc1.start(now); osc1.stop(now + 0.8);

      const osc2 = ctx.createOscillator();
      const gain2 = ctx.createGain();
      osc2.type = "sine";
      osc2.frequency.setValueAtTime(880, now + 0.35);
      gain2.gain.setValueAtTime(0.35, now + 0.35);
      gain2.gain.exponentialRampToValueAtTime(0.001, now + 1.2);
      osc2.connect(gain2); gain2.connect(ctx.destination);
      osc2.start(now + 0.35); osc2.stop(now + 1.2);
    } catch (e) { /* Audio not available */ }
  }

  // ---------------------------------------------------------------
  // CUSTOMER BOOKING FLOW
  // ---------------------------------------------------------------
  renderCustomerBarbers() {
    const grid = document.getElementById("barberSelectionGrid");
    if (!grid) return;
    grid.innerHTML = "";

    this.barbers.forEach(b => {
      const isSelected = b.name === this.selectedBarber;
      const card = document.createElement("div");
      card.className = `barber-card-opt ${isSelected ? 'selected' : ''}`;
      card.onclick = () => this.selectBarber(b.name);
      card.innerHTML = `
        <i class="fa-solid fa-circle-check barber-check-badge"></i>
        <div class="barber-avatar">${b.initial}</div>
        <div class="barber-name-opt">${b.name}</div>
        <div class="barber-role-opt">${b.spec}</div>
        <div style="font-size:11px;color:var(--amber-500);margin-top:4px;">
          <i class="fa-solid fa-star"></i> ${b.rating}
        </div>
      `;
      grid.appendChild(card);
    });
  }

  selectBarber(name) {
    this.selectedBarber = name;
    this.renderCustomerBarbers();
  }

  renderCustomerServices() {
    const grid = document.getElementById("customerServiceCardsGrid");
    if (!grid) return;
    grid.innerHTML = "";

    this.services.forEach(s => {
      const isChecked = this.selectedServiceIds.includes(s.id);
      const card = document.createElement("div");
      card.className = `service-card-item ${isChecked ? 'selected' : ''}`;
      card.onclick = () => this.toggleServiceSelection(s.id);
      card.innerHTML = `
        <div class="svc-checkbox-box">${isChecked ? '<i class="fa-solid fa-check"></i>' : ''}</div>
        <div class="svc-info">
          <div class="svc-title">${s.nama}</div>
          <div class="svc-desc">${s.desc}</div>
          <div class="svc-meta-row">
            <span class="svc-duration"><i class="fa-solid fa-clock"></i> ~${s.durasi} Menit</span>
            <span class="svc-price">Rp ${s.harga.toLocaleString("id-ID")}</span>
          </div>
        </div>
      `;
      grid.appendChild(card);
    });
  }

  toggleServiceSelection(serviceId) {
    if (this.selectedServiceIds.includes(serviceId)) {
      this.selectedServiceIds = this.selectedServiceIds.filter(id => id !== serviceId);
    } else {
      this.selectedServiceIds.push(serviceId);
    }
    this.renderCustomerServices();
    this.updateCustomerTotalDisplay();
  }

  updateCustomerTotalDisplay() {
    const total = this.calculateSelectedTotal();
    const count = this.selectedServiceIds.length;

    const priceDisplay = document.getElementById("custTotalPriceDisplay");
    const countDisplay = document.getElementById("custSelectedServicesLabel");
    const qrisAmount = document.getElementById("qrisAmountText");

    if (priceDisplay) priceDisplay.textContent = `Rp ${total.toLocaleString("id-ID")}`;
    if (countDisplay) countDisplay.textContent = `${count} Layanan Dipilih`;
    if (qrisAmount) qrisAmount.textContent = `Rp ${total.toLocaleString("id-ID")}`;
  }

  calculateSelectedTotal() {
    return this.services
      .filter(s => this.selectedServiceIds.includes(s.id))
      .reduce((sum, item) => sum + item.harga, 0);
  }

  goToBookingStep(step) {
    if (step === 2) {
      const name = document.getElementById("custInputName")?.value.trim();
      if (!name) { this.showToast("Silakan masukkan nama Anda!", "info"); return; }
    }
    if (step === 3 && this.selectedServiceIds.length === 0) {
      this.showToast("Pilih minimal 1 layanan!", "info"); return;
    }

    this.currentBookingStep = step;

    for (let i = 1; i <= 4; i++) {
      const indicator = document.getElementById(`stepIndicator${i}`);
      const line = document.getElementById(`stepLine${i - 1}`);
      const panel = document.getElementById(`panelStep${i}`);
      if (indicator) indicator.className = `step-indicator ${i === step ? 'active' : i < step ? 'done' : ''}`;
      if (line) line.className = `step-line ${i <= step ? 'done' : ''}`;
      if (panel) panel.className = `step-panel ${i === step ? 'active' : ''}`;
    }

    window.scrollTo({ top: 120, behavior: "smooth" });
  }

  completePaymentAndCreateQueue() {
    const custName = document.getElementById("custInputName")?.value.trim() || "Pelanggan Baru";
    const selectedSvcObjects = this.services.filter(s => this.selectedServiceIds.includes(s.id));
    const serviceNames = selectedSvcObjects.map(s => s.nama).join(" + ");
    const totalPrice = this.calculateSelectedTotal();

    const nextQueueNum = this.queues.length + 1;
    const now = new Date();
    const timeStr = `${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}`;

    const currentHour = now.getHours();
    let currentSesi = "Sesi 2 (Sore)";
    if (currentHour < 14) currentSesi = "Sesi 1 (Pagi)";
    else if (currentHour >= 18) currentSesi = "Sesi 3 (Malam)";

    const newQueueItem = {
      id: Date.now(),
      noAntrian: nextQueueNum,
      nama: custName,
      serviceNames,
      harga: totalPrice,
      barber: this.selectedBarber === "Siapa Saja" ? "Budi Pratama" : this.selectedBarber,
      sesi: currentSesi,
      status: "Menunggu",
      waktu: timeStr
    };

    this.queues.push(newQueueItem);
    this.lastCreatedTicket = newQueueItem;
    this.persist();

    // Update ticket display
    const el = (id) => document.getElementById(id);
    if (el("ticketNumberDisplay")) el("ticketNumberDisplay").textContent = `#${String(nextQueueNum).padStart(2,'0')}`;
    if (el("ticketCustomerName")) el("ticketCustomerName").textContent = custName;
    if (el("ticketBarberName")) el("ticketBarberName").textContent = newQueueItem.barber;
    if (el("ticketServiceList")) el("ticketServiceList").textContent = serviceNames;
    if (el("ticketSessionName")) el("ticketSessionName").textContent = currentSesi;
    if (el("ticketTotalPaid")) el("ticketTotalPaid").textContent = `Rp ${totalPrice.toLocaleString("id-ID")} (Lunas)`;

    this.renderLiveRadarStats();
    this.playAudioBell();
    this.goToBookingStep(4);
    this.showToast(`Pembayaran Berhasil! Nomor Antrean Anda: #${nextQueueNum}`, "success");
  }

  saveTicketNotification() {
    this.showToast("Tiket antrean digital berhasil diunduh!", "success");
  }

  resetCustomerBooking() {
    this.selectedServiceIds = [1];
    this.selectedBarber = "Budi Pratama";
    this.renderCustomerBarbers();
    this.renderCustomerServices();
    this.updateCustomerTotalDisplay();
    this.goToBookingStep(1);
  }

  // ---------------------------------------------------------------
  // LIVE RADAR STATS (shared between pages)
  // ---------------------------------------------------------------
  renderLiveRadarStats() {
    const servingItem = this.queues.find(q => q.status === "Diproses");
    const waitingItems = this.queues.filter(q => q.status === "Menunggu");
    const completedItems = this.queues.filter(q => q.status === "Selesai");
    const processingItems = this.queues.filter(q => q.status === "Diproses");

    const servingStr = servingItem ? `#${String(servingItem.noAntrian).padStart(2,'0')}` : "#--";
    const servingDetail = servingItem ? `${servingItem.nama} • ${servingItem.barber}` : "Belum ada giliran aktif";

    const el = (id) => document.getElementById(id);

    // Header pill
    if (el("headerServingNumber")) el("headerServingNumber").textContent = servingItem ? `${servingStr} (${servingItem.barber.split(" ")[0]})` : "#Siap";
    if (el("headerQueueWaiting")) el("headerQueueWaiting").textContent = `${waitingItems.length} Menunggu`;

    // Customer radar
    if (el("custServingNum")) el("custServingNum").textContent = servingStr;
    if (el("custServingDetail")) el("custServingDetail").textContent = servingDetail;
    if (el("custWaitingNum")) el("custWaitingNum").textContent = `${waitingItems.length} Orang`;
    if (el("custWaitTime")) el("custWaitTime").textContent = `~${waitingItems.length * 15} Menit`;

    // Admin badges
    if (el("badgeQueueCount")) el("badgeQueueCount").textContent = waitingItems.length;
    if (el("adminTotalQueue")) el("adminTotalQueue").textContent = this.queues.length;
    if (el("adminWaitingCount")) el("adminWaitingCount").textContent = waitingItems.length;
    if (el("adminProcessingCount")) el("adminProcessingCount").textContent = processingItems.length;
    if (el("adminCompletedCount")) el("adminCompletedCount").textContent = completedItems.length;
  }

  // ---------------------------------------------------------------
  // ADMIN: QUEUE TABLE
  // ---------------------------------------------------------------
  renderAdminQueueTable() {
    const tbody = document.getElementById("adminQueueTableBody");
    if (!tbody) return;
    tbody.innerHTML = "";

    const statusFilter = document.getElementById("queueStatusFilter")?.value || "semua";
    const sessionFilter = document.getElementById("queueSessionFilter")?.value || "semua";
    const searchTerm = (document.getElementById("queueSearchInput")?.value || "").toLowerCase();

    let filtered = this.queues.filter(item => {
      const matchStatus = statusFilter === "semua" || item.status === statusFilter;
      const matchSession = sessionFilter === "semua" || item.sesi === sessionFilter;
      const matchSearch = item.nama.toLowerCase().includes(searchTerm) || item.barber.toLowerCase().includes(searchTerm);
      return matchStatus && matchSession && matchSearch;
    });

    const countLabel = document.getElementById("antrianTableCount");
    if (countLabel) countLabel.textContent = filtered.length;

    if (filtered.length === 0) {
      tbody.innerHTML = `<tr><td colspan="8" style="text-align:center;padding:24px;color:var(--text-muted);">Tidak ada antrean yang cocok dengan filter.</td></tr>`;
      return;
    }

    filtered.forEach(q => {
      const tr = document.createElement("tr");

      const statusBadge = q.status === "Menunggu"
        ? `<span class="status-pill menunggu"><i class="fa-solid fa-clock"></i> Menunggu</span>`
        : q.status === "Diproses"
        ? `<span class="status-pill diproses"><i class="fa-solid fa-scissors"></i> Diproses</span>`
        : `<span class="status-pill selesai"><i class="fa-solid fa-check"></i> Selesai</span>`;

      const barberOptions = this.barbers
        .filter(b => b.name !== "Siapa Saja")
        .map(b => `<option value="${b.name}" ${b.name === q.barber ? 'selected' : ''}>${b.name}</option>`)
        .join("");

      const sessionOptions = this.sessionsList
        .map(s => `<option value="${s}" ${s === q.sesi ? 'selected' : ''}>${s}</option>`)
        .join("");

      let actionButtons = "";
      if (q.status === "Menunggu") {
        actionButtons = `
          <button class="btn-action-icon btn-call" title="Panggil" onclick="app.updateQueueStatus(${q.id},'Diproses')"><i class="fa-solid fa-bell"></i> Panggil</button>
          <button class="btn-action-icon btn-done" title="Selesai" onclick="app.updateQueueStatus(${q.id},'Selesai')"><i class="fa-solid fa-check"></i></button>
          <button class="btn-action-icon btn-del" title="Hapus" onclick="app.deleteQueue(${q.id})"><i class="fa-solid fa-trash-can"></i></button>
        `;
      } else if (q.status === "Diproses") {
        actionButtons = `
          <button class="btn-action-icon btn-done" title="Selesai" onclick="app.updateQueueStatus(${q.id},'Selesai')"><i class="fa-solid fa-check-double"></i> Selesai</button>
          <button class="btn-action-icon btn-call" title="Panggil Ulang" onclick="app.callQueueBell(${q.noAntrian},'${q.nama}')"><i class="fa-solid fa-volume-high"></i></button>
        `;
      } else {
        actionButtons = `<span style="font-size:11.5px;color:var(--emerald-500);font-weight:700;"><i class="fa-solid fa-circle-check"></i> Lunas</span>`;
      }

      tr.innerHTML = `
        <td style="text-align:center;font-weight:900;font-family:var(--font-mono);color:var(--blue-400);">#${String(q.noAntrian).padStart(2,'0')}</td>
        <td><div style="font-weight:800;color:var(--text-white);">${q.nama}</div><div style="font-size:11px;color:var(--text-muted);">${q.waktu} WIB</div></td>
        <td style="font-size:12.5px;max-width:200px;">${q.serviceNames}</td>
        <td>${q.status==='Selesai' ? `<strong style="color:var(--blue-400);">${q.barber}</strong>` : `<select class="form-control-sm" onchange="app.updateQueueBarber(${q.id},this.value)">${barberOptions}</select>`}</td>
        <td>${q.status==='Selesai' ? `<span style="font-size:12px;color:var(--text-muted);">${q.sesi}</span>` : `<select class="form-control-sm" onchange="app.updateQueueSession(${q.id},this.value)">${sessionOptions}</select>`}</td>
        <td style="font-weight:800;font-family:var(--font-mono);color:var(--emerald-500);">Rp ${q.harga.toLocaleString("id-ID")}</td>
        <td style="text-align:center;">${statusBadge}</td>
        <td style="text-align:center;"><div class="action-btns-group">${actionButtons}</div></td>
      `;
      tbody.appendChild(tr);
    });
  }

  filterQueueTable() { this.renderAdminQueueTable(); }

  updateQueueStatus(id, newStatus) {
    const item = this.queues.find(q => q.id === id);
    if (!item) return;
    item.status = newStatus;

    if (newStatus === "Diproses") {
      this.playAudioBell();
      this.showToast(`#${item.noAntrian} (${item.nama}) dipanggil ke kursi!`, "info");
    } else if (newStatus === "Selesai") {
      this.transactions.unshift({
        id: Date.now(), noAntrian: item.noAntrian, nama: item.nama,
        serviceNames: item.serviceNames, harga: item.harga,
        barber: item.barber, sesi: item.sesi, waktu: `${item.waktu} WIB`
      });
      this.showToast(`#${item.noAntrian} (${item.nama}) selesai! Pendapatan dicatat.`, "success");
    }

    this.persist();
    this.renderLiveRadarStats();
    this.renderAdminQueueTable();
    this.renderRevenueAnalytics();
    this.renderTVScreen();
  }

  callQueueBell(noAntrian, nama) {
    this.playAudioBell();
    this.showToast(`Memanggil #${noAntrian} atas nama ${nama}!`, "info");
  }

  updateQueueBarber(id, newBarber) {
    const item = this.queues.find(q => q.id === id);
    if (item) {
      item.barber = newBarber;
      this.persist();
      this.renderLiveRadarStats();
      this.renderTVScreen();
      this.showToast(`Kapster #${item.noAntrian} → ${newBarber}`, "info");
    }
  }

  updateQueueSession(id, newSession) {
    const item = this.queues.find(q => q.id === id);
    if (item) {
      item.sesi = newSession;
      this.persist();
      this.showToast(`Sesi #${item.noAntrian} → ${newSession}`, "info");
    }
  }

  deleteQueue(id) {
    if (confirm("Yakin ingin membatalkan antrean ini?")) {
      this.queues = this.queues.filter(q => q.id !== id);
      this.persist();
      this.renderLiveRadarStats();
      this.renderAdminQueueTable();
      this.renderTVScreen();
      this.showToast("Antrean berhasil dihapus.", "info");
    }
  }

  // ---------------------------------------------------------------
  // MANUAL WALK-IN MODAL
  // ---------------------------------------------------------------
  openManualQueueModal() {
    const select = document.getElementById("manualServiceSelect");
    if (select) {
      select.innerHTML = this.services
        .map(s => `<option value="${s.id}">${s.nama} - Rp ${s.harga.toLocaleString("id-ID")}</option>`)
        .join("");
    }
    document.getElementById("manualQueueModal")?.classList.add("active");
  }
  closeManualQueueModal() {
    document.getElementById("manualQueueModal")?.classList.remove("active");
  }

  handleManualQueueSubmit(e) {
    e.preventDefault();
    const name = document.getElementById("manualCustName")?.value.trim();
    const serviceId = parseInt(document.getElementById("manualServiceSelect")?.value);
    const barber = document.getElementById("manualBarberSelect")?.value;
    const session = document.getElementById("manualSessionSelect")?.value;
    const svc = this.services.find(s => s.id === serviceId);
    if (!name || !svc) return;

    const nextQueueNum = this.queues.length + 1;
    const now = new Date();
    const timeStr = `${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}`;

    this.queues.push({
      id: Date.now(), noAntrian: nextQueueNum, nama: name,
      serviceNames: svc.nama, harga: svc.harga, barber, sesi: session,
      status: "Menunggu", waktu: timeStr
    });

    document.getElementById("manualCustName").value = "";
    this.closeManualQueueModal();
    this.persist();
    this.renderLiveRadarStats();
    this.renderAdminQueueTable();
    this.renderTVScreen();
    this.playAudioBell();
    this.showToast(`Walk-in #${nextQueueNum} (${name}) didaftarkan!`, "success");
  }

  // ---------------------------------------------------------------
  // REVENUE ANALYTICS
  // ---------------------------------------------------------------
  updateCommissionSlider(val) {
    this.commissionPercent = parseInt(val);
    const shopPercent = 100 - this.commissionPercent;
    const el = (id) => document.getElementById(id);
    if (el("labelBarberComm")) el("labelBarberComm").textContent = `${this.commissionPercent}%`;
    if (el("labelShopComm")) el("labelShopComm").textContent = `${shopPercent}%`;
    document.querySelectorAll(".comm-var").forEach(e => e.textContent = `${this.commissionPercent}%`);
    document.querySelectorAll(".shop-comm-var").forEach(e => e.textContent = `${shopPercent}%`);
    this.renderRevenueAnalytics();
  }

  renderRevenueAnalytics() {
    const k = this.commissionPercent;
    const s = 100 - k;
    const el = (id) => document.getElementById(id);

    const sesi1 = this.transactions.filter(t => t.sesi.includes("Pagi"));
    const sesi2 = this.transactions.filter(t => t.sesi.includes("Sore"));
    const sesi3 = this.transactions.filter(t => t.sesi.includes("Malam"));

    const omset1 = sesi1.reduce((a, t) => a + t.harga, 0);
    const omset2 = sesi2.reduce((a, t) => a + t.harga, 0);
    const omset3 = sesi3.reduce((a, t) => a + t.harga, 0);

    if (el("sessCount1")) el("sessCount1").textContent = `${sesi1.length} Orang`;
    if (el("sessOmset1")) el("sessOmset1").textContent = `Rp ${omset1.toLocaleString("id-ID")}`;
    if (el("sessBarber1")) el("sessBarber1").textContent = `Rp ${(omset1*k/100).toLocaleString("id-ID")}`;
    if (el("sessShop1")) el("sessShop1").textContent = `Rp ${(omset1*s/100).toLocaleString("id-ID")}`;

    if (el("sessCount2")) el("sessCount2").textContent = `${sesi2.length} Orang`;
    if (el("sessOmset2")) el("sessOmset2").textContent = `Rp ${omset2.toLocaleString("id-ID")}`;
    if (el("sessBarber2")) el("sessBarber2").textContent = `Rp ${(omset2*k/100).toLocaleString("id-ID")}`;
    if (el("sessShop2")) el("sessShop2").textContent = `Rp ${(omset2*s/100).toLocaleString("id-ID")}`;

    if (el("sessCount3")) el("sessCount3").textContent = `${sesi3.length} Orang`;
    if (el("sessOmset3")) el("sessOmset3").textContent = `Rp ${omset3.toLocaleString("id-ID")}`;
    if (el("sessBarber3")) el("sessBarber3").textContent = `Rp ${(omset3*k/100).toLocaleString("id-ID")}`;
    if (el("sessShop3")) el("sessShop3").textContent = `Rp ${(omset3*s/100).toLocaleString("id-ID")}`;

    const totalGross = this.transactions.reduce((a, t) => a + t.harga, 0);
    if (el("totalRevenueCount")) el("totalRevenueCount").textContent = `${this.transactions.length} Orang`;
    if (el("totalRevenueGross")) el("totalRevenueGross").textContent = `Rp ${totalGross.toLocaleString("id-ID")}`;
    if (el("totalRevenueBarberComm")) el("totalRevenueBarberComm").textContent = `Rp ${(totalGross*k/100).toLocaleString("id-ID")}`;
    if (el("totalRevenueNetShop")) el("totalRevenueNetShop").textContent = `Rp ${(totalGross*s/100).toLocaleString("id-ID")}`;

    // Barber breakdown table
    const barberBody = document.getElementById("barberRevenueTableBody");
    if (barberBody) {
      barberBody.innerHTML = "";
      const map = {};
      this.transactions.forEach(t => {
        if (!map[t.barber]) map[t.barber] = { name: t.barber, totalOmset: 0, count: 0, sessions: new Set() };
        map[t.barber].totalOmset += t.harga;
        map[t.barber].count += 1;
        map[t.barber].sessions.add(t.sesi.split(" ").slice(0,2).join(" "));
      });

      Object.values(map).sort((a,b) => b.totalOmset - a.totalOmset).forEach((b, idx) => {
        const comm = (b.totalOmset * k) / 100;
        const shop = (b.totalOmset * s) / 100;
        const avg = b.count > 0 ? Math.round(b.totalOmset / b.count) : 0;
        const sessBadge = Array.from(b.sessions).map(ss => `<span class="badge-mini" style="font-size:10px;">${ss}</span>`).join(" ");
        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td style="font-weight:800;color:var(--blue-400);">#${idx+1}</td>
          <td><strong style="color:var(--text-white);">${b.name}</strong><div style="font-size:11px;color:var(--text-muted);">Kapster</div></td>
          <td>${sessBadge}</td>
          <td style="text-align:center;font-weight:800;font-family:var(--font-mono);">${b.count}</td>
          <td style="font-weight:800;font-family:var(--font-mono);color:var(--text-white);">Rp ${b.totalOmset.toLocaleString("id-ID")}</td>
          <td style="font-weight:800;font-family:var(--font-mono);color:var(--emerald-500);">Rp ${comm.toLocaleString("id-ID")}</td>
          <td style="font-weight:800;font-family:var(--font-mono);color:var(--blue-400);">Rp ${shop.toLocaleString("id-ID")}</td>
          <td style="font-family:var(--font-mono);color:var(--text-secondary);">Rp ${avg.toLocaleString("id-ID")}</td>
        `;
        barberBody.appendChild(tr);
      });
    }

    // Transactions table
    const transBody = document.getElementById("allTransactionsTableBody");
    if (el("transCountLabel")) el("transCountLabel").textContent = this.transactions.length;
    if (transBody) {
      transBody.innerHTML = "";
      this.transactions.forEach(t => {
        const comm = (t.harga * k) / 100;
        const shop = (t.harga * s) / 100;
        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td style="font-size:12px;color:var(--text-muted);">${t.waktu}</td>
          <td><strong style="color:var(--text-white);">${t.nama}</strong></td>
          <td style="font-size:12px;max-width:220px;">${t.serviceNames}</td>
          <td><strong style="color:var(--blue-400);">${t.barber}</strong></td>
          <td style="font-size:12px;">${t.sesi}</td>
          <td style="font-weight:800;font-family:var(--font-mono);color:var(--text-white);">Rp ${t.harga.toLocaleString("id-ID")}</td>
          <td style="font-weight:700;font-family:var(--font-mono);color:var(--emerald-500);">Rp ${comm.toLocaleString("id-ID")}</td>
          <td style="font-weight:700;font-family:var(--font-mono);color:var(--blue-400);">Rp ${shop.toLocaleString("id-ID")}</td>
        `;
        transBody.appendChild(tr);
      });
    }
  }

  exportRevenueCSV() {
    let csv = "ID,Waktu,Pelanggan,Layanan,Kapster,Sesi,Harga,Komisi Kapster,Bagian Barbershop\n";
    const k = this.commissionPercent;
    const s = 100 - k;
    this.transactions.forEach(t => {
      csv += `${t.id},"${t.waktu}","${t.nama}","${t.serviceNames}","${t.barber}","${t.sesi}",${t.harga},${(t.harga*k/100)},${(t.harga*s/100)}\n`;
    });
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `Laporan_Barbershop_${Date.now()}.csv`;
    a.click();
    URL.revokeObjectURL(a.href);
    this.showToast("Laporan CSV berhasil diunduh!", "success");
  }

  // ---------------------------------------------------------------
  // SERVICES MANAGEMENT
  // ---------------------------------------------------------------
  renderServicesTable() {
    const tbody = document.getElementById("servicesTableBody");
    const badge = document.getElementById("badgeServiceCount");
    if (badge) badge.textContent = this.services.length;
    if (!tbody) return;
    tbody.innerHTML = "";

    this.services.forEach((s, idx) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td style="text-align:center;font-weight:800;color:var(--text-muted);">${idx+1}</td>
        <td><div style="font-weight:800;color:var(--text-white);">${s.nama}</div><div style="font-size:11.5px;color:var(--text-secondary);">${s.desc}</div></td>
        <td><span class="badge-mini"><i class="fa-solid fa-clock"></i> ~${s.durasi} Menit</span></td>
        <td style="font-weight:800;font-family:var(--font-mono);color:var(--emerald-500);font-size:14px;">Rp ${s.harga.toLocaleString("id-ID")}</td>
        <td><span style="font-size:11px;padding:2px 8px;border-radius:4px;background:rgba(59,130,246,0.15);color:var(--blue-400);">${s.kategori}</span></td>
        <td style="text-align:center;"><button class="btn-action-icon btn-del" onclick="app.deleteService(${s.id})" title="Hapus"><i class="fa-solid fa-trash-can"></i></button></td>
      `;
      tbody.appendChild(tr);
    });
  }

  deleteService(id) {
    if (confirm("Hapus layanan ini?")) {
      this.services = this.services.filter(s => s.id !== id);
      this.persist();
      this.renderServicesTable();
      this.showToast("Layanan dihapus.", "info");
    }
  }

  openAddServiceModal() {
    document.getElementById("addServiceModal")?.classList.add("active");
  }
  closeAddServiceModal() {
    document.getElementById("addServiceModal")?.classList.remove("active");
  }

  handleAddServiceSubmit(e) {
    e.preventDefault();
    const nama = document.getElementById("newServiceName")?.value.trim();
    const harga = parseInt(document.getElementById("newServicePrice")?.value);
    const durasi = parseInt(document.getElementById("newServiceDuration")?.value);
    const kategori = document.getElementById("newServiceCategory")?.value;
    if (!nama || !harga) return;

    this.services.push({
      id: Date.now(), nama, harga, durasi: durasi || 25, kategori,
      desc: "Layanan profesional baru di Barbershop Premier & Co."
    });

    document.getElementById("newServiceName").value = "";
    document.getElementById("newServicePrice").value = "";
    document.getElementById("newServiceDuration").value = "";

    this.closeAddServiceModal();
    this.persist();
    this.renderServicesTable();
    this.showToast(`Layanan "${nama}" ditambahkan!`, "success");
  }

  // ---------------------------------------------------------------
  // TV DISPLAY
  // ---------------------------------------------------------------
  renderTVScreen() {
    const el = (id) => document.getElementById(id);
    const activeChairs = this.queues.filter(q => q.status === "Diproses");
    const upcoming = this.queues.filter(q => q.status === "Menunggu");

    [["tvChair1Num","tvChair1Name","tvChair1Service"],
     ["tvChair2Num","tvChair2Name","tvChair2Service"],
     ["tvChair3Num","tvChair3Name","tvChair3Service"]].forEach(([numId,nameId,svcId], i) => {
      const c = activeChairs[i];
      if (c) {
        if (el(numId)) el(numId).textContent = `#${String(c.noAntrian).padStart(2,'0')}`;
        if (el(nameId)) el(nameId).textContent = c.nama;
        if (el(svcId)) el(svcId).textContent = c.serviceNames;
      } else {
        if (el(numId)) el(numId).textContent = "SIAP";
        if (el(nameId)) el(nameId).textContent = i < 2 ? "Kursi Kosong" : "Kursi Siap";
        if (el(svcId)) el(svcId).textContent = upcoming[0] ? `Berikutnya: #${String(upcoming[0].noAntrian).padStart(2,'0')}` : "Tidak ada antrean";
      }
    });

    const ticker = el("tvNextQueueTicker");
    if (ticker) {
      ticker.innerHTML = upcoming.length === 0
        ? `<span class="ticker-item">Semua antrean dilayani / kosong</span>`
        : upcoming.map(q => `<span class="ticker-item">#${String(q.noAntrian).padStart(2,'0')} - ${q.nama}</span>`).join("");
    }
  }

  startTVClock() {
    const update = () => {
      const now = new Date();
      const str = `${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}:${String(now.getSeconds()).padStart(2,'0')} WIB`;
      const clockEl = document.getElementById("tvLiveClock");
      if (clockEl) clockEl.textContent = str;
    };
    update();
    setInterval(update, 1000);
  }

  // ---------------------------------------------------------------
  // TOAST
  // ---------------------------------------------------------------
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

// Global App Instance
let app;
document.addEventListener("DOMContentLoaded", () => {
  app = new BarbershopApp();
});
