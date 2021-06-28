<template>
  <div id="home">
    <nav-bar class="home-nav"
      ><template v-slot:center><div>购物街</div></template></nav-bar
    >
    <tab-Control
      :title="['流行', '新款', '精选']"
      @itemChange="itemChange"
      ref="tabControl1"
      class="tabSticky"
      v-show="isFixed"
    ></tab-Control>
    <Scroll
      class="content"
      ref="scroll"
      @b-scroll="listenScroll"
      @touchBottom="getHomeData(currentType)"
      :probeType="3"
      :pullUpLoad="true"
      ><home-swiper :banners="banners" @swiperImageLoaded="swiperImageLoaded" />
      <recommend-view :recommends="recommends" />
      <feature-view />
      <tab-Control
        :title="['流行', '新款', '精选']"
        @itemChange="itemChange"
        ref="tabControl2"
      ></tab-Control>
      <goods-list :goodsListInfo="goods[currentType].list" />
    </Scroll>
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
      isShow: false,
      isFixed: false,
      tabToOffsetTop: 0
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
    //点击触控栏切换栏目
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
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
    //回到顶部
    backToTop() {
      this.$refs.scroll.scrollTo(0, 0);
    },
    //监听页面滚动到的位置
    listenScroll(position) {
      //是否显示回到顶部按钮
      this.isShow = -position.y > 1000;
      //是否吸顶
      this.isFixed = -position.y > this.tabToOffsetTop;
    },
    //当轮播图的图片加载完成后，实现触控栏吸顶效果
    swiperImageLoaded() {
      this.tabToOffsetTop = this.$refs.tabControl2.$el.offsetTop;
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
  /*由于使用了better-scroll，导航组件在Bscroll滚动区域外即可实现不随页面滚动而滚动的效果 */
  /*  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 9;*/
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
.tabSticky {
  position: relative;
  z-index: 10;
}
</style>
