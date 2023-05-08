<template>
    <div>
      <div>
        <Navigation/>
      </div>
    </div>
  </template>
  
  <style lang="scss">
  /* Light mode styles */
  body {
    background-color: #ffffff;
    color: #333333;
  } 
  
  /* Dark mode styles */
  .dark-mode {
    color: #ffffff;
  }
  </style>
  
  <script lang="ts">
  import Navigation from "./NavigationComponents.vue"
  export default {
    views: {
      Navigation
    }
  };
  </script>
  