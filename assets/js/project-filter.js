// Project tag filter — exposed immediately so onclick attributes work
// before DOMContentLoaded fires.
(function () {
  'use strict';

  // Tag row toggle — defined here so it's available the instant the page loads.
  window.toggleTags = function () {
    var inner = document.getElementById('tagFilterInner');
    var btn   = document.getElementById('tagToggle');
    var collapsed = inner.classList.toggle('tag-filter-collapsed');
    btn.textContent = collapsed ? 'Show more tags \u25be' : 'Show fewer tags \u25b4';
  };

  var EASE = 'cubic-bezier(0.25, 1, 0.5, 1)';

  function showCard(card, delay) {
    // Reset to hidden state without transition so the starting point is clean
    card.style.transition = 'none';
    card.style.opacity    = '0';
    card.style.transform  = 'translateY(14px)';
    card.style.display    = '';
    // Double rAF ensures the hidden state is painted before the transition fires,
    // preventing the browser from collapsing both frames into one (skipping animation)
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        setTimeout(function () {
          card.style.transition = 'opacity 0.3s ease, transform 0.35s ' + EASE;
          card.style.opacity    = '1';
          card.style.transform  = 'translateY(0)';
        }, delay);
      });
    });
  }

  function hideCard(card) {
    card.style.transition = 'none';
    card.style.opacity    = '0';
    card.style.display    = 'none';
  }

  window.filterTag = function (tag, btn) {
    // Update button active state via CSS class
    document.querySelectorAll('.tag-btn').forEach(function (b) {
      b.classList.remove('tag-btn--active');
    });
    btn.classList.add('tag-btn--active');

    var cards   = document.querySelectorAll('.project-card');
    var visible = 0;

    cards.forEach(function (card) {
      var tags  = card.getAttribute('data-tags') || '';
      // Exact tag matching — split on comma so e.g. "APIs" won't match "JavaScript APIs"
      var match = tag === 'all' || tags.split(',').some(function (t) {
        return t.trim() === tag;
      });
      if (match) {
        showCard(card, visible * 45); // 45ms stagger between cards
        visible++;
      } else {
        hideCard(card);
      }
    });

    var noResults = document.getElementById('noResults');
    if (noResults) noResults.style.display = visible === 0 ? 'block' : 'none';
  };
}());
