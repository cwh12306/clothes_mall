<template>
  <div class="check-button" :class="{ active: isChecked }">
    <i class="fas fa-check" v-show="isChecked"></i>
  </div>
</template>
<script>
export default {
  name: "CheckButton",
  props: {
    isChecked: {
      type: Boolean,
      default() {
        return false;
      }
    }
  }
};
</script>
<style scoped>
.check-button {
  width: 20px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  font-size: 14px;
  border: 1px solid #a4b0be;
  border-radius: 10px;
  color: white;
}
.active {
  background: #ff6b81;
}
</style>
