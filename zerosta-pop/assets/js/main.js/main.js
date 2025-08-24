// ============================
// Zerosta POP Theme scripts
// ============================

// モバイルナビ
(() => {
  const btn = document.querySelector('[data-nav-toggle]');
  const track = document.querySelector('#popNav');
  if (!btn || !track) return;

  const toggle = () => {
    const open = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!open));
    track.classList.toggle('is-open', !open);
    document.body.classList.toggle('nav-open', !open);
  };

  btn.addEventListener('click', toggle);
  track.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    if (track.classList.contains('is-open')) toggle();
  }));
})();

// スクロールスナップの慣性を少しだけ（iOS対応）
(() => {
  const rail = document.querySelector('[data-snap]');
  if (!rail) return;
  let isDown = false, startX = 0, scrollLeft = 0;

  rail.addEventListener('pointerdown', e => {
    isDown = true; rail.setPointerCapture(e.pointerId);
    startX = e.clientX; scrollLeft = rail.scrollLeft;
  });
  rail.addEventListener('pointermove', e => {
    if (!isDown) return;
    const walk = (e.clientX - startX) * 1.2;
    rail.scrollLeft = scrollLeft - walk;
  });
  const end = () => (isDown = false);
  rail.addEventListener('pointerup', end);
  rail.addEventListener('pointercancel', end);
})();
