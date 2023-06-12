<!--홈 화면 탭-->
<template>
  <div class="home">
    <!--HomeBath 컴포넌트에 스크롤변수와 이미지변수 전달-->
    <HomeBath class="header" :isScroll="isScroll" :bathImg="bathImg" :nowTemp="nowTemp" :nowWaterLevel="nowWaterLevel" />
    <!-- ++++++++양방향 데이터 바인딩 해야함+++++++++ -->
    <div class="content">
      <HomeBathSetting @settingbath="bathsetting" />
      <HomeCleanSetting @cleanTime="cleansetting" @cleanToggle="cleanTogglee"/>
      <HomeReserveSetting @update_time="update_time" @reserve_toggle="reserveTogglee" />
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
      cleanToggle: true,
      cleanTime: [30,0],
      //HomeReserveSetting 컴포넌트와 주고 받을 데이터
      reserveToggle: true,
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
    bathsetting(tempvalue, levelvalue) {
      console.log("물 온도 높이 변경");
      this.setTemp = tempvalue;
      this.setWaterLevel = levelvalue;
      console.log(this.setTemp);
      console.log(this.setWaterLevel);
    },
    update_time(houre, minnute) {
      
      this.reserveTime[0] = houre[0];
      this.reserveTime[1] = minnute[0];
      console.log(this.reserveTime[0]);
      console.log(this.reserveTime[1]);


    },
    cleansetting(selections) {
      console.log("cleantime");
      this.cleanTime = selections;
      console.log(this.cleanTime[0]);

      
    },cleanTogglee(value){
      this.cleanToggle = value;
      console.log("cleantoggle");
      console.log(this.cleanToggle);
    },
    reserveTogglee(value){
      this.reserveToggle = value;
      console.log("reserveToggle");
      console.log(this.reserveToggle);
    },
    //목욕 시작 명령
    bStart: function () {
      if(this.cleanToggle == false){
        this.cleanTime[0] = 0;
      }
      var today = new Date();

      if(this.reserveToggle){
        today.setHours(today.getHours()+this.reserveTime[0]);
        today.setMinutes(today.getMinutes()+this.reserveTime[1]);
      }
    
      

      

      var year = today.getFullYear();
      var month = ('0' + (today.getMonth() + 1)).slice(-2);
      var day = ('0' + today.getDate()).slice(-2);

      var dateString = year + '-' + month + '-' + day;

      var hours = ('0' + today.getHours()).slice(-2);
      var minutes = ('0' + today.getMinutes()).slice(-2);
      var seconds = ('0' + (today.getSeconds()+5)).slice(-2);
      var seconds_2 = ('0' + (today.getSeconds())).slice(-2);

      var timeString = hours + ':' + minutes + ':' + seconds;
      console.log("클린타임");
      console.log(this.cleanTime[0]);
     
      this.$http.post( "/web/"+this.$api+"/schedule", {
        "start_time": dateString+" "+timeString,
        "userid": "1",
        "bathid": "1",
        "temp": this.setTemp,
        "waterlevel": this.setWaterLevel,
        "cleantime": this.cleanTime[0]
      }).then((res) => {
        console.log(res);
      })
        .catch((err) => {
          console.error("스케쥴 전달 오류");
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
  transition: 0.5s ease-in-out;
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
/* 태블릿 */
@media (min-width: 768px) {
  .bathstart {
    bottom: 10%;
    right: 10%;
  }
}

/* 데스크탑 */
@media (min-width: 1024px) {
  .bathstart {
    bottom: 10%;
    left: 50%;
    transform: translate(700%, 0);
  }
}
</style>