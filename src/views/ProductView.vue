<script setup lang="ts">
import { ref } from 'vue'
import pageTitle from '@/components/PageTitleItem.vue'
import sideBar from '@/components/sidebar/SideBarItem.vue'
import productList from '@/components/ProductList.vue'
let title: string = '產品介紹'
const category = ref('counter')
</script>
<template>
  <page-title :title="title"></page-title>
  <div class="container">
    <aside>
      <side-bar
        :current-category="category"
        @switch="
          (newCategory) => {
            category = newCategory
          }
        "
      ></side-bar>
    </aside>
    <main>
      <product-list :category="category"></product-list>
    </main>
  </div>
</template>
<style scoped lang="scss">
.container {
  display: flex;
}
aside {
  width: 15vw;
  margin: 0.5rem 1rem 2rem 2rem;
  // margin-bottom: 2rem;
}
main {
  width: 85vw;
}
</style>
