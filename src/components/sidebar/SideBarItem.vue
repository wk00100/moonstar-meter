<template>
  <div class="wrapper">
    <div id="title">
      <h2>產品類別</h2>
      <hr />
    </div>
    <ul class="">
      <li v-for="category in categories" :key="category.id">
        <a
          @click="switchCategory(category)"
          :class="[category.isActive ? 'active' : 'not-active']"
          >{{ category.name }}</a
        >
        <div class="bottom-line"></div>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import { onMounted } from 'vue'
import { type ICategory } from '@/types/old/Data'
const prop = defineProps<{ currentCategory: ICategory }>()

onMounted(() => switchCategory(prop.currentCategory))

const emit = defineEmits<{ (e: 'switch', newCategory: ICategory): void }>()
function switchCategory(category: ICategory) {
  emit('switch', category)
  for (let i = 0; i < categories.length; i++) {
    if (categories[i].id === category.id) {
      categories[i].isActive = true
    } else {
      categories[i].isActive = false
    }
  }
}
interface ISidebarCategory extends ICategory {
  isActive?: boolean
}
const categories: ISidebarCategory[] = [
  { id: 'AI', name: '類比表', isActive: true },
  { id: 'C', name: '計數器', isActive: false },
  { id: 'SI', name: '速度表', isActive: false },
  { id: 'TC', name: '張力控制器', isActive: false }
  /**
  { id: '', name: '壓力/流量表', isActive: false },
  { id: '', name: '米輪/編碼器', isActive: false },
  { id: '', name: '液位傳感器', isActive: false },
  { id: '', name: '張力控制器', isActive: false },
  { id: '', name: '光電開關', isActive: false },
  { id: '', name: '光學尺(LVDT)', isActive: false },
  { id: '', name: '薄型直流變壓器(轉換器)', isActive: false },
  { id: '', name: '布頭檢知控制器', isActive: false },
  { id: '', name: '比例連動控制器', isActive: false },
  { id: '', name: 'RS485無線傳輸器', isActive: false }
  */
]
</script>
<style scoped lang="scss">
.wrapper {
  height: 100%;
  width: 12rem;
  // background-color: #777;
}
hr {
  border: 1px solid gray;
}
#title {
  color: #8c8080;
  h2 {
    margin: 1rem 0 0.5rem 0;
  }
}
li {
  cursor: pointer;
  height: 2.4rem;
  a {
    color: gray;
    font-family: 'TaipeiSans-Regular';
    letter-spacing: 2px;
    height: 100%;
    display: flex;
    align-items: center;
    padding-left: 0.3rem;
    padding-top: 0.5rem;
  }
  a:hover {
    text-decoration: none;
    color: rgb(210, 207, 207);
    transition: 0.3s;
  }
  .bottom-line {
    height: 1px;
    background-color: gray;
    width: 7rem;
  }
}
.active {
  color: rgb(210, 207, 207);
}
.not-active {
  color: gray;
}
</style>
@/types/old/Category
