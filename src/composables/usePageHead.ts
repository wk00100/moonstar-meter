import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useHead } from '@unhead/vue'

export const SITE_URL = 'https://moonstar-meter-tw.netlify.app'
export const SITE_NAME = '月欣科技有限公司'

interface PageHead {
  title: () => string | undefined
  description: () => string | undefined
}

// Keeps title, description, Open Graph and canonical in sync for the current route.
// Components registered later (child routes) override earlier ones, so a product page
// beats its category page, which beats the route meta set in App.vue.
export function usePageHead(page: PageHead) {
  const route = useRoute()
  // new URL() percent-encodes non-ASCII ids, matching the URLs in sitemap.xml
  const url = computed(() => new URL(route.path, SITE_URL).href)

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
