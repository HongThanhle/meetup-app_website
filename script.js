const menuButton = document.querySelector('.menu-toggle');
const navigationLinks = document.querySelector('.nav-links');

if (menuButton && navigationLinks) {
  const closeMenu = () => {
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Mở menu');
    navigationLinks.classList.remove('is-open');
  };

  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Mở menu' : 'Đóng menu');
    navigationLinks.classList.toggle('is-open', !isOpen);
  });

  navigationLinks.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
  });
}

const demoVote = document.querySelector('.demo-vote');
if (demoVote) {
  demoVote.addEventListener('click', () => {
    const hasVoted = demoVote.getAttribute('aria-pressed') === 'true';
    demoVote.setAttribute('aria-pressed', String(!hasVoted));
    demoVote.classList.toggle('is-voted', !hasVoted);
    demoVote.innerHTML = hasVoted ? 'Bình chọn <span>＋</span>' : 'Đã bình chọn <span>✓</span>';
  });
}

const year = document.querySelector('#year');
if (year) year.textContent = String(new Date().getFullYear());

const revealItems = document.querySelectorAll('.reveal');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (prefersReducedMotion || !('IntersectionObserver' in window)) {
  revealItems.forEach((item) => item.classList.add('is-visible'));
} else {
  const observer = new IntersectionObserver((entries, activeObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      activeObserver.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -32px 0px' });
  revealItems.forEach((item) => observer.observe(item));
}
