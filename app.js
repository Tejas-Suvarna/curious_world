const subjects = [
  {name:'History & Civilisations',icon:'◷',category:'core',desc:'The people, empires and turning points that shaped our shared past.'},
  {name:'Geography & Environment',icon:'⌖',category:'core',desc:'Land, climate, resources and the places we call home.'},
  {name:'Politics, Governance & Geopolitics',icon:'⚖',category:'core',desc:'How power is organised, contested and exercised across the world.'},
  {name:'Economics & Finance',icon:'↗',category:'core',desc:'The choices, systems and flows behind how societies make a living.'},
  {name:'Business & Supply Chains',icon:'⤳',category:'core',desc:'How ideas become goods, and how those goods travel to us.'},
  {name:'Investing & Personal Finance',icon:'◈',category:'core',desc:'A thoughtful guide to money, saving, risk and long-term decisions.'},
  {name:'Science & Technology',icon:'✳',category:'core',desc:'Big discoveries and useful inventions that changed how we see things.'},
  {name:'Law & Justice',icon:'§',category:'core',desc:'The rules, rights and institutions societies use to seek fairness.'},
  {name:'Religions & Sacred Texts',icon:'☼',category:'core',desc:'Beliefs, traditions and texts that have guided billions of lives.'},
  {name:'Psychology, Society & Philosophy',icon:'◎',category:'core',desc:'How we think, live together and ask life’s enduring questions.'},
  {name:'Mathematics, Statistics & Data',icon:'∑',category:'core',desc:'Patterns and tools for making sense of quantities and evidence.'},
  {name:'Media & Communication',icon:'◉',category:'core',desc:'How stories, messages and information move between people.'},
  {name:'Arts, Architecture & Culture',icon:'✿',category:'core',desc:'The creative forms through which people make meaning and beauty.'},
  {name:'Wildlife & Natural World',icon:'❋',category:'additional',desc:'The rich variety of life, its habitats and the ties between them.'},
  {name:'Human Body & Medicine',icon:'♡',category:'additional',desc:'How our bodies work and how care, health and healing have evolved.'},
  {name:'Engineering & Infrastructure',icon:'⌁',category:'additional',desc:'The structures and systems that help civilisation function.'},
  {name:'Military & Defence',icon:'⛨',category:'additional',desc:'Conflict, strategy and the forces that shape security and peace.'},
  {name:'Agriculture & Food',icon:'❦',category:'additional',desc:'From seed to supper: food, farming and the landscapes they shape.'},
  {name:'Space & Astronomy',icon:'☾',category:'additional',desc:'Our place in the cosmos, from nearby worlds to distant galaxies.'}
];

const grid = document.querySelector('#subject-grid');
const empty = document.querySelector('#empty-state');
const search = document.querySelector('#subject-search');
let filter = 'all';

function renderSubjects() {
  const query = search.value.trim().toLocaleLowerCase();
  const filtered = subjects.filter(subject => (filter === 'all' || subject.category === filter) && `${subject.name} ${subject.desc}`.toLocaleLowerCase().includes(query));
  grid.innerHTML = filtered.map(subject => {
    const number = String(subjects.indexOf(subject)+1).padStart(2,'0');
    const content = `<div class="card-top"><span class="subject-icon" aria-hidden="true">${subject.icon}</span><span class="category-label">${subject.category === 'core' ? 'Core subject' : 'More to explore'}</span></div><h3>${subject.name}</h3><p>${subject.desc}</p><span class="card-index">${number} / 19</span>`;
    return subject.name === 'History & Civilisations'
      ? `<a class="subject-card" href="history.html">${content}<span class="card-link-cue" aria-hidden="true">↗</span></a>`
      : `<article class="subject-card">${content}</article>`;
  }).join('');
  empty.hidden = filtered.length > 0;
}

document.querySelectorAll('.filter-chip').forEach(button => button.addEventListener('click', () => {
  document.querySelector('.filter-chip.active').classList.remove('active');
  button.classList.add('active');
  filter = button.dataset.filter;
  renderSubjects();
}));
search.addEventListener('input', renderSubjects);
renderSubjects();
