# Daniel Peng — Personal Website & Portfolio

A personal website for Daniel Peng’s resume, projects, research, open-source contributions, and CTF writeups. It is a lightweight static site built with HTML, CSS, and JavaScript.

The main navigation has three pages: **Home**, **Resume**, and **Research**. Each page has section shortcuts. Home contains Projects, CTF & writeups, and About.

## Site map

- `index.html` — **Home**: introduction, projects, OSIRIS/NYUSEC CTF standings, writeups, and professional profile links.
- `resume.html` — experience, education, selected projects, technical toolkit, awards, and open-source work.
- `research.html` — current projects and future research updates.
- `ctf.html` — redirects older links to the CTF section of `index.html`.
- `CTF_WRITEUP_TEMPLATE.html` — starting point for a new writeup.
- `writeups/2026/jerseyctf-vi/fix-your-ship.html` — JerseyCTF VI “Fix Your Ship” forensics walkthrough (April 18–19, 2026), with the original challenge files, recovered artifacts, and a Python repair script.
- `writeups/2026/bsidesnyc-ctf/classified.html` — BSidesNYC CTF “Classified” walkthrough (October 17, 2026), tracing a hex-encoded document path to a hidden flag.
- `portrait-daniel.png` — Daniel's portrait, sourced from his LinkedIn profile with his permission for this site.
- `styles.css` — the site's warm, nature-inspired visual system.

## Add future work

### Projects

Add an `<article class="project-row">` in `index.html` and a matching entry under Selected projects in `resume.html`. Link directly to the source or live demo.

### Research

Add a short summary under **Current projects** in `research.html`. Include the question, method/status, and a link to the paper, poster, repository, or project page. Keep lab-wide work clearly attributed to the lab.

### CTF writeups

1. Create `writeups/<year>/<event-slug>/` and copy `CTF_WRITEUP_TEMPLATE.html` there as `<challenge-slug>.html`.
2. Replace the bracketed placeholders and use the template’s `../../../styles.css` and `../../../index.html#ctf` links for site navigation. Keep event-specific files in that event folder (for example, an `assets/` directory).
3. Add the new article to the Challenge writeups section of `index.html`. Include the event, challenge name, category, and a short summary.
4. Publish only after the event rules allow it.

Example structure:

```text
writeups/
└── 2026/
    ├── bsidesnyc-ctf/
    │   └── classified.html
    └── jerseyctf-vi/
        ├── fix-your-ship.html
        ├── solve_fix_your_ship.py
        └── assets/
            ├── original/
            └── recovered challenge media
```

The CTF ranking on `index.html` is a dated season snapshot. The linked CTFtime team profile is the source for live standings and event results.

## Publish with GitHub Pages

1. Push changes to the `main` branch of `codewithdaniel1/codewithdaniel1.github.io`.
2. GitHub Actions publishes the site to GitHub Pages using `.github/workflows/deploy.yml`.
3. The live address is `https://codewithdaniel1.github.io/`.

The workflow runs on every push to `main` and can also be started manually from the **Actions** tab. Pages must be configured to use **GitHub Actions** as the deployment source.
