<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
function getImageUrl(index: number) {
  return new URL(`/src/assets/images/banners/banner_${index}.jpg`, import.meta.url).href
}
</script>

<template>
  <div class="wrapper">
    <carousel :items-to-show="1" :wrap-around="true" :autoplay="4000">
      <slide v-for="slide in 5" :key="slide">
        <div class="img-container">
          <img :src="getImageUrl(slide)" alt="" />
          <!--h2>圖片 {{ slide }}</!--h2-->
        </div>
      </slide>
      <template #addons>
        <navigation />
        <pagination />
      </template>
    </carousel>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  height: 100%;
}
h2 {
  color: #504b4a;
  font-weight: bold;
  margin: auto 0;
  font-size: large;
  z-index: 100;
}
.img-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20rem;
  width: 100%;
  background-color: #e0e7ff;
  img {
    width: 100%;
  }
}
</style>
