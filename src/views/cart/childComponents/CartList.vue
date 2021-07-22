<template>
  <div class="cartList">
    <cart-list-item
      v-for="(item, index) in cartList"
      :key="index"
      :product="item"
    ></cart-list-item>
  </div>
</template>

<script>
import cartListItem from "./CartListItem.vue";
import { mapGetters } from "vuex";
export default {
  name: "cartList",
  computed: {
    ...mapGetters(["cartList"])
  },
  components: {
    cartListItem
  }
};
</script>

<style scoped></style>
