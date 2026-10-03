# Personal website

## Deploy to GitHub Pages

Push this repository to GitHub on the `main` or `master` branch. The workflow in
`.github/workflows/deploy.yml` builds the site and deploys it to GitHub Pages.

In the repository settings, open **Pages** and set **Build and deployment** to
**GitHub Actions**. Subsequent pushes to `main` or `master` deploy automatically;
you can also start a deployment from the **Actions** tab.

The Vite build detects the GitHub repository name and sets the correct base path
for either a project site (`owner.github.io/repository/`) or a user site
(`owner.github.io/`). The generated `404.html` keeps the About and Experiences
routes working when opened directly or refreshed.
