<template>
  <div class="box">
    <div class="title">
      <div class="left_box">청소 설정</div>
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
      label: "10",
      value: 10,
    },
    {
      label: "20",
      value: 20,
    },
    {
      label: "30",
      value: 30,
    },
    {
      label: "40",
      value: 40,
    },
    {
      label: "50",
      value: 50,
    },
    {
      label: "60",
      value: 60,
    },
    {
      label: "70",
      value: 70,
    },
    {
      label: "80",
      value: 80,
    },
    {
      label: "90",
      value: 90,
    },
  ],
];

export default defineComponent({
  setup() {
    const state = reactive({
      options: scrollpickerOptions,
      selections: [30],
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