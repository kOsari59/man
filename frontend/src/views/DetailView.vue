<template>
  <div class="">
    <h1>상세 기능</h1>

    <!--buttons-->
    <div>
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