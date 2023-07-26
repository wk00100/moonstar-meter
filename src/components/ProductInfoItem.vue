<template>
  <div class="wrapper">
    <div class="info">
      <img class="image" width="300" :src="getImageUrl(fakeProduct.img)" />
      <h2 class="name">{{ fakeProduct.id }}<br />{{ fakeProduct.name }}</h2>
      <div class="summary">
        <h3>產品介紹</h3>
        <p v-html="fakeProduct.description"></p>
      </div>
      <div class="intro">
        <h4>產品特色</h4>
        <li class="list" v-for="list in fakeProduct.bulletInfo" :key="list" v-html="list"></li>
        <h4>相關檔案</h4>
      </div>
    </div>
    <button class="btn" type="button" @click="onBack()">回上頁</button>
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { type IProduct } from '@/types/old/Data'
const props = defineProps<{ productInfo?: IProduct }>()
const product = ref<IProduct>(props.productInfo!) // never undefined
onMounted(() => {
  console.log(props.productInfo)
})
function onBack() {}

const fakeProduct = {
  id: 'MS-1-V-S',
  name: '3½ 數位式類比表',
  img: 'M40',
  type: 'AI',
  /** specifation info */
  externalDimension: '48*96(mm) （Mounting flush dimension 45*92(mm)）',
  fullScale: '0-1999',
  overloadIndication: '1或-1',
  characterHeight: '0.8"(20.43mm)',
  accuracy: '0.10%',
  powerVoltage: '',
  samplingTime: '',
  /** other */
  description:
    '若需調整出場值（超過15%），輸入電壓時請先調整<b>倍率粗調開關（SW1）</b>，再調整<b>倍率微調</b>（SPAN）。',
  bulletInfo: ['嗨', '我想', '下班']
}
function getImageUrl(name?: string) {
  if (name) return new URL(`/src/assets/images/products/${name}.jpg`, import.meta.url).href
  else return ''
}
</script>
