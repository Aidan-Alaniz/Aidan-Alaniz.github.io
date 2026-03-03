---
layout: single
title: ""
permalink: /
author_profile: true
# Navigation cards shown between the About Me section and the Recent Projects/Posts sections.
# Each entry creates a clickable card with a title, short description, and a button linking to that page.
feature_row:
  - title: "Projects"
    excerpt: "Engineering and software projects I've built and documented."
    url: "/projects/"
    btn_label: "View Projects"
    btn_class: "btn--primary"
  - title: "Blog"
    excerpt: "Short technical notes on algorithms, hardware, and design."
    url: "/blog/"
    btn_label: "Read Blog"
    btn_class: "btn--primary"
  - title: "Resume"
    excerpt: "My academic background, skills, and experience."
    url: "/resume/"
    btn_label: "View Resume"
    btn_class: "btn--primary"
---

## About Me

I am a student at the Alabama School of Cyber Technology and Engineering who is passionate, athletic, and high performing. I am involved in seven clubs, including National Beta Club, ASCTE Peer Helpers, ASCTE Residential Activities Council, Radio club, and a CyberPatriot team, which qualified for platinum teir (top 30% nation wide) and placed third in the state. I also compete in Cross Country - running with the varsity team and placing third in the state for our school classification, and Track & Field - placing at multiple events in the 800m relay and the 3200m run, as well as winning sectionals and running at the state competition.



<!-- Navigation cards for Projects, Blog, and Resume (defined in the feature_row section of the front matter above) -->
{% include feature_row %}



## Recent Projects

<!-- Displays the 2 most recent entries from the _projects/ folder, sorted newest first -->
{% assign recent_projects = site.projects | sort: "date" | reverse %}
{% for post in recent_projects limit:2 %}
  {% include archive-single.html %}
{% endfor %}



## Recent Posts

<!-- Displays the 2 most recent blog posts from the _posts/ folder, sorted newest first -->
{% assign recent_posts = site.posts | sort: "date" | reverse %}
{% for post in recent_posts limit:2 %}
  {% include archive-single.html %}
{% endfor %}

