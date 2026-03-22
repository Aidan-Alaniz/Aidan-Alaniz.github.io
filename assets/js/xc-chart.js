// xc-chart.js
// Renders the cross country 5K progression chart on the athletic resume page.
// To add a race: add entries to xcLabels, xcTimes (in seconds), and xcNames in the same position.
// Grey points = non-standard conditions (trail run or long/hilly course).
// Update pointColors array to match — use '#FF304F' for standard road races, '#888888' for non-standard.

var xcLabels = ["Sep '24", "Nov '24", "Dec '24", "Sep '25"];
var xcTimes  = [1956, 1379, 1715, 1358]; // 32:36, 22:59, 28:35, 22:38 in seconds
var xcNames  = [
  "Darter Dash (Trail) — 32:36",
  "5K Turkey Trot — 22:59",
  "The Reindeer Dash 5K — 28:35",
  "The Southern Showcase — 22:38"
];

var pointColors = ['#888888', '#FF304F', '#888888', '#FF304F'];

// Linear regression trendline
var n = xcTimes.length;
var sumX=0, sumY=0, sumXY=0, sumXX=0;
for (var i=0; i<n; i++) {
  sumX += i; sumY += xcTimes[i];
  sumXY += i * xcTimes[i]; sumXX += i * i;
}
var slope     = (n * sumXY - sumX * sumY) / (n * sumXX - sumX * sumX);
var intercept = (sumY - slope * sumX) / n;
var xcTrend   = xcTimes.map(function(t, i) {
  return Math.round(slope * i + intercept);
});

function toMMSS(s) {
  return Math.floor(s/60) + ':' + ('0' + (s%60)).slice(-2);
}

// Delay chart creation until the canvas is scrolled into view,
// so Chart.js's draw animation plays at the right moment.
(function() {
  var canvas = document.getElementById('xcChart');
  if (!canvas) return;

  var observer = new IntersectionObserver(function(entries) {
    if (!entries[0].isIntersecting) return;
    observer.unobserve(canvas);

    new Chart(canvas, {
      type: 'line',
      data: {
        labels: xcLabels,
        datasets: [{
          label: '5K Time',
          data: xcTimes,
          borderColor: '#FF304F',
          backgroundColor: 'rgba(255,48,79,0.12)',
          pointBackgroundColor: pointColors,
          pointRadius: 5,
          tension: 0.3,
          fill: true
        },{
          label: 'Trend',
          data: xcTrend,
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
          tooltip: {
            callbacks: {
              title: function(ctx) {
                var i = ctx[0].dataIndex;
                var name = xcNames[i];
                if (i === 0) return name + ' ⚑ Trail Run';
                if (i === 2) return name + ' ⚑ Long Course / Hilly';
                return name;
              },
              label: function(ctx) { return 'Time: ' + toMMSS(ctx.raw); }
            }
          }
        },
        scales: {
          x: {
            ticks: { color: '#d8e4ea', font: { size: 12 } },
            grid: { color: 'rgba(255,255,255,0.05)' }
          },
          y: {
            reverse: true,
            ticks: {
              color: '#d8e4ea',
              callback: function(val) { return toMMSS(val); }
            },
            grid: { color: 'rgba(255,255,255,0.05)' }
          }
        }
      }
    });
  }, { threshold: 0.15 });

  observer.observe(canvas);
})();
