// Scroll-based fade-in animation
//
// HOW TO ADD NEW CONTENT:
// You don't need to touch this file! Any new content you add using standard
// markdown (headings, paragraphs, lists, tables, dividers) inside a page's
// main article area will automatically get the fade-in animation.
//
// The only time you'd need to edit this file is if you add a brand new
// TYPE of HTML element (e.g. a <blockquote> or <canvas>) and want it animated.
// If so, just add its selector to the 'selectors' array below.

document.addEventListener('DOMContentLoaded', function() {
  var selectors = [
    'main article h2',
    'main article h3',
    'main article p',
    'main article ul',
    'main article ol',
    'main article table',
    'main article hr',
    'main aside',
    'header.header-chulapa',
    'footer'
  ];

  var targets = Array.from(document.querySelectorAll(selectors.join(', '))).filter(function(el) {
    return !el.closest('nav');
  });

  var viewportHeight = window.innerHeight;

  targets.forEach(function(el) {
    var offset = Math.min(Math.round(el.offsetHeight * 0.5), 200);
    var rootMargin = '0px 0px ' + offset + 'px 0px';

    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          // Animate in
          var rect = entry.target.getBoundingClientRect();
          var isOnLoad = rect.top >= 0 && rect.top < viewportHeight;
          var delay = isOnLoad ? Math.min(rect.top / viewportHeight * 300, 300) : 0;
          setTimeout(function() {
            entry.target.style.transition = 'opacity 0.45s cubic-bezier(0.2,0,0,1), transform 0.45s cubic-bezier(0.2,0,0,1)';
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }, delay);
        } else {
          // Only reset if element is BELOW the viewport (not yet seen)
          // Elements above the viewport (already seen) stay visible
          var rect = entry.target.getBoundingClientRect();
          if (rect.top > viewportHeight) {
            entry.target.style.transition = 'none';
            entry.target.style.opacity = '0';
            entry.target.style.transform = 'translateY(12px)';
          }
        }
      });
    }, { threshold: 0, rootMargin: rootMargin });

    observer.observe(el);
  });
});
