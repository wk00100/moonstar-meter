<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router'
import { useHead } from '@unhead/vue'
import HeaderItem from '@/components/semantic/HeaderItem.vue'
import FooterItem from '@/components/semantic/FooterItem.vue'

const route = useRoute()

// title / description come from the deepest matched route that defines them
function matchedMeta(key: 'title' | 'description'): string | undefined {
  return [...route.matched].reverse().find((record) => record.meta[key])?.meta[key]
}

useHead({
  // unhead defaults to lang="en" and overrides the value in index.html
  htmlAttrs: { lang: 'zh-Hant-TW' },
  title: () => matchedMeta('title') ?? '月欣科技有限公司',
  meta: [{ name: 'description', content: () => matchedMeta('description') }]
})
</script>

<template>
  <header class="">
    <header-item></header-item>
  </header>
  <main>
    <RouterView />
  </main>
  <footer>
    <footer-item></footer-item>
  </footer>
</template>

<style scoped lang="scss">
$icon: '#ededed';
ul {
  list-style: none;
}
.icon {
  width: 1.5rem;
}
header {
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 100;
  width: 100%;
  height: 4rem;
  flex-shrink: 0;
  box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
}

main {
  width: 100%;
  flex: 1 0 auto;
}

footer {
  width: 100%;
  flex-shrink: 0;
  background-color: #504b4a;
}
@media (max-width: 1199.98px) {
}

@media (max-width: 930px) {
  // hide head nav
  main {
    height: auto;
  }
}

@media (max-width: 767.98px) {
  // mobile mode
}
</style>
