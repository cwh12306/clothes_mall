<template>
  <div class="detail">
    <detail-nav-bar
      class="detail-nav-bar"
      @navChange="scrollToCorrectPosition"
      ref="detailNavBar"
    />
    <Scroll
      class="detail-content"
      ref="scroll"
      :probeType="3"
      @b-scroll="listenScroll"
    >
      <detail-swiper :swiperImages="topImages" />
      <detail-base-info :goods="goods" />
      <detail-shop-info :shop="shop" />
      <detail-goods-info :detailInfo="detailInfo" @imageLoad="imageLoad" />
      <detail-param-info :paramInfo="paramInfo" ref="param" />
      <detail-comment-info :commentInfo="commentInfo" ref="comment" />
      <goods-list :goodsListInfo="recommendList" ref="recommend" />
    </Scroll>
    <back-top @click.native="backToTop" v-show="isShow" />
    <detail-bottom-bar @addToCart="addCart" />
  </div>
</template>

<script>
import DetailNavBar from "./childComponents/DetailNavBar.vue";
import DetailSwiper from "./childComponents/DetailSwiper.vue";
import DetailBaseInfo from "./childComponents/DetailBaseInfo.vue";
import DetailShopInfo from "./childComponents/DetailShopInfo.vue";
import DetailGoodsInfo from "./childComponents/DetailGoodsInfo.vue";
import DetailParamInfo from "./childComponents/DetailParamInfo.vue";
import DetailCommentInfo from "./childComponents/DetailCommentInfo.vue";
import DetailBottomBar from "./childComponents/DetailBottomBar.vue";
import Scroll from "$components/common/bscroll/Scroll";
import GoodsList from "$components/content/goodsList/GoodsList.vue";
import GoodsListItem from "$components/content/goodsList/GoodsListItem.vue";

import {
  getDetail,
  getDetailRecommend,
  Goods,
  Shop,
  GoodsParam
} from "$network/detail";
import { debounce } from "$common/utils.js";
import { backTopVue } from "$common/mixin.js";
export default {
  name: "Detail",
  mixins: [backTopVue],
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommendList: [],
      topYs: [],
      currentIndex: 0
    };
  },
  mounted() {
    //保存从首页跳转过来的iid
    this.iid = this.$route.params.iid;

    //请求由iid获取的商品详细数据
    getDetail(this.iid).then(result => {
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
      //保存用作展示的商品信息
      this.detailInfo = data.detailInfo;
      //保存参数信息
      this.paramInfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );
      //保存评论信息
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0];
      }
    });
    //获取推荐商品数据
    getDetailRecommend().then(result => {
      this.recommendList = result.data.list;
    });
    //图片加载完成的事件监听 使用了防抖函数
    const refresh = debounce(this.$refs.scroll.refresh, 50);
    this.$bus.$on("detailItemImageLoad", () => {
      refresh();
    });
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    GoodsList,
    GoodsListItem,
    DetailBottomBar
  },
  methods: {
    imageLoad() {
      this.$refs.scroll.refresh();
      this.topYs = [];
      //当商品详细图片信息加载完成后，把各个导航栏的具体y值加入到topYs中
      this.topYs.push(0);
      this.topYs.push(this.$refs.param.$el.offsetTop);
      this.topYs.push(this.$refs.comment.$el.offsetTop);
      this.topYs.push(this.$refs.recommend.$el.offsetTop);
      this.topYs.push(Number.MAX_VALUE);
    },
    //当点击导航栏栏目的时候，滚到对应的位置
    scrollToCorrectPosition(index) {
      this.currentIndex = index;
      this.$refs.scroll.scrollTo(0, -this.topYs[index]);
    },
    //监听滚动
    listenScroll(position) {
      //是否显示回到顶部按钮
      this.isShow = -position.y > 1000;
      //是否吸顶
      this.isFixed = -position.y > this.tabToOffsetTop;
      //如果滚到了对应的位置，就让导航栏的栏目联动显示对应栏目
      let positionY = -position.y;
      for (let i = 0; i < this.topYs.length - 1; i++) {
        if (
          this.currentIndex !== i &&
          positionY >= this.topYs[i] &&
          positionY < this.topYs[i + 1]
        ) {
          this.currentIndex = i;
          this.$refs.detailNavBar.currentIndex = this.currentIndex;
        }
      }
    },
    //加入购物车
    addCart() {
      const product = {};
      product.image = this.topImages[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.realPrice;
      product.iid = this.iid;

      this.$store.dispatch({ type: "addToCartList", product }).then(result => {
        this.$toast.show(result);
      });
    }
  }
};
</script>

<style scoped>
.detail {
  position: relative;
  z-index: 9;
  background: white;
  height: 100vh;
}
.detail-nav-bar {
  position: relative;
  z-index: 10;
  background: #fff;
}
.detail-content {
  height: calc(100% - 44px - 49px);
  overflow: hidden;
}
</style>
