<script setup lang="ts">
import { ref } from 'vue'
import pageTitle from '@/components/PageTitleItem.vue'
import sideBar from '@/components/sidebar/SideBarItem.vue'
import { type ICategory, type IProduct } from '@/types/old/Data'
import router from '@/router'
let title: string = '產品介紹'
const category = ref<ICategory>({ id: 'AI', name: '' })
const product = ref<IProduct>()
function displayInfo(id: string) {
  router.push(`products/${id}`)
}
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
            router.push('/products')
          }
        "
      ></side-bar>
    </aside>
    <main>
      <RouterView
        :category="category"
        @display="
          (info:IProduct) => {
            product = info
            displayInfo(info.id)
            // isDisplayInfo = true
          }
        "
        :product-info="product"
      ></RouterView>
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
  width: 85rem;
  height: 100%;
}
</style>
