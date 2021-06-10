<template>
  <div id="home">
    <nav-bar class="home-nav"
      ><template v-slot:center><div>购物街</div></template></nav-bar
    ><home-swiper :banners="banners" />
    <recommend-view :recommends="recommends" />
  </div>
</template>
<script>
import NavBar from "$components/common/navbar/NavBar";
import HomeSwiper from "./childComponents/HomeSwiper";
import RecommendView from "./childComponents/RecommendView";

import { getHomeMultiData } from "$network/home";

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    RecommendView
  },
  data() {
    return {
      banners: [],
      recommends: []
    };
  },
  created() {
    getHomeMultiData().then(result => {
      this.banners = result.data.banner.list;
      this.recommends = result.data.recommend.list;
    });
  }
};
</script>
<style>
.home-nav {
  background-color: var(--color-tint);
  color: white;
}
</style>
