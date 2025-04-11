document.addEventListener('DOMContentLoaded', () => {
  // Contoh array dummy untuk mobil
  let dataMobil = [
    { id: 1, merk: 'Toyota', model: 'Avanza', tahun: 2022, plat: 'B1234ABC', harga: 350000 },
    { id: 2, merk: 'Honda', model: 'Brio', tahun: 2021, plat: 'D5678XYZ', harga: 300000 },
  ];

  const mobilList = document.getElementById('mobilList');
  const searchInput = document.getElementById('searchMobil');

  if (mobilList) renderMobilList();
  if (searchInput) searchInput.addEventListener('input', handleSearch);

  function renderMobilList() {
    mobilList.innerHTML = '';
    dataMobil.forEach(mobil => {
      const card = document.createElement('div');
      card.className = 'mobil-card';
      card.innerHTML = `
        <h4>${mobil.merk} ${mobil.model}</h4>
        <p>Tahun: ${mobil.tahun}</p>
        <p>Plat: ${mobil.plat}</p>
        <p>Harga: Rp${mobil.harga.toLocaleString()}</p>
      `;
      mobilList.appendChild(card);
    });
  }

  function handleSearch() {
    const keyword = searchInput.value.toLowerCase();
    const filtered = dataMobil.filter(mobil => 
      mobil.merk.toLowerCase().includes(keyword) ||
      mobil.model.toLowerCase().includes(keyword) ||
      mobil.plat.toLowerCase().includes(keyword)
    );
    mobilList.innerHTML = '';
    filtered.forEach(mobil => {
      const card = document.createElement('div');
      card.className = 'mobil-card';
      card.innerHTML = `
        <h4>${mobil.merk} ${mobil.model}</h4>
        <p>Tahun: ${mobil.tahun}</p>
        <p>Plat: ${mobil.plat}</p>
        <p>Harga: Rp${mobil.harga.toLocaleString()}</p>
      `;
      mobilList.appendChild(card);
    });
  }
});
