/* ============================================
   TMS - Main JavaScript
   Navigation, animations, galerie, formulaire
   ============================================ */

(function () {
  'use strict';

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
  // 4. SCROLL REVEAL
  // ============================================
  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!prefersReducedMotion) {
    var revealElements = document.querySelectorAll('.reveal, .reveal-left');

    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(function (el) {
      revealObserver.observe(el);
    });
  } else {
    document.querySelectorAll('.reveal, .reveal-left').forEach(function (el) {
      el.classList.add('visible');
    });
  }

  // ============================================
  // 5. NUMBER COUNT-UP
  // ============================================
  var countElements = document.querySelectorAll('[data-target]');

  function animateCount(el) {
    var target = parseInt(el.getAttribute('data-target'), 10);
    var duration = 2000;
    var start = 0;
    var startTime = null;

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      var progress = Math.min((timestamp - startTime) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      var current = Math.round(eased * target);
      el.textContent = current + (target >= 100 ? '+' : target >= 10 ? '+' : '');
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    }

    requestAnimationFrame(step);
  }

  if (!prefersReducedMotion) {
    var countObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCount(entry.target);
          countObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    countElements.forEach(function (el) {
      countObserver.observe(el);
    });
  } else {
    countElements.forEach(function (el) {
      var target = el.getAttribute('data-target');
      el.textContent = target + (parseInt(target, 10) >= 10 ? '+' : '');
    });
  }

  // ============================================
  // 6. GALLERY FILTER
  // ============================================
  var filterBtns = document.querySelectorAll('.filter-btn');
  var galleryItems = document.querySelectorAll('.gallery-item');

  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var filter = this.getAttribute('data-filter');

      filterBtns.forEach(function (b) { b.classList.remove('active'); });
      this.classList.add('active');

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
  // 7. LIGHTBOX
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
    var img = item.querySelector('img');
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
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

    item.addEventListener('click', function () {
      var vis = getVisibleItems();
      var idx = vis.indexOf(item);
      openLightbox(idx);
    });

    item.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
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
  // 8. FORM VALIDATION & AJAX SUBMIT
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

      // AJAX submit — no redirect
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
  // 8b. LEAFLET MAP (Zone d'intervention)
  // ============================================
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

    // Marqueur TMS (siège)
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

    // Rayon d'intervention (cercle)
    L.circle([43.5336, 2.2639], {
      radius: 50000,
      color: '#D4622B',
      fillColor: '#D4622B',
      fillOpacity: 0.06,
      weight: 1.5,
      dashArray: '6 4'
    }).addTo(map);

    // Marqueurs
    var hq = L.marker([43.5336, 2.2639], { icon: orangeIcon }).addTo(map);
    hq.bindPopup('<span class="zone-popup-title">TMS — Siège</span><br>Lieu-dit Bellevue<br>81290 Labruguière<br><span class="zone-popup-dist">05 63 88 45 12</span>');

    var cities = [
      { name: 'Castres', lat: 43.6045, lng: 2.2390, dist: '~10 min' },
      { name: 'Mazamet', lat: 43.4897, lng: 2.3745, dist: '~20 min' },
      { name: 'Albi', lat: 43.9293, lng: 2.1480, dist: '~45 min' }
    ];

    cities.forEach(function (city) {
      var m = L.marker([city.lat, city.lng], { icon: darkIcon }).addTo(map);
      m.bindPopup('<span class="zone-popup-title">' + city.name + '</span><br><span class="zone-popup-dist">' + city.dist + ' depuis Labruguière</span>');
    });

    // Lignes de connexion vers le siège
    cities.forEach(function (city) {
      L.polyline([[43.5336, 2.2639], [city.lat, city.lng]], {
        color: '#D4622B',
        weight: 1.5,
        opacity: 0.3,
        dashArray: '4 6'
      }).addTo(map);
    });
  }

  // ============================================
  // 9. WHATSAPP VISIBILITY
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

})();
