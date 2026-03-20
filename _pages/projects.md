---
title: Projects
permalink: /projects/
layout: default
header_type: base
---

<script src="/assets/js/project-filter.js"></script>

A collection of my technical and engineering projects — from school assignments to personal builds.

<div id="tagFilters" style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin: 1.5rem 0;">
  <button onclick="filterTag('all', this)" class="tag-btn" style="background: #FF304F; color: #fff; border: 1px solid #FF304F; padding: 0.3rem 0.9rem; border-radius: 4px; cursor: pointer; font-size: 0.85rem;">All</button>
  <button onclick="filterTag('Python', this)" class="tag-btn" style="background: transparent; color: #d8e4ea; border: 1px solid #2a3a44; padding: 0.3rem 0.9rem; border-radius: 4px; cursor: pointer; font-size: 0.85rem;">Python</button>
  <button onclick="filterTag('Hardware', this)" class="tag-btn" style="background: transparent; color: #d8e4ea; border: 1px solid #2a3a44; padding: 0.3rem 0.9rem; border-radius: 4px; cursor: pointer; font-size: 0.85rem;">Hardware</button>
  <button onclick="filterTag('Web Development', this)" class="tag-btn" style="background: transparent; color: #d8e4ea; border: 1px solid #2a3a44; padding: 0.3rem 0.9rem; border-radius: 4px; cursor: pointer; font-size: 0.85rem;">Web</button>
  <button onclick="filterTag('School', this)" class="tag-btn" style="background: transparent; color: #d8e4ea; border: 1px solid #2a3a44; padding: 0.3rem 0.9rem; border-radius: 4px; cursor: pointer; font-size: 0.85rem;">School</button>
  <button onclick="filterTag('Personal', this)" class="tag-btn" style="background: transparent; color: #d8e4ea; border: 1px solid #2a3a44; padding: 0.3rem 0.9rem; border-radius: 4px; cursor: pointer; font-size: 0.85rem;">Personal</button>
  <button onclick="filterTag('In Progress', this)" class="tag-btn" style="background: transparent; color: #d8e4ea; border: 1px solid #2a3a44; padding: 0.3rem 0.9rem; border-radius: 4px; cursor: pointer; font-size: 0.85rem;">In Progress</button>
</div>

---

{% assign sorted_projects = site.projects | sort: "date" | reverse %}
{% for project in sorted_projects %}
<div class="project-card" data-tags="{{ project.tags | join: ',' }}" style="margin-bottom: 2rem; padding-bottom: 2rem; border-bottom: 1px solid #2a3a44;">
  <h3 style="margin-bottom: 0.25rem;"><a href="{{ project.url }}">{{ project.title }}</a></h3>
  <p style="margin: 0.25rem 0; font-size: 0.9rem; color: #888;">
    {% for tag in project.tags %}
      <span style="background: #1c2d36; padding: 0.1rem 0.5rem; border-radius: 3px; font-size: 0.8rem;">{{ tag }}</span>
    {% endfor %}
  </p>
  <p style="margin-top: 0.75rem;">{{ project.excerpt }}</p>
  <a href="{{ project.url }}" style="font-size: 0.9rem;">Read more →</a>
</div>
{% endfor %}

<p id="noResults" style="display: none; color: #888;">No projects found for that tag.</p>
