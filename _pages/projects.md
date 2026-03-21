---
title: Projects
permalink: /projects/
layout: default
header_type: base
---

<script src="/assets/js/project-filter.js"></script>

A collection of my technical and engineering projects — from school assignments to personal builds.

<!-- Tag filter buttons — automatically generated from all project tags -->
<div id="tagFilters" style="position: relative; margin: 1.5rem 0;">
  <div id="tagFilterInner" style="display: flex; flex-wrap: wrap; gap: 0.5rem; max-height: 76px; overflow: hidden; transition: max-height 0.35s cubic-bezier(0.2,0,0,1); padding: 3px;">
    <button onclick="filterTag('all', this)" class="tag-btn" style="background: #FF304F; color: #fff; border: 1px solid #FF304F; padding: 0.3rem 0.9rem; border-radius: 4px; cursor: pointer; font-size: 0.85rem;">All</button>
    {% assign all_tags = site.projects | map: "tags" | join: "," | split: "," | uniq | sort %}
    {% for tag in all_tags %}
      {% assign tag = tag | strip %}
      {% if tag != "" %}
    <button onclick="filterTag('{{ tag }}', this)" class="tag-btn" style="background: transparent; color: #d8e4ea; border: 1px solid #2a3a44; padding: 0.3rem 0.9rem; border-radius: 4px; cursor: pointer; font-size: 0.85rem;">{{ tag }}</button>
      {% endif %}
    {% endfor %}
  </div>
  <button id="tagToggle" onclick="toggleTags()" style="margin-top: 0.5rem; background: transparent; border: none; color: #888; font-size: 0.8rem; cursor: pointer; padding: 0;">Show more tags ▾</button>
</div>

<script>
function toggleTags() {
  var inner = document.getElementById('tagFilterInner');
  var btn = document.getElementById('tagToggle');
  var isCollapsed = inner.style.maxHeight === '72px';
  inner.style.maxHeight = isCollapsed ? inner.scrollHeight + 'px' : '72px';
  btn.textContent = isCollapsed ? 'Show fewer tags ▴' : 'Show more tags ▾';
}
// Hide toggle button if all tags fit within two lines
document.addEventListener('DOMContentLoaded', function() {
  var inner = document.getElementById('tagFilterInner');
  var btn = document.getElementById('tagToggle');
  if (inner.scrollHeight <= 72) btn.style.display = 'none';
});
</script>

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
