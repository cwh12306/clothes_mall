<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import BScroll from "@better-scroll/core";
import Pullup from "@better-scroll/pull-up";
BScroll.use(Pullup);
export default {
  name: "Scroll",
  props: {
    probeType: {
      type: Number,
      default() {
        return 0;
      }
    },
    pullUpLoad: {
      type: Boolean,
      default() {
        return false;
      }
    }
  },
  mounted() {
    this.$store.state.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad
    });
    this.$store.state.scroll.on("scroll", position => {
      this.$emit("b-scroll", position);
    });
    //上拉加载更多
    this.$store.state.scroll.on("pullingUp", () => {
      this.$emit("touchBottom");
      this.$store.state.scroll.finishPullUp();
    });
  },
  methods: {
    scrollTo(x, y, time = 500) {
      this.$store.state.scroll.scrollTo(x, y, time);
    },
    refresh() {
      this.$store.state.scroll.refresh();
    }
  }
};
</script>
<style scoped></style>
