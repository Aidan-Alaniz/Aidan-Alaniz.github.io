---
title: Projects
permalink: /projects/
layout: default
header_type: base
---

<!-- Load filter script first so filterTag() is defined before any button is clicked -->
<script src="/assets/js/project-filter.js"></script>

A collection of my technical and engineering projects — from school assignments to personal builds.

<div id="tagFilters">
  <div id="tagFilterInner" class="tag-filter-collapsed">
    <button onclick="filterTag('all', this)" class="tag-btn tag-btn--active">All</button>
    {% assign all_tags = site.projects | map: "tags" | join: "," | split: "," | uniq | sort %}
    {% for tag in all_tags %}
      {% assign tag = tag | strip %}
      {% if tag != "" %}
    <button onclick="filterTag('{{ tag }}', this)" class="tag-btn">{{ tag }}</button>
      {% endif %}
    {% endfor %}
  </div>
  <button id="tagToggle" onclick="toggleTags()">Show more tags ▾</button>
</div>

---

{% assign sorted_projects = site.projects | sort: "date" | reverse %}
{% for project in sorted_projects %}
<div class="project-card" data-tags="{{ project.tags | join: ',' }}">
  <h3><a href="{{ project.url }}">{{ project.title }}</a></h3>
  <p class="project-card__tags">
    {% for tag in project.tags %}
      <span class="project-tag">{{ tag }}</span>
    {% endfor %}
  </p>
  <p class="project-card__excerpt">{{ project.excerpt }}</p>
  <a href="{{ project.url }}" class="project-card__link">Read more →</a>
</div>
{% endfor %}

<p id="noResults">No projects found for that tag.</p>


