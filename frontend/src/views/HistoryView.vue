<!--기록 화면(그래프, 내역)-->
<template>
  <header>
    <router-link to="/mypage">&lt;</router-link>
    <div class="left_box">기록</div>
  </header>
  <div class="content">
    <div class="calender">캘린더</div>
    <div class="statistic">
      <div class="title">월간 통계</div>
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

      <BarChart class="chart" />
    </div>

    <div class="historyList">
      <div class="title">상세 이력</div>
      <ul style="list-style: none">
        <li v-for="item in items" :key="item">
          {{ item.date }} {{ item.time }} {{ item.temp }}
          <hr />
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import BarChart from "../components/BarChart.vue";

export default {
  components: {
    BarChart,
  },
  data() {
    return {
      items: [
        {
          date: "4/19 17:50",
          time: 90,
          temp: 50,
        },
        {
          date: "4/10 19:50",
          time: 90,
          temp: 50,
        },
        {
          date: "5/19 20:50",
          time: 90,
          temp: 50,
        },
      ],
    };
  },
};
</script>
<style scoped>
ul {
  padding: 0;
}

header {
  height: 50px;
  line-height: 50px;
  display: flex;
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
.calender {
  height: 300px;
  background: white;
  border-top: 1px solid black;
}
.statistic {
  background: white;
  border-top: 1px solid black;
}
.title {
  font-weight: bold;
  margin: 1%;
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

.historyList {
  background-color: white;
  border-top: 1px solid black;
}
.left_box {
  float: left;
}
.right_box {
  float: right;
}
</style>