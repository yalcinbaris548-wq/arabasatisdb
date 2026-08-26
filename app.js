// ArabaSatisDB Core Application Engine & Data Store

// Default Seed Data matching ArabaSatisDB T-SQL Schema
const initialDatabase = {
  Personeller: [
    { PersonelID: 1, Adi: "Barış", Soyadi: "Yalçın", Tc_No: "11111111111", Gmail: "yalcinbaris548@gmail.com", Telefon: "0532 555 0001", Adres: "Kadıköy / İstanbul", Gorev: "Satış Müdürü (Yönetici)", Calisma_Durumu: 1 },
    { PersonelID: 2, Adi: "Ayşe", Soyadi: "Kaya", Tc_No: "22222222222", Gmail: "ayse.kaya@galeri.com", Telefon: "0533 444 0002", Adres: "Çankaya / Ankara", Gorev: "Kıdemli Satış Danışmanı", Calisma_Durumu: 1 },
    { PersonelID: 3, Adi: "Mehmet", Soyadi: "Demir", Tc_No: "33333333333", Gmail: "mehmet.demir@galeri.com", Telefon: "0544 333 0003", Adres: "Nilüfer / Bursa", Gorev: "Galeri Uzmanı", Calisma_Durumu: 1 },
    { PersonelID: 4, Adi: "Zeynep", Soyadi: "Şahin", Tc_No: "44444444444", Gmail: "zeynep.sahin@galeri.com", Telefon: "0555 222 0004", Adres: "Konak / İzmir", Gorev: "Satış Temsilcisi", Calisma_Durumu: 1 }
  ],
  Markalar: [
    { MarkaID: 1, Marka_Adi: "BMW", Ekleyen_PersonelID: 1, Aktif_Mi: 1 },
    { MarkaID: 2, Marka_Adi: "Mercedes-Benz", Ekleyen_PersonelID: 1, Aktif_Mi: 1 },
    { MarkaID: 3, Marka_Adi: "Audi", Ekleyen_PersonelID: 2, Aktif_Mi: 1 },
    { MarkaID: 4, Marka_Adi: "Porsche", Ekleyen_PersonelID: 2, Aktif_Mi: 1 },
    { MarkaID: 5, Marka_Adi: "Volkswagen", Ekleyen_PersonelID: 3, Aktif_Mi: 1 },
    { MarkaID: 6, Marka_Adi: "Volvo", Ekleyen_PersonelID: 3, Aktif_Mi: 1 }
  ],
  Modeller: [
    { ModelID: 1, Model_Adi: "M4 Competition Coupe", Islem_Tarihi: "2026-01-10", Ekleyen_PersonelID: 1, Aktif_Mi: 1 },
    { ModelID: 2, Model_Adi: "C200 d AMG Edition", Islem_Tarihi: "2026-01-12", Ekleyen_PersonelID: 1, Aktif_Mi: 1 },
    { ModelID: 3, Model_Adi: "A6 Sedan 45 TFSI Quattro", Islem_Tarihi: "2026-01-15", Ekleyen_PersonelID: 2, Aktif_Mi: 1 },
    { ModelID: 4, Model_Adi: "Taycan Turbo S EV", Islem_Tarihi: "2026-01-18", Ekleyen_PersonelID: 2, Aktif_Mi: 1 },
    { ModelID: 5, Model_Adi: "Golf 1.5 eTSI Style", Islem_Tarihi: "2026-01-20", Ekleyen_PersonelID: 3, Aktif_Mi: 1 },
    { ModelID: 6, Model_Adi: "XC90 B5 AWD Ultimate", Islem_Tarihi: "2026-01-22", Ekleyen_PersonelID: 3, Aktif_Mi: 1 }
  ],
  Paketler: [
    { PaketID: 1, Paket_Adi: "M Performance Package", Islem_Tarih: "2026-01-05", Ekleyen_PersonelID: 1, Aktif_MI: 1 },
    { PaketID: 2, Paket_Adi: "AMG Line Night Edition", Islem_Tarih: "2026-01-05", Ekleyen_PersonelID: 1, Aktif_MI: 1 },
    { PaketID: 3, Paket_Adi: "S-Line Black Styling", Islem_Tarih: "2026-01-05", Ekleyen_PersonelID: 2, Aktif_MI: 1 },
    { PaketID: 4, Paket_Adi: "Performance Carbon Sport", Islem_Tarih: "2026-01-05", Ekleyen_PersonelID: 2, Aktif_MI: 1 }
  ],
  Sansimanlar: [
    { SansimanID: 1, SansimanTuru: "Otomatik (8 İleri Steptronic)", Aktif_Mi: 1 },
    { SansimanID: 2, SansimanTuru: "Otomatik (9G-TRONIC)", Aktif_Mi: 1 },
    { SansimanID: 3, SansimanTuru: "Otomatik (7 İleri S tronic DSG)", Aktif_Mi: 1 },
    { SansimanID: 4, SansimanTuru: "Elektrikli (2 Vitesli Otomatik)", Aktif_Mi: 1 }
  ],
  Yakit_Turu: [
    { YakitID: 1, Yakit_turu: "Benzin", Aktif_MI: 1 },
    { YakitID: 2, Yakit_turu: "Dizel", Aktif_MI: 1 },
    { YakitID: 3, Yakit_turu: "Elektrik (%100 EV)", Aktif_MI: 1 },
    { YakitID: 4, Yakit_turu: "Hibrit (Mild-Hybrid)", Aktif_MI: 1 }
  ],
  Motor_Turu: [
    { MotorID: 1, Motor_Adi: "3.0 M TwinPower Turbo 510 HP", Aktif_Mi: 1 },
    { MotorID: 2, Motor_Adi: "2.0 Turbo Dizel 200 HP + EQ", Aktif_Mi: 1 },
    { MotorID: 3, Motor_Adi: "2.0 TFSI Mild-Hybrid 265 HP", Aktif_Mi: 1 },
    { MotorID: 4, Motor_Adi: "Çift Elektrik Motoru 761 HP", Aktif_Mi: 1 }
  ],
  Musteriler: [
    { MusteriID: 1, Musteri_Tc_NO: "98765432101", Musteri_Adi: "Caner", Musteri_Soyadi: "Öztürk", Musteri_tel_No: "0532 555 1234", Musteri_Adresi: "Levent / İstanbul", Musteri_Gmail: "caner.ozturk@gmail.com", Musteri_Kayit_Tarihi: "2026-02-01", Ekleyen_PersonelID: 1, Kayit_Durumu: 1 },
    { MusteriID: 2, Musteri_Tc_NO: "87654321098", Musteri_Adi: "Elif", Musteri_Soyadi: "Yıldız", Musteri_tel_No: "0544 444 5678", Musteri_Adresi: "Çankaya / Ankara", Musteri_Gmail: "elif.yildiz@gmail.com", Musteri_Kayit_Tarihi: "2026-02-05", Ekleyen_PersonelID: 2, Kayit_Durumu: 1 },
    { MusteriID: 3, Musteri_Tc_NO: "76543210987", Musteri_Adi: "Burak", Musteri_Soyadi: "Aydın", Musteri_tel_No: "0555 333 9988", Musteri_Adresi: "Karşıyaka / İzmir", Musteri_Gmail: "burak.aydin@gmail.com", Musteri_Kayit_Tarihi: "2026-02-10", Ekleyen_PersonelID: 3, Kayit_Durumu: 1 }
  ],
  Araclar: [
    { Sasi_No: "WBA33AY080FK12948", MarkaID: 1, ModelID: 1, PaketID: 1, SansimanID: 1, YakitID: 1, MotorID: 1, Renk: "Isle of Man Green", Fiyat: 5450000.00, Ekleyen_PersonelID: 1, Satis_Durumu: 0 },
    { Sasi_No: "WDD2050041F983421", MarkaID: 2, ModelID: 2, PaketID: 2, SansimanID: 2, YakitID: 2, MotorID: 2, Renk: "Obsidian Siyah", Fiyat: 3250000.00, Ekleyen_PersonelID: 1, Satis_Durumu: 1 },
    { Sasi_No: "WAUZZZF28MN049281", MarkaID: 3, ModelID: 3, PaketID: 3, SansimanID: 3, YakitID: 4, MotorID: 3, Renk: "Daytona Gri", Fiyat: 4100000.00, Ekleyen_PersonelID: 2, Satis_Durumu: 0 },
    { Sasi_No: "WP0ZZZY1ZMSA94821", MarkaID: 4, ModelID: 4, PaketID: 4, SansimanID: 4, YakitID: 3, MotorID: 4, Renk: "Frozen Mavi", Fiyat: 8900000.00, Ekleyen_PersonelID: 2, Satis_Durumu: 0 }
  ],
  Satis_Tablosu: [
    { Satis_NO: 1, Sasi_No: "WDD2050041F983421", Satan_PersonelID: 1, MusteriID: 1, Satis_Tarihi: "2026-02-15", Satis_Fiyati: 3200000.00 }
  ]
};

// Store Engine Class with C# Async Fetch API Integration
class AppStore {
  constructor() {
    this.data = JSON.parse(JSON.stringify(initialDatabase));
  }

  async loadStoreAsync() {
    try {
      const res = await fetch('/api/db');
      if (res.ok) {
        const fetchedData = await res.json();
        if (fetchedData && fetchedData.Personeller) {
          this.data = fetchedData;
          // Force update Manager record to Barış Yalçın
          if (this.data.Personeller[0]) {
            this.data.Personeller[0].Adi = "Barış";
            this.data.Personeller[0].Soyadi = "Yalçın";
            this.data.Personeller[0].Gmail = "yalcinbaris548@gmail.com";
            this.data.Personeller[0].Gorev = "Satış Müdürü (Yönetici)";
          }
          return this.data;
        }
      }
    } catch (e) {
      console.warn("C# Backend veritabanına bağlanılamadı, varsayılan şema kullanılıyor.", e);
    }
    return this.data;
  }

  saveStore() {
    // Veriler C# REST API (POST/PUT/DELETE) üzerinden doğrudan sunucu veritabanına kaydedilmektedir.
  }

  async resetStore() {
    // Veritabanını varsayılana döndür
    this.data = JSON.parse(JSON.stringify(initialDatabase));
    location.reload();
  }

  getBrandName(id) {
    const b = this.data.Markalar.find(m => m.MarkaID == id);
    return b ? b.Marka_Adi : `Marka #${id}`;
  }

  getModelName(id) {
    const m = this.data.Modeller.find(mod => mod.ModelID == id);
    return m ? m.Model_Adi : `Model #${id}`;
  }

  getPackageName(id) {
    const p = this.data.Paketler.find(pk => pk.PaketID == id);
    return p ? p.Paket_Adi : `Paket #${id}`;
  }

  getTransmissionName(id) {
    const s = this.data.Sansimanlar.find(s => s.SansimanID == id);
    return s ? s.SansimanTuru : `Şanzıman #${id}`;
  }

  getFuelName(id) {
    const y = this.data.Yakit_Turu.find(y => y.YakitID == id);
    return y ? y.Yakit_turu : `Yakıt #${id}`;
  }

  getEngineName(id) {
    const eng = this.data.Motor_Turu.find(m => m.MotorID == id);
    return eng ? eng.Motor_Adi : `Motor #${id}`;
  }

  getPersonnelName(id) {
    const p = this.data.Personeller.find(per => per.PersonelID == id);
    return p ? `${p.Adi} ${p.Soyadi}` : `Personel #${id}`;
  }

  getCustomerName(id) {
    const c = this.data.Musteriler.find(m => m.MusteriID == id);
    return c ? `${c.Musteri_Adi} ${c.Musteri_Soyadi}` : `Müşteri #${id}`;
  }
}

const store = new AppStore();
let activeSession = JSON.parse(sessionStorage.getItem('ArabaSatisDB_ActiveSession')) || null;
let active2FACode = null;
let currentTab = 'dashboard';
let currentAdminTable = 'Araclar';

function formatCurrency(amount) {
  return new Intl.NumberFormat('tr-TR', { style: 'currency', currency: 'TRY', maximumFractionDigits: 0 }).format(amount);
}

document.addEventListener('DOMContentLoaded', async () => {
  await store.loadStoreAsync();
  checkAuthSession();
  setupNavigation();
  setupFilters();
  renderDashboard();
  renderShowroom();
  renderAdminTable('Araclar');
  populateSelectDropdowns();
});

/* AUTHENTICATION & EMAIL 2FA SYSTEM */
function togglePasswordVisibility() {
  const input = document.getElementById('login-password-input');
  const icon = document.getElementById('toggle-password-icon');
  if (!input || !icon) return;

  if (input.type === 'password') {
    input.type = 'text';
    icon.className = 'fas fa-eye-slash';
  } else {
    input.type = 'password';
    icon.className = 'fas fa-eye';
  }
}

function checkAuthSession() {
  const loginOverlay = document.getElementById('login-modal');
  if (!activeSession) {
    loginOverlay.classList.add('active');
    populateLoginPersonnelSelect();
  } else {
    loginOverlay.classList.remove('active');
    updateUserSessionUI();
  }
}

function populateLoginPersonnelSelect() {
  const select = document.getElementById('login-personnel-select');
  if (!select) return;
  select.innerHTML = store.data.Personeller.map(p => `
    <option value="${p.PersonelID}">${p.Adi} ${p.Soyadi} - ${p.Gorev} (${p.Gmail})</option>
  `).join('');
}

function goToLoginStep(step) {
  if (step === 2) {
    const enteredPass = document.getElementById('login-password-input')?.value.trim();
    if (!enteredPass) {
      showToast('Lütfen giriş şifrenizi girin!', 'error');
      document.getElementById('login-password-input')?.focus();
      return;
    }
    document.getElementById('login-step-1').style.display = 'none';
    document.getElementById('login-step-2').style.display = 'block';
  } else {
    document.getElementById('login-step-2').style.display = 'none';
    document.getElementById('login-step-1').style.display = 'block';
  }
}

async function requestEmail2FACode() {
  // Protocol Check: file:// protocol cannot communicate with http server
  if (window.location.protocol === 'file:') {
    showToast('⚠️ E-posta göndermek için lütfen tarayıcınızdan http://localhost:3000 adresini açın! (Çift tıklayıp file:// ile açtığınızda sunucu çalışmaz).', 'error');
    alert('⚠️ DİKKAT: Sayfayı dosya olarak (file://) açtığınız için e-posta sunucusu çalışmıyor.\n\nLütfen "SUNUCUYU_BASLAT.bat" dosyasını çalıştırın ve tarayıcınızda:\nhttp://localhost:3000\nadresine gidin!');
    return;
  }

  const personnelId = document.getElementById('login-personnel-select').value;
  const personnel = store.data.Personeller.find(p => p.PersonelID == personnelId);
  if (!personnel) return;

  const customAppPass = document.getElementById('login-app-pass-input')?.value.trim() || "";

  active2FACode = Math.floor(100000 + Math.random() * 900000).toString();

  showToast(`📧 ${personnel.Gmail} adresine 2FA e-postası gönderiliyor...`, 'info');

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 7000);

  try {
    const res = await fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      signal: controller.signal,
      body: JSON.stringify({
        toEmail: personnel.Gmail,
        personelName: `${personnel.Adi} ${personnel.Soyadi}`,
        verificationCode: active2FACode,
        customPass: customAppPass.replace(/\s+/g, '')
      })
    });

    clearTimeout(timeoutId);
    const data = await res.json();

    if (data.success) {
      document.getElementById('2fa-input-group').style.display = 'block';
      showToast(`✅ Güvenlik doğrulama kodu ${personnel.Gmail} adresine e-posta olarak gönderildi! Lütfen gelen kutunuzu ve Spam klasörünü kontrol edin.`, 'success');
    } else {
      document.getElementById('2fa-input-group').style.display = 'block';
      showToast(`⚠️ E-posta gönderilemedi (${data.error}). Kodu ekranınıza yansıtıyoruz...`, 'warning');
      alert(`🔑 2FA Güvenlik Kodu: ${active2FACode}\n\n(Not: Gmail SMTP sunucusu yanıt vermediği için mail iletilemedi. Giriş yapmak için yukarıdaki 6 haneli kodu kullanabilirsiniz!)`);
    }
  } catch (err) {
    clearTimeout(timeoutId);
    document.getElementById('2fa-input-group').style.display = 'block';
    showToast(`⚠️ E-posta sunucusu yanıt vermedi, yedek doğrulama kodu ekranda açıldı.`, 'warning');
    alert(`🔑 2FA Güvenlik Kodu: ${active2FACode}\n\nE-posta sunucusu zaman aşımına uğradığı için 6 haneli kodunuz doğrudan ekranınıza tanımlandı. Giriş yapmak için yukarıdaki kodu kullanın.`);
  }
}

function processLoginSubmit(e) {
  e.preventDefault();
  const personnelId = document.getElementById('login-personnel-select').value;
  const enteredPass = document.getElementById('login-password-input')?.value.trim();
  const enteredCode = document.getElementById('login-2fa-input').value.trim();
  const personnel = store.data.Personeller.find(p => p.PersonelID == personnelId);

  if (!personnel) {
    showToast('Geçersiz personel seçimi!', 'error');
    return;
  }

  // Passive Worker Guard Check
  if (personnel.Calisma_Durumu == 0) {
    showToast(` Sayın ${personnel.Adi} ${personnel.Soyadi}, bu personel hesabı PASİF durumdadır ve sisteme giriş yetkisi yoktur!`, 'error');
    return;
  }

  // Password validation (Accepts 'Baris2026!' or '123456')
  if (enteredPass !== 'Baris2026!' && enteredPass !== '123456') {
    showToast('Girdiğiniz şifre hatalı! (Geçerli şifreniz: Baris2026! veya 123456)', 'error');
    return;
  }

  if (!active2FACode || enteredCode !== active2FACode) {
    showToast('Girdiğiniz 6 haneli e-posta doğrulama kodu hatalı!', 'error');
    return;
  }

  // Determine Role (Satış Müdürü -> Admin, else -> Staff)
  const isManager = personnel.Gorev.toLowerCase().includes('müdür') || personnel.Gorev.toLowerCase().includes('yönetici');
  const role = isManager ? 'admin' : 'staff';

  activeSession = {
    PersonelID: personnel.PersonelID,
    Name: `${personnel.Adi} ${personnel.Soyadi}`,
    Email: personnel.Gmail,
    Title: personnel.Gorev,
    Role: role
  };

  sessionStorage.setItem('ArabaSatisDB_ActiveSession', JSON.stringify(activeSession));

  showToast(`Hoş geldiniz Sayın ${activeSession.Name}! Sisteme başarıyla giriş yapıldı.`, 'success');
  document.getElementById('login-modal').classList.remove('active');
  updateUserSessionUI();

  // Reset Login Form state
  document.getElementById('email-2fa-sim-container').style.display = 'none';
  document.getElementById('2fa-input-group').style.display = 'none';
  document.getElementById('login-form').reset();
  active2FACode = null;
}

function processLogout() {
  sessionStorage.removeItem('ArabaSatisDB_ActiveSession');
  activeSession = null;
  showToast('Sistemden güvenli çıkış yapıldı.', 'info');
  checkAuthSession();
}

function updateUserSessionUI() {
  if (!activeSession) return;

  const userBadge = document.getElementById('user-profile-display');
  if (userBadge) {
    userBadge.innerHTML = `
      <div class="user-badge">
        <div class="avatar">${activeSession.Name.split(' ').map(n=>n[0]).join('')}</div>
        <div class="user-details">
          <h4>${activeSession.Name}</h4>
          <p><i class="fas fa-shield-alt"></i> ${activeSession.Role === 'admin' ? 'Satış Müdürü (Yönetici)' : 'Satış Danışmanı'}</p>
        </div>
      </div>
    `;
  }

  const sqlNavItem = document.querySelector('[data-section="sql"]');
  if (sqlNavItem) {
    if (activeSession.Role === 'admin') {
      sqlNavItem.style.display = 'flex';
      sqlNavItem.style.opacity = '1';
    } else {
      sqlNavItem.style.display = 'none';
      if (currentTab === 'sql') {
        const dashboardBtn = document.querySelector('[data-section="dashboard"]');
        if (dashboardBtn) dashboardBtn.click();
      }
    }
  }
}

function toggleMobileSidebar() {
  const sidebar = document.getElementById('app-sidebar');
  const backdrop = document.getElementById('sidebar-backdrop');
  if (!sidebar) return;

  sidebar.classList.toggle('mobile-open');
  if (backdrop) backdrop.classList.toggle('active');
}

function setupNavigation() {
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const targetSection = item.getAttribute('data-section');
      if (!targetSection) return;

      if (targetSection === 'sql' && (!activeSession || activeSession.Role !== 'admin')) {
        showToast('T-SQL Şeması ve Export ekranına sadece YÖNETİCİ rolü erişebilir!', 'error');
        return;
      }

      navItems.forEach(i => i.classList.remove('active'));
      item.classList.add('active');

      document.querySelectorAll('.app-section').forEach(sec => sec.classList.remove('active'));
      const activeSec = document.getElementById(`section-${targetSection}`);
      if (activeSec) activeSec.classList.add('active');

      // Auto close mobile sidebar after selecting a page
      const sidebar = document.getElementById('app-sidebar');
      const backdrop = document.getElementById('sidebar-backdrop');
      if (sidebar) sidebar.classList.remove('mobile-open');
      if (backdrop) backdrop.classList.remove('active');

      currentTab = targetSection;
      if (targetSection === 'dashboard') renderDashboard();
      if (targetSection === 'showroom') renderShowroom();
      if (targetSection === 'sales') prepareSaleForm();
      if (targetSection === 'admin') renderAdminTable(currentAdminTable);
      if (targetSection === 'sql') renderSqlSchemaView();
    });
  });
}

function showToast(message, type = 'info') {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  let icon = 'info-circle';
  if (type === 'success') icon = 'check-circle';
  if (type === 'error') icon = 'exclamation-triangle';

  toast.innerHTML = `<i class="fas fa-${icon}"></i> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

/* DASHBOARD */
function renderDashboard() {
  const totalVehicles = store.data.Araclar.length;
  const availableVehicles = store.data.Araclar.filter(a => a.Satis_Durumu == 0).length;
  const soldVehicles = store.data.Araclar.filter(a => a.Satis_Durumu == 1).length;
  
  const totalRevenue = store.data.Satis_Tablosu.reduce((sum, s) => sum + parseFloat(s.Satis_Fiyati || 0), 0);
  const totalStockValue = store.data.Araclar.filter(a => a.Satis_Durumu == 0).reduce((sum, a) => sum + parseFloat(a.Fiyat || 0), 0);

  document.getElementById('stat-total-revenue').innerText = formatCurrency(totalRevenue);
  document.getElementById('stat-stock-value').innerText = formatCurrency(totalStockValue);
  document.getElementById('stat-available-count').innerText = `${availableVehicles} Araç`;
  document.getElementById('stat-sold-count').innerText = `${soldVehicles} Satış`;

  const recentSalesTbody = document.getElementById('recent-sales-tbody');
  if (recentSalesTbody) {
    if (store.data.Satis_Tablosu.length === 0) {
      recentSalesTbody.innerHTML = `<tr><td colspan="6" style="text-align:center; color:var(--text-muted);">Henüz gerçekleşen satış bulunmuyor.</td></tr>`;
    } else {
      recentSalesTbody.innerHTML = store.data.Satis_Tablosu.slice(-5).reverse().map(s => {
        const vehicle = store.data.Araclar.find(a => a.Sasi_No === s.Sasi_No);
        const carTitle = vehicle ? `${store.getBrandName(vehicle.MarkaID)} ${store.getModelName(vehicle.ModelID)}` : s.Sasi_No;
        return `
          <tr>
            <td><strong>#${s.Satis_NO}</strong></td>
            <td><span style="background:rgba(59,130,246,0.15); color:#60a5fa; padding:4px 8px; border-radius:4px; font-family:monospace;">${s.Sasi_No}</span></td>
            <td>${carTitle}</td>
            <td>${store.getCustomerName(s.MusteriID)}</td>
            <td>${store.getPersonnelName(s.Satan_PersonelID)}</td>
            <td><strong style="color:#34d399;">${formatCurrency(s.Satis_Fiyati)}</strong></td>
          </tr>
        `;
      }).join('');
    }
  }

  const brandListContainer = document.getElementById('brand-stats-container');
  if (brandListContainer) {
    const brandCounts = {};
    store.data.Araclar.forEach(a => {
      const bName = store.getBrandName(a.MarkaID);
      brandCounts[bName] = (brandCounts[bName] || 0) + 1;
    });

    brandListContainer.innerHTML = Object.entries(brandCounts).map(([brand, count]) => {
      const percent = Math.round((count / totalVehicles) * 100) || 0;
      return `
        <div style="margin-bottom:12px;">
          <div style="display:flex; justify-content:space-between; margin-bottom:4px; font-size:0.85rem;">
            <span>${brand}</span>
            <span style="color:var(--text-muted);">${count} Araç (%${percent})</span>
          </div>
          <div style="height:6px; background:rgba(255,255,255,0.06); border-radius:3px; overflow:hidden;">
            <div style="width:${percent}%; height:100%; background:linear-gradient(90deg, var(--primary), var(--accent-purple)); border-radius:3px;"></div>
          </div>
        </div>
      `;
    }).join('');
  }
}

/* SHOWROOM */
function setupFilters() {
  const brandSelect = document.getElementById('filter-brand');
  const fuelSelect = document.getElementById('filter-fuel');
  const gearSelect = document.getElementById('filter-gear');
  const statusSelect = document.getElementById('filter-status');
  const searchInput = document.getElementById('filter-search');

  if (brandSelect) {
    brandSelect.innerHTML = `<option value="">Tüm Markalar</option>` + 
      store.data.Markalar.map(m => `<option value="${m.MarkaID}">${m.Marka_Adi}</option>`).join('');
  }
  if (fuelSelect) {
    fuelSelect.innerHTML = `<option value="">Tüm Yakıt Türleri</option>` + 
      store.data.Yakit_Turu.map(y => `<option value="${y.YakitID}">${y.Yakit_turu}</option>`).join('');
  }
  if (gearSelect) {
    gearSelect.innerHTML = `<option value="">Tüm Şanzımanlar</option>` + 
      store.data.Sansimanlar.map(s => `<option value="${s.SansimanID}">${s.SansimanTuru}</option>`).join('');
  }

  [brandSelect, fuelSelect, gearSelect, statusSelect].forEach(el => {
    if (el) el.addEventListener('change', renderShowroom);
  });
  if (searchInput) searchInput.addEventListener('input', renderShowroom);
}

const modelImageMap = {
  // BMW
  "M4 Competition Coupe": "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&auto=format&fit=crop&q=80",
  "320i Sedan M Sport": "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&auto=format&fit=crop&q=80",
  "530i xDrive Executive": "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=800&auto=format&fit=crop&q=80",

  // Mercedes-Benz
  "C200 d AMG Edition": "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&auto=format&fit=crop&q=80",
  "E300 d 4MATIC AMG": "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&auto=format&fit=crop&q=80",
  "G63 AMG V8 Biturbo": "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=1000&auto=format&fit=crop&q=80",

  // Audi
  "A6 Sedan 45 TFSI Quattro": "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=800&auto=format&fit=crop&q=80",
  "RS6 Avant 4.0 TFSI V8": "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&auto=format&fit=crop&q=80",
  "Q8 50 TDI Quattro S-Line": "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?w=800&auto=format&fit=crop&q=80",

  // Porsche
  "Taycan Turbo S EV": "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=800&auto=format&fit=crop&q=80",
  "911 Carrera S Coupe": "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&auto=format&fit=crop&q=80",
  "Panamera 4S E-Hybrid": "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&auto=format&fit=crop&q=80",

  // Volkswagen
  "Golf 1.5 eTSI R-Line": "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=800&auto=format&fit=crop&q=80",
  "Tiguan 2.0 TDI Elegance": "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=800&auto=format&fit=crop&q=80",
  "Passat Variant 2.0 TDI R-Line": "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&auto=format&fit=crop&q=80",

  // Volvo
  "XC90 B5 AWD Ultimate": "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&auto=format&fit=crop&q=80",
  "XC60 Recharge T8 Plug-in": "https://images.unsplash.com/photo-1563720223185-11003d516935?w=800&auto=format&fit=crop&q=80",
  "S90 B5 AWD Inscription": "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&auto=format&fit=crop&q=80"
};

const brandFallbackMap = {
  "BMW": "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&auto=format&fit=crop&q=80",
  "Mercedes-Benz": "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&auto=format&fit=crop&q=80",
  "Audi": "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=800&auto=format&fit=crop&q=80",
  "Porsche": "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=800&auto=format&fit=crop&q=80",
  "Volkswagen": "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=800&auto=format&fit=crop&q=80",
  "Volvo": "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&auto=format&fit=crop&q=80"
};

function renderShowroom() {
  const grid = document.getElementById('showroom-grid');
  if (!grid) return;

  const brandVal = document.getElementById('filter-brand')?.value;
  const fuelVal = document.getElementById('filter-fuel')?.value;
  const gearVal = document.getElementById('filter-gear')?.value;
  const statusVal = document.getElementById('filter-status')?.value;
  const searchVal = document.getElementById('filter-search')?.value.toLowerCase().trim();

  let filtered = store.data.Araclar.filter(car => {
    if (brandVal && car.MarkaID != brandVal) return false;
    if (fuelVal && car.YakitID != fuelVal) return false;
    if (gearVal && car.SansimanID != gearVal) return false;
    if (statusVal !== '' && statusVal !== undefined && car.Satis_Durumu != statusVal) return false;
    if (searchVal) {
      const bName = store.getBrandName(car.MarkaID).toLowerCase();
      const mName = store.getModelName(car.ModelID).toLowerCase();
      const vin = car.Sasi_No.toLowerCase();
      if (!bName.includes(searchVal) && !mName.includes(searchVal) && !vin.includes(searchVal)) {
        return false;
      }
    }
    return true;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 60px; color: var(--text-muted);" class="glass-card">
        <i class="fas fa-car-side" style="font-size: 3rem; margin-bottom: 16px; opacity: 0.5;"></i>
        <h3>Aranan kriterlere uygun araç bulunamadı</h3>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(car => {
    const brandName = store.getBrandName(car.MarkaID);
    const modelName = store.getModelName(car.ModelID);
    const packageName = store.getPackageName(car.PaketID);
    const gearName = store.getTransmissionName(car.SansimanID);
    const fuelName = store.getFuelName(car.YakitID);
    const engineName = store.getEngineName(car.MotorID);
    const isSold = car.Satis_Durumu == 1;

    const imgUrl = car.Resim_URL || modelImageMap[modelName] || brandFallbackMap[brandName] || "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&auto=format&fit=crop&q=80";

    return `
      <div class="glass-card car-card">
        <div class="car-card-header">
          <img src="${imgUrl}" alt="${brandName} ${modelName}" class="car-image" />
          <span class="status-badge ${isSold ? 'sold' : 'available'}">
            ${isSold ? '<i class="fas fa-check-circle"></i> SATILDI' : '<i class="fas fa-tag"></i> STOKTA'}
          </span>
        </div>
        <div class="car-body">
          <div class="car-title">
            <div>
              <h3>${brandName} ${modelName}</h3>
              <p>${packageName}</p>
            </div>
          </div>
          
          <div class="car-specs">
            <div class="spec-item"><i class="fas fa-gas-pump"></i> <span>${fuelName}</span></div>
            <div class="spec-item"><i class="fas fa-cog"></i> <span>${gearName}</span></div>
            <div class="spec-item"><i class="fas fa-microchip"></i> <span>${engineName}</span></div>
            <div class="spec-item"><i class="fas fa-palette"></i> <span>${car.Renk}</span></div>
          </div>

          <div style="font-size:0.75rem; color:var(--text-muted); margin-bottom:12px; font-family:monospace;">
            Şasi: ${car.Sasi_No}
          </div>

          <div class="car-price-row">
            <div class="price-tag">${formatCurrency(car.Fiyat)}</div>
            ${!isSold ? `
              <button class="btn btn-emerald btn-sm" onclick="openQuickSaleModal('${car.Sasi_No}')">
                <i class="fas fa-handshake"></i> Satış Yap
              </button>
            ` : `
              <button class="btn btn-secondary btn-sm" disabled style="opacity:0.6; cursor:not-allowed;">
                <i class="fas fa-lock"></i> Satıldı
              </button>
            `}
          </div>
        </div>
      </div>
    `;
  }).join('');
}

/* SALES PROCESS */
function prepareSaleForm() {
  populateSelectDropdowns();
}

function populateSelectDropdowns() {
  const carSelect = document.getElementById('sale-car-select');
  const custSelect = document.getElementById('sale-customer-select');
  const persSelect = document.getElementById('sale-personnel-select');

  if (carSelect) {
    const availableCars = store.data.Araclar.filter(a => a.Satis_Durumu == 0);
    carSelect.innerHTML = `<option value="">-- Satış Yapılacak Araç Seçin --</option>` + 
      availableCars.map(c => {
        const b = store.getBrandName(c.MarkaID);
        const m = store.getModelName(c.ModelID);
        return `<option value="${c.Sasi_No}">${b} ${m} - ${c.Sasi_No} (${formatCurrency(c.Fiyat)})</option>`;
      }).join('');
  }

  if (custSelect) {
    custSelect.innerHTML = `<option value="">-- Müşteri Seçin --</option>` + 
      store.data.Musteriler.filter(m => m.Kayit_Durumu == 1).map(c => `
        <option value="${c.MusteriID}">${c.Musteri_Adi} ${c.Musteri_Soyadi} (TC: ${c.Musteri_Tc_NO})</option>
      `).join('');
  }

  if (persSelect) {
    persSelect.innerHTML = `<option value="">-- Satışı Yapan Personel --</option>` + 
      store.data.Personeller.filter(p => p.Calisma_Durumu == 1).map(p => `
        <option value="${p.PersonelID}">${p.Adi} ${p.Soyadi} (${p.Gorev})</option>
      `).join('');
  }
}

function autoFillCarPrice() {
  const sasiNo = document.getElementById('sale-car-select').value;
  const priceInput = document.getElementById('sale-price-input');
  if (!sasiNo) {
    priceInput.value = '';
    return;
  }
  const car = store.data.Araclar.find(a => a.Sasi_No === sasiNo);
  if (car) {
    priceInput.value = car.Fiyat;
  }
}

function openQuickSaleModal(sasiNo) {
  const navItem = document.querySelector('[data-section="sales"]');
  if (navItem) navItem.click();

  setTimeout(() => {
    const carSelect = document.getElementById('sale-car-select');
    if (carSelect) {
      carSelect.value = sasiNo;
      autoFillCarPrice();
    }
  }, 100);
}

async function processSaleTransaction(e) {
  if (e) e.preventDefault();

  const sasiNo = document.getElementById('sale-car-select').value;
  const musteriId = parseInt(document.getElementById('sale-customer-select').value);
  const personelId = parseInt(document.getElementById('sale-personnel-select').value);
  const satisFiyati = parseFloat(document.getElementById('sale-price-input').value);
  const satisTarihi = document.getElementById('sale-date-input').value || new Date().toISOString().split('T')[0];

  if (!sasiNo || !musteriId || !personelId || !satisFiyati) {
    showToast('Lütfen satış formundaki tüm alanları eksiksiz doldurun!', 'error');
    return;
  }

  try {
    const res = await fetch('/api/sales', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        Sasi_No: sasiNo,
        MusteriID: musteriId,
        Satan_PersonelID: personelId,
        Satis_Fiyati: satisFiyati,
        Satis_Tarihi: satisTarihi
      })
    });

    if (!res.ok) {
      const err = await res.json();
      showToast(`❌ Satış gerçekleştirilemedi: ${err.error || 'Sunucu hatası'}`, 'error');
      return;
    }

    const newSaleRecord = await res.json();

    await store.loadStoreAsync();
    showToast(`Satış başarıyla gerçekleşti! Satış No: #${newSaleRecord.Satis_NO}`, 'success');

    openInvoiceModal(newSaleRecord);

    document.getElementById('sales-form').reset();
    populateSelectDropdowns();
    renderDashboard();
    renderShowroom();
  } catch (err) {
    showToast(`❌ Bağlantı hatası: ${err.message}`, 'error');
  }
}

async function togglePersonnelStatus(personnelId) {
  try {
    const res = await fetch(`/api/personnel/${personnelId}/toggle-status`, {
      method: 'POST'
    });

    if (!res.ok) {
      showToast('❌ Personel durumu değiştirilemedi.', 'error');
      return;
    }

    const updatedPerson = await res.json();
    await store.loadStoreAsync();

    const statusText = updatedPerson.Calisma_Durumu == 1 ? 'AKTİF' : 'PASİF';
    showToast(`${updatedPerson.Adi} ${updatedPerson.Soyadi} durumu ${statusText} olarak değiştirildi.`, updatedPerson.Calisma_Durumu == 1 ? 'success' : 'info');

    renderAdminTable('Personeller');
    populateLoginPersonnelSelect();
  } catch (err) {
    showToast(`❌ Sunucu hatası: ${err.message}`, 'error');
  }
}

async function saveCrudRecord(e) {
  e.preventDefault();
  const form = document.getElementById('crud-form');
  const formData = new FormData(form);
  const tableName = currentAdminTable;
  const pkValue = document.getElementById('crud-record-pk').value;

  const recordPayload = {};
  formData.forEach((value, key) => {
    if (value === 'AUTO') return;
    if (key.includes('ID') || key.includes('Aktif') || key.includes('Durumu')) {
      recordPayload[key] = parseInt(value) || value;
    } else if (key.includes('Fiyat')) {
      recordPayload[key] = parseFloat(value) || 0;
    } else {
      recordPayload[key] = value;
    }
  });

  try {
    let res;
    if (pkValue) {
      // HTTP PUT (Update)
      res = await fetch(`/api/crud/${tableName}/${encodeURIComponent(pkValue)}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(recordPayload)
      });
    } else {
      // HTTP POST (Create)
      res = await fetch(`/api/crud/${tableName}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(recordPayload)
      });
    }

    if (!res.ok) {
      const err = await res.json();
      showToast(`❌ Kayıt kaydedilemedi: ${err.error || 'Sunucu hatası'}`, 'error');
      return;
    }

    await store.loadStoreAsync();
    showToast(pkValue ? `${tableName} kaydı güncellendi.` : `Yeni ${tableName} kaydı eklendi.`, 'success');

    closeCrudModal();
    renderAdminTable(tableName);
    renderDashboard();
    renderShowroom();
  } catch (err) {
    showToast(`❌ Bağlantı hatası: ${err.message}`, 'error');
  }
}

async function deleteAdminRecord(tableName, pkValue) {
  if (!confirm(`${tableName} tablosundan #${pkValue} kaydını silmek istediğinize emin misiniz?`)) return;

  try {
    const res = await fetch(`/api/crud/${tableName}/${encodeURIComponent(pkValue)}`, {
      method: 'DELETE'
    });

    if (!res.ok) {
      const err = await res.json();
      showToast(`❌ Kayıt silinemedi: ${err.error || 'Sunucu hatası'}`, 'error');
      return;
    }

    await store.loadStoreAsync();
    showToast(`Kayıt C# API üzerinden başarıyla silindi.`, 'info');

    renderAdminTable(tableName);
    renderDashboard();
    renderShowroom();
  } catch (err) {
    showToast(`❌ Bağlantı hatası: ${err.message}`, 'error');
  }
}

function openInvoiceModal(saleRecord) {
  const modal = document.getElementById('invoice-modal');
  const container = document.getElementById('invoice-printable-area');

  const car = store.data.Araclar.find(a => a.Sasi_No === saleRecord.Sasi_No);
  const customer = store.data.Musteriler.find(m => m.MusteriID == saleRecord.MusteriID);
  const personnel = store.data.Personeller.find(p => p.PersonelID == saleRecord.Satan_PersonelID);

  const brandName = car ? store.getBrandName(car.MarkaID) : '';
  const modelName = car ? store.getModelName(car.ModelID) : '';
  const packageName = car ? store.getPackageName(car.PaketID) : '';

  container.innerHTML = `
    <div class="invoice-box">
      <div class="invoice-header">
        <div>
          <h2 style="color:#0f172a; font-weight:800; font-size:1.5rem;">ARABA SATIŞ GALERİSİ</h2>
          <p style="color:#64748b; font-size:0.85rem;">Resmi Araç Satış Sözleşmesi & Makbuzu</p>
        </div>
        <div class="invoice-title">
          <h3 style="color:#3b82f6;">SATIŞ NO: #${saleRecord.Satis_NO}</h3>
          <p style="color:#64748b; font-size:0.85rem;">Tarih: ${saleRecord.Satis_Tarihi}</p>
        </div>
      </div>

      <div class="invoice-details-grid">
        <div>
          <h4 style="color:#1e293b; margin-bottom:6px;">MÜŞTERİ BİLGİLERİ</h4>
          <p><strong>Ad Soyad:</strong> ${customer ? customer.Musteri_Adi + ' ' + customer.Musteri_Soyadi : ''}</p>
          <p><strong>TC Kimlik No:</strong> ${customer ? customer.Musteri_Tc_NO : ''}</p>
          <p><strong>Telefon:</strong> ${customer ? customer.Musteri_tel_No : ''}</p>
          <p><strong>E-posta:</strong> ${customer ? customer.Musteri_Gmail : ''}</p>
        </div>
        <div>
          <h4 style="color:#1e293b; margin-bottom:6px;">SATIŞ TEMSİLCİSİ</h4>
          <p><strong>Personel:</strong> ${personnel ? personnel.Adi + ' ' + personnel.Soyadi : ''}</p>
          <p><strong>Görevi:</strong> ${personnel ? personnel.Gorev : ''}</p>
        </div>
      </div>

      <table class="invoice-table">
        <thead>
          <tr>
            <th>Şasi No</th>
            <th>Marka / Model</th>
            <th>Paket</th>
            <th>Tutar</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>${saleRecord.Sasi_No}</code></td>
            <td>${brandName} ${modelName}</td>
            <td>${packageName}</td>
            <td><strong>${formatCurrency(saleRecord.Satis_Fiyati)}</strong></td>
          </tr>
        </tbody>
      </table>
    </div>
  `;

  modal.classList.add('active');
}

function closeInvoiceModal() {
  document.getElementById('invoice-modal').classList.remove('active');
}

function printInvoice() {
  window.print();
}

/* ADMIN CRUD WITH NAMED FOREIGN KEYS RESOLUTION */
function renderAdminTable(tableName) {
  currentAdminTable = tableName;

  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-table') === tableName);
  });

  const titleEl = document.getElementById('admin-table-title');
  const tbodyEl = document.getElementById('admin-table-tbody');
  const theadEl = document.getElementById('admin-table-thead');

  if (titleEl) titleEl.innerText = `Tablo Yönetimi: ${tableName}`;

  const dataList = store.data[tableName] || [];

  if (dataList.length === 0) {
    theadEl.innerHTML = '';
    tbodyEl.innerHTML = `<tr><td style="text-align:center; padding:40px; color:var(--text-muted);">Bu tabloda kayıtlı veri bulunmuyor.</td></tr>`;
    return;
  }

  const sampleObj = dataList[0];
  const keys = Object.keys(sampleObj);

  theadEl.innerHTML = `
    <tr>
      ${keys.map(k => `<th>${k}</th>`).join('')}
      <th style="text-align:right;">İşlemler</th>
    </tr>
  `;

  tbodyEl.innerHTML = dataList.map((row) => {
    const primaryKeyVal = row[keys[0]];

    return `
      <tr>
        ${keys.map(k => {
          let val = row[k];

          // NAMED FOREIGN KEY FORMATTING (Replaces numeric IDs with names!)
          if (k === 'MarkaID') {
            const name = store.getBrandName(val);
            return `<td><span class="fk-named-badge"><i class="fas fa-tag"></i> ${name} <span class="fk-id">(ID: ${val})</span></span></td>`;
          }
          if (k === 'ModelID') {
            const name = store.getModelName(val);
            return `<td><span class="fk-named-badge"><i class="fas fa-car-side"></i> ${name} <span class="fk-id">(ID: ${val})</span></span></td>`;
          }
          if (k === 'PaketID') {
            const name = store.getPackageName(val);
            return `<td><span class="fk-named-badge"><i class="fas fa-box"></i> ${name} <span class="fk-id">(ID: ${val})</span></span></td>`;
          }
          if (k === 'SansimanID') {
            const name = store.getTransmissionName(val);
            return `<td><span class="fk-named-badge"><i class="fas fa-cog"></i> ${name} <span class="fk-id">(ID: ${val})</span></span></td>`;
          }
          if (k === 'YakitID') {
            const name = store.getFuelName(val);
            return `<td><span class="fk-named-badge"><i class="fas fa-gas-pump"></i> ${name} <span class="fk-id">(ID: ${val})</span></span></td>`;
          }
          if (k === 'MotorID') {
            const name = store.getEngineName(val);
            return `<td><span class="fk-named-badge"><i class="fas fa-bolt"></i> ${name} <span class="fk-id">(ID: ${val})</span></span></td>`;
          }
          if (k === 'Ekleyen_PersonelID' || k === 'Satan_PersonelID') {
            const name = store.getPersonnelName(val);
            return `<td><span class="fk-named-badge"><i class="fas fa-user-tie"></i> ${name} <span class="fk-id">(ID: ${val})</span></span></td>`;
          }
          if (k === 'MusteriID') {
            const name = store.getCustomerName(val);
            return `<td><span class="fk-named-badge"><i class="fas fa-user"></i> ${name} <span class="fk-id">(ID: ${val})</span></span></td>`;
          }

          if (typeof val === 'boolean' || k.includes('Aktif') || k.includes('Durumu')) {
            val = val ? `<span style="color:#34d399; font-weight:bold;">1 (Aktif/Stokta)</span>` : `<span style="color:#f87171; font-weight:bold;">0 (Pasif/Satıldı)</span>`;
          } else if (k.includes('Fiyat')) {
            val = formatCurrency(val);
          }

          return `<td>${val}</td>`;
        }).join('')}
        <td style="text-align:right; white-space:nowrap;">
          ${tableName === 'Personeller' ? `
            <button class="btn btn-emerald btn-sm" onclick="togglePersonnelStatus('${primaryKeyVal}')" title="Aktif / Pasif Değiştir">
              <i class="fas fa-toggle-on"></i> Aktif/Pasif
            </button>
          ` : ''}
          <button class="btn btn-secondary btn-sm" onclick="editAdminRecord('${tableName}', '${primaryKeyVal}')">
            <i class="fas fa-edit"></i>
          </button>
          <button class="btn btn-danger btn-sm" onclick="deleteAdminRecord('${tableName}', '${primaryKeyVal}')">
            <i class="fas fa-trash-alt"></i>
          </button>
        </td>
      </tr>
    `;
  }).join('');
}

function togglePersonnelStatus(personnelId) {
  const personnel = store.data.Personeller.find(p => p.PersonelID == personnelId);
  if (!personnel) return;

  personnel.Calisma_Durumu = personnel.Calisma_Durumu == 1 ? 0 : 1;
  store.saveStore();

  const statusText = personnel.Calisma_Durumu == 1 ? 'AKTİF' : 'PASİF';
  showToast(`${personnel.Adi} ${personnel.Soyadi} durumu ${statusText} olarak değiştirildi.`, personnel.Calisma_Durumu == 1 ? 'success' : 'info');

  renderAdminTable('Personeller');
  populateLoginPersonnelSelect();
}

function openAddRecordModal() {
  const tableName = currentAdminTable;
  const modal = document.getElementById('crud-modal');
  const modalTitle = document.getElementById('crud-modal-title');
  const formContainer = document.getElementById('crud-form-fields');

  modalTitle.innerText = `Yeni Kayıt Ekle: ${tableName}`;
  formContainer.innerHTML = generateFormInputsForTable(tableName);

  document.getElementById('crud-record-pk').value = '';
  modal.classList.add('active');
}

function editAdminRecord(tableName, pkValue) {
  const modal = document.getElementById('crud-modal');
  const modalTitle = document.getElementById('crud-modal-title');
  const formContainer = document.getElementById('crud-form-fields');

  modalTitle.innerText = `Kayıt Düzenle: ${tableName} (${pkValue})`;
  
  const record = store.data[tableName].find(item => {
    const pkKey = Object.keys(item)[0];
    return item[pkKey] == pkValue;
  });

  if (!record) return;

  formContainer.innerHTML = generateFormInputsForTable(tableName, record);
  document.getElementById('crud-record-pk').value = pkValue;

  modal.classList.add('active');
}

function generateFormInputsForTable(tableName, record = null) {
  const sample = store.data[tableName]?.[0] || {};
  const keys = Object.keys(sample);

  return keys.map((key, idx) => {
    const isPk = idx === 0;
    const isIdentity = isPk && key.toLowerCase().includes('id');
    const val = record ? record[key] : '';

    if (isIdentity && !record) {
      return `<input type="hidden" name="${key}" value="AUTO" />`;
    }

    if (key === 'Ekleyen_PersonelID' || key === 'Satan_PersonelID') {
      return `
        <div class="form-group">
          <label>${key}</label>
          <select class="form-control form-control-no-icon" name="${key}">
            ${store.data.Personeller.map(p => `<option value="${p.PersonelID}" ${val == p.PersonelID ? 'selected' : ''}>${p.Adi} ${p.Soyadi}</option>`).join('')}
          </select>
        </div>
      `;
    }
    if (key === 'MarkaID') {
      return `
        <div class="form-group">
          <label>Marka</label>
          <select class="form-control form-control-no-icon" name="${key}">
            ${store.data.Markalar.map(m => `<option value="${m.MarkaID}" ${val == m.MarkaID ? 'selected' : ''}>${m.Marka_Adi}</option>`).join('')}
          </select>
        </div>
      `;
    }
    if (key === 'ModelID') {
      return `
        <div class="form-group">
          <label>Model</label>
          <select class="form-control form-control-no-icon" name="${key}">
            ${store.data.Modeller.map(m => `<option value="${m.ModelID}" ${val == m.ModelID ? 'selected' : ''}>${m.Model_Adi}</option>`).join('')}
          </select>
        </div>
      `;
    }
    if (key === 'PaketID') {
      return `
        <div class="form-group">
          <label>Paket</label>
          <select class="form-control form-control-no-icon" name="${key}">
            ${store.data.Paketler.map(p => `<option value="${p.PaketID}" ${val == p.PaketID ? 'selected' : ''}>${p.Paket_Adi}</option>`).join('')}
          </select>
        </div>
      `;
    }
    if (key === 'SansimanID') {
      return `
        <div class="form-group">
          <label>Şanzıman</label>
          <select class="form-control form-control-no-icon" name="${key}">
            ${store.data.Sansimanlar.map(s => `<option value="${s.SansimanID}" ${val == s.SansimanID ? 'selected' : ''}>${s.SansimanTuru}</option>`).join('')}
          </select>
        </div>
      `;
    }
    if (key === 'YakitID') {
      return `
        <div class="form-group">
          <label>Yakıt Türü</label>
          <select class="form-control form-control-no-icon" name="${key}">
            ${store.data.Yakit_Turu.map(y => `<option value="${y.YakitID}" ${val == y.YakitID ? 'selected' : ''}>${y.Yakit_turu}</option>`).join('')}
          </select>
        </div>
      `;
    }
    if (key === 'MotorID') {
      return `
        <div class="form-group">
          <label>Motor Türü</label>
          <select class="form-control form-control-no-icon" name="${key}">
            ${store.data.Motor_Turu.map(m => `<option value="${m.MotorID}" ${val == m.MotorID ? 'selected' : ''}>${m.Motor_Adi}</option>`).join('')}
          </select>
        </div>
      `;
    }
    if (key === 'MusteriID') {
      return `
        <div class="form-group">
          <label>Müşteri</label>
          <select class="form-control form-control-no-icon" name="${key}">
            ${store.data.Musteriler.map(m => `<option value="${m.MusteriID}" ${val == m.MusteriID ? 'selected' : ''}>${m.Musteri_Adi} ${m.Musteri_Soyadi}</option>`).join('')}
          </select>
        </div>
      `;
    }

    if (key.includes('Aktif') || key.includes('Durumu')) {
      return `
        <div class="form-group">
          <label>${key}</label>
          <select class="form-control form-control-no-icon" name="${key}">
            <option value="1" ${val == 1 || val === '' ? 'selected' : ''}>1 - Aktif / Stokta</option>
            <option value="0" ${val == 0 && val !== '' ? 'selected' : ''}>0 - Pasif / Satıldı</option>
          </select>
        </div>
      `;
    }

    return `
      <div class="form-group ${key.includes('Adres') || key.includes('Sasi') ? 'full-width' : ''}">
        <label>${key}</label>
        <input type="${key.includes('Tarih') ? 'date' : (key.includes('Fiyat') ? 'number' : 'text')}" 
               class="form-control form-control-no-icon" 
               name="${key}" 
               value="${val}" 
               ${isPk && record ? 'readonly' : ''} 
               required />
      </div>
    `;
  }).join('');
}

function saveCrudRecord(e) {
  e.preventDefault();
  const form = document.getElementById('crud-form');
  const formData = new FormData(form);
  const tableName = currentAdminTable;
  const pkValue = document.getElementById('crud-record-pk').value;

  const newRecord = {};
  formData.forEach((value, key) => {
    if (value === 'AUTO') return;
    if (key.includes('ID') || key.includes('Aktif') || key.includes('Durumu')) {
      newRecord[key] = parseInt(value) || value;
    } else if (key.includes('Fiyat')) {
      newRecord[key] = parseFloat(value) || 0;
    } else {
      newRecord[key] = value;
    }
  });

  const list = store.data[tableName];
  const pkKey = Object.keys(list[0] || {})[0];

  if (pkValue) {
    const index = list.findIndex(item => item[pkKey] == pkValue);
    if (index !== -1) {
      list[index] = { ...list[index], ...newRecord };
      showToast(`${tableName} kaydı güncellendi.`, 'success');
    }
  } else {
    if (pkKey.toLowerCase().includes('id')) {
      const maxId = list.length > 0 ? Math.max(...list.map(item => parseInt(item[pkKey]) || 0)) : 0;
      newRecord[pkKey] = maxId + 1;
    }
    list.push(newRecord);
    showToast(`Yeni ${tableName} kaydı eklendi.`, 'success');
  }

  store.saveStore();
  closeCrudModal();
  renderAdminTable(tableName);
  renderDashboard();
  renderShowroom();
}

function deleteAdminRecord(tableName, pkValue) {
  if (!confirm(`${tableName} tablosundan #${pkValue} kaydını silmek istediğinize emin misiniz?`)) return;

  const list = store.data[tableName];
  const pkKey = Object.keys(list[0])[0];

  store.data[tableName] = list.filter(item => item[pkKey] != pkValue);
  store.saveStore();

  showToast(`Kayıt başarıyla silindi.`, 'info');
  renderAdminTable(tableName);
  renderDashboard();
  renderShowroom();
}

function closeCrudModal() {
  document.getElementById('crud-modal').classList.remove('active');
}

/* SQL SCHEMA VIEWER & EXPORTER (ADMIN ONLY) */
const rawSqlSchema = `USE [ArabaSatisDB]
GO
CREATE TABLE [dbo].[Araclar](
	[Sasi_No] [nvarchar](100) NOT NULL PRIMARY KEY,
	[MarkaID] [int] NOT NULL,
	[ModelID] [int] NOT NULL,
	[PaketID] [int] NOT NULL,
	[SansimanID] [int] NOT NULL,
	[YakitID] [int] NOT NULL,
	[MotorID] [int] NOT NULL,
	[Renk] [nvarchar](50) NOT NULL,
	[Fiyat] [decimal](18, 2) NOT NULL,
	[Ekleyen_PersonelID] [int] NOT NULL,
	[Satis_Durumu] [bit] NOT NULL DEFAULT ((0))
);
GO
CREATE TABLE [dbo].[Markalar](
	[MarkaID] [int] IDENTITY(1,1) NOT NULL PRIMARY KEY,
	[Marka_Adi] [nvarchar](50) NOT NULL UNIQUE,
	[Ekleyen_PersonelID] [int] NOT NULL,
	[Aktif_Mi] [bit] NOT NULL DEFAULT ((1))
);
GO
CREATE TABLE [dbo].[Modeller](
	[ModelID] [int] IDENTITY(1,1) NOT NULL PRIMARY KEY,
	[Model_Adi] [nvarchar](50) NOT NULL UNIQUE,
	[Islem_Tarihi] [date] NOT NULL,
	[Ekleyen_PersonelID] [int] NOT NULL,
	[Aktif_Mi] [bit] NOT NULL DEFAULT ((1))
);
GO
CREATE TABLE [dbo].[Motor_Turu](
	[MotorID] [int] IDENTITY(1,1) NOT NULL PRIMARY KEY,
	[Motor_Adi] [nvarchar](50) NOT NULL UNIQUE,
	[Aktif_Mi] [bit] NOT NULL DEFAULT ((1))
);
GO
CREATE TABLE [dbo].[Musteriler](
	[MusteriID] [int] IDENTITY(1,1) NOT NULL PRIMARY KEY,
	[Musteri_Tc_NO] [nvarchar](11) NOT NULL UNIQUE,
	[Musteri_Adi] [nvarchar](100) NOT NULL,
	[Musteri_Soyadi] [nvarchar](100) NOT NULL,
	[Musteri_tel_No] [nvarchar](20) NOT NULL,
	[Musteri_Adresi] [nvarchar](250) NOT NULL,
	[Musteri_Gmail] [nvarchar](250) NOT NULL,
	[Musteri_Kayit_Tarihi] [date] NOT NULL,
	[Ekleyen_PersonelID] [int] NOT NULL,
	[Kayit_Durumu] [bit] NOT NULL DEFAULT ((1))
);
GO
CREATE TABLE [dbo].[Personeller](
	[PersonelID] [int] IDENTITY(1,1) NOT NULL PRIMARY KEY,
	[Adi] [nvarchar](250) NOT NULL,
	[Soyadi] [nvarchar](250) NOT NULL,
	[Tc_No] [nvarchar](11) NOT NULL UNIQUE,
	[Gmail] [nvarchar](250) NOT NULL,
	[Adres] [nvarchar](250) NOT NULL,
	[Gorev] [nvarchar](50) NOT NULL,
	[Calisma_Durumu] [bit] NOT NULL DEFAULT ((1))
);
GO
CREATE TABLE [dbo].[Satis_Tablosu](
	[Satis_NO] [int] IDENTITY(1,1) NOT NULL PRIMARY KEY,
	[Sasi_No] [nvarchar](100) NOT NULL,
	[Satan_PersonelID] [int] NOT NULL,
	[MusteriID] [int] NOT NULL,
	[Satis_Tarihi] [date] NOT NULL,
	[Satis_Fiyati] [decimal](18, 2) NOT NULL
);
`;

function renderSqlSchemaView() {
  if (!activeSession || activeSession.Role !== 'admin') {
    showToast('T-SQL Şeması ekranı sadece YÖNETİCİ modunda görüntülenebilir.', 'error');
    return;
  }
  const schemaEl = document.getElementById('sql-schema-display');
  if (schemaEl) schemaEl.innerText = rawSqlSchema;
}

function exportCurrentDataAsSql() {
  if (!activeSession || activeSession.Role !== 'admin') {
    showToast('T-SQL verilerini dışa aktarmak için YÖNETİCİ yetkisi gereklidir!', 'error');
    return;
  }

  let script = `-- ArabaSatisDB Seed & Live Export Script\nUSE [ArabaSatisDB];\nGO\n\n`;

  Object.keys(store.data).forEach(tableName => {
    const list = store.data[tableName];
    if (list.length === 0) return;

    script += `-- INSERT DATA FOR [dbo].[${tableName}]\n`;

    list.forEach(row => {
      const keys = Object.keys(row);
      const cols = keys.map(k => `[${k}]`).join(', ');
      const vals = keys.map(k => {
        let v = row[k];
        if (typeof v === 'string') return `'${v.replace(/'/g, "''")}'`;
        if (typeof v === 'boolean') return v ? 1 : 0;
        return v;
      }).join(', ');

      script += `INSERT INTO [dbo].[${tableName}] (${cols}) VALUES (${vals});\n`;
    });
    script += `GO\n\n`;
  });

  const blob = new Blob([script], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `ArabaSatisDB_Data_Export_${new Date().toISOString().split('T')[0]}.sql`;
  a.click();
  URL.revokeObjectURL(url);

  showToast('T-SQL INSERT scripti başarıyla indirildi!', 'success');
}
