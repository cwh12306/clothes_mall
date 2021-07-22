<template>
  <div class="cart-bottom-bar">
    <div class="allCheck">
      <check-button
        :isChecked="isSelectAll"
        @click.native="clickAllButton"
      /><span>全选</span><span>合计:￥{{ totalPrice }}</span>
    </div>
    <div class="goPay">
      <p>去计算({{ checkedLength }})</p>
    </div>
  </div>
</template>

<script>
import CheckButton from "$components/content/checkButton/CheckButton.vue";
import { mapGetters } from "vuex";
export default {
  name: "CartBottomBar",
  components: { CheckButton },
  computed: {
    ...mapGetters(["cartList"]),
    totalPrice() {
      return this.cartList
        .filter(item => {
          return item.checked;
        })
        .reduce((previouVal, currentVal) => {
          return previouVal + currentVal.count * currentVal.price;
        }, 0)
        .toFixed(2);
    },
    checkedLength() {
      return this.cartList.filter(item => {
        return item.checked;
      }).length;
    },
    isSelectAll() {
      if (this.cartList.length === 0) return false;
      return !this.cartList.find(item => !item.checked);
    }
  },
  methods: {
    clickAllButton() {
      if (this.isSelectAll) {
        this.cartList.forEach(item => (item.checked = false));
      } else {
        this.cartList.forEach(item => (item.checked = true));
      }
    }
  }
};
</script>

<style scoped>
.cart-bottom-bar {
  height: 40px;
  width: 100%;
  background: #eeeeee;
  position: fixed;
  bottom: 49px;
}
.allCheck {
  margin-left: 20px;
  display: flex;
  align-items: center;
  height: 100%;
}
.allCheck > span:nth-of-type(1) {
  margin: 0 15px 0 5px;
  transform: scale(0.8);
}
.allCheck > span:nth-of-type(2) {
  color: black;
}
.goPay {
  background: #ff5100;
  height: 100%;
  width: 28%;
  position: absolute;
  right: 0;
  top: 0;
  text-align: center;
  line-height: 40px;
  color: white;
}
</style>
