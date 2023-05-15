<!--내페이지 탭-->
<template>
  <div>
    <header>
      <div class="left_box">내 페이지</div>
      <router-link to="/setting"
        ><font-awesome-icon icon="fa-solid fa-gear" class="right_box"
      /></router-link>
    </header>
    <!--사용자 이미지 꾸며야함-->
    <div class="box user"><img src="@/assets/user.png" />사용자 이름</div>

    <router-link to="/history"
      ><div class="box">
        <div class="title">
          <font-awesome-icon icon="fa-regular fa-clock" class="" />기록
        </div>
        <div class="history-container">
          <div class="historyBox">
            <div class="historyicon">
              <font-awesome-icon icon="fa-solid fa-clock" />
              <br />
              32분
            </div>
            <br />
            평균 목욕 시간
          </div>
          <div class="historyBox">
            <div class="historyicon">
              <font-awesome-icon icon="fa-regular fa-clock" />
              <br />
              57분
            </div>
            <br />
            최대 목욕 시간
          </div>
        </div>
        <div class="history-container">
          <div class="historyBox">
            <div class="historyicon">
              <font-awesome-icon icon="fa-solid fa-bath" />
              <br />
              월 3번
            </div>
            <br />
            목욕 빈도
          </div>
          <div class="historyBox">
            <div class="historyicon">
              <font-awesome-icon icon="fa-solid fa-temperature-half" />
              <br />
              57분
            </div>
            <br />
            평균 온도
          </div>
        </div>
      </div>
    </router-link>

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
a {
  text-decoration-line: none;
  color: black;
}
header {
  height: 50px;
  font-size: 24px;
  padding: 3%;
  margin-bottom: 50px;
}
.user {
  text-align: center;
  padding: 8%;
  position: relative;
  font-weight: bold;
}
.user img {
  width: 20%;
  position: absolute;
  top: -65%;
  left: 50%;
  transform: translate(-50%, 0%);
  border: 5px solid black;
  border-radius: 50%;
}

.title {
  font-weight: bold;
}
.title * {
  margin-right: 1%;
}
.history-container {
  display: flex;
  justify-content: space-evenly;
  text-align: center;
}
.historyBox {
  flex: 1;
  text-align: center;
  margin: 2%;
}
.historyicon {
  display: inline-block;
  border: 1px solid black;
  border-radius: 20%;
  padding: 5%;
  width: 50%;
  height: 50%;
}
.historyicon svg {
  font-size: 24px;
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