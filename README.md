# Farewell Card For Royce

A React + Vite single-page farewell card app, ready to deploy to GitHub Pages.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Publish to GitHub Pages

1. Update the `homepage` field in `package.json` with your GitHub username.
2. Commit and push your changes to GitHub.
3. Run:

```bash
npm run deploy
```

The deploy script publishes the `dist/` folder to the `gh-pages` branch.

## Notes

- The Vite `base` path is set to `/farewall-card-for-royce/` in `vite.config.js`.
- If you rename the repository, update the `base` path and `homepage` accordingly.
