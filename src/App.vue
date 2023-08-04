<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderItem from '@/components/semantic/HeaderItem.vue'
import FooterItem from '@/components/semantic/FooterItem.vue'
</script>

<template>
  <header class="shadow">
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
  position: fixed;
  background-color: white;
  z-index: 100;
  width: 100%;
  min-height: 5rem;
  padding: 0.5rem 4rem;
  display: flex;
  max-width: inherit;
  // justify-content: center;
  &.shadow {
    -webkit-box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
    -moz-box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
    box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
  }
}

nav {
  ul {
    display: flex;
    align-self: stretch;
    li {
      display: flex;
      align-self: stretch;
      align-items: flex-end;
      a {
        font-family: 'TaipeiSans-Bold';
        padding: 1rem 1rem;
      }
    }
  }
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: flex-end;
  align-self: stretch;
  // padding-left: 3rem;

  .router-link-active {
    color: #e0e7ff;
  }
}

main {
  padding-top: 5rem;
  width: 100%;
  min-height: 22rem;
  height: 100%;
}

footer {
  min-height: calc(100vh - 26.4rem);
  width: 100%;
  // padding: 1rem 2rem 0 2rem;
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
