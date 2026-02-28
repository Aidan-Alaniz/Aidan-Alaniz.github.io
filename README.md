# Personal Website

This is the source code for my personal website, built with Jekyll and the [Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/) theme, hosted on GitHub Pages.

Full disclosure: I'm a busy high school student, and used GitHub Copilot to help design the structure and set up my website, but all of the content you see is original and mine! My website is still a work in progress, and I add to it whenever I can, so please excuse parts that may not be complete or long pauses in between contributions. Enjoy!

Check it out live here: [https://Jordan-Alaniz.github.io/](https://Jordan-Alaniz.github.io/)

---

## How to Add Content

### Adding a Blog Post

1. Create a new file in the `_posts/` directory.
2. Name it using the format: `YYYY-MM-DD-title-of-post.md`  
   Example: `_posts/2025-03-01-my-new-post.md`
3. Add the following front matter at the top:

```yaml
---
title: "My Post Title"
date: 2025-03-01
categories:
  - Technical         # or General, Athletics, etc.
tags:
  - Python            # any relevant tags
---

Your post content goes here in Markdown...
```

### Adding a Project

1. Create a new file in the `_projects/` directory.
2. Name it with a short descriptive slug: `_projects/my-project.md`
3. Add the following front matter at the top:

```yaml
---
title: "My Project Title"
excerpt: "One sentence description shown on the projects grid."
date: 2025-03-01
tags:
  - Python
  - Hardware
header:
  teaser: /assets/images/projects/my-project-teaser.jpg   # optional thumbnail (600x400px recommended)
---

## Overview
...

## Tools & Skills Used
...

## What I Learned
...
```

4. (Optional) Add a teaser image at `assets/images/projects/my-project-teaser.jpg` — a 600×400px image works well.

### Updating Your Resume

- **Academic Resume:** Edit `_pages/resume.md`
- **Athletic Resume:** Edit `_pages/athletic-resume.md`
- **PDF Download:** Replace `assets/files/Jordan_Alaniz_Resume.pdf` with your updated PDF.

### Repository Structure

```
_posts/          <- Blog posts (YYYY-MM-DD-title.md)
_projects/       <- Project writeups
_pages/          <- Static pages (resume, about, blog index, etc.)
assets/
  files/         <- Downloadable files (PDF resume, etc.)
  images/
    projects/    <- Project teaser images
_data/
  navigation.yml <- Site navigation links
_config.yml      <- Site-wide settings
```
