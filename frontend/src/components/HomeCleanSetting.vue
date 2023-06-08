<template>
  <div class="box">
    <div class="title">
      <div class="left_box">청소 설정</div>
      <Toggle v-model="value" class="right_box" @change="change" />
    </div>
    <div class="content_box">
      <scroll-picker
        :options="options"
        v-model="selections"
        class="scrollpicker"
        @update:modelValue = "update"
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
  methods: {
    //상위 컴포넌트(홈 뷰)에 정보 전송
    update() {
      this.$emit("cleanToggle", this.value);
      this.$emit("cleanTime", this.selections);
    },
    change(){
      this.$emit("cleanToggle", this.value);
    }
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
.second {
  font-size: 130%;
}

.scrollpicker {
  z-index: 0;
  margin-right: 5%;
}
</style>