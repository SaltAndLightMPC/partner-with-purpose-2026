# Partner With Purpose — 2026 Edition

The production source for the interactive **Partner With Purpose** sponsorship publication for Back To School on Main.

This is a single-route Next.js application. The interactive magazine is served at `/` and retains its page-turn animation, keyboard navigation, swipe controls, thumbnails, fullscreen mode, sharing, and print/PDF export.

## Responsive reading modes

- **Large desktop (1400px and wider):** centered two-page magazine spread when the viewport can keep both pages readable.
- **Laptop and tablet (701–1399px):** centered single-page magazine canvas with page turns and persistent reader controls.
- **Mobile (700px and narrower):** dedicated reflowed reading pages with natural vertical scrolling, 16–17px body copy, stacked content, touch-sized Previous/Next controls, and an accessible page menu. The fixed print canvas and page-curl effect are not used on phones.

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
