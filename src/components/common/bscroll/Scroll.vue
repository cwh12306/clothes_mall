<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import BScroll from "@better-scroll/core";
export default {
  name: "Scroll",
  data() {
    return { scroll: null };
  },
  mounted() {
    setTimeout(() => {
      this.scroll = new BScroll(this.$refs.wrapper, { click: true });
    }, 1000);
  }
};
</script>
<style scoped></style>
