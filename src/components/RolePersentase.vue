<template>
    <div>
      <ul>
        <li>
          Admin: {{ adminPercentage }}%
          <div class="bar-container">
            <div class="bar" :style="{ width: adminPercentage + '%' }"></div>
          </div>
        </li>
        <li>
          User: {{ userPercentage }}%
          <div class="bar-container">
            <div class="bar" :style="{ width: userPercentage + '%' }"></div>
          </div>
        </li>
      </ul>
    </div>
  </template>
  
  <script lang="ts">
  export default {
    data() {
      return {
        data: []
      }
    },
    computed: {
      adminPercentage() {
        const total = this.data.length
        const adminCount = this.data.filter(item => item.role === 'admin').length
        return ((adminCount / total) * 100).toFixed(2)
      },
      userPercentage() {
        const total = this.data.length
        const userCount = this.data.filter(item => item.role === 'user').length
        return ((userCount / total) * 100).toFixed(2)
      }
    },
    async mounted() {
      try {
        const response = await fetch('http://localhost:9000/api/v1/cms/users') // Ganti dengan URL API yang sesuai
        const json = await response.json()
        this.data = json.data
      } catch (error) {
        console.error(error)
      }
    }
  }
  </script>
  
  <style>
  .bar-container {
    background-color: #eee;
    height: 20px;
    margin-top: 5px;
  }
  
  .bar {
    background-color: #007bff;
    height: 100%;
    transition: width 0.3s ease-in-out;
  }
  </style>
  