// archery-chart.js
// Renders the archery score progression line chart on the athletic resume page.
// To add a new tournament: add an entry to each of the three arrays (labels, scores, names)
// in the same position. Update 'avg' when your NASP career average changes.

var labels = [
  "GH Raider '25","JCHS '25","N.AL Pre-Reg '25","Eagle Eye '25","Buckhorn Reg '25",
  "Riverton Pre-St '25","AL State '25","Centershot Out '25","E. Nationals '25",
  "Cullman KO '26","GH Raider '26","Knights Shoot '26","Liberty MS '26",
  "JCHS '26","N.AL Pre-Reg '26","Buckhorn Reg '26","Riverton Pre-St '26"
];

var scores = [244,254,260,284,258,263,266,259,269,274,271,274,279,269,266,275,275];

var names = [
  "GH Raider Bash","JCHS Archery Tournament","North Alabama Pre-Regional","7th Eagle Eye Archery Tournament",
  "Buckhorn Regional","Riverton Pre-State Tournament","Alabama State Championship",
  "Centershot Bullseye Outdoor","2025 US Eastern Nationals","Cullman Kick-Off",
  "GH Raider Bash","5th Annual Knights Shootout","Liberty Middle School Tournament",
  "JCHS Archery Tournament","North Alabama Pre-Regional","Buckhorn Regional","Riverton Pre-State Tournament"
];

// Linear regression trendline
var n = scores.length;
var sumX=0, sumY=0, sumXY=0, sumXX=0;
for (var i = 0; i < n; i++) {
  sumX += i; sumY += scores[i];
  sumXY += i * scores[i]; sumXX += i * i;
}
var slope = (n * sumXY - sumX * sumY) / (n * sumXX - sumX * sumX);
var intercept = (sumY - slope * sumX) / n;
var trendline = scores.map(function(s, i) {
  return Math.round((slope * i + intercept) * 10) / 10;
});

// Delay chart creation until the canvas is scrolled into view,
// so Chart.js's draw animation plays at the right moment.
(function() {
  var canvas = document.getElementById('archeryChart');
  if (!canvas) return;

  var observer = new IntersectionObserver(function(entries) {
    if (!entries[0].isIntersecting) return;
    observer.unobserve(canvas);

    new Chart(canvas, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: 'Score',
          data: scores,
          borderColor: '#FF304F',
          backgroundColor: 'rgba(255,48,79,0.12)',
          pointBackgroundColor: '#FF304F',
          pointRadius: 4,
          tension: 0.3,
          fill: true
        },{
          label: 'Trend',
          data: trendline,
          borderColor: '#4a8fa3',
          borderDash: [6,3],
          pointRadius: 0,
          fill: false,
          tension: 0
        }]
      },
      options: {
        responsive: true,
        animation: {
          duration: 900,
          easing: 'easeInOutQuart'
        },
        plugins: {
          legend: { labels: { color: '#d8e4ea' } },
          tooltip: { callbacks: { title: function(ctx) { return names[ctx[0].dataIndex]; } } }
        },
        scales: {
          x: { ticks: { color: '#d8e4ea', maxRotation: 45, minRotation: 30, font: { size: 11 } }, grid: { color: 'rgba(255,255,255,0.05)' } },
          y: { min: 230, max: 295, ticks: { color: '#d8e4ea' }, grid: { color: 'rgba(255,255,255,0.05)' } }
        }
      }
    });
  }, { threshold: 0.15 });

  observer.observe(canvas);
})();
