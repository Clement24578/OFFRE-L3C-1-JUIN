document.addEventListener('DOMContentLoaded', () => {
  const ctaBtns = document.querySelectorAll('.cta-btn');
  const signupSection = document.getElementById('signup');
  const targetDate = new Date('2025-05-23T00:00:00+02:00'); // Jusqu'au 23 mai

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
      ctaBtns.forEach(b => { b.disabled = true; b.textContent = 'Offre expirée'; });
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

  // Formulaire d'inscription
  const form = document.getElementById('signup-form');
  const messageEl = document.getElementById('form-message');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!form.checkValidity()) {
      messageEl.textContent = 'Merci de remplir tous les champs requis.';
      messageEl.style.color = 'red';
      return;
    }
    // TODO: remplacer avec appel API réel
    const formData = new FormData(form);
    console.log('Formulaire soumis:', Object.fromEntries(formData));
    messageEl.textContent = 'Merci ! Vérifiez votre email pour confirmer votre compte.';
    messageEl.style.color = 'green';
    form.reset();
  });
});
