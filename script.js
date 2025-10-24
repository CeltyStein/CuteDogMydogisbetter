// Tiny helper to customize the site without editing HTML everywhere
const DOG = {
  name: "Your Dog's Name",
  tagline: "World‑class napper & professional good‑girl/boy",
  breed: "Miniature Schnauzer",
  hometown: "Your Town",
  trick: "spin",
  age: "8",
  pronouns: "she/her",
  weight: "18 lb",
  snack: "apple slices",
  dislikes: "thunder & loud vacuums",
  bff: "the purple Crocs™"
};

function fillText(id, val){ const el = document.getElementById(id); if(el) el.textContent = val; }

window.addEventListener('DOMContentLoaded', () => {
  fillText('brandName', DOG.name);
  fillText('heroName', DOG.name);
  fillText('heroTagline', DOG.tagline);
  fillText('breed', DOG.breed);
  fillText('hometown', DOG.hometown);
  fillText('trick', DOG.trick);
  fillText('age', DOG.age);
  fillText('pronouns', DOG.pronouns);
  fillText('weight', DOG.weight);
  fillText('snack', DOG.snack);
  fillText('dislikes', DOG.dislikes);
  fillText('bff', DOG.bff);
  fillText('footerName', DOG.name);
  const y = new Date().getFullYear(); document.getElementById('year').textContent = y;

  const nav = document.querySelector('.nav');
  const btn = document.querySelector('.nav-toggle');
  const list = document.getElementById('navList');
  if(btn){
    btn.addEventListener('click', () => {
      const exp = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!exp));
      nav.setAttribute('aria-expanded', String(!exp));
    });
  }
});
