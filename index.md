---
layout: default
title: "Aidan Alaniz"
permalink: /
author_profile: true
header_type: "hero"
subtitle: 'Junior at ASCTE &bull; <a href="https://www.linkedin.com/in/aidan-alaniz/" target="_blank" rel="noopener">LinkedIn</a> &bull; <a href="https://github.com/Aidan-Alaniz" target="_blank" rel="noopener">GitHub</a>'
---

## About Me

I am a junior at the Alabama School of Cyber Technology and Engineering (ASCTE) with a strong passion for programming, engineering, and leadership. I am skilled in Python, Java, CAD, 3D printing, and microcontroller work, and I enjoy applying these skills to real-world challenges. Outside of academics, I compete on the Varsity Cross Country team and am part of a national-level Archery team. I am also actively involved in student life as a Junior SGA Representative and a Subcommittee Leader for the Residential Activities Council.

---

## Recent Projects

{% assign recent_projects = site.projects | sort: "date" | reverse %}
{% for project in recent_projects limit:2 %}
### [{{ project.title }}]({{ project.url }})
{{ project.excerpt }}
{% endfor %}

[View all projects →](/projects/)

---

## Recent Posts

{% assign recent_posts = site.posts | sort: "date" | reverse %}
{% for post in recent_posts limit:2 %}
### [{{ post.title }}]({{ post.url }})
{{ post.excerpt }}
{% endfor %}

[View all posts →](/blog/)
