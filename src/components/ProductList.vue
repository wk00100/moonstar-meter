<template>
  <div class="wrapper">
    <div class="subtitle">
      <h2>{{ prop.category.name }}</h2>
    </div>
    <div class="product-container">
      <div
        class="product"
        v-for="product in matchProducts"
        :key="product.id"
        @click="onDisplayInfo(product)"
      >
        <div class="product-img">
          <img :alt="product.id" :src="getImageUrl(product.img)" />
        </div>
        <div class="product-name">
          <p>
            {{ product.id }}
            <br />
            <b>{{ product.name }}</b>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type ICategory, type IProduct } from '@/types/old/Data'
import { ref, watch, onMounted } from 'vue'
onMounted(async () => {
  const response = await fetch(`/data/products.json`)
  products = await response.json()
  updateMatchProducts(prop.category.id)
})
watch(
  () => prop.category.id,
  (newCategory) => {
    updateMatchProducts(newCategory)
  }
)

const prop = defineProps<{ category: ICategory }>() // pure type annotation
const emit = defineEmits<{ (e: 'display', product: IProduct): void }>()
const matchProducts = ref<IProduct[]>([])
let products: IProduct[] = []
function getImageUrl(name: string) {
  return new URL(`/src/assets/images/products/${name}.jpg`, import.meta.url).href
}

function updateMatchProducts(typeName: string): void {
  matchProducts.value = products.filter((products) => products.type === typeName)
  return
}

function onDisplayInfo(product: IProduct) {
  emit('display', product)
}
</script>

<style scoped lang="scss">
.wrapper {
  width: 100%;
  height: 100%;
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
  max-height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  .product {
    // display: flex;
    max-width: 70%;
    margin: 0.5rem 1rem;
    .product-img {
      max-width: 100%;
      height: 7rem;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 2px solid #647584;
      img {
        max-width: 7rem;
        max-height: 6rem;
        z-index: 10;
      }
      &:hover {
        z-index: 20;
        background-color: white;
        opacity: 0.7;
        transition: 0.25s;
      }
    }
  }
}
@media (max-width: 1199.98px) {
  .wrapper {
    padding: 0 1rem;
  }
  .product {
    // display: flex;
    max-width: 70%;
    margin: 0.5rem 0.5rem;
  }
  .product-container {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
@media (max-width: 767.98px) {
  // mobile mode
  .wrapper {
    padding: 0 1rem;
  }
  .product {
    // display: flex;
    max-width: 70%;
    margin: 0.5rem 0.5rem;
  }
  .product-container {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
