/**
 * Cafe Fari - Shared State Store (Local Storage Backend Emulation)
 * All HTML pages share this state synchronously without needing a backend server!
 */
(function(window) {
  'use strict';

  const STORAGE_KEY = 'cafe_fari_database_v2';
  const CURRENT_USER_KEY = 'cafe_fari_current_user';

  // Seed default data
  function getInitialData() {
    return {
      products: [
        {
          id: 1,
          name: "Nasi Goreng Spesial Cafe",
          category: "Makanan",
          price: 28000,
          desc: "Nasi goreng rempah istimewa dengan ayam suwir, sate lilit & telur mata sapi.",
          status: "Available",
          image: "assets/images/ee13f28c-433e-443a-a083-7cea0a9f6640.jpg",
          badge: "Favorit",
          options: [
            { name: "Tingkat Pedas", choices: ["Tidak Pedas", "Sedang (Level 1)", "Pedas (Level 2)", "Ekstra Pedas (Level 3)"] },
            { name: "Telur", choices: ["Mata Sapi Setengah Matang", "Mata Sapi Matang", "Dadar"] }
          ]
        },
        {
          id: 2,
          name: "Mie Goreng Jawa Rempah",
          category: "Makanan",
          price: 25000,
          desc: "Mie kuning basah dengan racikan bumbu kecap rempah tradisional & suwiran ayam.",
          status: "Available",
          image: "assets/images/6e5dd5f8-2a50-4d2f-b2e4-0ed91ff07781.jpg",
          badge: "",
          options: [
            { name: "Tingkat Pedas", choices: ["Biasa", "Sedang", "Pedas"] }
          ]
        },
        {
          id: 3,
          name: "Ayam Geprek Sambal Korek",
          category: "Makanan",
          price: 27000,
          desc: "Ayam goreng tepung krispi dengan ulekan sambal bawang segar pedas nampol.",
          status: "Available",
          image: "assets/images/2303430f-2113-4670-a3cb-b955224a95f5.jpg",
          badge: "Chef Pick",
          options: [
            { name: "Level Cabai", choices: ["Cabai 3", "Cabai 5", "Cabai 10"] },
            { name: "Nasi", choices: ["Dengan Nasi Hangat", "Tanpa Nasi (-Rp 3.000)"] }
          ]
        },
        {
          id: 4,
          name: "Kopi Susu Gula Aren",
          category: "Minuman",
          price: 20000,
          desc: "Double shot espresso blend signature Cafe Fari, susu murni segar, dan sirup gula aren murni.",
          status: "Available",
          image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=500&auto=format&fit=crop&q=80",
          badge: "Best Seller",
          options: [
            { name: "Suhu & Es", choices: ["Dingin (Ice)", "Hangat (Hot)"] },
            { name: "Tingkat Gula", choices: ["Normal Sweet", "Less Sugar (50%)", "No Sugar"] }
          ]
        },
        {
          id: 5,
          name: "Caramel Macchiato",
          category: "Minuman",
          price: 26000,
          desc: "Espresso berlapis susu vanilla creamy dengan drizzle saus karamel legit harum.",
          status: "Available",
          image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=500&auto=format&fit=crop&q=80",
          badge: "",
          options: [
            { name: "Suhu & Es", choices: ["Dingin (Ice)", "Hangat (Hot)"] },
            { name: "Ukuran", choices: ["Reguler", "Large (+Rp 4.000)"] }
          ]
        },
        {
          id: 6,
          name: "Matcha Latte Creamy",
          category: "Minuman",
          price: 24000,
          desc: "Matcha ceremonial grade asli Uji Kyoto dipadu susu segar gurih nikmat.",
          status: "Available",
          image: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=500&auto=format&fit=crop&q=80",
          badge: "",
          options: [
            { name: "Suhu & Es", choices: ["Dingin (Ice)", "Hangat (Hot)"] },
            { name: "Manis", choices: ["Normal Sweet", "Less Sweet"] }
          ]
        },
        {
          id: 7,
          name: "Es Teh Manis Jasmine",
          category: "Minuman",
          price: 8000,
          desc: "Seduhan teh melati harum khas Cafe Fari dengan gula tebu asli segar dingin.",
          status: "Available",
          image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=500&auto=format&fit=crop&q=80",
          badge: "",
          options: [
            { name: "Gula", choices: ["Manis Normal", "Sedikit Manis", "Tawar (No Sugar)"] }
          ]
        },
        {
          id: 8,
          name: "Puding Coklat Lava",
          category: "Dessert",
          price: 18000,
          desc: "Puding coklat lembut dengan lelehan cokelat Belgian hangat dan vla vanila.",
          status: "Available",
          image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=500&auto=format&fit=crop&q=80",
          badge: "",
          options: [
            { name: "Topping Vla", choices: ["Vla Vanilla", "Vla Keju"] }
          ]
        },
        {
          id: 9,
          name: "Croissant Almond Butter",
          category: "Dessert",
          price: 22000,
          desc: "Pastry renyah berlapis mentega Prancis dengan taburan almond panggang renyah.",
          status: "Available",
          image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=500&auto=format&fit=crop&q=80",
          badge: "Chef Pick",
          options: [
            { name: "Penyajian", choices: ["Hangatkan (Warm)", "Suhu Ruang"] }
          ]
        },
        {
          id: 10,
          name: "French Fries Truffle Herb",
          category: "Snack",
          price: 20000,
          desc: "Kentang goreng renyah dengan taburan daun herbal aromatik dan saus keju creamy.",
          status: "Available",
          image: "https://images.unsplash.com/photo-1576107232684-1279f3908594?w=500&auto=format&fit=crop&q=80",
          badge: "",
          options: [
            { name: "Saus Pilihan", choices: ["Saus Keju", "Saus Sambal & Mayo", "Saus BBQ"] }
          ]
        }
      ],
      tables: [
        { id: 1, number: 1, capacity: 4, status: "Occupied" },
        { id: 2, number: 2, capacity: 4, status: "Available" },
        { id: 3, number: 3, capacity: 2, status: "Available" },
        { id: 4, number: 4, capacity: 6, status: "Available" },
        { id: 5, number: 5, capacity: 4, status: "Occupied" },
        { id: 6, number: 6, capacity: 4, status: "Available" },
        { id: 7, number: 7, capacity: 8, status: "Available" },
        { id: 8, number: 8, capacity: 2, status: "Available" },
        { id: 9, number: 9, capacity: 4, status: "Available" },
        { id: 10, number: 10, capacity: 6, status: "Available" }
      ],
      orders: [
        {
          id: 101,
          table_id: 1,
          customer_name: "Budi Santoso",
          created_at: new Date(Date.now() - 14 * 60 * 1000).toISOString(),
          payment_method: "Tunai (Kasir)",
          payment_status: "PAID",
          cooking_status: "COOKING",
          waiter_status: "PENDING",
          total_price: 72000,
          items: [
            { id: 1, name: "Nasi Goreng Spesial Cafe", price: 28000, quantity: 2, note: "Pedas sedang, telur ceplok matang", optionsText: "Sedang (Level 1) | Mata Sapi Matang" },
            { id: 4, name: "Kopi Susu Gula Aren", price: 20000, quantity: 1, note: "Less ice", optionsText: "Dingin (Ice) | Less Sugar (50%)" }
          ]
        },
        {
          id: 102,
          table_id: 5,
          customer_name: "Siti Rahma",
          created_at: new Date(Date.now() - 6 * 60 * 1000).toISOString(),
          payment_method: "QRIS",
          payment_status: "PAID",
          cooking_status: "QUEUED",
          waiter_status: "PENDING",
          total_price: 52000,
          items: [
            { id: 3, name: "Ayam Geprek Sambal Korek", price: 27000, quantity: 1, note: "Cabai 5 pedas", optionsText: "Cabai 5 | Dengan Nasi Hangat" },
            { id: 2, name: "Mie Goreng Jawa Rempah", price: 25000, quantity: 1, note: "Tidak pakai seledri", optionsText: "Sedang" }
          ]
        },
        {
          id: 103,
          table_id: 3,
          customer_name: "Andi Wijaya",
          created_at: new Date(Date.now() - 2 * 60 * 1000).toISOString(),
          payment_method: "Tunai (Kasir)",
          payment_status: "UNPAID",
          cooking_status: "QUEUED",
          waiter_status: "PENDING",
          total_price: 44000,
          items: [
            { id: 5, name: "Caramel Macchiato", price: 26000, quantity: 1, note: "Extra caramel drizzle", optionsText: "Dingin (Ice) | Reguler" },
            { id: 10, name: "French Fries Truffle Herb", price: 18000, quantity: 1, note: "Saus dipisah", optionsText: "Saus Keju" }
          ]
        }
      ],
      transactions: [
        {
          id: 98,
          table_id: 2,
          customer_name: "Reza Pratama",
          created_at: new Date(Date.now() - 95 * 60 * 1000).toISOString(),
          total_price: 68000,
          payment_method: "Tunai",
          payment_status: "PAID",
          cash_received: 100000,
          change: 32000,
          cashier_name: "Fari Kasir",
          items: [
            { name: "Nasi Goreng Spesial Cafe", price: 28000, quantity: 1, optionsText: "Sedang" },
            { name: "French Fries Truffle Herb", price: 20000, quantity: 1, optionsText: "Saus BBQ" },
            { name: "Kopi Susu Gula Aren", price: 20000, quantity: 1, optionsText: "Dingin" }
          ]
        },
        {
          id: 99,
          table_id: 4,
          customer_name: "Dewi Lestari",
          created_at: new Date(Date.now() - 48 * 60 * 1000).toISOString(),
          total_price: 84000,
          payment_method: "QRIS",
          payment_status: "PAID",
          cash_received: 84000,
          change: 0,
          cashier_name: "QRIS Online",
          items: [
            { name: "Mie Goreng Jawa Rempah", price: 25000, quantity: 2, optionsText: "Pedas" },
            { name: "Matcha Latte Creamy", price: 24000, quantity: 1, optionsText: "Dingin" },
            { name: "Es Teh Manis Jasmine", price: 8000, quantity: 1, optionsText: "Manis" }
          ]
        },
        {
          id: 100,
          table_id: 7,
          customer_name: "Dimas Anggara",
          created_at: new Date(Date.now() - 32 * 60 * 1000).toISOString(),
          total_price: 44000,
          payment_method: "Tunai",
          payment_status: "PAID",
          cash_received: 50000,
          change: 6000,
          cashier_name: "Fari Kasir",
          items: [
            { name: "Croissant Almond Butter", price: 22000, quantity: 1, optionsText: "Hangatkan" },
            { name: "Caramel Macchiato", price: 22000, quantity: 1, optionsText: "Hangat" }
          ]
        }
      ],
      users: [
        { id: 1, username: "admin", name: "Super Administrator", role: "SuperAdmin", created_at: "2025-01-10", avatar: "assets/images/user_36e7807f-6026-44a2-81a3-abce9e957c66.jpg" },
        { id: 2, username: "kasir", name: "Rina Kasir", role: "Cashier", created_at: "2025-01-15", avatar: "" },
        { id: 3, username: "kitchen", name: "Chef Junaedi", role: "Kitchen", created_at: "2025-01-20", avatar: "" },
        { id: 4, username: "waiter", name: "Bayu Pelayan", role: "Waiter", created_at: "2025-02-01", avatar: "" }
      ]
    };
  }

  // Load from localStorage or initialize
  function loadDatabase() {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      if (data) {
        return JSON.parse(data);
      }
    } catch (e) {
      console.warn('Storage read error:', e);
    }
    const initial = getInitialData();
    saveDatabase(initial);
    return initial;
  }

  function saveDatabase(db) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(db));
    } catch (e) {
      console.error('Storage write error:', e);
    }
  }

  // Reactive Event Dispatcher
  function emitChange(topic, payload) {
    window.dispatchEvent(new CustomEvent('cafefari:update', {
      detail: { topic, payload, timestamp: Date.now() }
    }));
  }

  // Core API
  const Store = {
    // Reset database to initial seed
    reset: function() {
      const init = getInitialData();
      saveDatabase(init);
      emitChange('reset', init);
      return init;
    },

    // Products
    getProducts: function() {
      const db = loadDatabase();
      return db.products || [];
    },
    getProductById: function(id) {
      const prods = this.getProducts();
      return prods.find(p => p.id === Number(id));
    },
    saveProduct: function(prod) {
      const db = loadDatabase();
      if (prod.id) {
        const idx = db.products.findIndex(p => p.id === Number(prod.id));
        if (idx !== -1) {
          db.products[idx] = { ...db.products[idx], ...prod };
        } else {
          db.products.push(prod);
        }
      } else {
        prod.id = (db.products.length ? Math.max(...db.products.map(p => p.id)) : 0) + 1;
        db.products.push(prod);
      }
      saveDatabase(db);
      emitChange('products', db.products);
      return prod;
    },
    deleteProduct: function(id) {
      const db = loadDatabase();
      db.products = db.products.filter(p => p.id !== Number(id));
      saveDatabase(db);
      emitChange('products', db.products);
    },
    toggleProductStatus: function(id) {
      const db = loadDatabase();
      const p = db.products.find(item => item.id === Number(id));
      if (p) {
        p.status = p.status === 'Available' ? 'Out of Stock' : 'Available';
        saveDatabase(db);
        emitChange('products', db.products);
        return p.status;
      }
      return null;
    },

    // Tables
    getTables: function() {
      const db = loadDatabase();
      return (db.tables || []).sort((a, b) => a.number - b.number);
    },
    saveTable: function(table) {
      const db = loadDatabase();
      if (table.id) {
        const idx = db.tables.findIndex(t => t.id === Number(table.id));
        if (idx !== -1) db.tables[idx] = { ...db.tables[idx], ...table };
      } else {
        table.id = (db.tables.length ? Math.max(...db.tables.map(t => t.id)) : 0) + 1;
        db.tables.push(table);
      }
      saveDatabase(db);
      emitChange('tables', db.tables);
      return table;
    },
    deleteTable: function(id) {
      const db = loadDatabase();
      db.tables = db.tables.filter(t => t.id !== Number(id));
      saveDatabase(db);
      emitChange('tables', db.tables);
    },

    // Orders (Active)
    getOrders: function() {
      const db = loadDatabase();
      return db.orders || [];
    },
    getOrderById: function(id) {
      const orders = this.getOrders();
      return orders.find(o => o.id === Number(id));
    },
    getActiveKitchenOrders: function() {
      return this.getOrders().filter(o => o.cooking_status !== 'DONE');
    },
    getKitchenHistoryOrders: function() {
      return this.getOrders().filter(o => o.cooking_status === 'DONE');
    },
    getUnpaidOrders: function() {
      return this.getOrders().filter(o => o.payment_status === 'UNPAID');
    },
    getLatestOrderByTable: function(tableId) {
      const orders = this.getOrders().filter(o => Number(o.table_id) === Number(tableId));
      if (!orders.length) return null;
      return orders[orders.length - 1];
    },
    createOrder: function(orderData) {
      const db = loadDatabase();
      const newId = (db.orders.length ? Math.max(...db.orders.map(o => o.id)) : 100) + 1;
      const newOrder = {
        id: newId,
        table_id: Number(orderData.table_id || 1),
        customer_name: orderData.customer_name || 'Pelanggan Meja ' + orderData.table_id,
        created_at: new Date().toISOString(),
        payment_method: orderData.payment_method || 'Tunai (Kasir)',
        payment_status: orderData.payment_status || 'UNPAID', // 'UNPAID' | 'PAID'
        cooking_status: 'QUEUED', // 'QUEUED' | 'COOKING' | 'DONE'
        waiter_status: 'PENDING', // 'PENDING' | 'SERVED'
        total_price: Number(orderData.total_price || 0),
        items: orderData.items || []
      };

      db.orders.push(newOrder);

      // Set table status to Occupied
      const table = db.tables.find(t => t.number === newOrder.table_id);
      if (table) table.status = 'Occupied';

      saveDatabase(db);
      emitChange('orders', db.orders);
      return newOrder;
    },
    updateOrderStatus: function(orderId, updates) {
      const db = loadDatabase();
      const order = db.orders.find(o => o.id === Number(orderId));
      if (order) {
        Object.assign(order, updates);
        saveDatabase(db);
        emitChange('orders', db.orders);
        return order;
      }
      return null;
    },
    completePayment: function(orderId, paymentData) {
      const db = loadDatabase();
      const orderIdx = db.orders.findIndex(o => o.id === Number(orderId));
      if (orderIdx === -1) return null;

      const order = db.orders[orderIdx];
      order.payment_status = 'PAID';
      if (paymentData.items) order.items = paymentData.items;
      if (paymentData.total_price) order.total_price = paymentData.total_price;

      // Add to transactions log
      const transId = (db.transactions.length ? Math.max(...db.transactions.map(t => t.id)) : 100) + 1;
      const trans = {
        id: transId,
        table_id: order.table_id,
        customer_name: order.customer_name,
        created_at: new Date().toISOString(),
        total_price: order.total_price,
        payment_method: paymentData.payment_method || 'Tunai',
        payment_status: 'PAID',
        cash_received: paymentData.cash_received || order.total_price,
        change: paymentData.change || 0,
        cashier_name: paymentData.cashier_name || 'Kasir',
        items: JSON.parse(JSON.stringify(order.items))
      };
      db.transactions.unshift(trans);

      saveDatabase(db);
      emitChange('transactions', db.transactions);
      emitChange('orders', db.orders);
      return { order, trans };
    },

    // Transactions
    getTransactions: function() {
      const db = loadDatabase();
      return db.transactions || [];
    },

    // Users
    getUsers: function() {
      const db = loadDatabase();
      return db.users || [];
    },
    saveUser: function(user) {
      const db = loadDatabase();
      if (user.id) {
        const idx = db.users.findIndex(u => u.id === Number(user.id));
        if (idx !== -1) db.users[idx] = { ...db.users[idx], ...user };
      } else {
        user.id = (db.users.length ? Math.max(...db.users.map(u => u.id)) : 0) + 1;
        user.created_at = new Date().toISOString().split('T')[0];
        db.users.push(user);
      }
      saveDatabase(db);
      emitChange('users', db.users);
      return user;
    },
    deleteUser: function(id) {
      const db = loadDatabase();
      db.users = db.users.filter(u => u.id !== Number(id));
      saveDatabase(db);
      emitChange('users', db.users);
    },

    // Cart Helper (Per Table)
    getCart: function(tableId) {
      try {
        const raw = localStorage.getItem('cart_table_' + tableId);
        return raw ? JSON.parse(raw) : [];
      } catch (e) {
        return [];
      }
    },
    saveCart: function(tableId, cart) {
      try {
        localStorage.setItem('cart_table_' + tableId, JSON.stringify(cart));
      } catch (e) {}
    },
    clearCart: function(tableId) {
      try {
        localStorage.removeItem('cart_table_' + tableId);
        localStorage.removeItem('customerName_table_' + tableId);
      } catch (e) {}
    },

    // Current Session / User
    getCurrentUser: function() {
      try {
        const raw = localStorage.getItem(CURRENT_USER_KEY);
        if (raw) return JSON.parse(raw);
      } catch (e) {}
      return { username: 'admin', role: 'SuperAdmin' };
    },
    setCurrentUser: function(user) {
      try {
        localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
      } catch (e) {}
    },
    logout: function() {
      try {
        localStorage.removeItem(CURRENT_USER_KEY);
      } catch (e) {}
      window.location.href = 'index.html';
    },

    // Utility Formatters
    formatRupiah: function(number) {
      return 'Rp ' + Number(number || 0).toLocaleString('id-ID');
    },
    formatTime: function(isoString) {
      if (!isoString) return '-';
      const d = new Date(isoString);
      return d.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });
    },
    formatDateTime: function(isoString) {
      if (!isoString) return '-';
      const d = new Date(isoString);
      return d.toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' }) + ' ' +
             d.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });
    }
  };

  // Expose globally
  window.CafeStore = Store;

})(window);
