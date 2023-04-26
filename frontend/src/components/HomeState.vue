<template>
  <div>
    <p>물 온도 {{ temp }} °C</p>
    <p>물 높이 {{ waterlevel }} %</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      temp: 50,
      waterlevel: 80,
    };
  },
};
</script>
<style scoped>
div {
  background-color: blue;
}
</style>