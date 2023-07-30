<script setup lang="ts">
import { ref } from 'vue'
import pageTitle from '@/components/PageTitleItem.vue'
import sideBar from '@/components/sidebar/SideBarItem.vue'
import productList from '@/components/ProductList.vue'
import ProductInfoItem from '@/components/ProductInfoItem.vue'
import { type ICategory, type IProduct } from '@/types/old/Data'
let title: string = '產品介紹'
const category = ref<ICategory>({ id: 'AI', name: '' })
const product = ref<IProduct>()
const isDisplayInfo = ref<boolean>(false)
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
            isDisplayInfo = false
          }
        "
      ></side-bar>
    </aside>
    <main>
      <product-list
        v-if="!isDisplayInfo"
        :category="category"
        @display="
          (info) => {
            product = info
            isDisplayInfo = true
          }
        "
      ></product-list>
      <product-info-item
        v-else
        :product-info="product"
        @close="() => (isDisplayInfo = false)"
      ></product-info-item>
    </main>
  </div>
</template>
<style scoped lang="scss">
.container {
  display: flex;
}
aside {
  width: 15rem;
  margin: 0.5rem 1rem 2rem 2rem;
  // margin-bottom: 2rem;
}
main {
  width: 85vw;
  height: 100%;
}
</style>
