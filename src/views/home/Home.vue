<template>
  <div id="home">
    <nav-bar class="home-nav"
      ><template v-slot:center><div>购物街</div></template></nav-bar
    >
    <Scroll
      class="content"
      ref="scroll"
      @b-scroll="toggleBackTop"
      @touchBottom="getHomeData(currentType)"
      :probeType="3"
      :pullUpLoad="true"
      ><home-swiper :banners="banners"/>
      <recommend-view :recommends="recommends"/>
      <feature-view />
      <tab-Control
        :title="['流行', '新款', '精选']"
        class="home-tab-control"
        @itemChange="itemChange"
      ></tab-Control>
      <goods-list
        :goodsListInfo="goods['pop'].list"
        v-show="currentType === 'pop'"/>
      <goods-list
        :goodsListInfo="goods['new'].list"
        v-show="currentType === 'new'"/>
      <goods-list
        :goodsListInfo="goods['sell'].list"
        v-show="currentType === 'sell'"
    /></Scroll>
    <back-top @click.native="backToTop" v-show="isShow" />
  </div>
</template>
<script>
import HomeSwiper from "./childComponents/HomeSwiper";
import RecommendView from "./childComponents/RecommendView";
import FeatureView from "./childComponents/FeatureView";

import NavBar from "$components/common/navbar/NavBar";
import TabControl from "$components/content/tabControl/TabControl";
import GoodsList from "$components/content/goodsList/GoodsList";
import Scroll from "$components/common/bscroll/Scroll";
import BackTop from "$components/content/backtop/BackTop";

import { getHomeMultiData, getHomeData } from "$network/home";

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: "pop",
      isShow: false
    };
  },
  created() {
    this.getHomeMultiData();
    this.getHomeData("pop");
    this.getHomeData("new");
    this.getHomeData("sell");
  },
  methods: {
    /*网络请求相关方法 */
    getHomeMultiData() {
      getHomeMultiData().then(result => {
        this.banners = result.data.banner.list;
        this.recommends = result.data.recommend.list;
      });
    },
    getHomeData(type) {
      let page = this.goods[type].page + 1;
      getHomeData(type, page).then(result => {
        this.goods[type].list.push(...result.data.list);
        this.goods[type].page += 1;
      });
    },
    /*事件监听相关方法 */
    itemChange(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      this.$refs.scroll.refresh();
    },
    backToTop() {
      this.$refs.scroll.scrollTo(0, 0);
    },
    toggleBackTop(position) {
      this.isShow = -position.y > 1000;
    }
  }
};
</script>
<style scoped>
#home {
  position: relative;
  height: 100vh;
}
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
.content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden;
}
/*.content {
  overflow: hidden;
  height: calc(100% - 93px);
  margin-top: 44px;
} */
</style>
