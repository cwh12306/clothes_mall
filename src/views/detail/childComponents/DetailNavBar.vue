<template>
  <div class="detailNavBar">
    <nav-bar
      ><template v-slot:left
        ><div class="detail-nav-left" @click="backTo">
          <i class="fas fa-chevron-left"></i>
        </div> </template
      ><template v-slot:center
        ><div class="detail-nav-center">
          <div
            :class="{ active: currentIndex === index }"
            class="detail-nav-item"
            v-for="(item, index) in titles"
            :key="index"
            @click="detailItemChange(index)"
          >
            {{ item }}
          </div>
        </div>
      </template></nav-bar
    >
  </div>
</template>

<script>
import NavBar from "$components/common/navbar/NavBar";

export default {
  name: "DetailNavBar",
  components: {
    NavBar
  },
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0
    };
  },
  methods: {
    detailItemChange(index) {
      this.currentIndex = index;
      this.$emit("navChange", index);
    },
    backTo() {
      this.$router.back();
    }
  }
};
</script>

<style scoped>
.detail-nav-center {
  display: flex;
  font-size: 12px;
}
.detail-nav-item {
  flex: 1;
}
.active {
  color: var(--color-tint);
}
</style>
