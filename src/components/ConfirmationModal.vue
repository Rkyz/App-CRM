// ConfirmationModal.vue
<template>
  <div class="modal">
    <div class="modal-content">
      <p>{{ message }}</p>
      <button @click="confirm">OK</button>
      <button @click="cancel">Cancel</button>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    message: String,
  },
  methods: {
    confirm() {
      this.$emit("confirm");
    },
    cancel() {
      this.$emit("cancel");
    },
  },
};
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
