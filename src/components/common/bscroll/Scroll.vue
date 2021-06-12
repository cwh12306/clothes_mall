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
  data() {
    return {
      scroll: null
    };
  },
  mounted() {
    setTimeout(() => {
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad
      });
      this.scroll.on("scroll", position => {
        this.$emit("b-scroll", position);
      });
      this.scroll.on("pullingUp", () => {
        this.$emit("touchBottom");
        this.scroll.finishPullUp();
        //使BS对象刷新一下，加载了新的数据后可以继续滚动
        setTimeout(() => {
          this.scroll.refresh();
        }, 500);
      });
    }, 500);
  },
  methods: {
    scrollTo(x, y, time = 500) {
      this.scroll.scrollTo(x, y, time);
    },
    refresh() {
      this.scroll.refresh();
    }
  }
};
</script>
<style scoped></style>
