<script setup lang="ts">
import pageTitle from '@/components/PageTitleItem.vue'
let title: string = '關於月欣'
</script>
<template>
  <page-title :title="title"></page-title>
  <main class="about">
    <article>
      <p>
        &emsp;&emsp;月欣科技有限公司創立於民國89年，主要從事專業電子儀錶，如：計數器、長度表、電壓表、電流錶、線速表、轉速表、控制器、安培小時、光電近接、壓力流量等
        ，擁有為數不少的客戶群。<br /><br />
        &emsp;&emsp;本公司擁有優秀的經營團隊，秉持著『專業技術』的經營理念，追求企業永續經營及成長；除整體營運穩定外，獲利狀況也逐年提升，是國內績優廠商之一
        。<br /><br />
        &emsp;&emsp;我們重視每一位員工，除了有良好工作環境、也提供學習及成長的空間，歡迎優秀的朋友一起加入月欣科技有限公司的工作行列。
      </p>
    </article>
    <div class="certificate">
      <img alt="certificate" src="@/assets/certificate.jpg" width="300" />
    </div>
  </main>
</template>

<style scoped lang="scss">
main {
  padding: 0 8rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.certificate {
  margin: 2rem 0;
  display: flex;
  justify-content: center;
}
article {
  margin: 2rem 2rem;
  p {
    padding-top: 2rem;
  }
}
@media (max-width: 1199.98px) {
  main {
    padding: 0 6rem;
  }
  article p {
    padding-top: 1rem;
  }
}
@media (max-width: 767.98px) {
  main {
    padding: 0%;

    width: 100%;
    grid-template-columns: 1fr;
    article {
      margin-bottom: 0.5rem;
      p {
        padding-top: 0rem;
      }
    }
  }
}
</style>
