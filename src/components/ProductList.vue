<template>
  <div class="wrapper">
    <div class="subtitle">
      <h2>{{ prop.category }}</h2>
    </div>
    <div class="product-container">
      <div class="product" v-for="product in matchProducts" :key="product.id">
        <p>
          <b>{{ product.name }}</b>
          <br />
          {{ product.id }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
onMounted(() => updateMatchProducts(prop.category))
watch(
  () => prop.category,
  (newCategory) => {
    updateMatchProducts(newCategory)
    console.log(newCategory)
  }
)

const prop = defineProps<{ category: string }>() // pure type annotation

const products: IProduct[] = [
  {
    id: 'MC-40K/60K',
    name: '四/六位元數顯示型 計數器/長度表',
    category: 'counter',
    img: '@/assets/images/products/#'
  },
  {
    id: 'MC-61K/62KA/62KB',
    name: '六位一段/二段設定型計數器',
    category: 'counter',
    img: '@/assets/images/products/#'
  }
]
const matchProducts = ref<IProduct[]>([])
function updateMatchProducts(categoryName: string): void {
  matchProducts.value = products.filter((products) => products.category === categoryName)
  return
}
interface IProduct {
  id: string
  name: string
  category: string
  img: string
}
</script>

<style scoped lang="scss">
.wrapper {
  padding: 0 3rem;
}
.subtitle {
  margin: 0.5rem;
  h2 {
    padding-left: 0.5rem;
  }
}
.product-container {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  .product {
    //display: flex;
    margin: 0.5rem 1rem;
  }
}
</style>
