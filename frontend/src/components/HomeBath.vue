<template>
  <!--isScroll이 true일 시, Scroll클래스 삽입-->
  <div class="component" :class="{ Scroll: this.isScroll }">
    <!--스크롤에 따라 이미지가 바뀜-->
    <div class="img_box">
      <img id="bathstate" v-bind:src="`${this.bathImg}`" />
    </div>
    <hr />
    <div class="text">
      <div>물 온도 {{ temp }} °C</div>
      <div>물 높이 {{ waterlevel }} %</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //db로부터 욕조의 상태 받는 변수
      temp: 50,
      waterlevel: 80,
    };
  },
  methods: {
    function () {
      
      this.$http.get("/web/"+this.$api+"/bath/1").then((res)=>{
        console.log(res.data);
        this.temp=res.data[0].temp;
        this.waterlevel = res.data[0].waterlevel;
      })  
      .catch((err)=>{
        console.error(err);
      });
    },
  },
  created(){
    setInterval(this.function, 500);
  },
  //상위 컴포넌트(HomeView)에서 받은 데이터
  props: ["isScroll", "bathImg"],
};
</script>

<style scoped>
.component {
  background: white;
}
.img_box {
  text-align: center;
}
.component hr {
  margin: 1%;
}

img {
  width: 50%;
  transition: 0.5s ease-in-out;
}
.text {
  font-size: 120%;
  font-weight: bold;
}
.Scroll {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.Scroll .img_box {
  display: inline;
}
.Scroll hr {
  display: none;
}
.Scroll img {
  width: 38%;
}
.Scroll .text {
  margin: 0 auto;
  font-size: 100%;
  font-weight: normal;
}
</style>