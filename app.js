// BetaRide Web Architecture Logic
// Pure Vanilla JS, Zero Emojis, Standardized Interaction Handling

let currentFleet = 'keke';

document.addEventListener('DOMContentLoaded', () => {
  if (window.lucide) {
    window.lucide.createIcons();
  }
  checkExistingSession();
  setupMobileNav();
  runFareCalculation();
});

// Mobile Nav Toggle
function setupMobileNav() {
  const btn = document.getElementById('mobileMenuBtn');
  const menu = document.getElementById('mobileMenu');
  if (!btn || !menu) return;

  btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
  });

  document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.add('hidden');
    });
  });
}

// -----------------------------------------------------------------------------
// 1. BENCHMARK FARE CALCULATOR
// -----------------------------------------------------------------------------

function setFleetFilter(type) {
  currentFleet = type;

  const fleetTypes = ['keke', 'bike', 'car'];
  fleetTypes.forEach(t => {
    const btn = document.getElementById(`fleetBtn${capitalize(t)}`);
    if (btn) {
      if (t === type) {
        btn.className = 'py-2.5 px-3 rounded-lg border border-brand-navy bg-brand-navy text-white transition-all';
      } else {
        btn.className = 'py-2.5 px-3 rounded-lg border border-surface-border bg-white text-slate-700 transition-all';
      }
    }
  });

  runFareCalculation();
}

function runFareCalculation() {
  const destSelect = document.getElementById('calcDestination');
  if (!destSelect) return;

  const option = destSelect.options[destSelect.selectedIndex];
  const dist = option.getAttribute('data-dist') || '6.8 km';
  const basePrice = parseInt(option.getAttribute(`data-${currentFleet}`) || '2000', 10);

  const lowBound = Math.round((basePrice * 0.8) / 100) * 100;
  const highBound = Math.round((basePrice * 1.2) / 100) * 100;

  const distEl = document.getElementById('calcDistanceVal');
  const priceEl = document.getElementById('calcPriceVal');
  const rangeEl = document.getElementById('calcRangeVal');

  if (distEl) distEl.innerText = dist;
  if (priceEl) priceEl.innerText = `₦${basePrice.toLocaleString()}`;
  if (rangeEl) rangeEl.innerText = `₦${lowBound.toLocaleString()} – ₦${highBound.toLocaleString()}`;
}

// -----------------------------------------------------------------------------
// 2. UNIFIED AUTH MODAL & SESSION MANAGEMENT
// -----------------------------------------------------------------------------

function openAuthModal(tab = 'login') {
  const modal = document.getElementById('authModal');
  const card = document.getElementById('modalCard');
  if (!modal) return;

  modal.classList.remove('hidden');
  setTimeout(() => {
    modal.classList.remove('opacity-0');
    if (card) card.classList.remove('scale-95');
  }, 10);

  switchAuthTab(tab);
  hideAuthAlert();
}

function closeAuthModal() {
  const modal = document.getElementById('authModal');
  const card = document.getElementById('modalCard');
  if (!modal) return;

  modal.classList.add('opacity-0');
  if (card) card.classList.add('scale-95');
  setTimeout(() => {
    modal.classList.add('hidden');
  }, 200);
}

function switchAuthTab(tab) {
  const tabs = {
    login: document.getElementById('tabLogin'),
    register: document.getElementById('tabRegister'),
    driver: document.getElementById('tabDriver')
  };

  const forms = {
    login: document.getElementById('loginForm'),
    register: document.getElementById('registerForm'),
    driver: document.getElementById('driverForm')
  };

  const meta = {
    login: { title: 'Passenger Sign In', sub: 'Access your BetaRide profile' },
    register: { title: 'Register Passenger Account', sub: 'Verified commuter profile for Ilorin' },
    driver: { title: 'Driver Pre-Registration', sub: 'Phase 1 corridor onboarding at Offa Garage' }
  };

  const titleEl = document.getElementById('modalTitle');
  const subEl = document.getElementById('modalSubtitle');
  if (titleEl && meta[tab]) titleEl.innerText = meta[tab].title;
  if (subEl && meta[tab]) subEl.innerText = meta[tab].sub;

  Object.keys(tabs).forEach(k => {
    if (tabs[k]) {
      if (k === tab) {
        tabs[k].className = 'flex-1 py-3 text-center border-b-2 border-brand-navy text-brand-navy font-bold transition-colors';
      } else {
        tabs[k].className = 'flex-1 py-3 text-center border-b-2 border-transparent hover:text-brand-navy text-slate-500 font-semibold transition-colors';
      }
    }
  });

  Object.keys(forms).forEach(k => {
    if (forms[k]) {
      if (k === tab) {
        forms[k].classList.remove('hidden');
      } else {
        forms[k].classList.add('hidden');
      }
    }
  });

  hideAuthAlert();
  if (window.lucide) window.lucide.createIcons();
}

function showAuthAlert(msg, isSuccess = true) {
  const el = document.getElementById('authAlert');
  if (!el) return;

  el.innerText = msg;
  el.className = isSuccess
    ? 'p-3 rounded-lg text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200 block'
    : 'p-3 rounded-lg text-xs font-semibold bg-rose-50 text-rose-800 border border-rose-200 block';
}

function hideAuthAlert() {
  const el = document.getElementById('authAlert');
  if (el) el.classList.add('hidden');
}

function handleLoginSubmit(e) {
  e.preventDefault();
  const phone = document.getElementById('loginPhone').value.trim();
  if (!phone) {
    showAuthAlert('Valid Nigerian phone number required.', false);
    return;
  }

  const user = {
    name: 'Samuel Adebayo',
    phone: `+234${phone}`,
    role: 'passenger',
    timestamp: new Date().toISOString()
  };

  localStorage.setItem('betaride_session', JSON.stringify(user));
  showAuthAlert('Authentication successful. Redirecting...', true);

  setTimeout(() => {
    closeAuthModal();
    renderNavSession(user);
  }, 800);
}

function handleRegisterSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('regName').value.trim();
  const phone = document.getElementById('regPhone').value.trim();
  const location = document.getElementById('regLocation').value;

  if (!name || !phone) {
    showAuthAlert('Name and contact number are mandatory.', false);
    return;
  }

  const user = {
    name: name,
    phone: `+234${phone}`,
    location: location,
    role: 'passenger',
    timestamp: new Date().toISOString()
  };

  localStorage.setItem('betaride_session', JSON.stringify(user));
  showAuthAlert('Passenger registration verified.', true);

  setTimeout(() => {
    closeAuthModal();
    renderNavSession(user);
  }, 800);
}

function handleDriverSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('drvName').value.trim();
  const phone = document.getElementById('drvPhone').value.trim();
  const vehicle = document.getElementById('drvVehicle').value;
  const plate = document.getElementById('drvPlate').value.trim();
  const nin = document.getElementById('drvNin').value.trim();
  const park = document.getElementById('drvPark').value;

  if (!name || !phone || !plate || !nin) {
    showAuthAlert('All fields including NIN and registration plate are mandatory.', false);
    return;
  }

  const driver = {
    name: name,
    phone: `+234${phone}`,
    vehicle: vehicle,
    plate: plate,
    nin: nin,
    park: park,
    role: 'driver_applicant',
    status: 'Pending Physical Inspection at Offa Garage',
    timestamp: new Date().toISOString()
  };

  localStorage.setItem('betaride_session', JSON.stringify(driver));
  showAuthAlert('Application registered. Proceed to Offa Garage inspection desk with your vehicle and NIN.', true);

  setTimeout(() => {
    closeAuthModal();
    renderNavSession(driver);
  }, 1400);
}

function checkExistingSession() {
  const raw = localStorage.getItem('betaride_session');
  if (raw) {
    try {
      const user = JSON.parse(raw);
      renderNavSession(user);
    } catch (e) {
      localStorage.removeItem('betaride_session');
    }
  }
}

function renderNavSession(user) {
  const container = document.getElementById('navAuthContainer');
  if (!container) return;

  const isDriver = user.role === 'driver_applicant';

  container.innerHTML = `
    <div class="flex items-center gap-3">
      <div class="text-right">
        <p class="text-xs font-bold text-brand-navy">${user.name}</p>
        <span class="text-[10px] uppercase font-semibold text-slate-500">
          ${isDriver ? 'Driver (Pending Inspection)' : 'Verified Passenger'}
        </span>
      </div>
      <button onclick="handleLogout()" title="Terminate Session" class="px-2.5 py-1.5 text-xs text-slate-500 hover:text-slate-900 border border-surface-border rounded-lg hover:bg-slate-100 transition-colors">
        Logout
      </button>
    </div>
  `;
}

function handleLogout() {
  localStorage.removeItem('betaride_session');
  window.location.reload();
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
