// Agent NotebookLM - Interactive UI Logic
document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.nav-tab');
  const sections = document.querySelectorAll('.view-section');
  const btnRun = document.getElementById('btnRunPipeline');
  const thoughtStream = document.getElementById('thoughtStream');

  // Tab navigation
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetView = tab.dataset.view;

      tabs.forEach(t => t.classList.remove('active'));
      sections.forEach(s => s.classList.remove('active'));

      tab.classList.add('active');
      const targetSec = document.getElementById(`view-${targetView}`);
      if (targetSec) {
        targetSec.classList.add('active');
      }
    });
  });

  // Simulation: Add thoughts dynamically
  if (btnRun) {
    btnRun.addEventListener('click', () => {
      btnRun.innerHTML = '<span>⏳</span> Mengorkestrasi Agen...';
      btnRun.style.opacity = '0.7';

      const simulatedLogs = [
        { agent: '[Parser]', text: 'Mendeteksi 3 gambar diagram arsitektur hibrida pada bab 4.', color: 'text-cyan' },
        { agent: '[Peneliti]', text: 'Mengekstrak hubungan korelasi antara InceptionV3 dan EfficientNetB3.', color: 'text-purple' },
        { agent: '[Analis]', text: 'Validasi sensitivitas 98.92% cocok dengan kurva ROC-AUC.', color: 'text-emerald' },
        { agent: '[Penulis]', text: 'Memperbarui kesimpulan dengan rekomendasi klinis Down Syndrome.', color: 'text-amber' }
      ];

      let delay = 600;
      simulatedLogs.forEach(log => {
        setTimeout(() => {
          const item = document.createElement('div');
          item.className = 'thought-item';
          const now = new Date();
          const timeStr = now.toTimeString().split(' ')[0];
          item.innerHTML = `
            <span class="thought-time">${timeStr}</span>
            <span class="thought-agent ${log.color}">${log.agent}</span>
            <span class="thought-text">${log.text}</span>
          `;
          thoughtStream.prepend(item);
        }, delay);
        delay += 900;
      });

      setTimeout(() => {
        btnRun.innerHTML = '<span>✅</span> Riset Selesai';
        btnRun.style.opacity = '1';
        setTimeout(() => {
          btnRun.innerHTML = '<span>▶️</span> Jalankan Riset Otonom';
        }, 2000);
      }, delay + 200);
    });
  }

  // Copy Markdown Report
  const btnCopy = document.getElementById('btnCopyReport');
  if (btnCopy) {
    btnCopy.addEventListener('click', () => {
      const text = `# Sintesis Komparatif: Ensemble Hibrida Deteksi Dini Down Syndrome\n\n## 1. Ringkasan Eksekutif\nPenelitian ini mengusulkan model Hybrid CNN berbasis kombinasi InceptionV3 dan EfficientNetB3 untuk meningkatkan akurasi skrining dini Down Syndrome pada citra wajah balita. Akurasi 92.32% dan False Negatives ditekan hingga tersisa 1 kasus.`;
      navigator.clipboard.writeText(text).then(() => {
        btnCopy.textContent = '✅ Disalin ke Clipboard!';
        setTimeout(() => {
          btnCopy.textContent = '📋 Salin Markdown';
        }, 2000);
      });
    });
  }
});
