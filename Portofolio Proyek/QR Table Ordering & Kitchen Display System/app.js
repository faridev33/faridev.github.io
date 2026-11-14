// QR Table Ordering & KDS - Interactive Application Logic
document.addEventListener('DOMContentLoaded', () => {
  const modeBtns = document.querySelectorAll('.mode-btn');
  const modeViews = document.querySelectorAll('.mode-view');
  const catPills = document.querySelectorAll('.cat-pill');
  const productCards = document.querySelectorAll('.product-card');

  const addBtns = document.querySelectorAll('.btn-add-cart');
  const cartList = document.getElementById('cartItemsList');
  const emptyCart = document.getElementById('emptyCart');
  const cartCountBadge = document.getElementById('cartCountBadge');
  const subtotalVal = document.getElementById('subtotalVal');
  const taxVal = document.getElementById('taxVal');
  const totalVal = document.getElementById('totalVal');
  const btnSendOrder = document.getElementById('btnSendOrder');
  const kdsBadge = document.getElementById('kdsBadge');
  const kdsTicketsGrid = document.getElementById('kdsTicketsGrid');

  let cart = [];

  // Mode switching (Customer / Kitchen / Cashier)
  modeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetMode = btn.dataset.mode;
      modeBtns.forEach(b => b.classList.remove('active'));
      modeViews.forEach(v => v.classList.remove('active'));

      btn.classList.add('active');
      const targetView = document.getElementById(`mode-${targetMode}`);
      if (targetView) targetView.classList.add('active');
    });
  });

  // Category filter
  catPills.forEach(pill => {
    pill.addEventListener('click', () => {
      const cat = pill.dataset.cat;
      catPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      productCards.forEach(card => {
        if (cat === 'all' || card.dataset.cat === cat) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Add to cart
  addBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.id;
      const name = btn.dataset.name;
      const price = parseInt(btn.dataset.price);

      const existing = cart.find(item => item.id === id);
      if (existing) {
        existing.qty += 1;
      } else {
        cart.push({ id, name, price, qty: 1 });
      }

      renderCart();
      btn.textContent = '✔️ Ditambah';
      setTimeout(() => { btn.textContent = '➕ Tambah'; }, 800);
    });
  });

  function renderCart() {
    if (cart.length === 0) {
      emptyCart.style.display = 'block';
      cartList.innerHTML = '';
      cartList.appendChild(emptyCart);
      cartCountBadge.textContent = '0 Item';
      subtotalVal.textContent = 'Rp 0';
      taxVal.textContent = 'Rp 0';
      totalVal.textContent = 'Rp 0';
      btnSendOrder.disabled = true;
      return;
    }

    emptyCart.style.display = 'none';
    cartList.innerHTML = '';

    let subtotal = 0;
    let totalItems = 0;

    cart.forEach(item => {
      const itemSubtotal = item.price * item.qty;
      subtotal += itemSubtotal;
      totalItems += item.qty;

      const row = document.createElement('div');
      row.className = 'cart-item-row';
      row.innerHTML = `
        <div class="cart-item-info">
          <span class="cart-item-title">${item.name}</span>
          <span class="cart-item-meta">${item.qty}x @ Rp ${item.price.toLocaleString('id-ID')}</span>
        </div>
        <span class="cart-item-price">Rp ${itemSubtotal.toLocaleString('id-ID')}</span>
      `;
      cartList.appendChild(row);
    });

    const tax = Math.round(subtotal * 0.1);
    const total = subtotal + tax;

    cartCountBadge.textContent = `${totalItems} Item`;
    subtotalVal.textContent = `Rp ${subtotal.toLocaleString('id-ID')}`;
    taxVal.textContent = `Rp ${tax.toLocaleString('id-ID')}`;
    totalVal.textContent = `Rp ${total.toLocaleString('id-ID')}`;
    btnSendOrder.disabled = false;
  }

  // Send order to KDS
  btnSendOrder.addEventListener('click', () => {
    btnSendOrder.disabled = true;
    btnSendOrder.textContent = '⏳ Mengirim ke Dapur...';

    setTimeout(() => {
      alert('Pesanan Meja 05 Berhasil Terkirim ke Layar Dapur (KDS)!');
      btnSendOrder.textContent = 'Kirim Pesanan ke Dapur (KDS) ➔';

      // Create new ticket in KDS
      const newTicketId = 'ticket-' + Math.floor(100 + Math.random() * 900);
      const ticketEl = document.createElement('div');
      ticketEl.className = 'kds-ticket';
      ticketEl.id = newTicketId;

      let itemsHtml = '';
      cart.forEach(c => {
        itemsHtml += `
          <div class="t-item">
            <span class="t-qty">${c.qty}x</span>
            <span class="t-name">${c.name}</span>
          </div>
        `;
      });

      ticketEl.innerHTML = `
        <div class="ticket-top">
          <div>
            <span class="ticket-table">MEJA 05 (Baru)</span>
            <span class="ticket-id">#ORD-${Math.floor(103 + Math.random() * 50)}</span>
          </div>
          <span class="ticket-timer">⏱️ Baru Saja</span>
        </div>
        <div class="ticket-items">
          ${itemsHtml}
        </div>
        <div class="ticket-footer">
          <span class="t-status queued">MENUNGGU ANTRIAN</span>
          <button class="btn-done" onclick="markTicketReady('${newTicketId}')">Mulai Masak 🍳</button>
        </div>
      `;

      kdsTicketsGrid.prepend(ticketEl);
      kdsBadge.textContent = parseInt(kdsBadge.textContent) + 1;

      // Reset cart
      cart = [];
      renderCart();
    }, 600);
  });

  // KDS Clock
  const kdsClock = document.getElementById('kdsClock');
  if (kdsClock) {
    setInterval(() => {
      const now = new Date();
      kdsClock.textContent = now.toTimeString().split(' ')[0] + ' WIB';
    }, 1000);
  }
});

// Global function for KDS button
window.markTicketReady = function(ticketId) {
  const ticket = document.getElementById(ticketId);
  if (!ticket) return;

  const btn = ticket.querySelector('.btn-done');
  const status = ticket.querySelector('.t-status');

  if (status.classList.contains('queued')) {
    status.className = 't-status cooking';
    status.textContent = 'SEDANG DIMASAK';
    btn.textContent = 'Selesai / Ready ✔️';
  } else {
    ticket.style.opacity = '0.4';
    ticket.style.border = '1px solid #10b981';
    btn.textContent = 'Pesanan Siap Saji';
    btn.disabled = true;
    btn.style.backgroundColor = '#10b981';
  }
};
