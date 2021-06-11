<template>
  <div class="goods-list-item">
    <img :src="goodItemInfo.show.img" alt="" />
    <div>
      <span class="GoodsListItemTitle">{{ goodItemInfo.title }}</span>
      <span class="GoodsListItemPrice">{{ goodItemInfo.price }}</span>
      <span
        class="GoodsListItemStar"
        @click="starItem"
        :class="{ stared: isStared }"
        ><i class="far fa-star" v-if="!isStared"></i
        ><i class="fas fa-star" v-else> </i>
      </span>
      <span class="GoodsListItemCfav">{{ goodItemInfo.cfav }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "GoodsListItem",
  data() {
    return {
      isStared: false
    };
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
    starItem() {
      this.isStared = !this.isStared;
      if (this.isStared) {
        this.goodItemInfo.cfav = parseInt(this.goodItemInfo.cfav) + 1;
      } else {
        this.goodItemInfo.cfav = parseInt(this.goodItemInfo.cfav) - 1;
      }
    }
  }
};
</script>
<style>
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
.stared {
  color: var(--color-high-text);
}
</style>
