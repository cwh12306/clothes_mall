<template>
  <swiper class="detail-swiper">
    <swiper-item
      class="detail-swiper-item"
      v-for="(item, index) in swiperImages"
      :key="index"
    >
      <img :src="item" alt="" />
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "$components/common/swiper";
export default {
  name: "DetailSwiper",
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    swiperImages: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style scoped>
.detail-swiper {
  height: 400px;
  overflow: hidden;
}
</style>
