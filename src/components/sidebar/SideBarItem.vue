<template>
  <div class="wrapper">
    <div id="title">
      <h3>CATEGORY</h3>
    </div>
    <ul class="">
      <li v-for="category in categories" :key="category.id">
        <a @click="$emit('switch', category.id)">{{ category.name }}</a>
        <hr />
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
//defineEmits<{ switchCat: [currentCategory: string] }>()
interface ICategory {
  id: string
  name: string
}
const categories: ICategory[] = [
  { id: 'counter', name: '計數器' },
  { id: 'tachometer-line-speed', name: '線速/轉速表' },
  { id: 'voltage-current-meter', name: '電壓/電流錶' },
  { id: 'ampere-hour-meter', name: '安培小時器' },
  { id: '', name: '壓力/流量表' },
  { id: '', name: '米輪/編碼器' },
  { id: '', name: '液位傳感器' },
  { id: '', name: '張力控制器' },
  { id: '', name: '光電開關' },
  { id: '', name: '光學尺(LVDT)' },
  { id: '', name: '薄型直流變壓器(轉換器)' },
  { id: '', name: '布頭檢知控制器' },
  { id: '', name: '比例連動控制器' },
  { id: '', name: 'RS485無線傳輸器' }
]
</script>
<style scoped lang="scss">
.wrapper {
  height: 100%;
  width: 100%;
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
