<template>
  <div class="wrapper">
    <div id="title">
      <h3>CATEGORY</h3>
    </div>
    <ul class="">
      <li v-for="category in categories" :key="category">
        <a>{{ category }}</a>
        <hr />
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
const categories: string[] = [
  '計數器',
  '線速/轉速表',
  '電壓/電流錶',
  '安培小時器',
  '壓力/流量表',
  '米輪/編碼器',
  '液位傳感器',
  '張力控制器',
  '光電開關',
  '光學尺(LVDT)',
  '薄型直流變壓器(轉換器)',
  '布頭檢知控制器',
  '比例連動控制器',
  'RS485無線傳輸器'
]
</script>
<style scoped lang="scss">
.wrapper {
  height: 100%;
  width: 12rem;
  // background-color: #777;
}
#title {
  h3 {
    color: #b9b9b9;
  }
}
li {
  cursor: pointer;
  a {
    display: block;
    width: 100%;
    height: 100%;
  }
}
</style>
