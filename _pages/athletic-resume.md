---
title: Athletic Resume
permalink: /athletic-resume/
layout: default
header_type: base
---

<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

## Aidan Alaniz — Athletic Resume

**School:** Alabama School of Cyber Technology and Engineering (ASCTE)  
**Grade:** 11th

---

## Archery — NASP

[View Full NASP Profile →]({{ site.data.athletics.archery.nasp_profile }}){:target="_blank"}

| Stat | Value |
|------|-------|
| High Score | **{{ site.data.athletics.archery.high_score }}** ({{ site.data.athletics.archery.high_score_date }}) |
| Career Average | **{{ site.data.athletics.archery.career_average }}** |
| Range | 10 / 15 Meter |

### Score Progression

<div style="max-width: 700px; margin: 1.5rem 0;">
  <canvas id="archeryChart"></canvas>
</div>

<script>
const labels = [
  "GH Raider '25","JCHS '25","N.AL Pre-Reg '25","Eagle Eye '25","Buckhorn Reg '25",
  "Riverton Pre-St '25","AL State '25","Centershot Out '25","E. Nationals '25",
  "Cullman KO '26","GH Raider '26","Knights Shoot '26","Liberty MS '26",
  "JCHS '26","N.AL Pre-Reg '26","Buckhorn Reg '26"
];
const scores = [244,254,260,284,258,263,266,259,269,274,271,274,279,269,266,275];
const names = [
  "GH Raider Bash","JCHS Archery Tournament","North Alabama Pre-Regional","7th Eagle Eye Archery Tournament",
  "Buckhorn Regional","Riverton Pre-State Tournament","Alabama State Championship",
  "Centershot Bullseye Outdoor","2025 US Eastern Nationals","Cullman Kick-Off",
  "GH Raider Bash","5th Annual Knights Shootout","Liberty Middle School Tournament",
  "JCHS Archery Tournament","North Alabama Pre-Regional","Buckhorn Regional"
];
const avg = 266.56;
const high = Math.max(...scores);

new Chart(document.getElementById('archeryChart'), {
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
      label: 'Career Avg',
      data: new Array(scores.length).fill(avg),
      borderColor: '#888888',
      borderDash: [6,3],
      pointRadius: 0,
      fill: false
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { labels: { color: '#d8e4ea' } },
      tooltip: {
        callbacks: {
          title: ctx => names[ctx[0].dataIndex]
        }
      }
    },
    scales: {
      x: {
        ticks: { color: '#d8e4ea', maxRotation: 45, minRotation: 30, font: { size: 11 } },
        grid: { color: 'rgba(255,255,255,0.05)' }
      },
      y: {
        min: 230,
        max: 295,
        ticks: { color: '#d8e4ea' },
        grid: { color: 'rgba(255,255,255,0.05)' }
      }
    }
  }
});
</script>

### Tournament History

<table id="tourneyTable" style="width:100%">
  <thead>
    <tr>
      <th>Date</th>
      <th>Tournament</th>
      <th>Score</th>
      <th>HS Boys Rank</th>
      <th>Grade Rank</th>
    </tr>
  </thead>
  <tbody>
    {% for t in site.data.athletics.archery.tournaments %}
    <tr class="tourney-row{% if forloop.index > 5 %} tourney-hidden{% endif %}">
      <td>{{ t.date }}</td>
      <td>{{ t.name }}</td>
      <td><strong>{{ t.score }}</strong></td>
      <td>{{ t.hs_boys_rank }}</td>
      <td>{{ t.grade_rank }}</td>
    </tr>
    {% endfor %}
  </tbody>
</table>

<button id="tourneyToggle" onclick="toggleTourneys()" style="margin-top:0.75rem;background:transparent;border:1px solid #FF304F;color:#FF304F;padding:0.4rem 1rem;cursor:pointer;border-radius:4px;">
  Show All Tournaments
</button>

<style>
  .tourney-hidden { display: none; }
</style>

<script>
function toggleTourneys() {
  const rows = document.querySelectorAll('.tourney-row');
  const btn = document.getElementById('tourneyToggle');
  const isCollapsed = document.querySelector('.tourney-hidden') !== null;
  rows.forEach((r, i) => {
    if (i >= 5) r.classList.toggle('tourney-hidden', !isCollapsed);
  });
  btn.textContent = isCollapsed ? 'Show Less' : 'Show All Tournaments';
}
</script>

---

## Cross Country

[View MileSplit Profile →]({{ site.data.athletics.cross_country.milesplit_profile }}){:target="_blank"}

| Event | PR |
|-------|----|
| 5K | **{{ site.data.athletics.cross_country.pr_5k }}** |

*Full results coming soon — MileSplit profile updating.*

