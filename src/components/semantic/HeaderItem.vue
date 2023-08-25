<template>
  <div class="wrapper shadow">
    <RouterLink to="/" class="landmark">
      <img alt="MOONSTAR" class="logo" src="@/assets/logo.svg" />
      <div class="name">
        <h3>月欣科技有限公司</h3>
        <p>Moonstar Technology Co.,Ltd.</p>
      </div>
    </RouterLink>
    <nav>
      <!-- Burger For Mobile -->
      <input type="checkbox" id="switch" />
      <label for="switch" class="toggle">
        <font-awesome-icon class="icon" icon="fa-solid fa-bars" size="xl" style="color: #050505" />
      </label>
      <ul class="link-wrapper">
        <li>
          <RouterLink class="item" to="/about">
            關於月欣 <font-awesome-icon class="menu-arr" icon="fa-solid fa-angles-right" />
          </RouterLink>
        </li>
        <li class="d-product">
          <RouterLink to="/products" class="item">
            產品介紹 <font-awesome-icon class="menu-arr" icon="fa-solid fa-angles-right" />
          </RouterLink>
        </li>
        <li class="m-product">
          <input type="checkbox" id="type-switch" />
          <a class="item sub-btn">
            <label class="products" for="type-switch">
              產品介紹
              <font-awesome-icon class="menu-arr" icon="fa-solid fa-angles-right" />
            </label>
          </a>
          <ul class="type-menu">
            <li class="type" @click="routeProduct({ id: 'AI', name: '類比表' })">
              <RouterLink to="/products/AI">類比表</RouterLink>
            </li>
            <li class="type" @click="routeProduct({ id: 'C', name: '計數器' })">
              <RouterLink to="/products/C">計數器</RouterLink>
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
import { RouterLink } from 'vue-router'
import { type ICategory } from '@/types/old/Data'
const emit = defineEmits<{ (e: 'switch', type: ICategory): void }>()

// const type = ref<ICategory>({ id: 'AI', name: '類比表' })

function routeProduct(newType: ICategory) {
  // type.value = newType
  emit('switch', newType)
}
</script>

<style scoped lang="scss">
img {
  width: 3.2rem;
}
.wrapper {
  width: 100%;
  padding: 0 3rem 0 6rem;
  background-color: white;
  z-index: 100;
  width: 100%;
  height: 100%;
  display: flex;
  max-width: inherit;
  // justify-content: center;
  &.shadow {
    -webkit-box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
    -moz-box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
    box-shadow: 0 3px 5px rgba(57, 63, 72, 0.3);
  }
  .landmark {
    display: flex;
    // padding: 0 3rem;
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
    visibility: hidden;
  }
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: flex-end;
  align-self: stretch;
  // padding-left: 3rem;

  .router-link-active {
    color: #e0e7ff;
  }
}

@media (max-width: 1199.98px) {
  .icon {
    display: block;
  }
  nav ul {
    transition: none;
    visibility: hidden;
    height: 0;
    width: 0;
    a {
      transition: none;
    }
  }
  nav {
    .toggle {
      /** style */
      position: absolute;
      display: contents;
      margin: 0 auto;
      height: 100%;
      width: 40%;
      z-index: 110;
      align-items: center;
      justify-content: flex-end;
      visibility: visible;
      cursor: pointer;
      /** style */
    }
    align-items: center;
    justify-content: flex-end;
  }
  li {
    width: 13rem;
    flex-wrap: wrap;
  }
  #switch:checked ~ .link-wrapper {
    transition: width 0.4s;
    visibility: visible;
    position: absolute;
    height: fit-content;
    width: 13rem;
    flex-direction: column;
    margin-top: 5rem;
    background-color: #ffffff;
    border-radius: 5px;
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
    padding: 0 3rem;
  }
}

@media (max-width: 767.98px) {
  // mobile mode
  .wrapper {
    padding-right: 1rem;
  }
  nav .toggle {
    padding-right: 1rem;
    width: 30%;
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
    width: 13rem;
    display: block;
    .type {
      padding-left: 3rem;
      padding-top: 0rem;
      padding-bottom: 0.5rem;
      font-size: 1rem;
      font-weight: 500;
      font-family: 'Noto Sans TC';
      a {
        padding: 0;
        font-family: 'Noto Sans TC';
      }
    }
  }
}
</style>
