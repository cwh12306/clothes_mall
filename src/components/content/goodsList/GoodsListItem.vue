<template>
  <div class="goods-list-item" @click="itemClick">
    <img :src="goodItemInfo.show.img" alt="" @load="imageLoaded" />
    <div>
      <span class="GoodsListItemTitle">{{ goodItemInfo.title }}</span>
      <span class="GoodsListItemPrice">{{ goodItemInfo.price }}</span>
      <span class="GoodsListItemStar"><i class="far fa-star"></i> </span>
      <span class="GoodsListItemCfav">{{ goodItemInfo.cfav }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "GoodsListItem",
  data() {
    return {};
  },
  props: {
    goodItemInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    imageLoaded() {
      //防抖函数，防止每张图片加载完都执行一次refresh。提高性能。
      clearTimeout(this.$store.state.timer);
      this.$store.state.timer = setTimeout(() => {
        this.$store.state.scroll.refresh();
      }, 200);
    },
    itemClick() {
      this.$router.push("/detail/" + this.goodItemInfo.iid);
    }
  }
};
</script>
<style scoped>
.goods-list-item {
  width: 48%;
  padding: 2px;
}
.goods-list-item > img {
  width: 100%;
  border-radius: 5px;
}
.goods-list-item > div {
  font-size: 12px;
  text-align: center;
}
.goods-list-item > div > .GoodsListItemTitle {
  display: block;
  width: 100%;
  height: 50%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.goods-list-item > div > .GoodsListItemPrice {
  color: var(--color-high-text);
}
.goods-list-item > div > .GoodsListItemStar {
  font-size: 16px;
  margin: 0 4px;
}
</style>
