---
title: Athletic Resume
permalink: /athletic-resume/
layout: default
header_type: base
---

<!-- Load Chart.js for the archery score graph -->
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

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

<!-- Chart container — height is controlled by Chart.js automatically -->
<div style="max-width: 700px; margin: 1.5rem 0;">
  <canvas id="archeryChart"></canvas>
</div>

<script src="/assets/js/archery-chart.js"></script>

### Tournament History

The table below lists all sanctioned NASP tournaments I have competed in, including my score and placement within my division. Click "Show All Tournaments" to view my full history.

<!-- Tournament table — data comes from _data/athletics.yml -->
<!-- Two tables styled as one so the accordion animation works correctly -->
<table id="tourneyTable" style="width: 100%; margin-bottom: 0; border-bottom: none;">
  <thead>
    <tr>
      <th style="width: 12%; white-space: nowrap;">Date</th>
      <th style="width: 46%">Tournament</th>
      <th style="width: 10%">Score</th>
      <th style="width: 16%">HS Boys Rank</th>
      <th style="width: 16%">Grade Rank</th>
    </tr>
  </thead>
  <tbody>
    {% for t in site.data.athletics.archery.tournaments %}
    {% if forloop.index <= 5 %}
    <tr>
      <td style="width: 12%; white-space: nowrap;">{{ t.date }}</td>
      <td style="width: 46%">{{ t.name }}</td>
      <td style="width: 10%"><strong>{{ t.score }}</strong></td>
      <td style="width: 16%">{{ t.hs_boys_rank }}</td>
      <td style="width: 16%">{{ t.grade_rank }}</td>
    </tr>
    {% endif %}
    {% endfor %}
  </tbody>
</table>
<!-- Expandable section — animates open/closed -->
<div id="extraRows" style="overflow: hidden; max-height: 0; transition: max-height 0.5s ease;">
  <table style="width: 100%; margin-top: 0; border-top: none;">
    <colgroup>
      <col style="width: 12%">
      <col style="width: 46%">
      <col style="width: 10%">
      <col style="width: 16%">
      <col style="width: 16%">
    </colgroup>
    <tbody>
      {% for t in site.data.athletics.archery.tournaments %}
      {% if forloop.index > 5 %}
      <tr>
        <td style="white-space: nowrap;">{{ t.date }}</td>
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

<!-- Toggle button for showing/hiding older tournaments -->
<button
  id="tourneyToggle"
  onclick="toggleTourneys()"
  style="
    margin-top: 0.75rem;
    background: transparent;
    border: 1px solid #FF304F;
    color: #FF304F;
    padding: 0.4rem 1rem;
    cursor: pointer;
    border-radius: 4px;
  ">
  Show All Tournaments
</button>


<script src="/assets/js/tourney-toggle.js"></script>

---

## Cross Country

[View MileSplit Profile →]({{ site.data.athletics.cross_country.milesplit_profile }}){:target="_blank"} &nbsp;&bull;&nbsp; [View UltraSignup Profile →]({{ site.data.athletics.cross_country.ultrasignup_profile }}){:target="_blank"}

I compete in cross country as a varsity runner for ASCTE, racing the standard 5K course. I missed most of the 2025 season due to injury, but have been working to improve my times consistently and continue to push my personal bests at each meet.

### 5K Progression

The chart below shows my 5K times across recorded races. Lower is faster — the trendline shows consistent improvement.

<div style="max-width: 700px; margin: 1.5rem 0;">
  <canvas id="xcChart"></canvas>
</div>
<script src="/assets/js/xc-chart.js"></script>
<p style="font-size: 0.8rem; color: #888; margin-top: 0.5rem;"><span style="color: #888;">&#9679;</span> Grey points = non-standard conditions — Darter Dash (trail run) &amp; Reindeer Dash (long course, hilly). Not directly comparable to standard road 5Ks.</p>

### Personal Records

| Event | PR |
|-------|----|
| 5K | **{{ site.data.athletics.cross_country.pr_5k }}** |
| 2 Mile | **{{ site.data.athletics.cross_country.pr_2mile }}** |

### Meet Results

The table below reflects my recorded meet results for the current season. Full race history and splits are available on my MileSplit profile.

<!-- XC results table — data comes from _data/athletics.yml -->
<table style="width: 100%;">
  <thead>
    <tr>
      <th>Date</th>
      <th>Meet</th>
      <th>Event</th>
      <th>Time</th>
      <th>Place</th>
    </tr>
  </thead>
  <tbody>
    {% for r in site.data.athletics.cross_country.results %}
    <tr>
      <td>{{ r.date }}</td>
      <td>{{ r.meet }}</td>
      <td>{{ r.event }}</td>
      <td><strong>{{ r.time }}</strong></td>
      <td>{{ r.place }}</td>
    </tr>
    {% endfor %}
  </tbody>
</table>

*Results updated each season — full history available on MileSplit.*
