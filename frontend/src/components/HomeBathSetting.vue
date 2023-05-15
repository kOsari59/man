<template>
  <div class="box">
    <div class="title">목욕 설정</div>

    <div id="TempSetting">
      <div style="height: 30px">
        <div class="left_box">목욕 온도</div>
        <div class="right_box">{{ tempvalue }}도</div>
      </div>
      <vue-slider
        class="slider"
        v-model="tempvalue"
        :min="35"
        :max="45"
        :interval="1"
      />
    </div>

    <div id="LevelSetting">
      <div style="height: 30px">
        <div class="left_box">물 높이</div>
        <div class="right_box">{{ levelvalue }}%</div>
      </div>
      <vue-slider
        class="slider"
        v-model="levelvalue"
        :min="30"
        :max="100"
        :interval="10"
      />
    </div>
  </div>
</template>
<script>
import { reactive, toRefs } from "vue";
import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/default.css";

export default {
  components: {
    VueSlider,
  },
  setup() {
    //슬라이더의 값(목욕 온도, 물 높이) 외부로 값을 빼야함

    const data = reactive({ tempvalue: 40, levelvalue: 80 });
    return toRefs(data);
  },
};
</script>
<style scoped>
.title {
  height: 10%;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 5%;
}

.left_box {
  float: left;
}
.right_box {
  float: right;
}

#TempSetting {
  margin: 3.7%;
}

#LevelSetting {
  margin: 3.7%;
}
.slider {
  z-index: 0;
}
</style>