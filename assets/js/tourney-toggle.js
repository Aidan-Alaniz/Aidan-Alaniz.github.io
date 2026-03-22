// tourney-toggle.js
// Controls the show/hide accordion on the archery tournament table.
// Uses a boolean flag instead of fragile maxHeight string comparisons.
(function () {
  'use strict';

  var open = false;

  window.toggleTourneys = function () {
    var extra = document.getElementById('extraRows');
    var btn   = document.getElementById('tourneyToggle');
    var label = btn.querySelector('span') || btn;

    open = !open;
    extra.style.maxHeight = open ? extra.scrollHeight + 'px' : '0';
    label.textContent     = open ? 'Show Less' : 'Show All Tournaments';
  };
}());
