---
title: Blog
permalink: /blog/
layout: default
header_type: base
---

Short technical notes, design reflections, and things I've learned while building projects.

{% assign sorted_posts = site.posts | sort: "date" | reverse %}
{% for post in sorted_posts %}
### [{{ post.title }}]({{ post.url }})
*{{ post.date | date: "%B %d, %Y" }}*

{{ post.excerpt }}
{% endfor %}
