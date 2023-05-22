<!--기록 화면(그래프, 내역)-->
<template>
  <div>
    <header>
      <router-link to="/mypage">&lt;</router-link>
      <div>기록</div>
    </header>
    <div class="content">
      <Calender v-bind:attr="attr" :historyItems="historyItems" />
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
        <div class="historytitle">상세 이력</div>
        <table>
          <thead>
            <tr>
              <th v-for="header in headers" :key="header.text">
                {{ header.text }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(line, index) in historyItems" :key="index">
              <td v-for="item in line" :key="item">
                {{ item }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import BarChart from "../components/BarChart.vue";
import Calender from "@/components/Calender.vue";
import _ from "lodash";
import { computed, ref } from "vue";

/* 상세 이력 테이블 헤더 */
const headers = [
  { text: "날짜", value: "date" },
  { text: "목욕 시간", value: "time" },
  { text: "목욕 온도", value: "temp" },
];
/* 백엔드로부터 기록 정보 받기 */
//get(localhost:3000/api/arduino/data/1(기기 아이디))
const historyItems = [
  {
    date: "2023-05-19 20:50:01",
    time: 90,
    temp: 50,
  },
  {
    date: "2023-05-13 20:00:01",
    time: 90,
    temp: 50,
  },
  {
    date: "2023-05-10 20:00:01",
    time: 90,
    temp: 50,
  },
  {
    date: "2023-04-19 19:50:01",
    time: 90,
    temp: 50,
  },
  {
    date: "2023-04-10 20:00:01",
    time: 90,
    temp: 50,
  },
  {
    date: "2023-04-05 20:00:01",
    time: 90,
    temp: 50,
  },
];
/* 목욕한 날짜 파싱 메소드*/
const parseDate = function () {
  let year, month, day;
  let datelist = [];
  for (var i = 0; i < historyItems.length; i++) {
    year = historyItems[i].date.substring(0, 4);
    month = historyItems[i].date.substring(5, 7);
    day = historyItems[i].date.substring(8, 10);

    datelist[i] = new Date(year, month - 1, day);
  }
  return datelist;
};
/* 캘린더에 표시할 날짜 데이터 */
const attr = ref([
  {
    highlight: { color: "purple", fillMode: "outline" },
    dates: parseDate(),
    popover: { label: "목욕", visibility: "hover", hideIndicator: true },
  },
]);

export default {
  components: {
    BarChart,
    Calender,
  },
  setup() {},
  data() {
    return {
      /*  상세 이력 저장 배열  */
      historyItems: historyItems,
      attr: attr,
      headers: headers,
    };
  },
  mounted() {
    this.handleScroll = _.throttle(this.checkBottom, 2000);
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    checkBottom(event) {
      let isBottom =
        document.documentElement.scrollTop + window.innerHeight + 200 >
        document.documentElement.offsetHeight;
      console.log(isBottom);
    },
  },
};
</script>
<style scoped>
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

.historyList table {
  width: 100%;
  text-align: center;
  border-collapse: collapse;
}
.historyList th,
td {
  padding: 10px;
}
.historytitle {
  font-weight: bold;
  margin: 2%;
}
</style>