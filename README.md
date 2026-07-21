# Partner With Purpose — 2026 Edition

The production source for the interactive **Partner With Purpose** sponsorship publication for Back To School on Main.

This is a single-route Next.js application. The interactive magazine is served at `/` and retains its page-turn animation, keyboard navigation, swipe controls, thumbnails, fullscreen mode, sharing, and print/PDF export.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production verification

```bash
npm run build
npm start
```

## Vercel

Import this repository into Vercel using the **Next.js** framework preset. Leave the root directory at the repository root and leave the output directory blank.

No environment variables are required. `NEXT_PUBLIC_SITE_URL` is optional and may be set to the final canonical production URL.
Connected to Vercel
