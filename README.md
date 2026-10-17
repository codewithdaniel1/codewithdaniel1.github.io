# Daniel Peng — Personal Website

A lightweight personal portfolio built with HTML, CSS, and JavaScript. GitHub Actions deploys the static site to GitHub Pages whenever changes are pushed to `main`.

## Publish with GitHub Pages

1. Create a GitHub repository named `codewithdaniel1.github.io` and push this project to its `main` branch.
2. In the repository, open **Settings → Pages** and choose **GitHub Actions** as the build and deployment source.
3. The workflow in `.github/workflows/deploy.yml` publishes the site. The live address will be `https://codewithdaniel1.github.io/`.

The workflow runs on every push to `main` and can also be started manually from the **Actions** tab.
