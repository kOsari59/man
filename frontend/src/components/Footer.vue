<template>
  <div class="nav">
    <router-link to="/">홈</router-link> |
    <router-link to="/detail">상세기능</router-link> |
    <router-link to="/mypage">내페이지</router-link>
  </div>
</template>

<style scoped>
.nav {
  bottom: 0;
  position: fixed;
  width: 100%;
  text-align: center;
  padding: 30px 0;
  z-index: 1;
}

.nav a {
  font-weight: bold;
  color: #2c3e50;
}

.nav a.router-link-exact-active {
  color: #42b983;
}
</style>