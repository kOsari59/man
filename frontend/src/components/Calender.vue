<template>
  <div>
    <!-- https://vcalendar.io/getting-started/installation.html -->
    <Calendar expanded :attributes="attr"> </Calendar>
  </div>
</template>
<script>
import { Calendar } from "v-calendar";
import "v-calendar/style.css";

export default {
  components: {
    Calendar,
  },
  props: ["attr", "historyItems"],
};
</script>
<style>
.vc-container .vc-weekday-1 {
  color: #f93a3a;
}
.vc-container .vc-weekday-7 {
  color: #6366f1;
}
</style>