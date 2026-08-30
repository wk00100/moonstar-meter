<template>
  <div class="wrapper">
    <RouterLink to="/" class="landmark" @click="closeMenu">
      <img alt="MOONSTAR" class="logo" src="@/assets/logo.svg" />
      <div class="name">
        <h3>月欣科技有限公司</h3>
        <p>Moonstar Technology Co.,Ltd.</p>
      </div>
    </RouterLink>
    <nav>
      <!-- Burger For Mobile -->
      <input type="checkbox" id="switch" v-model="isMenuOpen" />
      <label for="switch" class="toggle">
        <font-awesome-icon class="icon" icon="fa-solid fa-bars" size="xl" style="color: #050505" />
      </label>
      <ul class="link-wrapper">
        <li>
          <RouterLink class="item" to="/about" @click="closeMenu">
            關於月欣 <font-awesome-icon class="menu-arr" icon="fa-solid fa-angles-right" />
          </RouterLink>
        </li>
        <li class="d-product">
          <RouterLink to="/products" class="item" @click="closeMenu">
            產品介紹 <font-awesome-icon class="menu-arr" icon="fa-solid fa-angles-right" />
          </RouterLink>
        </li>
        <li class="m-product">
          <input type="checkbox" id="type-switch" v-model="isTypeMenuOpen" />
          <a class="item sub-btn">
            <label class="products" for="type-switch">
              產品介紹
              <font-awesome-icon class="menu-arr" icon="fa-solid fa-angles-right" />
            </label>
          </a>
          <ul class="type-menu">
            <li class="type" v-for="category in categories" :key="category.id">
              <RouterLink :to="`/products/${category.id}`" @click="closeMenu">{{
                category.name
              }}</RouterLink>
            </li>
          </ul>
        </li>
        <!--li>
          <RouterLink to="/contact-us"
            >聯絡我們 <font-awesome-icon class="menu-arr" icon="fa-solid fa-angles-right" style=""
          /></RouterLink>
        </!--li-->
        <li>
          <RouterLink to="/files" class="item" style="pointer-events: none; color: #c0c0bf"
            >檔案下載 <font-awesome-icon class="menu-arr" icon="fa-solid fa-angles-right"
          /></RouterLink>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { useProductData } from '@/composables/useProductData'

const { categories, loadCategories } = useProductData()
const route = useRoute()
const isMenuOpen = ref(false)
const isTypeMenuOpen = ref(false)

function closeMenu() {
  isMenuOpen.value = false
  isTypeMenuOpen.value = false
}

watch(
  () => route.fullPath,
  () => {
    closeMenu()
  }
)

onMounted(async () => {
  await loadCategories()
})
</script>

<style scoped lang="scss">
img {
  width: 3.2rem;
}
.wrapper {
  position: relative;
  width: 100%;
  margin: 0;
  padding: 0 2rem;
  background-color: white;
  z-index: 100;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  .landmark {
    display: flex;
    flex-shrink: 0;
    &:hover {
      background-color: #00000000;
    }
    .name {
      padding: 0 0.8rem;
      color: rgb(44, 42, 42);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: baseline;
    }
  }
}
nav {
  display: flex;
  flex: 1 1 auto;
  min-width: 0;
  justify-content: flex-end;
  align-items: stretch;
  ul {
    display: flex;
    align-self: stretch;
    li {
      display: flex;
      align-self: stretch;
      align-items: flex-end;
      a {
        font-family: 'TaipeiSans-Bold';
        padding: 1rem 1rem;
      }
      .menu-arr {
        display: none;
      }
    }
    .m-product {
      display: none;
    }
  }
  #switch,
  #type-switch {
    display: none;
  }
  .toggle {
    display: none;
  }

  .router-link-active {
    color: #e0e7ff;
  }
}

@media (max-width: 1199.98px) {
  .icon {
    display: block;
  }
  nav {
    flex: 0 0 auto;
    align-items: center;
    justify-content: flex-end;
    .toggle {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 2.75rem;
      height: 2.75rem;
      visibility: visible;
      cursor: pointer;
    }
  }
  nav ul {
    visibility: hidden;
    height: 0;
    width: 0;
    overflow: hidden;
  }
  li {
    width: 100%;
    flex-wrap: wrap;
  }
  #switch:checked ~ .link-wrapper {
    visibility: visible;
    overflow: visible;
    position: absolute;
    top: 4rem;
    left: 0;
    right: 0;
    z-index: 120;
    height: fit-content;
    width: 100%;
    flex-direction: column;
    background-color: #ffffff;
    box-shadow: 0 4px 12px rgba(57, 63, 72, 0.2);
    .menu-arr {
      display: flex;
      text-decoration: none;
      color: #082b49;
      transition: 0.4s;
    }
    .item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 3rem;
      padding-left: 2rem;
      padding-right: 2rem;
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
      font-size: 1.1rem;
      font-weight: 500;
      font-family: 'Noto Sans TC';

      &:hover {
        .menu-arr {
          color: hsla(230, 100%, 37%, 0.2);
        }
        transition: all 0.4s;
      }
    }

    .products {
      flex-grow: 1;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
}

@media (max-width: 930px) {
  .wrapper {
    padding: 0 1.5rem;
  }
}

@media (max-width: 767.98px) {
  .wrapper {
    padding: 0 1rem;
  }
  .d-product {
    display: none;
  }
  nav ul .m-product {
    display: flex;
  }
  #type-switch:checked ~ .type-menu {
    visibility: visible;
    height: fit-content;
    width: 100%;
    display: block;
    .type {
      padding-left: 2.5rem;
      padding-top: 0rem;
      padding-bottom: 0.5rem;
      font-size: 0.9rem;
      font-weight: 400;
      a {
        padding: 0;
        font-family: 'Noto Sans TC';
      }
    }
  }
}
</style>
