<!--설정 화면(테마, 알림)-->
<template>
  <header>
    <router-link to="/mypage">&lt;</router-link>
    <div class="left_box">설정</div>
  </header>
  <div class="content">
    <router-link to=""
      ><div>
        <font-awesome-icon icon="fa-solid fa-palette" /> 테마
      </div></router-link
    >
    <router-link to=""
      ><div>
        <font-awesome-icon icon="fa-solid fa-bell" /> 알림
      </div></router-link
    >
  </div>
</template>


<style scoped>
header {
  height: 50px;
  line-height: 50px;
  display: flex;
  margin-bottom: 50px;
  font-size: 24px;
  padding: 3%;
}
header a {
  margin-right: 10px;
}
a {
  text-decoration-line: none;
  color: black;
}

.content div {
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  padding: 5%;
}
.left_box {
  float: left;
}
.right_box {
  float: right;
}
</style>