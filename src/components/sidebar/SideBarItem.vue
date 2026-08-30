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
          :class="[category.id === prop.currentCategory.id ? 'active' : 'not-active']"
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
import { useProductData } from '@/composables/useProductData'

const prop = defineProps<{ currentCategory: ICategory }>()
const emit = defineEmits<{ (e: 'switch', newCategory: ICategory): void }>()
const { categories, loadCategories } = useProductData()

onMounted(async () => {
  await loadCategories()
})

function switchCategory(category: ICategory) {
  emit('switch', category)
}
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
