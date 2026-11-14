/**
 * Cafe Fari Portfolio Navigation Bar
 * Helper banner to switch between screens easily in demo mode
 */
(function() {
  function renderDemoNav() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    const banner = document.createElement('div');
    banner.className = 'demo-role-banner';
    banner.innerHTML = `
      <div class="brand-tag">
        <span>☕</span>
        <strong>CAFE FARI</strong>
        <span style="opacity:0.6;font-weight:normal;">| Full HTML Frontend Showcase</span>
      </div>
      <div class="role-nav-links">
        <a href="../../index.html" class="role-chip" style="background:rgba(37,99,235,0.25); border:1px solid #3b82f6; color:#93c5fd;">🏠 Portofolio Utama</a>
        <a href="index.html" class="role-chip ${currentPage === 'index.html' || currentPage === '' ? 'active' : ''}">🔐 Login</a>
        <a href="customer-menu.html?table=1" class="role-chip ${currentPage === 'customer-menu.html' ? 'active' : ''}">📱 QR Menu Meja 1</a>
        <a href="customer-order.html?table=1" class="role-chip ${currentPage === 'customer-order.html' ? 'active' : ''}">🛒 Keranjang</a>
        <a href="customer-status.html?table=1" class="role-chip ${currentPage === 'customer-status.html' ? 'active' : ''}">⏱️ Status Pesanan</a>
        <a href="kitchen-dashboard.html" class="role-chip ${currentPage === 'kitchen-dashboard.html' ? 'active' : ''}">🍳 Dapur (KDS)</a>
        <a href="kitchen-menu.html" class="role-chip ${currentPage === 'kitchen-menu.html' ? 'active' : ''}">📦 Stok Dapur</a>
        <a href="cashier-payment.html" class="role-chip ${currentPage === 'cashier-payment.html' ? 'active' : ''}">💵 Kasir Bayar</a>
        <a href="cashier-dashboard.html" class="role-chip ${currentPage === 'cashier-dashboard.html' ? 'active' : ''}">📊 Kasir Dash</a>
        <a href="admin-dashboard.html" class="role-chip ${currentPage.startsWith('admin-') ? 'active' : ''}">👑 Super Admin</a>
        <a href="waiter.html" class="role-chip ${currentPage === 'waiter.html' ? 'active' : ''}">🧑‍🍳 Waiter</a>
        <button type="button" class="btn-reset-db" title="Kembalikan data contoh awal">🔄 Reset Data</button>
      </div>
    `;

    document.body.prepend(banner);

    // Reset data button event
    banner.querySelector('.btn-reset-db').addEventListener('click', function() {
      if (confirm('Reset ulang data demo (menu, pesanan aktif, transaksi) ke default awal?')) {
        if (window.CafeStore) {
          window.CafeStore.reset();
          alert('Data berhasil di-reset!');
          window.location.reload();
        }
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderDemoNav);
  } else {
    renderDemoNav();
  }
})();
