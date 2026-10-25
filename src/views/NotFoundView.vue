<script setup lang="ts">
import { useHead } from '@unhead/vue'
import { RouterLink } from 'vue-router'
import pageTitle from '@/components/PageTitleItem.vue'

// Netlify serves this page (prerendered as 404.html) with a 404 status for any missing path.
useHead({ meta: [{ name: 'robots', content: 'noindex' }] })
</script>

<template>
  <page-title title="找不到頁面"></page-title>
  <section class="not-found">
    <p>您要找的頁面不存在，可能已經移除或網址有誤。</p>
    <RouterLink to="/" class="home-link">回首頁</RouterLink>
  </section>
</template>

<style scoped lang="scss">
.not-found {
  padding: 4rem 2rem;
  text-align: center;
  p {
    margin-bottom: 2rem;
  }
}

.home-link {
  display: inline-block;
  padding: 0.5rem 1.5rem;
  border: 1px solid #082b49;
  color: #082b49;
  text-decoration: none;
  transition: 0.4s;
  &:hover {
    background-color: #082b49;
    color: white;
  }
}
</style>
