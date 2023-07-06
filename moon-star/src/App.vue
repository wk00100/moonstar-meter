<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <RouterLink to="/" class="landmark">
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="60" height="60" />
    </RouterLink>
    <div class="menu">
      <nav>
        <ul>
          <li><RouterLink to="/about">關於月欣</RouterLink></li>
          <li><RouterLink to="/products">產品介紹</RouterLink></li>
          <li><RouterLink to="/contact-us">聯絡我們</RouterLink></li>
          <li><RouterLink to="/files">檔案下載</RouterLink></li>
        </ul>
      </nav>
    </div>
  </header>

  <RouterView />

  <footer>
    <p>
      Address:&nbsp;新北市板橋區信義路163巷11號3樓<br />
      Tel:&nbsp;886-2-89541027&emsp;
      <font-awesome-icon icon="fa-solid fa-fax" style="color: #ededed" />&ensp;886-2-89541028<br />
      Http:&nbsp;//www.moonstar-meter.com<br />
      Email:&nbsp;msq22489@ms69.hinet.net<br />
    </p>
    廣東：東莞市虎門鎮萬科金色里程4棟405 TEL:86-769-82882512 FAX:86-769-82882516
    http://www.moonstar-meter.com Copyright© 2011-2023 Moonstar Technology Co.,Ltd.
  </footer>
</template>

<style scoped lang="scss">
ul {
  list-style: none;
}
header {
  width: 100%;
  padding: 2rem 12rem 0rem 4rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  nav {
    ul {
      display: flex;
      align-items: flex-end;
      a {
        font-family: 'TaipeiSans-Bold';
        padding: 1rem 1rem;
      }
    }
  }
  .menu {
    height: 4rem;
    display: flex;
    flex-grow: 1;
    justify-content: flex-end;
    align-items: center;
    .router-link-active {
      color: #e0e7ff;
    }
  }
}
footer {
  height: 20rem;
  width: 100%;
  background-color: #504b4a;
  p {
    color: #c0c0bf;
    font-family: 'TaipeiSans-Regular';
    font-weight: 500;
  }
}
.landmark:hover {
  background-color: #00000000;
}
</style>
