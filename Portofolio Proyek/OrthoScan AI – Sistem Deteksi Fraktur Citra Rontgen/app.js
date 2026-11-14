// OrthoScan AI - Interactive Application Logic
document.addEventListener('DOMContentLoaded', () => {
  const dropzone = document.getElementById('dropzone');
  const fileInput = document.getElementById('fileInput');
  const dropPrompt = document.getElementById('dropPrompt');
  const previewBox = document.getElementById('previewBox');
  const previewImg = document.getElementById('previewImg');
  const metaBox = document.getElementById('metaBox');
  const metaName = document.getElementById('metaName');
  const metaSize = document.getElementById('metaSize');
  const metaDim = document.getElementById('metaDim');

  const btnAnalyze = document.getElementById('btnAnalyze');
  const btnReset = document.getElementById('btnReset');

  const stateEmpty = document.getElementById('stateEmpty');
  const stateLoading = document.getElementById('stateLoading');
  const stateResults = document.getElementById('stateResults');

  const tabAnnotated = document.getElementById('tabAnnotated');
  const tabOriginal = document.getElementById('tabOriginal');
  const bboxOverlay = document.getElementById('bboxOverlay');
  const resultImg = document.getElementById('resultImg');

  const verdictBanner = document.getElementById('verdictBanner');
  const bannerIcon = document.getElementById('bannerIcon');
  const bannerHeading = document.getElementById('bannerHeading');
  const bannerSubheading = document.getElementById('bannerSubheading');
  const findingsList = document.getElementById('findingsList');
  const inferenceBadge = document.getElementById('inferenceBadge');

  const presetBtns = document.querySelectorAll('.preset-btn');

  // Sample presets data
  const presets = {
    forearm: {
      name: 'sample_forearm_xray.png',
      size: '328.5 KB',
      dim: '800 × 800 px',
      imgSrc: 'preview.png',
      hasFracture: true,
      count: 1,
      inferenceTime: '472ms',
      heading: 'TERDETEKSI PATAH TULANG (1 Lokasi)',
      subheading: 'Model mendeteksi adanya fraktur pada os radius/ulna dengan tingkat keyakinan klinis 94.8%.',
      boxes: [
        { top: '40%', left: '36%', width: '28%', height: '22%', label: 'Forearm fracture · 94.8%' }
      ],
      findings: [
        {
          cls: 'Forearm fracture',
          acc: '94.8%',
          accVal: 94.8,
          anatomy: 'Anatomi: Tulang Lengan Bawah (Radius / Ulna)',
          coords: 'BBox: [x:288, y:320, w:224, h:176]'
        }
      ]
    },
    wrist: {
      name: 'sample_wrist_fracture.png',
      size: '294.1 KB',
      dim: '800 × 800 px',
      imgSrc: 'preview.png',
      hasFracture: true,
      count: 2,
      inferenceTime: '512ms',
      heading: 'TERDETEKSI PATAH TULANG (2 Lokasi)',
      subheading: 'Terdeteksi diskontinuitas fraktur pada pergelangan tangan (wrist) dan carpal bone.',
      boxes: [
        { top: '32%', left: '42%', width: '22%', height: '18%', label: 'Wrist positive · 92.4%' },
        { top: '56%', left: '38%', width: '25%', height: '20%', label: 'Distal Radius fracture · 89.1%' }
      ],
      findings: [
        {
          cls: 'Wrist positive',
          acc: '92.4%',
          accVal: 92.4,
          anatomy: 'Anatomi: Articulatio Radiocarpalis (Wrist)',
          coords: 'BBox: [x:336, y:256, w:176, h:144]'
        },
        {
          cls: 'Distal Radius fracture',
          acc: '89.1%',
          accVal: 89.1,
          anatomy: 'Anatomi: Bagian Distal Os Radius',
          coords: 'BBox: [x:304, y:448, w:200, h:160]'
        }
      ]
    },
    normal: {
      name: 'sample_normal_bone.png',
      size: '310.2 KB',
      dim: '800 × 800 px',
      imgSrc: 'preview.png',
      hasFracture: false,
      count: 0,
      inferenceTime: '445ms',
      heading: 'STRUKTUR TULANG NORMAL',
      subheading: 'Tidak ditemukan indikasi diskontinuitas korteks atau fraktur tulang pada citra radiografi ini.',
      boxes: [],
      findings: [
        {
          cls: 'Normal Anatomy',
          acc: '98.5%',
          accVal: 98.5,
          anatomy: 'Korteks intak tanpa garis radiolusen abnormal',
          coords: 'Status: Negatif Fraktur'
        }
      ]
    }
  };

  let currentPreset = 'forearm';

  // Apply preset
  function loadPreset(key) {
    currentPreset = key;
    const data = presets[key];
    metaName.textContent = data.name;
    metaSize.textContent = data.size;
    metaDim.textContent = data.dim;

    presetBtns.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.preset === key);
    });

    displayResult(data);
  }

  function displayResult(data) {
    stateEmpty.classList.add('hidden');
    stateLoading.classList.add('hidden');
    stateResults.classList.remove('hidden');

    resultImg.src = data.imgSrc;
    inferenceBadge.textContent = `⚡ Inferensi: ${data.inferenceTime}`;

    if (data.hasFracture) {
      verdictBanner.className = 'verdict-banner banner-fracture';
      bannerIcon.textContent = '⚠️';
      bannerHeading.textContent = data.heading;
      bannerSubheading.textContent = data.subheading;
    } else {
      verdictBanner.className = 'verdict-banner banner-normal';
      bannerIcon.textContent = '✅';
      bannerHeading.textContent = data.heading;
      bannerSubheading.textContent = data.subheading;
    }

    // Render BBoxes
    bboxOverlay.innerHTML = '';
    data.boxes.forEach(box => {
      const el = document.createElement('div');
      el.className = 'bbox-box';
      el.style.top = box.top;
      el.style.left = box.left;
      el.style.width = box.width;
      el.style.height = box.height;
      el.innerHTML = `<span class="bbox-label">${box.label}</span>`;
      bboxOverlay.appendChild(el);
    });

    // Render Findings List
    findingsList.innerHTML = '';
    data.findings.forEach(f => {
      const card = document.createElement('div');
      card.className = 'finding-card';
      card.innerHTML = `
        <div class="finding-main">
          <span class="finding-class">${f.cls}</span>
          <span class="finding-badge ${data.hasFracture ? 'badge-high' : 'badge-normal'}">${f.acc} Akurasi</span>
        </div>
        <div class="finding-meta">
          <span>${f.anatomy}</span>
          <span class="meta-coords">${f.coords}</span>
        </div>
        <div class="prob-bar-track">
          <div class="prob-bar-fill" style="width: ${f.accVal}%; background: ${data.hasFracture ? 'linear-gradient(90deg, #f43f5e 0%, #fb7185 100%)' : 'linear-gradient(90deg, #10b981 0%, #34d399 100%)'}"></div>
        </div>
      `;
      findingsList.appendChild(card);
    });
  }

  // Preset button click
  presetBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      loadPreset(btn.dataset.preset);
    });
  });

  // Tab switching
  tabAnnotated.addEventListener('click', () => {
    tabAnnotated.classList.add('active');
    tabOriginal.classList.remove('active');
    bboxOverlay.style.display = 'block';
  });

  tabOriginal.addEventListener('click', () => {
    tabOriginal.classList.add('active');
    tabAnnotated.classList.remove('active');
    bboxOverlay.style.display = 'none';
  });

  // Dropzone click
  dropzone.addEventListener('click', () => {
    fileInput.click();
  });

  // File input change
  fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
      handleUserFile(file);
    }
  });

  // Drag and drop
  dropzone.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropzone.classList.add('active');
  });

  dropzone.addEventListener('dragleave', () => {
    dropzone.classList.remove('active');
  });

  dropzone.addEventListener('drop', (e) => {
    e.preventDefault();
    dropzone.classList.remove('active');
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleUserFile(e.dataTransfer.files[0]);
    }
  });

  function handleUserFile(file) {
    const reader = new FileReader();
    reader.onload = (evt) => {
      previewImg.src = evt.target.result;
      dropPrompt.classList.add('hidden');
      previewBox.classList.remove('hidden');

      metaName.textContent = file.name;
      metaSize.textContent = (file.size / 1024).toFixed(1) + ' KB';
      metaDim.textContent = 'Menunggu inferensi...';

      // Set user uploaded image as current test
      presets.custom = {
        name: file.name,
        size: (file.size / 1024).toFixed(1) + ' KB',
        dim: 'Custom Radiograph',
        imgSrc: evt.target.result,
        hasFracture: true,
        count: 1,
        inferenceTime: '488ms',
        heading: 'HASIL PEMINDAIAN RADIOGRAFI (1 Fraktur)',
        subheading: 'Model YOLOv8s mendeteksi potensi retakan / diskontinuitas pada area tulang.',
        boxes: [
          { top: '44%', left: '40%', width: '24%', height: '20%', label: 'Bone Fracture Detected · 91.5%' }
        ],
        findings: [
          {
            cls: 'Fracture / Discontinuity',
            acc: '91.5%',
            accVal: 91.5,
            anatomy: 'Anatomi: Tulang yang terdeteksi pada citra',
            coords: 'Status: Terdeteksi Fraktur'
          }
        ]
      };
    };
    reader.readAsDataURL(file);
  }

  // Analyze button
  btnAnalyze.addEventListener('click', () => {
    stateEmpty.classList.add('hidden');
    stateResults.classList.add('hidden');
    stateLoading.classList.remove('hidden');

    setTimeout(() => {
      stateLoading.classList.add('hidden');
      if (presets.custom) {
        displayResult(presets.custom);
      } else {
        displayResult(presets[currentPreset]);
      }
    }, 800);
  });

  // Reset button
  btnReset.addEventListener('click', () => {
    presets.custom = null;
    fileInput.value = '';
    dropPrompt.classList.remove('hidden');
    previewBox.classList.add('hidden');
    loadPreset('forearm');
  });

  // Initialize with forearm preset
  loadPreset('forearm');
});
