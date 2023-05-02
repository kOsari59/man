<!--내페이지 탭-->
<template>
  <div>
    <header>
      <h2 class="left_box">내 페이지</h2>
      <router-link to="/setting"
        ><font-awesome-icon icon="fa-solid fa-gear" class="right_box"
      /></router-link>
    </header>

    <div class="box">사용자 이름</div>

    <div class="box">
      <div>
        <div><font-awesome-icon icon="fa-regular fa-clock" class="" />기록</div>
      </div>

      <div class="historyBox">
        <font-awesome-icon icon="fa-solid fa-clock" />
        <br />
        평균 목욕 시간<br />
        32분
      </div>
      <div class="historyBox">
        <font-awesome-icon icon="fa-regular fa-clock" />
        <br />
        최대 목욕 시간<br />
        57분
      </div>
      <div class="historyBox">
        <font-awesome-icon icon="fa-solid fa-bath" />
        <br />
        목욕 빈도<br />
        월 3번
      </div>
      <div class="historyBox">
        <font-awesome-icon icon="fa-solid fa-temperature-half" />
        <br />
        평균 온도<br />
        57분
      </div>
    </div>
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
header {
  height: 50px;
}
.historyBox {
  border: 1px solid black;
  border-radius: 25%;
  text-align: center;
  display: inline-block;
  width: 30%;
  margin: 3%;
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