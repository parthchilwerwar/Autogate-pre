// Tailwind CSS v4 — PostCSS plugin (the only build step Tailwind v4 needs).
// NOTE: Next.js loads its PostCSS config via lilconfig, which does NOT transpile
// TypeScript. A `postcss.config.ts` would be silently ignored, so this is `.mjs`
// per Tailwind's official Next.js guide. No tailwind.config.* file exists — all
// design tokens live in `app/globals.css` under @theme.
export default {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
