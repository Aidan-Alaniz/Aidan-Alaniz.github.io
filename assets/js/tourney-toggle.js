// tourney-toggle.js
// Controls the show/hide accordion on the archery tournament table on the athletic resume page.
// No edits needed here — it reads from the HTML table automatically.
//
// Tournament table accordion toggle
// extraRows is a div wrapping a table — animates open/closed smoothly
function toggleTourneys() {
var extra = document.getElementById('extraRows');
var btn = document.getElementById('tourneyToggle');
var isCollapsed = extra.style.maxHeight === '0px' || extra.style.maxHeight === '0';

if (isCollapsed) {
  extra.style.maxHeight = extra.scrollHeight + 'px';
  btn.textContent = 'Show Less';
} else {
  extra.style.maxHeight = '0';
  btn.textContent = 'Show All Tournaments';
}
}
