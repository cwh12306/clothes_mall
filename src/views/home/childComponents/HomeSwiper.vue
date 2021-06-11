<template>
  <div>
    <div class="swiper">
      <swiper>
        <swiper-item v-for="(item, index) in banners" :key="index">
          <a :href="item.link">
            <img :src="item.image" alt="" />
          </a>
        </swiper-item>
      </swiper>
    </div>
  </div>
</template>
<script>
import { Swiper, SwiperItem } from "$components/common/swiper";
export default {
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    Swiper,
    SwiperItem
  }
};
</script>
<style>
.swiper {
  padding-top: 22px;
}
</style>
