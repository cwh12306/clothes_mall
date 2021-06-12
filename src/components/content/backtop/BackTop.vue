<template>
  <div class="arrow-wrapper"><i class="fas fa-arrow-up"></i></div>
</template>
<script>
export default {
  name: "BackTop"
};
</script>
<style scoped>
.arrow-wrapper {
  position: fixed;
  z-index: 9;
  height: 40px;
  width: 40px;
  border-radius: 20px;
  font-size: 20px;
  text-align: center;
  line-height: 40px;
  background: white;
  bottom: 55px;
  right: 5px;
  color: var(--color-tint);
}
</style>
