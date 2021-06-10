<template>
  <tab-bar>
    <tab-bar-item link="/home" activeColor="#E67D8F" activeBgColor="white">
      <template v-slot:item-icon>
        <div>
          <i class="fas fa-house-user"></i></div
      ></template>
      <template v-slot:item-text>
        <div>
          首页
        </div></template
      >
    </tab-bar-item>
    <tab-bar-item link="/category" activeColor="#E67D8F" activeBgColor="white">
      <template v-slot:item-icon>
        <div>
          <i class="fas fa-shopping-basket"></i></div
      ></template>
      <template v-slot:item-text>
        <div>
          分类
        </div></template
      ></tab-bar-item
    >
    <tab-bar-item link="/cart" activeColor="#E67D8F" activeBgColor="white">
      <template v-slot:item-icon>
        <div>
          <i class="fas fa-shopping-cart"></i></div
      ></template>
      <template v-slot:item-text>
        <div>
          购物车
        </div></template
      ></tab-bar-item
    >
    <tab-bar-item link="/profile" activeColor="#E67D8F" activeBgColor="white">
      <template v-slot:item-icon>
        <div>
          <i class="fas fa-user-circle"></i></div
      ></template>
      <template v-slot:item-text>
        <div>
          我的
        </div></template
      ></tab-bar-item
    >
  </tab-bar>
</template>
<script>
import TabBar from "$components/common/tabbar/TabBar.vue";
import TabBarItem from "$components/common/tabbar/TabBarItem.vue";
export default {
  name: "App",
  components: {
    TabBar,
    TabBarItem
  }
};
</script>
