# Daniel Peng | Personal Website & Portfolio

A personal website for Daniel Peng’s resume, projects, research, open-source contributions, and CTF writeups. It is a lightweight static site built with HTML, CSS, and JavaScript.

The main navigation has four pages: **Home**, **Project**, **Research**, and **CTF**. Home brings together the introduction and professional experience; Project contains selected work and open-source contributions.

## Site map

- `index.html` - **Home**: introduction, experience, education, awards, technical toolkit, and professional profile links.
- `project.html` - **Project**: selected projects and open-source contributions.
- `research.html` - research focus areas and future research updates.
- `ctf.html` - NYUSEC CTF results and challenge writeups.
- `CTF_WRITEUP_TEMPLATE.html` - starting point for a new writeup.
- `writeups/2026/jerseyCTF-vi/fix-your-ship/fix-your-ship.html` - JerseyCTF VI “Fix Your Ship” forensics walkthrough (April 18-19, 2026), with the original challenge files, recovered artifacts, and a Python repair script.
- `writeups/2026/jerseyCTF-vi/recovered-signal-file/recovered-signal-file.html` - JerseyCTF VI Base64 and Caesar-shift decoding walkthrough.
- `writeups/2026/jerseyCTF-vi/qastah-nuq/qastah-nuq.html` - JerseyCTF VI PCAP and HTTP payload analysis walkthrough.
- `writeups/2026/jerseyCTF-vi/relay-artifact-tx-7/relay-artifact-tx-7.html` - JerseyCTF VI RSA prime-reuse cryptography walkthrough.
- `writeups/2026/bsidesnyc-ctf/classified/classified.html` - BSidesNYC CTF “Classified” walkthrough (October 17, 2026), tracing a hex-encoded document path to a hidden flag.
- `portrait-daniel.png` - Daniel's portrait, sourced from his LinkedIn profile with his permission for this site.
- `styles.css` - the site's warm, nature-inspired visual system.

## Add future work

### Projects

Add a project showcase to `project.html`. Link directly to the source, package page, or live demo.

### Research

Add a research topic card in `research.html`. Include the question, method/status, and a link to the paper, poster, repository, or project page. Keep lab-wide work clearly attributed to the lab.

### CTF writeups

1. Create `writeups/<year>/<event-slug>/` and copy `CTF_WRITEUP_TEMPLATE.html` there as `<challenge-slug>.html`.
2. Replace the bracketed placeholders and use the template’s `../../../../styles.css` and `../../../../ctf.html` links for site navigation. Keep each challenge page and its `assets/` directory together in a challenge folder. Do not add a “Jump to” bar or solve counts.
3. Add the new article to the Writeups section of `ctf.html`. Include the event, challenge name, category, and a short summary.
4. Publish only after the event rules allow it.

Example structure:

```text
writeups/
└── 2026/
    ├── bsidesnyc-ctf/
    │   └── classified/
    │       ├── classified.html
    │       └── assets/
    └── jerseyCTF-vi/
        ├── fix-your-ship/
        │   ├── fix-your-ship.html
        │   ├── solve_fix_your_ship.py
        │   └── assets/
        │       ├── original/
        │       └── recovered media
        ├── recovered-signal-file/
        │   ├── recovered-signal-file.html
        │   └── assets/
        ├── qastah-nuq/
        │   ├── qastah-nuq.html
        │   └── assets/
        └── relay-artifact-tx-7/
            ├── relay-artifact-tx-7.html
            └── assets/
```

The CTFtime team profile is the source for current team standings and event results.

## Publish with GitHub Pages

1. Push changes to the `main` branch of `codewithdaniel1/codewithdaniel1.github.io`.
2. GitHub Actions publishes the site to GitHub Pages using `.github/workflows/deploy.yml`.
3. The live address is `https://codewithdaniel1.github.io/`.

The workflow runs on every push to `main` and can also be started manually from the **Actions** tab. Pages must be configured to use **GitHub Actions** as the deployment source.
