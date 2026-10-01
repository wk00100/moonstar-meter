<script setup lang="ts">
import { computed, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import pageTitle from '@/components/PageTitleItem.vue'
import sideBar from '@/components/sidebar/SideBarItem.vue'
import { type ICategory } from '@/types/old/Data'
import { useProductData } from '@/composables/useProductData'
import { usePageHead, SITE_NAME } from '@/composables/usePageHead'

const title: string = '產品介紹'
const fallbackCategory: ICategory = { id: 'AI', name: '類比表' }
const route = useRoute()
const router = useRouter()
const {
  defaultCategoryId,
  loadCategories,
  normalizeRouteParam,
  findCategoryById,
  getProductsByType
} = useProductData()

const routeCategoryId = computed(() => normalizeRouteParam(route.params.type))
const category = computed<ICategory>(
  () => findCategoryById(routeCategoryId.value) ?? findCategoryById(defaultCategoryId) ?? fallbackCategory
)

// Category pages: the model numbers in the description are what product searches match on.
usePageHead({
  title: () => `${category.value.name}｜產品介紹｜${SITE_NAME}`,
  description: () => {
    const models = getProductsByType(category.value.id).map((product) => product.id)
    const prefix = `月欣科技${category.value.name}系列產品：`
    // keep whole model numbers: stop before the text would pass ~120 characters
    const shown: string[] = []
    for (const model of models) {
      if ((prefix + [...shown, model].join('、')).length > 115) break
      shown.push(model)
    }
    return `${prefix}${shown.join('、')}${shown.length < models.length ? '等' : ''}。`
  }
})

async function ensureValidCategory() {
  await loadCategories()

  if (findCategoryById(routeCategoryId.value) === undefined) {
    router.replace(`/products/${defaultCategoryId}`)
  }
}

onMounted(() => {
  ensureValidCategory()
})

watch(
  () => route.params.type,
  () => {
    ensureValidCategory()
  }
)
</script>
<template>
  <page-title :title="title"></page-title>
  <div class="container">
    <aside>
      <side-bar
        :current-category="category"
        @switch="
          (newCategory) => {
            router.push(`/products/${newCategory.id}`)
          }
        "
      ></side-bar>
    </aside>
    <main>
      <RouterView :category="category"></RouterView>
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
@media (max-width: 767.98px) {
  // mobile mode
  main {
    width: 100%;
  }
  aside {
    display: none;
  }
}
</style>
