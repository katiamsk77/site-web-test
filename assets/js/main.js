// Menu mobile
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');
if (burger && nav) {
  burger.addEventListener('click', () => {
    const ouvert = nav.classList.toggle('ouvert');
    burger.setAttribute('aria-expanded', ouvert);
  });
}

// Apparition douce au défilement
const elements = document.querySelectorAll('.apparait');
if ('IntersectionObserver' in window) {
  const obs = new IntersectionObserver((entrees) => {
    entrees.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  elements.forEach((el) => obs.observe(el));
} else {
  elements.forEach((el) => el.classList.add('visible'));
}

// Formulaire de contact : prépare un e-mail dans la messagerie du visiteur
const form = document.querySelector('#form-rdv');
if (form) {
  form.addEventListener('submit', (ev) => {
    ev.preventDefault();
    const d = new FormData(form);
    const sujet = `Demande de rendez-vous – ${d.get('prestation')}`;
    const corps = [
      `Nom : ${d.get('nom')}`,
      `Prénom : ${d.get('prenom')}`,
      `Téléphone : ${d.get('telephone')}`,
      `E-mail : ${d.get('email')}`,
      `Prestation souhaitée : ${d.get('prestation')}`,
      `Format : ${d.get('format')}`,
      '',
      `${d.get('message') || ''}`,
    ].join('\n');
    window.location.href = `mailto:contact@katia-magnetiseur.com?subject=${encodeURIComponent(sujet)}&body=${encodeURIComponent(corps)}`;
  });
}

// Année du copyright
document.querySelectorAll('[data-annee]').forEach((el) => { el.textContent = new Date().getFullYear(); });
