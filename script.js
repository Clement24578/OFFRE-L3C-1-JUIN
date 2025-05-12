document.addEventListener('DOMContentLoaded', () => {
  const ctaBtns = document.querySelectorAll('.cta-btn');
  const signupSection = document.getElementById('signup');
  const targetDate = new Date('2025-05-23T00:00:00+02:00');

  // Scroll vers inscription
  ctaBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      signupSection.scrollIntoView({ behavior: 'smooth' });
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
      ctaBtns.forEach(b => b.disabled = true);
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
