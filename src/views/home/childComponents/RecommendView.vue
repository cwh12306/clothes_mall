<template>
  <div class="recommend-view">
    <div
      v-for="(item, index) in recommends"
      :key="index"
      class="recommend-view-item"
    >
      <a :href="item.link"
        ><img :src="item.image" alt="" />
        <div>{{ item.title }}</div></a
      >
    </div>
  </div>
</template>
<script>
export default {
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>
<style>
.recommend-view {
  display: flex;
  padding-top: 10px;
  padding-bottom: 25px;
  text-align: center;
  font-size: 12px;
  border-bottom: 8px solid #eee;
}
.recommend-view-item {
  flex: 1;
  margin-left: 5px;
}
.recommend-view > .recommend-view-item > a > img {
  width: 23vw;
}
.recommend-view > .recommend-view-item > a > div {
  margin-top: 10px;
}
</style>
