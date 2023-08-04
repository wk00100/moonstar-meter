<template>
  <div class="wrapper">
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
          icon="fa-solid fa-print"
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
          icon="fa-solid fa-print"
          style="color: #ededed"
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
  </div>
</template>
<script setup lang="ts"></script>

<style scoped lang="scss">
$icon: '#ededed';
ul {
  list-style: none;
}
.icon {
  width: 1.5rem;
}
.wrapper {
  min-height: calc(100vh - 23.9rem);
  width: 100%;
  padding: 1rem 2rem 0 2rem;
  background-color: #504b4a;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
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
    max-height: 6rem;
    max-width: 30rem;
  }

  .copyright {
    grid-column: 1 / span 2;
    margin-top: 0.5rem;
    height: 1.5rem;
    p {
      display: flex;
      justify-content: center;
    }
  }
}

@media (max-width: 1199.98px) {
}

@media (max-width: 930px) {
  // hide head nav
}

@media (max-width: 600px) {
  // mobile mode
  .wrapper {
    grid-template-columns: repeat(1, 1fr);
    justify-content: center;
    .company {
      justify-self: left;
      margin-top: 1rem;
    }
    .copyright {
      grid-column: 1;
    }
  }
}
</style>
