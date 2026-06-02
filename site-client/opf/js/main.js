/* OPF — main.js
   GSAP ScrollTrigger animations, navigation, lightning effects */

(function () {
  'use strict';

  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* --- Header scroll --- */
  const header = document.getElementById('header');
  let lastScroll = 0;

  function onScroll() {
    const y = window.scrollY;
    header.classList.toggle('header--solid', y > 60);
    lastScroll = y;
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* --- Mobile nav --- */
  const burger = document.getElementById('burger');
  const nav = document.getElementById('nav');

  const navOverlay = document.createElement('div');
  navOverlay.className = 'nav-overlay';
  document.body.appendChild(navOverlay);

  function closeNav() {
    nav.classList.remove('open');
    burger.classList.remove('active');
    burger.setAttribute('aria-expanded', 'false');
    navOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (burger && nav) {
    burger.addEventListener('click', function () {
      const open = nav.classList.toggle('open');
      burger.classList.toggle('active', open);
      burger.setAttribute('aria-expanded', String(open));
      navOverlay.classList.toggle('active', open);
      document.body.style.overflow = open ? 'hidden' : '';
    });

    navOverlay.addEventListener('click', closeNav);

    nav.querySelectorAll('.header__nav-link').forEach(function (link) {
      link.addEventListener('click', closeNav);
    });

    var navClose = document.getElementById('nav-close');
    if (navClose) {
      navClose.addEventListener('click', closeNav);
    }
  }

  /* --- FAQ show more --- */
  var faqMore = document.getElementById('faq-more');
  if (faqMore) {
    faqMore.addEventListener('click', function () {
      var hidden = document.querySelectorAll('.faq-item--hidden');
      var expanded = faqMore.getAttribute('aria-expanded') === 'true';
      hidden.forEach(function (item) {
        item.classList.toggle('faq-item--visible', !expanded);
      });
      faqMore.setAttribute('aria-expanded', String(!expanded));
      faqMore.innerHTML = expanded
        ? 'Voir les 4 autres questions <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>'
        : 'Réduire <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>';
    });
  }

  /* --- GSAP ScrollTrigger Animations --- */
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined' && !prefersReducedMotion) {
    gsap.registerPlugin(ScrollTrigger);

    /* Hero timeline */
    var heroContent = document.querySelector('.hero__content');
    if (heroContent) {
      var heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      heroTl
        .fromTo('.hero__badge',
          { opacity: 0, y: 20, scale: 0.9 },
          { opacity: 1, y: 0, scale: 1, duration: 0.6 }, 0.2)
        .fromTo('.hero__title',
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.9 }, 0.4)
        .fromTo('.hero__subtitle',
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8 }, 0.7)
        .fromTo('.hero__actions',
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.7 }, 0.95)
        .fromTo('.hero__scroll',
          { opacity: 0 },
          { opacity: 1, duration: 0.5 }, 1.2);
    }

    /* Scroll reveal batch — replaces IntersectionObserver */
    ScrollTrigger.batch('[data-reveal]', {
      onEnter: function (batch) {
        gsap.fromTo(batch,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out', stagger: 0.1 }
        );
      },
      start: 'top 88%',
      once: true
    });

    /* Stats counter via GSAP */
    var countEls = gsap.utils.toArray('[data-count]');
    countEls.forEach(function (el) {
      var target = parseInt(el.getAttribute('data-count'), 10);
      var suffix = el.getAttribute('data-suffix') || '';
      var isRaw = el.hasAttribute('data-raw');

      if (isRaw) {
        ScrollTrigger.create({
          trigger: el,
          start: 'top 80%',
          once: true,
          onEnter: function () { el.textContent = target + suffix; }
        });
        return;
      }

      var obj = { val: 0 };
      gsap.to(obj, {
        val: target,
        duration: 1.8,
        ease: 'power2.out',
        snap: { val: 1 },
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
          once: true
        },
        onUpdate: function () {
          el.textContent = Math.round(obj.val) + suffix;
        }
      });
    });

    /* Service cards stagger */
    ScrollTrigger.batch('.service-preview__card, .service-section', {
      onEnter: function (batch) {
        gsap.fromTo(batch,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out', stagger: 0.12 }
        );
      },
      start: 'top 88%',
      once: true
    });

    /* ICPE cards stagger */
    ScrollTrigger.batch('.icpe-card, .expertise-card, .partner-card', {
      onEnter: function (batch) {
        gsap.fromTo(batch,
          { opacity: 0, y: 30, scale: 0.97 },
          { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: 'power2.out', stagger: 0.08 }
        );
      },
      start: 'top 88%',
      once: true
    });

    /* Gallery items */
    ScrollTrigger.batch('.gallery__item, .case-card', {
      onEnter: function (batch) {
        gsap.fromTo(batch,
          { opacity: 0, y: 25, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: 'power2.out', stagger: 0.08 }
        );
      },
      start: 'top 88%',
      once: true
    });

    /* FAQ items */
    ScrollTrigger.batch('.faq-item', {
      onEnter: function (batch) {
        gsap.fromTo(batch,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out', stagger: 0.06 }
        );
      },
      start: 'top 88%',
      once: true
    });

    /* Contact form + info (only on contact page) */
    if (document.querySelector('.contact-form')) {
      gsap.fromTo('.contact-form',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out',
          scrollTrigger: { trigger: '.contact-form', start: 'top 85%', once: true }
        }
      );
    }

    if (document.querySelector('.contact-info')) {
      gsap.fromTo('.contact-info',
        { opacity: 0, x: 30 },
        { opacity: 1, x: 0, duration: 0.7, ease: 'power2.out',
          scrollTrigger: { trigger: '.contact-info', start: 'top 85%', once: true }
        }
      );
    }

    /* Norm badges pop */
    ScrollTrigger.batch('.norm-badge, .cert-badge', {
      onEnter: function (batch) {
        gsap.fromTo(batch,
          { opacity: 0, scale: 0.8 },
          { opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(1.4)', stagger: 0.1 }
        );
      },
      start: 'top 85%',
      once: true
    });

    /* Timeline / process steps */
    ScrollTrigger.batch('.process-step, .timeline-item', {
      onEnter: function (batch) {
        gsap.fromTo(batch,
          { opacity: 0, x: -20 },
          { opacity: 1, x: 0, duration: 0.6, ease: 'power2.out', stagger: 0.1 }
        );
      },
      start: 'top 88%',
      once: true
    });

  } else {
    /* Fallback — show everything immediately */
    document.querySelectorAll('[data-reveal]').forEach(function (el) {
      el.classList.add('revealed');
    });
    document.querySelectorAll('[data-count]').forEach(function (el) {
      var target = el.getAttribute('data-count');
      var suffix = el.getAttribute('data-suffix') || '';
      el.textContent = target + suffix;
    });
  }

  /* --- Vanilla Tilt on cards (desktop only) --- */
  if (typeof VanillaTilt !== 'undefined' && !prefersReducedMotion && window.innerWidth >= 1024) {
    var tiltTargets = document.querySelectorAll('.service-preview__card, .icpe-card, .expertise-card');
    if (tiltTargets.length) {
      VanillaTilt.init(tiltTargets, {
        max: 4,
        speed: 400,
        glare: true,
        'max-glare': 0.06,
        scale: 1.02
      });
    }
  }

  /* --- CTA pulse --- */
  var primaryCta = document.querySelector('.hero__actions .btn--primary');
  if (primaryCta && !prefersReducedMotion) {
    setInterval(function () {
      primaryCta.style.transform = 'scale(1.03)';
      setTimeout(function () {
        primaryCta.style.transform = '';
      }, 300);
    }, 5000);
  }

  /* --- Lightning SVG bolts --- */
  var bolts = document.querySelectorAll('.hero__bolt');
  var flashEl = document.getElementById('hero-flash');

  if (bolts.length && !prefersReducedMotion) {
    function setOp(el, v) { el.style.opacity = String(v); }

    function flash(times, delay) {
      if (!flashEl) return;
      setOp(flashEl, 1);
      setTimeout(function () {
        setOp(flashEl, 0);
        if (times > 1) {
          setTimeout(function () { flash(times - 1, delay * 0.7); }, delay);
        }
      }, 55 + Math.random() * 40);
    }

    function strikeSequence() {
      var bolt = bolts[Math.floor(Math.random() * bolts.length)];
      var dbl = Math.random() > 0.4;

      flash(dbl ? 2 : 1, 88);

      setOp(bolt, 1);
      setTimeout(function () { setOp(bolt, 0.28); }, 80);
      setTimeout(function () { setOp(bolt, 0.92); }, 160);
      setTimeout(function () { setOp(bolt, 0); }, 265);
      if (dbl) {
        setTimeout(function () { setOp(bolt, 0.55); }, 390);
        setTimeout(function () { setOp(bolt, 0); }, 490);
      }

      setTimeout(strikeSequence, 4000 + Math.random() * 8000);
    }

    setTimeout(strikeSequence, 1500);
  }

})();
