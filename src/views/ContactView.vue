<script setup lang="ts">
import pageTitle from '@/components/PageTitleItem.vue'
import mailForm from '@/components/MailContactItem.vue'
import companyLocation from '@/components/LocationContactItem.vue'
let title: string = '聯絡我們'
</script>
<template>
  <div class="wrapper">
    <page-title class="title" :title="title"></page-title>
    <div class="container">
      <div class="left">
        <mail-form></mail-form>
      </div>
      <div class="line"></div>
      <div class="">
        <company-location></company-location>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: grid;
  grid-template-columns: 4fr 1fr 4fr;
  padding: 1.5rem 6rem 2rem 6rem;
}

.line {
  background-color: gray;
  width: 3px;
  height: 30rem;
  align-self: center;
  margin: 0 2rem;
  border-radius: 2rem;
}
</style>
