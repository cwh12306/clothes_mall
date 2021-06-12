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
  props: {
    probeType: {
      type: Number,
      default() {
        return 0;
      }
    }
  },
  data() {
    return {
      scroll: null
    };
  },
  mounted() {
    setTimeout(() => {
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        probeType: this.probeType
      });
      this.scroll.on("scroll", position => {
        this.$emit("b-scroll", position);
      });
    }, 500);
  },
  methods: {
    scrollTo(x, y, time = 500) {
      this.scroll.scrollTo(x, y, time);
    }
  }
};
</script>
<style scoped></style>
