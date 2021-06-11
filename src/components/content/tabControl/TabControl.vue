<template>
  <div>
    <div class="tab-control">
      <div
        v-for="(item, index) in title"
        :key="index"
        class="tab-control-item"
        :class="{ active: currentIndex === index }"
        @click="changeItem(index)"
      >
        <span>{{ item }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "TabControl",
  props: {
    title: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    };
  },
  methods: {
    changeItem(index) {
      this.currentIndex = index;
      this.$emit("itemChange", index);
    }
  }
};
</script>
<style>
.tab-control {
  background: #fff;
  display: flex;
  text-align: center;
  height: 50px;
  line-height: 50px;
  box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.5);
}
.tab-control > .tab-control-item {
  flex: 1;
}
.active {
  color: var(--color-high-text);
}
.active > span {
  padding: 6px;
  border-bottom: 2px solid var(--color-tint);
}
</style>
