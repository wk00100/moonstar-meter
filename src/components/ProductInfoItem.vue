<template>
  <div class="wrapper">
    <div class="info">
      <div class="image">
        <img :src="getImageUrl(currentProduct.img)" />
      </div>
      <div class="summary">
        <h2 class="name">{{ currentProduct.id }}<br />{{ currentProduct.name }}</h2>
        <div class="nav-tab">
          <a class="tab1" href="#feature">產品特色</a>
          <a class="tab2" href="#file">相關檔案</a>
        </div>
        <p v-html="currentProduct.description"></p>
      </div>
    </div>
    <section>
      <h3 id="feature">產品特色</h3>
      <ul class="bullet">
        <li v-for="list in currentProduct.bulletInfo" :key="list" v-html="list"></li>
      </ul>
      <hr />
      <h3 id="file">相關檔案</h3>
      <ul class="bullet">
        <li v-for="file in currentProduct.fileList" :key="file.link">
          <a class="" :href="file.link" target="_blank">{{ file.name }}</a>
        </li>
      </ul>
    </section>
    <button class="btn back" type="button" @click="goBack()">
      <font-awesome-icon icon="angles-left" /> 回上頁
    </button>
  </div>
</template>
<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue'
import { type IProduct, type IProductInfo } from '@/types/old/Data'
import router from '@/router'
const props = defineProps<{ productInfo: IProduct | undefined }>()
let ProductData: IProductInfo[]
const emptyProduct = {
  // empty interface object for initialization
  id: '',
  name: '',
  img: '',
  type: '',
  description: '',
  bulletInfo: [],
  fileList: []
}
const currentProduct = ref<IProductInfo>(emptyProduct)

onMounted(async () => {
  const response = await fetch(`/data/product_info.json`) // get json response of all products
  ProductData = await response.json() // change json to object
  console.log(ProductData)
  getProductInfo(props.productInfo?.id) // find specific product to display
  window.scrollTo(0, 0)
  console.log(props.productInfo?.id)
})
watch(
  () => props.productInfo,
  (current, previous) => {
    getProductInfo(current?.id)
  }
)

function getProductInfo(id: string | undefined) {
  if (id === undefined) return
  for (let i = 0; i < ProductData.length; i++) {
    if (ProductData[i].id === id) {
      currentProduct.value = ProductData[i]
      console.log('Product Get: ' + currentProduct.value)
      break
    }
  }
}
function goBack() {
  // back to product list page
  router.push('/products')
}

function getImageUrl(name?: string): string | undefined {
  console.log('getImageUrl')
  if (name) return new URL(`/src/assets/images/products/${name}.jpg`, import.meta.url).href
  else return undefined
}
</script>
<style scoped lang="scss">
h3 {
  // font-size: 1.5em;
  padding: 0.5rem 0;
}
.wrapper {
  margin: 2rem;
  margin-right: 4rem;
}
.image {
  border: 1px solid gray;
  display: flex;
  margin-right: 1.5rem;

  width: 20rem;
  height: 15rem;
  img {
    width: 80%;
    margin: auto;
  }
}
.info {
  display: flex;

  .summary {
    margin-left: 1.5rem;
    margin-right: 1.5rem;

    h2 {
      margin-bottom: 0.3rem;
      // font-size: 1.75em;
    }
    p {
      margin: 0.3rem 0;
    }
  }
}
.nav-tab {
  display: flex;
  a {
    display: flex;
    align-items: center;
  }
  .tab1 {
    margin-right: 0.5rem;
  }
  .tab2 {
    margin-left: 0.5rem;
  }
}

.bullet {
  list-style-type: disc;
  list-style: inside;
  margin-bottom: 1rem;
  li::marker {
    color: #c0c0bf;
  }
}
.back {
  &:hover {
    color: white;
    svg {
      color: white;
      transition: 0.3s;
    }
  }
  svg {
    color: black;
  }
}
</style>
