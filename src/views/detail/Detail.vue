<template>
  <div class="detail">
    <detail-nav-bar />
    <detail-swiper :swiperImages="topImages" />
    <detail-base-info :goods="goods" />
    <detail-shop-info :shop="shop" />
  </div>
</template>

<script>
import DetailNavBar from "./childComponents/DetailNavBar.vue";
import DetailSwiper from "./childComponents/DetailSwiper.vue";
import DetailBaseInfo from "./childComponents/DetailBaseInfo.vue";
import DetailShopInfo from "./childComponents/DetailShopInfo.vue";

import { getDetail, Goods, Shop } from "$network/detail";
export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {}
    };
  },
  mounted() {
    //保存从首页跳转过来的iid
    this.iid = this.$route.params.iid;

    //请求由iid获取的商品详细数据
    getDetail(this.iid).then(result => {
      console.log(result);
      const data = result.result;
      this.topImages = data.itemInfo.topImages;
      //面向对象的思想，封装了一个Goods类来保存需要的商品信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      //保存商家信息
      this.shop = new Shop(data.shopInfo);
    });
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo
  }
};
</script>

<style scoped>
.detail {
  position: relative;
  z-index: 9;
  background: white;
}
</style>
