<template>
  <div class="box">
    <div class="title">
      <div class="left_box">예약 설정</div>
      <Toggle v-model="value" class="right_box" />
    </div>
    <div>
      <scroll-picker :options="options" v-model="selections" />
    </div>
  </div>
</template>
<script>
import "@vueform/toggle/themes/default.css";
import { defineComponent, reactive, toRefs } from "vue";

const scrollpickerOptions = [
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
      options: scrollpickerOptions,
      selections: [0, 30],
      value: true,
    });
    return {
      ...toRefs(state),
    };
  },
});
</script>
<style scoped>
.box {
  border-radius: 5%;
  background-color: white;
  margin: 3px;
  padding: 8px;
}
.title {
  height: 30px;
  font-size: 20px;
  font-weight: bold;
}
.left_box {
  float: left;
}
.right_box {
  float: right;
}
</style>