<template>
  <div class="nav">
    <!--font-awesome-icon 아이콘-->
    <router-link to="/"
      ><font-awesome-icon icon="fa-solid fa-house" /><br />홈</router-link
    >
    <router-link to="/detail"
      ><font-awesome-icon icon="fa-solid fa-check" /><br />상세기능</router-link
    >
    <router-link to="/mypage"
      ><font-awesome-icon icon="fa-solid fa-user" /><br />내페이지</router-link
    >
  </div>
</template>

<style scoped>
.nav {
  bottom: 0;
  position: fixed;
  display: flex;
  height: 50px;
  width: 100%;
  background-color: rgb(247, 247, 247);
  z-index: 1;
  justify-content: space-evenly;
}

.nav a {
  font-weight: bold;
  color: #2c3e50;
  text-align: center;
  text-decoration-line: none;
}

.nav a.router-link-exact-active {
  color: #42b983;
}

/* 태블릿 */
@media (min-width: 768px) {
}

/* 데스크탑 */
@media (min-width: 1024px) {
  .nav {
    height: 50px;
    width: 1024px;
  }
}
</style>