<template>
  <div class="wrapper">
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
      <label for="switch" class="toggle"
        ><font-awesome-icon class="icon" icon="fa-solid fa-bars" size="xl" style="color: #050505"
      /></label>

      <ul>
        <li><RouterLink to="/about">關於月欣</RouterLink></li>
        <li><RouterLink to="/products">產品介紹</RouterLink></li>
        <li><RouterLink to="/contact-us">聯絡我們</RouterLink></li>
        <li>
          <RouterLink to="/files" style="pointer-events: none; color: #c0c0bf">檔案下載</RouterLink>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script setup lang="ts">
import { RouterLink } from 'vue-router'
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
  height: 4rem;
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
    }
  }
  #switch {
    display: none;
    &:checked ~ ul {
      visibility: visible;
    }
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
  nav {
    .toggle {
      /** style */
      position: absolute;
      display: flex;
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

    #switch:checked ~ ul {
      display: flex;
      position: relative;
    }
  }
  nav ul {
    display: none;
  }
}

@media (max-width: 930px) {
  .wrapper {
    padding: 0 3rem;
  }
  // hide head nav
  nav {
    .name {
      display: none;
    }
    ul {
    }
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
}
</style>
