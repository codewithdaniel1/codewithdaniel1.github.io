# Daniel Peng — Personal Website & Portfolio

A personal website for Daniel Peng’s resume, projects, research, open-source contributions, and CTF writeups. It is a lightweight static site built with HTML, CSS, and JavaScript.

## Site map

- `index.html` — introduction, selected projects, and links to the rest of the site.
- `resume.html` — print-friendly profile and resume; use **Print / Save PDF** to export a PDF in the browser.
- `research.html` — current projects and future research updates.
- `ctf.html` — OSIRIS Research Lab links, NYUSEC’s CTFtime season snapshot, and future writeups.
- `CTF_WRITEUP_TEMPLATE.html` — starting point for a new writeup.
- `portrait-daniel.png` — Daniel's portrait, sourced from his LinkedIn profile with his permission for this site.
- `styles.css` — the site's warm, nature-inspired visual system.

## Add future work

### Projects

Add a project card in the project grid in `index.html` and a matching entry under Selected projects in `resume.html`. Link directly to the source or live demo.

### Research

Add a short summary under **Current work** in `research.html`. Include the question, method/status, and a link to the paper, poster, repository, or project page. Keep lab-wide work clearly attributed to the lab.

### CTF writeups

1. Copy `CTF_WRITEUP_TEMPLATE.html` into a new folder such as `writeups/event-challenge.html`.
2. Replace the bracketed placeholders and use relative links such as `../styles.css` and `../ctf.html`.
3. Add a link to the new article in the Writeups section of `ctf.html`.
4. Publish only after the event rules allow it.

The `ctf.html` ranking is a dated season snapshot. The linked CTFtime team profile is the source for live standings and event results.

## Publish with GitHub Pages

1. Push changes to the `main` branch of `codewithdaniel1/codewithdaniel1.github.io`.
2. GitHub Actions publishes the site to GitHub Pages using `.github/workflows/deploy.yml`.
3. The live address is `https://codewithdaniel1.github.io/`.

The workflow runs on every push to `main` and can also be started manually from the **Actions** tab. Pages must be configured to use **GitHub Actions** as the deployment source.
