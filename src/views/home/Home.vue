<template>
  <div id="home">
    <nav-bar class="home-nav"
      ><template v-slot:center><div>购物街</div></template></nav-bar
    ><home-swiper :banners="banners" />
    <recommend-view :recommends="recommends" />
    <feature-view />
    <tab-Control
      :title="['流行', '新款', '精选']"
      class="home-tab-control"
    ></tab-Control>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <ul>
      <li>啊</li>
      <li>啊</li>
      <li>啊</li>
      <li>啊</li>
      <li>啊</li>
      <li>啊</li>
      <li>啊</li>
      <li>啊</li>
      <li>啊</li>
      <li>啊</li>
      <li>啊</li>
      <li>啊</li>
      <li>啊</li>
      <li>啊</li>
      <li>啊</li>
      <li>啊</li>
      <li>啊</li>
      <li>啊</li>
      <li>啊</li>
      <li>啊</li>
      <li>啊</li>
      <li>啊</li>
      <li>啊</li>
      <li>啊</li>
      <li>啊</li>
      <li>啊</li>
      <li>啊</li>
      <li>啊</li>
      <li>啊</li>
      <li>啊</li>
      <li>啊</li>
      <li>啊</li>
      <li>啊</li>
      <li>啊</li>
      <li>啊</li>
      <li>啊</li>
      <li>啊</li>
      <li>啊</li>
      <li>啊</li>
      <li>啊</li>
      <li>啊</li>
      <li>啊0</li>
    </ul>
  </div>
</template>
<script>
import HomeSwiper from "./childComponents/HomeSwiper";
import RecommendView from "./childComponents/RecommendView";
import FeatureView from "./childComponents/FeatureView";

import NavBar from "$components/common/navbar/NavBar";
import TabControl from "$components/content/tabControl/TabControl";

import { getHomeMultiData } from "$network/home";

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl
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
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 9;
}
.home-tab-control {
  position: sticky;
  top: 44px;
}
</style>
