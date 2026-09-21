# Laxhya IT Professional Portfolio

A zero-build, GitHub Pages-ready portfolio designed for software engineers, support engineers, cloud/system specialists, designers and other IT professionals.

## Why zero-build?

There is no npm install, framework build or deployment action required. GitHub Pages can publish the files directly from the repository. This makes the portfolio easy for non-developers to update and reduces deployment failures.

## Files to customize

- `config.js`: almost all text, experience, skills, projects, links and EmailJS settings.
- `assets/resume.pdf`: replace with your real resume.
- `assets/`: add your optional photo and project images.
- `styles.css`: only edit if you want to change the visual theme itself.

## Local preview

From the portfolio folder:

```powershell
py -m http.server 5500
```

Then open `http://localhost:5500`.

## GitHub Pages

Upload the entire folder to a GitHub repository. In repository Settings -> Pages choose **Deploy from a branch**, select `main`, choose `/(root)`, and save.

See `Laxhya_IT_Professional_Portfolio_Setup_Guide.docx` for the complete setup process including EmailJS.
