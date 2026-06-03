# Kairo Kart

Kairo Kart is a Node.js ecommerce demo with a static frontend and backend API routes.

## Frontend

- `index.html`, `styles.css`, and `script.js` power the main storefront.
- `iphone.html`, `iphone.css`, and `iphone.js` power the iPhone product configurator.
- Product and section images live in `assets/`.

## Backend

- `server.js` runs the local Node.js server and JSON-backed demo API.
- `api/` contains Vercel serverless Node.js API functions for deployment.
- Supported API routes:
  - `GET /api/health`
  - `GET /api/orders`
  - `POST /api/orders`
  - `DELETE /api/orders`
  - `POST /api/messages`
  - `POST /api/subscribers`

## Run Locally

```bash
npm start
```

Open `http://localhost:5500/index.html`.

## Deploy On Vercel

- Framework Preset: `Other`
- Build Command: leave empty
- Output Directory: leave empty or use `.`
- Install Command: leave default or empty
- Root Directory: the folder that contains `index.html`

If Vercel shows `Not Found`, check the deployment settings and make sure the output directory is not set to `dist`, `build`, or `public`.
