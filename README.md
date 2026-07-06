# Aidan Alaniz — Personal Portfolio

Personal portfolio site for Aidan Alaniz, built with [Jekyll](https://jekyllrb.com/) and hosted on [GitHub Pages](https://pages.github.com/).

**Live site:** [aidan-alaniz.github.io](https://aidan-alaniz.github.io)

---

## About

I'm a senior at the Alabama School of Cyber Technology and Engineering (ASCTE). I compete nationally in NASP archery, run varsity cross country, and build software and hardware projects because I enjoy it.

This site serves as a portfolio of my projects, academic and athletic resumes, and certifications.

---

## Stack

- **Jekyll** with the [Chulapa](https://github.com/dieghernan/chulapa) theme (Wandoo skin, dark mode)
- **GitHub Pages** for hosting
- **Chart.js** for archery and XC data visualizations
- Custom CSS and JavaScript for animations, tag filtering, and interactive elements
- Data-driven pages via `_data/athletics.yml` for archery and cross country stats

---

## Structure

```
_config.yml          # Site config, theme, navbar, author info
_data/
  athletics.yml      # All archery tournament and XC race data
_pages/              # Main site pages (about, resumes, certifications, etc.)
_projects/           # Individual project pages
assets/
  css/custom.css     # Placeholder — all styles live in custom_head.html
  js/                # Chart and animation scripts
  images/            # Favicon and profile photo
_includes/
  custom/
    custom_head.html # All custom CSS, Open Graph tags, animation setup
  footer.html        # Custom footer
```

---

## Running Locally

```bash
bundle install
bundle exec jekyll serve
```

Site runs at `http://localhost:4000`.

---

## Notes

- All custom styles are in `_includes/custom/custom_head.html` - not in `assets/css/custom.css`
- Scroll animations are handled by `assets/js/scroll-animate.js` - new standard markdown content animates automatically
- Built with assistance from [Claude AI](https://claude.ai) (Anthropic)
