<template>
  <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
</template>
  
  <script>
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);
var washAvg = [5, 20, 12, 10, 10];

export default {
  name: "BarChart",
  components: { Bar },
  data() {
    return {
      chartData: {
        labels: ["전체", "최근 1년", "3월", "4월", "이번달(5월)"],
        datasets: [
          {
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            pointBackgroundColor: "white",
            borderWidth: 1,
            borderColor: "rgb(75, 192, 192)",
            borderRadius: 5,
            data: washAvg,
          },
        ],
      },
      chartOptions: {
        maxBarThickness: 10,
        scales: {
          x: {
            grid: {
              display: false,
            },
          },
          y: {
            grid: {
              display: false,
            },
          },
        },
        plugins: {
          title: {
            display: true,
            text: "평균 목욕 횟수",
          },
          legend: {
            display: false,
          },
          tooltip: {
            boxWidth: 15,
          },
        },
        responsive: true, //사이즈 자동 맞춤
      },
    };
  },
};
</script>