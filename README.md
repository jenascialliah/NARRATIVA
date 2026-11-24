# Narrativa

An interactive illustrated story-puzzle game inspired by Romeo and Juliet. Play the prologue and four story pages by selecting scenes and characters, assembling the storyboard, and checking your answers. Includes hints, feedback screens, credits, and optional menu audio.

## Run locally

No database, PHP, package installation or login is required. In XAMPP, place this NARRATIVA folder in `C:/xampp/htdocs/` and start Apache. Visit `http://localhost/NARRATIVA/public/`. Alternatively serve `public` with a static HTTP server.

## Azure deployment

Create an Azure Static Web App on the Free plan, connect the GitHub repository on `main`, choose Custom/No Framework, set App location to `public`, and leave API and Output locations empty. If the generated GitHub Actions workflow attempts a build, set `skip_app_build: true` and `output_location: ''` on its upload step. The website is already built. Use the generated deployment credential in GitHub Actions secrets only; never commit it.

The `public` folder is the deployment root. It includes security headers in `staticwebapp.config.json`. Inline scripts and styles are allowed for compatibility with existing pages, but remote scripts, plugins and framing are restricted. No server-side secrets or user records are needed.

## Changes in deployment edition

- Added default entry page, corrected the case-sensitive Capulet asset path, fixed stale selection and reset behavior, and repaired fade-out transitions.
- Added opt-in menu music instead of blocked autoplay.
- Removed machine-specific VS Code settings and six unused audio tracks from the deployment copy; retain the original project as a backup.

## Credits and asset permissions

See the original in-game Credits page. Before making the repository or site public, verify permission to redistribute the artwork and audio, including the menu chime. No new license is asserted for supplied assets.

## Limitations

This is a client-side portfolio game; solutions are visible in source code. The artwork-heavy puzzle layouts are desktop-oriented. Use a desktop browser or landscape display for best results.
