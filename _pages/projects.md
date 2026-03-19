---
title: Projects
permalink: /projects/
layout: default
header_type: base
---

A collection of my technical and engineering projects.

{% assign sorted_projects = site.projects | sort: "date" | reverse %}
{% for project in sorted_projects %}
### [{{ project.title }}]({{ project.url }})
{{ project.excerpt }}
{% endfor %}
