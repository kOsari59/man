<template>
  <div class="home">
    <HomeBath />
    <HomeState />
    <HomeBathSetting />
    <HomeCleanSetting />
    <HomeReserveSetting />
    <Footer />
    
    <div v-if="user">
    <h1>아이디</h1>
    <h1> 아이디 : kmc5948 <!--{{온도들어가됨}}--></h1>
    <h1> 비밀번호 :{{ user[0].user_pw }}</h1>
    <h1> 이름 :{{ user[0].user_name }}</h1>
  </div>
    
    <img class="bathstart" src="../assets/play.png" v-on:click="bStart" />
  </div>
  
</template>

<script>
// @ is an alias to /src
import HomeBath from "@/components/HomeBath.vue";
import HomeState from "@/components/HomeState.vue";
import HomeBathSetting from "../components/HomeBathSetting.vue";
import HomeCleanSetting from "../components/HomeCleanSetting.vue";
import HomeReserveSetting from "@/components/HomeReserveSetting.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "HomeView",
  components: {
    HomeBath,
    HomeState,
    HomeBathSetting,
    HomeCleanSetting,
    HomeReserveSetting,
    Footer,
  },
  data() {
    return{
      user:null,
    };
  },
  creted(){
      console.log("출력내용");
      //여기서 부터 axios 데이터 입력
      
  },
  methods: {
    //목욕 시작 명령
    bStart: function () {
      this.$http.get('/api/login').then((res)=>{
        const user = res.data;
        if(user) this.user = user;
        console.log("출력내용");
        console.log(user);
        
      })  
      .catch((err)=>{
        console.error(err);
      });
      console.log("Click mbath");
    },
  },
};
</script>
<style scoped>
.home {
  background-color: cornflowerblue;
  height: 2000px;
}
.bathstart {
  width: 50px;
  position: fixed;
  bottom: 80px;
  right: 20px;
  z-index: 1;
}
</style>