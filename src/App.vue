<script setup lang="ts">
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import HeaderItem from '@/components/semantic/HeaderItem.vue'
import FooterItem from '@/components/semantic/FooterItem.vue'
import { type ICategory } from './types/old/Data'
const type = ref<ICategory | undefined>(undefined)
function toProductPage(newType: ICategory) {
  console.log(newType)
  type.value = newType
}
</script>

<template>
  <header class="">
    <header-item
      @switch="
        (newType) => {
          toProductPage(newType)
        }
      "
    >
      ></header-item
    >
  </header>
  <main>
    <RouterView :type="type" />
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
  max-width: inherit;
}

main {
  width: 100%;
  min-height: 22rem;
  height: 100%;
}

footer {
  width: 100%;
  min-height: calc(100vh - 22rem);
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
