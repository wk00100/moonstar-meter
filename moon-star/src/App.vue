<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <RouterLink to="/" class="landmark">
      <img alt="MOONSTAR" class="logo" src="@/assets/logo.svg" width="70" />
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
  <div class="wrapper">
    <RouterView />
  </div>
  <footer>
    <div class="company">
      <h3>台灣</h3>
      <p style="border-left: 2px solid #c0c0bf; padding-left: 0.5rem">
        <font-awesome-icon
          icon="fa-solid fa-location-dot"
          style="color: #ededed"
          class="icon"
        />&ensp;新北市板橋區信義路163巷11號3樓<br />
        <font-awesome-icon
          icon="fa-solid fa-phone"
          style="color: #ededed"
          class="icon"
        />&ensp;886-2-89541027 &nbsp;&nbsp;
        <font-awesome-icon
          icon="fa-solid fa-fax"
          style="color: #ededed"
          class="icon"
        />&ensp;886-2-89541028<br />
        <font-awesome-icon icon="fa-solid fa-link" style="color: #ededed" class="icon" />&ensp;<a
          href="http://www.moonstar-meter.com/"
          target="_blank"
          style="color: #c0c0bf"
          >www.moonstar-meter.com</a
        ><br />
        <font-awesome-icon
          icon="fa-solid fa-envelope"
          style="color: #ededed"
          class="icon"
        />&ensp;msq22489@ms69.hinet.net<br />
      </p>
    </div>
    <div class="company">
      <h3>廣東</h3>
      <p style="border-left: 2px solid #c0c0bf; padding-left: 0.5rem">
        <font-awesome-icon
          icon="fa-solid fa-location-dot"
          style="color: #ededed"
          class="icon"
        />&ensp;東莞市虎門鎮萬科金色里程4棟405<br />
        <font-awesome-icon
          icon="fa-solid fa-phone"
          style="color: #ededed"
          class="icon"
        />&ensp;86-769-82882512 &nbsp;&nbsp;
        <font-awesome-icon
          icon="fa-solid fa-fax"
          style="color: #ededed"
          class="icon"
        />&ensp;86-769-82882516<br />
        <font-awesome-icon icon="fa-solid fa-link" style="color: #ededed" class="icon" />&ensp;<a
          href="http://www.moonstar-meter.com/"
          target="_blank"
          style="color: #c0c0bf"
          >www.moonstar-meter.com</a
        ><br />
      </p>
    </div>
    <div class="copyright"><p>Copyright© 2023 Moonstar Technology Co.,Ltd.</p></div>
  </footer>
</template>

<style scoped lang="scss">
$icon: '#ededed';
ul {
  list-style: none;
}
.icon {
  width: 1.5rem;
}
.wrapper {
  width: 100%;
  min-height: 60vh;
}
header {
  width: 100%;
  height: 15vh;
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
  min-height: 25vh;
  width: 100%;
  padding: 1rem 2rem 0 2rem;
  background-color: #504b4a;
  display: grid;
  grid-template-columns: 1fr 1fr;
  h3 {
    color: #c0c0bf;
    margin-right: 0.5rem;
  }

  p {
    display: inline;
    color: #c0c0bf;
    font-family: 'TaipeiSans-Regular';
    font-weight: 500;
  }
  .company {
    display: flex;
    justify-content: center;
  }

  .copyright {
    grid-column: 1 / span 2;
    margin-top: 1rem;
    p {
      display: flex;
      justify-content: center;
    }
  }
}
.landmark:hover {
  background-color: #00000000;
}
</style>
