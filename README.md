# Northstar Portfolio Template

Northstar is a production-ready React + Vite + Tailwind CSS portfolio template for designers, developers, and creative studios. It includes responsive sections, project detail routing, dark mode, SEO metadata, optimized image loading, a Formspree contact flow, and deployment configuration for Vercel and Netlify.

## Requirements

- Node.js 18 or newer
- npm 9 or newer

## Installation

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open the local URL printed by Vite. The site works without a Formspree endpoint, but the form will display a configuration message until one is added.

## Contact form

1. Create a form at [Formspree](https://formspree.io/).
2. Copy the endpoint into `.env.local`:

```bash
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/your-form-id
```

3. Restart the dev server. The form uses a direct browser `POST`, so no secret server key is exposed.

## Customization

- Replace the placeholder copy and data in `src/components/`.
- Update project images and URLs in `src/components/Projects.jsx`.
- Change the site title, description, canonical URL, and social metadata in `index.html`.
- Replace `public/favicon.svg` and `public/social-preview.svg` with your own brand assets. For social sharing, use a 1200 x 630 image when replacing the preview.
- Adjust colors, fonts, and spacing in `tailwind.config.js` and `src/index.css`.
- Update the contact email and social links in `Contact.jsx` and `Footer.jsx`.

## Scripts

```bash
npm run dev       # Start the development server
npm run build     # Create the optimized production bundle
npm run preview   # Preview the production bundle locally
```

## Deployment

### Vercel

Import the repository into Vercel. It detects Vite automatically. Set `VITE_FORMSPREE_ENDPOINT` in Project Settings, then deploy. `vercel.json` preserves client-side React Router routes.

### Netlify

Import the repository into Netlify with build command `npm run build` and publish directory `dist`. Set `VITE_FORMSPREE_ENDPOINT` under Site configuration > Environment variables. `public/_redirects` preserves client-side routes.

## Performance notes

Remote images use Unsplash width and quality parameters. Below-the-fold project and detail images use native lazy loading and asynchronous decoding. For a final commercial launch, self-host compressed AVIF/WebP assets or use an image CDN and replace the demo URLs.

## License

Released under the MIT License. See [LICENSE](LICENSE).# Northstar Portfolio Template

A polished React + Tailwind CSS portfolio template with React Router navigation.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite. Replace the placeholder copy, images, project data, and contact form handler with your own content.

## Build

```bash
npm run build
npm run preview
```
