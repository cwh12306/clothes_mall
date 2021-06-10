<template>
  <div class="tab-bar-item" @click="routeView" :style="activeStyle">
    <slot name="item-icon"></slot>
    <slot name="item-text"></slot>
  </div>
</template>
<script>
export default {
  name: "TabBarItem",
  props: {
    link: String,
    activeColor: {
      type: String,
      default() {
        return "white";
      },
    },
    activeBgColor: {
      type: String,
      default() {
        return "black";
      },
    },
  },
  computed: {
    isActive() {
      return !this.$route.path.indexOf(this.link);
    },
    activeStyle() {
      return this.isActive
        ? { color: this.activeColor, background: this.activeBgColor }
        : {};
    },
  },
  methods: {
    routeView() {
      if (this.$route.path != this.link) {
        this.$router.replace(this.link);
      }
    },
  },
};
</script>
<style>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tab-bar-item i {
  font-size: 22px;
  margin-top: 5px;
}
</style>
