<template>
    <div>
      <h2>Edit User</h2>
      <form @submit.prevent="submitForm">
        <div>
          <label>Name</label>
          <input type="text" v-model="user.name" />
        </div>
        <div>
          <label>Email</label>
          <input type="email" v-model="user.email" />
        </div>
        <div>
          <button type="submit">Save</button>
        </div>
      </form>
    </div>
  </template>
  
  <script lang="ts">
  export default {
    props: ['user'],
    methods: {
      submitForm() {
        this.$emit('save', this.user);
      },
    },
  };
  </script>
  