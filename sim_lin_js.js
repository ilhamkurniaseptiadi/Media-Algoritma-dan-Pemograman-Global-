// ==============================================================================
// sim_lin_js.js - Skrip Tambahan / Cadangan Logika Simulasi Linear Search
// Catatan: Seluruh logika simulasi interaktif untuk Linear Search dan Binary Search
// sudah tertanam lengkap dan langsung berjalan secara mandiri di dalam pertemuan-3.html.
// ==============================================================================

function renderLinSearchStandalone(containerId, data) {
  const c = document.getElementById(containerId);
  if (!c) return;
  c.innerHTML = '';
  data.forEach((val, i) => {
    c.innerHTML += `<div id="lin-${i}" class="sim-item w-12 h-12 bg-slate-800 border-2 border-slate-600 rounded-lg flex items-center justify-center font-bold text-white">${val}</div>`;
  });
}

function* linearSearchStandaloneGen(data, target, modalCallback) {
  let found = false;
  for (let i = 0; i < data.length; i++) {
    const el = document.getElementById(`lin-${i}`);
    if (el) el.classList.add('highlight-scan');
    yield { index: i, value: data[i], found: false };
    if (data[i] === target) {
      if (el) {
        el.classList.remove('highlight-scan');
        el.classList.add('highlight-found');
      }
      found = true;
      if (typeof modalCallback === 'function') {
        modalCallback('Hasil', `Data ${target} ditemukan di posisi ke-${i + 1}!`, '✅');
      }
      return { index: i, value: data[i], found: true };
    } else {
      if (el) {
        el.classList.remove('highlight-scan');
        el.classList.add('highlight-fail');
      }
    }
  }
  if (!found && typeof modalCallback === 'function') {
    modalCallback('Hasil', 'Data tidak ditemukan.', '❌');
  }
  return { found: false };
}

