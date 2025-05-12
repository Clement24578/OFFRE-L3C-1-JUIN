document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('subscribe-btn');
  const targetDate = new Date('2025-06-01T00:00:00+02:00'); // Europe/Paris

  // Scroll vers abonnement
  btn.addEventListener('click', () => {
    window.scrollTo({
      top: document.querySelector('.pricing').offsetTop,
      behavior: 'smooth'
    });
  });

  // Compte à rebours
  const daysEl    = document.getElementById('days');
  const hoursEl   = document.getElementById('hours');
  const minutesEl = document.getElementById('minutes');
  const secondsEl = document.getElementById('seconds');

  function updateCountdown() {
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
      document.getElementById('countdown').textContent = 'Offre expirée';
      btn.disabled = true;
      btn.textContent = 'Offre expirée';
      clearInterval(interval);
      return;
    }

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const m = Math.floor((diff / (1000 * 60)) % 60);
    const s = Math.floor((diff / 1000) % 60);

    daysEl.textContent    = String(d).padStart(2, '0');
    hoursEl.textContent   = String(h).padStart(2, '0');
    minutesEl.textContent = String(m).padStart(2, '0');
    secondsEl.textContent = String(s).padStart(2, '0');
  }

  updateCountdown();
  const interval = setInterval(updateCountdown, 1000);
});