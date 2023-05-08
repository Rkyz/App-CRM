<template>
  <div>
    <Pie :data="chartData" :options="options" />
  </div>
</template>

<script lang="ts">
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'vue-chartjs'

ChartJS.register(ArcElement, Tooltip, Legend)

export default {
  name: 'App',
  components: {
    Pie
  },
  data(): any {
    return {
      chartData: {
        labels: ['Admin', 'User'],
        datasets: [
          {
            backgroundColor: ['blue', 'red'],
            data: [10,0]
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      },
      data: [],
      adminPercentage: 0,
      userPercentage: 0
    }
  },
  async mounted() {
    await this.fetchData()
    const total = this.data.length
    const adminCount = this.data.filter((item: { role: string }) => item.role === 'admin').length
    const userCount = this.data.filter((item: { role: string }) => item.role === 'user').length
    const { adminPercentage, userPercentage } = this.calculatePercentage(adminCount, userCount, total)
    this.adminPercentage = adminPercentage
    this.userPercentage = userPercentage
    this.chartData.datasets[0].data = [this.adminPercentage, this.userPercentage]
    this.renderChart(this.chartData, this.options) // menambahkan renderChart di sini
  },
  methods: {
    async fetchData() {
      try {
        const response = await fetch('http://localhost:9000/api/v1/cms/users')
        const json = await response.json()
        this.data = json.data
      } catch (error) {
        console.error(error)
      }
    },
    calculatePercentage(adminCount: number, userCount: number, total: number) {
      const adminPercentage = ((adminCount / total) * 100).toFixed(2)
      const userPercentage = ((userCount / total) * 100).toFixed(2)
      return {
        adminPercentage: Number(adminPercentage),
        userPercentage: Number(userPercentage)
      }
    }
  },
}
</script>
