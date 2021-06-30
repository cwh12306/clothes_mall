<template
  ><div class="detail-bottom-bar">
    <div class="bottom-bar-icon">
      <div class="bottom-bar-customer">
        <i class="far fa-comment"></i>
        <p>客服</p>
      </div>
      <div class="bottom-bar-store">
        <i class="fas fa-store"></i>
        <p>店铺</p>
      </div>
      <div class="bottom-bar-star">
        <i class="far fa-star"></i>
        <p>收藏</p>
      </div>
    </div>
    <div class="bottom-bar-option">
      <div class="addToCart"><p>加入购物车</p></div>
      <div class="cwh-buy"><p>购买</p></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBottomBar"
};
</script>

<style scoped>
.detail-bottom-bar {
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  height: 49px;
  background: #fff;
}
.detail-bottom-bar > .bottom-bar-icon {
  margin-top: 5px;
}
.detail-bottom-bar > .bottom-bar-option {
  line-height: 49px;
}
.detail-bottom-bar > .bottom-bar-icon,
.detail-bottom-bar > .bottom-bar-option {
  display: flex;
  float: left;
  width: 50%;
  height: 100%;
  text-align: center;
}
.detail-bottom-bar > .bottom-bar-icon > div,
.detail-bottom-bar > .bottom-bar-option > div {
  flex: 1;
}
.detail-bottom-bar > .bottom-bar-icon > div > i {
  font-size: 24px;
}
.addToCart {
  background: #ffde0f;
  color: black;
}
.cwh-buy {
  background: #ff789a;
  color: white;
}
</style>
