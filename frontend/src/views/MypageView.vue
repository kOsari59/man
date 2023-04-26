<template>
  <div>
    <div class="title">
      <h1 class="left_box">내 페이지</h1>
      <router-link to="/setting"
        ><img src="../assets/settings.png" alt="" class="setting right_box"
      /></router-link>
    </div>
    <div>사용자 이름</div>
    <div>기록</div>
    <Footer />
  </div>
</template>
  <script>
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Footer,
  },
};
</script>
<style scoped>
.title {
  height: 30px;
}
.left_box {
  float: left;
}
.right_box {
  float: right;
}
.setting {
  width: 40px;
  padding: 10px;
}
</style>