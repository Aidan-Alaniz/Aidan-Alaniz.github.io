// Project tag filter
document.addEventListener('DOMContentLoaded', function() {
  window.filterTag = function(tag, btn) {
    // Update button styles
    document.querySelectorAll('.tag-btn').forEach(function(b) {
      b.style.background = 'transparent';
      b.style.color = '#d8e4ea';
      b.style.borderColor = '#2a3a44';
    });
    btn.style.background = '#FF304F';
    btn.style.color = '#fff';
    btn.style.borderColor = '#FF304F';

    // Filter cards
    var cards = document.querySelectorAll('.project-card');
    var visible = 0;
    cards.forEach(function(card) {
      var tags = card.getAttribute('data-tags') || '';
      if (tag === 'all' || tags.indexOf(tag) !== -1) {
        card.style.display = 'block';
        visible++;
      } else {
        card.style.display = 'none';
      }
    });

    var noResults = document.getElementById('noResults');
    if (noResults) noResults.style.display = visible === 0 ? 'block' : 'none';
  };
});
