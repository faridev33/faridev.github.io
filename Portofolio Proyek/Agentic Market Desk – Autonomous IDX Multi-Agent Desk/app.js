// Agentic Market Desk - Interactive Logic
document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.nav-tab');
  const views = document.querySelectorAll('.tab-view');
  const btnRefresh = document.getElementById('btnRefreshPicks');
  const searchInput = document.getElementById('screenerSearch');
  const sectorFilter = document.getElementById('sectorFilter');
  const screenerTbody = document.getElementById('screenerTbody');

  // Tab switching
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;
      tabs.forEach(t => t.classList.remove('active'));
      views.forEach(v => v.classList.remove('active'));

      tab.classList.add('active');
      const targetView = document.getElementById(`view-${target}`);
      if (targetView) targetView.classList.add('active');
    });
  });

  // Refresh animation
  if (btnRefresh) {
    btnRefresh.addEventListener('click', () => {
      btnRefresh.textContent = '⏳ Mengkalkulasi Konsensus...';
      btnRefresh.style.opacity = '0.7';
      setTimeout(() => {
        btnRefresh.textContent = '✅ Konsensus Terkini';
        btnRefresh.style.opacity = '1';
        setTimeout(() => {
          btnRefresh.textContent = '🔄 Refresh Analisis';
        }, 1800);
      }, 700);
    });
  }

  // Screener search & filter
  function filterScreener() {
    const query = searchInput.value.toLowerCase().trim();
    const sector = sectorFilter.value;

    const rows = screenerTbody.querySelectorAll('tr');
    rows.forEach(row => {
      const text = row.textContent.toLowerCase();
      const rowSector = row.cells[2].textContent;

      const matchesQuery = !query || text.includes(query);
      const matchesSector = sector === 'all' || rowSector === sector;

      row.style.display = matchesQuery && matchesSector ? '' : 'none';
    });
  }

  if (searchInput) searchInput.addEventListener('input', filterScreener);
  if (sectorFilter) sectorFilter.addEventListener('change', filterScreener);
});
