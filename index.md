---
layout: default
permalink: /
author_profile: true
header_type: "hero"
subtitle: 'Junior at ASCTE &bull; <a href="https://www.linkedin.com/in/aidan-alaniz/" target="_blank" rel="noopener">LinkedIn</a> &bull; <a href="https://github.com/Aidan-Alaniz" target="_blank" rel="noopener">GitHub</a>'
---

## About Me

I'm a junior at ASCTE with a passion for athletics, engineering, and building things. I compete nationally in archery and run varsity cross country, and I'm planning to study kinesiology and become a physical therapist. On the side, I build software and hardware projects because I genuinely enjoy it — and the technical skills I've picked up at ASCTE give me a perspective most people in healthcare won't have.

[Learn more about me →](/about/)

<a href="mailto:aidandalaniz@gmail.com" style="display:inline-block;background:transparent;border:1px solid #FF304F;color:#FF304F;padding:0.4rem 1.2rem;border-radius:4px;text-decoration:none;font-size:0.9rem;">Get in Touch</a>

---

## Quick Facts

<div style="display: flex; flex-wrap: wrap; gap: 1.5rem; margin: 1.5rem 0; align-items: stretch;">

  <!-- Sports stats -->
  <div style="display: flex; flex-wrap: wrap; gap: 1rem; flex: 2; min-width: 280px;">

    <a href="/athletic-resume/" style="flex: 1; min-width: 120px; background: #1c2d36; border-radius: 6px; padding: 1rem 1.25rem; text-align: center; text-decoration: none; display: block;">
      <div style="font-size: 2rem; font-weight: bold; color: #FF304F;">284</div>
      <div style="font-size: 0.85rem; color: #888; margin-top: 0.25rem;">Archery High Score</div>
    </a>

    <a href="/athletic-resume/" style="flex: 1; min-width: 120px; background: #1c2d36; border-radius: 6px; padding: 1rem 1.25rem; text-align: center; text-decoration: none; display: block;">
      <div style="font-size: 2rem; font-weight: bold; color: #FF304F;">22:38</div>
      <div style="font-size: 0.85rem; color: #888; margin-top: 0.25rem;">5K PR</div>
    </a>

    <a href="/academic-resume/" style="width: 100%; background: #1c2d36; border-radius: 6px; padding: 0.75rem 1.25rem; text-align: center; border-left: 3px solid #FF304F; text-decoration: none; display: block;">
      <div style="font-size: 0.95rem; font-weight: bold; color: #d8e4ea;">National Competitor</div>
      <div style="font-size: 0.8rem; color: #888; margin-top: 0.2rem;">2025 US Eastern Nationals &mdash; Archery</div>
    </a>

  </div>

  <!-- Divider -->
  <div style="width: 1px; background: #2a3a44; align-self: stretch;"></div>

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

I compete in two sports at a high level — NASP archery nationally and cross country at the varsity level for ASCTE. Archery has been my stronger focus lately, with a career average of 266.56 and a high score of 284, placing competitively at regionals, state, and nationals.

[View Athletic Resume →](/athletic-resume/)

---

## Recent Projects

{% assign recent_projects = site.projects | sort: "date" | reverse %}
{% for project in recent_projects limit:2 %}
<div style="margin-bottom: 1.5rem; padding-bottom: 1.5rem; border-bottom: 1px solid #2a3a44;">
  <h3 style="margin-bottom: 0.25rem;"><a href="{{ project.url }}">{{ project.title }}</a></h3>
  <p style="margin-top: 0.5rem;">{{ project.excerpt }}</p>
  <a href="{{ project.url }}" style="font-size: 0.9rem;">Read more →</a>
</div>
{% endfor %}

[View all projects →](/projects/)
