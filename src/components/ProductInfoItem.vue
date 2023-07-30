<template>
  <div class="wrapper">
    <div class="info">
      <div class="image">
        <img :src="getImageUrl(fakeProduct.img)" />
      </div>
      <div class="summary">
        <h2 class="name">{{ fakeProduct.id }}<br />{{ fakeProduct.name }}</h2>
        <div class="nav-tab">
          <a class="tab1" href="#feature">產品特色</a>
          <a class="tab2" href="#file">相關檔案</a>
        </div>
        <p v-html="fakeProduct.description"></p>
      </div>
    </div>
    <section>
      <h3 id="feature">產品特色</h3>
      <ul class="bullet">
        <li v-for="list in fakeProduct.bulletInfo" :key="list" v-html="list"></li>
      </ul>
      <hr />
      <h3 id="file">相關檔案</h3>
      <ul class="bullet">
        <li v-for="file in fakeProduct.fileList" :key="file.link">
          <a class="" :href="file.link" target="_blank">{{ file.name }}</a>
        </li>
      </ul>
    </section>
    <button class="btn" type="button" @click="onBack()">回上頁</button>
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { type IProduct, type IProductInfo } from '@/types/old/Data'
import router from '@/router'
const props = defineProps<{ productInfo?: IProduct }>()
const emit = defineEmits<{ (e: 'close'): void }>()
const product = ref<IProduct>(props.productInfo!) // never undefined
onMounted(() => {
  console.log(props.productInfo)
  window.scrollTo(0, 0)
})
function onBack() {
  emit('close')
}

let fakeProduct: IProductInfo = {
  id: 'MS-1-V-S',
  name: '3½ 數位式類比表',
  img: 'M40',
  type: 'AI',
  description:
    '若需調整出場值（超過15%），輸入電壓時請先調整<b>倍率粗調開關（SW1）</b>，再調整<b>倍率微調</b>（SPAN）。',
  bulletInfo: ['111', '222', '333'],
  fileList: [
    {
      name: 'MV-1型錄',
      link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUXbmV2ZXIgZ29ubmEgZ2l2ZSB5b3UgdXA%3D'
    }
  ]
  /** specifation info 
  externalDimension: '48*96(mm) （Mounting flush dimension 45*92(mm)）',
  fullScale: '0-1999',
  overloadIndication: '1或-1',
  characterHeight: '0.8"(20.43mm)',
  accuracy: '0.10%',
  powerVoltage: '',
  samplingTime: '',*/
}
function getImageUrl(name?: string) {
  if (name) return new URL(`/src/assets/images/products/${name}.jpg`, import.meta.url).href
  else return ''
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

  max-width: 20rem;
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
</style>
