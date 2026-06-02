/* ============================================
   TMS - Main JavaScript
   Navigation, GSAP animations, galerie, formulaire
   ============================================ */

(function () {
  'use strict';

  document.documentElement.classList.add('js-ready');

  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ============================================
  // 1. MOBILE NAV TOGGLE
  // ============================================
  const navToggle = document.querySelector('.nav__toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = navMenu.querySelectorAll('.nav__link');

  function openMenu() {
    navMenu.classList.add('open');
    navToggle.setAttribute('aria-expanded', 'true');
    navToggle.setAttribute('aria-label', 'Fermer le menu');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    navMenu.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.setAttribute('aria-label', 'Ouvrir le menu');
    document.body.style.overflow = '';
  }

  navToggle.addEventListener('click', function () {
    const isOpen = navMenu.classList.contains('open');
    isOpen ? closeMenu() : openMenu();
  });

  navLinks.forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && navMenu.classList.contains('open')) {
      closeMenu();
      navToggle.focus();
    }
  });

  // ============================================
  // 2. HEADER SCROLL BEHAVIOR
  // ============================================
  const header = document.getElementById('header');
  let lastScroll = 0;

  function handleScroll() {
    var scrollY = window.scrollY;
    if (scrollY > 80) {
      header.classList.add('header--scrolled');
    } else {
      header.classList.remove('header--scrolled');
    }
    lastScroll = scrollY;
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // ============================================
  // 3. ACTIVE NAV HIGHLIGHTING
  // ============================================
  const sections = document.querySelectorAll('section[id]');

  var navObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        var id = entry.target.id;
        navLinks.forEach(function (link) {
          link.classList.toggle('active', link.getAttribute('href') === '#' + id);
        });
      }
    });
  }, {
    rootMargin: '-20% 0px -70% 0px'
  });

  sections.forEach(function (section) {
    navObserver.observe(section);
  });

  // ============================================
  // 4. GSAP SCROLL ANIMATIONS
  // ============================================
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined' && !prefersReducedMotion) {
    gsap.registerPlugin(ScrollTrigger);

    // 4a. HERO TIMELINE
    var heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    heroTl
      .fromTo('.hero h1',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.9 }, 0.3)
      .fromTo('.hero__subtitle',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8 }, 0.6)
      .fromTo('.hero__ctas',
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.7 }, 0.85)
      .fromTo('.hero__bottom-bar',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 }, 1.1);

    // 4b. HERO PARALLAX via ScrollTrigger
    var heroImg = document.querySelector('.hero__bg img');
    if (heroImg) {
      gsap.to(heroImg, {
        y: '30%',
        ease: 'none',
        scrollTrigger: {
          trigger: '.hero',
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      });
    }

    // 4c. SCROLL REVEAL — batch for performance
    ScrollTrigger.batch('.reveal', {
      onEnter: function (batch) {
        gsap.fromTo(batch,
          { opacity: 0, y: 40, filter: 'blur(2px)' },
          { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.8, ease: 'power2.out', stagger: 0.12 }
        );
      },
      start: 'top 85%',
      once: true
    });

    ScrollTrigger.batch('.reveal-left', {
      onEnter: function (batch) {
        gsap.fromTo(batch,
          { opacity: 0, x: -40, filter: 'blur(2px)' },
          { opacity: 1, x: 0, filter: 'blur(0px)', duration: 0.8, ease: 'power2.out', stagger: 0.12 }
        );
      },
      start: 'top 85%',
      once: true
    });

    ScrollTrigger.batch('.reveal-scale', {
      onEnter: function (batch) {
        gsap.fromTo(batch,
          { opacity: 0, scale: 0.92, filter: 'blur(2px)' },
          { opacity: 1, scale: 1, filter: 'blur(0px)', duration: 0.8, ease: 'power2.out', stagger: 0.12 }
        );
      },
      start: 'top 85%',
      once: true
    });

    // 4d. SERVICE CARDS — staggered cascade
    var serviceCards = gsap.utils.toArray('.service-card');
    if (serviceCards.length) {
      serviceCards.forEach(function (card, i) {
        gsap.fromTo(card,
          { opacity: 0, y: 50, filter: 'blur(2px)' },
          {
            opacity: 1, y: 0, filter: 'blur(0px)',
            duration: 0.7, ease: 'power2.out',
            delay: i * 0.1,
            scrollTrigger: {
              trigger: card,
              start: 'top 88%',
              once: true
            }
          }
        );
      });
    }

    // 4e. GALLERY ITEMS — stagger grid reveal
    ScrollTrigger.batch('.gallery-grid--preview .gallery-item', {
      onEnter: function (batch) {
        gsap.fromTo(batch,
          { opacity: 0, y: 30, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: 'power2.out', stagger: 0.08 }
        );
      },
      start: 'top 85%',
      once: true
    });

    // 4f. FIGURE CARDS counter animation via GSAP
    var countEls = gsap.utils.toArray('[data-target]');
    countEls.forEach(function (el) {
      var target = parseInt(el.getAttribute('data-target'), 10);
      var obj = { val: 0 };
      gsap.to(obj, {
        val: target,
        duration: 2,
        ease: 'power2.out',
        snap: { val: 1 },
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
          once: true
        },
        onUpdate: function () {
          el.textContent = Math.round(obj.val) + (target >= 10 ? '+' : '');
        }
      });
    });

    // 4g. ZONE CITIES stagger
    ScrollTrigger.batch('.zone__city', {
      onEnter: function (batch) {
        gsap.fromTo(batch,
          { opacity: 0, x: -20 },
          { opacity: 1, x: 0, duration: 0.5, ease: 'power2.out', stagger: 0.08 }
        );
      },
      start: 'top 85%',
      once: true
    });

    // 4h. FAQ ITEMS stagger
    ScrollTrigger.batch('.faq__item', {
      onEnter: function (batch) {
        gsap.fromTo(batch,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out', stagger: 0.06 }
        );
      },
      start: 'top 88%',
      once: true
    });

    // 4i. CERTIF BADGES pop
    ScrollTrigger.batch('.certif-badge', {
      onEnter: function (batch) {
        gsap.fromTo(batch,
          { opacity: 0, scale: 0.8 },
          { opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(1.4)', stagger: 0.1 }
        );
      },
      start: 'top 85%',
      once: true
    });

    // 4j. TESTIMONIAL CARDS
    ScrollTrigger.batch('.testimonial-card', {
      onEnter: function (batch) {
        gsap.fromTo(batch,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out', stagger: 0.1 }
        );
      },
      start: 'top 85%',
      once: true
    });

    // 4k. CONTACT FORM slide-in
    gsap.fromTo('.contact-form',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out',
        scrollTrigger: { trigger: '.contact-form', start: 'top 85%', once: true }
      }
    );

    gsap.fromTo('.contact__info',
      { opacity: 0, x: 30 },
      { opacity: 1, x: 0, duration: 0.7, ease: 'power2.out',
        scrollTrigger: { trigger: '.contact__info', start: 'top 85%', once: true }
      }
    );

  } else {
    // Fallback: show everything immediately
    document.querySelectorAll('.reveal, .reveal-left, .reveal-scale').forEach(function (el) {
      el.classList.add('visible');
    });
    // Static count display
    document.querySelectorAll('[data-target]').forEach(function (el) {
      var target = el.getAttribute('data-target');
      el.textContent = target + (parseInt(target, 10) >= 10 ? '+' : '');
    });
    // Make hero elements visible
    document.querySelectorAll('.hero h1, .hero__subtitle, .hero__ctas, .hero__bottom-bar').forEach(function (el) {
      el.style.opacity = '1';
      el.style.transform = 'none';
    });
  }

  // ============================================
  // 5. VANILLA TILT on service cards (desktop only)
  // ============================================
  if (typeof VanillaTilt !== 'undefined' && !prefersReducedMotion && window.innerWidth >= 1024) {
    VanillaTilt.init(document.querySelectorAll('.service-card'), {
      max: 4,
      speed: 400,
      glare: true,
      'max-glare': 0.08,
      scale: 1.02
    });
  }

  // ============================================
  // 6. GALLERY TOGGLE (expandable)
  // ============================================
  var galleryToggle = document.getElementById('galleryToggleBtn');
  var galleryPanel = document.getElementById('galleryExpandable');
  if (galleryToggle && galleryPanel) {
    galleryToggle.addEventListener('click', function () {
      var isOpen = galleryPanel.classList.toggle('is-open');
      galleryToggle.setAttribute('aria-expanded', isOpen);
      galleryToggle.querySelector('.gallery-toggle-btn__text').textContent =
        isOpen ? 'Réduire la galerie' : 'Voir toutes nos réalisations';
    });
  }

  // ============================================
  // 6b. FAQ EXPANDABLE TOGGLE
  // ============================================
  var faqToggle = document.getElementById('faq-toggle');
  var faqPanel = document.getElementById('faq-panel');
  if (faqToggle && faqPanel) {
    faqToggle.addEventListener('click', function () {
      var isOpen = faqPanel.classList.toggle('is-open');
      faqToggle.setAttribute('aria-expanded', isOpen);
      faqToggle.firstChild.textContent =
        isOpen ? 'Réduire les questions ' : 'Voir toutes les questions ';
    });
  }

  // ============================================
  // 7. GALLERY FILTER
  // ============================================
  var filterBtns = document.querySelectorAll('.filter-btn');
  var galleryItems = document.querySelectorAll('.gallery-item');

  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var filter = this.getAttribute('data-filter');

      filterBtns.forEach(function (b) { b.classList.remove('active'); });
      this.classList.add('active');

      if (filter !== 'all' && galleryPanel && !galleryPanel.classList.contains('is-open')) {
        galleryPanel.classList.add('is-open');
        if (galleryToggle) {
          galleryToggle.setAttribute('aria-expanded', 'true');
          galleryToggle.querySelector('.gallery-toggle-btn__text').textContent = 'Réduire la galerie';
        }
      }

      galleryItems.forEach(function (item) {
        var category = item.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          item.classList.remove('hidden');
        } else {
          item.classList.add('hidden');
        }
      });
    });
  });

  // ============================================
  // 8. LIGHTBOX
  // ============================================
  var lightbox = document.getElementById('lightbox');
  var lightboxImg = document.getElementById('lightbox-img');
  var lightboxCaption = document.getElementById('lightbox-caption');
  var currentIndex = 0;
  var visibleItems = [];

  function getVisibleItems() {
    return Array.from(galleryItems).filter(function (item) {
      return !item.classList.contains('hidden');
    });
  }

  function openLightbox(index) {
    visibleItems = getVisibleItems();
    currentIndex = index;
    updateLightbox();
    lightbox.hidden = false;
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
    lightbox.querySelector('.lightbox__close').focus();
  }

  function closeLightbox() {
    lightbox.classList.remove('open');
    lightbox.hidden = true;
    document.body.style.overflow = '';
    if (visibleItems[currentIndex]) {
      visibleItems[currentIndex].focus();
    }
  }

  function updateLightbox() {
    var item = visibleItems[currentIndex];
    if (!item) return;
    var src = item.getAttribute('data-lightbox-src');
    if (src) {
      lightboxImg.src = src;
      lightboxImg.alt = item.getAttribute('data-lightbox-alt') || '';
    } else {
      var img = item.querySelector('img');
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
    }
    lightboxCaption.textContent = item.getAttribute('data-caption') || '';
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % visibleItems.length;
    updateLightbox();
  }

  function prevImage() {
    currentIndex = (currentIndex - 1 + visibleItems.length) % visibleItems.length;
    updateLightbox();
  }

  galleryItems.forEach(function (item, i) {
    item.setAttribute('tabindex', '0');
    item.setAttribute('role', 'button');
    item.setAttribute('aria-label', item.getAttribute('data-caption') || 'Voir la photo');

    item.addEventListener('click', function (e) {
      if (item.classList.contains('gallery-item--before-after')) {
        var rect = item.getBoundingClientRect();
        var isRightHalf = e.clientX > rect.left + rect.width / 2;
        var beforeImg = item.querySelector('.gallery-item__before img');
        var afterImg = item.querySelector('.gallery-item__after img');
        var clickedImg = isRightHalf ? (afterImg || beforeImg) : (beforeImg || item.querySelector('img'));
        item.setAttribute('data-lightbox-src', clickedImg.src);
        item.setAttribute('data-lightbox-alt', clickedImg.alt);
      } else {
        item.removeAttribute('data-lightbox-src');
      }
      var vis = getVisibleItems();
      var idx = vis.indexOf(item);
      openLightbox(idx);
    });

    item.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        item.removeAttribute('data-lightbox-src');
        var vis = getVisibleItems();
        var idx = vis.indexOf(item);
        openLightbox(idx);
      }
    });
  });

  lightbox.querySelector('.lightbox__close').addEventListener('click', closeLightbox);
  lightbox.querySelector('.lightbox__next').addEventListener('click', nextImage);
  lightbox.querySelector('.lightbox__prev').addEventListener('click', prevImage);

  lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', function (e) {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
  });

  // Touch swipe
  var touchStartX = 0;
  lightbox.addEventListener('touchstart', function (e) {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  lightbox.addEventListener('touchend', function (e) {
    var diff = e.changedTouches[0].screenX - touchStartX;
    if (Math.abs(diff) > 50) {
      diff > 0 ? prevImage() : nextImage();
    }
  }, { passive: true });

  // ============================================
  // 9. FORM VALIDATION & AJAX SUBMIT
  // ============================================
  var form = document.getElementById('contact-form');
  var submitBtn = document.getElementById('submit-btn');
  var formSuccess = document.getElementById('form-success');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var isValid = true;
      var nom = document.getElementById('nom');
      var email = document.getElementById('email');
      var message = document.getElementById('message');

      // Reset errors
      [nom, email, message].forEach(function (field) {
        field.classList.remove('error');
        var errorEl = document.getElementById(field.id + '-error');
        if (errorEl) errorEl.style.display = 'none';
      });

      if (!nom.value.trim()) {
        nom.classList.add('error');
        document.getElementById('nom-error').style.display = 'block';
        isValid = false;
      }

      if (!email.value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        email.classList.add('error');
        document.getElementById('email-error').style.display = 'block';
        isValid = false;
      }

      if (!message.value.trim()) {
        message.classList.add('error');
        document.getElementById('message-error').style.display = 'block';
        isValid = false;
      }

      if (!isValid) {
        var firstError = form.querySelector('.error');
        if (firstError) firstError.focus();
        return;
      }

      submitBtn.textContent = 'Envoi en cours...';
      submitBtn.disabled = true;

      var formData = new FormData(form);

      fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      })
      .then(function (response) {
        if (response.ok) {
          form.style.display = 'none';
          formSuccess.classList.add('show');
        } else {
          throw new Error('Erreur serveur');
        }
      })
      .catch(function () {
        submitBtn.textContent = 'Erreur — Réessayer';
        submitBtn.disabled = false;
        submitBtn.style.background = '#DC3545';
        setTimeout(function () {
          submitBtn.textContent = 'Envoyer ma demande de devis';
          submitBtn.style.background = '';
        }, 3000);
      });
    });
  }

  // Service card links pre-fill form
  document.querySelectorAll('.service-card__link').forEach(function (link) {
    link.addEventListener('click', function () {
      var service = this.getAttribute('data-service');
      if (service) {
        var select = document.getElementById('service');
        if (select) select.value = service;
      }
    });
  });

  // ============================================
  // 10. LEAFLET MAP (Zone d'intervention) — lazy loaded
  // ============================================
  var mapEl = document.getElementById('zone-map');
  if (mapEl) {
    var mapObserver = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting) {
        mapObserver.disconnect();
        var link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
        link.integrity = 'sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=';
        link.crossOrigin = '';
        document.head.appendChild(link);
        var script = document.createElement('script');
        script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
        script.integrity = 'sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=';
        script.crossOrigin = '';
        script.onload = function () { initMap(); };
        document.body.appendChild(script);
      }
    }, { rootMargin: '200px' });
    mapObserver.observe(mapEl);
  }

  function initMap() {
    var mapEl = document.getElementById('zone-map');
    if (mapEl && typeof L !== 'undefined') {
      var map = L.map('zone-map', {
        scrollWheelZoom: false,
        attributionControl: true,
        zoomControl: true
      }).setView([43.52, 2.26], 11);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        maxZoom: 18
      }).addTo(map);

      var orangeIcon = L.divIcon({
        className: 'zone-marker-hq',
        html: '<div style="width:20px;height:20px;background:#D4622B;border:3px solid #fff;border-radius:50%;box-shadow:0 2px 8px rgba(0,0,0,0.3);"></div>',
        iconSize: [20, 20],
        iconAnchor: [10, 10]
      });

      var darkIcon = L.divIcon({
        className: 'zone-marker',
        html: '<div style="width:14px;height:14px;background:#1B2A3D;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 6px rgba(0,0,0,0.2);"></div>',
        iconSize: [14, 14],
        iconAnchor: [7, 7]
      });

      L.circle([43.5336, 2.2639], {
        radius: 50000,
        color: '#D4622B',
        fillColor: '#D4622B',
        fillOpacity: 0.06,
        weight: 1.5,
        dashArray: '6 4'
      }).addTo(map);

      var hq = L.marker([43.5336, 2.2639], { icon: orangeIcon }).addTo(map);
      hq.bindPopup('<span class="zone-popup-title">TMS — Siège</span><br>Lieu-dit Bellevue<br>81290 Labruguière<br><span class="zone-popup-dist">06 31 74 23 13</span>');

      var cities = [
        { name: 'Castres', lat: 43.6045, lng: 2.2390, dist: '~10 min' },
        { name: 'Mazamet', lat: 43.4897, lng: 2.3745, dist: '~20 min' },
        { name: 'Albi', lat: 43.9293, lng: 2.1480, dist: '~45 min' }
      ];

      cities.forEach(function (city) {
        var m = L.marker([city.lat, city.lng], { icon: darkIcon }).addTo(map);
        m.bindPopup('<span class="zone-popup-title">' + city.name + '</span><br><span class="zone-popup-dist">' + city.dist + ' depuis Labruguière</span>');
      });

      cities.forEach(function (city) {
        L.polyline([[43.5336, 2.2639], [city.lat, city.lng]], {
          color: '#D4622B',
          weight: 1.5,
          opacity: 0.3,
          dashArray: '4 6'
        }).addTo(map);
      });
    }
  }

  // ============================================
  // 11. WHATSAPP VISIBILITY
  // ============================================
  var whatsappFab = document.getElementById('whatsapp-fab');
  var contactSection = document.getElementById('contact');

  if (whatsappFab && contactSection) {
    var waObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        whatsappFab.classList.toggle('hidden', entry.isIntersecting);
      });
    }, { threshold: 0.3 });

    waObserver.observe(contactSection);
  }

  // ============================================
  // 12. TESTIMONIALS CAROUSEL
  // ============================================
  document.querySelectorAll('[data-carousel]').forEach(function (carousel) {
    var track = carousel.querySelector('.carousel__track');
    var viewport = carousel.querySelector('.carousel__viewport');
    var slides = Array.prototype.slice.call(carousel.querySelectorAll('.carousel__slide'));
    var prevBtn = carousel.querySelector('.carousel__arrow--prev');
    var nextBtn = carousel.querySelector('.carousel__arrow--next');
    var dotsContainer = carousel.querySelector('.carousel__dots');

    if (!track || !slides.length) return;

    function slidesPerView() {
      var w = window.innerWidth;
      if (w >= 1024) return 3;
      if (w >= 768) return 2;
      return 1;
    }

    var currentIndex = 0;

    function maxIndex() {
      return Math.max(0, slides.length - slidesPerView());
    }

    function buildDots() {
      if (!dotsContainer) return;
      dotsContainer.innerHTML = '';
      var pages = maxIndex() + 1;
      for (var i = 0; i < pages; i++) {
        var dot = document.createElement('button');
        dot.className = 'carousel__dot';
        dot.type = 'button';
        dot.setAttribute('role', 'tab');
        dot.setAttribute('aria-label', 'Aller au témoignage ' + (i + 1));
        (function (idx) {
          dot.addEventListener('click', function () { goTo(idx); });
        })(i);
        dotsContainer.appendChild(dot);
      }
    }

    function update() {
      var perView = slidesPerView();
      var step = 100 / perView;
      track.style.transform = 'translateX(-' + (currentIndex * step) + '%)';

      if (prevBtn) prevBtn.disabled = currentIndex === 0;
      if (nextBtn) nextBtn.disabled = currentIndex >= maxIndex();

      if (dotsContainer) {
        var dots = dotsContainer.querySelectorAll('.carousel__dot');
        dots.forEach(function (d, i) {
          d.classList.toggle('carousel__dot--active', i === currentIndex);
          d.setAttribute('aria-selected', i === currentIndex ? 'true' : 'false');
        });
      }

      slides.forEach(function (slide, i) {
        var visible = i >= currentIndex && i < currentIndex + perView;
        slide.setAttribute('aria-hidden', visible ? 'false' : 'true');
      });
    }

    function goTo(index) {
      currentIndex = Math.max(0, Math.min(index, maxIndex()));
      update();
    }

    function next() { goTo(currentIndex + 1); }
    function prev() { goTo(currentIndex - 1); }

    if (nextBtn) nextBtn.addEventListener('click', next);
    if (prevBtn) prevBtn.addEventListener('click', prev);

    if (viewport) {
      viewport.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowRight') { e.preventDefault(); next(); }
        if (e.key === 'ArrowLeft') { e.preventDefault(); prev(); }
      });
    }

    var touchStartX = 0;
    var touchEndX = 0;
    if (viewport) {
      viewport.addEventListener('touchstart', function (e) {
        touchStartX = e.changedTouches[0].screenX;
      }, { passive: true });

      viewport.addEventListener('touchend', function (e) {
        touchEndX = e.changedTouches[0].screenX;
        var diff = touchEndX - touchStartX;
        if (Math.abs(diff) > 50) {
          diff > 0 ? prev() : next();
        }
      }, { passive: true });
    }

    var resizeTimer;
    window.addEventListener('resize', function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () {
        currentIndex = Math.min(currentIndex, maxIndex());
        buildDots();
        update();
      }, 150);
    });

    buildDots();
    update();
  });

})();
