<!--홈 화면 탭-->
<template>
  <div class="home">
    <!--HomeBath 컴포넌트에 스크롤변수와 이미지변수 전달-->
    <HomeBath class="header" :isScroll="isScroll" :bathImg="bathImg" :nowTemp="nowTemp" :nowWaterLevel="nowWaterLevel" />
    <!-- ++++++++양방향 데이터 바인딩 해야함+++++++++ -->
    <div class="content">
      <HomeBathSetting :setTemp="setTemp" :setWaterLevel="setWaterLevel" />
      <HomeCleanSetting @cleanTime ="pp"/>
      <HomeReserveSetting />
    </div>
    <Footer />
    <img class="bathstart" src="../assets/play.png" v-on:click="bStart" />
  </div>
</template>

<script>
// @ is an alias to /src
import HomeBath from "@/components/HomeBath.vue";
import HomeBathSetting from "../components/HomeBathSetting.vue";
import HomeCleanSetting from "../components/HomeCleanSetting.vue";
import HomeReserveSetting from "@/components/HomeReserveSetting.vue";
import Footer from "@/components/Footer.vue";

import bathpng from "@/assets/bath.png";
import bath2png from "@/assets/bath2.png";

//현재 목욕 상태(0 사용안함, 1 청소, 2 물받기, 3 목욕중)
var state = 0;

export default {
  name: "HomeView",
  components: {
    HomeBath,
    HomeBathSetting,
    HomeCleanSetting,
    HomeReserveSetting,
    Footer,
  },
  //컴포넌트 인스턴스 마운트 후 호출
  mounted() {
    document.addEventListener("scroll", this.scrollEvents);
  },
  unmounted() {
    document.removeEventListener("scroll", this.scrollEvents);
  },
  data() {
    return {
      isScroll: false,
      bathImg: bathpng,
      nowTemp: 30,
      nowWaterLevel: 50,
      //HomeBathSetting 컴포넌트와 주고 받을 데이터
      setTemp: 50,
      setWaterLevel: 80,
      //HomeCleanSetting 컴포넌트와 주고 받을 데이터
      cleanToggle: false,
      cleanTime: 30,
      //HomeReserveSetting 컴포넌트와 주고 받을 데이터
      reserveToggle: false,
      reserveTime: [0, 30],
    };
  },
  methods: {
    //스크롤 시 Homebath 축소
    scrollEvents: function () {
      //현재 스크롤이 본문(설정) 위치에 따라 변수값조정
      if (document.documentElement.scrollTop > 0) {
        this.isScroll = true;
        this.bathImg = this.changeImg(this.isScroll, state);
      } else {
        this.isScroll = false;
        this.bathImg = this.changeImg(this.isScroll, state);
      }
    },
    //homeview에 isScroll과 현재 목욕 상태에 따라 다른 이미지 반환
    changeImg: function (isScroll, state) {
      if (isScroll) {
        return bath2png;
      } else {
        return bathpng;
      }
    },
    pp(selections){
      console.log("변경이벤트 적용");
      this.cleanTime = selections;
      console.log(this.cleanTime[0]);
    },
    //목욕 시작 명령
    bStart: function () {
      this.$http.post('/api/web/5948/schedule', {
        "schedule_id": "3",
        "start_time": "2023-05-10 22:13:27",
        "end_time": "2023-05-10 22:13:40",
        "avg_temp": "30",
        "is_shower": "1",
        "state": "1",
        "user_id": "1",
        "bath_id": "1",
        "h_valve": "1",
        "c_valve": "1",
        "temp": "40",
        "water_level": "50",
        "spkler": "1",
        "cap": "1",
        "fan_onoff": "1",
        "fan_speed": "1",
        "heat": "1",
        "led_onoff": "1",
        "led_color": "1",
        "led_bright": "1",
        "clean_time": this.cleanTime[0],
      }).then((res) => {
        console.log(res);
      })
        .catch((err) => {
          console.error("안녕");
        });
    },
  },
};
</script>
<style>
.home {
  background-color: rgb(247, 247, 247);
}

.box {
  border-radius: 5%;
  background-color: white;
  margin: 3% 2%;
  padding: 3%;
}

.header {
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  transition: 0.3s ease-in-out;
  z-index: 1;
}

.bathstart {
  width: 50px;
  position: fixed;
  bottom: 10%;
  right: 10%;
  z-index: 1;
}

.content {
  margin-bottom: 30%;
}
</style>