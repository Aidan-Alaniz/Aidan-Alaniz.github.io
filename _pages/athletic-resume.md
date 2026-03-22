---
title: Athletic Resume
permalink: /athletic-resume/
layout: default
header_type: base
---

## Aidan Alaniz — Athletic Resume

[aidandalaniz@gmail.com](mailto:aidandalaniz@gmail.com) · [NASP Profile]({{ site.data.athletics.archery.nasp_profile }}){:target="_blank"} · [MileSplit Profile]({{ site.data.athletics.cross_country.milesplit_profile }}){:target="_blank"}

<p style="font-size: 0.8rem; color: #888; margin-bottom: 1.5rem;">Last updated: March 20, 2026</p>

I compete in NASP archery at the national level and run cross country at the varsity level. Both sports have pushed me to develop consistency, focus, and the ability to perform under pressure.

---

## Archery — NASP

I have competed in NASP (National Archery in the Schools Program) for two seasons, consistently improving my scores and placing competitively at the regional and state level. I shoot the 10/15 meter indoor range and have competed in over 15 sanctioned tournaments, including the US Eastern Nationals. In the 2024-25 season, our team placed **3rd at the 2025 Alabama State Championship**.

| Stat | Value |
|------|-------|
| High Score | **{{ site.data.athletics.archery.high_score }}** ({{ site.data.athletics.archery.high_score_date }}) |
| Career Average | **{{ site.data.athletics.archery.career_average }}** |
| Range | 10 / 15 Meter Indoor |
| Tournaments Competed | 16 |

### Score Progression

The chart below shows my score across all sanctioned tournaments, ordered chronologically. The dashed line represents my career average. Hovering over a point shows the full tournament name.

<div class="chart-container">
  <canvas id="archeryChart"></canvas>
</div>

### Tournament History

The table below lists all sanctioned NASP tournaments I have competed in, including my score and placement within my division. Click "Show All Tournaments" to view my full history.

<!-- Tournament table — data comes from _data/athletics.yml -->
<table id="tourneyTable" class="tourney-table">
  <thead>
    <tr>
      <th class="col-date">Date</th>
      <th class="col-name">Tournament</th>
      <th class="col-score">Score</th>
      <th class="col-rank">HS Boys Rank</th>
      <th class="col-rank">Grade Rank</th>
    </tr>
  </thead>
  <tbody>
    {% for t in site.data.athletics.archery.tournaments %}
    {% if forloop.index <= 5 %}
    <tr>
      <td class="col-date">{{ t.date }}</td>
      <td>{{ t.name }}</td>
      <td><strong>{{ t.score }}</strong></td>
      <td>{{ t.hs_boys_rank }}</td>
      <td>{{ t.grade_rank }}</td>
    </tr>
    {% endif %}
    {% endfor %}
  </tbody>
</table>
<!-- Expandable section — animates open/closed -->
<div id="extraRows" class="tourney-extra">
  <table class="tourney-table tourney-table--continuation">
    <colgroup>
      <col class="col-date">
      <col class="col-name">
      <col class="col-score">
      <col class="col-rank">
      <col class="col-rank">
    </colgroup>
    <tbody>
      {% for t in site.data.athletics.archery.tournaments %}
      {% if forloop.index > 5 %}
      <tr>
        <td class="col-date">{{ t.date }}</td>
        <td>{{ t.name }}</td>
        <td><strong>{{ t.score }}</strong></td>
        <td>{{ t.hs_boys_rank }}</td>
        <td>{{ t.grade_rank }}</td>
      </tr>
      {% endif %}
      {% endfor %}
    </tbody>
  </table>
</div>

<button id="tourneyToggle" onclick="toggleTourneys()">
  <span>Show All Tournaments</span>
</button>

---

## Cross Country {#cross-country}

[View MileSplit Profile →]({{ site.data.athletics.cross_country.milesplit_profile }}){:target="_blank"} &nbsp;&bull;&nbsp; [View UltraSignup Profile →]({{ site.data.athletics.cross_country.ultrasignup_profile }}){:target="_blank"}

I compete in cross country as a varsity runner for ASCTE, racing the standard 5K course. I missed most of the 2025 season due to injury, but have been working to improve my times consistently and continue to push my personal bests at each meet.

### 5K Progression

The chart below shows my 5K times across recorded races. Lower is faster — the trendline shows consistent improvement.

<div class="chart-container">
  <canvas id="xcChart"></canvas>
</div>
<p style="font-size: 0.8rem; color: #888; margin-top: 0.5rem;"><span style="color: #888;">&#9679;</span> Grey points = non-standard conditions — Darter Dash (trail run) &amp; Reindeer Dash (long course, hilly). Not directly comparable to standard road 5Ks.</p>

### Personal Records

| Event | PR |
|-------|----|
| 5K | **{{ site.data.athletics.cross_country.pr_5k }}** |
| 2 Mile | **{{ site.data.athletics.cross_country.pr_2mile }}** |

### Meet Results

The table below reflects my recorded meet results for the current season. Full race history and splits are available on my MileSplit profile.

<!-- XC results table — data comes from _data/athletics.yml -->
<table class="xc-table">
  <thead>
    <tr>
      <th>Date</th>
      <th>Meet</th>
      <th>Event</th>
      <th>Time</th>
      <th class="xc-place-col">Place</th>
    </tr>
  </thead>
  <tbody>
    {% for r in site.data.athletics.cross_country.results %}
    <tr>
      <td>{{ r.date }}</td>
      <td>{{ r.meet }}</td>
      <td>{{ r.event }}</td>
      <td><strong>{{ r.time }}</strong></td>
      <td class="xc-place-col">{{ r.place }}</td>
    </tr>
    {% endfor %}
  </tbody>
</table>

*Results updated each season — full history available on MileSplit.*

<!-- All chart/toggle scripts loaded here so they never block page rendering -->
<script src="https://cdn.jsdelivr.net/npm/chart.js" defer></script>
<script src="/assets/js/tourney-toggle.js" defer></script>
<script src="/assets/js/archery-chart.js" defer></script>
<script src="/assets/js/xc-chart.js" defer></script>
