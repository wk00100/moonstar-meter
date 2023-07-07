<template>
  <main class="about">
    <h1>關於月欣</h1>
    <div class="certificate">
      <img alt="certificate" src="http://www.moonstar-meter.com/pic/ce.jpg" width="300" />
    </div>
    <article>
      <p>
        &emsp;&emsp;月欣科技有限公司創立於民國89年，主要從事專業電子儀錶，如:計數器,長度表,電壓表,電流錶,線速表,轉速表,控制器,安培小時,光電近接,壓力流量．．．等
        ；擁有為數不少的客戶群。<br />
        &emsp;&emsp;本公司擁有優秀的經營團隊，秉持著『專業技術』的經營理念，追求企業永續經營及成長；除整體營運穩定外，獲利狀況也逐年提升，是國內績優廠商之一
        。<br />
        &emsp;&emsp;我們重視每一位員工，除了有良好工作環境、也提供學習及成長的空間，歡迎優秀的朋友一起加入月欣科技有限公司的工作行列。
      </p>
    </article>
  </main>
</template>

<style>
main {
  padding: 0 4rem;
  display: grid;
  grid-template-columns: 2fr 3fr;
}
h1 {
  height: 5rem;
  background-color: #d4e6fa;
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column: 1 / span 2;
}
.certificate {
  margin: 2rem 0;
  display: flex;
  justify-content: center;
}
article {
  margin: 2rem 0;
}
</style>
