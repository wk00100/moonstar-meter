<template>
  <div class="wrapper">
    <RouterLink to="/" class="landmark">
      <img alt="MOONSTAR" class="logo" src="@/assets/logo.svg" width="70" />
      <div class="name">
        <h2>月欣科技有限公司</h2>
        <p>Moonstar Technology Co.,Ltd.</p>
      </div>
    </RouterLink>
    <nav>
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
.wrapper {
  width: 100%;
  background-color: white;
  z-index: 100;
  width: 100%;
  min-height: 5rem;
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
    padding: 0 3rem;
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
}
@media (max-width: 1199.98px) {
}

@media (max-width: 930px) {
  // hide head nav
  nav {
    display: none;
  }
}

@media (max-width: 767.98px) {
  // mobile mode
}
</style>
