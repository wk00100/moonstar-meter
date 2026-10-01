import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useHead } from '@unhead/vue'

export const SITE_URL = 'https://moonstar-meter-tw.netlify.app'
export const SITE_NAME = '月欣科技有限公司'

// Netlify serves prerendered pages at lowercase URLs with a trailing slash and 301s everything
// else there, so the canonical must be that final form. Keep in sync with
// toSitemapPath() in scripts/generate-sitemap.mjs.
function toCanonicalUrl(path: string): string {
  let decoded = path
  try {
    decoded = decodeURI(path)
  } catch {
    // malformed escape sequence: fall back to the raw path
  }
  const url = new URL(decoded.toLowerCase(), SITE_URL)
  if (!url.pathname.endsWith('/')) url.pathname += '/'
  return url.href.replace(/%[0-9a-f]{2}/gi, (escape) => escape.toUpperCase())
}

interface PageHead {
  title: () => string | undefined
  description: () => string | undefined
}

// Keeps title, description, Open Graph and canonical in sync for the current route.
// Components registered later (child routes) override earlier ones, so a product page
// beats its category page, which beats the route meta set in App.vue.
export function usePageHead(page: PageHead) {
  const route = useRoute()
  const url = computed(() => toCanonicalUrl(route.path))

  useHead({
    title: page.title,
    meta: [
      { name: 'description', content: page.description },
      { property: 'og:title', content: page.title },
      { property: 'og:description', content: page.description },
      { property: 'og:url', content: url }
    ],
    link: [{ rel: 'canonical', href: url }]
  })
}
