<template>
  <div class="box">
    <div class="title">
      <div class="left_box">청소 설정</div>
      <Toggle v-model="value" class="right_box" />
    </div>
    <div style="height: auto; min-height: 150px">
      <scroll-picker
        :options="options"
        v-model="selections"
        style="width: 25%"
        class="left_box scrollpicker"
      />
      <span class="second">초</span>
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
.second {
  line-height: 900%;
}

.scrollpicker {
  z-index: 0;
}
</style>