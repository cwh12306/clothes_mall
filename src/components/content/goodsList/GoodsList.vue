<template>
  <div class="goods-list">
    <goods-list-item
      v-for="(item, index) in goodsListInfo"
      :key="index"
      :goodItemInfo="item"
    />
  </div>
</template>
<script>
import GoodsListItem from "$components/content/goodsList/GoodsListItem";
export default {
  name: "GoodsList",
  props: {
    goodsListInfo: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    GoodsListItem
  }
};
</script>
<style scoped>
.goods-list {
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
