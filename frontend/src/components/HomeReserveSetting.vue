<template>
  <div class="box">
    <div class="title">
      <div class="left_box">예약 설정</div>
      <Toggle v-model="value" class="right_box" />
    </div>
    <div style="min-height: 150px">
      <scroll-picker
        :options="houroptions"
        v-model="hourselections"
        class="left_box scrollpicker"
      />
      <span class="left_box span_text">시</span>
      <scroll-picker
        :options="minuteoptions"
        v-model="minuteselections"
        class="left_box scrollpicker"
      />
      <span class="left_box span_text">분 후</span>
    </div>
  </div>
</template>
<script>
import "@vueform/toggle/themes/default.css";
import { defineComponent, reactive, toRefs } from "vue";

const spHourOptions = [
  [
    {
      label: "0",
      value: 0,
    },
    {
      label: "1",
      value: 1,
    },
    {
      label: "2",
      value: 2,
    },
    {
      label: "3",
      value: 3,
    },
    {
      label: "4",
      value: 4,
    },
    {
      label: "5",
      value: 5,
    },
    {
      label: "6",
      value: 6,
    },
  ],
];
const spMinuteOptions = [
  [
    {
      label: "5",
      value: 5,
    },
    {
      label: "10",
      value: 10,
    },
    {
      label: "15",
      value: 15,
    },
    {
      label: "20",
      value: 20,
    },
    {
      label: "25",
      value: 25,
    },
    {
      label: "30",
      value: 30,
    },
    {
      label: "35",
      value: 35,
    },
    {
      label: "40",
      value: 40,
    },
    {
      label: "45",
      value: 45,
    },
    {
      label: "50",
      value: 50,
    },
    {
      label: "55",
      value: 55,
    },
    {
      label: "60",
      value: 60,
    },
  ],
];
export default defineComponent({
  setup() {
    const state = reactive({
      houroptions: spHourOptions,
      hourselections: [0],
      minuteoptions: spMinuteOptions,
      minuteselections: [30],
      value: true,
    });
    return {
      ...toRefs(state),
    };
  },
});
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
.span_text {
  line-height: 150px;
}
.scrollpicker {
  z-index: 0;
}
</style>