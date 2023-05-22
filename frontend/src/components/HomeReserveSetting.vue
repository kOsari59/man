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
        @update:modelValue = "update_hour"
      />
      <span class="left_box span_text">시</span>
      <scroll-picker
        :options="minuteoptions"
        v-model="minuteselections"
        class="left_box scrollpicker"
        @update:modelValue = "update_minnute"
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
  methods: {
    //상위 컴포넌트(홈 뷰)에 정보 전송
    update_minnute() {
      //지연추가
        this.$emit("update_time", this.hourselections,this.minuteselections);
    },
    update_hour() {
      //지연추가
        this.$emit("update_time", this.hourselections,this.minuteselections);
    },
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
.content_box {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3%;
}
.scrollpicker {
  z-index: 0;
  margin: 5% auto;
}
.span_text {
  font-size: 130%;
}
</style>