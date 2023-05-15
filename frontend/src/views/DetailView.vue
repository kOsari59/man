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

  methods: {
    coldWater: function () {
      console.log("냉수");
    },
    hotWater: function () {
      console.log("온수");
    },
    clean: function () {
      console.log("청소");
    },
    cap: function () {
      console.log("cap");
    },
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