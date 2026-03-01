// Mobile nav toggle
const toggleButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');

if (toggleButton && nav) {
  toggleButton.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    toggleButton.classList.toggle('is-open', isOpen);
    toggleButton.setAttribute('aria-expanded', String(isOpen));
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      toggleButton.classList.remove('is-open');
      toggleButton.setAttribute('aria-expanded', 'false');
    });
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !toggleButton.contains(e.target)) {
      nav.classList.remove('is-open');
      toggleButton.classList.remove('is-open');
      toggleButton.setAttribute('aria-expanded', 'false');
    }
  });
}

// Footer year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = String(new Date().getFullYear());

// Scroll reveal (Intersection Observer)
const revealEls = document.querySelectorAll('.reveal');

if (revealEls.length && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  revealEls.forEach((el) => observer.observe(el));
} else {
  // Fallback: show all immediately if IntersectionObserver not supported
  revealEls.forEach((el) => el.classList.add('is-visible'));
}

// ─── Seamless video loop — mask the seam with a brief fade to black ───
const heroVideo = document.querySelector('.hero-video');
const loopMask  = document.querySelector('.hero-loop-mask');

if (heroVideo && loopMask) {
  const FADE_OUT_SECS = 1.2;  // seconds before end to start fading out
  const FADE_IN_SECS  = 0.6;  // seconds into restart to finish fading back in
  let fading = false;

  heroVideo.addEventListener('timeupdate', () => {
    const remaining = heroVideo.duration - heroVideo.currentTime;

    if (!isNaN(heroVideo.duration)) {
      if (remaining <= FADE_OUT_SECS && !fading) {
        // Approaching the end — fade to black
        fading = true;
        loopMask.style.transition = `opacity ${FADE_OUT_SECS * 0.8}s ease`;
        loopMask.style.opacity = '1';
      } else if (heroVideo.currentTime < FADE_IN_SECS && fading) {
        // Just restarted — fade back in
        fading = false;
        loopMask.style.transition = `opacity ${FADE_IN_SECS * 1.2}s ease`;
        loopMask.style.opacity = '0';
      }
    }
  });
}

// ─── Sticky header — add shadow class on scroll ───
const header = document.querySelector('.site-header');
if (header) {
  const onScroll = () => {
    header.classList.toggle('scrolled', window.scrollY > 10);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
}
