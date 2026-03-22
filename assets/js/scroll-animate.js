// =============================================================================
// SCROLL ANIMATION SYSTEM
//
// HOW TO ADD NEW CONTENT:
// Standard markdown elements inside a page's main article area are animated
// automatically. To animate a new element type, add its selector to
// REVEAL_SELECTORS below.
// =============================================================================

(function () {
  'use strict';

  var EASE_OUT_EXPO  = 'cubic-bezier(0.16, 1, 0.3, 1)';
  var EASE_OUT_QUART = 'cubic-bezier(0.25, 1, 0.5, 1)';

  var REVEAL_SELECTORS = [
    'main article h2',
    // Exclude project-card children — they are never pre-hidden so observers
    // on them would try to reveal elements that are already visible, wasting
    // resources and causing a flicker when the card gets opacity:1 forced.
    'main article h3:not(.project-card h3)',
    'main article p:not(.project-card p)',
    'main article ul',
    'main article ol',
    'main article table',
    'main article hr',
    'main aside',
    'footer',
    'main article canvas',
    'main article blockquote'
  ];

  function getAnimType(el) {
    if (el.tagName === 'HR')     return 'wipe';
    if (el.tagName === 'CANVAS') return 'scale';
    if (el.tagName === 'FOOTER') return 'rise-slow';
    return 'rise';
  }

  // Set the initial hidden state via inline style.
  // Called synchronously so there is never a visible flash.
  function hide(el, type) {
    el.style.transition = 'none';
    if (type === 'wipe') {
      el.style.transformOrigin = 'center';
      el.style.transform = 'scaleX(0)';
      el.style.opacity   = '0';
    } else if (type === 'scale') {
      el.style.transform = 'scale(0.94)';
      el.style.opacity   = '0';
    } else if (type === 'rise-slow') {
      el.style.transform = 'translateY(28px)';
      el.style.opacity   = '0';
    } else {
      // 'rise' - default
      el.style.transform = 'translateY(20px)';
      el.style.opacity   = '0';
    }
  }

  // Animate element to its visible state after `delay` ms.
  // Double rAF guarantees the hidden state has been painted before the
  // transition is activated, preventing the browser collapsing both into
  // a single frame (which would skip the animation entirely).
  function reveal(el, type, delay) {
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        setTimeout(function () {
          if (type === 'wipe') {
            el.style.transition = 'transform 0.7s ' + EASE_OUT_EXPO + ', opacity 0.5s ease';
            el.style.transform  = 'scaleX(1)';
            el.style.opacity    = '1';
          } else if (type === 'scale') {
            el.style.transition = 'transform 0.65s ' + EASE_OUT_QUART + ', opacity 0.5s ease';
            el.style.transform  = 'scale(1)';
            el.style.opacity    = '1';
          } else if (type === 'rise-slow') {
            el.style.transition = 'transform 0.9s ' + EASE_OUT_EXPO + ', opacity 0.7s ease';
            el.style.transform  = 'translateY(0)';
            el.style.opacity    = '1';
          } else {
            // 'rise'
            el.style.transition = 'transform 0.6s ' + EASE_OUT_EXPO + ', opacity 0.5s ease';
            el.style.transform  = 'translateY(0)';
            el.style.opacity    = '1';
          }
          el.classList.add('sa-revealed');
        }, delay || 0);
      });
    });
  }

  document.addEventListener('DOMContentLoaded', function () {

    // -- Header: pure CSS keyframe, triggered by adding a class -------------
    var header = document.querySelector('header.header-chulapa');
    if (header) {
      header.classList.add('sa-header-ready');
    }

    // -- Nav link underline class -------------------------------------------
    document.querySelectorAll('.navbar-nav .nav-link').forEach(function (link) {
      link.classList.add('sa-nav-link');
    });

    // -- Scroll-reveal for all content elements ----------------------------
    var elements = Array.from(
      document.querySelectorAll(REVEAL_SELECTORS.join(', '))
    ).filter(function (el) {
      return !el.closest('nav');
    });

    // Hide everything synchronously before any painting
    elements.forEach(function (el) {
      hide(el, getAnimType(el));
    });

    var vh = window.innerHeight;

    // Observe each element individually.
    // threshold: 0 means the callback fires the instant ANY pixel enters view.
    // No negative rootMargin - that was causing on-load elements to never fire.
    elements.forEach(function (el) {
      var type = getAnimType(el);

      var obs = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;

          var rect = entry.target.getBoundingClientRect();
          // Elements already on screen at load get a position-based stagger.
          // Elements revealed by scrolling get a small fixed delay.
          var delay = (rect.top >= 0 && rect.top < vh)
            ? Math.round((rect.top / vh) * 180)
            : 30;

          reveal(el, type, delay);
          obs.unobserve(el);
        });
      }, { threshold: 0 });

      obs.observe(el);
    });

    // -- Table rows: stagger in when their table enters view ---------------
    document.querySelectorAll('main article table').forEach(function (table) {
      var rows = Array.from(table.querySelectorAll('tbody tr'));
      rows.forEach(function (row) {
        row.style.opacity    = '0';
        row.style.transform  = 'translateX(-8px)';
        row.style.transition = 'none';
      });

      var tObs = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          rows.forEach(function (row, i) {
            setTimeout(function () {
              row.style.transition = 'opacity 0.4s ease, transform 0.4s ' + EASE_OUT_QUART;
              row.style.opacity    = '1';
              row.style.transform  = 'translateX(0)';
            }, i * 35);
          });
          tObs.unobserve(table);
        });
      }, { threshold: 0 });

      tObs.observe(table);
    });

  });

}());
