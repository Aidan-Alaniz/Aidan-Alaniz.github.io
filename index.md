---
layout: default
permalink: /
author_profile: true
header_type: "hero"
title: "Aidan Alaniz"
subtitle: '<a href="https://www.ascte.org" target="_blank" rel="noopener">Junior at ASCTE</a> &bull; <a href="https://www.linkedin.com/in/aidan-alaniz/" target="_blank" rel="noopener">LinkedIn</a> &bull; <a href="https://github.com/Aidan-Alaniz" target="_blank" rel="noopener">GitHub</a>'
---

I'm a junior at ASCTE with a passion for athletics, engineering, and building things. I compete nationally in archery and run varsity cross country, and I'm planning to study kinesiology and become a physical therapist. On the side, I build software and hardware projects because it's something I've always enjoyed — and the technical skills I've picked up at ASCTE give me a perspective most people in healthcare won't have.

[Learn more about me →](/about/)

<a href="mailto:aidandalaniz@gmail.com" class="btn-outline-accent"><span>Get in Touch</span></a>

---

## Quick Facts

<div style="display: flex; flex-wrap: wrap; gap: 1.5rem; margin: 1.5rem 0; align-items: stretch;">

  <!-- Sports stats -->
  <div style="display: flex; flex-wrap: wrap; gap: 1rem; flex: 2; min-width: 280px;">

    <a href="/athletic-resume/" style="flex: 1; min-width: 120px; background: #1c2d36; border-radius: 6px; padding: 1rem 1.25rem; text-align: center; text-decoration: none; display: block;">
      <div style="font-size: 2rem; font-weight: bold; color: #FF304F;">{{ site.data.athletics.archery.high_score }}</div>
      <div style="font-size: 0.85rem; color: #888; margin-top: 0.25rem;">Archery High Score</div>
    </a>

    <a href="/athletic-resume/" style="flex: 1; min-width: 120px; background: #1c2d36; border-radius: 6px; padding: 1rem 1.25rem; text-align: center; text-decoration: none; display: block;">
      <div style="font-size: 2rem; font-weight: bold; color: #FF304F;">{{ site.data.athletics.cross_country.pr_5k }}</div>
      <div style="font-size: 0.85rem; color: #888; margin-top: 0.25rem;">5K PR</div>
    </a>

    <a href="/athletic-resume/" style="width: 100%; background: #1c2d36; border-radius: 6px; padding: 0.75rem 1.25rem; text-align: center; border-left: 3px solid #FF304F; text-decoration: none; display: block;">
      <div style="font-size: 0.95rem; font-weight: bold; color: #d8e4ea;">National Competitor</div>
      <div style="font-size: 0.8rem; color: #888; margin-top: 0.2rem;">2025 US Eastern Nationals &mdash; Archery</div>
    </a>

  </div>

  <!-- Divider -->
  <div id="stats-divider" style="width: 1px; background: #2a3a44; align-self: stretch;"></div>

  <!-- Non-sports stats -->
  <div style="display: flex; flex-wrap: wrap; gap: 1rem; flex: 1; min-width: 280px;">

    <a href="/academic-resume/" style="flex: 1; min-width: 120px; background: #1c2d36; border-radius: 6px; padding: 1rem 1.25rem; text-align: center; text-decoration: none; display: block;">
      <div style="font-size: 2rem; font-weight: bold; color: #FF304F;">4.16</div>
      <div style="font-size: 0.85rem; color: #888; margin-top: 0.25rem;">GPA</div>
    </a>

    <a href="/academic-resume/" style="flex: 1; min-width: 120px; background: #1c2d36; border-radius: 6px; padding: 1rem 1.25rem; text-align: center; text-decoration: none; display: block;">
      <div style="font-size: 2rem; font-weight: bold; color: #FF304F;">45+</div>
      <div style="font-size: 0.85rem; color: #888; margin-top: 0.25rem;">Service Hours</div>
    </a>

    <a href="/certifications/" style="flex: 1; min-width: 120px; background: #1c2d36; border-radius: 6px; padding: 1rem 1.25rem; text-align: center; text-decoration: none; display: block;">
      <div style="font-size: 2rem; font-weight: bold; color: #FF304F;">5</div>
      <div style="font-size: 0.85rem; color: #888; margin-top: 0.25rem;">Certifications</div>
    </a>

  </div>


</div>

---

## Athletics

I compete in two sports — NASP archery nationally and cross country at the varsity level for ASCTE. In archery I have a career average of 266.56 and a high score of 284, with results at regionals, state, and nationals including a 3rd place team finish at the Alabama State Championship. In cross country I have a road 5K PR of 22:38 and am working to improve each season.

[View Athletic Resume →](/athletic-resume/)

---

## Recent Projects

{% assign recent_projects = site.projects | sort: "date" | reverse %}
{% for project in recent_projects limit:2 %}
<div class="project-card">
  <h3><a href="{{ project.url }}">{{ project.title }}</a></h3>
  <p class="project-card__excerpt">{{ project.excerpt }}</p>
  <a href="{{ project.url }}" class="project-card__link">Read more →</a>
</div>
{% endfor %}

[View all projects →](/projects/)
