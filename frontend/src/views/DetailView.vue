<!--상세 기능 탭 페이지-->
<template>
  <div class="">
    <header>상세 기능</header>

    <!--buttons-->
    <div class="button-container">
      <button @click="coldWater">냉수</button>
      <button @click="hotWater">온수</button>
      <button @click="clean">청소</button>
      <button @click="cap">마개</button>
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
  data() {
    return {
      cvalve: 0,
      hvalve: 0,
      clean_v: 0,
      cap_V: 0
    };
  },
  methods: {
    coldWater: function () {
      if (this.cvalve == 0) {
        this.cvalve = 1;
      } else {
        this.cvalve = 0;
      }

      this.$http.post("/web/" + this.$api + "/control", {
        "userid": "1",
        "bathid": "1",
        "cap": this.cap_V,
        "cvalve": this.cvalve,
        "hvalve": this.hvalve,
        "cleantime": this.clean_v
      }).then((res) => {
        console.log(res);
      })
        .catch((err) => {
          console.error("안녕");
        });

      console.log("냉수");
    },
    hotWater: function () {
      if (this.hvalve == 0) {
        this.hvalve = 1;
      } else {
        this.hvalve = 0;
      }
      this.$http.post("/web/" + this.$api + "/control", {
        "userid": "1",
        "bathid": "1",
        "cap": this.cap_V,
        "cvalve": this.cvalve,
        "hvalve": this.hvalve,
        "cleantime": this.clean_v
      }).then((res) => {
        console.log(res);
      })
        .catch((err) => {
          console.error("안녕");
        });

      console.log("온수");
    },
    clean: function () {

      if (this.clean_v == 0) {
        this.clean_v = 15;
        this.$http.post("/web/" + this.$api + "/control", {
          "userid": "1",
          "bathid": "1",
          "cap": this.cap_V,
          "cvalve": this.cvalve,
          "hvalve": this.hvalve,
          "cleantime": this.clean_v
        }).then((res) => {
          console.log(res);
        })
          .catch((err) => {
            console.error("안녕");
          });

        console.log("청소");
      }

    },
    cap: function () {

      if (this.cap_V == 0) {
        this.cap_V = 1;
      } else {
        this.cap_V = 0;
      }
      this.$http.post("/web/" + this.$api + "/control", {
        "userid": "1",
        "bathid": "1",
        "cap": this.cap_V,
        "cvalve": this.cvalve,
        "hvalve": this.hvalve,
        "cleantime": this.clean_v
      }).then((res) => {
        console.log(res);
      })
        .catch((err) => {
          console.error("안녕");
        });

      console.log("cap");
    },

    function () {
      this.$http.get("/arduino/"+this.$api+"/1").then((res)=>{
        console.log(res.data);
        this.cleantime = res[0].cleantime;
      })  
      .catch((err)=>{
        console.error(err);
      });
    },

  },

  created(){
    setInterval(this.function, 10000);
  },
};
</script>
<style scoped>
header {
  height: 50px;
  font-size: 24px;
  padding: 3%;
  margin-bottom: 40px;
}

.button-container {
  display: flex;
  justify-content: space-evenly;
}

.button-container button {
  border-radius: 50%;
  width: 48px;
  height: 48px;
}
</style>