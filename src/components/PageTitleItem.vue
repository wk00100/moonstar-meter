<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <div class="background">
    <div class="page-title">
      <h1>{{ title }}</h1>
    </div>
  </div>
</template>

<style scoped lang="scss">
.background {
  height: 9rem;
  background-color: #c0c0bf80;
  background-image: url(@/assets/image/page-title.jpg);
  background-size: cover;
}
.page-title {
  h1 {
    font-family: 'TaipeiSans-Regular';
    font-size: 2rem;
  }
  height: 100%;
  width: 100%;
  background-color: rgb(0, 0, 0, 0.1);
  backdrop-filter: blur(3px);
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.3rem;
}
</style>
