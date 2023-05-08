<template>
  <Bar v-if="loaded" :data="chartData" :options="chartOptions" />
</template>

<script lang="ts">
import { Bar } from 'vue-chartjs';
import axios from 'axios';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';
import moment from 'moment';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

export default {
  name: 'BarChart',
  components: { Bar },
  data() {
    return {
      loaded: false,
      chartData: {
        labels: [] as Array<string>,
        datasets: [
          {
            label: 'Jumlah Data',
            backgroundColor: 'blue',
            data: [] as Array<number>
          }
        ]
      },
      chartOptions: {
        scales: {
          y: {
            ticks: {
              precision: 0,
              beginAtZero: true,
              callback: function (value: number) { if (value % 1 === 0) { return value; } }
            }
          }
        }
      }
    };
  },
  async mounted() {
    try {
      const response = await axios.get('http://localhost:9000/api/v1/cms/users');
      const userData = response.data.data;

      const monthData = new Array(12).fill(0);

      userData.forEach((user: any) => {
        const userMonth = moment(user.createdAt).month();
        monthData[userMonth]++;
      });

      const thisMonth = moment().month();
      const monthDataCount = monthData[thisMonth];

      const monthLabels = moment.months();
      const currentMonthIndex = moment().month();
      const labels = monthLabels.slice(currentMonthIndex).concat(monthLabels.slice(0, currentMonthIndex));

      this.chartData.labels = labels;
      this.chartData.datasets[0].data = monthData.slice(currentMonthIndex).concat(monthData.slice(0, currentMonthIndex));
      this.loaded = true;
    } catch (e) {
      console.error(e);
    }
  }
};
</script>
