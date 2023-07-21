<template>
  <div class="wrapper">
    <div class="title">
      <h2>聯絡表單</h2>
    </div>
    <form class="form" autocomplete="off">
      <div class="row">
        <!--label for="name">姓名</!--label-->
        <input type="text" id="name" placeholder="姓名" />
      </div>
      <div class="row">
        <!--label for="company">公司名稱</!--label-->
        <input type="text" id="company" placeholder="公司名稱" />
      </div>
      <div class="row">
        <!--label for="address">地址</!--label-->
        <input type="text" id="address" placeholder="地址" />
      </div>
      <div class="row">
        <!--label for="phone">電話</label-->
        <input type="text" id="phone" placeholder="電話" />
      </div>
      <div class="row">
        <!--label for="mail">電子郵件</!--label-->
        <input type="text" name="mail" placeholder="電子郵件" />
      </div>
      <div class="row content-area">
        <!--label for="content">訊息</!--label-->
        <textarea id="content" placeholder="請輸入留言" rows="5"></textarea>
      </div>
      <button type="submit">發送訊息</button>
    </form>
  </div>
</template>
<script setup lang="ts"></script>
<style scoped lang="scss">
$text-theme: #8c8080;

input {
  border: 1px solid #9d8f8f;
  border-radius: 2px;
  outline: none;
  font-size: 1rem;
  height: 2.2rem;
  width: 24rem;
  text-indent: 0.4rem;
  /*&::placeholder {
    padding-left: 0.4rem;
  }*/
  caret-color: #9d8f8f;
  color: #6e6e6e;

  &:focus {
    &::placeholder {
      font-family: 'TaipeiSans-Regular';
    }
    outline: 1.5px solid #9d8f8f;
    border: 0;
  }
}
textarea {
  resize: none;
  border: 1px solid #9d8f8f;
  border-radius: 2px;
  outline: none;
  font-size: 1rem;
  line-height: 150%;
  width: 24rem;
  padding-left: 0.4rem;

  caret-color: #9d8f8f;
  color: #6e6e6e;
  &:focus {
    &::placeholder {
      font-family: 'TaipeiSans-Regular';
    }
    outline: 1.5px solid #9d8f8f;
    border: 0;
  }
}
label {
  display: block;
  width: 8rem;
  color: $text-theme;
  font-family: 'TaipeiSans-Bold';
}
button {
  cursor: pointer;
  height: 2.5rem;
  width: 6rem;
  background-color: #00000000;
  color: #9d8f8f;
  border: 0;
  border-radius: 5rem;
  &:hover {
    background-color: #dedede;
    transition: 0.3s;
  }
}
.wrapper {
  display: block;
  height: 30rem;
}
.title {
  color: $text-theme;
  padding: 0.5rem 0;
  font-size: 1.2rem;
}
/*.form {
  display: grid;
  grid-template-columns: 1fr 1fr;
}*/
.row {
  padding: 0.5rem 0;
}
.content-area {
  grid-column: 1 / span 2;
}
</style>
