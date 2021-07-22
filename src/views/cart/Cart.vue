<template>
  <div class="cart">
    <nav-bar class="cart-nav"
      ><template v-slot:center
        ><div>购物街({{ length }})</div></template
      ></nav-bar
    >

    <Scroll class="cart-content" ref="scroll"> <cart-list /></Scroll>
    <cart-bottom-bar />
  </div>
</template>

<script>
import NavBar from "$components/common/navbar/NavBar";
import CartList from "./childComponents/CartList.vue";
import Scroll from "$components/common/bscroll/Scroll";
import CartBottomBar from "./childComponents/CartBottomBar.vue";
import { mapGetters } from "vuex";
export default {
  name: "Cart",
  components: {
    NavBar,
    CartList,
    Scroll,
    CartBottomBar
  },
  computed: {
    ...mapGetters({ length: "cartLength", list: "cartList" })
  },
  activated() {
    this.$refs.scroll.refresh();
  }
};
</script>

<style scoped>
.cart-nav {
  background: var(--color-tint);
  color: #fff;
}
.cart {
  height: 100vh;
}
.cart-content {
  height: calc(100% - 133px);
  overflow: hidden;
}
</style>
