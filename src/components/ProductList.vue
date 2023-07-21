<template>
  <div class="wrapper">
    <div class="subtitle">
      <h2>{{ prop.category }}</h2>
    </div>
    <div class="product-container">
      <div class="product" v-for="product in matchProducts" :key="product.id">
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

const matchProducts = ref<IProduct[]>([])

function getImageUrl(name: string) {
  return new URL(`/src/assets/images/products/${name}.jpg`, import.meta.url).href
}

function updateMatchProducts(categoryName: string): void {
  matchProducts.value = products.filter((products) => products.category === categoryName)
  return
}
const products: IProduct[] = [
  {
    id: 'MC-40K/60K',
    name: '四/六位元數顯示型 計數器/長度表',
    category: 'counter',
    img: 'type_1'
  },
  {
    id: 'MC-61K/62KA/62KB',
    name: '六位一段/二段設定型計數器',
    category: 'counter',
    img: 'type_3'
  },
  {
    id: 'MRL-60K-V-S',
    name: '轉速表/線速度表/(附)類比輸出',
    category: 'counter',
    img: 'type_2'
  },
  {
    id: 'MS-1 & MS-2',
    name: '31/2,41/2數位式類比表(DCV/ACV輸入型轉速表)',
    category: 'counter',
    img: 'type_4'
  },
  {
    id: 'MS-3',
    name: '四位數微電腦類比表(DCV/ACV輸入型轉速表)',
    category: 'counter',
    img: 'type_1'
  },
  {
    id: 'MRL-40K-S',
    name: '轉速表/線速度表',
    category: 'tachometer-line-speed',
    img: 'type_2'
  }
]
interface IProduct {
  id: string
  name: string
  category: string
  img: string
}
</script>

<style scoped lang="scss">
.wrapper {
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
  max-height: 34rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  .product {
    // display: flex;
    max-width: 100%;
    margin: 0.5rem 1rem;
    .product-img {
      width: 100%;
      height: 10rem;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 2px solid #647584;
      img {
        max-width: 80%;
      }
    }
  }
}
</style>
