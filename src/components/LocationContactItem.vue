<template>
  <div class="wrapper">
    <div class="title">
      <h2>拜訪我們</h2>
    </div>
    <p style="padding-left: 0.5rem">
      <font-awesome-icon
        icon="fa-solid fa-location-dot"
        style="color: #8c8080"
        class="icon"
      />&ensp;新北市板橋區信義路163巷11號3樓<br />
      <font-awesome-icon
        icon="fa-solid fa-phone"
        style="color: #8c8080"
        class="icon"
      />&ensp;886-2-89541027<br />
      <font-awesome-icon
        icon="fa-solid fa-print"
        style="color: #8c8080"
        class="icon"
      />&ensp;886-2-89541028<br />
      <font-awesome-icon icon="fa-solid fa-link" style="color: #8c8080" class="icon" />&ensp;<a
        href="http://www.moonstar-meter.com/"
        target="_blank"
        style="color: #8c8080"
        >www.moonstar-meter.com</a
      ><br />
      <font-awesome-icon
        icon="fa-solid fa-envelope"
        style="color: #8c8080"
        class="icon"
      />&ensp;msq22489@ms69.hinet.net<br />
    </p>
  </div>
</template>
<script setup lang="ts"></script>
<style scoped lang="scss">
$text-theme: #8c8080;

.wrapper {
  display: block;
  height: 30rem;
}
.title {
  color: $text-theme;
  padding: 0.5rem 0;
  font-size: 1.2rem;
}
p {
  font-size: medium;
  line-height: 2.5;
}
</style>
