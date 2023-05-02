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
  width: 100%;
  height: 3%;
  padding: 6% 0;
  background: #f6f6f6;
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
</style>