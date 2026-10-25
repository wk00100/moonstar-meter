# moonstar-meter

Trial website project for Moon Star Technology Co., Ltd. (月欣科技有限公司).

- Original website: http://www.moonstar-meter.com/
- This site: https://moonstar-meter-tw.netlify.app/

A statically prerendered Vue 3 site deployed on Netlify.

## Tech Stack

- [Vue 3](https://vuejs.org/) + [TypeScript](https://www.typescriptlang.org/), built with [Vite](https://vite.dev/)
- [vite-ssg](https://github.com/antfu-collective/vite-ssg) for prerendering
- [Vue Router](https://router.vuejs.org/), [Pinia](https://pinia.vuejs.org/), [@unhead/vue](https://unhead.unjs.io/) for per-page head tags
- [vue3-carousel](https://github.com/ismail9k/vue3-carousel), [Font Awesome](https://fontawesome.com/) (solid icons), Sass
- ESLint (flat config) + Prettier

## Requirements

- Node.js 26 (`.nvmrc`, `mise.toml`)
- pnpm 11 (`packageManager` in `package.json`)

## Getting Started

```sh
pnpm install
pnpm dev
```

| Command           | What it does                                                           |
| ----------------- | ---------------------------------------------------------------------- |
| `pnpm dev`        | Start the Vite dev server with hot reload                              |
| `pnpm build`      | Run `type-check` and `build-only` in parallel                          |
| `pnpm build-only` | Generate `public/sitemap.xml`, then prerender every route into `dist/` |
| `pnpm type-check` | Type-check with `vue-tsc`                                              |
| `pnpm preview`    | Serve the built `dist/` locally                                        |
| `pnpm lint`       | Lint with [ESLint](https://eslint.org/)                                |
| `pnpm format`     | Format `src/` with Prettier                                            |

## Routes

| Path                         | View                                       |
| ---------------------------- | ------------------------------------------ |
| `/`                          | Home                                       |
| `/about`                     | About                                      |
| `/products`                  | Redirects to `/products/AI`                |
| `/products/:type`            | Product list of a category                 |
| `/products/:type/:productId` | Product detail                             |
| `/contact-us`                | Contact                                    |
| `/files`                     | File download                              |
| anything else                | Not found (prerendered as `dist/404.html`) |

Route titles and descriptions live in `src/router/index.ts`. Category and product pages set their own head tags from the product data.

## Data

Product content is plain JSON under `public/data/`, loaded by `src/composables/useProductData.ts`:

- `types.json`: product categories (`id`, `name`)
- `product_info.json`: products, each linked to a category by `type`

Product images are JPG files in `src/assets/images/products/`, named after the product's `img` field and resolved by `src/utils/productImage.ts`. Other static files (favicon, banners, `og-image.png`, `robots.txt`) are in `public/`.

To add a category or product, edit the JSON files; the prerendered routes and the sitemap are derived from them at build time.

## SEO and Prerendering

- `vite.config.ts` lists the dynamic routes (categories and products) from the data files so `vite-ssg` prerenders them. Output uses nested folders (`products/AI/index.html`).
- A product id containing `/` is prerendered under a `%2F` folder; vue-router decodes it back to the real id.
- Netlify serves the prerendered folders at lowercase URLs with a trailing slash, so ids are matched case-insensitively, and the canonical URL and sitemap use that final form. `toCanonicalUrl()` in `src/composables/usePageHead.ts` and `toSitemapPath()` in `scripts/generate-sitemap.mjs` must stay in sync.
- `scripts/generate-sitemap.mjs` writes `public/sitemap.xml` on every build; `public/robots.txt` points to it. Update `BASE_URL` there and `SITE_URL` in `usePageHead.ts` if the domain changes.
- Unknown URLs return a real 404 through the prerendered `404.html`.

## Deployment

Netlify builds with `pnpm build` and publishes `dist/` (see `netlify.toml`). Node comes from `.nvmrc` and pnpm from `packageManager`.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).
