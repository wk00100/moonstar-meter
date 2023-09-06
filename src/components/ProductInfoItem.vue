<template>
  <div class="wrapper">
    <div class="name">
      <h2>{{ currentProduct.id }}</h2>
      <hr />
      <p>{{ currentProduct.name }}</p>
    </div>
    <div class="info">
      <div class="image">
        <img :src="getImageUrl(currentProduct.img)" />
      </div>
      <!--div class="summary">
        <div class="nav-tab">
          <a class="tab1" href="#feature">產品特色</a>
          <a class="tab2" href="#file">相關檔案</a>
        </div>
        <p v-html="currentProduct.description"></p>
      </!--div-->
    </div>
    <section>
      <h3 id="feature">產品說明</h3>
      <ul class="bullet">
        <li v-for="list in currentProduct.bulletInfo" :key="list" v-html="list"></li>
      </ul>
      <hr />
      <h3 id="spec">產品規格</h3>
      <ul class="spec bullet">
        <li v-for="img in currentProduct.specImg" :key="img">
          <img :src="getSpecImgUrl(img)" :alt="currentProduct.id" />
        </li>
      </ul>
      <hr />
      <h3 id="file">相關文件</h3>
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
  fileList: [],
  specImg: []
}
const currentProduct = ref<IProductInfo>(emptyProduct)

onMounted(async () => {
  const response = await fetch(`/data/product_info.json`) // get json response of all products
  ProductData = await response.json() // change json to object
  getProductInfo(props.productInfo?.id) // find specific product to display
  console.log(props.productInfo)
  window.scrollTo(0, 0)
})
watch(
  () => props.productInfo,
  (current) => {
    getProductInfo(current?.id)
  }
)

function getProductInfo(id: string | undefined) {
  if (id === undefined) return
  for (let i = 0; i < ProductData.length; i++) {
    if (ProductData[i].id === id) {
      currentProduct.value = ProductData[i]
      break
    }
  }
}
function goBack() {
  // back to product list page
  router.push('/products')
}

function getSpecImgUrl(name?: string): string | undefined {
  if (name) return `/img/spec/${name}.jpg`
  else return undefined
}
function getImageUrl(name?: string): string | undefined {
  if (name) return new URL(`/src/assets/images/products/${name}.jpg`, import.meta.url).href
  else return undefined
}
</script>
<style scoped lang="scss">
.name {
  font-size: 1.5rem;
  font-family: 'Times New Roman';
  display: flex;
  flex-direction: column;
  padding-top: 0.5rem;
  padding-bottom: 2rem;
  align-items: center;
  hr {
    width: 100%;
  }
  p {
    font-weight: 600;
  }
}
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
  margin: 0 auto;

  max-width: 50%;
  height: 15rem;
  img {
    max-width: 100%;
    max-height: 100%;
    margin: auto;
  }
}
.info {
  display: block;

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
  display: none;
  a {
    display: flex;
    align-items: center;
    border-bottom: 1.3px black solid;
  }
  .tab1 {
    margin-right: 0.5rem;
  }
  .tab2 {
    margin-left: 0.5rem;
  }
}

section {
  margin-top: 2rem;
  h3 {
    margin: 0.6rem 0;
    font-size: 1.2rem;
    // text-align: center;
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
.spec {
  max-width: 80%;
  list-style-type: none;
  margin: 0 auto;
  img {
    max-width: 80%;
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

@media (max-width: 1199.98px) {
  .image {
    height: 10rem;
  }
}
@media (max-width: 930px) {
}

@media (max-width: 767.98px) {
  // mobile mode
  .wrapper {
    margin-right: 0;
    margin: 2rem;
  }
  .info {
    display: grid;
    .summary {
      margin-left: 0rem;
      margin-right: 0rem;
      margin-top: 1rem;
    }
  }
  .name {
    justify-content: center;
    text-align: center;
  }

  .image {
    margin-right: 0;
  }
}
</style>
