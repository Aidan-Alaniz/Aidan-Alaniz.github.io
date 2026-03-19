---
layout: default
title: "Aidan Alaniz"
permalink: /
author_profile: true
header_type: "hero"
subtitle: 'Junior at ASCTE &bull; <a href="https://www.linkedin.com/in/aidan-alaniz/" target="_blank" rel="noopener">LinkedIn</a> &bull; <a href="https://github.com/Aidan-Alaniz" target="_blank" rel="noopener">GitHub</a>'
---

## About Me

I'm a junior at [ASCTE](https://www.ascte.org){:target="_blank"} with a passion for programming, engineering, and pushing myself both in and out of the classroom. I compete nationally in archery and varsity cross country, lead in student government, and build projects ranging from Python games to web apps.

[Learn more about me →](/about/)

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
