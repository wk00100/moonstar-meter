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
onMounted(() => updateMatchProducts(prop.category.id))
watch(
  () => prop.category.id,
  (newCategory) => {
    updateMatchProducts(newCategory)
    console.log(newCategory)
  }
)

const prop = defineProps<{ category: ICategory }>() // pure type annotation
const emit = defineEmits<{ (e: 'display', product: IProduct): void }>()

const matchProducts = ref<IProduct[]>([])

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
const products: IProduct[] = [
  {
    id: 'MS-1、MS-2',
    name: '3½, 4½ 數位式類比表',
    img: 'M40',
    type: 'AI'
  },
  {
    id: 'MS-3',
    name: '四位數微電腦類比表',
    img: 'M40',
    type: 'AI'
  },
  {
    id: 'MV-41K',
    name: '四位數一段設定微電腦類比表',
    img: 'M40_O',
    type: 'AI'
  },
  {
    id: 'MC-60K',
    name: '四/六位元數顯示型 計數器/長度表',
    img: 'M60',
    type: 'C'
  },
  {
    id: 'MC-61K、MC-62K',
    name: '六位數一段二段顯示器',
    img: 'M66',
    type: 'C'
  },
  {
    id: 'MC-63K',
    name: '六位數一段二段顯示器',
    img: 'M66',
    type: 'C'
  },
  {
    id: 'MC-6160K',
    name: '六位數一段設定＋六位總累計計數器',
    img: 'M66',
    type: 'C'
  },
  {
    id: 'MC-6161K',
    name: '六位數一段設定＋總數設定計數器',
    img: 'M66',
    type: 'C'
  },
  {
    id: 'MCL-61K',
    name: '六位數一段設定＋線速表二合一型計數器',
    img: 'M66',
    type: 'C'
  },
  {
    id: 'MCL-001',
    name: '六位數長度、包數、每分鐘平均包數控制器',
    img: 'M66',
    type: 'C'
  },
  {
    id: 'MC-6260K',
    name: '六位數一段設定＋總累計計數器',
    img: 'M66',
    type: 'C'
  },
  {
    id: 'MC-6160A',
    name: '六位數一段設定＋六位總數安培數計數器',
    img: 'M66',
    type: 'C'
  },
  {
    id: 'MRL-40K-S',
    name: '轉速表／線速度表',
    img: 'M40',
    type: 'SI'
  },
  {
    id: 'MRL-52KC',
    name: '五位數二段設定型線速度表（HI，LO）',
    img: 'M66',
    type: 'SI'
  },
  {
    id: 'MRL-60K-V-S',
    name: '轉速表／線速度表（附類比輸出）',
    img: 'M60',
    type: 'SI'
  },
  {
    id: 'MT-001',
    name: '比例式自動張力控制器',
    img: 'MT',
    type: 'TC'
  }
]
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
  max-height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  .product {
    // display: flex;
    max-width: 70%;
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
</style>
